const express = require('express');
const app = express();
const multer = require('multer');

app.set("view engine", "ejs");
app.set("views", "./views");

app.get('/', (req, res) => {
    res.render('template');
})

// Khai báo nơi file sẽ được lưu trữ sau khi tải lên
var storage = multer.diskStorage({

    //Chỉ ra thư mục sẽ lưu file:
    destination: (req, file, cb) => {
        cb(null, './upload'); // upload là thư mục để lưu chữ file
    }
    //Đặt tên cho file:
    ,
    filename: (req, file, cb) => {

        cb(null, file.originalname);
    }

})

var upload = multer({ storage: storage });

app.post('/upload', upload.array('file', 100), (req, res) => {
    console.log(req.file);
    res.send('UPLOAD FILE thành công!!!');
});

app.listen(3000, () => {

    console.log("Đường dẫn thành công!!!");

})

