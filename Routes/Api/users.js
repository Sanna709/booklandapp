const User = require('../../Sql_Script').User
const route = require('express').Router()

route.post('/login', (req, res) => {
    console.log("in login")
    // console.log("query" + req.query)
    console.log("body" + req.body)
    let obj=req.body
    let condition = {
        where: {
            Username: obj.user,
            Password: obj.password
        }
    }
    User.findAll(condition)
        .then((result) => {
            if(result.length===0)
            {
                console.log("Not found")
                res.status(501).send("No User");
            }
            else{
                console.log("found")
                // console.log(result)
                res.status(200).send(result);
            }
        })
        .catch((err) => {
            console.log("Not found")
            res.send("Fail")
        })

})

route.post('/getname', (req, res) => {
    console.log("in getname")
    console.log("body" + req.body)
    let obj=req.body
    let condition = {
        where: {
            id: obj.id,
        }
    }
    User.findAll(condition)
        .then((result) => {
            if(result.length===0)
            {
                console.log("Not found")
                res.status(501).send("No User");
            }
            else{
                console.log("found")
                res.status(200).send(result);
            }
        })
        .catch((err) => {
            console.log("Not found")
            res.send("Fail")
        })

})

route.post('/signup', (req, res) => {
    console.log("in signup");
    // console.log("query" + req.query)
    console.log("body" + req.body)
    let obj = req.body

    let condition = {
        where: {
            Username: obj.user,
        }
    }
    User.findAll(condition)
        .then((result) => {
            if(result.length===0)
            {
                User.create({
                    Username: obj.user,
                    Password: obj.password,
                    Email: obj.email,
                    Address: obj.address,
                    PhoneNo: obj.phoneno,
                    College: obj.college
                }).then((user) => {
                    res.status(200).send()
                }).catch((err) => {
                    res.status(501).send("Could not create a new user")
                })
            }
            else{
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
