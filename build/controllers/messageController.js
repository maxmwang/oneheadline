"use strict";
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
exports.updateMessage = exports.getMessage = void 0;
const messageModel_1 = __importDefault(require("../models/messageModel"));
// @desc Get message
// @route GET /api/message
// @sends {object} message
function getMessage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const message = yield messageModel_1.default.findOne({});
        // for intiial creation of message
        // necessary for 'createdAt' to be set
        if (!message) {
            const initialMessage = messageModel_1.default.create({ message: 'Initial Message.' });
            return res.status(200).json(initialMessage);
        }
        return res.status(200).json(message);
    });
}
exports.getMessage = getMessage;
// @desc Update message
// @route PUT /api/message
// @params {string} req.body.message - required
// @sends {object} new message
function updateMessage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { message } = req.body;
        const newMessage = yield messageModel_1.default.findOneAndUpdate({}, {
            message,
            $inc: { changes: 1 },
        }, { new: true });
        return res.status(200).json(newMessage);
    });
}
exports.updateMessage = updateMessage;
