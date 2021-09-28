const moongoose = require('mongoose');

moongoose.connect(process.env.DB_CNN, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.log(err))