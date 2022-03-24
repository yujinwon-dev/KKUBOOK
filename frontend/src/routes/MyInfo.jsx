import Navbar from '../components/common/Navbar';
import FabButton from '../components/common/FabButton';
import useStore from '../stores/user';

function MyInfo() {
  const userInfo = useStore(state => state.userInfo);
  const { kkubookComplete, isKkubook, nickname } = userInfo;
  return (
    <>
      <Navbar />
      <FabButton />
      <h1>MyInfo</h1>
      <p>{nickname}님</p>
    </>
  );
}

export default MyInfo;
