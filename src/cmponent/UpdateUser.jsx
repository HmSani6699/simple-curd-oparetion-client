import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
    const loadedUser = useLoaderData()

    const haldleFormSubmet=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };
        console.log(user);
    }
    return (
        <div>
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