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
       		 amount: {
       		 	type:'integer',
       		 	"minimum":10,
       		 	"maximum":50,
       		 	"exclusiveMinimum":true
       		 }
       		 
		},
		 required: ['amount']
	}
};


/* GET users listing. */
router.get('/', (req, res) => {

	jsf.resolve(schema).then(sample => {
	  res.send(sample);
	});
});

module.exports = router;
