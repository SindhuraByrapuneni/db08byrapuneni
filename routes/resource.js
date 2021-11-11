var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controller/api'); 
var dog_controller = require('../controller/dog'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// dog ROUTES /// 
 
// POST request for creating a dog.  
router.post('/dog', dog_controller.dog_create_post); 

 
// DELETE request to delete dog. 
router.delete('/dog/:id', dog_controller.dog_delete); 
 
// PUT request to update dog. 
router.put('/dog/:id', 
dog_controller.dog_update_put); 
 
// GET request for one dog. 
router.get('/dog/:id', dog_controller.dog_detail); 
 
// GET request for list of all dog items. 
router.get('/dog', dog_controller.dog_list); 
 
module.exports = router;