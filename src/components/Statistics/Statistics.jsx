import { Notification } from "components/Notification/Notification";


export const Statistics = ({good, neutral, bad, totalFeedback, positivePercentage}) => {

  if(totalFeedback===0) {
    return <Notification message="There is no feedback"/>
  }
    
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </>
  );
};
