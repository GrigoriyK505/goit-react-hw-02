const Options = ({ updateFeedback, btnOptions, totalFeedback, resetFeedback }) => {
    return (
        <div>
            {btnOptions.map(feedbackType => (
                <button key={feedbackType}
                    onClick={() => updateFeedback(feedbackType)}>
                    {feedbackType}
                </button>
            ))}
            {totalFeedback !== 0 && (
                <button onClick={() => resetFeedback()}>
                    Reset
                </button>
            )}
        </div>
    );
};

export default Options;
