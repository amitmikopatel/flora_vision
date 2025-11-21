import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-[#0a1f0f] via-[#0d2613] to-[#0a1f0f] pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-300">Breathe Life Into Your Space</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Earth's
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-green-300 mt-2">
                Exhale
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life .
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 group"
              >
                Shop Collection
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-emerald-800/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">500+</div>
                <div className="text-sm text-gray-400 mt-1">Plant Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">10K+</div>
                <div className="text-sm text-gray-400 mt-1">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">98%</div>
                <div className="text-sm text-gray-400 mt-1">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Plant */}
          <div className="relative">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-emerald-500/30 to-green-500/30 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500" />
              
              {/* Plant Image */}
              <div className="relative bg-linear-to-br from-emerald-900/20 to-green-900/20 backdrop-blur-sm rounded-3xl p-8 border border-emerald-500/20 overflow-hidden group-hover:border-emerald-500/40 transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1614887638285-97f7cc8476a0"
                  alt="Featured Plant"
                  className="w-full h-[500px] object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Tag */}
                <div className="absolute top-12 right-12 bg-emerald-600 text-white px-6 py-3 rounded-full shadow-xl backdrop-blur-sm animate-bounce">
                  <span className="font-semibold">Bestseller</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-emerald-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
