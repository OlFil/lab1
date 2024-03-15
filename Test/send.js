const { Router } = require('express');
const router = Router();
let path = require('path');

let html;


router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/UI/index.html'));
 });


module.exports = router;
