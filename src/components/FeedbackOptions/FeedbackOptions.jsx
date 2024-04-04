import PropTypes from 'prop-types';
import style from "./feedbackoptions.module.css"

function FeedbackOptions({ options, onLeaveFeedback }) {
            <div className={style.feedbackcontainer}>
                {options.map((option, index) => {
                    return (
                        <>
                    <button
                        key={index}
                        type="button"
                        name={option}
                        onClick={onLeaveFeedback}
                        className={style.feedbackbtn}
                    >{option}
                    </button></>)
                })}
            </div>
       
};


FeedbackOptions.propTypes = {
    index: PropTypes.number.isRequired,
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;