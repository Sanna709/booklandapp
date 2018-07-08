const Message = require('../../Sql_Script').Message
const route = require('express').Router()

route.post('/receive', (req, res) => {
    console.log("in msg receive ")
    console.log("body" + req.body)
    let obj = req.body
    let condition = {
        where: {
            ReceiverId: obj.myid
        },
        order: [
            ['id', 'DESC'],
        ],
    }
    Message.findAll(condition)
        .then((result) => {
            if (result.length === 0) {
                console.log("Not found")
                res.status(501).send("No Msg");
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

route.post('/sent', (req, res) => {
    console.log("in msg sent ")
    console.log("body" + req.body)
    let obj = req.body
    let condition = {
        where: {
            SenderId: obj.myid
        },
        order: [
            ['id', 'DESC'],
        ],
    }
  
    Message.findAll(condition)
        .then((result) => {
            if (result.length === 0) {
                console.log("Not found")
                res.status(501).send("No Msg");
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

route.post('/sendmsg', (req, res) => {
    console.log("in msg sendmsg");
    console.log("body" + req.body)
    let obj = req.body
    Message.create({
        Message: obj.Message,
        BookName:obj.BookName,
        SenderName: obj.SenderName,
        ReceiverName: obj.ReceiverName,
        SenderId: obj.SenderId,
        ReceiverId: obj.ReceiverId,
        SelectedBookId: obj.SelectedBookId
    }).then((user) => {
        console.log("added")
        res.status(200).send()
    }).catch((err) => {
        console.log(err)
        res.status(501).send("Could not send msg!!")
    })
})

exports = module.exports = route
