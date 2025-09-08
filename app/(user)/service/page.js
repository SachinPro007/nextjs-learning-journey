export default function Service() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">Our Services</h1>
          <p className="text-xl text-purple-600 max-w-3xl mx-auto">
            Comprehensive solutions to help your business thrive in the digital world
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Service 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Web Development</h3>
            <p className="text-gray-600 mb-4">
              Custom web applications built with modern technologies like React, Next.js, and Node.js for optimal performance and scalability.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Responsive Design
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                E-commerce Solutions
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                API Integration
              </li>
            </ul>
            <button className="text-purple-600 font-medium hover:text-purple-800 transition duration-300">
              Learn more →
            </button>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">UI/UX Design</h3>
            <p className="text-gray-600 mb-4">
              User-centered design solutions that create intuitive, engaging experiences that delight users and drive conversions.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                User Research
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Wireframing & Prototyping
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Design Systems
              </li>
            </ul>
            <button className="text-blue-600 font-medium hover:text-blue-800 transition duration-300">
              Learn more →
            </button>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">SEO Optimization</h3>
            <p className="text-gray-600 mb-4">
              Improve your search engine visibility and drive organic traffic with our comprehensive SEO strategies and techniques.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Keyword Research
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                On-Page Optimization
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Performance Tracking
              </li>
            </ul>
            <button className="text-green-600 font-medium hover:text-green-800 transition duration-300">
              Learn more →
            </button>
          </div>

          {/* Service 4 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Digital Marketing</h3>
            <p className="text-gray-600 mb-4">
              Data-driven marketing strategies that increase brand awareness, generate leads, and drive revenue growth.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                Social Media Marketing
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                Email Campaigns
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                Analytics & Reporting
              </li>
            </ul>
            <button className="text-yellow-600 font-medium hover:text-yellow-800 transition duration-300">
              Learn more →
            </button>
          </div>

          {/* Service 5 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Content Creation</h3>
            <p className="text-gray-600 mb-4">
              Engaging content that tells your brand story, connects with your audience, and establishes your industry authority.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Blog Writing
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Video Production
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Graphic Design
              </li>
            </ul>
            <button className="text-red-600 font-medium hover:text-red-800 transition duration-300">
              Learn more →
            </button>
          </div>

          {/* Service 6 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-8 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Cloud Solutions</h3>
            <p className="text-gray-600 mb-4">
              Secure, scalable cloud infrastructure and services that enable your business to grow without technical limitations.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                Cloud Migration
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                Server Management
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                Data Security
              </li>
            </ul>
            <button className="text-indigo-600 font-medium hover:text-indigo-800 transition duration-300">
              Learn more →
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how our services can help your business achieve its goals and reach new heights.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">
              Request a Quote
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-purple-600 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}