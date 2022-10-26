const multer = require('multer');
const path = require('path')

//create storage
const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,path.join(__dirname,'../public/images/stu_img/'))
    },
    filename : (req,file,cb)=>{
        cb(null, Date.now() +'_'+ Math.floor(Math.random()*1000000) +'_'+ file.originalname)
    }
});

//create multer
const create_multer = multer({storage}).single('stu_img')


module.exports = create_multer;