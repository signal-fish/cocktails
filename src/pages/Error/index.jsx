import styled from "styled-components"
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container>
      <Wrapper>
        <Text>oops! it's a dead end</Text>
        <Link to="/">
          <BackToHome>back home</BackToHome>
        </Link>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
display: flex;
justify-content: center;
margin-top: 30px;
`

const Wrapper = styled.div`
width: 70%;
display: flex;
flex-direction: column;
align-items: center;
`

const Text = styled.h1`
font-size: 30px;
text-transform: capitalize;
letter-spacing: 2px;
`

const BackToHome = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 22px;
  background: lightblue;
  transition: 0.3s;
  letter-spacing: 1px;

  &:hover {
    background: lightskyblue;
    color: rgba(0, 0, 0, 0.6);
  }
`;


export default Error

