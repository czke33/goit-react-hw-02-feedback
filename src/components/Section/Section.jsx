import Statistics from './Statistics/Statistics';
import PropTypes from 'prop-types';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'

const Section = () => {
  return (
    <>
          <Statistics  good={ } neutral={ } bad={ } total={ } positivePercentage={ } />
      <FeedbackOptions options={} onLeaveFeedback={}/>
    </>
  );
};

export default Section;