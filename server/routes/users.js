const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
uuidv4();
//mock database
users=[
    
]

router.get('/', (req,res)=>{
    res.send(users);
})
// add user info
router.post('/',(req, res) =>{
    const user=req.body;
    const userWithId= {...user, id:uuidv4()};
    users.push(userWithId);
    res.send(`${user.firstName} added. `);

});

// get info of a user from id
router.get('/:id', (req,res)=>{
    const {id} =req.params;
    const userInfo= users.find((user)=>user.id===id);
    res.send(userInfo);
});

// delete user by id

router.delete('/:id',(req,res)=>{
    const {id} =req.params;
    users=users.filter((user)=>user.id!=id);
    res.send(`${id} deleted. `);
});

// update user inf

router.patch('/:id',(req,res)=>{
    const {id} =req.params;
    const {firstName,lastName}=req.body;
    const user=users.find((user)=>user.id===id);

    

    if(firstName){
        user.firstName=firstName;
    }
    if(lastName){
        user.lastName=lastName;
    }
    res.send('updated');
});

module.exports = router;