const PricingCard = ({ plan, popular }) => {
    return (
        <div className={`card ${popular ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'bg-[#F9FAFC]'} shadow-sm`}>
            <div className="card-body gap-6 relative">
                {popular && <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 badge badge-md text-[#BB4D00] bg-[#FEF3C6] rounded-full font-medium py-3.5">Most Popular</span>}
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold">{plan.plan}</h2>
                    <span className={popular ? 'text-white/80' : 'text-[#627382]'}>{plan.description}</span>
                </div>

                <span className="text-[40px] font-bold">${plan.price}<span className={`text-xl font-normal ${popular ? 'text-white' : 'text-[#627382]'}`}>/mo</span></span>

                <ul className="flex flex-1 flex-col gap-2">
                    {plan.features.map((feature, idx) => <li className="font-medium" key={idx}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`size-4 me-2 inline-block ${popular ? 'text-white' : 'text-success'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span className={popular ? 'text-white' : 'text-[#627382]'}>{feature}</span>
                    </li>)}
                </ul>

                <div className="mt-6">
                    <button className={`btn btn-primary btn-block rounded-full border-none ${popular ? 'bg-white' : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]'}`}><span className={popular ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent' : ''}>{plan.buttonText}</span></button>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;