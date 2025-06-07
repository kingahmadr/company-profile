// pages/services/cicd-pipeline-consultation
import React from 'react';
import Head from 'next/head';
import { NavigationOnPage } from '@/components/navigationOnPage';

export default function CICDPipelineConsultation() {
  return (
    <>
      <NavigationOnPage />
      <Head>
        <title>CI/CD Pipeline Consultation | Techflow</title>
        <meta name="description" content="Automate your software delivery process with CI/CD best practices. Improve testing, deployment, and performance monitoring." />
      </Head>

      <main className="bg-gray-50 text-[#020202] px-6 py-16 md:px-24 font-sans">
        <section className="max-w-5xl mx-auto space-y-20">
          <header className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-[#2522cc]">CI/CD Pipeline Consultation</h1>
            <p className="text-[#070707] text-lg">Streamline your software delivery with automation, testing, and monitoring solutions.</p>
          </header>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2522cc]">Why CI/CD Matters</h2>
            <p className="text-[#070707]">
              In today’s fast-paced development environment, continuous integration and deployment (CI/CD) ensures faster delivery, fewer bugs, and more productive teams. 
              Say goodbye to manual deployments and hello to confidence in every release.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2522cc]">What We Offer</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#070707]">
              <li>
                <strong className="text-slate-700">Automated Testing</strong>: Unit, integration, and end-to-end testing setups to catch bugs early.
              </li>
              <li>
                <strong className="text-slate-700">Deployment Automation</strong>: Push updates to production with minimal human input.
              </li>
              <li>
                <strong className="text-slate-700">Code Quality Gates</strong>: Enforce code standards and prevent regressions.
              </li>
              <li>
                <strong className="text-slate-700">Performance Monitoring</strong>: Ensure app health and performance with real-time tracking.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2522cc]">Our Process</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[#070707]">
               <li>Project & Workflow Audit</li>
              <li>Pipeline Design & Tool Selection</li>
              <li>CI/CD Setup & Integration</li>
              <li>Automated Testing & Quality Gates</li>
              <li>Training, Documentation, and Handover</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2522cc]">Tools & Technologies</h2>
            <p className="text-[#070707]">We integrate with your existing stack using the best tools available:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#070707]">
              <li>GitHub Actions, GitLab CI/CD, CircleCI</li>
              <li>Docker, Kubernetes, Helm</li>
              <li>Jest, Cypress, Playwright</li>
              <li>SonarQube, Sentry, Prometheus, Grafana</li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-[#00FFFF] to-[#7F00FF] p-8 rounded-xl text-black text-center">
            <h2 className="text-2xl font-bold mb-2">Ready to automate your development workflow?</h2>
            <p className="mb-4">Let us design a CI/CD pipeline tailored to your team’s needs.</p>
            <a href="/" className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">Schedule a Free Consultation</a>
          </section>
        </section>
      </main>
    </>
  );
}