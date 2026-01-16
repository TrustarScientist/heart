import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  const [role, setRole] = useState('Healthcare Institution');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest in HEART. Our partnerships team will contact you shortly.");
  };

  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row">
      {/* Left Panel - Info */}
      <div className="md:w-1/3 bg-brand-dark text-white p-12 lg:p-20 flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-serif font-bold mb-6">Get Involved.</h1>
          <p className="text-gray-400 mb-12 leading-relaxed">
            HEART is building the future of healthcare talent now. Whether you want to hire, train, or invest, we are ready to collaborate.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-brand-primary">
                  <Mail size={18} />
               </div>
               <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Email</p>
                  <p className="font-medium">partners@heart.tier.edu.ng</p>
               </div>
            </div>
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-brand-primary">
                  <Phone size={18} />
               </div>
               <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Phone</p>
                  <p className="font-medium">+234 (0) 123 456 7890</p>
               </div>
            </div>
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-brand-primary">
                  <MapPin size={18} />
               </div>
               <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">HQ</p>
                  <p className="font-medium">Abuja, Nigeria</p>
               </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-sm text-gray-500">
           © HEART Initiative.
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="md:w-2/3 p-12 lg:p-20 bg-gray-50 overflow-y-auto">
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-8">
          
          <div>
            <label className="block text-sm font-bold text-brand-dark mb-4">I represent a:</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {['Healthcare Institution', 'Nursing School', 'Govt Agency', 'Investor'].map((opt) => (
                  <button
                     key={opt}
                     type="button"
                     onClick={() => setRole(opt)}
                     className={`px-4 py-3 rounded-lg border text-sm font-bold transition-all text-left ${
                        role === opt 
                        ? 'bg-brand-primary text-white border-brand-primary ring-2 ring-brand-primary/20' 
                        : 'bg-white text-gray-600 border-gray-200 hover:border-brand-primary hover:text-brand-primary'
                     }`}
                  >
                     {opt}
                  </button>
               ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Name</label>
              <input type="text" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all" placeholder="Your Name" required />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Organization</label>
              <input type="text" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all" placeholder="Company / School" required />
            </div>
          </div>

          <div>
             <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Email</label>
             <input type="email" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all" placeholder="you@example.com" required />
          </div>

          <div>
             <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Message</label>
             <textarea rows={4} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all" placeholder="How can we collaborate?"></textarea>
          </div>

          <button type="submit" className="w-full py-4 bg-brand-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-all shadow-lg flex items-center justify-center gap-2">
             Send Inquiry <Send size={18} />
          </button>

        </form>
      </div>
    </div>
  );
};