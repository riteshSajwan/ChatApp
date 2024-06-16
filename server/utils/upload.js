//middleware
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';


const storage = new GridFsStorage({
    url:'mongodb+srv://ritesh:Ritesh@cluster0.twtnrjz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.mimeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 