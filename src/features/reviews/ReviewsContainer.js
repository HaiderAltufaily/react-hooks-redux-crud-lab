import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";
import { reviewAdded } from "./reviewsSlice";

function ReviewsContainer({ restaurantId }) {
  const reviews = useSelector((state) => state.reviews.entities);
  const newReviews = reviews.filter((rev) => {
    return rev.restaurantId === restaurantId;
  });

  console.log(reviews);
  return (
    <div>
      <ReviewInput restaurantId={restaurantId} />
      <Reviews restaurantId={restaurantId} reviews={newReviews} />
    </div>
  );
}

export default ReviewsContainer;
