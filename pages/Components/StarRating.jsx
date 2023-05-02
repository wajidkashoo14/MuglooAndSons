import React from "react";

function StarRating() {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index}>★</span>
  ));

  return <div>{stars}</div>;
}

export default StarRating;