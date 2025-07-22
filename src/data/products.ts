import { Product, Testimonial } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg',
      'https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg',
    ],
    category: 'Electronics',
    description: 'Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.',
    features: ['Active Noise Cancellation', '30-hour Battery Life', 'Premium Materials', 'Wireless Charging'],
    rating: 4.8,
    reviews: 247,
    inStock: true,
    tags: ['wireless', 'premium', 'noise-cancelling']
  },
  {
    id: '2',
    name: 'Minimalist Watch Collection',
    price: 189,
    image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/1468378/pexels-photo-1468378.jpeg',
    ],
    category: 'Accessories',
    description: 'Elegant minimalist timepiece crafted with precision and designed for the modern professional.',
    features: ['Swiss Movement', 'Sapphire Crystal', 'Water Resistant', 'Italian Leather Strap'],
    rating: 4.6,
    reviews: 89,
    inStock: true,
    tags: ['minimalist', 'luxury', 'professional']
  },
  {
    id: '3',
    name: 'Ergonomic Office Chair',
    price: 449,
    originalPrice: 599,
    image: 'https://images.pexels.com/photos/6775268/pexels-photo-6775268.jpeg',
    images: [
      'https://images.pexels.com/photos/6775268/pexels-photo-6775268.jpeg',
      'https://images.pexels.com/photos/6774978/pexels-photo-6774978.jpeg',
    ],
    category: 'Furniture',
    description: 'Revolutionary ergonomic design that supports your posture during long work sessions.',
    features: ['Lumbar Support', 'Height Adjustable', 'Memory Foam', 'Breathable Mesh'],
    rating: 4.9,
    reviews: 156,
    inStock: true,
    tags: ['ergonomic', 'comfort', 'office']
  },
  {
    id: '4',
    name: 'Smart Home Speaker',
    price: 129,
    image: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg',
    images: [
      'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg',
    ],
    category: 'Electronics',
    description: 'Voice-controlled smart speaker with premium sound quality and smart home integration.',
    features: ['Voice Control', '360° Sound', 'Smart Home Hub', 'Multi-room Audio'],
    rating: 4.5,
    reviews: 203,
    inStock: true,
    tags: ['smart', 'voice-control', 'home']
  },
  {
    id: '5',
    name: 'Organic Cotton T-Shirt',
    price: 39,
    image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg',
    images: [
      'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg',
    ],
    category: 'Clothing',
    description: 'Sustainably made organic cotton t-shirt with perfect fit and ultra-soft feel.',
    features: ['100% Organic Cotton', 'Sustainable Production', 'Pre-shrunk', 'Machine Washable'],
    rating: 4.3,
    reviews: 67,
    inStock: true,
    tags: ['organic', 'sustainable', 'cotton']
  },
  {
    id: '6',
    name: 'Fitness Tracker Pro',
    price: 199,
    originalPrice: 249,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    ],
    category: 'Electronics',
    description: 'Advanced fitness tracker with heart rate monitoring, GPS, and 7-day battery life.',
    features: ['Heart Rate Monitor', 'GPS Tracking', '7-day Battery', 'Water Resistant'],
    rating: 4.7,
    reviews: 134,
    inStock: true,
    tags: ['fitness', 'tracking', 'health']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg',
    rating: 5,
    content: 'Amazing quality and fast shipping. The headphones exceeded my expectations!',
    verified: true
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
    rating: 5,
    content: 'Best online shopping experience I\'ve had. Great customer service and products.',
    verified: true
  },
  {
    id: '3',
    name: 'Emma Davis',
    avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg',
    rating: 5,
    content: 'Love the minimalist design and attention to detail. Will definitely shop here again!',
    verified: true
  }
];

export const categories = [
  'All',
  'Electronics',
  'Accessories',
  'Furniture', 
  'Clothing',
  'Home & Garden'
];