// pages/services/ai-integration
import React from 'react';
import Head from 'next/head';
import { NavigationOnPage } from '@/components/navigationOnPage';

export default function AIIntegration() {
  return (
    <>
      <NavigationOnPage />
      <Head>
        <title>AI Integration | Techflow</title>
        <meta name="description" content="Enhance your applications with AI features like machine learning, NLP, computer vision, and predictive analytics." />
      </Head>

      <main className="bg-gray-50 text-[#020202] px-6 py-16 md:px-24 font-sans">
        <section className="max-w-5xl mx-auto space-y-20">
          <header className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-[#2522cc]">AI Integration</h1>
            <p className="text-[#070707] text-lg">Empower your product with smart, adaptive, and predictive technologies.</p>
          </header>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2522cc]">Why Integrate AI?</h2>
            <p className="text-[#070707]">
              AI is no longer a future concept — it’s here to transform user experiences, automate operations, and unlock new insights.
              From smarter recommendations to real-time language understanding, AI drives innovation in every industry.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2522cc]">What We Offer</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#070707]">
              <li>
                <strong className="text-slate-700">Machine Learning</strong>: Custom model development for predictions, classifications, and recommendations.
              </li>
              <li>
                <strong className="text-slate-700">Natural Language Processing</strong>: Enable your app to understand, analyze, and generate human language.
              </li>
              <li>
                <strong className="text-slate-700">Computer Vision</strong>: Object detection, OCR, facial recognition, and image classification.
              </li>
              <li>
                <strong className="text-slate-700">Predictive Analytics</strong>: Use historical data to forecast trends, customer behavior, or operational efficiency.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2522cc]">Our Process</h2>
            <ol className="list-decimal pl-6 space-y-2 text-[#070707]">
              <li>Identify Opportunities for AI Use</li>
              <li>Data Collection & Preprocessing</li>
              <li>Model Design & Training</li>
              <li>Integration into Application</li>
              <li>Monitoring, Optimization & Iteration</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#2522cc]">Tools & Technologies</h2>
            <p className="text-[#070707]">Our AI solutions are built using the latest tools and platforms:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#070707]">
              <li>Python, TensorFlow, PyTorch</li>
              <li>OpenAI API, Hugging Face Transformers</li>
              <li>Google Cloud AI, AWS SageMaker, Azure ML</li>
              <li>Label Studio, Jupyter Notebooks</li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-[#00FFFF] to-[#7F00FF] p-8 rounded-xl text-black text-center">
            <h2 className="text-2xl font-bold mb-2">Curious about how AI can power your product?</h2>
            <p className="mb-4">Let’s explore use cases and build intelligent features tailored to your needs.</p>
            <a href="/" className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">Schedule a Free Consultation</a>
          </section>
        </section>
      </main>
    </>
  );
}