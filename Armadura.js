"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Elemento_1 = __importDefault(require("./Elemento"));
var Elemento = /** @class */ (function (_super) {
    __extends(Elemento, _super);
    function Elemento() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Elemento;
}(Elemento_1.default.Elemento));
;
var Armadura = /** @class */ (function () {
    function Armadura(nome) {
        this.defesa = 100;
        this.durabilidade = 100;
        if (nome) {
            this.nome = nome;
        }
    }
    return Armadura;
}());
exports.default = Armadura;
