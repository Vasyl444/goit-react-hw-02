import css from "../../Feedback/Feedback.module.css";
export default function FeedbackText({ children, type }) {
  return (
    <p className={css.text}>
      {children} {type}
    </p>
  );
}
