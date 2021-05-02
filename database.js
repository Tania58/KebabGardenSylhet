
// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: ""
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

var mysql=require('mysql');



var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"kebabgarden"
});


 con.connect(function(error){
     if(error){
         console.log("connection failed");
     }
     else{
         console.log("Connected!");
     }
 });

 con.query('SELECT *FROM menu',function(err,rows,fields){
     if(err) throw err;
     console.log(rows[0]);
 });

 con.end();

 function selectData(con){
   let SQLquery="SELECT *From 'menu'";
   con.query( SQLquery,function(error,result) {
     if(error){
       console.log("Failed")
     }
     else{
       console.log(result)
     }
     
   })
 }

 