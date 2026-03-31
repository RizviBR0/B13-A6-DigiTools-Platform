import React from 'react';
import ProductCard from './ui/ProductCard';

const Products = ({ productData, setSelectedProduct, selectedProduct }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {productData.map(product => <ProductCard key={product.id} product={product} setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct} />)}
        </div>
    );
};

export default Products;