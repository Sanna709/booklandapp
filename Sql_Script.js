const Sequelize = require('sequelize')

const db = new Sequelize('sql12245621','sql12245621','x7ynvxlm5p', {
    host:'sql12.freesqldatabase.com',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
})

const User = db.define('userTable', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    College: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    PhoneNo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Address: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})




const Book = db.define('bookTable', {
    BookId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Seller: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    BookName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    AuthorName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Photo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Condition: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
})
  
Book.belongsTo(User);

const Wishlist = db.define('wishlist', {
})
        
Wishlist.belongsTo(User);
Wishlist.belongsTo(Book);

const Message = db.define('messageTable', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Message: {
        type: Sequelize.STRING(50000),
        allowNull: false,
    },
    SenderName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ReceiverName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    BookName :{
        type: Sequelize.STRING,
        allowNull: false,
    }
})

Message.belongsTo(User, {as: 'Sender'});
Message.belongsTo(User, {as: 'Receiver'});
Message.belongsTo(Book, {as: 'Selected'});

db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error(err))

exports = module.exports = {
    User, Book, Wishlist,Message
}