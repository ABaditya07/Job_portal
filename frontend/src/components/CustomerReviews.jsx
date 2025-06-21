import React, { useState } from "react";

const reviews = [
  { id: 1, name: "Avirat Singh", feedback: "I started receiving candidate applications as soon as my job went live. Most of the applications were relevant to my hiring requirements. Will post more jobs on the portal to close positions. Great platform! Found my dream job within a week.", rating: 5 },
  { id: 2, name: "Sam Sai", feedback: "I found ‘JobSphere’ app very good. Received access to relevant candidates and closed my openings through ‘Job hai’. The team also supported me in closing my hiring fast. I will recommend this app to other recruiters as well.", rating: 4 },
  { id: 3, name: "Adi AB", feedback: "A fantastic platform for job seekers and recruiters!", rating: 5 },
  { id: 4, name: "Sir Aman", feedback: "Easy to use and very helpful for career growth.", rating: 5 },
  { id: 5, name: "Michael Lee", feedback: "Got hired in just a few days. Highly recommend!", rating: 5 },
  { id: 6, name: "Sophia Green", feedback: "This job board helped me find the perfect remote job!", rating: 4 },
  { id: 7, name: "Daniel Martinez", feedback: "An amazing experience using this platform!", rating: 5 },
  { id: 8, name: "Olivia Wilson", feedback: "Helpful job suggestions and career resources.", rating: 4 },
];

const CustomerReviews = () => {
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((prevIndex) => (prevIndex + 3 < reviews.length ? prevIndex + 3 : 0));
  };

  const prevReview = () => {
    setIndex((prevIndex) => (prevIndex - 3 >= 0 ? prevIndex - 3 : reviews.length - 3));
  };

  return (
    <div 
      className="relative bg-cover bg-center bg-no-repeat text-white py-12 mt-8"
      style={{ backgroundImage: "url('/path-to-your-background.jpg')" }} // Change to your image path
    >
      <div className="bg-black bg-opacity-50 py-8 px-4 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Users Say</h2>
        <div className="relative flex items-center justify-center">
          <button
            onClick={prevReview}
            className="absolute left-0 p-2 bg-gray-300 rounded-full shadow-md hover:bg-gray-400"
          >
            ◀
          </button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {reviews.slice(index, index + 3).map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-lg shadow-md text-black">
                <p className="text-gray-700">"{review.feedback}"</p>
                <p className="font-bold mt-2">- {review.name}</p>
                <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
              </div>
            ))}
          </div>
          <button
            onClick={nextReview}
            className="absolute right-0 p-2 bg-gray-300 rounded-full shadow-md hover:bg-gray-400"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
