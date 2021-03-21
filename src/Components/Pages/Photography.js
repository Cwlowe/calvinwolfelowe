import React, { useEffect,useState} from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import BannerContainer from '../Templates/Banner'; 
// import {ContentContext} from '../Reducer/ContentContext';
import {get_Storage_image} from '../../Api/google_storage.js';
import Footer from '../Templates/Footer';

// import Content from '../index.js';

//Photography Section
const useStyles = makeStyles({
  imgCont:{
    flex:"1",
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:"10%",
  }
})
export default function PhotoContainer(){
  
  let [images, setImages] = useState([])
  let classes = useStyles()

  useEffect(()=>{
    const getData = async ()=>{
      let images = await get_Storage_image()
      setImages(images)
    }
    getData()
    
  },[])
  // const value = useContext(ContentContext)
  // let Btitle = value.currentContent[0].title;
  console.log(images)
  return(
    <div>
      <BannerContainer title={"Photography"} />
    <Container maxWidth="lg">
      <Container fixed >
        <Grid className={classes.imgCont} container>
          {images.map((url,index)=>
          <Grid className="mb-3 HtextContainer" item xs={12} sm={6} md={4} align="center" key={index}>
              <img className="imgPStyle mb-3 mb-lg-0" alt="" src={url}/>
          </Grid>
          )}
        </Grid>
      </Container>
    </Container>
    <Footer/>
    </div> 
  );
}
