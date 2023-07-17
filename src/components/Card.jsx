import React from "react";

const Card = ({ image, description }) => {
  return (
    <div className="card">
      <img
        src={image}
        alt=""
        className="image"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src =
            "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNvbXB1dGVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60";
        }}
      />
      <p className="description">{description}</p>
    </div>
  );
};

export default Card;
