import tw, { styled } from 'twin.macro';
import { useNavigate } from 'react-router-dom';

const StyledHeader = styled.header`
  ${tw`text-main-gray bg-white`}
  position: fixed;
  max-width: 500px;
  width: 100%;
  top: 0px;
  display: flex;
  z-index: 10;

  .title {
    margin: auto 0px;
  }

  .m-5 {
    margin: 8px;
  }

  button {
    margin-left: auto;
  }
`;

function Header({ title, children }) {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="m-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        width={25}
        height={25}
        onClick={() => navigate(-1)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <p className="title">{title}</p>
      {children}
    </StyledHeader>
  );
}

export default Header;
