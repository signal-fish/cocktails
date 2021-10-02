import styled from "styled-components";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { mobile } from "../../responsive";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo src={logo} alt="logo"></Logo>
          </Link>
        </Left>
        <Right>
          <Links>
            <Link to="/" style={{ textDecoration: "none" }}>
              <LinkItem>home</LinkItem>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <LinkItem>about</LinkItem>
            </Link>
          </Links>
        </Right>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
background: lightblue;
  height: 70px;
  display: flex;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  ${mobile({
    height: "100px"
  })}
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile({
    width: "100%",
    flexDirection: "column",
  })}
`;

const Left = styled.div``;

const Logo = styled.img`
  cursor: pointer;
  transition: 0.3s;
  width: 250px;

  &:hover {
    opacity: 0.6;
  }

${mobile({
  marginTop: "10px"
})}
`;

const Right = styled.div``;

const Links = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  font-size: 22px;
  padding: 0;
`;

const LinkItem = styled.li`
  text-transform: capitalize;
  margin: 0 20px;
  cursor: pointer;
  transition: 0.3s;
  letter-spacing: 1px;
  color: #000;

  &:hover {
    opacity: 0.6;
  }

  ${mobile({
  })}
`;

export default Navbar;
