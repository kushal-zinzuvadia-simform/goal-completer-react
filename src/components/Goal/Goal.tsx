import { useState } from 'react';
import './Goal.css';
import { goalData } from '../../data/goalData';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { ProgressDisplay } from '../ProgressDisplay/ProgressDisplay';

export const Goal = () => {
  const [progressList, setProgressList] = useState<number[]>(
    goalData.subGoals.map(() => 0)
  );

  const totalCompletion =
    progressList.length === 0
      ? 0
      : progressList.reduce((sum, value) => sum + value, 0) /
        progressList.length;

  const updateProgress = (index: number, value: number) => {
    const updated = [...progressList];
    updated[index] = value;
    setProgressList(updated);
  };

  return (
    <div className="goal-table">
      <div className="goal-row">
        <h2>{goalData.title}</h2>

        <ProgressDisplay
          progress={totalCompletion}
          scrollerStyle={{ pointerEvents: 'none', transition: 'none' }}
          roundDisplay
        />
      </div>

      {goalData.subGoals.map((data, index) => {
        return (
          <div className="goal-row" key={data.id}>
            <h3 className="sub-goal">
              Sub-goal {data.id}:- {data.title}
            </h3>

            <ProgressBar
              progress={progressList[index]}
              setProgress={(value) => updateProgress(index, value)}
            />
          </div>
        );
      })}
    </div>
  );
};
