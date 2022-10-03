
import mysql from "mysql2/promise"



export  async function query({query, values =[]}) {


 


    const connection= await mysql.createConnection({

 


host:"localhost",
database:"product",
user:"root",
password:"root",

    });

   

    try{
   
        const [results]= await connection.execute(query,values);
   
 return results
    }


    catch(error){

        res.status(500).json({ error: error.message});
    }
  
  }
  


  
  
