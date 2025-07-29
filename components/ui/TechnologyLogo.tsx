import { useState } from 'react';

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

  const handleImageError = () => {
    setImageError(true);
  };

  if (imageError && fallbackIcon) {
    return fallbackIcon;
  }

  return (
    <img
      src={logoPath}
      alt={`${name} logo`}
      className={className}
      onError={handleImageError}
      loading="lazy"
    />
  );
}