'use client'; // This is a client component
import Navbar from '@/components/Navbar/Navbar';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const darkStyle = {
    backgroundColor: '#0f1014',
    color: 'white',
    transition: 'background-color 1s ease',
  };
  const tran = {
    transition: 'background-color 1s ease',
  };
  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main style={darkMode ? darkStyle : tran}>
        <h1 style={{ paddingBottom: '800px' }}>this is page content</h1>
        <div style={{ height: '900px' }}>
          {/* <iframe src='https://my.spline.design/untitled-498c2ed4ce8c3e1c397f362b61dea097/' frameBorder='0' width='100%' height='100%'></iframe> */}
        </div>
      </main>
    </>
  );
}
