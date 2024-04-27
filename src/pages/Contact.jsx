import React, { useState } from "react";
import contact from "../data/contactData.js";
import ContactColumn from "../components/ContactTable";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // testing
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      id="contact-page"
      className="w-full bg-background text-font font-urbanist overflow-x-hidden overflow-hidden"
    >
      <div className="flex justify-center items-center text-3xl font-extralight text-left">
        <h1 className="font-mera text-9xl -ml-16">CONTACT</h1>
        <p className="ml-12 mt-12">
          Let's connect! Reach out and let the conversation begin. Your
          thoughts, questions, and ideas are always welcome.
        </p>
      </div>
      {!submitted ? (
        <form
          netlify
          name="contact"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="flex justify-between mt-24">
            <div className="ml-28">
              <div>
                <div>
                  <label className="font-black text-2xl">
                    name
                  </label>
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="ex: John Doe"
                  className="bg-transparent border-b-2 w-35rem mt-5"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mt-32">
                <div>
                  <label className="font-black text-2xl">
                  Email
                </label>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ex: john_doe@gmail.com"
                  className="bg-transparent border-b-2 w-35rem mt-5"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="mr-28">
              <div className="flex flex-col items-end">
                <div>
                  <label htmlFor="message" className="font-black text-2xl">
                  Message
                </label>
                </div>
                <textarea
                  id="message"
                  name="message"
                  className="bg-transparent border-b-2 w-35rem h-250"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <div>
                  <button
                    type="submit"
                    className="border rounded-full px-7 py-1 text-2xl font-extralight mt-4"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <div className="text-center mt-12">
          <h2 className="text-3xl font-semibold">Successfully sent!</h2>
          <p className="mt-4 text-lg">Thank you for your message.</p>
        </div>
      )}
      <div className="flex justify-between mt-40 mr-28 ml-28">
        {contact.map((column) => (
          <ContactColumn
            key={column.name}
            name={column.name}
            links={column.links}
          />
        ))}
      </div>
      <div className="font-mera text-10xl flex items-center justify-center -mb-24 opacity-10 font-extralight">
        ELIZADOLTU
      </div>
      <div className="flex justify-center -mt-32 font-urbanist text-2xl">
        <p className="mb-2">@2024 elizadoltu. all rights reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
