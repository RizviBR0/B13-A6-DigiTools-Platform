import PricingCard from "./ui/PricingCard";

const plans = [
    {
        "plan": "Starter",
        "description": "Perfect for getting started",
        "price": 0,
        "features": [
            "Access to 10 free tools",
            "Basic templates",
            "Community support",
            "1 project per month"
        ],
        "buttonText": "Get Started Free",
        "badge": null
    },
    {
        "plan": "Pro",
        "description": "Best for professionals",
        "price": 29,
        "features": [
            "Access to all premium tools",
            "Unlimited templates",
            "Priority support",
            "Unlimited projects",
            "Cloud sync",
            "Advanced analytics"
        ],
        "buttonText": "Start Pro Trial",
        "badge": "Most Popular"
    },
    {
        "plan": "Enterprise",
        "description": "For teams and businesses",
        "price": 99,
        "features": [
            "Everything in Pro",
            "Team collaboration",
            "Custom integrations",
            "Dedicated support",
            "SLA guarantee",
            "Custom branding"
        ],
        "buttonText": "Contact Sales",
        "badge": null
    }
]

const PricingPlan = () => {
    return (
        <div id="pricing" className="container mx-auto lg:py-16 py-10 space-y-10">
            <div className='space-y-4 text-center'>
                <h1 className='text-5xl font-extrabold text-[#101727]'>Simple, Transparent Pricing</h1>
                <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {plans.map((plan, idx) => <PricingCard key={idx} plan={plan} popular={plan.badge === "Most Popular"} />)}
            </div>
        </div>
    );
};

export default PricingPlan;