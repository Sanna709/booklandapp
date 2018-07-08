const Book = require('../../Sql_Script').Book
const route = require('express').Router()
const multer = require('multer')
const bodyParser = require('body-parser')
const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name: 'dp8x0d1mj',
    api_key: '259176128371547',
    api_secret: 'RX9Gv-8DKeAHmCG-BGhJicN_8Qs'
});

// const Op = Sequelize.Op

var store = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.' + file.originalname);
    }
});

var upload = multer({ storage: store });

route.post('/alllisting', (req, res) => {
    console.log("in alllisting")
    console.log(req.body)
    let obj = req.body
    let condition = {
        order: [
            ['BookId', 'DESC'],
        ],
        where: {
            Price: {
                $between: [0, obj.max],
            },
            Condition: {
                $in: obj.con
            },
            BookName: {
                $like: "%" + obj.book + "%",
            },
            AuthorName: {
                $like: "%" + obj.author + "%",
            }
        }
    }
    Book.findAll(condition)
        .then((result) => {
            console.log("found")
            res.send(result)
        })
        .catch((err) => {
            console.log("Not found")
            res.send("Fail")
        })

})


route.post('/detaillisting', (req, res) => {
    console.log("in detaillisting")
    console.log(req.body)
    let obj = req.body
    let condition = {
        where: {
            BookId: obj.BookId,
        }
    }
    Book.findAll(condition)
        .then((result) => {
            console.log("found")
            res.send(result)
        })
        .catch((err) => {
            console.log("Not found")
            res.send("Fail")
        })

})

route.post('/upload', upload.single('Image'), (req, res) => {
    console.log("in upload")
    let obj
    cloudinary.uploader.upload(req.file.path,(result)=> {
        console.log(result)
        res.send(result)
    });
   
})



route.post('/add', (req, res) => {
    console.log("in add");
    console.log(req.body)
    let obj = req.body
    console.log(obj)

    let condition = {
        where: {
            Seller: obj.Seller,
            BookName: obj.BookName,
            AuthorName: obj.AuthorName,
            Condition: obj.condition,
            Price: obj.Price
        }
    }
    Book.findAll(condition)
        .then((result) => {
            if (result.length === 0) {
                Book.create({
                    Seller: obj.Seller,
                    BookName: obj.BookName,
                    AuthorName: obj.AuthorName,
                    Condition: obj.condition,
                    Price: obj.Price,
                    Photo: obj.Photo,
                    userTableId: obj.userTableId
                }).then((user) => {
                    res.status(200).send()
                }).catch((err) => {
                    res.status(501).send("Could not add new listing")
                })
            }
            else {
                console.log("You have already add the same listing")
                res.send("fail");
            }
        })
        .catch((err) => {
            console.log("Not found")
            res.send("Fail")
        })


})


// route.get('/findByCondition/', (req, res) => {
//     console.log("find By Price")
//     let obj = req.body
//     // const Op = Sequelize.Op;
//     let condition = {
//         where: {
//             Condition:obj.Condition
//         }
//     }
//     Book.findAll(condition)
//         .then((result) => {
//             console.log("found")
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log("Not found")
//             res.send("Fail")
//         })

// })

// route.get('/findByName/', (req, res) => {
//     console.log("find By Price")
//     let obj = req.body
//     // const Op = Sequelize.Op;
//     let condition = {
//         where: {
//             Condition:obj.Condition
//         }
//     }
//     Book.findAll(condition)
//         .then((result) => {
//             console.log("found")
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log("Not found")
//             res.send("Fail")
//         })

// })

exports = module.exports = route
