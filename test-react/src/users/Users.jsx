import { useEffect, useState } from "react";
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, [])
    
    const loadUsers = async () => {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(resp.data);
    }

    return (
        <div>
            {users.map((user) => <div key={user.id} data-testid="user-item">{user.name}</div>)}
        </div>
    )
}

export default Users;