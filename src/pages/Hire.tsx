import { MapPin, Zap, Shield, Clock, Search } from 'lucide-react';
import { useState } from 'react';

function Hire() {
  const [searchTerm, setSearchTerm] = useState('');

  const cities = [
  { name: 'Colombo', distance: 35, price: '$18', start: 'Katunayake Airport' },
  { name: 'Bentota', distance: 105, price: '$50', start: 'Katunayake Airport' },
  { name: 'Galle', distance: 150, price: '$50', start: 'Katunayake Airport' },
  { name: 'Hikkaduwa', distance: 140, price: '$54', start: 'Katunayake Airport' },
  { name: 'Unawatuna', distance: 155, price: '$52', start: 'Katunayake Airport' },
  { name: 'Ahangama', distance: 165, price: '$57', start: 'Katunayake Airport' },
  { name: 'Midigama', distance: 170, price: '$57', start: 'Katunayake Airport' },
  { name: 'Weligama', distance: 175, price: '$58', start: 'Katunayake Airport' },
  { name: 'Mirissa', distance: 180, price: '$60', start: 'Katunayake Airport' },
  { name: 'Matara', distance: 190, price: '$65', start: 'Katunayake Airport' },
  { name: 'Hiriketiya', distance: 210, price: '$67', start: 'Katunayake Airport' },
  { name: 'Hambantota', distance: 240, price: '$85', start: 'Katunayake Airport' },
  { name: 'Tissamaharama (Tissa)', distance: 260, price: '$90', start: 'Katunayake Airport' },
  { name: 'Yala', distance: 290, price: '$90', start: 'Katunayake Airport' },
  { name: 'Kataragama', distance: 270, price: '$95', start: 'Katunayake Airport' },
  { name: 'Arugam Bay', distance: 360, price: '$120', start: 'Katunayake Airport' },
  { name: 'Ella', distance: 260, price: '$100', start: 'Katunayake Airport' },
  { name: 'Pasikuda', distance: 300, price: '$110', start: 'Katunayake Airport' },
  { name: 'Trincomalee (Trinco)', distance: 250, price: '$100', start: 'Katunayake Airport' },
  { name: 'Nuwara Eliya', distance: 175, price: '$75', start: 'Katunayake Airport' },
  { name: 'Hatton', distance: 140, price: '$65', start: 'Katunayake Airport' },
  { name: 'Kandy', distance: 115, price: '$50', start: 'Katunayake Airport' },
  { name: 'Sigiriya', distance: 170, price: '$60', start: 'Katunayake Airport' },
];



  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBooking = (cityName: string, price: string) => {
    const phoneNumber = '+94758110086';
    const message = encodeURIComponent(`Hi! I would like to book an airport transfer to ${cityName} (${price}).`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const features = [
    { icon: <MapPin />, title: 'Fixed Pricing', description: 'No hidden charges, transparent rates' },
    { icon: <Zap />, title: 'Quick Booking', description: 'Book instantly via WhatsApp' },
    { icon: <Shield />, title: 'Safe Travel', description: 'Vetted drivers & insured vehicles' },
    { icon: <Clock />, title: 'On Time', description: 'Always on schedule, flight tracking' },
  ];

  return (
    <div>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-700 to-teal-800">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/40583/fear-children-height-rope-course-40583.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <MapPin className="h-20 w-20 text-white mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Airport to City Transfer
          </h1>
          <p className="text-xl md:text-2xl text-gray-100">
            Affordable, reliable transfers to 24 destinations
          </p>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                  {feature.icon}
                </div>
                <h3 className="font-bold mb-1 text-sm md:text-base">{feature.title}</h3>
                <p className="text-xs md:text-sm text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              Browse Available Routes
            </h2>
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search cities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:border-cyan-600 transition-colors"
                />
              </div>
              {filteredCities.length > 0 && (
                <p className="text-sm text-gray-600 mt-3 text-center">
                  Showing {filteredCities.length} of {cities.length} routes
                </p>
              )}
            </div>
          </div>

          {filteredCities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCities.map((city, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-200"
                >
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 group-hover:h-3 transition-all"></div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {city.name}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{city.distance} Km</span>
                          </span>
                          {/* <span className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{city.time}</span>
                          </span> */}
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-gray-600 text-sm mb-2">Starting from {city.start}</p>
                      <div className="text-3xl font-bold text-cyan-600">
                        {city.price}
                      </div>
                    </div>

                    <button
                      onClick={() => handleBooking(city.name, city.price)}
                      className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all hover:scale-105 shadow-md"
                    >
                      Book Transfer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-4">
                No cities found matching "{searchTerm}"
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="text-cyan-600 font-semibold hover:text-cyan-700"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Why Choose Our Airport Transfers?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-cyan-400 text-xl">✓</span>
                  <span className="text-lg text-gray-300">Professional, courteous drivers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-cyan-400 text-xl">✓</span>
                  <span className="text-lg text-gray-300">Real-time flight tracking included</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-cyan-400 text-xl">✓</span>
                  <span className="text-lg text-gray-300">Clean, comfortable, modern vehicles</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-cyan-400 text-xl">✓</span>
                  <span className="text-lg text-gray-300">Fixed prices with no surge charges</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-cyan-400 text-xl">✓</span>
                  <span className="text-lg text-gray-300">Available 24/7 for all arrivals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-cyan-400 text-xl">✓</span>
                  <span className="text-lg text-gray-300">Fully insured and licensed</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-600 to-blue-700 p-12 rounded-3xl">
              <h3 className="text-3xl font-bold mb-6">Book Your Transfer Now</h3>
              <p className="text-xl text-white/90 mb-8">
                Don't waste time waiting for other transportation options. Get a quick, reliable airport transfer to your destination.
              </p>
              <button
                onClick={() => {
                  const phoneNumber = '1234567890';
                  const message = encodeURIComponent('Hi! I would like to book an airport transfer.');
                  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                }}
                className="w-full bg-white text-cyan-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
              >
                Start Booking on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Questions About Routes?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Can't find your destination? Contact us on WhatsApp and we'll provide a custom quote
          </p>
          <button
            onClick={() => {
              const phoneNumber = '1234567890';
              const message = encodeURIComponent('Hi! I have a custom route request.');
              window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
            }}
            className="bg-white text-cyan-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105"
          >
            Ask About Custom Routes
          </button>
        </div>
      </section>
    </div>
  );
}

export default Hire;
