'use client'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const BuyNowBtn = () => {
    const notify = () => {
    toast.success("You cant buy this product, please contact arakash022@gmail.com");
  };
    return (
        <>
            <button onClick={notify} className="btn btn-primary mt-4 w-full">Buy Now</button>

            <ToastContainer />
        </>
    );
};

export default BuyNowBtn;