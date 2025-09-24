"use client"

import React, { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle sending email via API or email service
    console.log(formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="min-h-screen px-6 md:px-20 py-16 flex flex-col justify-center">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Get In Touch
      </h1>
      <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
        Have a question or want to work together? Fill out the form below and
        I’ll get back to you as soon as possible.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col gap-4 bg-[#171717] p-8 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactPage;
