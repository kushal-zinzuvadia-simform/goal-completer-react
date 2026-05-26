import { GoalProgress } from '../GoalProgress/GoalProgress'
import { goalData } from '../../data/goalData'
import './Goal.css'

export const Goal = () => {
    return (
        <div className='goal-table'>
            <div className="goal-row">
                <h2>{goalData.title}</h2>
                <GoalProgress completion={goalData.totalProgress}></GoalProgress>
            </div>

            {goalData.subGoals.map((data) => {
                return (
                    <div className='goal-row' key={data.id}>
                        <h3 className='sub-goal'>Sub-goal {data.id}:- {data.title}</h3>
                        <GoalProgress completion={data.progress}></GoalProgress>
                    </div>
                )
            })}
        </div>
    );
}
