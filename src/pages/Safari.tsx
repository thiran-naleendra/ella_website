import { Compass, Camera, Sunrise, Users, Star, Eye } from "lucide-react";

function Safari() {
  const tours = [
    {
      name: "Half-Day Safari",
      duration: "4–5 hours",
      price: "From $150",
      features: [
        "Morning or afternoon slot",
        "Experienced safari guide",
        "Refreshments included",
        "Wildlife viewing",
      ],
      gradient: "from-teal-500 to-cyan-600",
    },
    {
      name: "Full-Day Safari",
      duration: "8–10 hours",
      price: "From $280",
      features: [
        "All-day safari adventure",
        "Lunch included",
        "Multiple park areas",
        "Photography opportunities",
      ],
      gradient: "from-emerald-500 to-green-600",
      popular: false,
    },
    {
      name: "Sunset Safari",
      duration: "3–4 hours",
      price: "From $180",
      features: [
        "Evening expedition",
        "Golden-hour wildlife photos",
        "Relaxed safari pace",
        "Romantic experience",
      ],
      gradient: "from-purple-500 to-pink-600",
    },

    // SRI LANKAN SAFARIS
    {
      name: "Sri Lankan Safari Tour",
      duration: "Flexible",
      price: "Contact on WhatsApp",
      features: [
        "Yala National Park",
        "Udawalawa National Park",
        "Bundala National Park",
        "Kumana National Park",
        'Private safari jeep',
        "Birds & wildlife spotting",
      ],
      gradient: "from-green-600 to-emerald-700",
    },
    {
      name: "Sri Lanka Day Tour",
      duration: "1 Day",
      price: "Contact on WhatsApp",
      features: [
        "Safari or cultural day tours",
        "Udawalawa or Yala options",
        "Private vehicle with driver",
        "Fully customizable itinerary",
      ],
      gradient: "from-sky-500 to-blue-700",
    },
    {
      name: "Sri Lanka Monthly Tour",
      duration: "30 Days (Custom)",
      price: "Contact on WhatsApp",
      features: [
        "Island-wide safari & travel",
        "Yala, Kumana, Udawalawa & more",
        "Hotels, transport & guide",
        "Ideal for long stays & explorers",
      ],
      gradient: "from-indigo-500 to-violet-700",
    },
  ];

  const highlights = [
    {
      icon: <Camera />,
      title: "Photography",
      description: "Capture stunning wildlife moments",
    },
    {
      icon: <Sunrise />,
      title: "Scenic Views",
      description: "Breathtaking landscapes",
    },
    {
      icon: <Users />,
      title: "Expert Guides",
      description: "Knowledgeable local experts",
    },
    {
      icon: <Eye />,
      title: "Wildlife Spotting",
      description: "See animals in their habitat",
    },
  ];

  const handleBooking = (tourName: string) => {
    const phoneNumber = "+94758110086";
    const message = encodeURIComponent(
      `Hi! I would like to book the ${tourName} safari tour.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-amber-700 to-red-800">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "url(https://cdn.pixabay.com/photo/2013/07/16/17/12/leopard-163035_960_720.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Compass className="h-20 w-20 text-white mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Safari Adventures
          </h1>
          <p className="text-xl md:text-2xl text-gray-100">
            Embark on an unforgettable journey through the wild
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Adventure
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select the perfect safari experience for your journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {tours.map((tour, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative flex flex-col h-full"
              >
                {tour.popular && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1 z-10">
                    <Star className="h-4 w-4" />
                    <span>Popular</span>
                  </div>
                )}
                <div
                  className={`bg-gradient-to-br ${tour.gradient} p-8 text-white`}
                >
                  <h3 className="text-2xl font-bold mb-2">{tour.name}</h3>
                  <p className="text-white/90 mb-4">{tour.duration}</p>
                  <div className="text-3xl font-bold">{tour.price}</div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <ul className="space-y-3 mb-8">
                    {tour.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleBooking(tour.name)}
                    className="mt-auto w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-amber-700 transition-all hover:scale-105"
                  >
                    Book This Tour
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 hover:from-orange-100 hover:to-amber-100 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 text-white rounded-full mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">What to Expect</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg flex-shrink-0">
                    <Compass className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Expert Navigation
                    </h3>
                    <p className="text-gray-300">
                      Our experienced guides know the best routes and wildlife
                      hotspots.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg flex-shrink-0">
                    <Camera className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Amazing Photos
                    </h3>
                    <p className="text-gray-300">
                      Perfect opportunities to capture memories that last a
                      lifetime.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg flex-shrink-0">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Small Groups</h3>
                    <p className="text-gray-300">
                      Intimate group sizes ensure a personalized experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-amber-600 p-12 rounded-3xl">
              <h3 className="text-3xl font-bold mb-6">
                Book Your Safari Today
              </h3>
              <p className="text-xl text-white/90 mb-8">
                Don't miss out on this incredible adventure. Contact us now to
                reserve your spot!
              </p>
              <button
                onClick={() => handleBooking("Safari")}
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl w-full"
              >
                Book on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Safari;
