import styled from "styled-components";
import Cocktail from "../Cocktail";
import Loading from '../Loading'
import { useGlobalContext } from "../../context";
import { mobile, laptop } from "../../responsive";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <Container>
        <NoCocktails>no cocktails matched your search criteria</NoCocktails>
      </Container>
    );
  }

  return (
    <Container>
      <Wrapper>
        <Title>Cocktails</Title>
        <Cocktails>
          {cocktails.map((item) => {
            return <Cocktail key={item.id} {...item} />;
          })}
        </Cocktails>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 70%;

  ${mobile({height: "auto"})}
`;

const Wrapper = styled.div`
  width: 90%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 35px;
  letter-spacing: 2px;

  ${mobile({
    marginTop: "0"
  })}
`;

const Cocktails = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 50px;
  overflow: scroll;

  ${laptop({
    gridTemplateColumns: "repeat(2, 1fr)",
  })}

  ${mobile({
    gridTemplateColumns: "repeat(1, 1fr)",
  })}
`;

const NoCocktails = styled.h2`
font-size: 30px;
text-transform: capitalize;
letter-spacing: 2px;
`

export default CocktailList;
