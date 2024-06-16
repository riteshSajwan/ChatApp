import grid from "gridfs-stream"
import mongoose from 'mongoose'

const url = "http://localhost:8000"

const conn = mongoose.connection;
let gfs,gridFsBucket;
conn.once('open',()=>{
    gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db,{
        bucketName:'fs'
    });
    gfs = grid(conn.db,mongoose.mongo)
    gfs.collection('fs')

})


export const uploadFile = async(req,res)=>{
    
    try{
        if(!req.file){
            return res.status(404).json("FIle not found")
        }
    
        const imageURL = `${url}/file/${req.file.filename}`
    
        return res.status(200).json(imageURL);
    }catch(err){
        return res.status(500).json(err.message)
    }
}
// export const getFile = async(req,res)=>{
    
//     try{
//         const file = await gfs.files.findOne({filename:req.params.filename})
//         const readStream = gridFsBucket.openDownloadStream(file._id)
//         readStream.pipe(res);
//     }catch(err){
//         return res.status(500).json(err.message)
//     }
// }
export const getFile = async (req, res) => {
    try {   
        const file = await gfs.files.findOne({ filename: req.params.filename });
        // const readStream = gfs.createReadStream(file.filename);
        // readStream.pipe(response);
        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(res);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}