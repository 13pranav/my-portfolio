// import React from 'react';
// import Header from './components/Header';
// import About from './components/About';
// import Services from './components/Services';
// import Testimonials from './components/Testimonials';
// import Portfolio from './components/Portfolio';
// import Experience from './components/Experience';
// import Blog from './components/Blog';
// import YouTubeVideos from './components/YouTubeVideos';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import { Route, Routes } from "react-router-dom";
// import Navbar from './components/Navbar';

// const App = () => {
//   return (
//     <>

//       <Header />
//       <About />
//       <Services />
//       <Testimonials />
//       <Portfolio />
//       <Experience />
//       <Blog />
//       <YouTubeVideos />
//       <Contact />
//       <Footer /> 


//     </>
//   );
// };

// export default App;




import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Blog from './components/Blog';
import YouTubeVideos from './components/YouTubeVideos';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <section id="home">
        {/* Home content (if any) */}
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="youtube-videos">
        <YouTubeVideos />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default App;
