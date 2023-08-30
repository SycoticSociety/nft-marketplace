import React from 'react';
import imagePlaceholder from './image-placeholder.png'; // Replace with your image URL
import './EmbeddedPage.css'; // You can define your CSS classes here

const EmbeddedPage = () => {
  const openExternalSite = () => {
    // Replace this with the URL you want to open
    const externalUrl = 'https://www.convex.dev/ai-town';
    
    // Open the URL in a new window or tab
    window.open(externalUrl, '_blank');
  };

  return (
    <div className="embedded-page-container">
      <img
        src={imagePlaceholder}
        alt="Embedded AI Town"
        className="embedded-image"
        onClick={openExternalSite}
      />
    </div>
  );
};

export default EmbeddedPage;
