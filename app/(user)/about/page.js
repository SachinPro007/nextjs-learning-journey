export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="title-heading text-4xl font-bold text-red-700 mb-4">About Our Company</h1>
          <p className="text-xl text-red-600 max-w-3xl mx-auto">
            Learn more about our mission, values, and the team behind our success.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="md:flex items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At NextJS Demo, our mission is to create innovative web solutions that empower businesses
                and individuals to thrive in the digital age. We believe in the power of technology to
                transform ideas into reality.
              </p>
              <p className="text-gray-600">
                Through cutting-edge development practices and user-centered design, we build applications
                that are not only functional but also delightful to use.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-12 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-32 h-32 text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <div className="text-red-500 text-3xl mb-4">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly explore new technologies and approaches to stay at the forefront of web development.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <div className="text-red-500 text-3xl mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe that the best results come from working together with our clients and team members.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <div className="text-red-500 text-3xl mb-4">
                <i className="fas fa-medal"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering the highest quality solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-red-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-red-600">JD</span>
              </div>
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-red-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-red-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-red-600">JS</span>
              </div>
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-red-600">Lead Developer</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-red-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-red-600">MJ</span>
              </div>
              <h3 className="text-xl font-semibold">Mike Johnson</h3>
              <p className="text-red-600">UI/UX Designer</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-red-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-red-600">SD</span>
              </div>
              <h3 className="text-xl font-semibold">Sarah Davis</h3>
              <p className="text-red-600">Project Manager</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-red-600 rounded-2xl shadow-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-12">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div>Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div>Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div>Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">12</div>
              <div>Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}