import React, { useState } from 'react';
import { MdMailOutline, MdMessage } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { Button } from '../../Components/ui/button';
import { Textarea } from '../../Components/ui/textarea';
import { Input } from '../../Components/ui/input';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-[#fbf1eb] text-[#333333] dark:bg-[#121212] dark:text-[#e0e0e0] p-6 lg:p-12">
      <div className="text-3xl font-bold mb-6 text-[#bf4408] dark:text-[#e65103]">
        Contact Us
      </div>
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-[#ffffff] dark:bg-[#2d2d2d] p-6 rounded-lg shadow-lg space-y-6"
        >
          <div className="flex items-center border border-[#bf4408] dark:border-[#e65103] rounded-lg overflow-hidden focus-within:border-[#bf4408] dark:focus-within:border-[#e65103] transition duration-200 ease-in-out">
            <FaUser className="text-[#bf4408] dark:text-[#e65103] ml-3" size={20} />
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="flex-grow outline-none ml-3 p-3 bg-transparent placeholder-gray-400 dark:placeholder-gray-500 focus:border-[#bf4408] dark:focus:border-[#e65103]"
            />
          </div>
          <div className="flex items-center border border-[#bf4408] dark:border-[#e65103] rounded-lg overflow-hidden focus-within:border-[#bf4408] dark:focus-within:border-[#e65103] transition duration-200 ease-in-out">
            <MdMailOutline className="text-[#bf4408] dark:text-[#e65103] ml-3" size={20} />
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="flex-grow p-3 bg-transparent placeholder-gray-400 dark:placeholder-gray-500 focus:border-[#bf4408] dark:focus:border-[#e65103]"
            />
          </div>
          <div className="flex flex-col items-start border border-[#bf4408] dark:border-[#e65103] rounded-lg overflow-hidden focus-within:border-[#bf4408] dark:focus-within:border-[#e65103] transition duration-200 ease-in-out">
            <MdMessage className="text-[#bf4408] dark:text-[#e65103] ml-3 mt-2" size={20} />
            <Textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="flex-grow p-3 bg-transparent placeholder-gray-400 dark:placeholder-gray-500 focus:border-[#bf4408] dark:focus:border-[#e65103]"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#bf4408] text-[#ffffff] hover:bg-[#e65103] dark:bg-[#bf4408] dark:hover:bg-[#e65103] focus:outline-none focus:ring-2 focus:ring-[#bf4408] dark:focus:ring-[#e65103] rounded-lg py-2 transition duration-300 ease-in-out"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
