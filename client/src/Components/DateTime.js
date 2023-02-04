import React, { useState, useEffect } from 'react';

function CurrentDateTime() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
       {currentTime} 
    </>
  );
}

export default CurrentDateTime;
