
import mysql from "mysql2/promise"



export default async function handler(req, res) {


 


    const connection= await mysql.createConnection({

 


host:"localhost",
database:"product",
user:"root",
password:"root",

    });

   

    try{
        const query= "SELECT * FROM product ";
    
        
        const values=[];
        const [data]= await connection.execute(query,values);
        connection.end();
  res.status(200).json({ product :data })
    }


    catch(error){

        res.status(500).json({ error: error.message});
    }
  
  }
  


  
  
