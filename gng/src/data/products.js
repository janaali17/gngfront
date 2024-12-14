const products = [
    // Moisturizer (Covers all combinations)
    { name: "Glow Recipe Moisturizer", ageGroup: "Below 18", skinType: "Normal", priceRange: "$10-$20", productType: "Moisturizer" },
    { name: "Glow Recipe Moisturizer", ageGroup: "18-25", skinType: "Dry", priceRange: "$20-$50", productType: "Moisturizer" },
    { name: "CeraVe Moisturizer", ageGroup: "26-35", skinType: "Sensitive", priceRange: "$10-$20", productType: "Moisturizer" },
    { name: "The Ordinary Moisturizer", ageGroup: "36-45", skinType: "Combination", priceRange: "$50-$100", productType: "Moisturizer" },
    { name: "La Roche-Posay Moisturizer", ageGroup: "Above 45", skinType: "Oily", priceRange: "$10-$20", productType: "Moisturizer" },
  
    // Serum (Covers all combinations)
    { name: "Glow Recipe Serum", ageGroup: "Below 18", skinType: "Normal", priceRange: "$10-$20", productType: "Serum" },
    { name: "The Ordinary Serum", ageGroup: "18-25", skinType: "Sensitive", priceRange: "$20-$50", productType: "Serum" },
    { name: "CeraVe Serum", ageGroup: "26-35", skinType: "Oily", priceRange: "$10-$20", productType: "Serum" },
    { name: "La Roche-Posay Serum", ageGroup: "36-45", skinType: "Combination", priceRange: "$50-$100", productType: "Serum" },
    { name: "Glow Recipe Serum", ageGroup: "Above 45", skinType: "Dry", priceRange: "$20-$50", productType: "Serum" },
  
    // Sunscreen (Covers all combinations)
    { name: "CeraVe Sunscreen", ageGroup: "Below 18", skinType: "Oily", priceRange: "$10-$20", productType: "Sunscreen" },
    { name: "The Ordinary Sunscreen", ageGroup: "18-25", skinType: "Normal", priceRange: "$20-$50", productType: "Sunscreen" },
    { name: "La Roche-Posay Sunscreen", ageGroup: "26-35", skinType: "Dry", priceRange: "$10-$20", productType: "Sunscreen" },
    { name: "Glow Recipe Sunscreen", ageGroup: "36-45", skinType: "Combination", priceRange: "$50-$100", productType: "Sunscreen" },
    { name: "Neutrogena Sunscreen", ageGroup: "Above 45", skinType: "Sensitive", priceRange: "$10-$20", productType: "Sunscreen" },
  
    // Cleanser (Covers all combinations)
    { name: "CeraVe Cleanser", ageGroup: "Below 18", skinType: "Normal", priceRange: "$10-$20", productType: "Cleanser" },
    { name: "The Ordinary Cleanser", ageGroup: "18-25", skinType: "Dry", priceRange: "$20-$50", productType: "Cleanser" },
    { name: "La Roche-Posay Cleanser", ageGroup: "26-35", skinType: "Oily", priceRange: "$10-$20", productType: "Cleanser" },
    { name: "Glow Recipe Cleanser", ageGroup: "36-45", skinType: "Combination", priceRange: "$50-$100", productType: "Cleanser" },
    { name: "Neutrogena Cleanser", ageGroup: "Above 45", skinType: "Sensitive", priceRange: "$10-$20", productType: "Cleanser" },
  
    // Rare "No Match" Cases (Intentional)
    { name: null, ageGroup: "Below 18", skinType: "Combination", priceRange: "$100+", productType: "Serum" },
    { name: null, ageGroup: "Above 45", skinType: "Normal", priceRange: "$100+", productType: "Sunscreen" },
  ];
  
  export default products;