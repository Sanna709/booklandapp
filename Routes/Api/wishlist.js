const Wishlist = require('../../Sql_Script').Wishlist
const route = require('express').Router()

route.post('/get', (req, res) => {
    console.log("in wishlist get")
    console.log("body" + req.body)
    let obj = req.body
    let condition = {
        where: {
            userTableId: obj.id,
        }
    }
    Wishlist.findAll(condition)
        .then((result) => {
            if (result.length === 0) {
                console.log("Not found")
                res.status(501).send("No User");
            }
            else {
                console.log("found")
                res.status(200).send(result);
            }
        })
        .catch((err) => {
            console.log("Not found")
            res.send("Fail")
        })

})

route.post('/post', (req, res) => {
    console.log("in wishlist post");
    console.log("body" + req.body)
    let obj = req.body

    let condition = {
        where: {
            userTableId: obj.myid,
            bookTableBookId: obj.bookid
        }
    }
    Wishlist.findAll(condition)
        .then((result) => {
            if (result.length === 0) {
                Wishlist.create({
                    userTableId: obj.myid,
                    bookTableBookId: obj.bookid
                }).then((user) => {
                    res.status(200).send()
                }).catch((err) => {
                    res.status(501).send("fail")
                })
            }
            else {
                console.log("user already present")
                res.send("fail");
            }
        })
        .catch((err) => {
            console.log("Not found")
            res.send("Fail")
        })


})

exports = module.exports = route
