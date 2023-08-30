import React from 'react';

const EmbeddedPage = () => {
  const openExternalSite = () => {
    const externalUrl = 'https://www.convex.dev/ai-town';
    window.open(externalUrl, '_blank');
  };

  const imageStyles = {
    width: '100%',
    maxWidth: '800px', // Adjust as needed
    margin: '0 auto',
    cursor: 'pointer',
  };

  return (
    <div className="embedded-page-container">
      <img
        src="/images/image-placeholder.png" // Update the path to your image
        alt="Embedded AI Town"
        style={imageStyles}
        onClick={openExternalSite}
      />
    </div>
  );
};

export default EmbeddedPage;
