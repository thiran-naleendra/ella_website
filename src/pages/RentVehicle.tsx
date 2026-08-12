import { Car, Bike, Fuel, Users, Shield, Zap } from 'lucide-react';

function RentVehicle() {
  const cars = [
    {
      name: 'Economy Car',
      type: 'Compact & Fuel Efficient',
      price: '$35/day',
      image: 'https://motorguide-store.s3.ap-southeast-1.amazonaws.com/ikman/large_Suzuki_wagon_R_13_0816cec561.jpg',
      features: ['5 Seats', 'Manual/Auto', 'AC', 'Bluetooth'],
    },
    {
      name: 'SUV',
      type: 'Spacious & Comfortable',
      price: '$70/day',
      image: 'https://www.acedrive.sg/wp-content/uploads/2022/09/honda-vezel-g-render.png',
      features: ['4 Seats', 'Automatic', 'AC', '4WD'],
    },
    {
      name: 'Sedan',
      type: 'Premium Experience',
      price: '$90/day',
      image: 'https://imgcdn.zigwheels.lk/large/gallery/exterior/20/150/toyota-prius-front-angle-low-view.jpg',
      features: ['5 Seats', 'Automatic', 'Premium AC', 'Leather Seats'],
    },
  ];

  const bikes = [
    {
      name: 'Scooter',
      type: 'Easy City Riding',
      price: 'LKR 2500/day',
      image: 'https://www.honda.lk/uploads/products/565b6960-b521-47c2-9efc-cc26a47829f3.png',
      features: ['Automatic', 'Fuel Efficient', 'Easy Park', 'Helmet Included'],
    },
    
  ];

  const benefits = [
    { icon: <Shield />, title: 'Fully Insured', description: 'Comprehensive coverage' },
    { icon: <Fuel />, title: 'Flexible Plans', description: 'Daily, weekly, monthly' },
    { icon: <Users />, title: 'Free Delivery', description: 'To your location' },
    { icon: <Zap />, title: 'Easy Booking', description: 'Quick via WhatsApp' },
  ];

  const handleBooking = (vehicleName: string, type: string) => {
    const phoneNumber = '+94758110086';
    const message = encodeURIComponent(`Hi! I would like to rent a ${vehicleName} (${type}).`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-700 to-teal-800">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(/vehicle-rental-hero.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Car className="h-20 w-20 text-white mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Rent Vehicles
          </h1>
          <p className="text-xl md:text-2xl text-gray-100">
            Choose from our premium fleet of cars and bikes
          </p>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                  {benefit.icon}
                </div>
                <h3 className="font-bold mb-1">{benefit.title}</h3>
                <p className="text-sm text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <Car className="h-10 w-10 text-blue-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Car Rentals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {cars.map((car, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={car.image}
                    alt={`${car.name} rental in Ella Sri Lanka`}
                    loading="lazy"
                    width="640"
                    height="360"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{car.name}</h3>
                  <p className="text-cyan-600 mb-4">{car.type}</p>
                  <div className="rental-price text-3xl font-bold text-gray-900 mb-6">{car.price}</div>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {car.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => handleBooking(car.name, 'Car')}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all hover:scale-105"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center mb-12">
            <Bike className="h-10 w-10 text-cyan-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Bike Rentals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {bikes.map((bike, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={bike.image}
                    alt="Scooter rental in Ella Sri Lanka"
                    loading="lazy"
                    width="640"
                    height="360"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{bike.name}</h3>
                  <p className="text-cyan-600 mb-4">{bike.type}</p>
                  <div className="rental-price text-3xl font-bold text-gray-900 mb-6">{bike.price}</div>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {bike.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => handleBooking(bike.name, 'Bike')}
                    className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-teal-700 transition-all hover:scale-105"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Hit the Road?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            All vehicles are well-maintained, fully insured, and ready for your adventure
          </p>
          <button
            onClick={() => {
              const phoneNumber = '1234567890';
              const message = encodeURIComponent('Hi! I would like to inquire about vehicle rentals.');
              window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
            }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all hover:scale-105 shadow-xl"
          >
            Contact Us on WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
}

export default RentVehicle;
