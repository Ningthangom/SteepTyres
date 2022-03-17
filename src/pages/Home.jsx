import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Home.css";
import "antd/dist/antd.css";

import MinorRepair from './repair/MinorRepair'

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// list inside card
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// icon
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Your trusted Mechanic",
        "ميكانيكي موثوق به",
        "မင်းရဲ့ ယုံကြည်ရတဲ့ စက်ပြင်ဆရာ",
        "مکانیک مورد اعتماد شما",
        "आपका विश्वसनीय मैकेनिक",
        "Your trusted Mechanic",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(https://www.mercedes-benz.com/de/fahrzeuge/personenwagen/amg-gt/mbvideocar-mercedes-amg-gt-s/_jcr_content/image/MQ6-12-image-20190114123613/mercedes-benz-cars-mercedes-amg-gt-s-c-190-mbvideocar-road-trip-sylt-2560x1440-2560x1440.jpeg)`,
        backgroundSize: "cover",
        minHeight: "100vh",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <h1 className="welcome" style={{color: 'black'}}>Welcome to Steep Tyres</h1>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "40%",
          alignItems: "center",
          marginLeft: "30%",
          border: "1px solid blue",
        }}
      >
        {/*   <p style={{color: 'red', fontSize: '1.2rem'}}> Your trusted local mechanic </p> */}
        <span ref={el}></span>
      </div>
      <div
        style={{
          marginTop: 20,
          marginLeft: 15,
        }}
        className="container"
      >
        <div className="row projects-row">
            <div className="col-md-2"></div>
          <div className="col-md-5">
            <Card sx={{ maxWidth: 345, marginTop: 2 }}>
              <CardMedia
                component="img"
                height="140"
                image={require("./oil-horizontal.png")}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Essential Service
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                      <ListSubheader component="div" id="nested-list-subheader">
                        for $ 150
                      </ListSubheader>
                    }
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <FontAwesomeIcon icon={faCheck} />
                      </ListItemIcon>
                      <ListItemText primary="Up to 8 litres of premium engine oil" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <FontAwesomeIcon icon={faCheck} />
                      </ListItemIcon>
                      <ListItemText primary="Premium oil filter" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <FontAwesomeIcon icon={faCheck} />
                      </ListItemIcon>
                      <ListItemText primary="Detailed 86 point inspection" />
                    </ListItemButton>
                    
                  </List>
                </Typography>
              </CardContent>
              {/*  <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
            </Card>
          </div>
          <div className="col-md-5">
          <Card sx={{ maxWidth: 345, marginTop: 2 }}>
          <CardMedia
            component="img"
            height="140"
            image={require("./transmission.jpg")}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Essentail Plus
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    for $220
                  </ListSubheader>
                }
              >
                <ListItemButton>
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faCheck} />
                  </ListItemIcon>
                  <ListItemText primary="Up to 8 litres of premium engine oil" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faCheck} />
                  </ListItemIcon>
                  <ListItemText primary="Premium oil filter" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faCheck} />
                  </ListItemIcon>
                  <ListItemText primary="Detailed 86 point inspection" />
                </ListItemButton>
                <ListItemButton>
                      <ListItemIcon>
                        <FontAwesomeIcon icon={faCheck} />
                      </ListItemIcon>
                      <ListItemText primary="Engine management diagnosis scan" />
                    </ListItemButton> 
                    <ListItemButton>
                      <ListItemIcon>
                        <FontAwesomeIcon icon={faCheck} />
                      </ListItemIcon>
                      <ListItemText primary="Four standard electronic wheel balances" />
                    </ListItemButton> 
                    <ListItemButton>
                      <ListItemIcon>
                        <FontAwesomeIcon icon={faCheck} />
                      </ListItemIcon>
                      <ListItemText primary="Tyre rotation" />
                    </ListItemButton>
              </List>
            </Typography>
          </CardContent>
          {/*  <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
        </Card>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Home;
