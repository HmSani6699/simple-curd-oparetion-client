import { Link, useLoaderData } from "react-router-dom";

const User = () => {
    const users = useLoaderData();
    console.log(users);

    const handleDelte = _id => {
        console.log(_id);
        fetch(`http://localhost:5000/user/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }

    return (
        <div>
            <Link to='/'>Home</Link>
            <h2>All user number : {users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name} : {user.email} : {user._id}<button
                        onClick={() => handleDelte(user._id)}
                    >X</button></p>)
                }
            </div>
        </div>
    );
};

export default User;