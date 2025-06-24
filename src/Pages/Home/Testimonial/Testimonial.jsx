import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
  text: "After just a few weeks with Posture Pro, I noticed a significant improvement in my posture and less tension in my neck.",
  name: "Sara Alam",
  role: "Health Coach",
  avatar: "https://via.placeholder.com/48/000000/FFFFFF?text=S",
},
{
  text: "Posture Pro is simple to use and really effective. My lower back that all of the pain is now almost gone.",
  name: "John Doe",
  role: "Software Engineer",
  avatar: "https://via.placeholder.com/48/000000/FFFFFF?text=J",
},
{
  text: "It’s amazing how much more comfortable I feel during long meetings thanks to Posture Pro’s support.",
  name: "Fatima Khatun",
  role: "Project Manager",
  avatar: "https://via.placeholder.com/48/000000/FFFFFF?text=F",
},
{
  text: "I love how lightweight and discreet Posture Pro is. I can wear it under my clothes all day without any discomfort.",
  name: "Mohammad Rahim",
  role: "UX Designer",
  avatar: "https://via.placeholder.com/48/000000/FFFFFF?text=M",
},
{
  text: "Highly recommend Posture Pro for anyone sitting at a desk all day. It’s made a big difference for me.",
  name: "Emily Smith",
  role: "Content Writer",
  avatar: "https://via.placeholder.com/48/000000/FFFFFF?text=E",
},

];

const TestimonialSection = () => {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={40}
          slidesPerView={2}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          pagination={{ clickable: true }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center max-w-4xl mx-auto">
                <FaQuoteLeft className="text-3xl text-teal-400 mb-4 opacity-70 mx-auto" />
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t.text}
                </p>
                <hr className="border-dashed border-gray-300 dark:border-gray-600 my-4" />
                <div className="flex items-center justify-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full bg-gray-300"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-gray-700 dark:text-gray-100">
                      {t.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button className="prev-btn bg-white dark:bg-gray-700 p-2 rounded-full shadow border dark:border-gray-600">
              <span className="sr-only">Previous</span>
              <svg
                className="w-5 h-5 text-gray-700 dark:text-gray-100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="next-btn bg-lime-300 p-2 rounded-full shadow">
              <span className="sr-only">Next</span>
              <svg
                className="w-5 h-5 text-gray-800"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
