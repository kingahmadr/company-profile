// pages/services/ai-integration
import React from 'react';
import Head from 'next/head';
import { NavigationOnPage } from '@/components/navigationOnPage';

export default function SoftwareAppsCreation() {
  return (
    <>
      <NavigationOnPage />
      <Head>
        <title>Software Apps Creation | Techflow</title>
        <meta name="description" content="Build powerful web applications tailored to your business needs with cross-platform technology and scalable design." />
      </Head>

      <main className="bg-gray-50 text-[#020202] px-6 py-16 md:px-24 font-sans">
        <section className="max-w-5xl mx-auto space-y-20">
          <header className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-[#2522cc]">Software Apps Creation</h1>
            <p className="text-[#070707] text-lg">Build powerful web applications tailored to your business needs.</p>
          </header>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2522cc]">Why Custom Software Matters</h2>
            <p className="text-[#070707]">
              Off-the-shelf software often falls short in meeting your specific needs.
              Custom web and mobile apps give you full control over features, performance, and user experience — delivering real value to your users and business.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2522cc]">What We Offer</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#070707]">
              <li>
                <strong className="text-slate-700">Cross-Platform</strong>: Build once and deploy to web using technologies like React, NextJS, FastAPI and others.
              </li>
              <li>
                <strong className="text-slate-700">Scalable Architecture</strong>: Ensure your app grows with your business, using clean code principles and modern frameworks.
              </li>
              <li>
                <strong className="text-slate-700">User-Centric Design</strong>: Craft experiences based on UX best practices and real customer feedback.
              </li>
              <li>
                <strong className="text-slate-700">API Integration</strong>: Connect to any service — from payment gateways to third-party data — with secure and efficient APIs.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2522cc]">Our Process</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[#070707]">
              <li>Discovery & Requirements Gathering</li>
              <li>Wireframing & UX/UI Design</li>
              <li>Development & Iterative Testing</li>
              <li>API Integrations & Performance Optimization</li>
              <li>Launch, Maintenance & Feature Scaling</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2522cc]">Technologies We Use</h2>
            <p className="text-[#070707]">We build modern, high-performing apps using the best tools available:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#070707]">
              <li>React, Vue</li>
              <li>Next.js, Node.js, Express</li>
              <li>Firebase, Supabase, PostgreSQL, MongoDB</li>
              <li>RESTful APIs, OAuth</li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-[#00FFFF] to-[#7F00FF] p-8 rounded-xl text-black text-center">
            <h2 className="text-2xl font-bold mb-2">Ready to launch your custom web or mobile app?</h2>
            <p className="mb-4">Let’s turn your ideas into functional, scalable, and stunning applications.</p>
            <a href="/" className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">Schedule a Free Consultation</a>
          </section>
        </section>
      </main>
    </>
  );
}