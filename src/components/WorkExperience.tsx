import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const WorkExperience = () => {
  const experiences = [
    {
      company: "Cognizant",
      role: "Data Engineer",
      location: "Dallas, USA",
      period: "August 2025 - Present",
      description: [
        "Administered and supported Teradata database environments ensuring high availability and operational excellence.",
        "Automated routine DBA operations using Bash, Python, and BTEQ, reducing manual intervention.",
        "Supported enterprise data ingestion and batch processing using Fast Load, Multiload, TPT, and BTEQ.",
        "Managed user access, security controls, and enforced enterprise governance and compliance requirements.",
        "Led performance tuning and workload optimization using TASM and indexing strategies.",
      ],
    },
    {
      company: "Tern",
      role: "Software Engineer",
      location: "New York, USA",
      period: "June 2024 - July 2025",
      description: [
        "Designed and automated data platform infrastructure across AWS and Azure using Infrastructure as Code (IaC).",
        "Built and managed containerized data workloads using Docker, Kubernetes, and Helm on OpenShift and AKS.",
        "Implemented CI/CD pipelines using GitLab CI/CD and CircleCI for data pipeline automation.",
        "Monitored data pipeline performance using ELK Stack, Prometheus, and Grafana.",
      ],
    },
    {
      company: "LTIMindtree",
      role: "Software Engineer",
      location: "India",
      period: "May 2021 - May 2023",
      description: [
        "Managed database performance and high availability across Snowflake and traditional RDBMS environments.",
        "Supported application migration to AWS cloud environments while maintaining strong network security.",
        "Monitored and optimized CI/CD pipelines using Jenkins and Azure DevOps.",
        "Orchestrated containerized environments using Kubernetes and Docker.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            My professional journey across different tech giants.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-700"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row ${index % 2 === 0 ? "lg:flex-row-reverse" : ""} items-center justify-center`}
              >
                {/* Content Card */}
                <div className="w-full lg:w-5/12">
                  <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-purple-500 transition-colors duration-300 shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <div className="flex items-center text-purple-400">
                        <Briefcase size={16} className="mr-2" />
                        <span className="text-sm font-semibold">
                          {exp.company}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-gray-400 text-sm">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-gray-300 text-sm flex items-start"
                        >
                          <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex w-2/12 justify-center items-center relative">
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-4 border-gray-900 shadow-lg z-10"></div>
                </div>

                {/* Empty Space for alternate side */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
