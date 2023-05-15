const router = require('express').Router();
router.get('/', (req,res)=> {
    res.json('browser works')
});

module.exports =router;