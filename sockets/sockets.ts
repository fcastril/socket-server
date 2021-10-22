import { Socket } from 'socket.io';
import { IMessage } from '../Interfaces/IMessage';
import socketIO from 'socket.io';

export const disconnect = ( client: Socket )=>{
    client.on('disconnect',()=>{
        console.log('Client disconnected!!!');
    })
}

export const message = ( client: Socket, io: socketIO.Server )=>{
    client.on('message', ( payload: IMessage )=>{
       console.log('Message Received', payload); 
       io.emit('message-new', payload );
    });
}