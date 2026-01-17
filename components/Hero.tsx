import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="bg-brand-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-[1.1] mb-6 font-sans">
              Build the Future of{" "}
              <span className="text-brand-primary">Healthcare.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              The Healthcare Education & Apprenticeship Resource Training
              (HEART) initiative is a specialized alliance transforming nursing
              education in Nigeria.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/programs"
                className="inline-flex justify-center items-center px-8 py-4 bg-brand-primary text-white font-bold rounded hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Explore Our Model
              </Link>
              <Link
                to="/contact"
                className="inline-flex justify-center items-center px-8 py-4 bg-white border border-gray-300 text-brand-dark font-bold rounded hover:bg-gray-50 transition-all hover:border-brand-primary"
              >
                Partner With HEART
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Backed By Industry Leaders
              </p>
              <div className="flex flex-wrap gap-4 items-center opacity-70">
                <span className="font-bold text-gray-600">M8 GLOBAL</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="font-bold text-gray-600">IQ LTD</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="font-bold text-gray-600">NMCN</span>
              </div>
            </div>
          </div>

          {/* Right: Image/Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
              {/* Use a reliable image URL for nursing/medical education */}
              <img
                src="https://media.istockphoto.com/id/1380983332/photo/shot-of-a-nurse-speaking-to-her-male-patient.jpg?s=612x612&w=0&k=20&c=vMTVRAKV5JZjXk6fHtNGcQsovMfBCeGnhXFV8aYrT4Y="
                alt="Nursing Student"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000"
              />

              {/* Floating Stats Card (Udemy style overlay) */}
              <div className="absolute top-6 right-6 bg-white p-4 rounded-lg shadow-lg max-w-[200px] animate-fade-in-up">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-brand-primary rounded-full"></div>
                  <span className="text-xs font-bold text-gray-500 uppercase">
                    Status
                  </span>
                </div>
                <p className="font-bold text-brand-dark leading-tight">
                  Globally Competitive Pipeline
                </p>
              </div>

              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur p-5 rounded-lg shadow-lg border-l-4 border-brand-primary max-w-xs">
                <p className="text-sm font-bold text-brand-dark mb-1">
                  Resource Collaboration
                </p>
                <p className="text-xs text-gray-500">
                  Pooling financial & technological expertise.
                </p>
              </div>
            </div>

            {/* Decorative Dots */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-accent/20 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};