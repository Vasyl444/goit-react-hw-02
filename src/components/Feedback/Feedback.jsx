import FeedbackText from "./FeedbackText/FeedbackText.jsx";
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
      <FeedbackText>Total: {totalValue}</FeedbackText>
      <FeedbackText>
        {positivePercent ? `Positive: ${positivePercent}%` : "Positive: 0%"}
      </FeedbackText>
    </div>
  );
}
