import React from 'react';

const Stats = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='container mx-auto p-4 lg:py-8'>
                <div className="stats stats-vertical lg:stats-horizontal w-full text-center">
                    <div className="stat lg:p-4 p-5 lg:border-r-2 lg:border-b-0 border-r-0 border-b-2 border-[#ffffff]/40">
                        <div className="stat-value text-white text-3xl lg:text-5xl mb-3">31K</div>
                        <div className="stat-title text-lg lg:text-2xl font-medium text-white/80">Downloads</div>
                    </div>

                    <div className="stat lg:p-4 p-5 lg:border-r-2 lg:border-b-0 border-r-0 border-b-2 border-[#ffffff]/40">
                        <div className="stat-value text-white text-3xl lg:text-5xl mb-3">4,200</div>
                        <div className="stat-title text-lg lg:text-2xl font-medium text-white/80">New Users</div>
                    </div>

                    <div className="stat lg:p-4 p-5">
                        <div className="stat-value text-white text-3xl lg:text-5xl mb-3">1,200</div>
                        <div className="stat-title text-lg lg:text-2xl font-medium text-white/80">New Registers</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;