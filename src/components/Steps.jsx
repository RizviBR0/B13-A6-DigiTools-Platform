import User from '../assets/user.png'
import Rocket from '../assets/rocket.png'
import Package from '../assets/Package.png'

const Steps = () => {
    return (
        <div className='lg:py-16 py-10 bg-[#F9FAFC]'>
            <div className='container mx-auto space-y-10'>
                <div className='space-y-4 text-center'>
                    <h1 className='text-5xl font-extrabold text-[#101727]'>Get Started in 3 Steps</h1>
                    <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className='bg-white flex justify-center items-center flex-col gap-4 border-2 border-[#F1F1F1] rounded-2xl py-20 px-4 relative'>
                        <span className='absolute top-5 right-5 flex justify-center items-center w-8 h-8 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold text-sm'>
                            01
                        </span>

                        <div className='bg-[#F0E9FE] p-5 rounded-full'>
                            <img src={User} alt="User" className='w-16' />
                        </div>
                        <h2 className='font-bold text-[#101727] text-2xl'>Create Account</h2>
                        <p className='text-[#627382] text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>

                    <div className='bg-white flex justify-center items-center flex-col gap-4 border-2 border-[#F1F1F1] rounded-2xl py-20 px-4 relative'>
                        <span className='absolute top-5 right-5 flex justify-center items-center w-8 h-8 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold text-sm'>
                            02
                        </span>

                        <div className='bg-[#F0E9FE] p-5 rounded-full'>
                            <img src={Rocket} alt="Rocket" className='w-16' />
                        </div>
                        <h2 className='font-bold text-[#101727] text-2xl'>Choose Products</h2>
                        <p className='text-[#627382] text-center'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>

                    <div className='bg-white flex justify-center items-center flex-col gap-4 border-2 border-[#F1F1F1] rounded-2xl py-20 px-4 relative'>
                        <span className='absolute top-5 right-5 flex justify-center items-center w-8 h-8 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold text-sm'>
                            03
                        </span>

                        <div className='bg-[#F0E9FE] p-5 rounded-full'>
                            <img src={Package} alt="Package" className='w-16' />
                        </div>
                        <h2 className='font-bold text-[#101727] text-2xl'>Start Creating</h2>
                        <p className='text-[#627382] text-center'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;