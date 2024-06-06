"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt/>,
    title: "Phone",
    description: "(+92) 3065615796",
  },
  {
    icon: <FaEnvelope/>,
    title: "Email",
    description: "jaweriabibiofficial@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt/>,
    title: "Address",
    description: "Heir main bedian road lahore,Pakistan",
  },
];

const Contact = () => {
  const sendMessage = (e) => {
    e.preventDefault();
    const firstname = e.target.firstname.value;
    const lastname = e.target.lastname.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const phoneNumber = '923065615796'; // Your WhatsApp phone number
    const encodedMessage = encodeURIComponent(`Name: ${firstname} ${lastname} \nEmail: ${email} \nPhone: ${phone} \nMessage: ${message}`); // Encode message for URL

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.section
      initial={{ opacity: 0}}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className ="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={sendMessage} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="test-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">Whether you're looking to collaborate on a project or simply want to get in touch, I'm here to help bring your ideas to life. With a focus on delivering exceptional web development solutions and user-centric design, I'm committed to exceeding your expectations.<br/><br/>Feel free to reach out via phone, email, or visit my office. I'm available to discuss your requirements, answer any questions you may have, or provide further information about my services.</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="Firstname"/>
                <Input type="text" name="lastname" placeholder="Lastname"/>
                <Input type="email" name="email" placeholder="Email address"/>
                <Input type="tel" name="phone" placeholder="Phone number"/>
              </div>
             
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                name="message"
              />
              {/* button */}
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
