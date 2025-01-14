// import { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   StarIcon,
//   ChevronLeftIcon,
//   ChevronRightIcon,
// } from "@heroicons/react/24/solid";

// const reviews = [
//   {
//     id: 1,
//     name: "Sarah M.",
//     rating: 5,
//     text: "The winter parka I bought exceeded my expectations. Perfect for harsh winters!",
//   },
//   {
//     id: 2,
//     name: "James K.",
//     rating: 4.8,
//     text: "Great quality products and excellent customer service. Will definitely shop here again.",
//   },
//   {
//     id: 3,
//     name: "Emily R.",
//     rating: 5,
//     text: "Love my new winter boots! They are both stylish and incredibly warm.",
//   },
//   {
//     id: 4,
//     name: "Michael P.",
//     rating: 4.9,
//     text: "The attention to detail in their winter collection is impressive. Worth every penny!",
//   },
// ];

// export default function CustomerReviews() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextReview = () => {
//     setCurrentIndex((prev) => (prev + 1) % Math.ceil(reviews.length / 2));
//   };

//   const prevReview = () => {
//     setCurrentIndex(
//       (prev) =>
//         (prev - 1 + Math.ceil(reviews.length / 2)) %
//         Math.ceil(reviews.length / 2)
//     );
//   };

//   const renderStars = (rating) => {
//     return [...Array(5)].map((_, index) => (
//       <StarIcon
//         key={index}
//         className={`h-5 w-5 ${
//           index < Math.floor(rating)
//             ? "text-yellow-400"
//             : index === Math.floor(rating) && rating % 1 !== 0
//             ? "text-yellow-400 opacity-50"
//             : "text-gray-300"
//         }`}
//       />
//     ));
//   };

//   return (
//     <div className="bg-gray-50 py-12 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="font-tafabricans text-3xl font-bold text-gray-900 mb-4">
//             Trusted by Winter Fashion Lovers
//           </h2>
//           <p className="text-gray-600">
//             See what our customers have to say about their Polar Threads
//             experience
//           </p>
//         </div>

//         <div className="relative">
//           <div className="overflow-hidden">
//             <div
//               className="flex transition-transform duration-300 ease-in-out"
//               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//             >
//               {Array(Math.ceil(reviews.length / 2))
//                 .fill()
//                 .map((_, pageIndex) => (
//                   <div key={pageIndex} className="w-full flex-shrink-0">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                       {reviews
//                         .slice(pageIndex * 2, pageIndex * 2 + 2)
//                         .map((review) => (
//                           <div
//                             key={review.id}
//                             className="bg-white p-6 rounded-lg shadow-sm"
//                           >
//                             <div className="flex items-center mb-4">
//                               {renderStars(review.rating)}
//                               <span className="ml-2 text-gray-600">
//                                 {review.rating}/5
//                               </span>
//                             </div>
//                             <p className="text-gray-600 mb-4">{review.text}</p>
//                             <p className="font-semibold text-gray-900">
//                               {review.name}
//                             </p>
//                           </div>
//                         ))}
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </div>

//           <button
//             onClick={prevReview}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
//           >
//             <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
//           </button>

//           <button
//             onClick={nextReview}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
//           >
//             <ChevronRightIcon className="h-6 w-6 text-gray-600" />
//           </button>
//         </div>

//         <div className="text-center mt-12">
//           <Link
//             to="/reviews"
//             className="inline-block mt-10 px-6 py-2 border rounded-md border-gray-400 text-base font-medium text-gray-600 hover:border-gray-700 transition-colors shadow-gray-300/50 hover:shadow-gray-700/50"
//           >
//             Read More Reviews
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
