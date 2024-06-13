import express from 'express'

const route = express.Router();

import { addUser ,getUsers} from '../controllers/user-controller.js';
import { getConversation, newConversation } from '../controllers/conversation-controller.js';
import { getMessages, newMessage } from '../controllers/message-controller.js';


route.post('/add',addUser);
route.get('/users',getUsers);
route.post('/conversation/add',newConversation);
route.post('/conversation/get',getConversation);
route.post('/message/add',newMessage);
route.get('/message/get/:id',getMessages);

export default route;