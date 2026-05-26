import { ProgressBar } from "../ProgressBar/ProgressBar"
import './GoalProgress.css'

export const GoalProgress = ({ completion }) => {
    return (
        <div className="goal-progress">
            <ProgressBar></ProgressBar>
            <div>{completion}%</div>
        </div>
    )
}
