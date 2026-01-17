import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Heart, BookOpen, UserPlus, Users, Award, Briefcase, ChevronRight, Building2, Quote, Star, Check, ArrowRight, ShieldCheck, Zap, Globe, TrendingUp, HelpCircle, Plus, Minus } from 'lucide-react';

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

const faqs = [
  {
    q: "Is HEART an accredited institution?",
    a: "HEART is an operational alliance that partners with accredited Nursing & Midwifery training institutions. We do not replace schools; we empower them with financing, digital tools, and apprenticeship management to meet NMCN and global standards."
  },
  {
    q: "How does the apprenticeship model work?",
    a: "We co-design programs with teaching hospitals where students gain paid, supervised clinical experience. This 'Learn & Earn' model ensures graduates are job-ready from day one."
  },
  {
    q: "How can my institution access financing?",
    a: "We structure blended resource packages from our consortium of commercial banks and impact investors. Contact our partnerships team to undergo a resource gap assessment."
  },
  {
    q: "Does HEART facilitate working abroad?",
    a: "Yes. Our Skills Export Facilitation program provides ethical pathways for qualified graduates to access international opportunities, ensuring they are certified and prepared for global healthcare systems."
  }
];

export const Home = () => {
  const [activeTab, setActiveTab] = useState('hospitals');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="animate-fade-in">
      <Hero />
      
      {/* 1. Trusted By Strip - Immediate Credibility */}
      <div className="border-b border-gray-200 bg-white py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Founding Consortium & Strategic Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="text-xl font-serif font-bold text-brand-dark">M8 GLOBAL</span>
             <span className="h-6 w-px bg-gray-300"></span>
             <span className="text-xl font-serif font-bold text-brand-dark">IQ LTD</span>
             <span className="h-6 w-px bg-gray-300"></span>
             <span className="text-xl font-serif font-bold text-brand-dark">NMCN</span>
             <span className="h-6 w-px bg-gray-300"></span>
             <span className="text-xl font-serif font-bold text-brand-dark">STERLING BANK</span>
          </div>
        </div>
      </div>

      {/* 2. The Problem/Solution - "Why Now?" */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
             <span className="inline-block py-1 px-3 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wide mb-6">The Vision</span>
             <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">Solving the Healthcare Talent Crisis</h2>
             <p className="text-lg text-gray-600 leading-relaxed mb-8">
               Nigeria faces a critical shortage of skilled healthcare professionals. Traditional education pipelines are fractured. 
               <span className="font-bold text-brand-dark"> HEART fixes this</span> by merging the rigorous standards of international accreditation with the financial power of the private sector.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                   <ShieldCheck className="text-brand-primary mb-4" size={32} />
                   <h3 className="font-bold text-brand-dark mb-2">Quality Assurance</h3>
                   <p className="text-sm text-gray-500">Aligning with NMCN and global export standards.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                   <Zap className="text-brand-primary mb-4" size={32} />
                   <h3 className="font-bold text-brand-dark mb-2">Private Efficiency</h3>
                   <p className="text-sm text-gray-500">Moving beyond dialogue to rapid operational deployment.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                   <Globe className="text-brand-primary mb-4" size={32} />
                   <h3 className="font-bold text-brand-dark mb-2">Global Mobility</h3>
                   <p className="text-sm text-gray-500">Creating ethical pathways for skills export and employment.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Stakeholder Pathways - "Find Your Role" (Interactive) */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-brand-dark mb-4">Who is HEART For?</h2>
               <p className="text-gray-500">Our ecosystem connects all key players in the healthcare value chain.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
               {[
                 { id: 'hospitals', label: 'Healthcare Institutions' },
                 { id: 'schools', label: 'Nursing Schools' },
                 { id: 'investors', label: 'Investors & Donors' },
                 { id: 'govt', label: 'Government' }
               ].map(tab => (
                  <button 
                     key={tab.id}
                     onClick={() => setActiveTab(tab.id)}
                     className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                        activeTab === tab.id 
                        ? 'bg-brand-primary text-white shadow-lg scale-105' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                     }`}
                  >
                     {tab.label}
                  </button>
               ))}
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-card min-h-[400px] flex items-center transition-all">
               {activeTab === 'hospitals' && (
                  <div className="grid md:grid-cols-2 gap-12 items-center w-full animate-fade-in">
                     <div>
                        <h3 className="text-2xl font-bold text-brand-dark mb-4">For Hospitals & Networks</h3>
                        <p className="text-lg text-gray-600 mb-6">Gain a reliable pipeline of clinically-experienced, digitally-literate nursing talent. Reduce training burdens and improve staff retention through our co-designed apprenticeship programs.</p>
                        <ul className="space-y-3 mb-8">
                           <li className="flex gap-3 text-gray-700"><Check className="text-green-500" size={20} /> Access pre-vetted, skilled talent.</li>
                           <li className="flex gap-3 text-gray-700"><Check className="text-green-500" size={20} /> Co-design curriculum to fit your needs.</li>
                           <li className="flex gap-3 text-gray-700"><Check className="text-green-500" size={20} /> Upgrade facility simulation capacity.</li>
                        </ul>
                        <Link to="/partners" className="inline-flex items-center font-bold text-brand-primary hover:underline">
                           Partner as a Hospital <ArrowRight size={18} className="ml-2" />
                        </Link>
                     </div>
                     <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Hospital" className="rounded-xl shadow-lg w-full h-64 object-cover" />
                  </div>
               )}
               {activeTab === 'schools' && (
                  <div className="grid md:grid-cols-2 gap-12 items-center w-full animate-fade-in">
                     <div>
                        <h3 className="text-2xl font-bold text-brand-dark mb-4">For Nursing Schools</h3>
                        <p className="text-lg text-gray-600 mb-6">Access extramural financing to overcome infrastructure hurdles. Digitize your programs to increase enrollment capacity and quality without unsustainable debt.</p>
                        <ul className="space-y-3 mb-8">
                           <li className="flex gap-3 text-gray-700"><Check className="text-green-500" size={20} /> Fund ICT labs & simulation equipment.</li>
                           <li className="flex gap-3 text-gray-700"><Check className="text-green-500" size={20} /> Deploy ODeL platforms for scale.</li>
                           <li className="flex gap-3 text-gray-700"><Check className="text-green-500" size={20} /> International certification alignment.</li>
                        </ul>
                        <Link to="/partners" className="inline-flex items-center font-bold text-brand-primary hover:underline">
                           Transform Your Institution <ArrowRight size={18} className="ml-2" />
                        </Link>
                     </div>
                     <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Education" className="rounded-xl shadow-lg w-full h-64 object-cover" />
                  </div>
               )}
               {activeTab === 'investors' && (
                  <div className="grid md:grid-cols-2 gap-12 items-center w-full animate-fade-in">
                     <div>
                        <h3 className="text-2xl font-bold text-brand-dark mb-4">For Investors & Financiers</h3>
                        <p className="text-lg text-gray-600 mb-6">Deploy capital into a high-impact sector with measurable social and economic returns. Finance tangible assets and human capital that generate direct value.</p>
                        <ul className="space-y-3 mb-8">
                           <li className="flex gap-3 text-gray-700"><Check className="text-green-500" size={20} /> High-impact social ROI.</li>
                           <li className="flex gap-3 text-gray-700"><Check className="text-green-500" size={20} /> Structured, de-risked investment models.</li>
                           <li className="flex gap-3 text-gray-700"><Check className="text-green-500" size={20} /> Scalable across the African continent.</li>
                        </ul>
                        <Link to="/partners" className="inline-flex items-center font-bold text-brand-primary hover:underline">
                           View Investment Model <ArrowRight size={18} className="ml-2" />
                        </Link>
                     </div>
                     <img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Finance" className="rounded-xl shadow-lg w-full h-64 object-cover" />
                  </div>
               )}
               {activeTab === 'govt' && (
                  <div className="grid md:grid-cols-2 gap-12 items-center w-full animate-fade-in">
                     <div>
                        <h3 className="text-2xl font-bold text-brand-dark mb-4">For Government & Policy</h3>
                        <p className="text-lg text-gray-600 mb-6">Implement a scalable, replicable model for healthcare TVET reform. Collaborate on policy and programs that address nursing shortages and create economic opportunity.</p>
                        <ul className="space-y-3 mb-8">
                           <li className="flex gap-3 text-gray-700"><Check className="text-green-500" size={20} /> Replicable TVET reform model.</li>
                           <li className="flex gap-3 text-gray-700"><Check className="text-green-500" size={20} /> Private capital mobilization.</li>
                           <li className="flex gap-3 text-gray-700"><Check className="text-green-500" size={20} /> Skills export strategy alignment.</li>
                        </ul>
                        <Link to="/partners" className="inline-flex items-center font-bold text-brand-primary hover:underline">
                           Collaborate on Policy <ArrowRight size={18} className="ml-2" />
                        </Link>
                     </div>
                     <img src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Policy" className="rounded-xl shadow-lg w-full h-64 object-cover" />
                  </div>
               )}
            </div>
         </div>
      </section>

      {/* 4. Methodology - The HEART Pillars (Re-designed) */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        {/* Abstract Bg */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-brand-accent font-bold uppercase tracking-wider text-sm">Our Methodology</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">The HEART Framework</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              A comprehensive system designed to build sustainability and scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
             {[
               { l: 'H', t: 'Healthcare', d: 'Focused on Nursing & Support', i: Heart },
               { l: 'E', t: 'Education', d: 'Modern curricula & E-Learning', i: BookOpen },
               { l: 'A', t: 'Apprenticeship', d: 'Structured On-the-Job Training', i: UserPlus },
               { l: 'R', t: 'Resource', d: 'Collaborative Financing', i: Users },
               { l: 'T', t: 'Training', d: 'Certification & Standards', i: Award },
             ].map((item, idx) => (
               <div 
                  key={item.l} 
                  className={`bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 group cursor-default shadow-lg delay-${idx*100}`}
               >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-primary to-blue-600 flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-md group-hover:scale-110 transition-transform">
                    {item.l}
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-white">{item.t}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed border-t border-white/10 pt-3">{item.d}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Key Solutions Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-3">Core Programs</h2>
              <p className="text-gray-600 max-w-xl">
                Integrated services tackling financial, infrastructural, and skills gaps.
              </p>
            </div>
            <Link to="/programs" className="inline-flex items-center font-bold text-brand-primary hover:text-blue-700 transition-colors">
              View all programs <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((prog, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer flex flex-col h-full group">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
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

      {/* 6. Projected Impact Stats */}
      <section className="py-20 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
              <div className="p-4">
                 <div className="text-4xl md:text-5xl font-bold mb-2">36+</div>
                 <div className="text-blue-200 text-sm font-bold uppercase tracking-wider">States Targeted</div>
              </div>
              <div className="p-4">
                 <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                 <div className="text-blue-200 text-sm font-bold uppercase tracking-wider">Partner Hospitals</div>
              </div>
              <div className="p-4">
                 <div className="text-4xl md:text-5xl font-bold mb-2">10k+</div>
                 <div className="text-blue-200 text-sm font-bold uppercase tracking-wider">Nurses Trained</div>
              </div>
              <div className="p-4">
                 <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                 <div className="text-blue-200 text-sm font-bold uppercase tracking-wider">Accredited</div>
              </div>
           </div>
        </div>
      </section>

      {/* 7. FAQ Section - "Address Objections" */}
      <section className="py-24 bg-white">
         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-brand-dark mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
               {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300">
                     <button 
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50"
                     >
                        <span className="font-bold text-brand-dark text-lg">{faq.q}</span>
                        {openFaq === idx ? <Minus size={20} className="text-brand-primary" /> : <Plus size={20} className="text-gray-400" />}
                     </button>
                     <div className={`bg-gray-50 px-6 overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-48 py-6' : 'max-h-0 py-0'}`}>
                        <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                     </div>
                  </div>
               ))}
            </div>
            <div className="mt-10 text-center">
               <Link to="/contact" className="text-brand-primary font-bold hover:underline flex items-center justify-center gap-2">
                  Have more questions? Contact Us <ArrowRight size={16} />
               </Link>
            </div>
         </div>
      </section>

      {/* 8. Newsletter / Lead Gen (New) */}
      <section className="py-20 bg-brand-light border-y border-gray-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto">
               <h2 className="text-2xl font-bold text-brand-dark mb-4">Stay Informed on Policy & Opportunities</h2>
               <p className="text-gray-600 mb-8">Join our mailing list to receive updates on funding rounds, partnership calls, and workforce development insights.</p>
               <form className="flex flex-col sm:flex-row gap-3">
                  <input type="email" placeholder="Enter your email address" className="flex-grow px-5 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none" />
                  <button className="px-8 py-4 bg-brand-dark text-white font-bold rounded-lg hover:bg-gray-800 transition-colors shadow-lg">
                     Subscribe
                  </button>
               </form>
               <p className="text-xs text-gray-400 mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </div>
         </div>
      </section>

      {/* 9. Final CTA Banner */}
      <section className="bg-brand-primary py-24 text-center relative overflow-hidden">
         {/* Background Shapes */}
         <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-dark/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
         
         <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to join the alliance?</h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
               Whether you represent a hospital, a training institution, or a financial body, there is a role for you in HEART.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/contact" className="bg-white text-brand-primary px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-xl text-lg">
                  Become a Partner
               </Link>
               <Link to="/programs" className="bg-brand-primary border border-white/30 text-white px-10 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors text-lg">
                  View Programs
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
};