import React, { useState } from 'react';
import axios from 'axios';

const ResumeMaker = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    experience: '',
    education: '',
    linkedin: '',
    github: '',
    address: '',
    summary: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/resume', formData);
      if (response.data.success) {
        console.log('Resume Saved:', response.data.resume);
        // You can add logic here for generating download link after save.
      }
    } catch (err) {
      console.error('Error saving resume:', err);
    }
  };

  const handleDownload = async () => {
    try {
      const response = await axios.get('/api/download-resume');
      // Assuming the response returns a downloadable URL or file
      window.location.href = response.data.downloadUrl;
    } catch (err) {
      console.error('Error downloading resume:', err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-black text-white rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Create Your Resume</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block font-medium">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block font-medium">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label htmlFor="skills" className="block font-medium">Skills</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white"
            placeholder="Enter your skills"
          />
        </div>

        <div>
          <label htmlFor="experience" className="block font-medium">Experience</label>
          <textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white"
            placeholder="Describe your work experience"
          ></textarea>
        </div>

        <div>
          <label htmlFor="education" className="block font-medium">Education</label>
          <textarea
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white"
            placeholder="Describe your education background"
          ></textarea>
        </div>

        <div>
          <label htmlFor="linkedin" className="block font-medium">LinkedIn</label>
          <input
            type="text"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white"
            placeholder="Enter your LinkedIn URL"
          />
        </div>

        <div>
          <label htmlFor="github" className="block font-medium">GitHub</label>
          <input
            type="text"
            id="github"
            name="github"
            value={formData.github}
            onChange={handleChange}
            className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white"
            placeholder="Enter your GitHub URL"
          />
        </div>

        <div>
          <label htmlFor="address" className="block font-medium">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white"
            placeholder="Enter your address"
          />
        </div>

        <div>
          <label htmlFor="summary" className="block font-medium">Resume Summary</label>
          <textarea
            id="summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white"
            placeholder="Write a brief summary about yourself"
          ></textarea>
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Save Resume
          </button>
          <button
            type="button"
            onClick={handleDownload}
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
          >
            Download Resume
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResumeMaker;
