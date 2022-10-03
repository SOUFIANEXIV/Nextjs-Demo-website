
import {query} from "../../lib/db"



export default async function handler(req, res) {

const id = req.body.id;
    try{
        const querySql= "SELECT * FROM product  WHERE id=?";
    
        
        const values=[id];
        const data= await query({query: querySql,values:values});
     
  res.status(200).json({ product :data });
    }


    catch(error){

        res.status(500).json({ error: error.message});
    }
  
  }
  


  
  
