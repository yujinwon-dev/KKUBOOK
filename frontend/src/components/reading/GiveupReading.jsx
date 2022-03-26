import tw, { styled } from 'twin.macro';
import { useNavigate } from 'react-router-dom';
import useStore from '../../stores/bottomSheet';
import walkingKkubook from '../../assets/walking_kkubook.png';

const GiveUpSheet = styled.div`
  width: 80%;
  text-align: center;
  margin: 0 auto;

  .kkubook-img {
    height: 120px;
    margin: 20px 0px;
  }

  .message {
    margin-bottom: 3rem;
    font-size: 15px;
  }

  .button-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 30px;

    button {
      width: 100%;
      height: 2.5rem;
      margin: 5px;
      border-radius: 10px;
      border: none;
      font-size: 15px;
    }
  }

  .go-home {
    ${tw`bg-light-gray`}
  }

  .go-recommendation {
    ${tw`bg-main-green`}
    color: white;
  }
`;

function GiveUpReading() {
  const hideBottomSheet = useStore(state => state.onDismiss);
  const navigate = useNavigate();

  return (
    <GiveUpSheet>
      <img
        className="kkubook-img"
        src={walkingKkubook}
        alt="worrying-kkubook"
      />
      <div className="message">
        <p>모든 책이 나와 맞을 수는 없어요.</p>
        <p>꾸북이가 나와 잘 맞는 책을 추천해 드릴게요.</p>
      </div>
      <div className="button-group">
        <button
          className="go-home"
          type="button"
          onClick={() => {
            navigate('/');
            hideBottomSheet();
          }}
        >
          홈으로 가기
        </button>
        <button
          className="go-recommendation"
          type="button"
          onClick={() => {
            navigate('/recommendation');
            hideBottomSheet();
          }}
        >
          책 추천 받기
        </button>
      </div>
    </GiveUpSheet>
  );
}

export default GiveUpReading;
