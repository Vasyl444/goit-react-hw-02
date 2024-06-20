import css from "../../Options/Options.module.css";
export default function Button({ update, children }) {
  return (
    <button className={css.button} onClick={update}>
      {children}
    </button>
  );
}
