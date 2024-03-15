const { Router } = require('express');
const dataController = require('../controller/data.controller');
const router = new Router();

router.post('/data', dataController.createData);
router.get('/data/:login', dataController.getDataByUser);
router.put('/data', dataController.updatePersonData);
router.delete('/data/:login', dataController.deletePersonData);



module.exports = router;