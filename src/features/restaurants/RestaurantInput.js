import React, { useState } from "react";

function RestaurantInput({ onAddRes }) {
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onAddRes(name);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="text">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="text"
        />
      </div>
      <div>
        <input type="submit" value="Add Restaurant" />
      </div>
    </form>
  );
}

export default RestaurantInput;
