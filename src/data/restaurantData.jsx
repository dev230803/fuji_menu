import SpicySalmon from "../Images/Spicy_Samon.png";
import SpicyRamen from "../Images/Spicy_Ramen.png";
import Tempura from "../Images/Rock_Shrimp_Tempura_Sushi.png";
import Dimsum from "../Images/dimsum.png";
import ClassicPork from "../Images/classic_pork.png";


const restaurantData = {
  meta: {
    name: "Mount Fuji Japanese Pan Asian Restaurant & Bar", //[cite: 13]
    
    description: "Authentic Pan-Asian & Japanese Delicacies",
    location: {
      address: "Connaught Place (CP)", //[cite: 13]
      city: "New Delhi", //[cite: 13]
      state: "Delhi",
      pincode: "110001",
      mapUrl: "https://maps.google.com/?q=28.6315,77.2167",
    },
    
    contactInfo: {
      phone: "+91 98765 43210",
      email: "hello@mountfujicp.in",
      website: "https://mountfujicp.in",
      instagram: "@mountfuji_cp",
    },
    images: [
      "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800",
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800",
    ],
    logo: "https://img.icons8.com/color/96/sushi.png",
  },
  offers: [
    {
      id: "offer-1",
      name: "20% Off on Signature Ramen Bowls",
      duration: "Valid Monday to Thursday",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: "offer-2",
      name: "Chef's Special Sushi Platter Combo",
      duration: "Weekend Special",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=60",
    },
  ],
  categories: [
    { id: "poke-bowls", name: "Platters & Poke Bowls", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" }, //[cite: 13]
    { id: "soups", name: "Soups", image: "https://images.unsplash.com/photo-1548943487-a2e4b43b4850?w=400" }, //[cite: 13]
    { id: "salads", name: "Salads", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" }, //[cite: 13]
    { id: "veg-starters", name: "Veg Starters", image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=400" }, //[cite: 13]
    { id: "non-veg-starters", name: "Non Veg Starters", image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400" }, //[cite: 13]
    { id: "sushi", name: "Sushi Rolls", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400" }, //[cite: 13]
    { id: "dimsums", name: "Dimsums", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400" }, //[cite: 13]
    { id: "ramen", name: "Ramen Bowls", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400" }, //[cite: 13]
    { id: "main-course", name: "Main Course", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400" }, //[cite: 13]
    { id: "rice-noodles", name: "Fried Rice & Noodles", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400" }, //[cite: 13]
    { id: "desserts", name: "Desserts", image: "https://images.unsplash.com/photo-1505253758473-96b3015f21c9?w=400" } //[cite: 13]
  ],

  dishes: [
    {
      id: "spicy-korean-ramen-veg",
      name: "Spicy Korean Ramen (Veg)", //[cite: 13]
      category: "ramen",
      price: 495, //[cite: 13]
      description: "Fiery Korean-inspired chili broth with vegetables.",
      nutrition: { protein: 12, carbs: 65, fat: 14 },
      tasteProfile: { comparisonText: "Intense chili oil heat with chewy noodles.", spiceLevel: 5, flavors: { spicy: 5, sweet: 1, sour: 2, savory: 4 }, textureTags: ["Chewy", "Juicy"] },
      quantity: "1 bowl", bestseller: true, veg: true, image: SpicyRamen,
      model: "/models/compressed_Ramen.glb", // [cite: 13]
    },
    // --- POKE BOWLS ---
    {
      id: "edamame-tofu-poke",
      name: "Edamame Tofu Poke Bowl (Veg)", //[cite: 13]
      category: "poke-bowls",
      price: 485, //[cite: 13]
      description: "Healthy bowl packed with fresh edamame and tofu.",
      nutrition: { protein: 18, carbs: 45, fat: 12 },
      tasteProfile: { comparisonText: "Clean and refreshing.", spiceLevel: 1, flavors: { spicy: 1, sweet: 2, sour: 3, savory: 4 }, textureTags: ["Soft", "Crunchy"] },
      quantity: "1 bowl", bestseller: false, veg: true, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600"
    },
    {
      id: "salmon-sake-poke",
      name: "Salmon Sake Poke Bowl", //[cite: 13]
      category: "poke-bowls",
      price: 595, //[cite: 13]
      description: "Fresh salmon sake served over seasoned rice.",
      nutrition: { protein: 26, carbs: 40, fat: 15 },
      tasteProfile: { comparisonText: "Buttery salmon with seasoned rice.", spiceLevel: 1, flavors: { spicy: 1, sweet: 2, sour: 2, savory: 4 }, textureTags: ["Soft", "Chewy"] },
      quantity: "1 bowl", bestseller: false, veg: false, image: "https://ournourishingtable.com/wp-content/uploads/2024/05/Smoked-Salmon-Poke-Bowl-5.jpg"
    },
    {
      id: "unagi-ebi-poke",
      name: "Unagi & Ebi Poke Bowl (Prawns)", //[cite: 13]
      category: "poke-bowls",
      price: 695, //[cite: 13]
      description: "Eel and prawns with vibrant poke toppings.",
      nutrition: { protein: 28, carbs: 42, fat: 16 },
      tasteProfile: { comparisonText: "Rich eel glaze with sweet prawn crunch.", spiceLevel: 2, flavors: { spicy: 2, sweet: 4, sour: 1, savory: 5 }, textureTags: ["Crunchy", "Chewy"] },
      quantity: "1 bowl", bestseller: false, veg: false, image: "https://fushisushi.com/wp-content/uploads/Poke-Bowl-Eel.webp"
    },

    // --- SOUPS ---
    {
      id: "miso-soup",
      name: "Miso Soup (Veg)", //[cite: 13]
      category: "soups",
      price: 295, //[cite: 13]
      description: "Traditional Japanese broth with seaweed and tofu.",
      nutrition: { protein: 6, carbs: 12, fat: 4 },
      tasteProfile: { comparisonText: "Earthy, warm, and comforting.", spiceLevel: 0, flavors: { spicy: 0, sweet: 1, sour: 1, savory: 5 }, textureTags: ["Soft", "Juicy"] },
      quantity: "1 bowl", bestseller: false, veg: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSh06ZxhumMSf3LwotuevnktGXCUWQGNzGzuNspvoQ1j9pK1JzppCODDs&s=10?w=600"
    },
    {
      id: "chicken-vietnamese-pho",
      name: "Chicken Vietnamese Pho", //[cite: 13]
      category: "soups",
      price: 365, //[cite: 13]
      description: "Aromatic broth with rice noodles and tender chicken.",
      nutrition: { protein: 24, carbs: 45, fat: 8 },
      tasteProfile: { comparisonText: "Aromatic star anise and basil broth.", spiceLevel: 2, flavors: { spicy: 2, sweet: 1, sour: 2, savory: 4 }, textureTags: ["Juicy", "Chewy"] },
      quantity: "1 bowl", bestseller: false, veg: false, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ7_ALcrHx126ihMy9ESg7vSZmnKNHbUm0G02Zag9SS4_HfWfbDqZADS8&s=10?w=600"
    },
    {
      id: "chicken-tom-yum",
      name: "Chicken Tom Yum Soup", //[cite: 13]
      category: "soups",
      price: 345, //[cite: 13]
      description: "Hot and sour Thai soup with chicken.",
      nutrition: { protein: 20, carbs: 15, fat: 10 },
      tasteProfile: { comparisonText: "Fiery and tangy lemongrass kick.", spiceLevel: 4, flavors: { spicy: 4, sweet: 1, sour: 5, savory: 4 }, textureTags: ["Juicy"] },
      quantity: "1 bowl", bestseller: false, veg: false, image: "https://www.cuisine.co.nz/wp-content/uploads/2019/08/Cuisine-Magazine-Recipe-Chicken-Tom-Yum-Soup.jpg?w=600"
    },

    // --- SALADS ---
    {
      id: "traditional-spicy-green-papaya",
      name: "Traditional Spicy Green Papaya Salad (Veg)", //[cite: 13]
      category: "salads",
      price: 1345, //[cite: 13]
      description: "Crisp green papaya tossed in spicy dressing.",
      nutrition: { protein: 4, carbs: 22, fat: 6 },
      tasteProfile: { comparisonText: "Crunchy, sweet, sour, and fiery.", spiceLevel: 4, flavors: { spicy: 4, sweet: 3, sour: 4, savory: 2 }, textureTags: ["Crunchy", "Juicy"] },
      quantity: "1 bowl", bestseller: false, veg: true, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600"
    },
    {
      id: "seaweed-salad",
      name: "Seaweed Salad (Veg)", //[cite: 13]
      category: "salads",
      price: 425, //[cite: 13]
      description: "Refreshing seasoned seaweed.",
      nutrition: { protein: 3, carbs: 15, fat: 5 },
      tasteProfile: { comparisonText: "Slightly sweet and briny.", spiceLevel: 1, flavors: { spicy: 1, sweet: 3, sour: 2, savory: 4 }, textureTags: ["Chewy", "Crunchy"] },
      quantity: "1 bowl", bestseller: false, veg: true, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600"
    },

    // --- VEG STARTERS ---
    {
      id: "crispy-spicy-lotus-stem",
      name: "Crispy Spicy Lotus Stem", //[cite: 13]
      category: "veg-starters",
      price: 475, //[cite: 13]
      description: "Thinly sliced lotus stem tossed in spicy glaze.",
      nutrition: { protein: 2, carbs: 25, fat: 12 },
      tasteProfile: { comparisonText: "Addictive glassy crunch with chili heat.", spiceLevel: 4, flavors: { spicy: 4, sweet: 2, sour: 1, savory: 3 }, textureTags: ["Crispy", "Crunchy"] },
      quantity: "1 plate", bestseller: false, veg: true, image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=600"
    },
    {
      id: "edamame-steamed",
      name: "Edamame Steamed", //[cite: 13]
      category: "veg-starters",
      price: 425, //[cite: 13]
      description: "Lightly salted steamed edamame pods.",
      nutrition: { protein: 12, carbs: 10, fat: 4 },
      tasteProfile: { comparisonText: "Simple, salty, and tender.", spiceLevel: 0, flavors: { spicy: 0, sweet: 1, sour: 0, savory: 3 }, textureTags: ["Soft", "Chewy"] },
      quantity: "1 bowl", bestseller: false, veg: true, image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=600"
    },
    {
      id: "truffle-mushroom-cheese-wonton",
      name: "Truffle With Mushroom Cheese Fried Wonton", //[cite: 13]
      category: "veg-starters",
      price: 465, //[cite: 13]
      description: "Crispy wontons stuffed with truffle, mushrooms, and cheese.",
      nutrition: { protein: 8, carbs: 28, fat: 16 },
      tasteProfile: { comparisonText: "Earthy truffle aroma with gooey cheese.", spiceLevel: 1, flavors: { spicy: 1, sweet: 1, sour: 0, savory: 5 }, textureTags: ["Crispy", "Creamy"] },
      quantity: "5 pieces", bestseller: false, veg: true, image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=600"
    },

    // --- NON VEG STARTERS ---
    {
      id: "korean-fried-chicken",
      name: "Korean Fried Chicken", //[cite: 13]
      category: "non-veg-starters",
      price: 545, //[cite: 13]
      description: "Double-fried chicken tossed in sticky gochujang glaze.",
      nutrition: { protein: 32, carbs: 30, fat: 22 },
      tasteProfile: { comparisonText: "Sweet, spicy, and extra crunchy.", spiceLevel: 4, flavors: { spicy: 4, sweet: 3, sour: 1, savory: 4 }, textureTags: ["Crispy", "Juicy"] },
      quantity: "1 plate", bestseller: false, veg: false, image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600"
    },
    {
      id: "fried-prawns-tempura",
      name: "Fried Prawns Tempura", //[cite: 13]
      category: "non-veg-starters",
      price: 675, //[cite: 13]
      description: "Light and airy battered prawns.",
      nutrition: { protein: 20, carbs: 25, fat: 14 },
      tasteProfile: { comparisonText: "Shatteringly crisp batter over tender prawn.", spiceLevel: 1, flavors: { spicy: 1, sweet: 1, sour: 1, savory: 4 }, textureTags: ["Crispy", "Soft"] },
      quantity: "1 plate", bestseller: false, veg: false, image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600"
    },
    {
      id: "chicken-yakitori",
      name: "Chicken Yakitori", //[cite: 13]
      category: "non-veg-starters",
      price: 495, //[cite: 13]
      description: "Grilled chicken skewers with sweet soy glaze.",
      nutrition: { protein: 28, carbs: 12, fat: 10 },
      tasteProfile: { comparisonText: "Smoky and sweet caramelized chicken.", spiceLevel: 1, flavors: { spicy: 1, sweet: 4, sour: 0, savory: 5 }, textureTags: ["Chewy", "Juicy"] },
      quantity: "3 skewers", bestseller: false, veg: false, image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600"
    },

    // --- SUSHI ROLLS ---
    {
      id: "spicy-avocado-sushi",
      name: "Spicy Avocado Sushi Roll (Veg)", //[cite: 13]
      category: "sushi",
      price: 525, //[cite: 13]
      description: "Avocado roll topped with spicy mayo.",
      nutrition: { protein: 6, carbs: 42, fat: 14 },
      tasteProfile: { comparisonText: "Rich avocado cut with chili heat.", spiceLevel: 3, flavors: { spicy: 3, sweet: 1, sour: 1, savory: 3 }, textureTags: ["Creamy", "Soft"] },
      quantity: "8 pieces", bestseller: false, veg: true, image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600"
    },
    {
      id: "rock-shrimp-tempura-sushi",
      name: "Rock Shrimp Tempura Sushi Roll", //[cite: 13]
      category: "sushi",
      price: 645, //[cite: 13]
      description: "Crispy rock shrimp over sushi rice.",
      nutrition: { protein: 22, carbs: 40, fat: 18 },
      tasteProfile: { comparisonText: "Crunchy fried shrimp with creamy drizzle.", spiceLevel: 2, flavors: { spicy: 2, sweet: 2, sour: 1, savory: 4 }, textureTags: ["Crispy", "Creamy"] },
      quantity: "8 pieces", bestseller: false, veg: false, image: Tempura
    },
    
    {
      id: "soft-shell-crab-sushi",
      name: "Soft Shell Crab Sushi", //[cite: 13]
      category: "sushi",
      price: 795, //[cite: 13]
      description: "Crispy fried soft shell crab maki.",
      nutrition: { protein: 20, carbs: 45, fat: 16 },
      tasteProfile: { comparisonText: "Shattering crab shell crunch in soft rice.", spiceLevel: 2, flavors: { spicy: 2, sweet: 2, sour: 1, savory: 5 }, textureTags: ["Crispy", "Chewy"] },
      quantity: "8 pieces", bestseller: false, veg: false, image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600"
    },

    // --- DIMSUMS ---
    {
      id: "spicy-veg-dimsum",
      name: "Spicy Veg Dimsum [4 Pcs]", //[cite: 13]
      category: "dimsums",
      price: 395, //[cite: 13]
      description: "Steamed dumplings filled with spicy mixed vegetables.",
      nutrition: { protein: 8, carbs: 32, fat: 6 },
      tasteProfile: { comparisonText: "Delicate wrappers giving way to fiery veg.", spiceLevel: 4, flavors: { spicy: 4, sweet: 1, sour: 2, savory: 3 }, textureTags: ["Soft", "Chewy"] },
      quantity: "4 pieces", bestseller: true, veg: true, image: Dimsum,
      model: "/models/dimsums.glb", // [cite: 13]
    },
    {
      id: "prawn-hargao-dimsum",
      name: "Prawn Hargao Dimsums [5 Pcs]", //[cite: 13]
      category: "dimsums",
      price: 495, //[cite: 13]
      description: "Classic translucent dumplings with chunky prawn filling.",
      nutrition: { protein: 22, carbs: 28, fat: 5 },
      tasteProfile: { comparisonText: "Plump, snappy prawn inside a sticky wrapper.", spiceLevel: 1, flavors: { spicy: 1, sweet: 2, sour: 0, savory: 4 }, textureTags: ["Chewy", "Juicy"] },
      quantity: "5 pieces", bestseller: false, veg: false, image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600"
    },
    {
      id: "chicken-gyoza",
      name: "Chicken Gyoza Dimsum [5 Pcs]", //[cite: 13]
      category: "dimsums",
      price: 445, //[cite: 13]
      description: "Pan-fried Japanese chicken dumplings.",
      nutrition: { protein: 18, carbs: 30, fat: 12 },
      tasteProfile: { comparisonText: "Crispy bottom, juicy chicken center.", spiceLevel: 2, flavors: { spicy: 2, sweet: 1, sour: 2, savory: 5 }, textureTags: ["Crispy", "Juicy"] },
      quantity: "5 pieces", bestseller: false, veg: false, image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600"
    },

    // --- RAMEN BOWLS ---
    {
      id: "classic-pork-ramen",
      name: "Classic Pork Ramen Noodles", //[cite: 13]
      category: "ramen",
      price: 595, //[cite: 13]
      description: "Rich, slow-cooked pork broth with tender noodles and chashu.",
      nutrition: { protein: 35, carbs: 55, fat: 28 },
      tasteProfile: { comparisonText: "Deeply savory and hearty.", spiceLevel: 1, flavors: { spicy: 1, sweet: 1, sour: 1, savory: 5 }, textureTags: ["Soft", "Juicy", "Chewy"] },
      quantity: "1 bowl", bestseller: true, veg: false, image: ClassicPork,
      model: "/models/compressed_Classic_Pork.glb", // [cite: 13]
    },
    
    {
      id: "chicken-tan-tan-ramen",
      name: "Chicken Tan Tan Ramen Noodles", //[cite: 13]
      category: "ramen",
      price: 545, //[cite: 13]
      description: "Creamy sesame broth with spicy minced chicken.",
      nutrition: { protein: 32, carbs: 58, fat: 22 },
      tasteProfile: { comparisonText: "Nutty, creamy sesame base cut with spicy chili oil.", spiceLevel: 4, flavors: { spicy: 4, sweet: 2, sour: 1, savory: 5 }, textureTags: ["Creamy", "Chewy"] },
      quantity: "1 bowl", bestseller: false, veg: false, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600"
    },

    // --- MAIN COURSE ---
    {
      id: "mapo-tofu",
      name: "Mapo Tofu (Veg)", //[cite: 13]
      category: "main-course",
      price: 1485, //[cite: 13]
      description: "Silken tofu in a spicy, numbing Sichuan chili sauce.",
      nutrition: { protein: 18, carbs: 20, fat: 25 },
      tasteProfile: { comparisonText: "Numbing Sichuan peppercorn heat with silken tofu.", spiceLevel: 5, flavors: { spicy: 5, sweet: 1, sour: 1, savory: 4 }, textureTags: ["Soft", "Creamy"] },
      quantity: "1 bowl", bestseller: false, veg: true, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600"
    },
    {
      id: "kung-pao-chicken",
      name: "Kung Pao Chicken", //[cite: 13]
      category: "main-course",
      price: 545, //[cite: 13]
      description: "Classic sweet and spicy chicken with peanuts.",
      nutrition: { protein: 38, carbs: 25, fat: 18 },
      tasteProfile: { comparisonText: "Sweet, tangy, and slightly spicy with crunchy peanuts.", spiceLevel: 3, flavors: { spicy: 3, sweet: 4, sour: 3, savory: 5 }, textureTags: ["Crunchy", "Juicy"] },
      quantity: "1 plate", bestseller: false, veg: false, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600"
    },

    // --- FRIED RICE & NOODLES ---
    {
      id: "veg-fried-rice-butter-garlic",
      name: "Veg Fried Rice (Butter Garlic)", //[cite: 13]
      category: "rice-noodles",
      price: 345, //[cite: 13]
      description: "Wok-tossed rice with rich butter and toasted garlic.",
      nutrition: { protein: 8, carbs: 65, fat: 16 },
      tasteProfile: { comparisonText: "Aromatic garlic and rich butter flavor.", spiceLevel: 1, flavors: { spicy: 1, sweet: 1, sour: 0, savory: 5 }, textureTags: ["Chewy"] },
      quantity: "1 bowl", bestseller: false, veg: true, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600"
    },
    {
      id: "prawns-udon-noodles",
      name: "Prawns Stir Fried Wheat Udon Noodles", //[cite: 13]
      category: "rice-noodles",
      price: 445, //[cite: 13]
      description: "Thick, chewy udon noodles tossed with plump prawns.",
      nutrition: { protein: 24, carbs: 70, fat: 12 },
      tasteProfile: { comparisonText: "Thick, satisfyingly chewy noodles in savory soy.", spiceLevel: 2, flavors: { spicy: 2, sweet: 2, sour: 1, savory: 5 }, textureTags: ["Chewy", "Juicy"] },
      quantity: "1 bowl", bestseller: false, veg: false, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600"
    },

    // --- DESSERTS ---
    {
      id: "mango-sticky-rice",
      name: "Mango Sticky Rice (Veg)", //[cite: 13]
      category: "desserts",
      price: 325, //[cite: 13]
      description: "Sweet glutinous rice topped with coconut cream and fresh mango.",
      nutrition: { protein: 4, carbs: 65, fat: 12 },
      tasteProfile: { comparisonText: "Tropical, sweet, and comforting.", spiceLevel: 0, flavors: { spicy: 0, sweet: 5, sour: 1, savory: 1 }, textureTags: ["Soft", "Chewy", "Creamy"] },
      quantity: "1 portion", bestseller: false, veg: true, image: "https://images.unsplash.com/photo-1505253758473-96b3015f21c9?w=600"
    },
    {
      id: "matcha-cheesecake",
      name: "Matcha Cheesecake", //[cite: 13]
      category: "desserts",
      price: 345, //[cite: 13]
      description: "Rich cheesecake infused with premium earthy matcha.",
      nutrition: { protein: 6, carbs: 35, fat: 22 },
      tasteProfile: { comparisonText: "Earthy, slightly bitter matcha balancing rich cream cheese.", spiceLevel: 0, flavors: { spicy: 0, sweet: 3, sour: 1, savory: 2 }, textureTags: ["Creamy", "Soft"] },
      quantity: "1 slice", bestseller: false, veg: true, image: "https://images.unsplash.com/photo-1505253758473-96b3015f21c9?w=600"
    },
    {
      id: "spicy-salmon-sushi",
      name: "Spicy Salmon Sushi Roll", //[cite: 13]
      category: "sushi",
      price: 645, //[cite: 13]
      description: "Minced fresh salmon mixed with spicy mayo.",
      nutrition: { protein: 24, carbs: 38, fat: 15 },
      tasteProfile: { comparisonText: "Melt-in-mouth raw salmon with a fiery kick.", spiceLevel: 4, flavors: { spicy: 4, sweet: 1, sour: 1, savory: 4 }, textureTags: ["Creamy", "Soft"] },
      quantity: "8 pieces", bestseller: true, veg: false, image: SpicySalmon,
      model: "/models/compressed_salmon_sushi.glb",
      modelIOS: "/models/salmon_sushi_usdz.glb" // [cite: 13]
    },
  ]
};

export default restaurantData;