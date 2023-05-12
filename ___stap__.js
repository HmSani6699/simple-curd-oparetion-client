/**
 * ------------------
 * Mongodb Connection
 * ------------------
 * 
 * 1. creat acount
 * 2. creat an user width passsword
 * 3. whatlist IP address
 * 4. database > connect > driver > Node > veiw full code
 * 5. change the password uri
 * 
 * ------------
 *    Creat POST 
 *  (server site)
 * 1. app.post('/user',async(req,res)=>{})
 * 2. Mack the function async to use await inside it
 * 3. Mack sure you use the express.json() middleware
 * 4. access data from the body: const user = req.body
 * 5. const result = await usersCollection.insertOne(user);
 * 6. res.send(result)
 * 
 * (client site)
 * 1. creat fetch
 * 2. add second parameter as an object
 * 3. provide methood: 'POST'
 * 4. add headers : {'Content-type': 'application/json'}
 * 5. add body JSON.Stringify(user)
 * 
 * ---------------
 * READ many
 * 1. create a cursor = userCollection.find()
 * 2. const result = await cursor.toArray();
 * 3. res.send(result)
 * 
 * 
 * --------------
 * DELETE 
 * (server site)
 * app.delete('/user/:id',async (req,res)=>{
            const id =req.params.id;
            console.log('please delete id',id);

            const query ={_id : new ObjectId(id)};
            const result = await usersCollection.deleteOne(query);
            res.send(result)
        })
 * 
 * Client site
 * 1. create dynamic url widt id
 * 2. mention the DELETE method
 * 
 * 
 * 
 * 
 * */ 