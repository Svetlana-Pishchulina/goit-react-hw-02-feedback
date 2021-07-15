import React from "react";
// import logo from './logo.svg';
import "./App.css";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
// import styles from "./App.module.css";

// function App() {
//   return (
//     <div className="App">
//       <Feedback />
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  setFeedbackToState = (feedback) => {
    // this.setState(prev=>{return{{ feedback }:prev[ {feedback }]+1}})
    this.setState((prevState) => {
      return { [feedback]: prevState[feedback] + 1 };
    });
  };

  render() {
    // console.log(Object.keys(this.state));
    // const { good, neutral, bad } = this.state;

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
        {/* <h1>Please leave feedback</h1> */}
        {/* <ul className={styles.list}>
          {stateKeysArr.map((feedback) => (
            <li key={feedback} className={styles.listItem}>
              <button
                className={styles.button}
                onClick={() => this.setFeedbackToState(feedback)}
              >
                {feedback}
              </button>
            </li>
          ))}
        </ul> */}
        {/* <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.setFeedbackToState}
          stateKeysArr={stateKeysArr}
        ></FeedbackOptions> */}

        <Section title="Statistics">
          <Statistics
            // good={good}
            // neutral={neutral}
            // bad={bad}
            allFeedbacksObj={this.state}
            total={feedbacksCount}
            positivePercentage={positivePercentage}
            stateKeysArr={stateKeysArr}
          ></Statistics>
        </Section>
        {/* <h2>Statistics</h2> */}
        {/* <Statistics
          // good={good}
          // neutral={neutral}
          // bad={bad}
          allFeedbacksObj={this.state}
          total={feedbacksCount}
          positivePercentage={positivePercentage}
          stateKeysArr={stateKeysArr}
        ></Statistics> */}
        {/* <ul>
          {stateKeysArr.map((feedback) => (
            <li key={feedback} className={styles.listItem}>
              <span>{feedback}:{this.state[feedback]}</span>
              // <span>{this.state[feedback]}</span>
            </li>
          ))}
          <li>Total:{feedbacksCount}</li>
          <li>
            Positive feedback:
            {Math.round((this.state.good / feedbacksCount) * 100)}%
          </li>
        </ul> */}
      </>
    );
  }
}
export default App;
