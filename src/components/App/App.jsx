import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback.jsx";
import Options from "../Options/Options.jsx";
import Notification from "../Notification/Notification.jsx";

export default function App() {
  const storageValue = () => {
    if (JSON.parse(localStorage.getItem("clicksQuantity")) === null) {
      return { good: 0, neutral: 0, bad: 0 };
    } else {
      return JSON.parse(localStorage.getItem("clicksQuantity"));
    }
  };
  const [types, setTypes] = useState(storageValue);
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

  useEffect(() => {
    window.localStorage.setItem("clicksQuantity", JSON.stringify(types));
  }, [types]);
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
        <Notification>Not feedback yet</Notification>
      )}
    </div>
  );
}
