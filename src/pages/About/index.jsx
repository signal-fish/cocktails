import styled from "styled-components";
import { mobile } from "../../responsive";

const About = () => {
  return (
    <Container>
      <Wrapper>
        <Title>about us</Title>
        <Text>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nisi
            error, odio aperiam adipisci culpa saepe. In commodi excepturi
            voluptate velit quidem voluptatibus blanditiis quos quae quibusdam
            numquam iusto, ipsa quo reprehenderit recusandae libero, reiciendis
            dignissimos adipisci autem corrupti ipsum praesentium architecto
            unde? Ad beatae magni itaque odit ipsam inventore.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, laboriosam, at vero similique facilis ab error qui,
            fugit officia iure aliquam nulla! At quasi tempore iusto qui et
            error ratione adipisci culpa labore modi, exercitationem provident
            ipsa magnam perferendis? Magnam, distinctio quam voluptas est
            explicabo aspernatur. Impedit quaerat reprehenderit perspiciatis
            voluptate qui dignissimos error at! Modi in, pariatur cumque cum
            reprehenderit aperiam veritatis facere nesciunt repudiandae quasi
            obcaecati dignissimos velit architecto aliquid ex ad earum deserunt.
            Ratione, veniam libero! Repudiandae?
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            aliquam, esse quaerat natus blanditiis vitae labore iste beatae
            quibusdam, est ullam nulla. Excepturi nobis maxime explicabo, rerum
            tempore aperiam eius, debitis inventore maiores enim obcaecati, ex
            labore accusantium nihil nemo!
          </Paragraph>
        </Text>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 70%;

  ${mobile({
    width: "100%"
  })}
`;

const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-size: 30px;
  margin: 30px 50px 0 50px;
  letter-spacing: 2px;

  ${mobile({
    margin: "30px 0 0 0",
  })}
`;

const Text = styled.div`
  margin: 20px 50px 0 50px;
  padding: 0;

  ${mobile({
    margin: "20px",
  })}
`;

const Paragraph = styled.p`
letter-spacing: 1px;
`;
export default About;
