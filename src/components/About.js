import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaInstagram
  , FaGithub } from 'react-icons/fa';
import image from "../images/pran.jpg"

const skills = ['Frontend Developer', 'Backend Developer', 'Android Developer', 'Full Stack Developer'];
const typingSpeed = 150; // Typing speed for each character
const eraseSpeed = 50; // Erasing speed for each character
const pauseTime = 1000; // Pause time between words

const useTypingEffect = (words) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (isTyping) {
      const word = words[wordIndex];
      if (text !== word) {
        timeout = setTimeout(() => {
          setText((prevText) => word.slice(0, prevText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseTime);
      }
    } else {
      if (text !== '') {
        timeout = setTimeout(() => {
          setText((prevText) => prevText.slice(0, prevText.length - 1));
        }, eraseSpeed);
      } else {
        timeout = setTimeout(() => {
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setIsTyping(true);
        }, pauseTime);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, wordIndex, isTyping, words]);

  return text;
};

const About = () => {
  const typedText = useTypingEffect(skills);

  return (
    <section className="py-20 px-5">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:gap-24">
      <div className="bg-black/10 rounded-full p-2 shadow-lg">
            <img 
              src={image}
              alt="Pranav Kumar" 
              className="w-auto h-auto rounded-full object-cover"
            />
          </div>
        <div className="text-center md:text-left ">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div>
      <p className="text-xl font-bold py-5 ">I'm  
          <span className='pl-2'>   {typedText} </span> 
          </p>
         </div>
          <p className="mb-6">
          {/* Experienced Full Stack Developer skilled in developing and sustaining responsive web applications. Proficient in React.js, Tailwind CSS, Spring Boot, and MongoDB, with foundational experience in Android Studio for cross-platform projects. Demonstrates a strong aptitude for problem-solving and a commitment to producing user-friendly, high-quality software. Effective team player with a focus on delivering exceptional results. */}
          Experienced Full Stack Developer specializing in building innovative web applications using Spring Boot, React, and MongoDB. With foundational experience in Android development, Jenkins, and Docker, I am adept at creating robust and efficient solutions. My passion lies in solving complex problems and delivering intuitive, seamless user experiences. I am committed to contributing my expertise to dynamic organizations and continuously seek opportunities to enhance my technical skills. Let's collaborate to bring innovative ideas to life and shape the future of technology together!
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://www.linkedin.com/in/pranav-kumar-097b34237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-primary text-2xl"><FaLinkedin /></a>
            <a href="https://www.instagram.com/pranav_kumaar/?utm_source=qr&igsh=MXYycWFqandiOXc0Nw%3D%3D" className="text-2xl hover:text-primary"><FaInstagram /></a>
            <a href="https://github.com/13pranav" className="text-primary text-2xl"><FaGithub /></a>
          </div>


        </div>
        
      </div>

    </section>
  );
};

export default About;