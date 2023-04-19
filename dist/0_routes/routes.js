"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const GameEndPoint_1 = require("../1_endpoints/GameEndPoint");
const LoginEndPoint_1 = require("../1_endpoints/LoginEndPoint");
const redis_1 = require("redis");
dotenv.config({ path: 'config/middleware.env' });
const routes = (0, express_1.default)();
exports.routes = routes;
routes.use((0, cors_1.default)());
routes.use(bodyParser.json());
routes.use(express_1.default.static('public'));
const urlencode = bodyParser.urlencoded({ extended: true });
routes.get('/redis', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = (0, redis_1.createClient)(); // Redis client
    // Step 1
    yield client.connect();
    // Step 2
    yield client.set('molly', '1234'); // Set hashed password
    // Step 3
    const value = yield client.get('molly');
    console.debug(value);
    // Step 4
    yield client.disconnect();
    return res.status(201).json(value);
}));
routes.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // fetch request parameter(userID+pass) in body, send by postman
    const player = req.body;
    // encrypt pass
    const salt = 17; // number of hashing rounds(should be saved in env-file)
    const hashedPsw = yield bcrypt_1.default.hash(player.password, salt);
    console.debug("The hashed password is: " + hashedPsw);
    // insert player playerID and hashed pass in regis DB
    return res.status(201).json(player);
}));
routes.get('/isPlayerNameAvailable/:uid', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Task: If parameter(playerID) is not in existing players in regis DB
    // then proceeed with register, else ask user to find another ID
    return;
}));
routes.post('/logon', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // 1) fetch request param (user ID+pass) in body, send by postmman
        const player = req.body; // using model interface
        // 2) verify player identity
        // a) is the playerID in the set of all players, else return no ID
        // b) lookup in the map to get hashed pass from DB
        const hashedPassword = "";
        const isCorrect = yield bcrypt_1.default.compare(player.password, hashedPassword);
        console.debug((isCorrect) ? 'equal' : 'not equal');
        // 3) if user is accepted, return JWT token in a cookie, else not auth
        return res.status(200).json(player);
    }
    catch (e) {
        console.error('post' + e);
    }
}));
// The (so far) single route to the game...
routes.get('/play/:uid', (req, res) => {
    return GameEndPoint_1.GameEndpoint.play(req, res);
});
// TestLogin
routes.get('/logon/:uid', (req, res) => {
    return LoginEndPoint_1.LoginEndPoint.evaluate(req, res);
});
// The default (all other not valid routes)
routes.get('*', (req, res) => {
    return res.status(404).send('no such route');
});
//# sourceMappingURL=routes.js.map