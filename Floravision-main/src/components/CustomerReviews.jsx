import React from 'react';
import { Star, Quote } from 'lucide-react';
import { customerReviews } from '../components/mock';

const CustomerReviews = () => {
  return (
    <section className="py-20 bg-linear-to-b from-[#0a1f0f] to-[#0d2613]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 text-emerald-400 fill-emerald-400" />
            <span className="text-sm text-emerald-300">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Customer <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-green-300">Reviews</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear what our happy plant parents have to say
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customerReviews.map((review, index) => (
            <div
              key={review.id}
              className="group relative bg-linear-to-br from-emerald-900/30 to-green-900/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/10 group-hover:to-green-500/10 rounded-2xl transition-all duration-500" />

              {/* Quote Icon */}
              <div className="relative mb-6">
                <Quote className="w-10 h-10 text-emerald-400/30 transform rotate-180" />
              </div>

              {/* Rating */}
              <div className="relative flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="relative text-gray-300 text-base leading-relaxed mb-6">
                "{review.comment}"
              </p>

              {/* Reviewer Info */}
              <div className="relative flex items-center space-x-4 pt-6 border-t border-emerald-500/20">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full border-2 border-emerald-500/30 group-hover:border-emerald-500/60 transition-colors duration-300"
                />
                <div>
                  <h4 className="text-white font-semibold">{review.name}</h4>
                  <p className="text-gray-400 text-sm">
                    {new Date(review.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">4.9/5</div>
            <div className="text-gray-400 text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">2,500+</div>
            <div className="text-gray-400 text-sm">Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">98%</div>
            <div className="text-gray-400 text-sm">Recommend Us</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">10K+</div>
            <div className="text-gray-400 text-sm">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
