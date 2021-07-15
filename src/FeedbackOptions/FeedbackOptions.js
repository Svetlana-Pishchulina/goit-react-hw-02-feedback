import styles from "./FeedbackOptions.module.css";
const FeedbackOptions = ({ options, onLeaveFeedback, stateKeysArr }) => {
  //   const stateKeysArr = Object.keys(options);
  //   console.log(options);
  //   console.log(onLeaveFeedback);
  return (
    <ul className={styles.list}>
      {stateKeysArr.map((feedback) => (
        <li key={feedback} className={styles.listItem}>
          <button
            className={styles.button}
            onClick={() => onLeaveFeedback(feedback)}
          >
            {feedback}
          </button>
        </li>
      ))}
    </ul>
  );
};
//
export default FeedbackOptions;
