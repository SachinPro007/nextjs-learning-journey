const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to My Next.js Project</h1>
          <p className="text-xl mb-8">Building modern web applications with cutting-edge technology</p>
          <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-600 text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
              <p className="text-gray-600">Lightning-fast page loads and smooth navigation with Next.js optimization.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-600 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
              <p className="text-gray-600">Looks great on all devices, from mobile phones to desktop computers.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">Intuitive interface and straightforward navigation for all users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About Our Project</h2>
              <p className="text-gray-600 mb-4">
                This is a demo Next.js project created to showcase the capabilities of modern web development. 
                We've built this with a focus on performance, accessibility, and best practices.
              </p>
              <p className="text-gray-600">
                Whether you're a beginner or an experienced developer, this project demonstrates how to structure
                a Next.js application with multiple sections and responsive design.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-blue-600 h-64 rounded-lg flex items-center justify-center text-white text-5xl">
                Project Stats
                <div className="absolute opacity-20 text-8xl">📊</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="text-gray-600 italic mb-4">
                "This Next.js project is amazing! The performance is incredible and the developer has done a fantastic job implementing modern design principles."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">JD</div>
                <div>
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-blue-600">Web Developer</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="text-gray-600 italic mb-4">
                "I've been looking for a good example of a Next.js project with Tailwind CSS, and this is exactly what I needed. Clean code and beautiful design!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">JS</div>
                <div>
                  <h4 className="font-semibold">Jane Smith</h4>
                  <p className="text-blue-600">UI/UX Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;