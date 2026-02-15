import PageHeader from '@/components/layout/PageHeader';
import { getDynamicMetadata } from '@/utils/seo';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    const dynamic = await getDynamicMetadata('white-paper');
    return {
        title: dynamic?.title || 'White Paper - SBN Healthcare Solution',
        description: 'Read our latest insights and white papers on healthcare billing and RCM.',
    };
}

const WhitePaper = () => {
    return (
        <main className="bg-[#f8faff] min-h-screen">
            <PageHeader
                title="Insights & Analytics"
                subtitle="Industry Intelligence"
                description="The business of healthcare is changing, and you need a partner that takes your business forward. Find insights and perspectives on the latest trends in healthcare revenue cycle management."
            />

            <section className="py-[60px]">
                <div className="container mx-auto px-4">
                    {/* Main Layout Grid */}
                    <div className="flex flex-col lg:flex-row gap-[50px] items-start">

                        {/* LEFT COLUMN: Content */}
                        <div className="flex-[2] min-w-0">
                            {/* Intro text integrated into header */}

                            {/* Featured Resource Block */}
                            <div className="bg-white rounded-xl p-[30px] flex flex-col md:flex-row gap-[30px] items-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-slate-200 mb-[50px]">
                                <div className="flex-[3]">
                                    <h2 className="text-[22px] font-bold mb-[15px] text-[var(--secondary-color)]">
                                        Download Our Free Guide: "What To Look For In A Medical Billing Company"
                                    </h2>
                                    <p className="text-[15px] leading-[1.6] text-[var(--text-color)] mb-[15px]">
                                        Download our free whitepaper and see what any smart physician will take into account when interviewing potential billing company partners.
                                    </p>
                                    <p className="text-[15px] leading-[1.6] text-[var(--text-color)] mb-[15px]">
                                        "What To Look For In A Medical Billing Company" will give you an insider's view of...well...what to look for in a medical billing company! This is insight you won't want to leave out of your deliberations.
                                    </p>
                                </div>
                                <div className="flex-[2]">
                                    <img src="/img/white-paper.jpg" alt="White Paper Guide" className="w-full h-auto rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.1)]" />
                                </div>
                            </div>

                            {/* Additional Resources Grid */}
                            <div className="mt-[50px]">
                                <h3 className="text-[26px] font-bold text-[var(--heading-color)] mb-[30px] pb-[15px] border-b-2 border-[var(--primary-color)] inline-block">
                                    Latest Resources
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">

                                    {/* Card 1 */}
                                    <div className="bg-white border border-slate-200 rounded-[10px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:border-[var(--primary-color)] flex flex-col group">
                                        <div className="h-[160px] overflow-hidden">
                                            <img src="/img/white-paper2.jpg" alt="Patient Centric Billing" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                        </div>
                                        <div className="p-[20px] flex-1 flex flex-col">
                                            <h4 className="text-[17px] font-bold text-[var(--heading-color)] mb-[10px] leading-[1.4]">
                                                Patient Centric Billing in a Post-Pandemic World
                                            </h4>
                                            <p className="text-[14px] text-slate-500 mb-[15px] flex-grow leading-[1.5]">
                                                Even before the onset of the Covid-19 pandemic, the healthcare sector was being tested to its limits.
                                            </p>
                                            <a href="#" className="block text-center bg-transparent border-2 border-[var(--primary-color)] text-[var(--primary-color)] py-2 px-3 rounded-md font-semibold text-[13px] no-underline transition-all duration-200 hover:bg-[var(--primary-color)] hover:text-white">
                                                Download PDF
                                            </a>
                                        </div>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="bg-white border border-slate-200 rounded-[10px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:border-[var(--primary-color)] flex flex-col group">
                                        <div className="h-[160px] overflow-hidden">
                                            <img src="/img/white-paper3.jpg" alt="Telemedicine" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                        </div>
                                        <div className="p-[20px] flex-1 flex flex-col">
                                            <h4 className="text-[17px] font-bold text-[var(--heading-color)] mb-[10px] leading-[1.4]">
                                                The Growth of Medical Billing in Telemedicine
                                            </h4>
                                            <p className="text-[14px] text-slate-500 mb-[15px] flex-grow leading-[1.5]">
                                                The need for better access to medical care has contributed significantly to the radical changes.
                                            </p>
                                            <a href="#" className="block text-center bg-transparent border-2 border-[var(--primary-color)] text-[var(--primary-color)] py-2 px-3 rounded-md font-semibold text-[13px] no-underline transition-all duration-200 hover:bg-[var(--primary-color)] hover:text-white">
                                                Download PDF
                                            </a>
                                        </div>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="bg-white border border-slate-200 rounded-[10px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:border-[var(--primary-color)] flex flex-col group">
                                        <div className="h-[160px] overflow-hidden">
                                            <img src="/img/white-paper1.jpg" alt="Healthcare 2021" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                        </div>
                                        <div className="p-[20px] flex-1 flex flex-col">
                                            <h4 className="text-[17px] font-bold text-[var(--heading-color)] mb-[10px] leading-[1.4]">
                                                Healthcare in 2021: Optimal Revenue Cycle
                                            </h4>
                                            <p className="text-[14px] text-slate-500 mb-[15px] flex-grow leading-[1.5]">
                                                The Covid-19 pandemic tested the mettle of the healthcare sector like no other development in history.
                                            </p>
                                            <a href="#" className="block text-center bg-transparent border-2 border-[var(--primary-color)] text-[var(--primary-color)] py-2 px-3 rounded-md font-semibold text-[13px] no-underline transition-all duration-200 hover:bg-[var(--primary-color)] hover:text-white">
                                                Download PDF
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        {/* RIGHT COLUMN: Sidebar */}
                        <aside className="hidden lg:block flex-1 min-w-[320px] sticky top-[100px] w-full">
                            <div className="bg-white p-[30px] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border-t-[5px] border-t-[var(--accent-color)]">
                                <h3 className="text-[20px] font-extrabold text-[var(--secondary-color)] mb-[10px] uppercase text-center">
                                    Download Our Free Guide
                                </h3>
                                <p className="text-[14px] text-slate-500 mb-[25px] text-center">
                                    Fill out the form below to access premium content.
                                </p>
                                <form>
                                    <div className="mb-[15px]">
                                        <input type="text" placeholder="First Name*" className="w-full p-[12px_15px] border border-slate-300 rounded-md text-[14px] transition-colors focus:border-[var(--secondary-color)] focus:shadow-[0_0_0_3px_rgba(11,31,51,0.1)] outline-none" required />
                                    </div>
                                    <div className="mb-[15px]">
                                        <input type="text" placeholder="Last Name*" className="w-full p-[12px_15px] border border-slate-300 rounded-md text-[14px] transition-colors focus:border-[var(--secondary-color)] focus:shadow-[0_0_0_3px_rgba(11,31,51,0.1)] outline-none" required />
                                    </div>
                                    <div className="mb-[15px]">
                                        <input type="email" placeholder="Work Email*" className="w-full p-[12px_15px] border border-slate-300 rounded-md text-[14px] transition-colors focus:border-[var(--secondary-color)] focus:shadow-[0_0_0_3px_rgba(11,31,51,0.1)] outline-none" required />
                                    </div>
                                    <div className="mb-[15px]">
                                        <input type="tel" placeholder="Phone Number" className="w-full p-[12px_15px] border border-slate-300 rounded-md text-[14px] transition-colors focus:border-[var(--secondary-color)] focus:shadow-[0_0_0_3px_rgba(11,31,51,0.1)] outline-none" />
                                    </div>
                                    <div className="mb-[15px]">
                                        <input type="text" placeholder="Company Name" className="w-full p-[12px_15px] border border-slate-300 rounded-md text-[14px] transition-colors focus:border-[var(--secondary-color)] focus:shadow-[0_0_0_3px_rgba(11,31,51,0.1)] outline-none" />
                                    </div>
                                    <button type="submit" className="w-full bg-[var(--accent-color)] text-black border-none p-[12px] font-bold rounded-md cursor-pointer text-[14px] uppercase transition-colors hover:bg-[#eabd55]">
                                        Access Now
                                    </button>
                                </form>
                            </div>
                        </aside>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default WhitePaper;
