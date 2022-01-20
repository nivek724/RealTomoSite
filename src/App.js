import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography, Button} from '@material-ui/core'; 
import {Text,Grid, Row, ItemOne, ItemTwo, Message, ItemThree, Title, SubTitle, Info, Atag, Simg, CRow, preset} from './styles.js';
// import NavBar from './components/NavBar'
// import Grid from './components/Grid'
// import Footer from './components/Footer'
import './App.css';
//changes to imports 
// import SecurityIcon from '@material-ui/icons/Security';
// import EventNoteIcon from '@material-ui/icons/EventNote';
// import TrendingUpIcon from '@material-ui/icons/TrendingUp';
// import ImportExportIcon from '@material-ui/icons/ImportExport';
// import ComputerIcon from '@material-ui/icons/Computer';
// import HttpIcon from '@material-ui/icons/Http';
import mug from './images/mug.png';
import band from './images/Band.png';
import mam from './images/mam.jpg';
import curry from './images/curry.png';
import cam from './images/panel.jpg';

const theme = createTheme({
  palette: {
    primary: {
      main: preset.color.main,
    },
    secondary: {
      main: preset.color.main,
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      fontSize:20,
      lineHeight: '1rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})


function App() {
  const classes = styles(); 
  const text = [
    "Mug Fundraiser",
    "CN Practices",
    "Nikkei Professionals RSVP",
    "Mammoth Sign up Form",
    "General Meeting & Afterevent"
  ];
  const info = [
    [
      "•  Mugs are still available! They are $10 and come with a sticker and wristband!",
      "•  Please contact Eadan if you are interested in buying one!"
    ],
    [
      "•  Modern 2 - Monday 7:30-9PM Passcode is 848358",
      "•  Skit - Wednesday 6-10PM Passcode is 986015",
      "•  Odori - Wednesday 5-6:30PM Passcode is 253288",
      "•  Tones: TBD",
      "Buttons below for links :)"
    ],
    [
      "•  Deadline is Jan 26",
      "•  Sign up if you are interested!",
    ],
    [
      "•  Mammoth Sign up form is coming out Saturday Jan 22!",
      "•  Spots are limited to the first 50 sign ups but there will be a waitlist"
    ],
    [
      "•  6 PM on Thursday through zoom",
      "•  Afterevent: Speed Friending",
      "•  Wanna meet new friends from Tomo? Join us this Thursday for our afterevent!"
    ]

  ]
  const message = "Hey Donda Family!! Hope midterms went well! Check Out The Announcements!!";
  const makeInfo = (info) => (
    <Info>
      {info}
    </Info>
  );

  return (
    <div className="App" style={{
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      backgroundColor: preset.color.main,
      width: "100%"
    }}>
      <ThemeProvider theme={theme}>
        <Title>
          Week 3 
          ANNOUNCEMENTS
        </Title>
        <SubTitle>
          Hope Everyone is Healthy and Safe!
        </SubTitle>
        
        <Grid>
          <ItemThree>
            {/* <Message>
              {message}
            </Message> */}
          </ItemThree>
          
          <Row>
            <ItemOne>
              <Text>
                {text[0]}
              </Text>
              {info[0].map(makeInfo)}
              <CRow>
                <Simg src={mug}/>
                <Simg src={band}/>
              </CRow>
              
            </ItemOne>
            <ItemTwo>
              <Text>
                {text[1]}
              </Text>
              {info[1].map(makeInfo)}
              <Button href='https://uci.zoom.us/j/92771311576?pwd=OHRVK2pJMWlKYWwwbEh0UGJoZW9JUT09&fbclid=IwAR1S0oIXLudjBDRh93KP5GPudXmRxUBfZJzrd8HDViILTfGV_j2GPSZHm3U#success' style={{color:'#C3073F'}}>Modern 2 Zoom Link</Button>
              <Button href='https://uci.zoom.us/j/96919812243?pwd=ZFQyR1V3NVlsbzlLbldkeFA1cGltUT09&fbclid=IwAR0jnd9tOEcF-bIL8wdi0grIveXvzXPZJ3jSsUQbw5i_dW5J4-IDgqbN5ns#success' style={{color:'#C3073F'}}>Skit Zoom Link</Button>
              <Button href='https://uci.zoom.us/j/95475089910?pwd=bmFqeEVCRlVVZ3BOOUo4WFVKWWJPUT09&fbclid=IwAR2Y9hy7w1UdTtfyHYUuEYaiZ8fYTiwSRzLJd_lqb5USp0UmAHhFOw6LXR0#success' style={{color:'#C3073F'}}>Odori Zoom Link</Button>

              {/* <iframe src="https://giphy.com/embed/3ov9jTNQZI2L3M4NB6" maxWidth="200px" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/xbox-3ov9jTNQZI2L3M4NB6">via GIPHY</a></p> */}
            </ItemTwo>
          </Row>
          <Row>
            <ItemOne>
              <Text>
                {text[2]}
              </Text>
              {info[2].map(makeInfo)}
              <Button href='https://docs.google.com/forms/d/e/1FAIpQLSdh7FKuOESxvHkeuOFQN-hsEYraaafnSZ1HJdhQxfSASXAW1Q/viewform?fbclid=IwAR39IFiCZYW_DxVEr0ZRdjtFQgl2xJmlmkNNVEw_7Qq_lMV7agZW6H5H9Os' style={{color:'#C3073F'}}>Link to Form</Button>
              <Simg src={cam}/>
            </ItemOne>
            <ItemTwo>
              <Text>
                {text[3]}
              </Text>
              {info[3].map(makeInfo)}
              <Simg src={mam}/>
            </ItemTwo>
          </Row>
          <Row>
            <ItemOne>
              <Text>
                {text[4]}
              </Text>
              {info[4].map(makeInfo)}
              <Button href='https://uci.zoom.us/j/93607093106#success' style={{color:'#C3073F'}}>Meeting Link Here</Button>
              
            </ItemOne>
            {/* <ItemTwo>
              <Text>
                {text[5]}
              </Text>
              {info[5].map(makeInfo)}
              <Simg src={curry}/>
            </ItemTwo> */}
          </Row>
        </Grid>
        
        {/* <NavBar/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             At Rocket.io we are passionate about software
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales congue tristique. Cras non pretium sem. Duis interdum lorem sit amet ligula pretium, sed rutrum urna semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus egestas gravida ullamcorper.
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<SecurityIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="Secure" btnTitle="Show me More" />
          <Grid icon={<EventNoteIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Reliable" btnTitle="Show me More"/>
          <Grid icon={<TrendingUpIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Performant" btnTitle="Show me More"/>
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>  
          <Grid icon={<ImportExportIcon style={{fill: "#5EA780", height:"125", width:"125"}}/>}  title="Modular" btnTitle="Show me More"/>
          <Grid icon={<ComputerIcon style={{fill: "#E69426", height:"125", width:"125"}}/>}  title="Multi-Platform" btnTitle="Show me More"/>
          <Grid icon={<HttpIcon style={{fill: "#2EA09D", height:"125", width:"125"}}/>} title="Connected" btnTitle="Show me More"/>
        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
