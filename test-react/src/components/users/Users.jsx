import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        <ul>
            {
                users.map((user) => (
                    <li key={user.id}>
                        <Link data-testid="user-item" to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default Users;