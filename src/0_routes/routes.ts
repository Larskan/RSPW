import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';
import bcrypt from 'bcrypt';

import { GameEndpoint } from '../1_endpoints/GameEndPoint';
import { LoginEndPoint } from '../1_endpoints/LoginEndPoint';
import { Player } from '../3_domain/Players';
import {createClient} from 'redis';

dotenv.config({ path: 'config/middleware.env' });
const routes = express();
routes.use(cors());
routes.use(bodyParser.json());
routes.use(express.static('public'));
const urlencode = bodyParser.urlencoded({ extended: true });

routes.get('/redis',async(req,res)=>{
    const client = createClient(); // Redis client
    // Step 1
    await client.connect();
    // Step 2
    await client.set('molly','1234'); // Set hashed password
    // Step 3
    const value = await client.get('molly');
    console.debug(value);
    // Step 4
    await client.disconnect();
    return res.status(201).json(value);
});

routes.post('/register',async(req,res)=>{
    // fetch request parameter(userID+pass) in body, send by postman
    const player:Player = req.body;
    // encrypt pass
    const salt = 17; // number of hashing rounds(should be saved in env-file)
    const hashedPsw:any = await bcrypt.hash(player.password,salt);

    console.debug("The hashed password is: "+hashedPsw);

    // insert player playerID and hashed pass in regis DB
    return res.status(201).json(player);

});

routes.get('/isPlayerNameAvailable/:uid',async(req,res)=>{
    // Task: If parameter(playerID) is not in existing players in regis DB
    // then proceeed with register, else ask user to find another ID
    return
});

routes.post('/logon',async(req,res)=>{
    try{
        // 1) fetch request param (user ID+pass) in body, send by postmman
        const player:Player = req.body; // using model interface
        // 2) verify player identity
        // a) is the playerID in the set of all players, else return no ID
        // b) lookup in the map to get hashed pass from DB
        const hashedPassword:string = "";
        const isCorrect:boolean = await bcrypt.compare(player.password,hashedPassword);
        console.debug((isCorrect) ? 'equal':'not equal');
        // 3) if user is accepted, return JWT token in a cookie, else not auth
        return res.status(200).json(player);

    } catch(e){
        console.error('post'+e);
    }
});

// The (so far) single route to the game...
routes.get('/play/:uid',  (req,res) => {
    return GameEndpoint.play(req,res);
});

// TestLogin
routes.get('/logon/:uid',(req,res) => {
    return LoginEndPoint.evaluate(req,res);
})

// The default (all other not valid routes)
routes.get('*', (req,res) =>{
     return res.status(404).send('no such route');
});

export {routes}

