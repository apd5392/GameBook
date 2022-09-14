import "../Reviews.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";

const Reviews = () => {
  const [reviews, setVillains] = useState([]);
  useEffect(() => {
    const fetchVillains = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/villains`);
        setVillains(res.data.reviews);
        console.log(res.data.reviews);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVillains();
  }, []);

  if (!reviews) {
    return <h1>Loading Please Wait!</h1>;
  } else {
    return (
      <div className="reviewDiv">
        <h1 className="reviewTitleList">Reviews List</h1>
        {reviews.map((review) => (
          <ReviewCard
            className="reviewCardDiv"
            name={review.name}
            userName={review.userName}
            reviews={review.review}
          />
        ))}
      </div>
    );
  }
};
export default Reviews;
