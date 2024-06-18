import { useState } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback.jsx";
import Options from "../Options/Options.jsx";
export default function App() {
  const [types, setTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = (event) => {
    const type = event.target.textContent.toLowerCase();
    setTypes({
      ...types,
      [type]: types[type] + 1,
    });
  };
  const resetFeedback = () => {
    setTypes({
      ...types,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalFeedback = types.good + types.neutral + types.bad;
  const positiveFeedback = Math.round((types.good / totalFeedback) * 100);
  return (
    <div>
      <Description />
      <Options
        onUpdate={updateFeedback}
        reset={resetFeedback}
        condition={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback
          positivePercent={positiveFeedback}
          totalValue={totalFeedback}
          goodType={types.good}
          neutralType={types.neutral}
          badType={types.bad}
        />
      ) : (
        <p>Not feedback yet</p>
      )}
    </div>
  );
}
