import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              TechFlow
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming ideas into powerful digital experiences with cutting-edge technology and innovative
              solutions.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Mail, href: "#" },
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Landing Pages
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  App Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Infrastructure
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  CI/CD Pipeline
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  AI Integration
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Team
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li> */}
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 TechFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
