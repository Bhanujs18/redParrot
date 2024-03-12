import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
display: flex;
justify-content:center;
`
const Heading = styled.p`

color: #EE103E;
font-size: 1.6rem;
display:flex;
text-align: center;
`
const ContainerHead = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 95%;
`

const SectionHeading = ({title}) => {
  return (
    <Wrapper>
    <ContainerHead>
      <Heading>{title}</Heading>
      <Heading>View More</Heading>
      </ContainerHead>
    </Wrapper>
  )
}

export default SectionHeading