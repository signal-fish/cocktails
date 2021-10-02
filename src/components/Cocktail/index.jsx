import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile, tablet } from "../../responsive";

const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <>
      <Container>
          <Top>
            <Image src={image} alt={name}></Image>
          </Top>
          <Bottom>
            <Name>{name}</Name>
            <Glass>{glass}</Glass>
            <Info>{info}</Info>
            <Link to={`/cocktail/${id}`}>
              <Details>details</Details>
            </Link>
          </Bottom>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 330px;
  height: 534px;
  background: #4f95c4;
  margin: 0 30px;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  ${tablet({
    width: "280px",
    height: "453px",
  })}

  ${mobile({
    width: "100%",
    height: "auto",
    margin: 0,
  })}
`;


const Top = styled.div`
  width: 100%;
  height: 330px;

  ${tablet({
    height: "280px",
  })}

  ${mobile({
    height: "auto",
  })}
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const Bottom = styled.div`
margin-top: 20px;

${mobile({
  marginTop: "10px"
})}
`;

const Name = styled.h3`
  margin: 5px 0 3px 10px;
  font-size: 26px;
  text-transform: capitalize;
  letter-spacing: 2px;
`;

const Glass = styled.h4`
  margin: 0 0 3px 10px;
  text-transform: capitalize;
  letter-spacing: 2px;
  font-size: 18px;
`;

const Info = styled.p`
  margin: 0 0 5px 10px;
  color: lightgrey;
  text-transform: capitalize;
`;

const Details = styled.button`
  margin: 0 5px 5px 10px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  border-radius: 2px;
  padding: 5px 8px;
  letter-spacing: 3px;
  background: lightblue;
  transition: 0.3s;

  &:hover {
    background: lightskyblue;
  }

  ${mobile({
    marginBottom: "20px"
  })}
`;
export default Cocktail;
