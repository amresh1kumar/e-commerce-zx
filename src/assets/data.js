//womens
import p1 from '../assets/women/w1.webp'
import p2 from '../assets/women/w2.webp'
import p3 from '../assets/women/w3.webp'
import p4 from '../assets/women/w4.avif'

//men
import p5 from '../assets/men/m1.png'
import p6 from '../assets/men/m2.png'
import p7 from '../assets/men/m3.png'
import p8 from '../assets/men/m4.png'


let data_product = [
    {
        id: 1, name: "Frock", category: "women", image: p1, new_price: 50.0,
        old_price: 80.5
    },
    
    { id: 2, name: "Frock", category: "women", image: p2, new_price: 60.0, old_price: 90.5 },
    { id: 3, name: "Kurti", category: "women", image: p3, new_price: 75.0, old_price: 120.0 },
    { id: 4, name: "Frock", category: "women", image: p4, new_price: 90.0, old_price: 140.0 },

    { id: 5, name: "Sweater", category: "men", image: p5, new_price: 92.0, old_price: 145.0 },
    { id: 6, name: "Jeans", category: "men", image: p6, new_price: 60.0, old_price: 90.5 },

    { id: 7, name: "Shorts", category: "men", image: p7, new_price: 40.0, old_price: 65.0 },
    { id: 8, name: "T-Shirt", category: "men", image: p8, new_price: 45.0, old_price: 70.0 },
]

export default data_product;