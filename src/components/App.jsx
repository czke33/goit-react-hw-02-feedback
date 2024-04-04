import React, {Component} from "react";

import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good:0,
      neutral: 0,
      bad: 0,
    };
  }

  countTotal= () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  handleFeedback = event => {
   const {name} = event.target;
   this.setState(state => ({ [name]: state[name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotal();
    const positiveFeedback = this.countPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleFeedback} 
            />
            { total === 0 ? (
              <Notification message="There is no feedback"></Notification>) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positiveFeedback}
            />)}
        </Section>
        
      </>  
    );
  };
};