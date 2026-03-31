import { FaSquareFacebook } from "react-icons/fa6";
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
    return (
        <div className="bg-[#101727] border-t border-red-900/50 pt-16 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Logo & Description */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3 mb-6">
                            <h1 className="text-5xl font-bold text-white">DigiTools</h1>
                        </div>

                        <p className="text-white/80 text-lg max-w-md">
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
                        <ul className="space-y-4 text-white/80">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Templates
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Integrations
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
                        <ul className="space-y-4 text-white/80">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Press
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
                        <ul className="space-y-4 text-white/80">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Community
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>


                    <div className="lg:col-span-2">
                        <h3 className="text-white font-semibold mb-6 text-lg">Social Links</h3>

                        <div className="flex flex-row flex-wrap gap-3">
                            <a href="#" className="rounded-full bg-white p-2">
                                <RiInstagramFill className="text-2xl" />
                            </a>
                            <a href="#" className="rounded-full bg-white p-2">
                                <FaSquareFacebook className="text-2xl" />
                            </a>
                            <a href="#" className="rounded-full bg-white p-2">
                                <RiTwitterXFill className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-[#E5E7EB]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-[#FAFAFA]/50">
                    <div>© 2026 Digitools. All rights reserved.</div>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-red-400 transition">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-red-400 transition">
                            Terms of Service
                        </a>
                        <a href="#" className="hover:text-red-400 transition">
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;