import { goalData } from '../../data/goalData';
import './Goal.css';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { MainGoal } from '../MainGoal/MainGoal';
import { useState } from 'react';

export const Goal = () => {
  const [progressList, setProgressList] = useState(
    goalData.subGoals.map(() => 0)
  );

  const totalCompletion =
    progressList.reduce((sum, value) => sum + value, 0) / progressList.length;

  const updateProgress = (index, value) => {
    const updated = [...progressList];
    updated[index] = value;
    setProgressList(updated);
  };

  return (
    <div className="goal-table">
      <div className="goal-row">
        <h2>{goalData.title}</h2>

        <MainGoal progress={totalCompletion} />
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
