export default function ReviewCard(props) {
  console.log(props);
  if (!props) {
    return <h1>Loading please wait</h1>;
  } else {
    return (
      <div className="review-box">
        <img src={props.image} />
        <h3 className="gameTitle">{props.name}</h3>
        <h4 className="reviewUser"> Username: {props.userName}</h4>
        <div className="reviewText">
          <h4 className='reviewTitle'>Review:</h4>
          <p>{props.reviews}</p>
        </div>
      </div>
    );
  }
}
