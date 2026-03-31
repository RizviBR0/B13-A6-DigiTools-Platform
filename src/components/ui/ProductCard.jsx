import { useState } from "react";
import { toast } from "react-toastify";

const ProductCard = ({ product, setSelectedProduct, selectedProduct }) => {
    const [isSelected, setIsSelected] = useState(selectedProduct.some(p => p.id === product.id));

    let badgeStyle;

    if (product.tag === 'Popular') {
        badgeStyle = "bg-[#E1E7FF] text-[#4F39F6]";
    } else if (product.tag === "Best Seller") {
        badgeStyle = "bg-[#FEF3C6] text-[#BB4D00]";
    } else if (product.tag === "New") {
        badgeStyle = "bg-[#DBFCE7] text-[#0A883E]";
    } else {
        badgeStyle = "bg-[#F2F2F2] text-[#627382]";
    }

    const handleProductSelect = () => {
        if (!isSelected) {
            setSelectedProduct([...selectedProduct, product]);
            setIsSelected(true);
            toast.success("Item added to cart!");
            return;
        }

        toast.error("Item already in cart!");
    }

    return (
        <div className="card bg-white border-2 border-[#F2F2F2] hover:border-[#627382]/30 duration-200 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#627382]/10">
            <div className="card-body gap-4 relative">
                <span className={`absolute top-2 right-2 text-sm font-medium px-3 py-1.5 rounded-full ${badgeStyle}`}>{product.tag}</span>

                <div className="border border-[#F2F2F2] rounded-full p-3 w-fit flex justify-center items-center">
                    <img className="w-8" src={product.icon} alt={product.name} />
                </div>

                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold">{product.name}</h2>
                    <span className='text-[#627382]'>{product.description}</span>
                </div>

                <span className="text-2xl font-bold">${product.price}<span className="text-base font-normal text-[#627382]">/Mo</span></span>

                <ul className="flex flex-1 flex-col gap-2">
                    {product.features.map((feature, idx) => <li className="font-medium" key={idx}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`size-4 me-2 inline-block text-success`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span className='text-[#627382]'>{feature}</span>
                    </li>)}
                </ul>

                <div>
                    <button className={`btn text-white btn-block rounded-full border-none ${isSelected ? 'bg-green-800' : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]'}`} onClick={handleProductSelect}>
                        {isSelected ? '✓ Added to Cart' : 'Buy Now'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;