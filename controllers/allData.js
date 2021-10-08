import express from 'express';
let user = []

export const getData = (req,res)=>{
    res.send(user)
}
export const createData = (req, res)=>{

    const data = req.body
   
    const id = user[user.length-1]?.id + 1 || 1;
   
    const userWithId = {...data, id: id}
    user.push(userWithId)
    res.send('data succesfully created')
}
export const getAllData = (req, res)=>{
    res.status(200).send(user)
}
export const getDataById =  (req, res)=>{
    const id  = req.params.id
    const found = user.find((data) => data.id === +id);
 if(found){
     res.send(found)
 }else{
     res.send('Please enter the correct id')
 }
}

export const deleteDataById =  (req, res)=>{
    const {id }= req.params;
    user = user.filter((data) => data.id !== id);
    res.send(`User with the id ${id} deleted successfully`);
}
export const updateData =  (req, res)=>{
    const id = req.params.id;
    const{ firstName, lastName, age} = req.body;
    const userUpdated = user.find((data)=> data.id == +id);
    console.log(userUpdated)
    if(firstName) userUpdated.firstName = firstName;
    if(lastName) userUpdated.lastName = lastName;
    if(age) userUpdated.age = age;
     
    res.send('data successfully updated')
 }