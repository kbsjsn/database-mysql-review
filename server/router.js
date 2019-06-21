const router = require('express').Router();
const controller = require('./controller');

//create endpoint... from server, app.use(/api, router) .. so domain name/api/name will give access to these functions
router
    .route('/name')
    .get(controller.get)        //exporting get & post as props of obj 'controller' so name them with .get, .post
    .post(controller.post);

router
    .route('/id/:id')      // at the colon, when parsing endpoint, you will grab the id
    .delete(controller.delete)                   //params grabs everything after slash at the endpoint
    .put(controller.update);

module.exports = router;
