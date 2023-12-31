import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      'https://www.beyoung.in/api/catalog/home-19-8-23/new/combo-banner-desktop-vieww1.jpg',
  },
  {
    imgPath:
      'https://www.beyoung.in/api/catalog/home-19-8-23/new/Boxer-home-page-banner-desktop-view1.jpg',
  },
  
];
const imagess = [
    {
      imgPath:
        'https://www.beyoung.in/api/catalog/home-19-8-23/new/combo-banner-mobile-view1.jpg',
    },
    {
      imgPath:
        'https://www.beyoung.in/api/catalog/home-19-8-23/new/Bo1xer-home-page-banner-mobile-view.jpg',
    },
    
  ];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  
 const size =window.innerWidth;
 const [imageData,setImageData] = React.useState(images)
 
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  React.useEffect(()=>{
    if(size>=800) setImageData(images)
    else setImageData(imagess)
  },[size])

  return (
    <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
     
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {imageData.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  maxHeight: 600,
                  minHeight:200,
                  display: 'block',
                  maxWidth: "10)%",
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
       sx={{
         justifyContent:"center"
       }}
        
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
