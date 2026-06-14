import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import './App.css';

const projects = [
  {
    id: 1,
    coupleNames: "Madysin & Alvin",
    date: "November 2025",
    location: "Pennsylvania",
    thumbnail: "/assets/wedding-thumbnail-1.png",
    videoUrl: "https://drive.google.com/file/d/1NVkIH00JHYHNbTvJlQXJgWta_gyi0lBs/preview",
    category: "Wedding"
  },
  {
    id: 2,
    coupleNames: "Lumad",
    date: "March 2024",
    location: "Cebu",
    thumbnail: "/assets/docu-thumbnail.png",
    videoUrl: "https://drive.google.com/file/d/1mdiLi0hBv1PYjHJAEySCbhWJ6L-DDjgb/preview",
    category: "Documentary"
  },
  {
    id: 3,
    coupleNames: "We Can Be More",
    date: "December 2023",
    location: "Cebu City",
    thumbnail: "/assets/mv-thumbnail.png",
    videoUrl: "https://drive.google.com/file/d/1hKPCM-H-ATIxD6ZPdnrh4wiGHU6skSiP/preview",
    category: "Music Video"
  },
  {
    id: 4,
    coupleNames: "Okay Ra Gihapon",
    date: "October 2023",
    location: "Cebu",
    thumbnail: "/assets/shortfilm-thumbnail.png",
    videoUrl: "https://drive.google.com/file/d/16QTE9ejKMuIEe8K8TUuQweZlAVrtMGKx/preview",
    category: "Short Film"
  },
  {
    id: 5,
    coupleNames: "CNU Hymn",
    date: "August 2023",
    location: "Cebu City",
    thumbnail: "/assets/school-hymn-thumbnail.png",
    videoUrl: "https://drive.google.com/file/d/1yBLgjBXk8NUNmg9J1zfU0Vg4Hfri_420/preview",
    category: "School Hymn"
  },
  {
    id: 6,
    coupleNames: "Megan & Ryan",
    date: "February 2026",
    location: "Pennsylvania",
    thumbnail: "/assets/wedding-thumbnail-2.png",
    videoUrl: "https://drive.google.com/file/d/1Ye_lYi-3jXXnFoBj5sbMCCpf4SO-ft8P/preview",
    category: "Wedding"
  }
];

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="wedding-portfolio">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Outfit', sans-serif;
          background: #FAF7F5;
          color: #2D2D2D;
          overflow-x: hidden;
        }
        
        .wedding-portfolio {
          min-height: 100vh;
        }
      `}</style>

      <Navigation 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Portfolio projects={projects} setSelectedVideo={setSelectedVideo} />
      <CTA scrollToSection={scrollToSection} />
      <Contact />
      <Footer />
      <VideoModal selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} />
    </div>
  );
}

export default App;
