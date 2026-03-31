import React, { use, useState } from 'react';
import Products from './Products';
import Cart from './Cart';

const Digitools = ({ productPromise, selectedProduct, setSelectedProduct }) => {
    const productData = use(productPromise);
    const [selectedTab, setSelectedTab] = useState("Products");

    return (
        <div className='py-16 bg-white container mx-auto space-y-12'>
            <div className='space-y-4 text-center'>
                <h1 className='text-5xl font-extrabold text-[#101727]'>Premium Digital Tools</h1>
                <p className='text-[#627382]'>
                    Choose from our curated collection of premium digital products designed
                    <br />
                    to boost your productivity and creativity.</p>

                {/* name of each tab group should be unique */}
                <div className="tabs tabs-box justify-center bg-transparent gap-4 shadow-none border border-[#F6F6F6] w-fit mx-auto rounded-full p-1">
                    <input onClick={() => setSelectedTab("Products")} type="radio" name="my_tabs_1" className={`tab w-30 rounded-full ${selectedTab === "Products" ? 'font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-lg shadow-[#6107EC]/30' : 'bg-none text-[#25065D]'}`} aria-label="Models" defaultChecked />
                    <input onClick={() => setSelectedTab("Cart")} type="radio" name="my_tabs_1" className={`tab w-30 rounded-full ${selectedTab === "Cart" ? 'font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-lg shadow-[#6107EC]/30' : 'bg-none text-[#25065D]'}`} aria-label={`Cart (${selectedProduct.length})`} />
                </div>
            </div>

            {selectedTab === "Products" ? <Products productData={productData} setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct} /> : <Cart selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />}
        </div>
    );
};

export default Digitools;