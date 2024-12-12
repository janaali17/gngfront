import React, { useState } from "react";
import "./LocateProduct.css";

const stores = [
  {
    name: "Sephora - Open Air Mall",
    address: "Open Air Mall, 5th Settlement, New Cairo",
    products: ["Serum", "Moisturizer", "Sunscreen"],
  },
  {
    name: "Sephora - CFC",
    address: "Cairo Festival City, New Cairo",
    products: ["Serum", "Cleanser", "Sunscreen"],
  },
  {
    name: "Sephora - Point 90",
    address: "Point 90 Mall, 5th Settlement, New Cairo",
    products: ["Moisturizer", "Cleanser", "Sunscreen"],
  },
];

const LocateProduct = () => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [filteredStores, setFilteredStores] = useState([]);

  const handleSearch = () => {
    if (selectedProduct === "") return;
    const results = stores.filter((store) =>
      store.products.includes(selectedProduct)
    );
    setFilteredStores(results);
  };

  return (
    <div className="locate-product-container">
      <h2>Locate Product</h2>
      <div className="product-search">
        <label htmlFor="product">Choose a product:</label>
        <select
          id="product"
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
        >
          <option value="">-- Select Product --</option>
          <option value="Serum">Serum</option>
          <option value="Moisturizer">Moisturizer</option>
          <option value="Sunscreen">Sunscreen</option>
          <option value="Cleanser">Cleanser</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>

      {filteredStores.length > 0 ? (
        <div className="store-grid">
          {filteredStores.map((store, index) => (
            <div key={index} className="store-card">
              <h3>{store.name}</h3>
              <p>{store.address}</p>
            </div>
          ))}
        </div>
      ) : (
        selectedProduct && <p>No stores found for this product.</p>
      )}
    </div>
  );
};

export default LocateProduct;