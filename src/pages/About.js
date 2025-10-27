import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './About.css';

const ClipperModel = () => {
  const { scene } = useGLTF('/assets/clipper.glb'); // ✅ Make sure it's in public/assets
  return <primitive object={scene} scale={2} position={[0, -1, 0]} />;
};

useGLTF.preload('/assets/clipper.glb');

// ✅ Make a proper loading component (not an HTML tag inside Canvas)
const Loader = () => (
  <mesh>
    <textGeometry args={['Loading...', { size: 0.3, height: 0.05 }]} />
    <meshBasicMaterial color="gold" />
  </mesh>
);

const About = () => {
  return (
    <div className="about-page">
      {/* 3D Clipper Animation */}
      <div className="clipper-container">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <Suspense fallback={<Loader />}>
            <ClipperModel />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>

      {/* Main Content */}
      <div className="container">
        <h1 className="section-title">About Grand H</h1>
        <p className="section-subtitle">More than just cuts — it’s a craft.</p>

        <div className="about-card glass-box">
          <h2>My Story</h2>
          <p>
            I started barbering back in grade 10 — I wasn’t great at first, but I kept learning. 
            By grade 12, I took it seriously and started improving every day. 
            Now, barbering isn’t just something I do — it’s part of who I am.
          </p>
          <p>
            My dream is to grow Grand H into a brand with multiple stores. 
            For now, I’m the only barber — and I focus only on male cuts. 
            I specialize in fades, tapers, and chiskops. 
            I also offer dye services using quality black dye for a clean, confident finish.
          </p>
        </div>

        <div className="features">
          <div className="feature-card glass-box">
            <h3>💈 Fades & Tapers</h3>
            <p>Precision and clean detail for a sharp finish.</p>
          </div>
          <div className="feature-card glass-box">
            <h3>🪒 Chiskops</h3>
            <p>Simple, smooth, and always clean — done right.</p>
          </div>
          <div className="feature-card glass-box">
            <h3>🎨 Dye (Black Only)</h3>
            <p>Enhance your look with bold, confident black dye.</p>
          </div>
        </div>

        <div className="mission glass-box">
          <h2>My Mission</h2>
          <p>
            At Grand H, every client leaves looking sharp, clean, and confident. 
            My goal is to make every haircut an experience — 
            where style, precision, and comfort meet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
