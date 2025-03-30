import React from 'react';
import { products } from '../../assets/data/products';
import './Products.css';

const Products = () => {
  return (
    <section id="products" className="products-section">
      <div className="container">
        <h2>Our Premium Office Chairs</h2>
        <p className="section-subtitle">Ergonomic designs for maximum comfort</p>
        
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img 
                  src={product.image} 
                  alt={product.name}
                  loading="lazy"
                />
                {product.featured && <span className="featured-badge">Bestseller</span>}
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">${product.price.toFixed(2)}</p>
                <button className="cta-button">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;