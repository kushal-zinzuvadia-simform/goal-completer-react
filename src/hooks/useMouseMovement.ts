import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
  type MouseEvent,
} from 'react';

export const useMouseMovement = (
  trackRef: RefObject<HTMLDivElement | null>,
  updateGlobalState: (value: number) => void
) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const isDraggingRef = useRef<boolean>(false);

  const updateProgress = useCallback(
    (clientX: number) => {
      if (!trackRef.current) return;

      const rect = trackRef.current.getBoundingClientRect();
      let newProgress = ((clientX - rect.left) / rect.width) * 100;
      newProgress = Math.max(0, Math.min(100, newProgress));

      updateGlobalState(Math.round(newProgress));
    },
    [trackRef, updateGlobalState]
  );

  const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    updateProgress(e.clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (!isDraggingRef.current) return;
      updateProgress(e.clientX);
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [updateProgress]);

  return {
    isDragging,
    onMouseDown,
  };
};
