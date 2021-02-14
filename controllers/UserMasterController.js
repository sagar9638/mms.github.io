'use strict';

const UserMasterData = require('../data/UserMaster');

const getUsers = async (req, res, next) =>{
    try {
        const getUserData = await UserMasterData.getUsers();
        res.send(getUserData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

const AddUser = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const CreateUserData = await UserMasterData.AddUser(reqData);
        res.send(CreateUserData);
    } catch (error) {
        res.status(400).send(error.message);
        
    }
}

const ValidUserLogin = async (req, res, next) =>{
    try {
        const reqData = req.body;
        const _ValidUserLogin = await UserMasterData.ValidLogin(reqData);
        res.send(_ValidUserLogin);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

// const getRegistrationById = async (req, res, next) =>{
//     try {
//         const ID = req.params.ID;
//         const oneRegistration = await registrationData.getRegistrationById(ID);
//         res.send(oneRegistration);
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// }  

// const AddRegistrationData = async (req, res, next) =>{
//     try {
//         const ID = req.params.ID;
//         const oneRegistration = await registrationData.getRegistrationById(ID);
//         res.send(oneRegistration);
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// } 

module.exports = {
    getUsers,
    AddUser,
    ValidUserLogin
}