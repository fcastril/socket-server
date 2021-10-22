import express from 'express';
import { SERVER_PORT } from '../global/environment';
import socketIO from 'socket.io';
import http from 'http';
import * as socket from '../sockets/sockets';

export default class Server {
    
    private static _instance: Server;

    public app: express.Application;
    public port: number;

    public io: socketIO.Server;
    private httpServer: http.Server;

    private constructor() {
        this.app = express();   
        this.port = SERVER_PORT;  
        
        this.httpServer = new http.Server( this.app );
        this.io = new socketIO.Server( this.httpServer, { cors: { origin: true, credentials: true } } );

        this.listenSockets();
    }

    // Patron singleton
    public static get instance() {
        return this._instance || ( this._instance = new this() );
    }

    private listenSockets() {
        console.log('listen connections - sockets ...');
        
        this.io.on('connection', client=> {
            console.log('Client Connected!!!');

            socket.message( client, this.io );

            socket.disconnect( client );
        })
        

    }

    start( callback: any ) {
        this.httpServer.listen( this.port, callback );
    }
}