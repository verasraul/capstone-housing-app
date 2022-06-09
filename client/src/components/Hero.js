import React from 'react';

import { Grid, Stack, Typography, Button, Box } from '@mui/material';
// import myteam from '../images/myteam.jpg';
import HouseSvg from '../assest/houseSvg';
import useStyles from '../styles/styles';
import BackgroundImage from '../assest/BackgroundImage';


const Hero = () => {
  const classes = useStyles();
 


  return (
    
      
    <Box className={classes.heroBox}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={7}>
          <Typography variant="h1" fontWeight={600} className={classes.title}>
          Finding you <Typography color="error.dark" variant="h1" fontWeight={600} className={classes.inline} >
        Homes 
      </Typography>  that  suit your <Typography color="error.dark" variant="h1" fontWeight={600} className={classes.inline}>
       budget
    </Typography>
          </Typography>
          <Typography variant="h4"fontWeight={400} className={classes.subtitle}>
          The best place to find reviews and governments assistants that fits on your budget
          </Typography>
         
          <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            className={classes.rounded}
            color="error"
            sx={{ width: '200px', fontSize: '16px' }}
          >
            Join
          </Button>
          
          <Button
            space={2}
            variant="outlined"
            color="error"
            sx={{ width: '200px', fontSize: '16px' }}
          >
            Sign In
          </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} md={5}>
         
        <HouseSvg />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;