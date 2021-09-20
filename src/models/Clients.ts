import { uuid } from "uuidv4";

export default class Client {
    private _id: string;
    private _name: string;
    private _email: string;
    private _phone: number;
    private _code: number;

    constructor(name: string, email: string, phone: number, code: number) {
        this._id = uuid();
        this._name = name;
        this._email = email;
        this._phone = phone;
        this._code = code;
    }

    get id() { return this._id; }
    get name() { return this._name; }
    get email() { return this._email; }
    get phone() { return this._phone; }
    get code() { return this._code; }

    set name(newName: string) {
        if (newName.length <= 3)
            throw Error('Novo nome deve conter mais de 3 caracteres.');
        else
            this._name = newName;;
    }

    set email(newEmail: string) {
        if (!this.validateEmail(newEmail))
            throw Error('Formato de email inválido.');
        else
            this._email = newEmail;
    }

    set phone(newPhone: number) {
        this._phone = newPhone
    }

    private validateEmail(email: string): boolean {
        let validation = /\S+@\S+\.\S+/;
        return validation.test(email);
    }
}