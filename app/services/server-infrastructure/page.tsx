// pages/services/server-infrastructure
import React from 'react';
import Head from 'next/head';
import { NavigationOnPage } from '@/components/navigationOnPage';

export default function ServerInfrastructure() {
  return (
    <>
      <NavigationOnPage />
      <Head>
        <title>Server & Infrastructure Service | Techflow</title>
        <meta name="description" content="Robust server solutions and scalable infrastructure services including cloud migration, load balancing, security, and monitoring." />
      </Head>

      <main className="bg-gray-50 text-[#020202] px-6 py-16 md:px-24 font-sans">
        <section className="max-w-5xl mx-auto space-y-20">
          <header className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-[#2522cc]">Server & Infrastructure Service</h1>
            <p className="text-[#070707] text-lg">Empowering your digital ecosystem with robust, secure, and scalable infrastructure.</p>
          </header>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2522cc]">Why Infrastructure Matters</h2>
            <p className="text-[#070707]">
              A strong infrastructure foundation ensures your applications remain online, fast, and secure.
              Downtime and security threats can cost businesses their credibility and customers. Our tailored solutions guarantee maximum uptime, 
              scalability, and resilience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2522cc]">What We Offer</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#070707]">
              <li>
                <strong className="text-slate-700">Cloud Migration</strong>: Migrate to AWS, GCP, or Azure with minimal downtime and zero data loss.
              </li>
              <li>
                <strong className="text-slate-700">Load Balancing</strong>: Distribute traffic across servers for consistent user experience and optimal resource usage.
              </li>
              <li>
                <strong className="text-slate-700">Security Hardening</strong>: Implement firewalls, encryption, access control, and regular audits.
              </li>
              <li>
                <strong className="text-slate-700">24/7 Monitorin</strong>: Real-time performance and incident alerts to proactively maintain uptime.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2522cc]">Our Process</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[#070707]">
              <li>Infrastructure Assessment & Planning </li>
              <li>Cloud Architecture & Setup</li>
              <li>Security Implementation & Testing</li>
              <li>Monitoring & Load Testing</li>
              <li>Handover, Documentation & Support</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2522cc]">Tools & Technologies</h2>
            <p className="text-[#070707]">We utilize industry-leading platforms and tools to ensure optimal results:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#070707]">
              <li>AWS, Google Cloud, Azure</li>
              <li>Nginx, HAProxy, Docker, Kubernetes</li>
              <li>Cloudflare, WAF, SSL, Fail2Ban</li>
              <li>Grafana, Prometheus, ELK Stack</li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-[#00FFFF] to-[#7F00FF] p-8 rounded-xl text-black text-center">
            <h2 className="text-2xl font-bold mb-2">Want scalable, secure infrastructure for your business?</h2>
            <p className="mb-4">Let us design a robust environment that supports your growth and uptime.</p>
            <a href="/" className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">Schedule a Free Consultation</a>
          </section>
        </section>
      </main>
    </>
  );
}