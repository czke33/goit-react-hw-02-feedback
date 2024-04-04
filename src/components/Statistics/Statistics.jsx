import PropTypes from 'prop-types';
import style from "./statistics.module.css"

function Statistics({ good, neutral, bad, total, positivePersentage }) {
    return (
        <>
            <div className={style.statcontainer}>
                <h3 className={style.stathead}>Statistics</h3>
                <ul className={style.statlist}>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {total}</li>
                    <li> Positive feedback: {positivePersentage}%</li>
                </ul>
            </div>
        </>);
    
};

Statistics.propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positivePersentage: PropTypes.isRequired,
    };

export default Statistics;