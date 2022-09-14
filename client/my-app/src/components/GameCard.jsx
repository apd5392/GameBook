export default function GameCard(props) {
  console.log(props);
  if (!props) {
    return <h1>Loading please wait</h1>;
  } else {
    return (
      <div>
        <img src={props.image} />
        <h2>{props.name}</h2>
        <h3 className="h3heading">Console: {props.console}</h3>
        <h3 className="h3heading">Genre: {props.genre}</h3>
      </div>
    );
  }
}
