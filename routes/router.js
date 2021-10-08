import express from "express";

import { createData, deleteDataById , getAllData, getData, updateData } from '../controllers/allData.js';

const router = express.Router();

router.get('/user', getAllData);
router.get('/user/:id', getData);
router.delete('/user/:id', deleteDataById);
router.post('/user/post', createData);
router.patch('/user/:id', updateData);

export  default router;

 