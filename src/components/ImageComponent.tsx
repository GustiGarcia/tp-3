import React, { useState } from 'react';

interface PropImg {
  src: string; 
  alt: string; 
}

export const ImageComponent: React.FC<PropImg> = ({ src, alt }) => {
  const [zoom, setZoom] = useState(false);

  const handleClick = () => {
    setZoom(!zoom);
  };

  const styleImage = {
    width: zoom ? '600px' : '300px',
    height: zoom ? 'auto' : '300px',
    cursor: 'pointer'
  };

  return (
    <div>
      <img
        src = {src}
        alt = {alt}
        onClick={handleClick}
        style={styleImage}
      />
      {zoom && (
        <div className="imagen-con-zoom" onClick={handleClick}>
        </div>
      )}
    </div>
  );
};

