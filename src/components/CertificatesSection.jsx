import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

function CertificatesSection() {
  const base = process.env.PUBLIC_URL || '';
  const certificates = [
    { name: 'NCFE Level 4 Diploma Data Analyst', issuer: 'NCFE', year: '17 October 2025', url: `${base}/certificates/ncfe_level4_watermarked.pdf` },
    { name: 'NCFE Level 3 Certificate in Data', issuer: 'NCFE', year: '06 March 2025', url: `${base}/certificates/ncfe_level3_watermarked.pdf` },
    { name: 'Data Analysis Practical Training', issuer: 'Future Connect Training Institute', year: '26 February 2025', url: `${base}/certificates/data_analysis_practical_training_watermarked.pdf` },
    { name: 'Cyber Infrastructure Technician', issuer: 'iMeta Training', year: '28 March 2024', url: `${base}/certificates/cyber_infrastructure_technician_watermarked.pdf` },
  ];
    
  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-neutral-900 mb-12">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border-2 border-neutral-200 rounded-xl hover:border-primary-300 hover:shadow-lg transition-all bg-neutral-50 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#B4CED9' }}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-neutral-900">{cert.name}</h3>
                  <p className="text-neutral-600 mt-1">{cert.issuer}</p>
                  <p className="text-sm text-neutral-500 mt-1">{cert.year}</p>
                  <div className="flex items-center gap-1 mt-2 text-sm font-medium hover:text-primary-600 transition-colors" style={{ color: '#B4CED9' }}>
                    <ExternalLink className="w-4 h-4" />
                    <span>View Certificate</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificatesSection;
