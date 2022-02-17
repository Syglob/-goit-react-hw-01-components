import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import Profile from './Profile/Profile.js';
import DataStats from './DataStats/DataStats.js';
import FriendsList from './Friends/FriendsList.js';
import TransactionHistory from './Transactions/Transactions.js';
//
export default function App() {
  return (
    <div className="app">
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <DataStats title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
