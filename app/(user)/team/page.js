function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="title-heading text-4xl font-bold text-blue-800 mb-4">Meet Our Team</h1>
          <p className="text-xl text-blue-600 max-w-3xl mx-auto">
            Dedicated professionals committed to delivering exceptional results
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Team Member 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center border-4 border-white">
                <span className="text-4xl font-bold text-blue-700">JD</span>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-blue-600 font-medium mb-4">CEO & Founder</p>
              <p className="text-gray-600 mb-4">
                Visionary leader with 10+ years of experience in tech industry and business development.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <i className="fas fa-envelope text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center border-4 border-white">
                <span className="text-4xl font-bold text-purple-700">JS</span>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-purple-600 font-medium mb-4">Lead Developer</p>
              <p className="text-gray-600 mb-4">
                Full-stack developer specializing in React, Node.js, and cloud architecture.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-purple-500 hover:text-purple-700">
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a href="#" className="text-purple-500 hover:text-purple-700">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-purple-500 hover:text-purple-700">
                  <i className="fas fa-globe text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center border-4 border-white">
                <span className="text-4xl font-bold text-green-700">MJ</span>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800">Mike Johnson</h3>
              <p className="text-green-600 font-medium mb-4">UI/UX Designer</p>
              <p className="text-gray-600 mb-4">
                Creative designer focused on creating intuitive and beautiful user experiences.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-green-500 hover:text-green-700">
                  <i className="fab fa-dribbble text-xl"></i>
                </a>
                <a href="#" className="text-green-500 hover:text-green-700">
                  <i className="fab fa-behance text-xl"></i>
                </a>
                <a href="#" className="text-green-500 hover:text-green-700">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center border-4 border-white">
                <span className="text-4xl font-bold text-orange-700">SD</span>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800">Sarah Davis</h3>
              <p className="text-orange-600 font-medium mb-4">Project Manager</p>
              <p className="text-gray-600 mb-4">
                Organized and detail-oriented professional ensuring projects are delivered on time.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-orange-500 hover:text-orange-700">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="text-orange-500 hover:text-orange-700">
                  <i className="fas fa-envelope text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 5 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gradient-to-r from-red-400 to-pink-500 flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center border-4 border-white">
                <span className="text-4xl font-bold text-red-700">AR</span>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800">Alex Rodriguez</h3>
              <p className="text-red-600 font-medium mb-4">Frontend Developer</p>
              <p className="text-gray-600 mb-4">
                Specializes in React, Vue.js, and creating responsive and accessible web applications.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-red-500 hover:text-red-700">
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a href="#" className="text-red-500 hover:text-red-700">
                  <i className="fab fa-codepen text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 6 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="h-48 bg-gradient-to-r from-indigo-400 to-blue-500 flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center border-4 border-white">
                <span className="text-4xl font-bold text-indigo-700">EW</span>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800">Emily Wilson</h3>
              <p className="text-indigo-600 font-medium mb-4">Backend Developer</p>
              <p className="text-gray-600 mb-4">
                Expert in server-side development, database design, and API architecture.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-indigo-500 hover:text-indigo-700">
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a href="#" className="text-indigo-500 hover:text-indigo-700">
                  <i className="fab fa-dev text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Team By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-700 mb-2">12</div>
              <div className="text-blue-600">Team Members</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-4xl font-bold text-purple-700 mb-2">7</div>
              <div className="text-purple-600">Developers</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-4xl font-bold text-green-700 mb-2">3</div>
              <div className="text-green-600">Designers</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="text-4xl font-bold text-orange-700 mb-2">2</div>
              <div className="text-orange-600">Managers</div>
            </div>
          </div>
        </div>

        {/* Culture Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">Our Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">✓</span>
                Collaborative Environment
              </h3>
              <p className="text-blue-100">
                We believe in the power of teamwork and open communication. Our flat hierarchy ensures every voice is heard.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">✓</span>
                Continuous Learning
              </h3>
              <p className="text-blue-100">
                We encourage professional growth with regular training sessions, conference attendance, and learning resources.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">✓</span>
                Work-Life Balance
              </h3>
              <p className="text-blue-100">
                Flexible working hours and remote work options help our team maintain a healthy balance between work and personal life.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">✓</span>
                Innovation Focus
              </h3>
              <p className="text-blue-100">
                We dedicate time for research and experimentation, allowing our team to explore new technologies and creative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;