import { useRef } from 'react';
import '../ProgressBar/ProgressBar.css';

export const MainGoal = ({ progress }) => {
  const trackRef = useRef(null);

  return (
    <div className="goal-data">
      <div className="bar" ref={trackRef}>
        <div className="progress" style={{ width: `${progress}%` }} />

        <div
          className="scroller"
          style={{
            left: `calc(${progress}% - 10px)`,
            pointerEvents: 'none',
            transition: 'none',
          }}
        />
      </div>

      <div>{Math.round(progress)}%</div>
    </div>
  );
};
