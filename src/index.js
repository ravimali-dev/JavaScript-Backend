import connectDB from "./db/index.js";
// import express from "express"
// import mongoose from "mongoose"
// import { DB_NAME } from "./constants.js"

connectDB()












// const app = express();

//  app.get('/',(req, res) => {
//             res.send(`App is listening on port ${process.env.PORT}`)
//         });

// (async () =>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (error) => {
//             console.log("ERROR: ", error);
//             throw  error
//         })

       

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.log("MONGODB connection FAILED:", error)
//     }
// })()