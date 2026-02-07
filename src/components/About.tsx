import React from "react";
import { User, Award, Calendar, MapPin, Download } from "lucide-react";
import profilePic from "../assets/68426982.jpeg";

const About = () => {
  // Skills updated based on Resume [cite: 45, 48, 50, 51]
  const skills = [
    { name: "Python, SQL, Bash", level: 95 },
    { name: "AWS, Azure, GCP", level: 90 },
    { name: "Docker, Kubernetes, Helm", level: 88 },
    { name: "Teradata, Snowflake, RDBMS", level: 85 },
    { name: "CI/CD (Jenkins, GitLab, Azure DevOps)", level: 85 },
    { name: "IaC (Terraform, Ansible)", level: 80 },
    { name: "Monitoring (Prometheus, Grafana, ELK)", level: 82 },
  ];

  const handleResumeDownload = () => {
    window.location.href =
      "https://drive.google.com/uc?export=download&id=1xwyksbEQJg608OoBBCyLW7wF9BZ6PDxT";
  };

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Passionate Data Engineer with a love for creating innovative data
            solutions and robust infrastructure.
          </p>
        </div>

        {/* Profile Image Centered */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl border-4 border-gray-600 overflow-hidden shadow-2xl">
              <img
                src={profilePic}
                alt="Praneet Kandregula"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Cards: My Story & Skills side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* My Story Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-700/50">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                <User className="text-white" size={20} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                My Story
              </h3>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
              I am a Data Engineer with over 4+ years of experience in the IT
              industry, specializing in data engineering, cloud platforms, and
              analytics infrastructure. I have strong expertise in building
              reliable, scalable data pipelines and managing cloud-based
              platforms across AWS, GCP, and Azure.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
              My background includes proficient use of Python and SQL for data
              automation, as well as orchestrating containerized workloads using
              Docker and Kubernetes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
              <div className="flex items-center text-gray-400">
                <MapPin
                  size={14}
                  className="mr-2 text-purple-400 flex-shrink-0"
                />
                <span className="text-xs sm:text-sm">Dallas, Texas</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Calendar
                  size={14}
                  className="mr-2 text-purple-400 flex-shrink-0"
                />
                <span className="text-xs sm:text-sm">4+ Years Experience</span>
              </div>
              <div className="flex items-center text-gray-400 sm:col-span-2">
                <Award
                  size={14}
                  className="mr-2 text-purple-400 flex-shrink-0"
                />
                <span className="text-xs sm:text-sm">
                  Master's in IT & Management
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleResumeDownload}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300 flex items-center justify-center group"
              >
                <Download
                  size={18}
                  className="mr-2 group-hover:animate-bounce"
                />
                Download Resume
              </button>
            </div>
          </div>

          {/* Skills & Expertise Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-700/50">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
              Skills & Expertise
            </h3>

            <div className="space-y-4 sm:space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium text-sm sm:text-base">
                      {skill.name}
                    </span>
                    <span className="text-purple-400 font-semibold text-sm sm:text-base">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
