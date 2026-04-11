// stats
import { FaRegEye } from "react-icons/fa";
import { FiDollarSign, FiUsers } from "react-icons/fi";
import { LuShoppingCart, LuTarget } from "react-icons/lu";

export const stats = [
  {
    title: "Revenue",
    value: "$18,293",
    change: "+12.5%",
    trend: "up",
    icon: <FiDollarSign />,
  },
  {
    title: "Active Users",
    value: "2,847",
    change: "+8.2%",
    trend: "up",
    icon: <FiUsers />,
  },
  {
    title: "Total Orders",
    value: "2,647",
    change: "+15.3%",
    trend: "up",
    icon: <LuShoppingCart />,
  },
  {
    title: "Page Views",
    value: "45,892",
    change: "-2.1%",
    trend: "down",
    icon: <FaRegEye />,
  },
];

// lineData
export const lineData = {
  week: [
    { name: "Mon", users: 1200, revenue: 3200 },
    { name: "Tue", users: 1350, revenue: 3800 },
    { name: "Wed", users: 1480, revenue: 4200 },
    { name: "Thu", users: 1620, revenue: 4800 },
    { name: "Fri", users: 1890, revenue: 5600 },
    { name: "Sat", users: 2100, revenue: 6200 },
    { name: "Sun", users: 2400, revenue: 7100 },
  ],
  month: [
    { name: "Week 1", users: 4200, revenue: 12500 },
    { name: "Week 2", users: 5800, revenue: 16800 },
    { name: "Week 3", users: 7300, revenue: 21400 },
    { name: "Week 4", users: 8900, revenue: 26700 },
    { name: "Week 4", users: 8900, revenue: 26700 },
  ],
  year: [
    { name: "Jan", users: 12400, revenue: 34200 },
    { name: "Feb", users: 13800, revenue: 38900 },
    { name: "Mar", users: 15200, revenue: 42300 },
    { name: "Apr", users: 16800, revenue: 46700 },
    { name: "May", users: 18500, revenue: 51200 },
    { name: "Jun", users: 20300, revenue: 56800 },
  ],
};

// activityData
export const activityData = [
  { hour: "00:00", active: 120, pageViews: 340 },
  { hour: "04:00", active: 45, pageViews: 120 },
  { hour: "08:00", active: 340, pageViews: 890 },
  { hour: "12:00", active: 890, pageViews: 2100 },
  { hour: "16:00", active: 1200, pageViews: 3200 },
  { hour: "20:00", active: 950, pageViews: 2800 },
  { hour: "23:00", active: 450, pageViews: 1200 },
];

// projectDistribution

export const projectDistribution = [
  { name: "Web Development", value: 45, color: "#D32F2F" },
  { name: "Mobile Apps", value: 30, color: "#80DEEA" },
  { name: "AI/ML", value: 15, color: "#FF9800" },
  { name: "Cloud", value: 10, color: "#4CAF50" },
];

// salesData

export const salesData = [
  { product: "Product A", sales: 320, revenue: 4800 },
  { product: "Product B", sales: 280, revenue: 4200 },
  { product: "Product C", sales: 190, revenue: 2850 },
  { product: "Product D", sales: 150, revenue: 2250 },
  { product: "Product E", sales: 140, revenue: 1500 },
  { product: "Product F", sales: 120, revenue: 1000 },
];

// product_data

import product_1 from "../assets/shop-products/product-1.jpg";
import product_2 from "../assets/shop-products/product-2.jpg";
import product_3 from "../assets/shop-products/product-3.jpg";
import product_4 from "../assets/shop-products/product-4.jpg";
import product_5 from "../assets/shop-products/product-5.jpg";
import product_6 from "../assets/shop-products/product-6.jpg";
import product_7 from "../assets/shop-products/product-7.jpg";
import product_8 from "../assets/shop-products/product-8.jpg";
import product_9 from "../assets/shop-products/product-9.jpg";
import product_10 from "../assets/shop-products/product-10.jpg";
import product_11 from "../assets/shop-products/product-11.jpg";
import product_12 from "../assets/shop-products/product-12.jpg";
import product_13 from "../assets/shop-products/product-13.jpg";
import product_14 from "../assets/shop-products/product-14.jpg";
import product_15 from "../assets/shop-products/product-15.jpg";
import product_16 from "../assets/shop-products/product-16.jpg";
import product_17 from "../assets/shop-products/product-17.jpg";
import product_18 from "../assets/shop-products/product-18.jpg";
import product_19 from "../assets/shop-products/product-19.jpg";
import product_20 from "../assets/shop-products/product-20.jpg";
import product_21 from "../assets/shop-products/product-21.jpg";
import product_22 from "../assets/shop-products/product-22.jpg";
import product_23 from "../assets/shop-products/product-23.jpg";
import product_24 from "../assets/shop-products/product-24.jpg";
import product_25 from "../assets/shop-products/product-25.jpg";
import product_26 from "../assets/shop-products/product-26.jpg";
import product_27 from "../assets/shop-products/product-27.jpg";
import product_28 from "../assets/shop-products/product-28.jpg";
import product_29 from "../assets/shop-products/product-29.jpg";
import product_30 from "../assets/shop-products/product-30.jpg";

export const product_data = [
  {
    id: 1,
    name: "Buttons tweed blazer",
    price: 59.0,
    description: "A sophisticated tweed blazer featuring elegant button detailing. Perfect for both formal and casual occasions.",
    image: product_1,
    stock: 5,
    status: "available",
    category: "women",
  },
  {
    id: 2,
    name: "Flowy striped skirt",
    price: 49.0,
    description: "A light and flowy striped skirt perfect for warm days and casual outings.",
    image: product_2,
    stock: 0,
    status: "Unavailable",
    category: "men",
  },
  {
    id: 3,
    name: "Flowy striped skirt",
    price: 59.0,
    description: "A feminine flowy striped skirt with a comfortable elastic waistband. Ideal for beach days or brunch.",
    image: product_3,
    stock: 0,
    status: "available",
    category: "women",
  },
  {
    id: 4,
    name: "Slim striped pocket shirt",
    price: 59.0,
    description: "A classic slim-fit striped shirt with a chest pocket. A wardrobe essential for every modern man.",
    image: product_4,
    stock: 0,
    status: "available",
    category: "men",
  },
  {
    id: 5,
    name: "Fit micro corduroy shirt",
    price: 59.0,
    description: "A soft micro corduroy shirt for kids, designed for comfort and durability through all-day play.",
    image: product_5,
    stock: 0,
    status: "Unavailable",
    category: "kids",
  },
  {
    id: 6,
    name: "Tropical Kimono",
    price: 49.0,
    description: "A vibrant tropical print kimono for kids. Light and breezy — great as a beach cover-up or casual top.",
    image: product_6,
    stock: 0,
    status: "available",
    category: "kids",
  },
  {
    id: 7,
    name: "Contrasting sunglasses",
    price: 59.0,
    description: "Chic contrasting-frame sunglasses with UV400 protection. A must-have accessory for any season.",
    image: product_7,
    stock: 0,
    status: "Unavailable",
    category: "women",
  },
  {
    id: 8,
    name: "Water resistant backpack",
    price: 49.0,
    description: "A durable water-resistant backpack with multiple compartments. Perfect for commuting, travel, or the gym.",
    image: product_8,
    stock: 0,
    status: "available",
    category: "men",
  },
  {
    id: 9,
    name: "Classic Cotton Tee",
    price: 25.0,
    description: "A timeless classic cotton tee for everyday wear. Soft, breathable, and available in multiple colors.",
    image: product_9,
    stock: 0,
    status: "available",
    category: "women",
  },
  {
    id: 10,
    name: "Leather Handbag",
    price: 120.0,
    description: "A luxurious genuine leather handbag with gold-tone hardware. Spacious interior with multiple pockets.",
    image: product_10,
    stock: 0,
    status: "Unavailable",
    category: "women",
  },
  {
    id: 11,
    name: "Summer Floral Dress",
    price: 45.0,
    description: "A breezy floral dress perfect for summer. Features a flattering A-line silhouette and adjustable straps.",
    image: product_11,
    stock: 0,
    status: "available",
    category: "women",
  },
  {
    id: 12,
    name: "Denim Jacket",
    price: 75.0,
    description: "An iconic denim jacket that never goes out of style. Features button front closure and chest pockets.",
    image: product_12,
    stock: 0,
    status: "available",
    category: "men",
  },
  {
    id: 13,
    name: "Cotton T-Shirt",
    price: 55.0,
    description: "A soft and durable cotton t-shirt for kids. Features a fun graphic print and comfortable crew neck.",
    image: product_13,
    stock: 0,
    status: "Unavailable",
    category: "accessories",
  },
  {
    id: 14,
    name: "Zip-pockets pebbled tote briefca",
    price: 90.0,
    description: "A professional pebbled leather tote with zip pockets. Fits a 15-inch laptop and all your daily essentials.",
    image: product_14,
    stock: 0,
    status: "available",
    category: "accessories",
  },
  {
    id: 15,
    name: "Round leather bag",
    price: 20.0,
    description: "A chic round leather bag with a chain strap. A unique statement piece for any outfit.",
    image: product_15,
    stock: 0,
    status: "available",
    category: "accessories",
  },
  {
    id: 16,
    name: "Bow wrap skirt",
    price: 40.0,
    description: "A trendy bow wrap skirt with an adjustable tie waist. Easy to wear and style for any casual occasion.",
    image: product_16,
    stock: 0,
    status: "Unavailable",
    category: "accessories",
  },
  {
    id: 17,
    name: "Metallic earrings",
    price: 30.0,
    description: "Fun and lightweight metallic earrings for kids. Safe hypoallergenic posts for sensitive ears.",
    image: product_17,
    stock: 0,
    status: "available",
    category: "cosmetic",
  },
  {
    id: 18,
    name: "Flap cross-body bag",
    price: 250.0,
    description: "An elegant flap cross-body bag with signature hardware. Compact yet spacious enough for all your essentials.",
    image: product_18,
    stock: 0,
    status: "available",
    category: "accessories",
  },
  {
    id: 19,
    name: "Chain bucket bag",
    price: 15.0,
    description: "A mini chain bucket bag for kids with a cute drawstring top. Perfect for outings and parties.",
    image: product_19,
    stock: 0,
    status: "Unavailable",
    category: "accessories",
  },
  {
    id: 20,
    name: "Pendant earrings",
    price: 50.0,
    description: "Elegant pendant earrings with a delicate drop design. A perfect gift or everyday luxury accessory.",
    image: product_20,
    stock: 0,
    status: "available",
    category: "cosmetic",
  },
  {
    id: 21,
    name: "Cotton T-Shirt",
    price: 65.0,
    description: "A minimalist CK cotton t-shirt with the iconic logo print. Effortless style for any casual look.",
    image: product_21,
    stock: 0,
    status: "available",
    category: "accessories",
  },
  {
    id: 22,
    name: "Leather Belt",
    price: 35.0,
    description: "A classic genuine leather belt with a polished silver buckle. A timeless accessory for any outfit.",
    image: product_22,
    stock: 0,
    status: "Unavailable",
    category: "accessories",
  },
  {
    id: 23,
    name: "Knit Sweater",
    price: 55.0,
    description: "A cozy knit sweater with a classic crewneck design. Perfect for layering in cooler weather.",
    image: product_23,
    stock: 0,
    status: "available",
    category: "accessories",
  },
  {
    id: 24,
    name: "Sporty Shorts",
    price: 20.0,
    description: "Lightweight and breathable sporty shorts for active kids. Features elastic waist and side pockets.",
    image: product_24,
    stock: 0,
    status: "Unavailable",
    category: "accessories",
  },
  {
    id: 25,
    name: "Canvas Shoes",
    price: 45.0,
    description: "Iconic low-top canvas sneakers with a vulcanized sole. A streetwear staple for casual everyday wear.",
    image: product_25,
    stock: 0,
    status: "available",
    category: "accessories",
  },
  {
    id: 26,
    name: "Formal Office Shirt",
    price: 40.0,
    description: "A crisp and tailored office shirt with a button-down collar. Professional and polished for any work setting.",
    image: product_26,
    stock: 0,
    status: "available",
    category: "accessories",
  },
  {
    id: 27,
    name: "Hooded Sweatshirt",
    price: 60.0,
    description: "A comfortable pullover hoodie with the Nike Swoosh logo. Ideal for workouts, lounging, or casual outings.",
    image: product_27,
    stock: 0,
    status: "Unavailable",
    category: "accessories",
  },
  {
    id: 28,
    name: "Toddler Sneakers",
    price: 35.0,
    description: "Soft and supportive Adidas sneakers for toddlers. Velcro closure for easy on and off.",
    image: product_28,
    stock: 0,
    status: "available",
    category: "cosmetic",
  },
  {
    id: 29,
    name: "Summer Straw Hat",
    price: 25.0,
    description: "A classic wide-brim straw hat for sun protection and summer style. Lightweight and packable.",
    image: product_29,
    stock: 0,
    status: "Unavailable",
    category: "cosmetic",
  },
  {
    id: 30,
    name: "Cargo Pants",
    price: 55.0,
    description: "Rugged cargo pants with multiple utility pockets. Versatile enough for outdoor adventures or casual city wear.",
    image: product_30,
    stock: 0,
    status: "available",
    category: "accessories",
  },
];
