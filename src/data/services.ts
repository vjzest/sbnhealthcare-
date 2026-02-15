
import {
    FaChartPie, FaFileInvoice, FaCoins, FaHandshake, FaChartLine,
    FaChartArea, FaBullhorn, FaList, FaLocationArrow, FaCheckCircle
} from 'react-icons/fa';

export interface ServiceSection {
    title?: string;
    content?: string | string[]; // String or array of paragraphs
    image?: string;
    imagePosition?: 'left' | 'right';
    list?: string[];
    type?: 'standard' | 'cta'; // CTA for the blue/chart sections
}

export interface ServiceFeature {
    title: string;
    icon: any;
    description?: string;
}

export interface Service {
    slug: string;
    title: string; // Navigation Menu Title
    bannerTitle: string;
    description: string;
    sections: ServiceSection[];
    features?: ServiceFeature[];
    featuresTitle?: string;
    featuresDescription?: string;
    showFeaturesTop?: boolean; // Some pages show features before intro
}

export const servicesList: Service[] = [
    {
        title: "Eligibility Verification",
        slug: "eligibility-verification",
        bannerTitle: "Eligibility Verification",
        description: "Comprehensive patient eligibility verification services.",
        sections: [
            {
                title: "Eligibility Verification",
                content: [
                    "Physicians need to verify each patient’s eligibility and benefits to ensure they will receive payment for services rendered. We offer comprehensive patient eligibility verification services to help healthcare providers check coverage prior to the office visit. Our focus is on preventing denials and avoiding delays in payment, which will boost revenue at the time of service, save time on the back end, and also enhance patient satisfaction.",
                    "Our health insurance eligibility verification specialists will confirm the following patient benefits on each date of service:",
                    "• Coverage Verification– whether the patient has valid coverage or not",
                    "• Demographic data – Patient Name & DOB is same as Payer",
                    "• Benefit options – patient responsibility for co-pays and coinsurance",
                    "• Plan Type – Verify patient plan type to avoid future denial",
                    "• Prior authorization requirements – confirming authorization for treatment from appropriate sources, if applicable"
                ],

                image: "/img/eligibility-verification.jpg",
                imagePosition: "left"
            }
        ],
        featuresTitle: "Insurance Eligibility",
        features: [
            { title: "Schedule", icon: FaChartArea },
            { title: "Ascertain Coverage", icon: FaBullhorn },
            { title: "Obtain Prior Authorization", icon: FaList },
            { title: "Identify Policy Exclusion", icon: FaLocationArrow },
        ],
        showFeaturesTop: false
    },
    {
        title: "Medical Billing",
        slug: "medical-billing",
        bannerTitle: "Advanced & Efficient Medical Billing Services",
        description: "Error-free charge entry and real-time insurance verification.",
        showFeaturesTop: true,
        featuresTitle: "Key Features of Medical Billing Services",
        featuresDescription: "SBN Healthcare Medical billing and coding services can do a lot to help you run your medical practice efficiently while growing your practice. Our free medical billing software enables you to manage all the patients’ data, improve your practice profitability, increase the number of patients, increase collection rates and reduce denied claims.",
        features: [
            { title: "Error-Free Charge Entry", icon: FaChartPie, description: "We provide detailed error-free charge entry to ensure first-time approved claim submission. We take the demographics and charge info for each patient from you. Our billers enter the charges daily for the claim processing." },
            { title: "Real-Time Insurance Verification", icon: FaFileInvoice, description: "We confirm every patients’ insurance eligibility to streamline your process, shorten account receivable days, and avoid denials." },
            { title: "Claim Submission and Scrubbing", icon: FaCoins, description: "Our billing experts and scrubbing process make sure clean claims are submitted. If there are any rejections, after corrections, re-submission is done the same day." },
            { title: "Payment Posting", icon: FaHandshake, description: "ERAs and EOBs are verified and posted on time. The remaining balances are posted to the patient's account. We verify to make sure appropriate payment is made on each claim." },
            { title: "Patient Statements", icon: FaChartLine, description: "After confirmed appropriate payment from all payers, if the remaining balance is owed by a patient, a detailed statement is generated to send to the patient showing the due balance." },
            { title: "Follow-Up & Appeals", icon: FaHandshake, description: "In case of a denial, our A/R specialists work on the cause of denial to resolve the problem and process the due payment." },
        ],
        sections: [
            {
                title: "The Best Medical Billing Services",
                content: [
                    "SBN Healthcare Solution simplifies your billing, eradicates administrative burdens, boosts your revenue, and modernizes each and every piece of your practice management. Our dedication towards efficient billing can be seen in the shape of more income and profit margins for your practice.",
                    "We understand your practice needs and give you the best possible ROI by focusing on Key areas of the billing and revenue cycle to get rid of the revenue leaks once and for all leaving you to focus more on delivering quality care to patients."
                ],
                image: "/img/medical-billing.jpg",
                imagePosition: "left"
            },
            {
                title: "Right Medical Billing to Double Grow Your Revenue",
                content: "We assist you in managing your billing services to let you focus on patient-centered care while managing, retaining, and attracting new customers.",
                type: "cta"
            }
        ]
    },
    {
        title: "Medical Coding",
        slug: "medical-coding",
        bannerTitle: "Enjoy Greater Convenience with Integrated Coding Services",
        description: "Save valuable time and get paid faster by sending clean insurance claims the first time.",
        sections: [
            {
                title: "Optimize Revenue Cycle with State-of-the-Art Medical Coding",
                content: [
                    "Get medical coding done right the first time and improve your practice’s revenue cycle management for faster reimbursement and higher collection rates.",
                    "SBN Healthcare Solution reliable coding services offers a comprehensive suite of tools for simple and intuitive medical coding."
                ],
                image: "/img/medical-coding1.jpg",
                imagePosition: "left"
            },
            {
                title: "Experienced Team of Coders",
                content: [
                    "We thoroughly review all claims prior to submission and quickly make all the necessary edits before submitting the claims for payment.",
                    "Our team of dedicated coders help speed up process to get claims out to payers quickly, significantly reducing the time for payment."
                ],
                image: "/img/medical-coding2.jpg",
                imagePosition: "right"
            },
            {
                title: "Discover How Timely Reimbursements are Possible With Accurate Coding",
                content: "",
                type: "cta"
            },
            {
                title: "Medical Coding Audit",
                content: [
                    "We provide the right Evaluation and Management (E&M) levels for your practice management to ensure accurate reimbursement for your services.",
                    "Our team of professional coders assign updated CPT, ICD-10, HCPCS codes and NCCI edits to minimize the error rate and ensure a less stressful audit process.",
                    "Here’s what SBN Healthcare Solution coding and auditing services can do for you:"
                ],
                list: [
                    "Ensure ICD-10 compliance and follow HIPAA guidelines",
                    "Reduce any and all Discharged, not final billed (DNFB) cases.",
                    "Significantly minimize Accounts Receivable (A/R) backlogs",
                    "Help improve patient engagement by allowing healthcare providers to focus on patient care.",
                    "Improve provider documentation and enhance data reporting."
                ],
                image: "/img/medical-coding3.jpg",
                imagePosition: "left"
            },
            {
                title: "ICD and CPT Coding",
                content: [
                    "Our certified professional coders are here to support your revenue cycle and provide the highest standards of coding accuracy and compliance.",
                    "SBN Healthcare Solution Medical Coding Team is proficient in CPT, ICD-10, HCPCS codes and NCCI edits and assign the most accurate codes for services provided."
                ],
                image: "/img/medical-coding4.jpg",
                imagePosition: "right"
            }
        ],
        featuresTitle: "Why Choose Us",
        features: [
            { title: "Customer Service", icon: FaChartPie, description: "Our customer service team is always happy to assist at any time." },
            { title: "Security", icon: FaFileInvoice, description: "We provide a tight security system to keep all your information safe." },
            { title: "Support", icon: FaCoins, description: "The support we provide covers all aspects of the process." },
        ]
    },
    {
        title: "AR Follow-up & Denial Management",
        slug: "ar-follow-up-and-denial-management",
        bannerTitle: "AR Follow-up & Denial Management",
        description: "Account Receivable Follow-up Services",
        sections: [
            {
                title: "Account Receivable Follow-up Services",
                content: [
                    "TODAY, MANY MEDICAL DOCTORS FIND THEIR MEDICAL PRACTICE GROWING IN THEIR MONTHLY EXPENSES BUT ARE NOT ATTAINING THE SAME PROGRESS IN THEIR REOCCURRING CASH FLOW. UNLESS EXACT AND REGULAR ACTIVE ACCOUNTS RECEIVABLE FOLLOW-UP ON THE CURRENT BILLINGS IS STARTED, IT IS COMMON TO FIND A PROVIDER WITH EXCESSIVE AMOUNTS IN MEDICAL A/R THAT ARE GREATER THAN 90 -180 DAYS OUTSTANDING.",
                    "USUALLY THE VOLUME OF UNPAID CLAIMS AND THE TIME IT TAKES TO RESEARCH, CORRECT, APPEAL, AND RE-FILE THE CLAIMS WILL TAKE MUCH LONGER THAN ESTIMATED. THE LIMITED NUMBER OF STAFF DEDICATED TO THIS TASK WILL NOT BE ABLE TO ACCOMPLISH THE GOAL, WHICH IS TO EXTENSIVELY REDUCE/ELIMINATE THE OUTSTANDING A/R AND COLLECT AS MUCH MONEY AS POSSIBLE IN A SHORT PERIOD OF TIME."
                ],
                image: "/img/ar-follow-up-denial-management1.jpg",
                imagePosition: "left"
            },
            {
                title: "What We Can Do For You?",
                content: [
                    "Our experts can help your organization to keep track of all the pending claims, investigate denials, follow-up on collections, track balances, and pursue any other due payments. Our services will help you reduce the number of AR days and improve your healthcare organization’s cash flow.",
                    "Our dedicated AR Followup team is responsible for studying and analyzing denied claims as well as unfinished payments. Even more, in case any claim is found to bear any coding error. The team corrects this particular error and then resubmits the claim."
                ],
                image: "/img/ar-follow-up-denial-management2.jpg",
                imagePosition: "right"
            },
            {
                title: "Process We Follow",
                list: [
                    "1.) Document Verification",
                    "2.) Review CPT & ICD Code",
                    "3.) Address Rejection",
                    "4.) Verify Correct Denial Reason",
                    "5.) Take Appropriate Action to resolve the Denial",
                    "6.) Call Payer for Followup",
                    "7.) Send Appeal or Reconsideration if Required"
                ],
                image: "/img/ar-follow-up-denial-management3.jpg",
                imagePosition: "left"
            },
            {
                title: "Benefits of Choosing Us",
                list: [
                    "1.) Affordable AR Follow-up Service",
                    "3.) Better Productivity",
                    "4.) Skilled Professionals Team",
                    "5.) Expedite Claim Payment in Turn around time",
                    "6.) Increase in AR Collection",
                    "7.) Decrease Denial & Rejections",
                    "8.) Autmative mechanism for Denial Management"
                ],
                image: "/img/Denial-Management.png",
                imagePosition: "right"
            }
        ]
    },
    {
        title: "Credentialing & Contracting",
        slug: "credentialing-and-contracting",
        bannerTitle: "Credentialing & Contracting",
        description: "Credentialing and contracting services.",
        sections: [
            {
                title: "Credentialing & Contracting",
                content: "Credentialing and contracting are the basis of starting a clinic or healthcare facility. They also lay the root for your relationships with insurance companies as well as patients. For physician and organization reimbursement, it’s critically to have a designated, well-managed credentialing and re-credentialing service. And that is what you get with our team.",
                image: "/img/intro-img.jpg",
                imagePosition: "left"
            },
            {
                title: "New Payer Credentialing & Credentialing Maintenance",
                list: [
                    "Apply for all designated payers and follow-up until a determination by the payer",
                    "Update and maintain CAQH database",
                    "Update and maintain NPI database",
                    "Apply for re-credentialing when due by each payer",
                    "Medical License/DEA Registration/expirations",
                    "Change from one practice to another",
                    "Add a new physician to your existing group",
                    "Want to become a network provider"
                ],
                image: "/img/service2.jpg",
                imagePosition: "right"
            },
            {
                title: "Documents Required",
                list: [
                    "All state medical licenses",
                    "Drug Enforcement Agency Certificate",
                    "State Board of Pharmacy/Controlled Substance Certification (if applicable)",
                    "All educational diplomas",
                    "Board Certificate or Letter of Acceptance",
                    "Current Curriculum Vitae",
                    "Any other documentation required by the payer",
                    "Hospital Affiliations Letter",
                    "Bank information and voided check"
                ]
            }
        ],
        featuresTitle: "Provider Enrollment and Credentialing",
        features: [
            { title: "Documentation", icon: FaChartPie, description: "Collect documentation and validate, Catalog and Store." },
            { title: "Payer Submission", icon: FaFileInvoice, description: "Identify top payers and file the application in payer-specific format." },
            { title: "Ensure Enrollment", icon: FaCoins, description: "Timely follow-up of application and obtain the enrollment." },
            { title: "Updates / Re-credentialing", icon: FaHandshake, description: "Periodic updates of the payer documents for recredenialing." }
        ]
    },
    {
        title: "Credit Balance Resolution",
        slug: "credit-balance-resolution",
        bannerTitle: "Credit Balance Resolution",
        description: "Services that clean the credit balance backlog.",
        sections: [
            {
                title: "Credit Balance Resolution",
                content: [
                    "SBN Healthcare Solution provides a wide range of services that clean the credit balance backlog from the aging report so that it reflects the exact profit of the practice. We are specialized in enhancing financial performance by efficiently managing the revenue cycle services.",
                    "Overpayment balances are a part of everyday life in a physician’s practice or hospital. Smaller credits might not affect the reports in any manner, but if not resolved lately, credit balance accounts affect the profitability of the practice and lead to misleading the reports.",
                    "Generally, credit balance arises due to incorrect adjustments, Incorrect Billing Correction, and improper use of transection codes, duplicate payment posting, or overpayments from carriers. Failure to address credit balance accounts in a timely manner results in the accumulation of huge credit balances and compliance risks if accounts are audited."
                ],
                image: "/img/credit-balance-resolution.jpg",
                imagePosition: "left"
            },
            {
                title: "What we can do for you?",
                list: [
                    "Analyze Charge and payment posting distribution during payment posting",
                    "Review Accounts for correct patient Liability & Adjustment",
                    "Review for duplicate posting & overpayment",
                    "Rectify posting & adjustment Errors",
                    "Process refund or takeback if true Credit Balance found"
                ],
                content: "Researching and rectifying all the overpayment account is very crucial work for a practice or individual because it required time and expertise which effect the daily work of internal staff and also increase the overhead. On the other hand, our team of highly dedicated professionals will research accounts with credit status, research the reason behind credit balance and take appropriate action to resolve it."
            }
        ]
    }
];
