import s from './Feedback.module.css'

const Feedback = ({ vote, totalFeedback, percent }) => {
    return (
        <div>
            <ul className={s.ul}>
                <li className={s.list}>Good: {vote.good}</li>
                <li className={s.list}>Neutral: {vote.neutral}</li>
                <li className={s.list}>Bad: {vote.bad}</li>
                <li className={s.list}>Total Feedback: {totalFeedback}</li>
                <li className={s.list}>Positive Feedback: {percent}%</li>
            </ul>
    </div>
)
};

export default Feedback;