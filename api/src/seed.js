"use strict";
// seed.js
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prismaClient_1 = require("./prismaClient");
var tarotCards = [
    { name: 'The Fool' },
    { name: 'The Magician' },
    { name: 'The High Priestess' },
    { name: 'The Empress' },
    { name: 'The Emperor' },
    { name: 'The Hierophant' },
    { name: 'The Lovers' },
    { name: 'The Chariot' },
    { name: 'Strength' },
    { name: 'The Hermit' },
    { name: 'Wheel of Fortune' },
    { name: 'Justice' },
    { name: 'The Hanged Man' },
    { name: 'Death' },
    { name: 'Temperance' },
    { name: 'The Devil' },
    { name: 'The Tower' },
    { name: 'The Star' },
    { name: 'The Moon' },
    { name: 'The Sun' },
    { name: 'Judgment' },
    { name: 'The World' },
    { name: 'Ace of Wands' },
    { name: 'Two of Wands' },
    { name: 'Three of Wands' },
    { name: 'Four of Wands' },
    { name: 'Five of Wands' },
    { name: 'Six of Wands' },
    { name: 'Seven of Wands' },
    { name: 'Eight of Wands' },
    { name: 'Nine of Wands' },
    { name: 'Ten of Wands' },
    { name: 'Page of Wands' },
    { name: 'Knight of Wands' },
    { name: 'Queen of Wands' },
    { name: 'King of Wands' },
    { name: 'Ace of Cups' },
    { name: 'Two of Cups' },
    { name: 'Three of Cups' },
    { name: 'Four of Cups' },
    { name: 'Five of Cups' },
    { name: 'Six of Cups' },
    { name: 'Seven of Cups' },
    { name: 'Eight of Cups' },
    { name: 'Nine of Cups' },
    { name: 'Ten of Cups' },
    { name: 'Page of Cups' },
    { name: 'Knight of Cups' },
    { name: 'Queen of Cups' },
    { name: 'King of Cups' },
    { name: 'Ace of Swords' },
    { name: 'Two of Swords' },
    { name: 'Three of Swords' },
    { name: 'Four of Swords' },
    { name: 'Five of Swords' },
    { name: 'Six of Swords' },
    { name: 'Seven of Swords' },
    { name: 'Eight of Swords' },
    { name: 'Nine of Swords' },
    { name: 'Ten of Swords' },
    { name: 'Page of Swords' },
    { name: 'Knight of Swords' },
    { name: 'Queen of Swords' },
    { name: 'King of Swords' },
    { name: 'Ace of Pentacles' },
    { name: 'Two of Pentacles' },
    { name: 'Three of Pentacles' },
    { name: 'Four of Pentacles' },
    { name: 'Five of Pentacles' },
    { name: 'Six of Pentacles' },
    { name: 'Seven of Pentacles' },
    { name: 'Eight of Pentacles' },
    { name: 'Nine of Pentacles' },
    { name: 'Ten of Pentacles' },
    { name: 'Page of Pentacles' },
    { name: 'Knight of Pentacles' },
    { name: 'Queen of Pentacles' },
    { name: 'King of Pentacles' },
];
function seed() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, tarotCards_1, card;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _i = 0, tarotCards_1 = tarotCards;
                    _a.label = 1;
                case 1:
                    if (!(_i < tarotCards_1.length)) return [3 /*break*/, 4];
                    card = tarotCards_1[_i];
                    return [4 /*yield*/, prismaClient_1.prisma.tarotCard.create({
                            data: card,
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    console.log('Tarot cards seeded successfully.');
                    return [2 /*return*/];
            }
        });
    });
}
seed()
    .catch(function (error) {
    console.error('Error seeding tarot cards:', error);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prismaClient_1.prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
