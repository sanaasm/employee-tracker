const router = require('express').Router();
const db = require('../../connection');
// This route uses async/await with '.catch()' for errors
// and no HTTP status codes
router.get('/', async (req, res) => {
	
  
  // db.query('SELECT * FROM role', (err, results) => {
	// 	if (err) { console.log(err); } else {
	// 		console.table(results);

	// 		return res.json(results);
	// 	}
	// })

  db.query('SELECT role.id,role.title,role.salary,department.name AS department FROM role INNER JOIN department ON department.id = role.department_id', (err, results) => {
		if (err) { console.log(err); } else {
			console.table(results);

			return res.json(results);
		}
	})


});

// This route uses async/await with try/catch for errors
// along with HTTP status codes
router.post('/', async (req, res) => {
  try {
    // 200 status code means the request is successful
    res.status(200).json(req);
  } catch (err) {
    // 400 status code means the server could not understand the request
    res.status(400).json(err);
  }
});

module.exports = router;
