import React from "react";

const ProductInfoCard = ({ logoImg, title, proNum }) => {
  return (
    <div className="flex justify-between items-center gap-12  bg-white w-fit px-8 py-4 rounded-full">
      <div className="flex items-center  gap-6">
        <img src={logoImg} className="h-10 w-10" alt="img" />
        <div>
          <h5 className="text-base font-normal">{title}</h5>
          <p className="text-2xl font-bold">{proNum}</p>
        </div>
      </div>
      <img src="/public/images/mage_dots.png" className="w-5" alt="" />
    </div>
  );
};

export default ProductInfoCard;
