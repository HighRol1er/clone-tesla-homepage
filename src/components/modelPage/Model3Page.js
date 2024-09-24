import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Model3Page = () => {
  const [showImg, setShowImg] = useState(false);
  const [bgImg, setBgImg] = useState("/images/model3-detail1.avif")
  

  const handleImage = () => {
    const bgImg1 = "/images/model3-detail1.avif";
    const bgImg2 = "/images/model3-detail2.avif";
    if(!showImg) {
      setBgImg(bgImg2);
      setShowImg(true);
    }
    if(showImg) {
      setBgImg(bgImg1);
      setShowImg(false);
    }
  }

  return (
    <Container >
      <img src={bgImg} alt=''/>
      <Details>
        <h1>Model 3</h1>
        
        {!showImg ? <p>Standard and Long Range</p>: <p>Performance</p>}
        <BtnGroup>
          <LeftBtn>
            Order Now
          </LeftBtn>
          <RightBtn>
            Learn More
          </RightBtn>
        </BtnGroup>
        <SwitchBtn onClick={handleImage}>
          Switch to Performance
        </SwitchBtn>
      </Details>
      
    </Container>
  )
}

export default Model3Page

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img{
    width: 100%;  /* Set width to 100% of the container */
    height: 100%; /* Set height to 100% of the container */
    object-fit: cover; /* Ensures the image covers the container without distortion */
    object-position: center; /* Centers the image */
  }
`;

const Details = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 40%;
  right: 70%;
  

  h1 {
    font-size: 56px;
    color: white;
    font-weight: 600;
    padding-left: 15px ;
  }

  p {
    font-size: 20px;
    font-weight: 400;
    color: white;
    padding-left: 15px ;
  }
`;

const BtnGroup = styled.div`
    display: flex;
    
    flex-direction: column;
`;

const LeftBtn = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const RightBtn = styled(LeftBtn)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const SwitchBtn = styled.div`
  color: white;
  padding-top: 5px;
  padding-left: 50px;
  font-weight: 200;
  opacity: 0.85;
  cursor: pointer;
`;



