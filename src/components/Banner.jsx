import BannerImage from '../assets/banner.png'
import Dot from '../assets/dot.svg'
import Play from '../assets/Play.png'

const Banner = () => {
    return (
        <div className="relative min-h-162.5 flex items-center container mx-auto">
            <div className="mx-auto grid grid-cols-1 my-16 lg:my-0 lg:grid-cols-2 gap-10 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-4 lg:text-left text-center">
                    <div className="inline-flex items-center gap-2 bg-[#E1E7FF] text-red-400 text-sm font-medium px-5 py-2 rounded-full">
                        <img className='w-4 h-4' src={Dot} alt="" /><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</span>
                    </div>

                    <h1 className="text-4xl lg:text-7xl font-bold leading-tight tracking-tighter text-[#101727]">
                        Supercharge Your Digital Workflow
                    </h1>

                    <p className="text-lg font-normal text-[#627382] max-w-lg">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                    </p>

                    <div className="flex justify-center lg:justify-start flex-wrap gap-4 pt-4">
                        <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] transition-all px-6 py-4 rounded-full font-bold text-base flex items-center gap-3 group text-white cursor-pointer">
                            Explore Products
                        </button>

                        <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] transition-all p-0.5 rounded-full font-bold text-base group text-white flex justify-center items-center cursor-pointer">
                            <div className='flex items-center gap-2 bg-white px-5.5 py-3.5 rounded-full'>
                                <img className="group-hover:translate-x-1 transition" src={Play} alt="Play" />
                                <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Watch Demo</span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative">
                        <img
                            className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl"
                            src={BannerImage}
                            alt="AI Models Banner"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;