/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <img src="/Images/home/testimonials/testimonials.png" alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="text-left md:w-4/9">
            <p className="subtitle">Testimonials</p>
            <h2 className="title">What Our Customers Say About Us</h2>
            <blockquote className="my-4 text-secondary leading-[30px]">
              “I had the pleasure of dining at Foodi last night, and I'm still
              raving about the experience! The attention to detail in
              presentation and service was impeccable”
            </blockquote>
           
           {/* avater */}

           <div className="flex items-center gap-4 flex-wrap">
           <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12 cursor-pointer">
                  <img src="/Images/home/testimonials/testimonial1.png" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12 cursor-pointer">
                  <img src="/Images/home/testimonials/testimonial2.png" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12 cursor-pointer">
                  <img src="/Images/home/testimonials/testimonial3.png" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12 cursor-pointer bg-gray-600">
                  <h3 className="text-white text-center font-bold mt-3 bg-gray-600">+99</h3>
                </div>
              </div>
            </div>
            
            <div className="space-y-1">
              <h5 className="text-lg font-semibold">Customer Feedback</h5>
              {/* <div className="flex items-center gap-2"><FaStar className="text-yellow-half"/> <span className="font-medium">4.9</span> <span className="text-[#807E7E]">(18.6k Reviews)</span></div> */}
              <div className="rating">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-500"
                defaultChecked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" defaultChecked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" defaultChecked />
              <input type="radio" name="rating-2" className="mask mask-star-2 mask-half bg-orange-500"  />
              <span className="font-medium ml-2">4.2</span> <span className="text-[#807E7E]">(18.6k Reviews)</span>
            </div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;