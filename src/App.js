import React from "react";
import "./App.css";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
// import styles from "./App.module.css";
import Notification from "./Notification";
class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  setFeedbackToState = (feedback) => {
    this.setState((prevState) => {
      return { [feedback]: prevState[feedback] + 1 };
    });
  };

  render() {
    const stateKeysArr = Object.keys(this.state);
    const feedbacksCount = stateKeysArr.reduce(
      (acc, feedback) => acc + this.state[feedback],
      0
    );
    const positivePercentage = Math.round(
      (this.state.good / feedbacksCount) * 100
    );

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.setFeedbackToState}
            stateKeysArr={stateKeysArr}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {!feedbacksCount && <Notification message="No feedback given" />}
          {!!feedbacksCount && (
            <Statistics
              allFeedbacksObj={this.state}
              total={feedbacksCount}
              positivePercentage={positivePercentage}
              stateKeysArr={stateKeysArr}
            ></Statistics>
          )}
        </Section>
      </>
    );
  }
}
export default App;
