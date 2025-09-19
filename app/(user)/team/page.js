"use client"

import Image from "next/image";
import { easeInOut, motion } from "motion/react"

function Team() {
  const team = [
    {
      fullName: "Sachin Sehrawat",
      role: "CEO & Founder",
      image: "/Sachin.png",
      discription: "Visionary leader with 10+ years of experience in tech industry and business development.",
      baseColor: "blue",
      secondColor: "indigo",
    },
    {
      fullName: "Rahul Rawat",
      role: "Lead Developer",
      image: "/1.jpg",
      discription: "Full-stack developer specializing in React, Node.js, and cloud architecture.",
      baseColor: "purple",
      secondColor: "pink",
    },
    {
      fullName: "Payal Rajput",
      role: "UI/UX Designer",
      image: "/2.jpg",
      discription: "Creative designer focused on creating intuitive and beautiful user experiences.",
      baseColor: "green",
      secondColor: "teal",
    },
    {
      fullName: "Surash Rathor",
      role: "Project Manager",
      image: "/3.jpg",
      discription: "Organized and detail-oriented professional ensuring projects are delivered on time.",
      baseColor: "yellow",
      secondColor: "orange",
    },
    {
      fullName: "Piyush Sharma",
      role: "Frontend Developer",
      image: "/4.jpg",
      discription: "Specializes in React, Vue.js, and creating responsive and accessible web applications.",
      baseColor: "red",
      secondColor: "pink",
    },
    {
      fullName: "Sonu Kumar",
      role: "Backend Developer",
      image: "/5.jpg",
      discription: "Expert in server-side development, database design, and API architecture.",
      baseColor: "indigo",
      secondColor: "blue",
    },
  ]
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

          {/* Team Members */}
          {team.map((member, i) => (
            <motion.div 
             initial={{opacity: 0, y: 40}}
             animate={{opacity: 1, y: 0}}
             transition={{duration: 0.2, ease: easeInOut, delay: `0.${i}`}}
             whileTap={{scale: 0.9}}
            //  whileHover={{scale: 1}}
             
             key={i} className="bg-white rounded-xl shadow-lg overflow-hidden ">
              <div className={`h-48 bg-gradient-to-r from-${member.baseColor}-400 to-${member.secondColor}-500 flex items-center justify-center`}>
                <motion.div whileHover={{rotate: 360}} transition={{duration: 0.5, ease: easeInOut}}  className="relative w-32 h-32 bg-white rounded-full flex items-center justify-center border-2 border-white">
                  <Image src={member.image} alt={member.fullName} className="w-full h-full rounded-full" fill={true} />
                </motion.div>
              </div>
              <div className="p-6 text-center">
                <motion.h3 initial={{y: 40}} animate={{y: 0}} transition={{duration: 0.2, delay: `0.${i + 1}`}} className="text-2xl font-semibold text-gray-800">{member.fullName}</motion.h3>
                <p className={`text-${member.baseColor}-600 font-medium mb-4`}>{member.role}</p>
                <motion.p initial={{ x: 40}} animate={{ x:0}} transition={{duration: 0.2, delay: `0.${i + 2}`}} className="text-gray-600 mb-4">
                  {member.discription}
                </motion.p>

              </div>
            </motion.div>
          ))}

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