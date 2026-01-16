import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Heart, BookOpen, UserPlus, Users, Award, Briefcase, ChevronRight, Building2, Quote, Star, Check, ArrowRight } from 'lucide-react';

const programs = [
  {
    title: "Apprenticeship Management",
    desc: "Structured clinical placements integrating theory with supervised practice.",
    icon: UserPlus,
    tags: ["For Hospitals", "For Students"]
  },
  {
    title: "Extramural Financing",
    desc: "Unlocking capital for educational infrastructure and ICT labs.",
    icon: Building2,
    tags: ["For Schools", "For Banks"]
  },
  {
    title: "Curriculum Digitalisation",
    desc: "Deploying ODeL platforms to broaden access and modernize learning.",
    icon: BookOpen,
    tags: ["For Educators"]
  },
  {
    title: "Skills Export Pathways",
    desc: "Guided pathways for ethical international recruitment and certification.",
    icon: Briefcase,
    tags: ["Global"]
  }
];

export const Home = () => {
  return (
    <>
      <Hero />
      
      {/* Trusted By Strip */}
      <div className="border-b border-gray-200 bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Trusted by leading organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Text-based Logos for Reliability */}
             <h3 className="text-2xl font-bold font-serif text-brand-dark">M8 GLOBAL</h3>
             <h3 className="text-2xl font-bold font-serif text-brand-dark">IQ LTD</h3>
             <h3 className="text-2xl font-bold font-serif text-brand-dark">NMCN</h3>
             <h3 className="text-2xl font-bold font-serif text-brand-dark">ACCESS BANK</h3>
             <h3 className="text-2xl font-bold font-serif text-brand-dark">STERLING</h3>
          </div>
        </div>
      </div>

      {/* The HEART Framework (Methodology) */}
      <section className="py-20 bg-brand-dark text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12">
            <span className="text-brand-accent font-bold uppercase tracking-wider text-sm">Our Methodology</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">The HEART Pillars</h2>
            <p className="text-gray-400 mt-4 max-w-2xl">
              A consortium model that pools financial, technological, and expertise resources from private, public, and development sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
             {[
               { l: 'H', t: 'Healthcare-Focused', d: 'Programs aligned with national benchmarks.', i: Heart },
               { l: 'E', t: 'Education', d: 'Modern curricula & e-learning integration.', i: BookOpen },
               { l: 'A', t: 'Apprenticeship', d: 'Structured on-the-job training.', i: UserPlus },
               { l: 'R', t: 'Resource', d: 'Collaborative financing & expertise.', i: Users },
               { l: 'T', t: 'Training', d: 'Certification by NMCN & global bodies.', i: Award },
             ].map((item, idx) => (
               <div key={item.l} className="bg-white/5 border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-colors group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary font-bold text-xl mb-4 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    {item.l}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white">{item.t}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.d}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Programs Grid (Udemy Style) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-3">Explore Our Solutions</h2>
              <p className="text-gray-600 max-w-xl">
                HEART provides a turnkey platform that connects healthcare institutions, training schools, financiers, and government agencies.
              </p>
            </div>
            <Link to="/programs" className="inline-flex items-center font-bold text-brand-primary hover:text-blue-700 border border-brand-primary/20 bg-white px-4 py-2 rounded-full transition-colors">
              View all programs <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((prog, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer flex flex-col h-full border border-transparent hover:border-brand-primary/10">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-primary mb-6">
                  <prog.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-3">{prog.title}</h3>
                <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed">{prog.desc}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {prog.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold bg-gray-100 text-gray-500 px-2 py-1 rounded border border-gray-200 uppercase tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Prop / Why Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative order-2 lg:order-1">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Medical Meeting" 
                    className="w-full h-auto object-cover" 
                 />
                 <div className="absolute inset-0 bg-brand-primary/10"></div>
               </div>
               {/* Impact Badge */}
               <div className="absolute -bottom-8 -right-8 bg-brand-dark text-white p-6 rounded-lg shadow-xl max-w-[240px] hidden md:block">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <Star className="text-yellow-400 fill-current" size={16} />
                  </div>
                  <p className="font-serif italic text-sm">"Sustainable development requires collaborative resource pooling."</p>
               </div>
            </div>

            <div className="order-1 lg:order-2">
               <span className="text-brand-primary font-bold uppercase tracking-wider text-sm mb-2 block">Why HEART?</span>
               <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">Transforming the System.</h2>
               <p className="text-gray-600 mb-8 text-lg">
                  We exist to transform how healthcare talent is educated and deployed, moving beyond dialogue to deployment.
               </p>
               
               <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                     <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                        <Check size={14} strokeWidth={3} />
                     </div>
                     <div>
                        <h4 className="font-bold text-lg text-brand-dark">Private Sector Efficiency</h4>
                        <p className="text-gray-600 text-sm mt-1">Bringing the financial engineering of commercial banking to education.</p>
                     </div>
                  </div>
                  <div className="flex gap-4 items-start">
                     <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                        <Check size={14} strokeWidth={3} />
                     </div>
                     <div>
                        <h4 className="font-bold text-lg text-brand-dark">Global Standards</h4>
                        <p className="text-gray-600 text-sm mt-1">Curricula aligned with international benchmarks for global competitiveness.</p>
                     </div>
                  </div>
                  <div className="flex gap-4 items-start">
                     <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                        <Check size={14} strokeWidth={3} />
                     </div>
                     <div>
                        <h4 className="font-bold text-lg text-brand-dark">Sustainable Financing</h4>
                        <p className="text-gray-600 text-sm mt-1">Enabling schools to modernize infrastructure without unsustainable debt.</p>
                     </div>
                  </div>
               </div>
               
               <div className="mt-10">
                  <Link to="/about" className="text-brand-primary font-bold hover:text-blue-700 flex items-center gap-2">
                     Read Our Operational Model <ArrowRight size={18} />
                  </Link>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-primary py-20 text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to join the alliance?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
               Whether you represent a hospital, a training institution, or a financial body, there is a role for you in HEART.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/contact" className="bg-white text-brand-primary px-8 py-4 rounded font-bold hover:bg-gray-100 transition-colors shadow-lg">
                  Become a Partner
               </Link>
               <Link to="/programs" className="bg-transparent border border-white text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors">
                  View Programs
               </Link>
            </div>
         </div>
      </section>
    </>
  );
};