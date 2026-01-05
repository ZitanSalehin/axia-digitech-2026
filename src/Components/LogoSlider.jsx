import React from 'react';

const logoTexts = [
  'Digital Marketing',
  'Website Development',
  'Graphics Design',
  'Social Media Management',
  'Search Engine Optimization'
];

const LogoSlider = () => {
  const duplicatedTexts = [...logoTexts, ...logoTexts];

  return (
    <div className="slider">
      <div className="slide-track">
        {duplicatedTexts.map((text, index) => (
          <div className="slide" key={index}>
            <div className="text-logo">{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
