import styles from "./Statistics.module.css";
const Statistics = ({
  allFeedbacksObj,
  //   good,
  //   neutral,
  //   bad,
  total,
  positivePercentage,
  stateKeysArr,
}) => {
  return (
    <ul>
      {stateKeysArr.map((feedback) => (
        <li key={feedback} className={styles.listItem}>
          <span>
            {feedback}:{allFeedbacksObj[feedback]}
          </span>
        </li>
      ))}
      <li>Total:{total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};
export default Statistics;
