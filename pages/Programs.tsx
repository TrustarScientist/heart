import React from 'react';
import { Service } from '../types';
import { Stethoscope, Coins, Laptop, CheckCircle, Briefcase, Scale, ArrowRight, PlayCircle, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const services: Service[] = [
  {
    id: '01',
    title: 'Apprenticeship & Clinical Placement',
    description: 'We architect and manage structured clinical apprenticeships for student nurses and midwives. Partnering with teaching hospitals, we secure paid placements.',
    icon: Stethoscope
  },
  {
    id: '02',
    title: 'Extramural Financing',
    description: 'Structure extramural financing from commercial banks and impact investors to fund ICT labs, simulation equipment, and e-learning platforms.',
    icon: Coins
  },
  {
    id: '03',
    title: 'Curriculum Digitalisation',
    description: 'Partner with nursing schools to digitize curricula and deploy ODeL platforms. Includes content conversion and offline-compatible solutions.',
    icon: Laptop
  },
  {
    id: '04',
    title: 'Accreditation & Certification',
    description: 'Guide programs to meet NMCN standards and facilitate international certification pathways through partners.',
    icon: CheckCircle
  },
  {
    id: '05',
    title: 'Skills Export Facilitation',
    description: 'Career coaching and guided pathways for ethical skills export, connecting graduates with vetted international agencies.',
    icon: Briefcase
  },
  {
    id: '06',
    title: 'Policy Design & Advisory',
    description: 'Advisory services to NMCN and ministries to develop policies that incentivize apprenticeship adoption and digital learning.',
    icon: Scale
  }
];

export const Programs = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
             <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Programs & Solutions</h1>
                <p className="text-xl text-gray-400 max-w-2xl">
                  Integrated services designed to tackle financial, infrastructural, and skills gaps in nursing education.
                </p>
             </div>
             <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20">
                <p className="text-sm font-bold text-gray-300 uppercase tracking-widest mb-1">Focus Area</p>
                <p className="text-xl font-bold">Nursing & Midwifery</p>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Bar (Udemy Style) */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 pb-6 border-b border-gray-200 items-start md:items-center">
           <div className="flex items-center gap-2 px-4 py-2 border border-black text-brand-dark font-bold hover:bg-gray-100 cursor-pointer transition-colors bg-white">
              <Filter size={18} />
              <span>Filter</span>
           </div>
           
           <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-brand-dark text-white rounded-full text-sm font-bold">All</button>
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-600 rounded-full text-sm font-bold hover:bg-gray-50">For Schools</button>
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-600 rounded-full text-sm font-bold hover:bg-gray-50">For Hospitals</button>
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-600 rounded-full text-sm font-bold hover:bg-gray-50">For Investors</button>
           </div>
           
           <div className="ml-auto text-sm text-gray-500 font-bold">
              {services.length} Results
           </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={service.id} className="bg-white group cursor-pointer border border-gray-200 hover:border-brand-primary/30 hover:shadow-card-hover transition-all duration-300 flex flex-col h-full">
              
              {/* Card Image Placeholder */}
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                 <img 
                    src={`https://source.unsplash.com/random/800x600?healthcare,hospital,${idx}`} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                    onError={(e) => {e.currentTarget.style.display='none'}}
                 />
                 {/* Fallback overlay if image loads or doesn't */}
                 <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply"></div>
                 
                 {/* Icon Badge */}
                 <div className="absolute top-0 right-0 bg-brand-primary text-white p-3 rounded-bl-xl shadow-lg">
                    <service.icon size={20} />
                 </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-brand-dark mb-3 line-clamp-2 group-hover:text-brand-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-6 flex-grow line-clamp-3 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="pt-4 border-t border-gray-100 mt-auto flex items-center justify-between">
                   <span className="text-xs font-bold text-gray-400 uppercase">Learn More</span>
                   <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                      <ArrowRight size={16} />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solution Strip */}
        <div className="mt-20 bg-brand-dark rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-xl">
           <div>
              <h3 className="text-2xl font-bold mb-2">Need a custom solution?</h3>
              <p className="text-gray-400">We design bespoke apprenticeship models for large networks.</p>
           </div>
           <Link to="/contact" className="px-8 py-4 bg-brand-primary text-white font-bold rounded hover:bg-blue-600 transition-colors whitespace-nowrap shadow-lg">
              Contact Partnerships
           </Link>
        </div>
      </div>
    </div>
  );
};