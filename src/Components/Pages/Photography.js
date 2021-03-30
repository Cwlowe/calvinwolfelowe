import React, { useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Container, Grid, makeStyles } from '@material-ui/core';
import BannerContainer from '../Templates/Banner';

// import {get_Storage_image} from '../../Api/google_storage.js';
//redux
import {fetchPhotos} from "../Store/photography_reducer"
import Footer from '../Templates/Footer';

// import Content from '../index.js';

//Photography Section
const useStyles = makeStyles((theme)=>({
  imgCont:{
    flex:"1",
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:"10%",
  },
  loadingText:{
    fontFamily: "Lobster",
    marginBottom:"10%",
    fontSize:"30px",
    [theme.breakpoints.down("md")]:{
      marginBottom:"28%",
      fontSize:"12px",
    },
    [theme.breakpoints.down('sm')]:{
      marginBottom:"35%",
      fontSize:"20px",
    }

  }

}))
export default function PhotoContainer(){
  let classes = useStyles()
  let dispatch = useDispatch()
  let photos = useSelector(state => state.state.photos)
  let [isVisible, setVisible] = useState(false)

  useEffect(()=>{
    const getData = async()=>{
      await dispatch(fetchPhotos())
      setTimeout(()=>{
        setVisible(true);
      },1000) 
    }
    getData()
  },[dispatch])

  console.log(photos)
  return(
    <div>
      <BannerContainer title={"Photography"} />
    <Container maxWidth="lg">
      <Container fixed >
        <Grid className={classes.imgCont} container>
          {isVisible ? photos.map((url,index)=>
          <Grid className="mb-3 HtextContainer" item xs={12} sm={6} md={4} align="center" key={index}>
              <img className="imgPStyle mb-3 mb-lg-0" alt="" src={url}/>
          </Grid>
          )
          :<p className={classes.loadingText}>Loading Images ...</p>
          }
        </Grid>
      </Container>
    </Container>
    <Footer/>
    </div> 
  );
}
