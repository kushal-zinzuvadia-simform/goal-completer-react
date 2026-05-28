import { useRef } from 'react';
import './ProgressBar.css';
import { useMouseMovement } from '../../hooks/useMouseMovement';
import { ProgressDisplay } from '../ProgressDisplay/ProgressDisplay';

type ProgressBarProps = {
  progress: number;
  setProgress: (value: number) => void;
};

export const ProgressBar = ({ progress, setProgress }: ProgressBarProps) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const { isDragging, onMouseDown } = useMouseMovement(trackRef, setProgress);

  return (
    <ProgressDisplay
      progress={progress}
      trackRef={trackRef}
      onMouseDown={onMouseDown}
      scrollerClassName={isDragging ? 'dragging' : ''}
    />
  );
};
