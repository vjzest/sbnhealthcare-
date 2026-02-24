import React from 'react';
import type { Metadata } from 'next';
import { getDynamicMetadata } from '@/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
    const dynamic = await getDynamicMetadata('privacy-policy');
    return {
        title: dynamic?.title || 'Privacy Policy - SBN Healthcare Solution',
        description: dynamic?.description || 'Read our privacy policy and how we handle your data.',
    };
}

const PrivacyPolicy = () => {
    return (
        <div className="bg-white">
            {/* Banner Area */}
            <div
                className="relative bg-cover bg-center py-[60px] text-center text-white overflow-hidden"
                style={{ backgroundImage: "linear-gradient(rgba(11, 31, 51, 0.8), rgba(11, 31, 51, 0.9)), url('/img/bg1.jpg')" }}
            >
                <div className="container mx-auto px-4">
                    <h1 className="text-[42px] font-extrabold m-0 text-white drop-shadow-lg tracking-tighter">Privacy Policy</h1>
                </div>
            </div>

            <section className="py-[60px]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <h2 className="text-[44px] leading-[50px] mb-[20px] text-[var(--heading-color)] font-bold">Privacy Policy Disclosure</h2>
                            <div className="text-[16px] leading-[30px] text-[var(--text-color)]">
                                <p className="mb-[20px]"><strong>Uses and Disclosures of Protected Health Information</strong><br />
                                    Your protected health information may be used and disclosed by your physician, our office staff and others outside of our office who are involved in your care and treatment for the purpose of providing health care services to you. Your protected health information may also be used and disclosed to pay your health care bills and to support the operation of your physician’s practice.</p>

                                <p className="mb-[20px]">Following are examples of the types of uses and disclosures of your protected health information that your physician’s office is permitted to make. These examples are not meant to be exhaustive, but to describe the types of uses and disclosures that may be made by our office.</p>

                                <p className="mb-[20px]"><strong>Treatment:</strong> We will use and disclose your protected health information to provide, coordinate, or manage your health care and any related services. This includes the coordination or management of your health care with another provider. For example, we would disclose your protected health information, as necessary, to a home health agency that provides care to you.</p>

                                <p className="mb-[20px]">We will also disclose protected health information to other physicians who may be treating you.</p>

                                <p className="mb-[20px]">For example, your protected health information may be provided to a physician to whom you have been referred to ensure that the physician has the necessary information to diagnose or treat you. In addition, we may disclose your protected health information from time-to-time to another physician or health care provider (e.g., a specialist or laboratory) who, at the request of your physician, becomes involved in your care by providing assistance with your health care diagnosis or treatment to your physician.</p>

                                <p className="mb-[20px]"><strong>Payment:</strong> Your protected health information will be used and disclosed, as needed, to obtain payment for your health care services provided by us or by another provider.</p>

                                <p className="mb-[20px]">This may include certain activities that your health insurance plan may undertake before it approves or pays for the health care services we recommend for you such as: making a determination of eligibility or coverage for insurance benefits, reviewing services provided to you for medical necessity, and undertaking utilization review activities. For example, obtaining approval for a hospital stay may require that your relevant protected health information be disclosed to the health plan to obtain approval for the hospital admission.</p>

                                <p className="mb-[20px]"><strong>INFORMATION THAT IS GATHERED FROM VISITORS/USERS</strong></p>

                                <p className="mb-[20px]">In common with other websites, mobile applications, log files are stored on the web server saving details such as the visitor&apos;s/user’s IP address, browser type, location, referring page, and time and duration of visit.</p>

                                <p className="mb-[20px]">Cookies* may be used to remember visitor preferences when interacting with the website.</p>

                                <p className="mb-[20px]">Where registration is required, the visitor&apos;s email and a username will be stored on the server.</p>

                                <p className="mb-[20px]"><strong>HOW THE INFORMATION IS USED</strong></p>

                                <p className="mb-[20px]">The information is used to enhance the visitor experience when using the website to display personalized content and possibly advertising.</p>

                                <p className="mb-[20px]">E-mail addresses will not be sold, rented, or leased to 3rd parties.</p>

                                <p className="mb-[20px]">E-mail may be sent to inform you of news of our services or offers by us or our affiliates.</p>

                                <p className="mb-[20px]"><strong>WHAT IS PERSONAL INFORMATION?</strong></p>

                                <p className="mb-[20px]">For the purposes of this privacy statement, &apos;Personal Information&apos; shall mean and include any data which relates to an individual, that can be used to identify such individual, which is in possession of SBN Healthcare Solution. We collect, process, and use the Personal Information that is provided via our website, including information you provide when you register on our website, for example, name, email address, and telephone number, etc.</p>

                                <p className="mb-[20px]">1) Use of your Personal Information</p>
                                <p className="mb-[20px]">We use your Personal Information for the following purposes:<br />
                                    a) to create your user ID;<br />
                                    b) to contact you and respond to your questions or requests; and<br />
                                    c) to process job applications.</p>

                                <p className="mb-[20px]">2) Data recipients, transfer, and disclosure of Personal Information:</p>
                                <p className="mb-[20px]">SBN Healthcare does not share your Personal Information for any commercial/marketing purposes. We share your Personal Information within the below groups, on a need-to-know basis.<br />
                                    a) SBN Healthcare or with any of its subsidiaries;<br />
                                    b) Vendors;<br />
                                    c) Authorized third-party agents; or<br />
                                    d) Contractors.</p>

                                <p className="mb-[20px]">3) Data Security<br />
                                    SBN Healthcare has adopted reasonable and appropriate security practices and procedures including administrative, physical security, and technical controls in order to safeguard your Personal Information.</p>

                                <p className="mb-[20px]">4) Data Retention and Deletion<br />
                                    Personal Data will not be retained for a period more than necessary to fulfil the purposes outlined in this privacy statement unless a longer retention period is required by law or for directly related legitimate business purposes.</p>

                                <p className="mb-[20px]">Users may request permanent deletion of their Personal Data from our referral records by sending a request to info@sbnhealthcaresolution.com from their registered email ID.</p>

                                <p className="mb-[20px]">5) Amendments<br />
                                    SBN Healthcare may update or modify this privacy statement as and when required, at its discretion</p>

                                <p className="mb-[20px]"><strong>VISITOR OPTIONS</strong><br />
                                    If you have subscribed to one of our services, you may unsubscribe by following the instructions which are included in the email you receive.</p>

                                <p className="mb-[20px]">You may be able to block cookies via your browser settings but this may prevent you from access to certain features of the website.<br />
                                    *Cookies are small digital signature files that are stored by your web browser that allow your preferences to be recorded when visiting the website. Also, they may be used to track your return visits to the website.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
