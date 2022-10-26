const studentConnection = require('../models/studentCollection')


/**
 * @desc show All student Home page
 * @name GET  /
 * @access public
 */
const studentHome = async (req,res)=>{

        const stu_data = await studentConnection.find();
        res.render('index',{stu_data});

}
/**
 * @desc Add new student page
 * @name GET  /add-student
 * @access public
 */
const addStudent = (req,res)=>{
    res.render('addStudent');

}
/**
 * @desc Add new student form
 * @name POST  /add-student
 * @access public
 */
const addStudentForm = async (req,res)=>{

    //get data to form
       const {name,email,cell,gender,location} = req.body

       console.log(req.file);

       const data = {
        name,email,cell,gender,location,
        photo: req.file ? req.file.filename : 'avatar.png'
       }

       // data submit mongodb
       try {

        const dataCreateMongo = await studentConnection.create(data)
        .then(res=>console.log(`Data submitted mongodb`))
        .catch(error=>console.log(`Data not submitted mongodb`))

       } catch (error) {
        console.log(error.message);
       }

       res.redirect('/')
       

}
/**
 * @desc View single student
 * @name GET  /id
 * @access public
 */
const singleShow = async (req,res)=>{

    const id = req.params.id

    const single_stu_data = await studentConnection.findById({_id : id});

    if(single_stu_data){
         res.render('singleShow',{single_stu_data})
    }
    else{
        res.status(404).send(`404 Not Found!`)
    } 
}
/**
 * @desc Update single student data
 * @name GET  /update/id
 * @access public
 */
const updateData = async (req,res)=>{

    const id = req.params.id
    console.log(id);

    const update_stu_data = await studentConnection.findById({_id : id});

    if(update_stu_data){
         res.render('updateData',{update_stu_data})
    }
    else{
        res.status(404).send(`404 Not Found!`)
    } 
}
/**
 * @desc Update and get form single student data
 * @name POST  /update/id
 * @access public
 */
const updateFormData = async (req,res)=>{

    const {name,email,cell,gender,location} = req.body
    const id = req.params.id
    
    const update_data = {
        name,email,cell,gender,location,
        photo : req.file.filename
    }

    const update_stu_data = await studentConnection.findByIdAndUpdate({_id : id},update_data);

    if(update_stu_data){
         res.redirect('/')
    }
    else{
        res.status(404).send(`404 Not Found!`)
    } 
}
/**
 * @desc delete student data
 * @name GET  /id
 * @access public
 */
const deleteData = async (req,res)=>{

    const id = req.params.id
   

    const delete_stu_data = await studentConnection.findByIdAndDelete({_id : id});
         res.redirect('/')

}




//export controller
module.exports = {
    studentHome,
    addStudent,
    addStudentForm,
    singleShow,
    updateData,
    updateFormData,
    deleteData
}