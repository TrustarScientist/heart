import React from 'react';
import { ShieldCheck, Target, Zap, Users2, ArrowRight } from 'lucide-react';

export const About = () => {
  return (
    <div className="bg-white">
      {/* Modern Text-Only Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
         <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-4 block">Our Story</span>
         <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-dark mb-8 max-w-4xl mx-auto">
            A private-sector alliance solving the healthcare talent crisis.
         </h1>
         <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            HEART brings together banking efficiency, industry standards, and educational expertise to transform nursing in Nigeria.
         </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
         {/* Split Section: Mission */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div>
               <h2 className="text-3xl font-bold text-brand-dark mb-6">The Mission</h2>
               <div className="prose text-gray-600 leading-relaxed">
                  <p className="mb-4">
                     Founded by <strong>M8 Global KNOW Network</strong>, <strong>Industry Qualifications Ltd (IQ)</strong>, and leading commercial banks, HEART operates on a powerful premise: sustainable workforce development requires collaborative resource pooling.
                  </p>
                  <p>
                     We exist to transform how healthcare talent is educated and deployed. We align investment with infrastructure, education with employment, and national standards with global opportunity.
                  </p>
               </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 md:p-12">
               <h3 className="font-bold text-xl text-brand-dark mb-6">Core Objectives</h3>
               <ul className="space-y-4">
                  <li className="flex gap-4">
                     <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold text-sm">1</div>
                     <p className="text-gray-700 font-medium pt-1">Increase access to quality, digitally-enhanced nursing education.</p>
                  </li>
                  <li className="flex gap-4">
                     <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold text-sm">2</div>
                     <p className="text-gray-700 font-medium pt-1">Finance and facilitate industry-aligned apprenticeships.</p>
                  </li>
                  <li className="flex gap-4">
                     <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold text-sm">3</div>
                     <p className="text-gray-700 font-medium pt-1">Create pathways for skills export and investment.</p>
                  </li>
               </ul>
            </div>
         </div>

         {/* Operational Model - Process Flow */}
         <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-16">Our Operational Model</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {[
                  { title: 'Assessment', desc: 'Analyzing resource gaps within partnering nursing schools.', icon: ShieldCheck },
                  { title: 'Structuring', desc: 'Creating a blended resource package of financing & ICT.', icon: Zap },
                  { title: 'Deployment', desc: 'Managing paid clinical apprenticeships and digital learning.', icon: Users2 },
                  { title: 'Outcome', desc: 'Tracking enrollment to employment and export readiness.', icon: Target },
               ].map((step, idx) => (
                  <div key={idx} className="relative group">
                     {idx !== 3 && (
                        <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-10"></div>
                     )}
                     <div className="w-16 h-16 bg-white border-2 border-brand-primary rounded-full flex items-center justify-center text-brand-primary mx-auto mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                        <step.icon size={28} />
                     </div>
                     <h3 className="text-lg font-bold text-brand-dark text-center mb-2">{step.title}</h3>
                     <p className="text-sm text-gray-500 text-center leading-relaxed">{step.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};