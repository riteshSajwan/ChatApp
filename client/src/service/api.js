import axios from 'axios'

const url = 'http://localhost:8000';

export const addUser  = async(data)=>{
    try{
       const response = await axios.post(`${url}/add`,data);
       return response.data;
    }catch(error){
        console.log("Error in API",error.message)
    }
}
export const getUsers  = async()=>{
    try{
       const response = await axios.get(`${url}/users`);
       return response.data;
    }catch(error){
        console.log("Error in API",error.message)
    }
}
export const setConversation  = async(data)=>{
    try{
       const response = await axios.post(`${url}/conversation/add`,data);
       return response.data;
    }catch(error){
        console.log("Error in API",error.message)
    }
}

export const getConversation = async(data)=>{
    try{
        const response = await axios.post(`${url}/conversation/get`,data);
       return response.data;
    }catch(err){
        console.log("Error while calling ",err.message)
    }
}
export const newMessage = async(data)=>{
    try{
        const response = await axios.post(`${url}/message/add`,data);
       return response.data;
    }catch(err){
        console.log("Error while calling ",err.message)
    }
}

export const getMessage = async(id)=>{
    try{
        const response = await axios.get(`${url}/message/get/${id}`);
       return response.data;
    }catch(err){
        console.log("Error while calling ",err.message)
    }
}
export const uploadFile = async(data)=>{
    try{
        const response = await axios.post(`${url}/file/upload`,data);
       return response;
    }catch(err){
        console.log("Error while calling ",err.message)
    }
}

// mongodb+srv://ritesh:Ritesh@8958@cluster0.twtnrjz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0