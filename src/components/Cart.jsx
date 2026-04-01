import { BsCart3 } from "react-icons/bs";
import { toast } from "react-toastify";

const Cart = ({ selectedProduct, setSelectedProduct }) => {
    const handleRemoveProduct = (productId) => {
        setSelectedProduct(selectedProduct.filter(product => product.id !== productId));
        toast.success("Item removed from cart!");
    };

    if (selectedProduct.length === 0) {
        return (
            <div className='border-2 border-[#F2F2F2] rounded-2xl p-10 space-y-6'>
                <h1 className='font-bold text-[#101727] text-2xl'>Your Cart</h1>

                <div className='flex flex-col justify-center items-center gap-4 py-16'>
                    <BsCart3 className="text-7xl text-black/30" />
                    <p className='text-lg font-medium text-black/30'>Your cart is empty</p>
                </div>
            </div>
        );
    }

    return (
        <div className='border-2 border-[#F2F2F2] rounded-2xl p-10 space-y-6'>
            <h1 className='font-bold text-[#101727] text-2xl'>Your Cart</h1>

            <ul className='space-y-4'>
                {selectedProduct.map((product) =>
                    <li key={product.id} className='flex sm:flex-row flex-col justify-center items-start sm:items-center p-5 bg-[#F9FAFC] rounded-2xl gap-4'>
                        <div className='bg-white border border-[#F2F2F2] rounded-full p-3'>
                            <img className='w-8 h-8' src={product.icon} alt={product.name} />
                        </div>

                        <div className='flex-1 space-y-1'>
                            <h4 className='text-xl font-semibold text-[#101727]'>{product.name}</h4>
                            <p className='text-base font-medium text-[#627382]'>${product.price}</p>
                        </div>

                        <button
                            className='text-[#FF3980] sm:w-fit w-full font-bold btn sm:btn-ghost rounded-full'
                            onClick={() => handleRemoveProduct(product.id)}
                        >
                            Remove
                        </button>
                    </li>
                )}
            </ul>

            <div className='flex justify-between items-center'>
                <span className='text-base text-[#627382]'>Total:</span>
                <p className='text-2xl font-bold text-[#101727]'>${selectedProduct.reduce((sum, product) => sum + product.price, 0)}</p>
            </div>

            <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] transition-all p-4 rounded-full font-bold text-base text-white flex justify-center items-center cursor-pointer w-full shadow-lg shadow-[#4F39F6]/30 active:shadow-none duration-200' onClick={() => {
                setSelectedProduct([]);
                toast.success("Checkout completed successfully!");
            }}>Proceed to Checkout</button>
        </div>
    );
};

export default Cart;