
import { FaChartLine, FaCheckCircle, FaClock, FaHandHoldingUsd } from 'react-icons/fa';

export const heroData = {
  headline: "Welcome to SBN Healthcare Solution",
  subheadline: "We Are Expert in Healthcare Billing Services",
  description: "We have more than 11+ years of experience in Medical Billing Services. The major benefit of outsourcing billing with SBN Healthcare Solution is an improvement in your financial performance.",
  ctaText: "Contact Us",
  ctaLink: "/contact-us",
  image: "/img/intro-img.jpg"
};

export const statsData = [
  { value: "20%", label: "Revenue Improved" },
  { value: "40%", label: "Costs Reduced" },
  { value: "50%", label: "Patient Experience Transformed" },
  { value: "11+", label: "Years of Experience" }
];

export const processSteps = [
  {
    title: "Order to Intake",
    description: "Scheduling, Pre-Registration, Clearance, Financial Counseling, Online/In-Person Arrival, Pre-Service Payments"
  },
  {
    title: "Care to Claim",
    description: "Level of Care, Case Management, Utilization Review, Charge Optimization, Coding, Acuity Capture"
  },
  {
    title: "Claim to Payment",
    description: "Billing, Patient Payments, Denials Management, Customer Service, Reconciliation"
  }
];

export const featuresData = [
  {
    icon: FaClock,
    title: "Real Time Filing",
    description: "We ensure that all the charge received from provider should be billed to carrier within 48 hours."
  },
  {
    icon: FaCheckCircle,
    title: "Claim Acceptance",
    description: "We work on claim scrubbing so that all claim should be Accept by Clearing House."
  },
  {
    icon: FaHandHoldingUsd,
    title: "Expedite Payment",
    description: "We ensure that providers receive a payment within 30 days of claim filing. Before claim filing, we double-check that we did the correct coding & Coverage Verification."
  },

];
