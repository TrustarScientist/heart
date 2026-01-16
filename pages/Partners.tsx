import React from 'react';
import { Building, GraduationCap, LandPlot, HandCoins, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Partners = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-brand-light py-20 border-b border-gray-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-brand-dark mb-6">Partnership Ecosystem</h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
               Collaborating to build a resilient, globally competitive healthcare workforce. Find your role in the alliance.
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12">
          
          {[
             {
                title: "Healthcare Institutions",
                desc: "Gain a reliable pipeline of clinically-experienced, digitally-literate nursing talent. Co-design apprenticeship programs that reduce your training burden and improve staff retention.",
                icon: Building,
                linkText: "Partner as a Hospital",
                bg: "bg-blue-50",
                iconColor: "text-brand-primary"
             },
             {
                title: "Nursing Schools",
                desc: "Access extramural financing to overcome infrastructure hurdles. Digitize your programs to increase enrollment capacity and quality. Enhance your curriculum with global standards.",
                icon: GraduationCap,
                linkText: "Transform Your Institution",
                bg: "bg-green-50",
                iconColor: "text-green-600"
             },
             {
                title: "Government & Development",
                desc: "Implement a scalable, replicable model for healthcare TVET reform. Leverage HEART’s consortium to mobilize private capital for public health education goals.",
                icon: LandPlot,
                linkText: "Collaborate on Policy",
                bg: "bg-orange-50",
                iconColor: "text-orange-600"
             },
             {
                title: "Financial Investors",
                desc: "Deploy capital into a high-impact sector with measurable social and economic returns. Finance tangible assets (ICT labs, equipment) and human capital.",
                icon: HandCoins,
                linkText: "Explore Opportunities",
                bg: "bg-purple-50",
                iconColor: "text-purple-600"
             }
          ].map((partner, idx) => (
             <div key={idx} className="flex flex-col md:flex-row gap-8 items-start p-8 md:p-10 rounded-2xl border border-gray-100 hover:border-brand-primary/30 hover:shadow-card-hover transition-all bg-white group">
                <div className={`p-6 rounded-2xl ${partner.bg} ${partner.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                   <partner.icon size={40} />
                </div>
                <div className="flex-1">
                   <h2 className="text-2xl font-bold text-brand-dark mb-4">{partner.title}</h2>
                   <p className="text-gray-600 leading-relaxed mb-8 text-lg">{partner.desc}</p>
                   <Link to="/contact" className="inline-flex items-center font-bold text-brand-primary hover:text-blue-800 border-b-2 border-transparent hover:border-brand-primary pb-1 transition-all">
                      {partner.linkText} <ArrowRight size={18} className="ml-2" />
                   </Link>
                </div>
             </div>
          ))}

        </div>
      </div>
    </div>
  );
};