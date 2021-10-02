import styled from "styled-components";
import Loading from "../../components/Loading";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { tabletPro } from "../../responsive";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        console.log(data);
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return (
      <Container>
        <NoCocktail className="section-title">
          no cocktail to display
        </NoCocktail>
      </Container>
    );
  }else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = cocktail
  return (
    <Container>
      <Wrapper>
        <Top>
          <Link to="/">
            <BackHome>back home</BackHome>
          </Link>
          <Title>{name}</Title>
        </Top>
        <Bottom>
          <Left>
            <Image src={image} alt={name}></Image>
          </Left>
          <Right>
            <SingleWrapper>
              <Span>Name:</Span>
              <Text>{name}</Text>
            </SingleWrapper>
            <SingleWrapper>
              <Span>Category:</Span>
              <Text>{category}</Text>
            </SingleWrapper>
            <SingleWrapper>
              <Span>Info:</Span>
              <Text>{info}</Text>
            </SingleWrapper>
            <SingleWrapper>
              <Span>Glass:</Span>
              <Text>{glass}</Text>
            </SingleWrapper>
            <SingleWrapper>
              <Span>instructions:</Span>
              <Text>{instructions}</Text>
            </SingleWrapper>
            <SingleWrapper>
              <Span>ingredients:</Span>
              <Text>
                {ingredients.map((item, index) => {
                  return item ? <Ingredient key={index}> {item}</Ingredient> : null;
                })}
              </Text>
            </SingleWrapper>
          </Right>
        </Bottom>
      </Wrapper>
    </Container>
  );
}};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  
`;

const Wrapper = styled.div`
  width: 90%;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackHome = styled.button`
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

const Title = styled.h2`
  font-size: 40px;
  padding: 0;
  margin: 20px 0;
`;

const Bottom = styled.div`
  display: flex;
  margin-top: 20px;

  ${tabletPro({
    flexDirection: "column",
  })}
`;

const Left = styled.div`
  width: 300px;
  height: 300px;
  margin-right: 30px;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Right = styled.div`
`;

const SingleWrapper = styled.div`
  display: grid;
  grid-template-columns: 120px auto;
  margin: 10px 0;
`;

const Span = styled.span`
  letter-spacing: 1px;
  padding: 2px 5px;
  color: gray;
  font-weight: 600;
  margin-right: 5px;
`;

const Text = styled.span`
  margin: 0;
  padding: 2px 5px;
`;

const Ingredient = styled.span``

const NoCocktail = styled.h2`
font-size: 30px;
text-transform: capitalize;
letter-spacing: 2px;

`
export default SingleCocktail;
