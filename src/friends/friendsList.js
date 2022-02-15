import PropTypes from 'prop-types';

function FriendsList ({friends} ){
    return( <ul className="friends-list">
        {friends.map(friend => (<li className="item" key = {friend.id}>
     <span className="status">{friend.isOnline }</span>
   <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
    <p className="name">{friend.name }</p>
 </li>))}
    </ul>)
};


export default FriendsList;

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        avatar: PropTypes.string,
        isOnline: PropTypes.bool,
    }))
};
