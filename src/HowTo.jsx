import { useState } from "react";

const des = [
  {
    post: "https://themindsjournal.com/wp-content/uploads/2024/09/How-To-Talk-To-Anyone-With-Confidence-Psychological-Hacks-For-Any-Situation-1.jpg",
    alt: "How to talk to anyone",
  },
];

export default function HowTo({ dark }) {
  const [images] = useState(des);

  return (
    <section
      className={`mt-40 py-16 px-6 transition ${
        dark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold">
            How to Talk to Anyone with Confidence
          </h2>

          <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
            Do you ever wonder how to talk to anyone with confidence? Small talk
            may be intimidating at times, but it’s an ability that everyone can
            learn – the art of conversation! Be it a party, a romantic date, or
            an office environment; one can use certain psychological tips that
            will help with the process and make it even more fun. <br />
            <br />
            <span className="font-semibold text-blue-500 cursor-pointer hover:underline">
              Read More Here...
            </span>
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          {images.map((imga, i) => (
            <HowTalk key={i} imga={imga} />
          ))}
        </div>
      </div>
    </section>
  );
}

// 🔹 სურათის კომპონენტი
function HowTalk({ imga }) {
  return (
    <div className="w-full md:w-[500px] rounded-2xl overflow-hidden shadow-lg">
      <img src={imga.post} alt={imga.alt} className="w-ful object-cover" />
    </div>
  );
}
