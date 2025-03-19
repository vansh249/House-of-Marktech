// src/components/HeroSection.jsx
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate image loading
    const img = new Image();
    img.src = "https://via.placeholder.com/1920x1080"; // Placeholder image
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <section className={`hero ${isLoaded ? "loaded" : ""}`}>
      <div className="hero-content">
        <h1>Welcome to Our Platform</h1>
        <p>Discover innovative solutions for your business needs</p>
        <button className="cta-button">Get Started</button>
      </div>
      {/* Background image/video container with lazy loading */}
      <div className="hero-background">
        {isLoaded ? (
          <img
            src="https://via.placeholder.com/1920x1080"
            alt="Hero background"
            loading="lazy"
          />
        ) : (
          <div className="placeholder-bg"></div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
