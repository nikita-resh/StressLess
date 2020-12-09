const express = require('express');
const router = express.Router();
const faker = require('faker');
const chance = new require('chance').Chance();
const jsf = require('json-schema-faker');
jsf.extend('chance', () => chance);
jsf.extend('faker', () => faker);


var schema = {
  "type": "array",
  "minItems": 1,
  "maxItems": 1,
  "items":{
    type:'object',
    properties: {
           name: {
              type: 'string',
              faker: 'name.firstName'
           },
           sName: {
              type: 'string',
              faker: 'name.lastName'
           },
           status: {
              "type": "string",
              "pattern": "online|offline"

           }   
    },
     required: ['name','sName','status']
  }
};


/* GET users listing. */
router.get('/', (req, res) => {

	jsf.resolve(schema).then(sample => {
	  res.render('activity', {activity:sample});
	});
});



module.exports = router;
