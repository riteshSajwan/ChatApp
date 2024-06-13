import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    conversationId:{
        type:Array
    },
    senderId:{
        type:String
    },
    receiverId:{
        type:String
    },
    text:{
        type:String
    },
    type:{
        type:String
    },
},{
    timestamps:true
})

const Message = mongoose.model('Message',MessageSchema)
export default Message;