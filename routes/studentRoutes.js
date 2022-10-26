const express           = require('express');
const { studentHome, addStudent, addStudentForm, singleShow, updateData, updateFormData, deleteData }   = require('../controllers/studentController');
const create_multer = require('../middleware/multer');

//init router
const router = express.Router();

//create student router
router.route("/").get(studentHome)
router.route("/add-student").get(addStudent).post(create_multer,addStudentForm)
router.route("/:id").get(singleShow)
router.route("/delete/:id").get(deleteData)
router.route("/update/:id").get(updateData).post(create_multer,updateFormData)


//export router
module.exports = router;