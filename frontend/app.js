// Express app to display html files

let express = require("express");
let app = express();

app.set('view engine','ejs');

let URL = process.env.BACKEND_URL || 'http://127.0.0.1:8000/api';

app.get('/',async(req,res)=>{
    let options = {
        method: 'GET'
    }; 
    fetch(URL,options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:'+err))
    try{
        let response = await fetch(URL,options);
        let data = await response.json();
        res.render('index.ejs',{data:data.name});
    }catch(err){
        console.error('error:'+err);
        res.status(500).json({msg: 'Internal Server Error'});
    }
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})