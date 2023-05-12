import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const User = () => {
    const loadUsers = useLoaderData();

    const [users, setUsers] = useState(loadUsers)

    const handleDelte = _id => {
        console.log(_id);
        fetch(`http://localhost:5000/user/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const newUser = users.filter(user => user._id !== _id);
                    setUsers(newUser)
                }
            })
    }

    return (
        <div>
            <Link to='/'>Home</Link>
            <h2>All user number : {users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name} : {user.email} : {user._id}

                        <Link to={`/user/${user._id}`}>
                            <button>Update</button>
                        </Link>

                        <button
                            onClick={() => handleDelte(user._id)}
                        >X</button></p>)
                }
            </div>
        </div>
    );
};

export default User;