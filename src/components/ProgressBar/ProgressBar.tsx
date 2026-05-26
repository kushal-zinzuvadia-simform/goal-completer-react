import './ProgressBar.css';
import { useMouseMovement } from '../../hooks/useMouseMovement';
import { useRef } from 'react';

type ProgressBarProps = {
  progress: number;
  setProgress: (value: number) => void;
};

export const ProgressBar = ({ progress, setProgress }: ProgressBarProps) => {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const { isDragging, onMouseDown } = useMouseMovement(trackRef, setProgress);

  return (
    <div className="goal-data">
      <div className="bar" ref={trackRef}>
        <div className="progress" style={{ width: `${progress}%` }} />

        <div
          className={`scroller ${isDragging ? 'dragging' : ''}`}
          onMouseDown={onMouseDown}
          style={{
            left: `calc(${progress}% - 10px)`,
          }}
        />
      </div>

      <div>{progress}%</div>
    </div>
  );
};
