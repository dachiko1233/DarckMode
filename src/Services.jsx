import { useState } from "react";

export default function Services({ dark }) {
  const mediaList = [
    {
      title: "Inside Out",
      image:
        "https://m.media-amazon.com/images/I/71nR3oL0EJL._AC_UF894,1000_QL80_.jpg",
      description:
        "ფილმი ემოციების სამყაროზე — სასწავლო ფსიქოლოგიური ანიმაცია.",
    },
    {
      title: "Good Will Hunting",
      image:
        "https://m.media-amazon.com/images/I/51N5X9tX1zL._AC_UF894,1000_QL80_.jpg",
      description: "ინსპირაციული ფილმი თვითშემეცნებაზე და თვითშეფასებაზე.",
    },
    {
      title: "Mindful Breathing",
      image: "https://cdn-icons-png.flaticon.com/512/4625/4625692.png",
      description: "სუნთქვითი ვარჯიშები სტრესის შესამცირებლად.",
    },
    {
      title: "The Social Dilemma",
      image:
        "https://m.media-amazon.com/images/I/81m7+lbQ41L._AC_UF1000,1000_QL80_.jpg",
      description: "ფილმი სოციალური მედიის ზეგავლენაზე ფსიქოლოგიაზე.",
    },
    {
      title: "The Mind Game",
      image:
        "https://img.freepik.com/free-vector/brain-training-illustration_1284-12019.jpg",
      description: "თამაში, რომელიც აძლიერებს ყურადღებას და მეხსიერებას.",
    },
    {
      title: "Calm Meditation",
      image: "https://cdn-icons-png.flaticon.com/512/3750/3750028.png",
      description: "მშვიდი აპლიკაცია მედიტაციისთვის.",
    },
  ];
  return (
    <section
      className={`min-h-screen flex flex-col items-center py-24 transition ${
        dark
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-br  from-gray-50 to-blue-50 text-gray-900"
      }`}
    >
      <h1 className="text-3xl font-bold mb-10">
        Psychological recommendations
      </h1>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
        {mediaList.map((item, i) => (
          <MediaCard key={i} {...item} dark={dark} />
        ))}
      </div>
    </section>
  );
}

function MediaCard({ dark, title, image, description }) {
  const [likes, setLikes] = useState(0);
  const [added, setAdded] = useState(false);

  return (
    <div
      className={`rounded-2xl overflow-hidden w-72 shadow-mb transition ${
        dark ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      <img src={image} alt={title} className="w-full h-44 object-cover" />
      <div className="p-4 ">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm mb-4">{description}</p>

        <div className="flex justify-around text-white ">
          <button onClick={() => setLikes(likes + 1)}>
            {likes ? (
              <i className="fa-solid fa-heart"></i>
            ) : (
              <i classname="fa-regular fa-heart"></i>
            )}

            <span>{likes}</span>
          </button>
          <div className="flex justify-end gap-4">
            <button
              onClick={() => setAdded(!added)}
              className={`px-3 py-1 rounded-lg text-sm transition ${
                added
                  ? "bg-green-500 text-white hover:bg-green-600 "
                  : dark
                  ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 "
              }`}
            >
              {added ? "Added" : "Add"}
            </button>

            <button
              className={`px-3 py-1 rounded-lg text-sm transition ${
                dark
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              show more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
