import React, { useState } from 'react';

interface TechnologyLogoProps {
  name: string;
  logoPath: string;
  fallbackIcon?: React.ReactNode;
  className?: string;
}

export default function TechnologyLogo({ 
  name, 
  logoPath, 
  fallbackIcon,
  className = "w-8 h-8" 
}: TechnologyLogoProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (imageError && fallbackIcon) {
    return fallbackIcon;
  }

  return (
    <div className={`relative ${className}`}>
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded"></div>
      )}
      <img
        src={logoPath}
        alt={`${name} logo`}
        className={`${className} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
        onError={handleImageError}
        onLoad={handleImageLoad}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}