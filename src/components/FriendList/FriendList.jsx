import styles from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline = false }) => {
  return (
    <li className={styles.item}>
      <span
        className={`${styles.status}  ${
          isOnline ? styles.online : styles.offline
        }`}
      ></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        );
      })}
    </ul>
  );
};