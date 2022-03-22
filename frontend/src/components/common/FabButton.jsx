import tw, { styled } from 'twin.macro';
import buttonImage from '../../assets/button-image.png';

const Button = styled.button`
  ${tw`flex justify-center items-center fixed w-[50px] h-[50px] bottom-[57px] right-5 bg-[#fff] cursor-pointer border-none shadow-lg z-[11]`}
  border-radius: 50%;
`;

const Img = styled.img`
  ${tw`block`}
  width: 90%;
  height: auto;
`;

function FabButton() {
  return (
    <Button>
      <Img src={buttonImage} alt="kkubook info" />
    </Button>
  );
}

export default FabButton;
