const { Router } = require('express');
const dogsRoute = require('./dogsRoute');
const temperamentsRoute = require('./temperamentsRoute');
const dogPost = require('./dogPost');
const deleteDog = require('./dogDelete');

const router = Router();

router.use("/dogs", dogsRoute);
router.use("/temperaments", temperamentsRoute);
router.use("/dogs", dogPost);
router.use("/dogs", deleteDog);

module.exports = router;
