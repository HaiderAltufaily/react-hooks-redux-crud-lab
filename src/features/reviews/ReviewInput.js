import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Reviews from "./Reviews";
import { reviewAdded } from "./reviewsSlice";

function ReviewInput({ onReviewAdd, restaurantId }) {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(reviewAdded({ comment, restaurantId }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="review">Comment</label>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        id="review"
      />
      <input type="submit" value="Add Review" />
    </form>
  );
}

export default ReviewInput;
