const { Router } = require('express');
const rolesController = require('../controller/roles.controller');
const router = new Router();

router.post('/role', rolesController.createPersonRole);
router.get('/role/:login', rolesController.getPersonRole);
router.put('/role', rolesController.updatePersonRole);
router.delete('/role/:login', rolesController.deletePersonRole);




module.exports = router;