


import type { Metadata } from 'next';
import { getDynamicMetadata } from '@/utils/seo';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import ProcessFlow from '@/components/home/ProcessFlow';
import WhatWeDo from '@/components/home/WhatWeDo';
import SoftwareExpertise from '@/components/home/SoftwareExpertise';
import Pricing from '@/components/home/Pricing';
import Testimonials from '@/components/home/Testimonials';

export async function generateMetadata(): Promise<Metadata> {
  const dynamic = await getDynamicMetadata('home');
  return {
    title: dynamic?.title || 'SBN Healthcare Solution - Expert in Healthcare Billing Services',
    description: dynamic?.description || 'Improving your financial performance aimed at reducing costs and increasing revenue.',
  };
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ProcessFlow />
      <WhatWeDo />
      <SoftwareExpertise />
      <Pricing />
      <Testimonials />
    </>
  );
}
