import { Link } from "react-router-dom";
import { Car, Plane, Compass, Shield, Clock, ThumbsUp } from "lucide-react";
import { Helmet } from "react-helmet-async";

function Home() {
  const services = [
    {
      icon: <Car className="h-12 w-12" />,
      title: "Rent Vehicles",
      description:
        "Choose from our wide range of cars and bikes for your perfect journey.",
      link: "/rent",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Plane className="h-12 w-12" />,
      title: "Airport Transfer",
      description:
        "Reliable and comfortable airport pickup and drop-off services.",
      link: "/airport-transfer",
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      icon: <Compass className="h-12 w-12" />,
      title: "Safari Adventures",
      description:
        "Experience thrilling safari tours and explore the wild beauty.",
      link: "/safari",
      gradient: "from-orange-500 to-amber-500",
    },
  ];

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safe & Secure",
      description:
        "All our vehicles are regularly maintained and fully insured.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support for your convenience.",
    },
    {
      icon: <ThumbsUp className="h-8 w-8" />,
      title: "Best Prices",
      description: "Competitive rates with no hidden charges.",
    },
  ];

  return (
    <>
      {/* ✅ SEO TAGS */}
      <Helmet>
        <title>Sri Lanka Car Rentals, Airport Transfers & Safari Tours</title>

        <meta
          name="description"
          content="Explore Sri Lanka with premium car rentals, reliable airport transfers from Katunayake, and unforgettable safari tours including Yala & Udawalawa."
        />

        <meta
          name="keywords"
          content="Sri Lanka car rental, airport transfer Sri Lanka, safari tours Sri Lanka, Yala safari, Udawalawa safari, rent car Sri Lanka"
        />

        <link rel="canonical" href="https://yourdomain.com/" />

        {/* Open Graph / WhatsApp / Facebook */}
        <meta
          property="og:title"
          content="Sri Lanka Tours, Airport Transfers & Safari Adventures"
        />
        <meta
          property="og:description"
          content="Premium car rentals, airport pickups, and safari adventures across Sri Lanka. Book easily via WhatsApp."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta
          property="og:image"
          content="https://yourdomain.com/og-home.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sri Lanka Tours & Safari Adventures"
        />
        <meta
          name="twitter:description"
          content="Car rentals, airport transfers, and safari tours across Sri Lanka."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/og-home.jpg"
        />
      </Helmet>
      <div>
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-700 to-blue-900">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Your Journey Starts Here
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Discover amazing destinations with our premium car rentals,
              comfortable airport transfers, and unforgettable safari
              experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/rent"
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
              >
                Explore Vehicles
              </Link>
              <Link
                to="/safari"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-xl"
              >
                Book Safari
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need for an amazing travel experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
                >
                  <div
                    className={`bg-gradient-to-br ${service.gradient} p-8 text-white`}
                  >
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-6 text-cyan-600 font-semibold group-hover:text-cyan-700 flex items-center">
                      Learn More
                      <span className="ml-2 group-hover:ml-4 transition-all">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We're committed to making your travel experience exceptional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-8 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-full mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Contact us now via WhatsApp and let us help you plan the perfect
              trip
            </p>
            <button
              onClick={() => {
                const phoneNumber = "+94758110086";
                const message = encodeURIComponent(
                  "Hi! I would like to inquire about your services."
                );
                window.open(
                  `https://wa.me/${phoneNumber}?text=${message}`,
                  "_blank"
                );
              }}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-xl inline-flex items-center space-x-2"
            >
              <span>Book Now on WhatsApp</span>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
