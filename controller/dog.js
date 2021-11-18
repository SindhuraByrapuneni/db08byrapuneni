var dog = require('../models/dog'); 
 
// List of all dogs 
exports.dog_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: dog list'); 
}; 
 
// for a specific dog. 
exports.dog_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: dog detail: ' + req.params.id); 
}; 
 
// Handle dog create on POST. 
exports.dog_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: dog create POST'); 
}; 
 
// Handle dog delete form on DELETE. 
exports.dog_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: dog delete DELETE ' + req.params.id); 
}; 
 
// Handle dog update form on PUT. 
exports.dog_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: dog update PUT' + req.params.id); 
}; 

//VIEWS 
// Handle a show all view 
exports.dog_view_all_Page = async function(req, res) { 
    try{ 
        thedog = await dog.find(); 
        res.render('dog', { title: 'dog Search Results', results: thedog }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// List of all dog 
exports.dog_list = async function(req, res) { 
    try{ 
        thedog = await dog.find(); 
        res.send(thedog); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
// Handle dog delete on DELETE. 
exports.dog_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await dog.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
};
// Handle a show one view with id specified by query 
exports.dog_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await dog.findById( req.query.id) 
        res.render('dogdetail',  
{ title: 'dog Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a dog. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.dog_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('dogcreate', { title: 'dog Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};  
// Handle building the view for updating a dog. 
// query provides the id 
exports.dog_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await dog.findById(req.query.id) 
        res.render('dogupdate', { title: 'dog Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};
// Handle a delete one view with id from query 
exports.dog_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await dog.findById(req.query.id) 
        res.render('dogdelete', { title: 'dog Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};  
 