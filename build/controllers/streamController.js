"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const messageModel_1 = __importDefault(require("../models/messageModel"));
// @desc Stream message
// @route GET /api/stream
// @sends {object} message on change
function streamMessage(req, res) {
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();
    // flush the headers to establish SSE with client
    const changeStream = messageModel_1.default.watch().on('change', (change) => {
        console.log(change);
        res.write(JSON.stringify(change));
    });
    res.on('close', () => {
        changeStream.close();
        res.end();
    });
}
exports.default = streamMessage;
