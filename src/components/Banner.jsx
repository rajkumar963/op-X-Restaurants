import React from "react";
// import bannerImg from '/images/home/banner.png'

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#fafafa] from-0% to-[#fcfcfc] to-100%">
      {" "}
      <hr /> <hr />
      <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Text */}
        <div className="md:w-1/2 space-y-4 px-4">
          <h3 className="md:text-5xl text-4xl font-bold md:leading-snug text-[#192a56]">
            Dive into Delights of Delectable{" "}
            <span className="text-[#27ae60]">Foods</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dicta
            repudiandae aspernatur saepe enim alias doloremque is quam.
          </p>
          <button className="btn bg-[#27ae60] rounded-full px-6 text-white">
            Order Now
          </button>
        </div>
        {/* Image */}
        <div className="md:w-1/2 ">
          <img src="/Images/home/banner.png" alt="" className="w-96 h-69 pl-12"/>
          <div className="flex flex-col  md:flex-row items-center justify-around gap-4 ">
            <div className="flex items-center bg-white-400 rounded-2xl gap-4 shadow-xl w-60">
              <img
                src="/Images/home/b-food1.png"
                alt=""
                className="rounded-2xl"
              />
              <div className="space-y-1">
                <h5 className="font-medium mb-1 text-[#192a56]">Spicy Noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    defaultChecked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                </div>
                <p className="text-red-500">$15.99</p>
              </div>
            </div>
            <div className=" sm:flex hidden items-center bg-white-400 rounded-2xl gap-4 shadow-xl w-60">
              <img
                src="/Images/home/b-food1.png"
                alt=""
                className="rounded-2xl"
              />
              <div className="space-y-1">
                <h5 className="font-medium mb-1 text-[#192a56]">Testy Noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    defaultChecked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                </div>
                <p className="text-red-500">$13.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
