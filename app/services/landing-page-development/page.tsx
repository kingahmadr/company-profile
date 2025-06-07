// pages/services/landing-page-development
import React from 'react';
import Head from 'next/head';
import { NavigationOnPage } from '@/components/navigationOnPage';

export default function LandingPageDevelopment() {
  return (
    <>
      <NavigationOnPage />
      <Head>
        <title>Landing Page Development | Techflow</title>
        <meta name="description" content="Build high-performing landing pages that are responsive, SEO-friendly, and conversion-optimized." />
      </Head>

      <main className="bg-gray-50 text-[#020202] px-6 py-16 md:px-24 font-sans">
        <section className="max-w-5xl mx-auto space-y-20">
          <header className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-[#2522cc]">Landing Page Development</h1>
            <p className="text-[#070707] text-lg">Design that captivates. Speed that converts.</p>
          </header>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2522cc]">Why Your Business Needs a Great Landing Page</h2>
            <p className="text-[#070707]">
              A well-crafted landing page is your best salesperson. It grabs attention, communicates value, and leads users to take action.
              Without a responsive, SEO-optimized, and fast-loading page, you risk losing potential customers within seconds.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2522cc]">What We Offer</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#070707]">
              <li>
                <strong className="text-slate-700">Responsive Design</strong>: Ensures your landing page looks flawless on all devices — desktop, tablet, and mobile.
              </li>
              <li>
                <strong className="text-slate-700">SEO Optimized</strong>: Improve visibility and drive organic traffic with structured metadata, keywords, and best practices.
              </li>
              <li>
                <strong className="text-slate-700">Fast Loading</strong>: Enhance user retention with performance-optimized pages using modern frameworks like Next.js and Vercel.
              </li>
              <li>
                <strong className="text-slate-700">Analytics Integration</strong>: Track user behavior and conversion metrics via Google Analytics, Hotjar, and Facebook Pixel.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2522cc]">Our Process</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[#070707]">
              <li>Requirement Discovery & Goal Setting</li>
              <li>Wireframing & Visual Mockups</li>
              <li>Development & Performance Optimization</li>
              <li>SEO & Analytics Setup</li>
              <li>Launch & Ongoing Support</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2522cc]">Tools & Technologies</h2>
            <p className="text-[#070707]">We use cutting-edge tools and frameworks to deliver best-in-class results:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#070707]">
              <li>Next.js, React, Tailwind CSS</li>
              <li>Vercel, Netlify, GitHub</li>
              <li>Google Analytics, Meta Pixel, Hotjar</li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-[#00FFFF] to-[#7F00FF] p-8 rounded-xl text-black text-center">
            <h2 className="text-2xl font-bold mb-2">Ready to build a landing page that performs?</h2>
            <p className="mb-4">Let’s collaborate and take your product or service to the next level.</p>
            <a href="/" className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">Schedule a Free Consultation</a>
          </section>
        </section>
      </main>
    </>
  );
}