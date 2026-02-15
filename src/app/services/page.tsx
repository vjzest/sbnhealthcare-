
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { servicesList } from '@/data/services';
import { FaArrowRight } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Our Services - SBN Healthcare Solution',
    description: 'Comprehensive medical billing and coding services.',
};

export default function Services() {
    return (
        <div className="container section">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--dark-color)' }}>Our Services</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-light)' }}>Comprehensive solutions for your practice</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                {servicesList.map((service) => (
                    <div key={service.slug} style={{
                        padding: '30px',
                        borderRadius: '10px',
                        backgroundColor: 'var(--bg-light)',
                        border: '1px solid #eee',
                        transition: 'transform 0.3s ease'
                    }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--primary-color)' }}>{service.title}</h2>
                        <p style={{ marginBottom: '20px', color: 'var(--text-color)' }}>{service.description}</p>
                        <Link href={`/services/${service.slug}`} style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            color: 'var(--secondary-color)',
                            fontWeight: '600',
                            gap: '5px'
                        }}>
                            Learn More <FaArrowRight />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
