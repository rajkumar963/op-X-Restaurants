// import React, { useState } from "react";
// import { FaHeart } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Cards = ({ item }) => {
//    console.log(item)
//   const [isHeartFilled, setIsHeartFilled] = useState(false);

//   const handleHeartClick = () => {
//     setIsHeartFilled(!isHeartFilled);
//   };
//   return (
//     <div to={`/menu/${item._id}`} className="card shadow-xl relative mr-5 md:my-5">
//       <div
//         className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green ${
//           isHeartFilled ? "text-rose-500" : "text-white"
//         }`}
//         onClick={handleHeartClick}
//       >
//         <FaHeart className="w-5 h-5 cursor-pointer" />
//       </div>
//       <Link to={`/menu/${item._id}`}>
//         <figure>
//           <img src={item.image} alt="Shoes" className="hover:scale-105 transition-all duration-300 md:h-72" />
//         </figure>
//       </Link>
//       <div className="card-body">
//        <Link to={`/menu/${item._id}`}><h2 className="card-title">{item.name}!</h2></Link>
//         <p>Description of the item</p>
//         <div className="card-actions justify-between items-center mt-2">
//           <h5 className="font-semibold">
//             <span className="text-sm text-red">$ </span> {item.price}
//           </h5>
//           <button className="btn bg-green text-white">Add to Cart </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";

const Cards = ({item}) => {
  const [isHeartFillted, setIsHeartFilled] = useState(false);
  
  const handleHeartClick = () => {
       setIsHeartFilled(!isHeartFillted);
       };

  return (
    <div className="card bg-base-100 w-70 shadow-xl relative mr-5 md:my-5">
      <div className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green ${isHeartFillted ? "text-red-500" : "text-white-500"}`} onClick={handleHeartClick}>
      <FaHeart className='w-5 h-5 cursor-pointer' />

      </div>
      <link to={`/menu/${item._id}`} />
      <figure><img src={item.image} alt="Shoes" className="hover:scale-105 transition-all duration-300 md:h-72" /></figure>
      
      <div className="card-body">
        {/* <Link to={`/menu/${item._id}`}> */}
        <h2 className="card-title">{item.name}</h2>
        <p>Discribe of the items</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold"><span className="text-sm text-red-500">$</span> {item.price}</h5>
          <button className="btn bg-green text-white ">Buy Now</button>
        </div>
      </div>
    </div>
   
  )
}

export default Cards