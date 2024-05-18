import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    const groupedProducts = products.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        if (product.imageUrl) {
            acc[product.category].push(product);
        }
        return acc;
    }, {});

    return (
        <div className="product-list-container">
            <h2 className="product-list-title">Product List</h2>
            {Object.keys(groupedProducts).map((category) => (
                <div key={category} className="category-section">
                    <h3 className="category-title">{category}</h3>
                    <div className="product-cards-container">
                        {groupedProducts[category].map((product) => (
                            <div key={product._id} className="product-card">
                                <Link to={`/products/${product._id}`} className="product-card-link">
                                    {product.imageUrl && (
                                        <div className="product-card-content">
                                            <img src={product.imageUrl} alt={product.title} className="product-card-image" />
                                            <h3 className="product-card-title">{product.title}</h3>
                                        </div>
                                    )}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;