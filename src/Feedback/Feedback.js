// import React from "react";
// import styles from "./Feedback.module.css";

// class Feedback extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   setFeedbackToState = (feedback) => {
//     // this.setState(prev=>{return{{ feedback }:prev[ {feedback }]+1}})
//     this.setState((prevState) => {
//       return { [feedback]: prevState[feedback] + 1 };
//     });
//   };

//   render() {
//     // console.log(Object.keys(this.state));
//     const stateKeysArr = Object.keys(this.state);
//     const feedbacksCount = stateKeysArr.reduce(
//       (acc, feedback) => acc + this.state[feedback],
//       0
//     );
//     return (
//       <>
//         <h1>Please leave feedback</h1>
//         <ul className={styles.list}>
//           {stateKeysArr.map((feedback) => (
//             <li key={feedback} className={styles.listItem}>
//               <button
//                 className={styles.button}
//                 onClick={() => this.setFeedbackToState(feedback)}
//               >
//                 {feedback}
//               </button>
//             </li>
//           ))}
//         </ul>
//         <h2>Statistics</h2>
//         <ul>
//           {stateKeysArr.map((feedback) => (
//             <li key={feedback} className={styles.listItem}>
//               <span>{feedback}:</span>
//               <span>{this.state[feedback]}</span>
//             </li>
//           ))}
//           <li>Total:{feedbacksCount}</li>
//           <li>
//             Positive feedback:{" "}
//             {Math.round((this.state.good / feedbacksCount) * 100)}%
//           </li>
//         </ul>
//       </>
//     );
//   }
// }

// export default Feedback;
