import { useCallback, useEffect, useState } from 'react';

export const useMouseMovement = (trackRef, updateGlobalState) => {
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const updateProgress = useCallback(
    (clientX) => {
      if (!trackRef.current) return;

      const rect = trackRef.current.getBoundingClientRect();

      let newProgress = ((clientX - rect.left) / rect.width) * 100;

      newProgress = Math.max(0, Math.min(100, newProgress));

      setProgress(Number(newProgress.toFixed()));
      updateGlobalState(Number(newProgress.toFixed()));
    },
    [trackRef, updateGlobalState]
  );

  const onMouseDown = (e) => {
    setIsDragging(true);
    updateProgress(e.clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;

      updateProgress(e.clientX);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, updateProgress]);

  return {
    progress,
    isDragging,
    onMouseDown,
  };
};
