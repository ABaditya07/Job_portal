
import React, { useState } from 'react';

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { 
      question: "How do I apply for a job?", 
      answer: "You can apply for jobs by creating an account, uploading your resume, and clicking the 'Apply' button on job listings." 
    },
    { 
      question: "How can I contact support?", 
      answer: "You can contact support via our contact form or email us at support@jobsphere.com." 
    },
    { 
      question: "Is JobSphere free to use?", 
      answer: "Yes, JobSphere is free for job seekers. Employers may have premium options." 
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className='bg-gray-900 text-gray-300 py-6'>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          
          {/* Company Info */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">JobSphere</h2>
            <p className="text-sm">© 2025 Your Company. All rights reserved.</p>
          </div>

          {/* FAQ Section */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-white mb-2">FAQs</h3>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-700 pb-2">
                  <button 
                    className="w-full text-left text-sm font-medium text-gray-400 hover:text-gray-200 flex justify-between items-center" 
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    <span className="text-gray-500">{openIndex === index ? "▲" : "▼"}</span>
                  </button>
                  {openIndex === index && <p className="mt-1 text-sm text-gray-400">{faq.answer}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-gray-400" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.676 0H1.324C.593 0 0 .592 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82V14.706H9.692v-3.578h3.128V8.408c0-3.1 1.893-4.787 4.657-4.787 1.325 0 2.463.1 2.794.144v3.238l-1.918.001c-1.503 0-1.794.715-1.794 1.762v2.31h3.587l-.468 3.578h-3.119V24h6.116C23.407 24 24 23.408 24 22.676V1.324C24 .592 23.407 0 22.676 0z" /></svg>
            </a>
            <a href="https://x.com" className="hover:text-gray-400" aria-label="Twitter">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.835 9.835 0 01-2.828.775 4.934 4.934 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.924 4.924 0 00-8.38 4.49A13.978 13.978 0 011.67 3.149 4.93 4.93 0 003.16 9.724a4.903 4.903 0 01-2.229-.616v.062a4.93 4.93 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.93 4.93 0 004.6 3.417A9.869 9.869 0 010 21.543a13.978 13.978 0 007.548 2.212c9.057 0 14.01-7.507 14.01-14.01 0-.213-.004-.425-.015-.636A10.012 10.012 0 0024 4.557z" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/aditya-bhure-729882258" className="hover:text-gray-400" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452H16.85v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.147V9.756h3.448v1.464h.05c.48-.91 1.653-1.871 3.401-1.871 3.634 0 4.307 2.39 4.307 5.498v5.605zM5.337 8.29c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zM7.119 20.452H3.553V9.756h3.566v10.696zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451c.979 0 1.771-.774 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" /></svg>
            </a>
            <a href="https://github.com/ABaditya07" className="hover:text-gray-400" aria-label="GitHub">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
               <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.387.6.113.793-.258.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.757-1.334-1.757-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.805 1.304 3.49.997.108-.775.42-1.305.764-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.123-.303-.535-1.523.116-3.176 0 0 1.008-.322 3.301 1.23a11.521 11.521 0 013.002-.403c1.018.005 2.045.137 3.002.403 2.29-1.552 3.297-1.23 3.297-1.23.654 1.653.24 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.626-5.478 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.293 0 .32.192.693.8.576C20.565 22.092 24 17.597 24 12.297c0-6.627-5.373-12-12-12z"/>
               </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
