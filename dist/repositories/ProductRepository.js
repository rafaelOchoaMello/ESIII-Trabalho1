"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = __importDefault(require("../models/Product"));
var ProductRepository = /** @class */ (function () {
    function ProductRepository() {
        this.products = [];
    }
    ProductRepository.prototype.findAll = function () {
        return this.products;
    };
    ProductRepository.prototype.findByCode = function (code) {
        return this.products.find(function (p) { return p.code === code; });
    };
    //Alteração :: Removido objeto instanciado em variável, o mesmo agora
    //é instanciando diretamento dentro do push do array.
    ProductRepository.prototype.save = function (_a) {
        var buyPrice = _a.buyPrice, code = _a.code, description = _a.description, lovers = _a.lovers, sellPrice = _a.sellPrice, tags = _a.tags;
        this.products.push(new Product_1.default({
            buyPrice: buyPrice,
            code: code,
            description: description,
            lovers: lovers,
            sellPrice: sellPrice,
            tags: tags,
        }));
        return this.products[this.products.length - 1];
    };
    return ProductRepository;
}());
exports.default = ProductRepository;
