'use client';

import React, { useState } from 'react';

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<string | null>('company1');

  const experiences: ExperienceItem[] = [
    {
      id: 'company2',
      company: 'DSAP International',
      role: 'Software Engineer',
      duration: 'August 2025 - Present',
      responsibilities: [
        'Developing and maintaining software applications using Python.',
        'Collaborating with team members to design and implement new features.',
        'Testing and debugging software applications to ensure they meet quality standards.',
        'Participating in code reviews and providing feedback to team members.',
        'Participating in team meetings and providing updates on project progress.',
      ]
    },
    {
      id: 'company1',
      company: 'The Codebender',
      role: 'Software Engineer Fellow',
      duration: 'February 2024 - Present',
      responsibilities: [
        'Developed and launched multiple robust full-stack AI applications utilizing Next.js, TypeScript, OpenAI, Gemini, Mistral, and Pinecone, accelerating delivery of production-ready solutions.',
        'Engineered and integrated advanced AI APIs and vector databases, enabling intelligent features and real-time data retrieval for end-users; successfully deployed and monitored projects in live environments.',
        'Collaborated directly with a senior software engineer, adopting industry best practices for clean, maintainable, and scalable codebases, which improved project efficiency and team code quality.',
        'Actively participated in cross-functional code reviews, brainstorming sessions, and agile team projects, fostering a culture of continuous improvement and collective problem-solving.',
      ]
    },
  ];

  const handleCompanyClick = (companyId: string) => {
    setSelectedCompany(companyId);
  };

  const selectedExperience = experiences.find(exp => exp.id === selectedCompany);

  return (
    <section id="experience" className="min-h-screen px-4 sm:px-6 lg:px-8 py-16 flex flex-col justify-center relative z-10 bg-black">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Work Experience
          </h1>
          <div className="w-full h-px bg-gray-800"></div>
        </div>

        <div className="p-8">
          <div className="grid lg:grid-cols-5 gap-8 flex-1">
            {/* Companies List */}
            <div className="lg:col-span-2 space-y-0 border-l-2 border-gray-800">
              {experiences.map((experience) => (
                <button
                  key={experience.id}
                  onClick={() => handleCompanyClick(experience.id)}
                  className={`w-full text-left px-6 py-4 transition-colors duration-200 border-l-2 -ml-0.5 ${
                    selectedCompany === experience.id
                      ? 'bg-gray-900 border-white text-white'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">
                      {experience.company}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Experience Details */}
            <div className="lg:col-span-3 pl-8">
              <div 
                className={`transition-opacity duration-200 ${
                  selectedExperience 
                    ? 'opacity-100' 
                    : 'opacity-0'
                }`}
              >
                {selectedExperience && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-1">
                        {selectedExperience.role} 
                        <span className="font-normal italic text-gray-400"> @ {selectedExperience.company}</span>
                      </h2>
                      <p className="text-gray-400 font-medium text-sm">
                        {selectedExperience.duration}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {selectedExperience.responsibilities.map((responsibility, index) => (
                        <div 
                          key={index} 
                          className="flex items-start space-x-4"
                        >
                          <div className="flex-shrink-0 mt-2">
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                          </div>
                          <p className="text-gray-400 leading-relaxed text-sm">
                            {responsibility}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
