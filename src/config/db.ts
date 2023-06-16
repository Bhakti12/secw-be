import mongoose from "mongoose";
import mongodb from "mongodb";
import * as dotenv from "dotenv";

export function DatabaseConnection(){
    dotenv.config();

    const DBstring:string = process.env.DB;

    mongoose.connect(DBstring).then(()=>{
        console.log('connected sucessfully!!')
    }).catch(err=>{
        console.log(err)
    });
}