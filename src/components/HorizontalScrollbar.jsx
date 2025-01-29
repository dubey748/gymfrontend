import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const scrollRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        scrollBehavior: 'smooth',
        '-ms-overflow-style': '-ms-autohiding-scrollbar',
        '&::-webkit-scrollbar': { display: 'none' },
        '-ms-overflow-style': 'none',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar-thumb': { display: 'none' },
        '&::-webkit-scrollbar-track': { display: 'none' },
      }}
      ref={scrollRef}
    >
      <Typography
        onClick={handleScrollLeft}
        sx={{
          cursor: 'pointer',
          position: 'sticky',
          zIndex: 1,
          ml: '-40px',
          py: '20px',
          left: 0,
          bg: 'white',
          borderRadius: '50%',
          boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.16)',
        }}
      >
        <img src={LeftArrowIcon} alt="left-arrow" />
      </Typography>

      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
          sx={{ display: 'inline-block', whiteSpace: 'nowrap' }}
        >
          {bodyParts ? (
            <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}

      <Typography
        onClick={handleScrollRight}
        sx={{
          cursor: 'pointer',
          position: 'sticky',
          zIndex: 1,
          mr: '-40px',
          py: '20px',
          right: 0,
          bg: 'white',
          borderRadius: '50%',
          boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.16)',
        }}
      >
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    </Box>
  );
};

export default HorizontalScrollbar;