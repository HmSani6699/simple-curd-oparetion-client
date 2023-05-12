import { Link, useLoaderData } from "react-router-dom";

const UpdateUser = () => {
    const loadedUser = useLoaderData()

    const haldleFormSubmet=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updateUser = { name, email };
        console.log(updateUser);

        fetch(`http://localhost:5000/user/${loadedUser._id}`,{
            method:'PUT',
            headers:{
                   'content-type': 'application/json'
            },
            body:JSON.stringify(updateUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }
    return (
        <div>
            <Link to='/user'>User</Link>
            <h3>loadedUser user {loadedUser.name}</h3>
            <form onSubmit={haldleFormSubmet}>
                <input type="text" name='name' defaultValue={loadedUser?.name} />
                <br />
                <input type="email" name="email" id="" defaultValue={loadedUser?.email} />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateUser;