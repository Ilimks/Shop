'use client';
import styles from './FilterColor.module.scss'
import React, { useState } from 'react';
import { Box } from '@mui/material';

interface ColorProps {
  colors: string[];
  selectedColor: string | null;
  onSelect: (color: string | null) => void;
};

export const Color: React.FC<ColorProps> = ({ colors, selectedColor, onSelect }) => {
  const handleClick = (color: string) => {
    if (selectedColor === color) {
      onSelect(null);
    } else {
      onSelect(color);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
      {colors.map((color) => (
        <Box
          key={color}
          onClick={() => handleClick(color)}
          sx={{
            width: 30,
            height: 30,
            borderRadius: '50%',
            backgroundColor: color,
            cursor: 'pointer',
            boxShadow: selectedColor === color ? '0 0 0 2px white' : 'none',
            position: 'relative',
          }}
        >
          {selectedColor === color && (
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              ✓
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};
