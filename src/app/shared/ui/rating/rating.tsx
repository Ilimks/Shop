import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

interface RatingProps {
  value: number; 
  onChange?: (newRating: number) => void; 
  isEditable?: boolean; 
  activeColor?: string; 
  size?: number; 
}

const Rating: React.FC<RatingProps> = ({
  value,
  onChange,
  isEditable = false,
  activeColor = '#ffd700', 
  size = 24.71, 
}) => {
  return (
    <div className={`rating-component ${isEditable ? 'editable' : ''}`} style={{ fontSize: `${size}px` }}>
      <Rater
        total={5}
        rating={value}
        interactive={isEditable}
        onRate={(rate) => onChange && onChange(rate.rating)}
      />
      <style jsx global>{`
        .react-rater-star {
          color: #f0f0f0 !important;
        }
          .react-rater-star.is-active {
          color: ${activeColor} !important;
          }
          .react-rater-star.is-active-half:before{
          color: ${activeColor} !important;
          }
      `}</style>
    </div>
  );
};

export default Rating;
