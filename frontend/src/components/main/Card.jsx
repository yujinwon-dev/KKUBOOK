import tw, { styled } from 'twin.macro';

const CardWrapper = styled.div`
  background-color: transparent;
  padding: 0rem 0.5rem;
  height: 16rem;
`;

const StyledCard = styled.div`
  position: relative;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  width: 100%;
  height: 98%;
  box-shadow: 0px 0px 6px rgba(1, 1, 1, 0.2);
  background-color: white;
`;

function Card({ children }) {
  return (
    <CardWrapper>
      <StyledCard>{children}</StyledCard>
    </CardWrapper>
  );
}

export default Card;
