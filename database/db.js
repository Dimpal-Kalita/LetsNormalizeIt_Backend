import mongoose, { connect } from 'mongoose';


const Connection = async (username,password) =>{
     const URL=`mongodb+srv://${username}:${password}@cluster0.dmqgdll.mongodb.net/?retryWrites=true&w=majority`;
     try{
          await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
          console.log("atchese conect ho gaya");
     }catch(error){
          console.log("Error while connecting to the database", error);
     }
}
export default Connection;