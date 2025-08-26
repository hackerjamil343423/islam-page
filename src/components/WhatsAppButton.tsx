
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/201152628699', '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="glass-morphism px-4 py-2 rounded-xl shadow-premium">
          <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">تواصل معنا عبر الواتساب</span>
        </div>
      </div>
      
      {/* Button with premium styling */}
      <button
        onClick={handleClick}
        className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-premium hover:shadow-glow transition-all duration-500 hover:scale-110 active:scale-95 flex items-center justify-center group overflow-hidden"
        style={{
          boxShadow: '0 20px 40px rgba(34, 197, 94, 0.4), 0 8px 16px rgba(0, 0, 0, 0.1)'
        }}
        aria-label="Contact us on WhatsApp"
      >
        {/* Background animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
        
        {/* Icon */}
        <MessageCircle className="w-7 h-7 md:w-9 md:h-9 relative z-10 group-hover:scale-110 transition-transform duration-300" />
        
        {/* Floating animation rings */}
        <div className="absolute inset-0 rounded-full border-2 border-green-400 opacity-75 animate-ping"></div>
        <div className="absolute inset-2 rounded-full border border-green-300 opacity-50 animate-ping delay-75"></div>
      </button>
    </div>
  );
};

export default WhatsAppButton;
