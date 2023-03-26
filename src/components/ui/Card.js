import classes from "./Card.module.css";
function Card(props) {
  const { title, children } = props;

  return (
    <div className={classes.card}>
      <h2>{title}</h2>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}
export default Card;
