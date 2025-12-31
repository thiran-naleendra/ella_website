import { Heart, Award, Users, MapPin, Clock, Globe, Shield } from 'lucide-react';

function About() {
  const stats = [
    { icon: <Users />, value: '10,000+', label: 'Happy Customers' },
    { icon: <Award />, value: '5 Years', label: 'Experience' },
    { icon: <Globe />, value: '50+', label: 'Destinations' },
    { icon: <Clock />, value: '24/7', label: 'Support' },
  ];

  const values = [
    {
      icon: <Heart />,
      title: 'Customer First',
      description: 'Your satisfaction and safety are our top priorities. We go the extra mile to ensure you have an amazing experience.',
    },
    {
      icon: <Award />,
      title: 'Quality Service',
      description: 'We maintain the highest standards in vehicle maintenance, driver professionalism, and tour experiences.',
    },
    {
      icon: <Shield />,
      title: 'Trust & Safety',
      description: 'All our services are fully insured and licensed. Your safety is never compromised.',
    },
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    },
    {
      name: 'Sarah Johnson',
      role: 'Operations Manager',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
    },
    {
      name: 'Mike Davis',
      role: 'Tour Coordinator',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg',
    },
  ];

  return (
    <div>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-700 to-teal-800">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-100">
            Your trusted partner in creating unforgettable travel experiences
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2019, Explore Travel & Tours began with a simple mission: to make travel accessible, comfortable, and unforgettable for everyone. What started as a small car rental business has grown into a comprehensive travel service provider.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Today, we offer a wide range of services including vehicle rentals, airport transfers, and safari tours. Our commitment to excellence and customer satisfaction has made us a trusted name in the tourism industry.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that every journey should be special, and we work tirelessly to ensure that your experience with us exceeds your expectations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 rounded-2xl text-white text-center hover:scale-105 transition-transform"
                >
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-cyan-50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-2xl hover:bg-gray-100 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-full mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="relative overflow-hidden rounded-2xl mb-6 h-80">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-cyan-600 font-medium">{member.role}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <MapPin className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Visit Our Office</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Stop by our office to discuss your travel plans or contact us via WhatsApp for instant assistance
            </p>
            <div className="space-y-2 text-lg">
              <p>123 Tourism Street, City Center</p>
              <p>Open Daily: 8:00 AM - 8:00 PM</p>
              <p>Phone: +1 234 567 890</p>
              <p>Email: info@exploretours.com</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Journey With Us
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            We're here to make your travel dreams come true. Let's get started!
          </p>
          <button
            onClick={() => {
              const phoneNumber = '+94758110086';
              const message = encodeURIComponent('Hi! I would like to learn more about your services.');
              window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
            }}
            className="bg-white text-cyan-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
          >
            Contact Us on WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;
