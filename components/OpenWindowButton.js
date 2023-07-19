import React from 'react';

const OpenWindowButton = () => {
  const openNewWindow = () => {
    // Replace the URL below with the URL you want to open in the new window
    const newWindowURL = 'https://cronoscan.com/token/0xe7f3c7c6611357313b5c2734341fe9cbad1d9f59#writeContract#F17';
    window.open(newWindowURL, '_blank', 'width=600,height=400');
  };

  return (
    <div>
      <button onClick={openNewWindow}>Transfer Sycotic</button>
    </div>
  );
};

export default OpenWindowButton;
