// components/BallAnimation.tsx
"use client"
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const BallAnimation = () => {
  useEffect(() => {
    // You can add JavaScript for dynamic movement if needed
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-0 pointer-events-none">
      {/* Green Balls with Transparency */}
      <motion.div
        className="w-16 h-16 bg-green-500 rounded-full absolute opacity-30"
        initial={{ x: '10%', y: '10%' }}
        animate={{
          x: ['10%', '90%', '10%', '90%', '10%'],
          y: ['10%', '90%', '10%', '90%', '10%'],
          scale: [1, 1.2, 1.1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="w-16 h-16 bg-green-500 rounded-full absolute opacity-30"
        initial={{ x: '20%', y: '20%' }}
        animate={{
          x: ['20%', '80%', '20%', '80%', '20%'],
          y: ['20%', '80%', '20%', '80%', '20%'],
          scale: [1, 1.2, 1.1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
      />

      {/* Blue Balls with Transparency */}
      <motion.div
        className="w-16 h-16 bg-blue-500 rounded-full absolute opacity-30"
        initial={{ x: '30%', y: '30%' }}
        animate={{
          x: ['30%', '70%', '30%', '70%', '30%'],
          y: ['30%', '70%', '30%', '70%', '30%'],
          scale: [1, 1.3, 1.1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="w-16 h-16 bg-blue-500 rounded-full absolute opacity-30"
        initial={{ x: '40%', y: '40%' }}
        animate={{
          x: ['40%', '60%', '40%', '60%', '40%'],
          y: ['40%', '60%', '40%', '60%', '40%'],
          scale: [1, 1.3, 1.1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default BallAnimation;
