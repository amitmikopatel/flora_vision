import React from 'react';
import { Star, ShoppingCart, TrendingUp } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/cartSlice';
import { trendingPlants } from '../components/mock';
import { Button } from './ui/button';
// import { toast } from '../hooks/use-toast';

const TrendingPlants = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    toast({
      title: "Added to cart!",
      description: `${plant.name} has been added to your cart.`,
    });
  };

  return (
    <section className="py-20 bg-linear-to-b from-[#0a1f0f] to-[#0d2613]" id="trending">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-4">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300">What's Hot</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-green-300">Trendy</span> Plants
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the most popular plants that are flying off our shelves
          </p>
        </div>

        {/* Trending Plants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trendingPlants.map((plant, index) => (
            <div
              key={plant.id}
              className="group relative bg-linear-to-br from-emerald-900/20 to-green-900/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/10 group-hover:to-green-500/10 transition-all duration-500" />

              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-emerald-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {plant.category}
                </div>
                {/* Quick Add Button */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    onClick={() => handleAddToCart(plant)}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded-xl transform scale-90 group-hover:scale-100 transition-transform duration-300"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Quick Add
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors duration-300">
                  {plant.name}
                </h3>
                <p className="text-gray-400 text-sm italic mb-3">{plant.scientificName}</p>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{plant.description}</p>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(plant.rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                  <span className="text-gray-400 text-sm ml-2">({plant.rating})</span>
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-emerald-400">Rs. {plant.price}/-</span>
                  </div>
                  <Button
                    onClick={() => handleAddToCart(plant)}
                    size="sm"
                    className="bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30 hover:border-emerald-500 transition-all duration-300"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPlants;
