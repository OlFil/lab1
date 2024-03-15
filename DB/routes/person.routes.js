const { Router } = require('express');
const personController = require('../controller/person.controller');
const router = new Router();

router.post('/person', personController.createPerson);
router.get('/person', personController.getPersons);
router.get('/person/:login', personController.getOnePerson);
router.put('/person', personController.updatePerson);
router.delete('/person/:login', personController.deletePerson);




module.exports = router;