const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/company'); // Directory to store files
    },
    filename: (req, file, cb) => {
      const ext = file.originalname.split('.').pop(); // Get the file extension
      const filename = `${file.originalname.split('.')[0]}_${Date.now()}.${ext}`;
      cb(null, filename);
    },
  });
  
  const upload = multer({ storage });
  

module.exports = {
    upload
}