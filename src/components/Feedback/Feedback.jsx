const Feedback = ({vote}) => {
    return (
        <div>
            <ul>
                <li>Good: {vote.good}</li>
                <li>Neutral: {vote.neutral}</li>
                <li>Bad: {vote.bad}</li>
            </ul>
    </div>
)
};

export default Feedback;