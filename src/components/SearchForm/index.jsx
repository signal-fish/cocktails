import styled from "styled-components"
import { useRef, useEffect } from "react";
import {useGlobalContext} from '../../context'
import { mobile } from "../../responsive";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchCocktail() {
    setSearchTerm(searchValue.current.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <FormControl>
            <Label htmlFor="name">search your favorite cocktail</Label>
            <Input
              type="text"
              name="name"
              id="name"
              ref={searchValue}
              onChange={searchCocktail}
            ></Input>
          </FormControl>
        </Form>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
display: flex;
justify-content: center;
height: 120px;
margin-top: 30px;
` 

const Wrapper = styled.div`
  width: 90%;

`;
const Form = styled.form``

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 30px;
`;

const Label = styled.label`
font-size: 30px;
text-transform: capitalize;
letter-spacing: 2px;

${mobile({
  fontSize: "20px"
})}
`

const Input = styled.input`
width: 100%;
height: 35px;
margin: 10px 0;
border: none;
border-radius: 5px;
background: #e7dfdf;
font-size: 25px;
padding: 5px 10px;
`

export default SearchForm
