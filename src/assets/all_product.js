//women
import p1 from '../assets/women/w1.webp'
import p2 from '../assets/women/w2.webp'
import p3 from '../assets/women/w3.webp'
import p4 from '../assets/women/w4.avif'
import p5 from '../assets/women/w5.webp'
import p6 from '../assets/women/w6.avif'
import p7 from '../assets/women/w7.jpg'
import p8 from '../assets/women/w8.png'
import p9 from '../assets/women/w10.png'
import p10 from '../assets/women/w11.avif'

//men
import p11 from '../assets/men/m1.png'
import p12 from '../assets/men/m2.png'
import p13 from '../assets/men/m3.png'
import p14 from '../assets/men/m4.png'
import p15 from '../assets/men/m5.webp'
import p16 from '../assets/men/m6.jpg'
import p17 from '../assets/men/m7.jpg'
import p18 from '../assets/men/m8.webp'
import p19 from '../assets/men/m9.webp'
import p20 from '../assets/men/m10.webp'
import p21 from '../assets/men/m11.jpg'
import p22 from '../assets/men/m12.webp'
import p23 from '../assets/men/m13.avif'
import p24 from '../assets/men/m14.avif'


//kids
import p25 from '../assets/kids/kid1.webp'
import p26 from '../assets/kids/kid2.webp'
import p27 from '../assets/kids/kid3.png'
import p28 from '../assets/kids/kid4.png'
import p29 from '../assets/kids/kid9.png'
import p30 from '../assets/kids/kid6.png'
import p31 from '../assets/kids/kid7.png'
import p32 from '../assets/kids/kid10.png'


const all_product = [
  // Women
  { id: 1, name: "Printed Kurti", category: "women", image: p1, new_price: 500.0, old_price: 800.5 },
  { id: 2, name: "Blue Denim Jeans", category: "women", image: p2, new_price: 600.0, old_price: 900.5 },
  { id: 3, name: "Silk Saree", category: "women", image: p3, new_price: 750.0, old_price: 1200.0 },
  { id: 4, name: "Winter Jacket", category: "women", image: p4, new_price: 900.0, old_price: 1400.0 },
  { id: 5, name: "Basic T-Shirt", category: "women", image: p5, new_price: 450.0, old_price: 700.0 },
  { id: 6, name: "Casual Dress", category: "women", image: p6, new_price: 850.0, old_price: 1300.0 },
  { id: 7, name: "Fleece Hoodie", category: "women", image: p7, new_price: 905.0, old_price: 1500.0 },
  { id: 8, name: "Yoga Leggings", category: "women", image: p8, new_price: 505.0, old_price: 1000.0 },
  { id: 9, name: "Formal Shirt", category: "women", image: p9, new_price: 700.0, old_price: 1100.0 },
  { id: 10, name: "Black Jumpsuit", category: "women", image: p10, new_price: 880.0, old_price: 1305.0 },

  // Men
  { id: 11, name: "Wool Sweater", category: "men", image: p11, new_price: 920.0, old_price: 1450.0 },
  { id: 12, name: "Formal Gown", category: "men", image: p12, new_price: 909.0, old_price: 1600.0 },
  { id: 13, name: "Summer Shorts", category: "men", image: p13, new_price: 400.0, old_price: 650.0 },
  { id: 14, name: "Striped Polo", category: "men", image: p14, new_price: 520.0, old_price: 850.0 },
  { id: 15, name: "Ethnic Kurta", category: "men", image: p15, new_price: 780.0, old_price: 1150.0 },
  { id: 16, name: "Classic Skirt", category: "men", image: p16, new_price: 730.0, old_price: 1100.0 },
  { id: 17, name: "Formal Skirt", category: "men", image: p17, new_price: 736.0, old_price: 1100.0 },
  { id: 18, name: "Denim Skirt", category: "men", image: p18, new_price: 730.0, old_price: 1100.0 },
  { id: 19, name: "Cotton Skirt", category: "men", image: p19, new_price: 735.0, old_price: 1150.0 },
  { id: 20, name: "Trendy Skirt", category: "men", image: p20, new_price: 603.0, old_price: 2005.0 },
  { id: 21, name: "Slim Fit Skirt", category: "men", image: p21, new_price: 600.0, old_price: 1200.0 },
  { id: 22, name: "Classic Blue Skirt", category: "men", image: p22, new_price: 730.0, old_price: 1150.0 },
  { id: 23, name: "Grey Work Skirt", category: "men", image: p23, new_price: 730.0, old_price: 800.0 },
  { id: 24, name: "Pleated Skirt", category: "men", image: p24, new_price: 530.0, old_price: 1000.0 },

  // Kids
  { id: 25, name: "Denim Shirt", category: "kid", image: p25, new_price: 850.0, old_price: 1500.0 },
  { id: 26, name: "Khaki Cargo Pants", category: "kid", image: p26, new_price: 880.0, old_price: 1300.0 },
  { id: 27, name: "Black Cargo Pants", category: "kid", image: p27, new_price: 990.0, old_price: 1500.0 },
  { id: 28, name: "Green Cargo Pants", category: "kid", image: p28, new_price: 560.0, old_price: 1000.0 },
  { id: 29, name: "Slim Fit Cargo", category: "kid", image: p29, new_price: 600.0, old_price: 1000.0 },
  { id: 30, name: "Brown Cargo Pants", category: "kid", image: p30, new_price: 530.0, old_price: 1100.0 },
  { id: 31, name: "Blue Cargo Pants", category: "kid", image: p31, new_price: 500.0, old_price: 800.0 },
  { id: 32, name: "Printed Cargo Pants", category: "kid", image: p32, new_price: 530.0, old_price: 1300.0 },
];


export default all_product;