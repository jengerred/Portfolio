import { Metadata } from 'next';

import React from 'react';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';

export const metadata: Metadata = {
  title: '3D Scroll Steps',
  description: 'A 3D scroll experience with Next.js',
};

const Home: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'black',
      overflow: 'hidden',
      height: '100vh',
      width: '100vw'
    }}>
      {/* Left Panel - Fixed */}
      <div style={{
        width: '50vw',
        height: '100vh',
        position: 'relative',
        backgroundColor: 'black',
        overflow: 'hidden',
        flexShrink: 0
      }}>
        <LeftPanel />
      </div>
      
      {/* Right Panel - Scrollable */}
      <div style={{
        width: '50vw',
        height: '100vh',
        position: 'relative',
        backgroundColor: 'black',
        overflow: 'hidden'
      }}>
        <RightPanel />
      </div>
    </div>
  );
};

export default Home;
