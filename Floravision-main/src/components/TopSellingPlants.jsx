import React from 'react';
import { Star, ShoppingCart, Award, Heart } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/cartSlice';
import { topSellingPlants } from '../components/mock';
import { Button } from './ui/button';
// import { toast } from '../hooks/use-toast';

const TopSellingPlants = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    toast({
      title: "Added to cart!",
      description: `${plant.name} has been added to your cart.`,
    });
  };

  return (
    <section className="py-20 bg-linear-to-b from-[#0d2613] to-[#0a1f0f]" id="shop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-4">
            <Award className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300">Customer Favorites</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Top <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-green-300">Selling</span> Plants
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            These beloved beauties have captured hearts and transformed countless homes
          </p>
        </div>

        {/* Plants Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topSellingPlants.map((plant, index) => (
            <div
              key={plant.id}
              className="group relative bg-linear-to-br from-emerald-900/20 to-green-900/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Wishlist Button */}
              <button className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm p-2 rounded-full text-gray-300 hover:text-red-400 hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Heart className="w-5 h-5" />
              </button>

              {/* Image Container */}
              <div className="relative h-80 overflow-hidden bg-linear-to-br from-emerald-950/50 to-green-950/50">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                />
                {/* Stock Badge */}
                {plant.inStock && (
                  <div className="absolute top-4 left-4 bg-green-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span>In Stock</span>
                  </div>
                )}
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <Button
                    onClick={() => handleAddToCart(plant)}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-xl shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                {/* Category Badge */}
                <span className="inline-block bg-emerald-600/20 text-emerald-300 text-xs px-3 py-1 rounded-full mb-3 border border-emerald-500/30">
                  {plant.category}
                </span>

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

                {/* Price */}
                <div className="flex items-center justify-between pt-4 border-t border-emerald-500/20">
                  <div>
                    <span className="text-2xl font-bold text-emerald-400">Rs. {plant.price}/-</span>
                  </div>
                  <div className="flex items-center space-x-2 text-emerald-300 text-sm">
                    <Award className="w-4 h-4" />
                    <span>Bestseller</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-6 text-lg rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
          >
            View All Plants
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopSellingPlants;
