const Options = ({ updateFeedback, btnOptions, totalFeedBack, resetFeedBack }) => {
    return (
        <div>
            {btnOptions.map(feedbackType => (
                <button key={feedbackType}
                    onClick={() => updateFeedback(feedbackType)}>
                    {feedbackType}
                </button>
            ))}
            {totalFeedBack > 0 && (
                <button button onClick={() => resetFeedBack()}>
                    Reset </button>
            )}
        </div>
    );
};

export default Options;
