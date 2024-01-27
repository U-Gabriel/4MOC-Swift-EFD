"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoundModule = void 0;
const common_1 = require("@nestjs/common");
const round_service_1 = require("./round.service");
const round_controller_1 = require("./round.controller");
const mongoose_1 = require("@nestjs/mongoose");
const round_schema_1 = require("./schemas/round.schema");
let RoundModule = class RoundModule {
};
exports.RoundModule = RoundModule;
exports.RoundModule = RoundModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{
                    name: round_schema_1.Round.name,
                    schema: round_schema_1.RoundSchema
                }]),
        ],
        controllers: [round_controller_1.RoundController],
        providers: [round_service_1.RoundService],
    })
], RoundModule);
//# sourceMappingURL=round.module.js.map