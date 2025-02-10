// "use client"

// import { motion } from "framer-motion"

// const skills = [
//   { name: "React", icon: "⚛️" },
//   { name: "Node.js", icon: "🟢" },
//   { name: "JavaScript", icon: "🟨" },
//   { name: "Python", icon: "🐍" },
//   { name: "CSS", icon: "🎨" },
//   { name: "Git", icon: "🔀" },
// ]

// export default function Skills() {
//   return (
//     <section id="skills" className="py-20 bg-gradient-to-r from-purple-500 to-pink-500">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl font-bold mb-8 text-center text-white">My Skills</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               className="bg-white rounded-lg p-6 shadow-lg text-center"
//               whileHover={{ scale: 1.05, rotate: 5 }}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <div className="text-4xl mb-2">{skill.icon}</div>
//               <h3 className="text-xl font-semibold">{skill.name}</h3>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

