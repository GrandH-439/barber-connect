import React, { useState } from 'react';
import './Gallery.css';
import { motion } from 'framer-motion';
import { FaYoutube, FaInstagram } from 'react-icons/fa';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';

// ✅ Import local images
import cut2021_1 from '../assets/2021/cut1.jpg';
import cut2021_2 from '../assets/2021/cut2.jpg';
import cut2021_3 from '../assets/2021/cut3.jpg';
import cut2021_4 from '../assets/2021/cut4.jpg';
import cut2021_5 from '../assets/2021/cut5.jpg';
import cut2021_6 from '../assets/2021/cut6.jpg';
import cut2021_7 from '../assets/2021/cut7.jpg';

import cut2022_1 from '../assets/2022/cut1.jpg';
import cut2022_2 from '../assets/2022/cut2.jpg';
import cut2022_3 from '../assets/2022/cut3.jpg';
import cut2022_4 from '../assets/2022/cut4.jpg';
import cut2022_5 from '../assets/2022/cut5.jpg';
import cut2022_6 from '../assets/2022/cut6.jpg';
import cut2022_7 from '../assets/2022/cut7.jpg';
import cut2022_8 from '../assets/2022/cut8.jpg';
import cut2022_9 from '../assets/2022/cut9.jpg';
import cut2022_10 from '../assets/2022/cut10.jpg';
import cut2022_11 from '../assets/2022/cut11.jpg';
import cut2022_12 from '../assets/2022/cut12.jpg';

import cut2024_1 from '../assets/2024/cut1.jpg';
import cut2024_2 from '../assets/2024/cut2.jpg';
import cut2024_3 from '../assets/2024/cut3.jpg';
import cut2024_4 from '../assets/2024/cut4.jpg';
import cut2024_5 from '../assets/2024/cut5.jpg';
import cut2024_6 from '../assets/2024/cut6.jpg';
import cut2024_7 from '../assets/2024/cut7.jpg';

import cut2025_1 from '../assets/2025/cut1.jpg';

const Gallery = () => {
  const [selectedYear, setSelectedYear] = useState('2021');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryData = {
    '2021': [cut2021_1, cut2021_2, cut2021_3, cut2021_4, cut2021_5, cut2021_6, cut2021_7],
    '2022': [
      cut2022_1, cut2022_2, cut2022_3, cut2022_4, cut2022_5, cut2022_6,
      cut2022_7, cut2022_8, cut2022_9, cut2022_10, cut2022_11, cut2022_12
    ],
    '2023': [],
    '2024': [cut2024_1, cut2024_2, cut2024_3, cut2024_4, cut2024_5, cut2024_6, cut2024_7],
    '2025': [cut2025_1],
  };

  const currentImages = galleryData[selectedYear] || [];

  // 🎲 Pick 6 random images from all years for the cube
  const allImages = Object.values(galleryData).flat();
  const randomCubeImages = allImages.sort(() => 0.5 - Math.random()).slice(0, 6);

  return (
    <div className="gallery-page">
      <div className="container">
        <h1 className="section-title">Gallery</h1>
        <p className="gallery-subtitle">Each year tells my story — from fade to perfection</p>

        {/* 🧊 3D Cube */}
        <div className="cube-container">
          <div className="cube">
            {randomCubeImages.map((img, i) => (
              <div key={i} className={`cube-face face${i + 1}`}>
                <img src={img} alt={`cube-${i + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* 🔘 Year Tabs */}
        <div className="year-tabs">
          {Object.keys(galleryData).map((year) => (
            <button
              key={year}
              className={selectedYear === year ? 'year-btn active' : 'year-btn'}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </div>

        {/* 🖼️ Gallery Grid */}
        <motion.div
          key={selectedYear}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="gallery-grid"
        >
          {currentImages.length > 0 ? (
            currentImages.map((img, i) => (
              <motion.div
                key={i}
                className="gallery-item"
                onClick={() => {
                  setLightboxOpen(true);
                  setLightboxIndex(i);
                }}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <img src={img} alt={`Cut ${i + 1}`} />
              </motion.div>
            ))
          ) : (
            <p className="no-images">No cuts uploaded for {selectedYear} yet.</p>
          )}
        </motion.div>

        {/* 💡 Lightbox */}
        {lightboxOpen && (
          <Lightbox
            images={currentImages.map((img) => ({ url: img }))}
            startIndex={lightboxIndex}
            onClose={() => setLightboxOpen(false)}
          />
        )}

        {/* 📈 Barber Growth Section */}
        <motion.div
          className="improvement-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Progress & Growth</h2>
          <p>
            This gallery shows how I’ve improved over the years — mastering new fade styles,
            cleaner line-ups, and sharper precision. Each cut represents growth, creativity,
            and dedication to giving every client a premium experience.
          </p>
        </motion.div>

        {/* 📱 Social Media */}
        <div className="social-links">
          <a href="https://www.youtube.com/@GrandH8" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={30} />
          </a>
          <a href="https://www.instagram.com/_grand_h_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
