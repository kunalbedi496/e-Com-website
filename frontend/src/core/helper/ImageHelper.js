import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ product }) => {
  // console.log(product._id);
  const imageUrl = product
    ? `${API}/product/photo/${product._id}`
    : "https://images.pexels.com/photos/3850316/pexels-photo-3850316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  return (
    <div className="rounded border border-info p-2">
      <img
        src={imageUrl}
        alt="photo"
        style={{ height: "300px", widht: "300px", maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
      />
    </div>
  );
};

export default ImageHelper;
