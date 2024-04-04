import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";

export const App = () => {
  return (
    <>
      <Section title=""/>
      <Statistics  good={ } neutral={ } bad={ } total={ } positivePercentage={ } />
      <FeedbackOptions options={} onLeaveFeedback={}/>
      <Notification message={}/>
    </>
  );
};
