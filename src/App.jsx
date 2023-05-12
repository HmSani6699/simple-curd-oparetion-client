import './App.css'


function App() {
  const haldleFormSubmet = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch('http://localhost:5000/user',{
      method:'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    })

   

  }

  return (
    <>
      <form onSubmit={haldleFormSubmet}>
        <input type="text" name='name' placeholder='your name' />
        <br />
        <input type="email" name="email" id="" placeholder='your email' />
        <br />
        <input type="submit" value="Add user" />
      </form>
    </>
  )
}

export default App
