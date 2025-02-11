"use client"

import { motion } from "framer-motion"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold text-neon-green">Zubair Ahmed</h3>
            <p className="mt-2 text-gray-300">Full Stack Developer</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
            <motion.div className="flex justify-center space-x-6">
              {[
                { Icon: FaTwitter, url: "#", color: "text-neon-blue" },
                { Icon: FaLinkedin, url: "https://www.linkedin.com/feed/", color: "text-neon-blue" },
                { Icon: FaGithub, url: "https://github.com/codewithzubi", color: "text-neon-pink" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className={`text-3xl ${social.color} hover:text-white transition-colors`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.Icon />
                </motion.a>
              ))}
            </motion.div>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <p className="text-neon-yellow">&copy; 2025 Zubair Ahmed. All rights reserved.</p>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <motion.button
          className="px-6 py-2 bg-gradient-to-r from-neon-pink to-neon-blue text-white rounded-full font-semibold"
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 0, 255, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.button>
      </div>
    </footer>
  )
}

