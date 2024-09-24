import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import sectionData from './section.json';

function Home() {
  return (
    //TODO: map으로 돌려서 좀 깔끔하게 만들자
    <Container>
      {sectionData.map((info,i) => {
        return (
          <Section 
            key={i}
            title={info.title}
            description={info.description}
            backgroundImg={info.backgroundImg}
            leftBtnText={info.leftBtnText}
            rightBtnText={info.rightBtnText}
          />
        );
      })}
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`;