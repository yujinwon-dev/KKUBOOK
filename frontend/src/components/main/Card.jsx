import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: azure;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  min-height: 240px;
  width: 85%;
  margin: 0px auto;
`;

function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}

export default Card;
