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
  "maxItems": 4,
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
            email: {
            type:'string',
            faker: 'internet.email'
           },
           phone: {
            type:'string',
            chance: 'phone'
           }
    },
     required: ['name', 'sName', 'email', 'phone']
  }
};


/* GET users listing. */
router.get('/', (req, res) => {

	jsf.resolve(schema).then(sample => {
	  res.render('information', {information:sample});
	});
});



module.exports = router;
