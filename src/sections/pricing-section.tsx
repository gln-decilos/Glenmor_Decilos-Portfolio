import SectionTitle from "../components/section-title";
import { CircleCheckIcon, CircleDollarSignIcon } from "lucide-react";
import { useState } from "react";

interface PricingData {
    name: string;
    pricing: number;
    mostPopular?: boolean;
    features: string[];
}

export default function PricingSection() {
    const [isYearly, setIsYearly] = useState(false);

    const pricingData: PricingData[] = [
        {
            name: "Free",
            pricing: 0,
            features: [
                "1 project",
                "AI-generated starter layout",
                "Basic components library",
                "Launchify subdomain",
                "Community support",
                "Limited customization"
            ]
        },
        {
            name: "Pro",
            pricing: 19,
            mostPopular: true,
            features: [
                "Unlimited projects",
                "AI-powered components",
                "Custom domains",
                "Advanced customization",
                "Analytics dashboard",
                "Email support",
                "Export-ready pages"
            ]
        },
        {
            name: "Enterprise",
            pricing: 49,
            features: [
                "Unlimited projects & teams",
                "Advanced AI automation",
                "Team collaboration",
                "Enterprise-grade security",
                "Priority 24/7 support",
                "Custom integrations",
                "SLA & compliance support"
            ]
        }
    ]


    return (
        <>
            <div id="pricing" className="flex flex-col items-center py-16 px-4 mt-20">
                <SectionTitle
                    icon={<CircleDollarSignIcon className="dark:text-cyan-300" />}
                    badge="Pricing"
                    title="Simple, transparent pricing"
                    description="Flexible pricing options designed to meet your needs whether you're just getting started or scaling up."
                />
                <div className="relative p-1 mt-10 bg-white border border-gray-200 rounded-full inline-flex items-center mb-16 w-60 transition-colors dark:bg-zinc-900 dark:border-zinc-700">
                    <div className={`absolute -z-10 w-[calc(50%-4px)] h-13.25 rounded-full bg-linear-to-r from-green-500 to-green-300 transition-transform duration-300 ease-in-out pointer-events-none dark:from-cyan-500 dark:to-violet-400
                        ${isYearly ? 'translate-x-full' : 'translate-x-0'}`}
                    ></div>

                    <button
                        onClick={() => setIsYearly(false)}
                        className={`relative bg-white z-10 flex-1 py-2.5 cursor-pointer rounded-full text-sm font-medium text-center transition-colors duration-300 dark:bg-zinc-900
                        ${!isYearly ? 'text-green-500 dark:text-cyan-300' : 'text-gray-500 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-100'}`}>
                        Monthly
                    </button>

                    <button
                        onClick={() => setIsYearly(true)}
                        className={`relative z-10 flex-1 py-2.5 cursor-pointer rounded-full text-sm font-medium text-center flex items-center justify-center gap-1 transition-colors duration-300
                        ${isYearly ? 'text-green-500 dark:text-cyan-300' : 'text-gray-500 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-100'}`}>
                        Yearly
                        <span className='text-xs'>15% off</span>
                    </button>

                </div>


                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full items-end">

                    {pricingData.map((plan: PricingData, index: number) => (
                        <div key={index} className={plan.mostPopular ? 'bg-linear-to-r from-green-500 to-green-200 rounded-3xl p-2 hover:shadow-lg transition-shadow dark:from-cyan-500 dark:to-violet-500' : ''}>
                            {plan.mostPopular && <p className='text-center text-green-700 text-sm py-1.5 dark:text-zinc-950'>Popular</p>}
                            <div key={index} className={`rounded-3xl p-6 bg-white transition-colors dark:bg-zinc-900 ${!plan.mostPopular ? 'border border-neutral-200 hover:shadow-lg transition-shadow dark:border-zinc-800' : ''}`}>
                                <h3 className="text-neutral-700 text-sm mb-6 dark:text-zinc-300">
                                    {plan.name}
                                </h3>
                                <div className="flex items-baseline gap-1 mb-8">
                                    <span className="text-[28px] text-neutral-900 dark:text-zinc-50">
                                        {isYearly ? `$${plan.pricing - Math.round(plan.pricing * 0.15)}` : `$${plan.pricing}`}
                                    </span>
                                    <span className="text-neutral-600 text-xs dark:text-zinc-400">/ month</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature: string, i: number) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                                            <CircleCheckIcon size={20} className="text-green-500 dark:text-cyan-300" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full cursor-pointer py-3 rounded-full bg-linear-to-r from-green-500 to-green-300 text-white text-sm hover:opacity-95 transition-opacity dark:from-cyan-500 dark:to-violet-400 dark:text-zinc-950">
                                    Get started
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
