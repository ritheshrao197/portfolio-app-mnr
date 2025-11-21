import React from "react";
import { motion } from "framer-motion";

// Modern, single-file React component for Mamatha Reddy's portfolio
// Tailwind CSS required in the host project. This file is a complete page component.

// Experience Card Component
function ExperienceCard({ company, title, date, bullets }) {
  return (
    <motion.div 
      className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-indigo-600">{company}</p>
        </div>
        <span className="mt-1 md:mt-0 text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
          {date}
        </span>
      </div>
      <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1 ml-4">
        {bullets.map((bullet, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            {bullet}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function MamathaPortfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <motion.header 
        className="bg-white shadow-sm sticky top-0 z-30"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div className="h-11 w-11 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">NM</div>
            <div>
              <h1 className="text-lg font-semibold">N Mamatha Reddy</h1>
              <p className="text-sm text-gray-600">HR Operations & Talent Acquisition Specialist — Bangalore</p>
            </div>
          </motion.div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <motion.a 
              href="#about" 
              className="hover:text-indigo-600"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              About
            </motion.a>
            <motion.a 
              href="#skills" 
              className="hover:text-indigo-600"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Skills
            </motion.a>
            <motion.a 
              href="#experience" 
              className="hover:text-indigo-600"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Experience
            </motion.a>
            <motion.a 
              href="#education" 
              className="hover:text-indigo-600"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Education
            </motion.a>
            <motion.a 
              href="#contact" 
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
          </nav>

          <div className="md:hidden">
            <button aria-label="open menu" className="text-indigo-600">Menu</button>
          </div>
        </div>
      </motion.header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-indigo-600 font-medium">Hi, I'm Mamatha</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
              HR Operations & Talent Acquisition Specialist
            </h2>
            <p className="mt-4 text-gray-700 max-w-xl">
              I build reliable hiring funnels, improve candidate experience, and support HR operations with
              data-driven insights. With 4+ years in IT recruitment and HR, I partner with stakeholders to
              deliver quality hires and smooth onboarding.
            </p>

            <div className="mt-6 flex gap-4">
              <motion.a
                href="mailto:mamathareddyda25@gmail.com"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Email Me
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/mamatha-reddy-089969231"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-indigo-600 text-indigo-600 px-4 py-2 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View LinkedIn
              </motion.a>
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-gray-600">
              <li><strong>Location:</strong> Bangalore, India</li>
              <li><strong>Phone:</strong> 8123968435</li>
              <li><strong>ATS / Tools:</strong> Ceipal, Talent Recruit, SuccessFactors</li>
              <li><strong>Recruitment:</strong> Naukri, LinkedIn, Shine</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Photo Section */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <motion.div 
                  className="w-40 h-40 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
                >
                  {/* Placeholder for professional photo - can be replaced with actual image */}
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 flex items-center justify-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </motion.div>
              
              </div>
            </div>
            

            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              {[1, 2, 3, 4].map((item, index) => (
                <motion.div 
                  key={item}
                  className="p-3 bg-indigo-50 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <dt className="text-xs text-gray-500">Open Roles Filled</dt>
                  <dd className="text-lg font-semibold">120+</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </section>

        {/* About */}
        <motion.section 
          id="about" 
          className="mt-12 bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold">About</h3>
          <p className="mt-3 text-gray-700">
            I specialize in end-to-end recruitment and HR operations for fast-moving teams. I focus on sourcing
            high-quality talent, improving the candidate journey, and building processes that reduce time-to-hire
            while increasing conversion. I enjoy using data to inform hiring strategies and partnering with hiring
            managers to deliver the right fit.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h4 className="font-medium">What I do</h4>
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                <li>Full-cycle recruitment, screening, and interview coordination</li>
                <li>Bulk hiring and campus drives support</li>
                <li>Employer branding communication and candidate touchpoints</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h4 className="font-medium">How I work</h4>
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                <li>Close stakeholder collaboration with hiring managers</li>
                <li>Metrics-driven approach: dashboards, reports, and continuous improvement</li>
                <li>Candidate-first focus — responsiveness and transparent communication</li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section 
          id="skills" 
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold">Core Competencies & Tools</h3>
          <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Talent Acquisition & Sourcing',
              'Employer Branding',
              'HR Operations',
              'Recruitment Analytics',
              'Candidate Lifecycle Management',
              'ATS Management (Ceipal, Talent Recruit)'
            ].map((s, index) => (
              <motion.div 
                key={s} 
                className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <p className="text-sm font-medium">{s}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-6 bg-white p-4 rounded-lg border border-gray-100 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h4 className="font-medium">Technical & Recruitment Tools</h4>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              {['Ceipal', 'Talent Recruit', 'SuccessFactors', 'Naukri', 'LinkedIn Recruiter', 'Shine.com', 'HackerRank', 'Driftin', 'MS Office', 'Teams', 'Zoom'].map((t, index) => (
                <motion.span 
                  key={t} 
                  className="px-3 py-1 rounded-full bg-gray-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  whileHover={{ y: -3 }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Experience */}
        <motion.section 
          id="experience" 
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold">Experience</h3>

          <div className="mt-6 space-y-6">
            <ExperienceCard
              company="Manpower Group Pvt. Ltd., Bangalore"
              title="Human Resources Consultant"
              date="June 2025 – Present"
              bullets={[
                'Coordinate with clients and hiring managers to deliver high-quality profiles quickly.',
                'Manage full-cycle recruitment for external clients with focus on candidate experience.',
                'Conduct initial screening and evaluation for role-fit and cultural alignment.'
              ]}
            />

            <ExperienceCard
              company="SkillRecruit Pvt. Ltd., Hyderabad"
              title="Recruitment Consultant"
              date="Dec 2021 – May 2025"
              bullets={[
                'SPOC for recruits from offer to joining, improving conversion and onboarding.',
                'Executed sourcing plans across IT and non-IT domains and met hiring targets.',
                'Prepared monthly reports and hiring dashboards for senior leadership.'
              ]}
            />

            <ExperienceCard
              company="Altimetrik (RPO - SkillRecruit), Hyderabad"
              title="Talent Acquisition Specialist"
              date="Jan 2024 – Aug 2024"
              bullets={[
                'Conducted research and market benchmarking for niche tech roles.',
                'Coordinated interviews and background checks for smooth onboarding.',
                'Maintained candidate pipelines and ATS records (Ceipal).' 
              ]}
            />
          </div>
        </motion.section>

        {/* Education */}
        <motion.section 
          id="education" 
          className="mt-12 bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold">Education</h3>
          <ul className="mt-4 space-y-3 text-gray-700">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <strong>BCA — University of Mysore</strong>
              <div className="text-sm text-gray-500 mt-1">2019 – 2022 | 69.39%</div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <strong>Pre-University (PUC) — Sri Vidyanidhi Career Academy</strong>
              <div className="text-sm text-gray-500 mt-1">73.33%</div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <strong>SSLC — St. Mary's Convent School</strong>
              <div className="text-sm text-gray-500 mt-1">61%</div>
            </motion.li>
          </ul>
        </motion.section>

        {/* Contact */}
        <motion.section 
          id="contact" 
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold">Contact</h3>
            <p className="mt-3 text-gray-700">I'm open to HR partnerships, recruitment consultancy and full-time opportunities. Let's connect.</p>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <h4 className="font-medium">Direct</h4>
                <p className="mt-2 text-sm text-gray-700"><strong>Email:</strong> <a className="text-indigo-600" href="mailto:mamathareddyda25@gmail.com">mamathareddyda25@gmail.com</a></p>
                <p className="mt-1 text-sm text-gray-700"><strong>Phone:</strong> 8123968435</p>
                <p className="mt-1 text-sm text-gray-700"><strong>LinkedIn:</strong> <a className="text-indigo-600" href="https://linkedin.com/in/mamatha-reddy-089969231" target="_blank" rel="noreferrer">linkedin.com/in/mamatha-reddy-089969231</a></p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <h4 className="font-medium">Location</h4>
                <p className="mt-2 text-sm text-gray-700"><strong>Bangalore, India</strong></p>
                <p className="mt-1 text-sm text-gray-700">Open to remote opportunities across India</p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      <motion.footer 
        className="bg-white border-t border-gray-200 mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} N Mamatha Reddy. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
}