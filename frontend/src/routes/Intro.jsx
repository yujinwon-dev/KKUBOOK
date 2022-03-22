import React from 'react';
import tw, { styled } from 'twin.macro';
import happyKkubook from '../assets/happy-kkubook.png';
import kakaologin from '../assets/kakaologin.png';

const Page = styled.div`
  ${tw`flex flex-col items-center`}
  height: 100vh;
`;

const Img = styled.img`
  ${tw`block mb-3`}
  width: 150px;
  height: auto;
`;

const LoginBtn = styled.button`
  ${tw`border-none bg-transparent cursor-pointer`}
`;

const { Kakao } = window;

function Intro() {
  function handleLogin() {
    console.log('login');
  }
  return (
    <Page>
      <Img src={happyKkubook} alt="Kkubook character" />
      <h1>꾸북</h1>
      <LoginBtn type="button" onClick={() => handleLogin()}>
        <img src={kakaologin} alt="kakao login" />
      </LoginBtn>
    </Page>
  );
}

export default Intro;
