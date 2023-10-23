import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from './Profile/user.json';
import transactions from './TransactionHistory/transactions.json';
import friends from './FriendList/friends.json';
import data from './Statistics/data.json';

export const App = () => {
  return (
    <>
      <div>
        <div>
          <Profile {...user} />
          <Statistics title="Upload stats" stats={data} />
        </div>
        <FriendList friends={friends} />
      </div>
      <TransactionHistory items={transactions} />
    </>
  );
};