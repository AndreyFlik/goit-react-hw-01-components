import Profile from "../Profile/Profile";
import Statistics from "../Statistics/Statistics";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile></Profile>
      <Statistics></Statistics>
      <FriendList></FriendList>
      <TransactionHistory></TransactionHistory>
    </>
  );
};

export default App;
