import styled from 'styled-components';

const ModelsPage = () => {
  return (
    <Container>
      <img src='/images/models-detail1.avif' />
      <Details>
        <h1>Model S</h1>
        <p>From $68,490</p>
      </Details>
      <ButtonGroup>
        <LeftButton>
          Order Now
        </LeftButton>
        <RigthButton>
          Demo Drive
        </RigthButton>
      </ButtonGroup>
    </Container>
  )
}

export default ModelsPage

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
  top: 12%;
  

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
    text-align: center;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  position: absolute;
  bottom: 10%;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
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

const RigthButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;