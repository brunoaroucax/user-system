"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const port = process.env.PORT;
const server = (0, express_1.default)();
server.set('view engine', 'ejs');
server.set('views', path_1.default.join(__dirname, 'views'));
server.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// Rotas
server.listen(port, () => {
    console.log(`🔥 Server is running, http://localhost:${port}`);
});
