// import React, { useState, useEffect } from 'react';
// import { ExternalLink, Github, Star, GitFork, Loader, AlertCircle } from 'lucide-react';

// interface Repository {
//   id: number;
//   name: string;
//   description: string;
//   html_url: string;
//   homepage: string;
//   language: string;
//   stargazers_count: number;
//   forks_count: number;
//   topics: string[];
//   updated_at: string;
// }

// const Projects = () => {
//   const [repos, setRepos] = useState<Repository[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Mock data for demonstration - replace with actual GitHub username
//   const mockRepos: Repository[] = [
//     {
//       id: 1,
//       name: "Text-Extraction-From-Video",
//       description: "An application to extract embedded text from video by OCR",
//       html_url: "https://github.com/praneetkandregula",
//       homepage: "https://github.com/praneetkandregula/Text-Extraction-From-Video",
//       language: "Python",
//       stargazers_count: 24,
//       forks_count: 8,
//       topics: ["Python", "nltk", "numpy", "cv2"],
//       updated_at: "2025-01-15T10:30:00Z"
//     },
//     {
//       id: 2,
//       name: "Zutan-web-app",
//       description: "A database as a service platform that provides a constant endpoint to users for basic CRUD operations to either SQL or NoSQL databases using this platform",
//       html_url: "https://github.com/praneetkandregula",
//       homepage: "https://github.com/praneetkandregula/ZuTan",
//       language: "JavaScript",
//       stargazers_count: 45,
//       forks_count: 12,
//       topics: ["HTML", "Javascript", "css", "serverless","nodejs"],
//       updated_at: "2025-03-10T14:20:00Z"
//     },
//     {
//       id: 3,
//       name: "Segment-based-abnormality-detection",
//       description: "A pipeline for automated segment-wise classification of abnormalities and other important EEG wave-forms is proposed, to make EEG analysis much more efficient.",
//       html_url: "https://github.com/praneetkandregula",
//       homepage: "https://github.com/praneetkandregula/Segment-Based-Abnormality-Detection-EEG-Recordings/tree/main",
//       language: "Python",
//       stargazers_count: 32,
//       forks_count: 15,
//       topics: ["Python", "Machine Learning", "Regression"],
//       updated_at: "2024-02-05T09:15:00Z"
//     },
//     {
//       id: 4,
//       name: "CacheierThanThou",
//       description: "Fast distributed cache, using Raft consensus for leader election",
//       html_url: "https://github.com/praneetkandregula",
//       homepage: "https://github.com/praneetkandregula/CacheierThanThou",
//       language: "Go",
//       stargazers_count: 67,
//       forks_count: 23,
//       topics: ["Go", "Makefile", "Cache mechanisms", "protocol definitions"],
//       updated_at: "2023-12-28T16:45:00Z"
//     },
//     {
//       id: 5,
//       name: "Kafka-microservices-Go",
//       description: "Highly available microservices using Kafka",
//       html_url: "https://github.com/praneetkandregula",
//       homepage: "https://github.com/RaghavRoy145/KafkaGo",
//       language: "Go",
//       stargazers_count: 89,
//       forks_count: 34,
//       topics: ["Go", "Kafka", "microservices"],
//       updated_at: "2024-12-20T11:30:00Z"
//     },
//     {
//       id: 6,
//       name: "chan-TCP-nels",
//       description: "Bi-directional Go channels over TCP",
//       html_url: "https://github.com/praneetkandregula",
//       homepage: "https://github.com/praneetkandregula/chan-TCP-nels",
//       language: "Go",
//       stargazers_count: 41,
//       forks_count: 16,
//       topics: ["Go", "TCP", "Message transmission", "social-media"],
//       updated_at: "2023-12-15T13:20:00Z"
//     }
//   ];

//   useEffect(() => {
//     // Simulate API call
//     const fetchRepos = async () => {
//       try {
//         setLoading(true);
//         // Simulate network delay
//         await new Promise(resolve => setTimeout(resolve, 1500));

//         // In a real implementation, you would fetch from GitHub API:
//         // const response = await fetch('https://api.github.com/users/YOUR_USERNAME/repos?sort=updated&per_page=10');
//         // const data = await response.json();
//         // setRepos(data);

//         setRepos(mockRepos);
//       } catch (err) {
//         setError('Failed to fetch repositories');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRepos();
//   }, []);

//   const getLanguageColor = (language: string) => {
//     const colors: { [key: string]: string } = {
//       JavaScript: 'bg-yellow-500',
//       TypeScript: 'bg-blue-500',
//       Python: 'bg-green-500',
//       Vue: 'bg-emerald-500',
//       React: 'bg-cyan-500',
//       CSS: 'bg-purple-500',
//     };
//     return colors[language] || 'bg-gray-500';
//   };

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric'
//     });
//   };

//   if (loading) {
//     return (
//       <section id="projects\" className="py-12 sm:py-16 lg:py-20 bg-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
//               <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 My Projects
//               </span>
//             </h2>
//             <div className="flex items-center justify-center mt-8 sm:mt-12">
//               <Loader className="animate-spin text-purple-400 mr-3" size={24} />
//               <span className="text-gray-400 text-base sm:text-lg">Loading projects...</span>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
//               <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 My Projects
//               </span>
//             </h2>
//             <div className="flex items-center justify-center mt-8 sm:mt-12">
//               <AlertCircle className="text-red-400 mr-3" size={24} />
//               <span className="text-gray-400 text-base sm:text-lg">{error}</span>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12 sm:mb-16">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//               My Projects
//             </span>
//           </h2>
//           <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
//             A collection of projects I've worked on, showcasing different technologies and approaches
//           </p>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//           {repos.map((repo, index) => (
//             <div
//               key={repo.id}
//               className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 sm:p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 group"
//               style={{
//                 animationDelay: `${index * 100}ms`,
//                 animation: 'fadeInUp 0.6s ease-out forwards'
//               }}
//             >
//               <div className="flex items-start justify-between mb-4">
//                 <div className="flex items-center">
//                   <div className={`w-3 h-3 ${getLanguageColor(repo.language)} rounded-full mr-2`}></div>
//                   <span className="text-gray-400 text-xs sm:text-sm">{repo.language}</span>
//                 </div>
//                 <div className="flex items-center space-x-2 sm:space-x-3">
//                   <div className="flex items-center text-gray-400 text-xs sm:text-sm">
//                     <Star size={12} className="mr-1" />
//                     {repo.stargazers_count}
//                   </div>
//                   <div className="flex items-center text-gray-400 text-xs sm:text-sm">
//                     <GitFork size={12} className="mr-1" />
//                     {repo.forks_count}
//                   </div>
//                 </div>
//               </div>

//               <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-1">
//                 {repo.name}
//               </h3>

//               <p className="text-gray-400 mb-4 leading-relaxed text-sm sm:text-base line-clamp-3">
//                 {repo.description}
//               </p>

//               <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
//                 {repo.topics.slice(0, 3).map((topic, topicIndex) => (
//                   <span
//                     key={topicIndex}
//                     className="px-2 sm:px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium"
//                   >
//                     {topic}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex items-center justify-between pt-4 border-t border-gray-700">
//                 <span className="text-gray-500 text-xs sm:text-sm">
//                   {formatDate(repo.updated_at)}
//                 </span>
//                 <div className="flex space-x-2 sm:space-x-3">
//                   <a
//                     href={repo.html_url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors group"
//                   >
//                     <Github size={16} className="text-gray-400 group-hover:text-white" />
//                   </a>
//                   {repo.homepage && (
//                     <a
//                       href={repo.homepage}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="p-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors group"
//                     >
//                       <ExternalLink size={16} className="text-white" />
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .line-clamp-1 {
//           display: -webkit-box;
//           -webkit-line-clamp: 1;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Projects;

import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Star,
  GitFork,
  Loader,
  AlertCircle,
  Server,
  Cloud,
  Database,
  BarChart,
  ArrowRight,
  Terminal,
} from "lucide-react";

// Interface for GitHub Repos
interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
}

// Interface for Featured Professional Projects (Manual Entry)
interface FeaturedProject {
  id: number;
  title: string;
  role: string;
  description: string;
  achievements: string[];
  tech: string[];
  icon: React.ReactNode;
}

const Projects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // --- MANUAL FEATURED PROJECTS (Based on Resume) ---
  const featuredProjects: FeaturedProject[] = [
    {
      id: 101,
      title: "Multi-Cloud Data Platform Infrastructure",
      role: "Infrastructure as Code & Automation",
      description:
        "Designed and automated a scalable data platform infrastructure across AWS and Azure. Transitioned manual deployment processes into fully automated pipelines using Python and IaC principles, enabling reliable batch and streaming data processing.",
      achievements: [
        "Implemented Infrastructure as Code (IaC) using Terraform/Ansible",
        "Managed containerized workloads with Docker & Kubernetes (AKS/OpenShift)",
        "Enforced IAM, RBAC, and encryption standards for enterprise security",
        "Reduced deployment time by 40% through CI/CD automation",
      ],
      tech: ["AWS", "Azure", "Terraform", "Kubernetes", "Python", "Docker"],
      icon: <Cloud className="w-10 h-10 text-blue-400" />,
    },
    {
      id: 102,
      title: "Enterprise Teradata Optimization",
      role: "Database Administration & Engineering",
      description:
        "Administered high-availability Teradata environments. Led initiatives for performance tuning and capacity planning, ensuring SLA commitments were met for critical financial data ingestion and reporting.",
      achievements: [
        "Optimized workloads using TASM and advanced indexing (PPI, Join Index)",
        "Automated routine DBA operations using Bash, Python, and BTEQ",
        "Managed Disaster Recovery (DR) strategies and backup validation",
        "Handled massive batch processing using FastLoad and TPT",
      ],
      tech: ["Teradata", "SQL", "BTEQ", "Bash", "TASM", "Linux"],
      icon: <Database className="w-10 h-10 text-purple-400" />,
    },
    {
      id: 103,
      title: "Distributed Cache System (Raft Consensus)",
      role: "Systems Engineering",
      description:
        "Developed 'CacheierThanThou', a fast distributed caching system demonstrating deep understanding of distributed systems protocols. Implemented leader election and log replication to ensure data consistency across nodes.",
      achievements: [
        "Implemented Raft Consensus Algorithm for fault tolerance",
        "Designed strictly typed protocol definitions in Go",
        "Built concurrent message handling over TCP",
        "Achieved high throughput for key-value storage operations",
      ],
      tech: ["Go", "Distributed Systems", "Raft", "TCP/IP", "Concurrency"],
      icon: <Server className="w-10 h-10 text-green-400" />,
    },
  ];

  // --- MOCK GITHUB DATA ---
  const mockRepos: Repository[] = [
    {
      id: 1,
      name: "Text-Extraction-From-Video",
      description: "An application to extract embedded text from video by OCR",
      html_url: "https://github.com/praneetkandregula",
      homepage:
        "https://github.com/praneetkandregula/Text-Extraction-From-Video",
      language: "Python",
      stargazers_count: 24,
      forks_count: 8,
      topics: ["Python", "nltk", "numpy", "cv2"],
      updated_at: "2025-01-15T10:30:00Z",
    },
    {
      id: 2,
      name: "Zutan-web-app",
      description:
        "Database as a service platform providing endpoints for CRUD operations to SQL/NoSQL databases",
      html_url: "https://github.com/praneetkandregula",
      homepage: "https://github.com/praneetkandregula/ZuTan",
      language: "JavaScript",
      stargazers_count: 45,
      forks_count: 12,
      topics: ["HTML", "Javascript", "css", "serverless"],
      updated_at: "2025-03-10T14:20:00Z",
    },
    {
      id: 3,
      name: "Kafka-microservices-Go",
      description:
        "Highly available microservices architecture using Apache Kafka for event streaming",
      html_url: "https://github.com/praneetkandregula",
      homepage: "https://github.com/RaghavRoy145/KafkaGo",
      language: "Go",
      stargazers_count: 89,
      forks_count: 34,
      topics: ["Go", "Kafka", "microservices"],
      updated_at: "2024-12-20T11:30:00Z",
    },
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setRepos(mockRepos);
      } catch (err) {
        setError("Failed to fetch repositories");
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: "bg-yellow-500",
      TypeScript: "bg-blue-500",
      Python: "bg-green-500",
      Go: "bg-cyan-500",
      CSS: "bg-purple-500",
    };
    return colors[language] || "bg-gray-500";
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            A selection of complex data engineering pipelines, cloud
            infrastructure, and distributed systems I have engineered.
          </p>
        </div>

        {/* --- SECTION 1: Featured Professional Projects (Detailed Cards) --- */}
        <div className="space-y-12 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row gap-8 items-start bg-gray-800/50 rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/20 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Left Side: Content */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-gray-700 rounded-xl">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <span className="text-purple-400 font-medium text-sm">
                      {project.role}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700/50">
                  <h4 className="text-sm font-semibold text-gray-200 mb-2 flex items-center">
                    <BarChart size={16} className="mr-2 text-purple-400" /> Key
                    Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-gray-400"
                      >
                        <span className="mr-2 mt-1.5 w-1 h-1 bg-purple-400 rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Side: Visual / Decorative */}
              <div className="w-full lg:w-1/3 flex items-center justify-center">
                <div className="w-full h-full min-h-[200px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 flex flex-col items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                  <Terminal
                    size={48}
                    className="text-gray-600 mb-3 group-hover:text-purple-500 transition-colors duration-500"
                  />
                  <div className="text-center">
                    <p className="text-gray-500 text-sm font-mono">
                      System Architecture
                    </p>
                    <p className="text-gray-600 text-xs mt-1">
                      {project.tech[0]} • {project.tech[1]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- SECTION 2: Open Source / GitHub Grid --- */}
        <div className="border-t border-gray-800 pt-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white flex items-center">
              <Github className="mr-3" /> Open Source & Experiments
            </h3>
            <a
              href="https://github.com/praneetkandregula"
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
            >
              View Github <ArrowRight size={16} className="ml-1" />
            </a>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <Loader className="animate-spin text-purple-400" size={32} />
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo, index) => (
                <div
                  key={repo.id}
                  className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <div
                        className={`w-2.5 h-2.5 ${getLanguageColor(repo.language)} rounded-full mr-2`}
                      ></div>
                      <span className="text-gray-400 text-xs">
                        {repo.language}
                      </span>
                    </div>
                    <div className="flex space-x-3 text-gray-500 text-xs">
                      <span className="flex items-center">
                        <Star size={12} className="mr-1" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center">
                        <GitFork size={12} className="mr-1" />
                        {repo.forks_count}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors truncate">
                    {repo.name}
                  </h4>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2 h-10">
                    {repo.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex gap-2">
                      {repo.topics.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 bg-gray-700 rounded-full text-gray-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-white"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
