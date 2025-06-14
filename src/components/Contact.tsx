import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 lg:p-12 border border-gray-700/50 shadow-2xl">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Contact Information */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-white" size={24} />
                </div>
                <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Email</h4>
                <a 
                  href="mailto:praneetkandregula123@gmail.com" 
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm sm:text-base break-all"
                >
                  praneetkandregula123@gmail.com
                </a>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="text-white" size={24} />
                </div>
                <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Phone</h4>
                <a 
                  href="tel:+19728018910" 
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm sm:text-base"
                >
                  +1 (972)801-8910
                </a>
              </div>

              <div className="text-center group sm:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-white" size={24} />
                </div>
                <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Location</h4>
                <p className="text-gray-400 text-sm sm:text-base">Dallas, Texas</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="border-t border-gray-700 pt-8">
              <h4 className="text-white font-semibold text-center mb-6 text-lg sm:text-xl">Follow Me</h4>
              <div className="flex justify-center space-x-4 sm:space-x-6">
                <a
                  href="https://github.com/praneetkandregula"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r bg-gray-700  hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <Github size={20} className="text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="https://linkedin.com/in/kandregula-praneet-0902a018a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r bg-gray-700  hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <Linkedin size={20} className="text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r bg-gray-700 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <Twitter size={20} className="text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="mailto:praneetkandregula123@gmail.com"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r bg-gray-700 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <Mail size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;