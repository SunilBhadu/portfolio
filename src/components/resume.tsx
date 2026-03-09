'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export function Resume() {
  const resumeDetails = {
    title: "Sunil Bhadu's Resume",
    description: 'Full Stack Developer • MERN • NestJS • Node.js',
    fileType: 'PDF',
    lastUpdated: 'March 2025',
    downloadUrl: '/Sunil_Bhadu_Resume.pdf',
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeDetails.downloadUrl;
    link.download = 'Sunil_Bhadu_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mx-auto w-full py-8 font-sans">
      <motion.div
        onClick={handleDownload}
        className="group relative cursor-pointer overflow-hidden rounded-xl bg-accent p-0 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        whileHover={{ scale: 1.01 }}
      >
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-foreground">
                {resumeDetails.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {resumeDetails.description}
              </p>
              <div className="mt-1 flex text-xs text-muted-foreground">
                <span>{resumeDetails.fileType}</span>
                <span className="mx-2">•</span>
                <span>Updated {resumeDetails.lastUpdated}</span>
              </div>
            </div>

            <motion.div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-primary-foreground group-hover:bg-black/80">
              <Download className="h-5 w-5" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Resume;
