import { MessageCircle } from 'lucide-react';

function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+94758110086';
    const message = encodeURIComponent('Hi! I would like to inquire about your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with us
      </span>
    </button>
  );
}

export default WhatsAppButton;
