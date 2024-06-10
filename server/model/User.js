import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    iss:{
        type:String
    },
    rbg:{
        type:String
    },
    aud:{
        type:String
    },
    sub:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    email_verified:{
        type:String,
    },
    azp:{
        type:String,
    },
    name:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:true
    }, 
    given_name:{
        type:String,
        required:true
    },
    family_name:{
        type:String,
    },
    iat:{
        type:String,
    },
    iat:{
        type:String,
    },
    exp:{
        type:String,
    },
    jti:{
        type:String,
    },
})

const User = mongoose.model('User',userSchema)

export default User;
