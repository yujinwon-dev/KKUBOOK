import { Link } from 'react-router-dom';
import tw, { styled } from 'twin.macro';

const Nav = styled.nav`
  ${tw`fixed bottom-0`}
`;

const Ul = styled.ul`
  ${tw`flex justify-around pl-0 list-none`}
`;

function Navbar() {
  return (
    <Nav>
      <Ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/library">서재</Link>
        </li>
        <li>
          <Link to="/memo">메모</Link>
        </li>
        <li>
          <Link to="/recommendation">추천</Link>
        </li>
        <li>
          <Link to="/myinfo">내 정보</Link>
        </li>
      </Ul>
    </Nav>
  );
}

export default Navbar;
