import React from 'react';
import Image from 'next/image'; // Import the Image component
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
      {/* Use the Image component instead of <img> */}
      <Image
        src={imagePlaceholder}
        alt="Embedded AI Town"
        className="embedded-image"
        onClick={openExternalSite}
        width={600} // Adjust as needed
        height={400} // Adjust as needed
      />
    </div>
  );
};

export default EmbeddedPage;
