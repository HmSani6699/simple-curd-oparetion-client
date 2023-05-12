import { Link, useLoaderData } from "react-router-dom";

const User = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <Link to='/'>Home</Link>
            <h2>All user number : {users.length}</h2>
            <div>
                {
                    users.map(user=><p key={user._id}>{user.name} : {user.email}</p>)
                }
            </div>
        </div>
    );
};

export default User;