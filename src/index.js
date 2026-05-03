const express = require('express');
const {PORT} = require('./config/serverConfig');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const setupAndStartServer = async ()=>{

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api', routes);
    app.listen(PORT,async()=>{
        console.log(`Server is running on port ${PORT}`);
    })
}
setupAndStartServer()