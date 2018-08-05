var express        =         require("express");
var bodyParser     =         require("body-parser");
var mysql           =         require('mysql');
var app            =         express();
const hbs = require('hbs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine','hbs');

app.get('/',(req,res) => {
    res.send('hi');
})

app.get('/signin',(req,res) => {
    res.render('signin.hbs');
})


app.get('/signup',(req,res) => {
    res.render('signup.hbs');
})



var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "demo"
});
var inc=1;
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var body=null;


});


app.post('/signin',function(req,res){
    var body=req.body;
    var vemail = body.email;
    var vpassword = body.password;
    var sql=null;
    console.log(vemail +" "+vpassword);
    con.query("SELECT * FROM User WHERE email = '"+vemail+"' and password='"+vpassword+"'", function (err, result) {
        if (err) throw err;
        console.log(result);
        //if(result)
    });
});

app.post('/signup',function(req,res){
    body = req.body;
    console.log(body);

    var vid=inc;
    inc=inc+1;
    var vname=body.fname+body.lname;
    var vemail=body.email;
    var vmobile=body.mobileno;
    var vphoto=null;
    var vpassword=body.password;

    var sql = "INSERT INTO User (id,name,email,mobile,photo,password) VALUES ('"+vid+"','"+vname+"','"+vemail+"','"+vmobile+"','"+vphoto+"','"+vpassword+"')";

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});



app.listen(3101,function(){
    console.log("Started on PORT 3000");
})


//http.createServer('/login', function (req, res) {
//res.writeHead(200, {'Content-Type': 'text/plain'});
//console.log('root url hit');
//res.end('Hello qwewerwrw!');

//sql = 'select * from contacts'

//out = ''
//console.log('hi');
//con.connect(function(err) {
//if (err) throw err;
//console.log("Connected!");
//con.query(sql, function (err, result) {
//if (err) throw err;
//result.forEach(element => {
// out+= ( element.id + ' ' + element.name + ' ' + element.phone + '<br>')
//console.log(element)
//});
//res.end(out)
// console.log("Result: " + result);
//});
// });


//}).listen(9000);