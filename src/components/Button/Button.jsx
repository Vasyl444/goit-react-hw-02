export default function Button({ update, children }) {
  return <button onClick={update}>{children}</button>;
}
