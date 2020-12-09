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
	"maxItems": 2,
	"items": 
	{
		type: 'object',
		properties: 
		{
			subject:
			{
				"type": "string",
				"enum":
				[
					"Алгебра",
					"Геометрия",
					"Math",
					"English"
				]
            },
            day:
            {
                "type": "string",
				"enum":
				[
					"Понедельник",
					"Вторник",
					"Среда",
                    "Четверг",
                    "Пятница"
				]
            }
		},
		required: ['day','subject']
	}
};


/* GET users listing. */
router.get('/', (req, res) => {

	jsf.resolve(schema).then(sample => {
		res.render('nextClass',{nextClass:sample});
	});
});

module.exports = router;
