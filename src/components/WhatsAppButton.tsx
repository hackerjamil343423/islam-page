
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/201152628699', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center animate-pulse hover:animate-none"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
    </button>
  );
};

export default WhatsAppButton;
