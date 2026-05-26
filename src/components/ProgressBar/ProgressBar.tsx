import './ProgressBar.css';
import { useMouseMovement } from '../../hooks/useMouseMovement';
import { useRef } from 'react';

export const ProgressBar = () => {
  const trackRef = useRef(null);

  const { progress, isDragging, onMouseDown } = useMouseMovement(trackRef);

  return (
    <>
      <div className="bar" ref={trackRef}>
        <div
          className="progress"
          style={{ width: `${progress}%` }}
        />

        <div
          className={`scroller ${isDragging ? 'dragging' : ''}`}
          onMouseDown={onMouseDown}
          style={{
            left: `calc(${progress}% - 10px)`,
          }}
        />
      </div>

      <div>{progress}%</div>
    </>
  );
};
