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
// GET request for one dog. 
router.get('/dogs/:id', dog_controller.dog_detail);
// for a specific dog. 
exports.dog_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await dog.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
};  


//Handle dog update form on PUT. 
exports.dog_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await dog.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.dog_type)  
               toUpdate.dog_type = req.body.dog_type; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.color) toUpdate.size = req.body.color; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
    if(req.body.checkboxsale) toUpdate.sale = true; 
else toUpdate.same = false; 
 
}; 
 
module.exports = router;