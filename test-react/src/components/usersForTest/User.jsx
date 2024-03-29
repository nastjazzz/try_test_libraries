const User = ({ user, onDelete }) => {
    return (
        <div id='user-elem'>
            {user.name}
            <button id='user-delete' onClick={() => onDelete(user.id)}>
                delete
            </button>
        </div>
    );
};

export default User;
