import React from 'react'
import { Box,Typography, Button} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box sx={{ mt:{lg: '212px', xs:'70px'}, ml:{sm:'50px'}}}>
      <Typography color='#FF2625' fontWeight='600px' fontSize='26px'>
      Workout Station
      </Typography>
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px', xs:'40px '}}} mb="23px" mt="30px">
      Push, Progress <br/> and Perfect.
      </Typography>
      <Typography fontSize='22px' lineHeight='35px'  mb={4}>
      Choose a body part, <br/>and learn targeted exercises with Gifs and instructions.
      </Typography>
      <Button variant="contained" color="error" href='#exercises' sx={{backgroundColor:'ff2625', padding:'10px 20px'}}>Explore Exercises</Button>
      <Typography fontWeight={600} color="#ff2625"
      sx={{
        opacity:0.1,
        display:{lg:'block', xs:'none'}
      }}
      fontSize="200px">
      Exercises

      </Typography>
      <img src={HeroBannerImage} alt ='banner' className='hero-banner-img'/>
    </Box> 
 
  )
}

export default HeroBanner