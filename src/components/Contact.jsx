import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  // console.log(form);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_u0bx0kz',
        'template_zxzk6u2',
      
        {
          from_name: form.name,
          to_name: "opemibilal@gmail.com",
          from_email: form.email,
          to_email: "opemibilal@gmail.com",
          message: form.message,
        },

        'ayq3iHpVYmEHFF_k4',
      )  
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  console.log(  import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID);

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden font-serif`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-blue-800 p-8 rounded-2xl font-serif'
      >
        <p className={`${styles.sectionSubText} text-white`}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4 font-serif'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-blue-700 py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium font-serif'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-blue-700 py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium font-serif'
            />
          </label>
          <label className='flex flex-col font-serif'>
            <span className='text-white font-medium mb-4 '>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-blue-700 py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-blue-700 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-sm shadow-blue-200 font-serif '
          >
            {loading ? "Sending..." : "Send"}
          </button>

          <p className="font-serif text-sm pl-4">Or mail to: opemibilal@gmail.com</p>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
