const express = require('express')
const router = express.Router();
const {list,show,create,remove} = require( "./controllers");


router.get('/users', list)
router.get('/:id', show)
router.post('/', create)
router.put('/:id', replace)
router.delete('/:id', remove)
