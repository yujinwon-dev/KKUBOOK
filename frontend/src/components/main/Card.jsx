import styled from 'styled-components';

const StyledCard = styled.div`
  position: relative;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  min-height: 240px;
  width: 85%;
  margin: 0px auto;
  box-shadow: 0px 0px 6px rgba(1, 1, 1, 0.2);
`;

function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}

export default Card;
