import { Plane, Clock, Shield, MapPin, CheckCircle } from 'lucide-react';

function AirportTransfer() {
  const features = [
    'Professional chauffeurs',
    'Flight tracking',
    'Meet & greet service',
    'Free waiting time',
    'Clean and comfortable vehicles',
    'Child seats available',
  ];

  const handleBooking = () => {
    const phoneNumber = '+94758110086';
    const message = encodeURIComponent('Hi! I would like to book an airport transfer service.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-cyan-700 to-blue-800">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Plane className="h-20 w-20 text-white mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Airport Transfer Service
          </h1>
          <p className="text-xl md:text-2xl text-gray-100">
            Reliable, comfortable, and hassle-free airport transportation
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Stress-Free Travel to and from the Airport
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Start your journey right with our premium airport transfer service. We ensure you arrive on time, every time, in comfort and style.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our professional drivers monitor your flight status and adjust pickup times accordingly, so you never have to worry about delays.
              </p>
              <button
                onClick={handleBooking}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-blue-700 transition-all hover:scale-105 shadow-lg"
              >
                Book Now on WhatsApp
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 rounded-2xl text-white">
                <Clock className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">24/7</h3>
                <p className="text-cyan-50">Available anytime</p>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-teal-600 p-8 rounded-2xl text-white">
                <Shield className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Safe</h3>
                <p className="text-blue-50">Insured vehicles</p>
              </div>
              <div className="bg-gradient-to-br from-teal-600 to-cyan-600 p-8 rounded-2xl text-white">
                <MapPin className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Track</h3>
                <p className="text-teal-50">Flight monitoring</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-600 to-blue-700 p-8 rounded-2xl text-white">
                <Plane className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Fast</h3>
                <p className="text-cyan-50">Quick service</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What's Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white p-6 rounded-xl shadow-sm"
                >
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-300">Simple and straightforward process</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Book', description: 'Contact us via WhatsApp with your details' },
              { step: '2', title: 'Confirm', description: 'Receive confirmation and driver details' },
              { step: '3', title: 'Relax', description: 'We track your flight and adjust timing' },
              { step: '4', title: 'Travel', description: 'Meet your driver and enjoy the ride' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Airport Transfer?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Book now and enjoy a seamless journey to or from the airport
          </p>
          <button
            onClick={handleBooking}
            className="bg-white text-cyan-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
          >
            Book on WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
}

export default AirportTransfer;
