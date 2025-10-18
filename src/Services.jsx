export default function ThreeServices({ dark }) {
  const services = [
    {
      title: "Dark Psychology",
      image:
        "https://covers.storytel.com/jpg-640/9798368965062.53bf9ecb-db99-4303-ae06-d815ea66521c?optimize=high&quality=70&width=600",
      description: "How to Analyze People and Master Human Behaviour...",
    },

    {
      title: "Mindfulness Video Library",
      image:
        "https://domf5oio6qrcr.cloudfront.net/medialibrary/7740/b17db71e-03ff-427a-a27e-64aea28c45b016207267438013.jpg",
      description: "Browse our curated collection of mindfulness videos...",
    },
    {
      title: "Interactive Brain Games",
      image:
        "https://content.tinytap.it/AFF21205-D591-4C51-B172-83A5C181804A/unzipped/photo2/photo2.jpg",
      description: "Fun and engaging games to boost your cognitive skills...",
    },
    {
      title: "Mind Games ",
      image:
        "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-04/pmg-inkblots3.jpg?itok=lw2yWVU2",
      description:
        "Progress depends upon resisting and debunking the 1%'s manipulative appeals...",
    },
    {
      title: "Psychology Sessions",
      image:
        "https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/752c00bb2e0f5567bd75c625/pexels-photo-2381069.jpeg",
      description: "Deep dive into your mindset with professional guidance...",
    },
    {
      title: "How To Talk To Anyone",
      image:
        "https://covers.storytel.com/jpg-640/9798868686214.9903ae67-0d13-495a-bd3d-3e28d3059555?optimize=high&quality=70&width=600",
      description: "Improve Your Social Skills, Develop Charisma...",
    },
  ];

  return (
    <section
      className={` py-16 px-6 transition ${
        dark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
        {services.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-2xl overflow-hidden shadow-lg transition ${
              dark ? "bg-gray-800" : "bg-gray-50"
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6 flex flex-col ">
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-5">{item.description}</p>
              <button
                className={` px-4 py-2 rounded-lg font-medium transition ${
                  dark
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
