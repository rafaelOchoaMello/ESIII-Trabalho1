"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuidv4_1 = require("uuidv4");
var Client = /** @class */ (function () {
    function Client(name, email, phone) {
        this._id = uuidv4_1.uuid();
        this._name = name;
        this._email = email;
        this._phone = phone;
    }
    Object.defineProperty(Client.prototype, "id", {
        get: function () { return this._id; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "name", {
        get: function () { return this._name; },
        set: function (newName) {
            if (newName.length <= 3)
                throw Error('Novo nome deve conter mais de 3 caracteres.');
            else
                this._name = newName;
            ;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "email", {
        get: function () { return this._email; },
        set: function (newEmail) {
            if (!this.validateEmail(newEmail))
                throw Error('Formato de email inválido.');
            else
                this._email = newEmail;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "phone", {
        get: function () { return this._phone; },
        set: function (newPhone) {
            this._phone = newPhone;
        },
        enumerable: false,
        configurable: true
    });
    Client.prototype.validateEmail = function (email) {
        var validation = /\S+@\S+\.\S+/;
        return validation.test(email);
    };
    return Client;
}());
exports.default = Client;
