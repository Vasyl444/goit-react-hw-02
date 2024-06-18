import FeedbackText from "../FeedbackText/FeedbackText.jsx";
export default function Feedback({
  goodType,
  neutralType,
  badType,
  totalValue,
  positivePercent,
}) {
  return (
    <div>
      <FeedbackText>Good: {goodType}</FeedbackText>
      <FeedbackText>Neutral: {neutralType}</FeedbackText>
      <FeedbackText>Bad: {badType}</FeedbackText>
      <p>Total: {totalValue}</p>
      {positivePercent ? (
        <p>Positive: {positivePercent}%</p>
      ) : (
        <p>Positive: 0%</p>
      )}
    </div>
  );
}
