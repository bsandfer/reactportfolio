// import Paper from "@mui/material/Paper";
// import headshot from "../../assets/images/parkPup.png";
// import { Avatar } from "@mui/material";
// import styled from "@emotion/styled";
// import Resume from "../../assets/other/resume.pdf"
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
// import { Tooltip } from "@mui/material";
import React, { Suspense } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {  Typography } from "@mui/material";
import TypeAnimation from "react-type-animation"
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";



// const SizedAvatar = styled(Avatar)`
//   ${({ size, theme }) => `
//     width: ${theme.spacing(size)}px; 
//     height: ${theme.spacing(size)}px; 
//   `};
// `;


function MyRotatingBox() {
  const myMesh = React.useRef()
  
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a;
    myMesh.current.rotation.x = a;
  });
  return (
    <>
      <mesh ref={myMesh} scale={3}>
        <boxBufferGeometry />
        <meshPhongMaterial color="#E3B23C" />
      </mesh>
    </>
  );
}



const About = () => {
  return (
    <>
      <Box margin={3}>
        <Grid
          // sx={{ mx: "auto" }}
          justifyContent="center"
          container
          // padding={2}
          // spacing={2}
        >
          {/* <Grid item md={3}>
            <SizedAvatar
              alt="photo of me"
              size="300"
              src={headshot}
              // sx={{ width: 1, height: 1 }}
            ></SizedAvatar>
          </Grid> */}

          {/* <Grid item md={1}></Grid> */}

          <Grid item xs={12} md={4}>
            <Typography variant="h3">Brendan Sandfer</Typography>
            <br></br>
            <Typography paragraph>
              <div style={{width: '7em', height: '1.5em'}}>
            <TypeAnimation
            cursor={true}
            sequence={['', 1000, '"Hello, world."', 1000]}
            wrapper="p"
            repeat={1}
            />
            </div>
            My name is Brendan Sandfer, and I design and develop software solutions. I am a full-stack web developer and I aim to stay on the cutting edge by continually learning new technologies and growing as a developer and software engineer. I bring passion and dedication to all my projects, with empathy for users, and curiosity for the ever-evolving business. I am experienced in working in fast-paced team-oriented environments, and enthusiastic to take on new problems and push the next-generation of technology forward.
            </Typography>
            {/* <Box class="linkBox">
            <Tooltip title="Github">
            <IconButton
            href="https://github.com/bsandfer"
            target="_blank"
            rel="noreferrer"
            >
            <GitHubIcon fontSize="large" color="primary"></GitHubIcon>
            </IconButton>
            </Tooltip>

            <Tooltip title="LinkedIn">
            <IconButton
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            >
            <LinkedInIcon fontSize="large" color="primary"></LinkedInIcon>
            </IconButton>
            </Tooltip>

            <Typography variant="h7">Download my resume  </Typography>
            
            <Tooltip title="Resume">
            <IconButton
            onClick={() => {
              alert('Thank you for your consideration! Have a nice day 🙂')
            }}
            href={ Resume }
            target="_blank"
            rel="noreferrer"
            >
              <DownloadForOfflineIcon
              fontSize="large"
              color="primary"
              paddingTop="2"
              />
            </IconButton>
            </Tooltip>

            </Box> */}
          </Grid>
          {/* <Grid item xs={12} padding={5}></Grid> */}


        </Grid>
        <Canvas>
          <Suspense fallback={null}>
            <MyRotatingBox/>
            <ambientLight intensity={0.1} />
            <directionalLight color="white" position={[0, 0, 5]} />
            <OrbitControls />
            
          </Suspense>
        </Canvas>
      </Box>
    </>
  );
};

export default About;
