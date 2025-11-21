import React from 'react';
import { Wind, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/cartSlice';
import { featuredO2Plant } from '../components/mock';
import { Button } from './ui/button';
// import { toast } from '../hooks/use-toast';

const O2Plants = () => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(featuredO2Plant));
    toast({
      title: "Added to cart!",
      description: `${featuredO2Plant.name} has been added to your cart.`,
    });
  };

  return (
    <section className="py-20 bg-linear-to-b from-[#0d2613] to-[#0a1f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-4">
            <Wind className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300">Best O₂ Producer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Best <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-green-300">O₂</span> Plant
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Meet our champion air purifier that transforms your indoor air quality
          </p>
        </div>

        {/* Featured Plant Card */}
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-linear-to-r from-emerald-500/20 to-green-500/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-700" />

          <div className="relative bg-linear-to-br from-emerald-900/30 to-green-900/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-emerald-500/30 group-hover:border-emerald-500/50 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Image Side */}
              <div className="relative h-[500px] lg:h-auto overflow-hidden">
                <img
                  src={featuredO2Plant.image}
                  alt={featuredO2Plant.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Floating Badges */}
                <div className="absolute top-6 left-6 space-y-3">
                  <div className="bg-emerald-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 shadow-lg">
                    <Wind className="w-4 h-4" />
                    <span>High O₂ Output</span>
                  </div>
                  <div className="bg-green-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 shadow-lg animate-pulse">
                    <Sparkles className="w-4 h-4" />
                    <span>Featured</span>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0d2613] to-transparent" />
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block bg-emerald-600/20 text-emerald-300 text-sm px-4 py-1 rounded-full mb-4 border border-emerald-500/30 w-fit">
                  Best Air Purifier
                </span>

                <h3 className="text-4xl font-bold text-white mb-2">
                  {featuredO2Plant.name}
                </h3>
                <p className="text-gray-400 text-lg italic mb-6">
                  {featuredO2Plant.scientificName}
                </p>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {featuredO2Plant.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-3 mb-8">
                  {featuredO2Plant.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 group/item"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-emerald-500/20">
                  <div>
                    <span className="text-gray-400 text-sm block mb-1">Special Price</span>
                    <span className="text-4xl font-bold text-emerald-400">
                      Rs. {featuredO2Plant.price}/-
                    </span>
                  </div>

                  <Button
                    onClick={handleAddToCart}
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-6 text-lg rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 group/button"
                  >
                    Add to Cart
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/button:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Rating & Stats */}
                <div className="flex items-center space-x-6 mt-6 pt-6 border-t border-emerald-500/20">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-yellow-400"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">({featuredO2Plant.rating})</span>
                  </div>
                  <div className="text-gray-400 text-sm">
                    <span className="text-emerald-400 font-semibold">500+</span> sold this month
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default O2Plants;
