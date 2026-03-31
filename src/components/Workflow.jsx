const Workflow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] lg:py-24 py-20'>
            <div className='container mx-auto space-y-10'>
                <div className='space-y-4 text-center'>
                    <h1 className='text-4xl font-extrabold text-white'>Ready to Transform Your Workflow?</h1>
                    <p className='text-white/80'>
                        Join thousands of professionals who are already using Digitools to work smarter.
                        <br />
                        Start your free trial today.</p>
                </div>

                <div className='flex flex-col items-center justify-center space-y-4'>
                    <div className='space-x-4'>
                        <button className='bg-white text-[#4F39F6] hover:bg-gray-200 font-bold py-3 px-4 rounded-full cursor-pointer'>
                            Explore Products
                        </button>
                        <button className='bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#4F39F6] font-bold py-3 px-4 rounded-full cursor-pointer'>
                            <a href="#pricing">View Pricing</a>
                        </button>
                    </div>
                    <p className='text-white/70 text-center'>
                        14-day free trial • No credit card required • Cancel anytime
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Workflow;