import React from 'react';
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseCard from './ExerciseCard';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const scrollRef = React.useRef(null);
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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
          ml: '40px',
        }}
      >
        <Typography
          onClick={handleScrollLeft}
          sx={{
            cursor: 'pointer',
            visibility: 'hidden',
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
        {data.map((item) => {
          return (
            /* <React.Fragment key={item.id}>
              <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
              <ExerciseCard exercise={item} />
            </React.Fragment> */
            <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
          );
        })}
        <Typography
          onClick={handleScrollRight}
          sx={{
            cursor: 'pointer',
            visibility: 'hidden',
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
    </Box>
  );
};

export default HorizontalScrollbar;


/* import React from 'react';
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const containerRef = React.useRef(null);

  const handleClick = (scrollOffset) => {
    containerRef.current.scrollLeft += scrollOffset;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        overflowX: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
      ref={containerRef}
    >
      {data.map((item) => (
        <Box
          key={item.id || item}
          sx={{
            m: '0 40px',
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={() => {
            setBodyPart(item);
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
          }}
        >
          <BodyPart item={item} bodyPart={bodyPart} />
        </Box>
      ))}
      <Typography
        variant="h6"
        component="button"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          height: 50,
          width: 50,
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          cursor: 'pointer',
          zIndex: 1,
        }}
        onClick={() => handleClick(-200)}
      >
        <img src={LeftArrowIcon} alt="left-arrow" />
      </Typography>
      <Typography
        variant="h6"
        component="button"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          height: 50,
          width: 50,
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          cursor: 'pointer',
          zIndex: 1,
        }}
        onClick={() => handleClick(200)}
      >
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    </Box>
  );
};

export default HorizontalScrollbar;
 */
/*
import React from 'react';
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const scrollContainerRef = React.useRef(null);
  
  const handleScroll = (scrollOffset) => {
    scrollContainerRef.current.scrollLeft += scrollOffset;
  };
  
  return (
    <Box sx={{ width: '80vw', overflowX: 'auto', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
      <Typography onClick={() => handleScroll(-200)} sx={{ cursor: 'pointer', position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)', zIndex: 1 }}>
        <img src={LeftArrowIcon} alt="left-arrow" style={{ width: '30px', height: '30px' }} />
      </Typography>
      <Box ref={scrollContainerRef} sx={{ display: 'flex', gap: '40px', padding: '20px' }}>
        {data.map((item) => (
          <BodyPart key={item.id || item} item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        ))}
      </Box>
      <Typography onClick={() => handleScroll(200)} sx={{ cursor: 'pointer', position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)', zIndex: 1 }}>
        <img src={RightArrowIcon} alt="right-arrow" style={{ width: '30px', height: '30px' }} />
      </Typography>
    </Box>
  );
};

export default HorizontalScrollbar;

*/