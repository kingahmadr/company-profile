"use client"

import { useState } from "react"
import { Globe, Smartphone, Server, GitBranch, Brain, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Globe,
    title: "Landing Page Development",
    description: "Create stunning, conversion-optimized landing pages that capture attention and drive results.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Analytics Integration"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Software Apps Creation",
    description: "Build powerful web and mobile applications tailored to your business needs.",
    features: ["Cross-Platform", "Scalable Architecture", "User-Centric Design", "API Integration"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Server,
    title: "Server & Infrastructure",
    description: "Robust server solutions and cloud infrastructure for optimal performance and reliability.",
    features: ["Cloud Migration", "Load Balancing", "Security Hardening", "24/7 Monitoring"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipeline Consultation",
    description: "Streamline your development workflow with automated testing and deployment pipelines.",
    features: ["Automated Testing", "Deployment Automation", "Code Quality Gates", "Performance Monitoring"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Leverage artificial intelligence to enhance your applications with smart features.",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    color: "from-indigo-500 to-purple-500",
  },
]

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to accelerate your business growth and technological advancement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  hoveredIndex === index ? "scale-105" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
