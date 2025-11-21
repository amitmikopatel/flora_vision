import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'


export const trendingPlants = [
  {
    id: 1,
    name: "Snake Plant",
    scientificName: "Sansevieria trifasciata",
    price: 500,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1614887638285-97f7cc8476a0",
    description: "Perfect for beginners, purifies air naturally",
    category: "Air Purifying"
  },
  {
    id: 2,
    name: "Peace Lily",
    scientificName: "Spathiphyllum",
    price: 550,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1617209299414-dbf3acba816a",
    description: "Beautiful white blooms, low maintenance",
    category: "Flowering"
  },
  {
    id: 3,
    name: "Succulent Mix",
    scientificName: "Mixed varieties",
    price: 600,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1502920795919-28eb72e07e2f",
    description: "Drought-tolerant, perfect for sunny spots",
    category: "Succulents"
  }
];

export const topSellingPlants = [
  {
    id: 4,
    name: "Aglaonema Plant",
    scientificName: "Aglaonema commutatum",
    price: 300,
    rating: 4.9,
    image: img1,
    description: "The Aglaonema Plant, commonly Known as Chinese Evergreen known for its attractive foliage and ease of care ",
    category: "Tropical",
    inStock: true
  },
  {
    id: 5,
    name: "Plaintain Lilies",
    scientificName: "Hosta spp",
    price: 380,
    rating: 4.6,
    image: img2,
    description: "Hostas are primarily grown for their lush, decorative leaves which come in a wide variety of shapes and sizes ",
    category: "Hanging",
    inStock: true
  },
  {
    id: 6,
    name: "Cactus",
    scientificName: "Cactaceae",
    price: 259,
    rating: 4.8,
    image: img3,
    description: "It is known for their ability to thrive in arid environments",
    category: "Vining",
    inStock: true
  },
  {
    id: 7,
    name: "Swiss cheese Plant",
    scientificName: "Monstera deliciosa.",
    price: 400,
    rating: 4.7,
    image: img4 ,
    description: "Its is a popular tropical houseplant known for its distinctive, perforated leaves ",
    category: "Tropical",
    inStock: true
  },
  {
    id: 8,
    name: "Sansevieria Plant",
    scientificName: "Dracaena trifasciata",
    price: 450,
    rating: 4.9,
    image: img5 ,
    description: "It is popular indoor plant admired for its striking appearance and low-maintenance nature",
    category: "Low Light",
    inStock: true
  },
  {
    id: 9,
    name: "Agave Plant",
    scientificName: "Agave americana",
    price: 359,
    rating: 4.5,
    image: img6,
    description: "The Agave Plant is the genus of succulent plants known for their strking rosette of thick, fleshy leaves and architectural forms  ",
    category: "Succulents",
    inStock: true
  }
];

export const customerReviews = [
  {
    id: 1,
    name: "Shelly Russel",
    rating: 4,
    comment: "Just got my hands on some absolutely plants, and I couldn't be happier!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "Lula Rolfson",
    rating: 5,
    comment: "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh grenary make such a huge difference in my home. ",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    date: "2024-01-10"
  },
  {
    id: 3,
    name: "Carol Huels",
    rating: 5,
    comment: "It's like bringing a little piece of nature indoors. Definitely worth the investement-my plant collection has never looked better !",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    date: "2024-01-08"
  }
];

export const featuredO2Plant = {
  id: 10,
  name: "Areca Palm",
  scientificName: "Dypsis lutescens",
  price: 800,
  rating: 4.9,
  image: "https://images.unsplash.com/photo-1702602726082-84f9ddb3a8d9",
  description: "Known as the butterfly palm, this elegant plant is one of the best air purifiers. It removes toxins and increases oxygen levels in your home while adding a tropical touch to any space.",
  oxygenOutput: "High",
  benefits: [
    "Removes formaldehyde, xylene, and toluene",
    "Increases humidity naturally",
    "Safe for pets and children",
    "Low maintenance care"
  ]
};
