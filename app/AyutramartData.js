const shared = {
  availability: "In Stock",
  origin: "Product of Canada — locally milled in Surrey, BC",
  packaging: "Premium quality sealed food-grade bag",
  shelfLife: "9 months from manufacture date",
  storageInstructions:
    "Store in a cool, dry place away from direct sunlight. Keep sealed in an airtight container after opening.",
  brand: "Matwala Foods · BAAZ Flour Mill",
  milledAt: "103 - 13045 84 Ave, Surrey, BC",
  contactPhone: "778-981-2002",
  contactEmail: "matwalafoods1@gmail.com",
  netWeight: "4 lb (1.81 kg)",
  discount: "0",
  variants: [{ id: "4lb", label: "4 lb Pack", price: "249" }],
};

function product(entry) {
  const img = entry.img;
  return {
    ...shared,
    ...entry,
    imgHover: img,
    inerimgList: [img],
    originalPrice: entry.originalPrice || entry.price,
  };
}

export default [
  product({
    id: 1,
    title: "BAAZ Kodo Millet Flour",
    heading: "BAAZ Kodo Millet Flour",
    img: "/img/products/baaz-kodo-millet-flour-4lb.jpg",
    price: "249",
    rating: "4.8",
    reviewsCount: 86,
    sku: "BAAZ-KODO-4LB",
    category: "Kodo Millet Flour",
    regionalName: "ਕੋਦੋ ਦਾ ਆਟਾ · कोदो का आटा",
    ingredients: "100% kodo millet (kodra / kodon)",
    nutritionPer100g:
      "Energy 356 kcal · Protein 11g · Carbs 72g · Fat 3.5g · Fiber 9g · Sodium 5mg · Iron 4% DV · Calcium 2% DV",
    userGuide:
      "Mix with warm water to form a soft dough for rotis, or blend into batters for idli, dosa, and wholesome baking.",
    benefits: [
      "Stone-ground kodo millet flour (kodon atta)",
      "High dietary fiber for everyday nutrition",
      "Naturally gluten-free ancient grain",
      "Milled fresh in Surrey, BC, Canada",
    ],
    description:
      "BAAZ Kodo Millet Flour is premium stone-ground kodra flour from Matwala Foods. Product of Canada, locally milled in Surrey BC for authentic taste, aroma, and nutrition in rotis, porridge, and millet-based recipes.",
  }),
  product({
    id: 2,
    title: "BAAZ Besan Chickpea Flour",
    heading: "BAAZ Besan Chickpea Flour",
    img: "/img/products/baaz-besan-chickpea-flour-4lb.jpg",
    price: "249",
    rating: "4.9",
    reviewsCount: 124,
    sku: "BAAZ-BESAN-4LB",
    category: "Besan Flour",
    regionalName: "ਬੇਸਨ · बेसन",
    ingredients: "100% chickpea (chana) gram flour",
    nutritionPer100g:
      "Energy 387 kcal · Protein 22g · Carbs 58g · Fat 6g · Fiber 10g · Sodium 16mg · Iron 6% DV · Calcium 4% DV",
    userGuide:
      "Sift before use. Perfect for pakoras, cheelas, kadhi, and traditional sweets such as besan ladoo.",
    benefits: [
      "Fine chickpea flour (besan) with rich protein",
      "Silky texture for light batters and sweets",
      "No preservatives or artificial colours",
      "Locally milled in Surrey, BC",
    ],
    description:
      "BAAZ Besan Chickpea Flour is finely ground gram flour from premium chickpeas. A Matwala Foods staple for savoury snacks, cheelas, kadhi, and festive sweets — product of Canada.",
  }),
  product({
    id: 3,
    title: "BAAZ Finger Millet Ragi Flour",
    heading: "BAAZ Finger Millet Ragi Flour",
    img: "/img/products/baaz-finger-millet-ragi-flour-4lb.jpg",
    price: "249",
    rating: "4.8",
    reviewsCount: 97,
    sku: "BAAZ-RAGI-4LB",
    category: "Ragi Flour",
    regionalName: "ਰਾਗੀ ਦਾ ਆਟਾ · रागी का आटा",
    ingredients: "100% finger millet (ragi)",
    nutritionPer100g:
      "Energy 354 kcal · Protein 13g · Carbs 80g · Fat 2.7g · Fiber 6.6g · Sodium 5mg · Iron 3% DV · Calcium 1% DV",
    userGuide:
      "Knead with warm water for soft ragi rotis, or stir into porridge and baking mixes for added nutrition.",
    benefits: [
      "Whole finger millet (ragi) flour",
      "Calcium-rich grain for family meals",
      "Gluten-free millet option",
      "Stone-ground in Surrey, BC",
    ],
    description:
      "BAAZ Finger Millet Ragi Flour delivers the earthy nutrition of ragi in a smooth milling from BAAZ Flour Mill. Ideal for rotis, porridge, and health-focused baking.",
  }),
  product({
    id: 4,
    title: "BAAZ Corn Flour",
    heading: "BAAZ Corn Flour",
    img: "/img/products/baaz-corn-flour-4lb.jpg",
    price: "229",
    rating: "4.7",
    reviewsCount: 112,
    sku: "BAAZ-CORN-4LB",
    category: "Corn Flour",
    regionalName: "ਮੱਕੀ ਦਾ ਆਟਾ · मक्की का आटा",
    ingredients: "100% yellow corn (makki)",
    nutritionPer100g:
      "Energy 365 kcal · Protein 7g · Carbs 78g · Fat 4g · Fiber 7g · Sodium 5mg · Iron 4% DV · Calcium 2% DV",
    userGuide:
      "Combine with warm water for makki di roti, cornbread, tortillas, and crispy snack batters.",
    benefits: [
      "Fine yellow corn flour (makki atta)",
      "Naturally gluten-free",
      "Golden colour and authentic corn aroma",
      "Product of Canada · milled in Surrey BC",
    ],
    description:
      "BAAZ Corn Flour is stone-milled from premium Canadian yellow corn for makki roti, cornbread, and traditional Punjabi favourites.",
  }),
  product({
    id: 5,
    title: "BAAZ Pearl Millet Bajra Flour",
    heading: "BAAZ Pearl Millet Bajra Flour",
    img: "/img/products/baaz-pearl-millet-bajra-flour-4lb.jpg",
    price: "249",
    rating: "4.8",
    reviewsCount: 88,
    sku: "BAAZ-BAJRA-4LB",
    category: "Bajra Flour",
    regionalName: "ਬਾਜਰਾ ਦਾ ਆਟਾ · बाजरा का आटा",
    ingredients: "100% pearl millet (bajra)",
    nutritionPer100g:
      "Energy 361 kcal · Protein 11g · Carbs 67g · Fat 5g · Fiber 8g · Sodium 6mg · Iron 8% DV · Calcium 2% DV",
    userGuide:
      "Knead with warm water and a pinch of salt for soft bajra rotis; cook on a hot tawa with ghee.",
    benefits: [
      "Pearl millet (bajra) whole grain flour",
      "High fiber and iron content",
      "Gluten-free winter-season staple",
      "Locally milled at BAAZ Flour Mill, Surrey",
    ],
    description:
      "BAAZ Pearl Millet Bajra Flour is wholesome bajra atta for rustic rotis and nutritious everyday meals — premium quality from Matwala Foods.",
  }),
  product({
    id: 6,
    title: "BAAZ Sorghum Jowar Flour",
    heading: "BAAZ Sorghum Jowar Flour",
    img: "/img/products/baaz-sorghum-jowar-flour-4lb.jpg",
    price: "249",
    rating: "4.8",
    reviewsCount: 91,
    sku: "BAAZ-JOWAR-4LB",
    category: "Jowar Flour",
    regionalName: "ਜਿਉਆਰ ਦਾ ਆਟਾ · ज्वार का आटा",
    ingredients: "100% sorghum (jowar)",
    nutritionPer100g:
      "Energy 357 kcal · Protein 10g · Carbs 74g · Fat 3.1g · Fiber 6.3g · Sodium 4mg · Iron 3% DV · Calcium 2% DV",
    userGuide:
      "Mix with warm water for jowar bhakri / roti. Rest dough briefly before rolling or hand-patting.",
    benefits: [
      "Pure sorghum (jowar) flour",
      "Gluten-free and easy to digest",
      "Rich in fiber and minerals",
      "Milled in Surrey, BC — product of Canada",
    ],
    description:
      "BAAZ Sorghum Jowar Flour is fresh jowar atta for soft bhakris and daily gluten-free rotis. Part of the Matwala Foods BAAZ Flour Mill range.",
  }),
];
