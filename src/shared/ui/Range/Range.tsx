'use client';
import styles from './Range.module.scss'
import { Slider, Box } from '@mui/material';
import { useState, useEffect } from 'react';

interface RangeProps {
  min: number;
  max: number;
  initialMin: number;
  initialMax: number;
  onChange: (min: number, max: number) => void;
};

export const Range = ({min, max, onChange }: RangeProps) => {
  const [value, setValue] = useState<[number, number]>([min, max]);


  useEffect(() => {
    setValue([min, max]);
  }, [min, max]);

  const handleChange = (_: Event, newValue: number | number[]) => {
    setValue(newValue as [number, number]);
    const [from, to] = newValue as [number, number];
    onChange(from, to);
  };

  return (
    <Box sx={{ width: '90%', margin: '0 auto', mt: 2}}>
      <Slider
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        // disableSwap
        // valueLabelDisplay="on"
        // getAriaLabel={() => 'Цена'}
        // valueLabelFormat={(v) => `${v} с`}
        sx={{
          color: 'black',
          height: 6,
          '& .MuiSlider-thumb': {
            height: 16,
            width: 16,
            backgroundColor: 'white',
            border: "1px solid #1E2235",
            '&:hover, &.Mui-focusVisible, &.Mui-active': {
              boxShadow: 'none',
            },
            '& .MuiSlider-valueLabel': {
              background: 'transparent',
              color: '#1E2235',
              fontWeight: 'bold',
              fontSize: 16,
              top: [25],
              transform: 'none !important',
            },
          },
          '& .MuiSlider-track': {
            border: 'none',
            backgroundColor: '#1E2235',
          },
          '& .MuiSlider-rail': {
            opacity: 0.2,
            backgroundColor: 'black',
          },
        }}
      />
    </Box>
  );
};

