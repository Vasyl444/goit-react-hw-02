import Button from "./Button/Button.jsx";
export default function Options({ onUpdate, reset, condition }) {
  return (
    <div>
      <Button update={onUpdate}>Good</Button>
      <Button update={onUpdate}>Neutral</Button>
      <Button update={onUpdate}>Bad</Button>
      {condition > 0 && <Button update={reset}>Reset</Button>}
    </div>
  );
}
