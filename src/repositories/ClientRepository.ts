import Client from "../models/Clients";

export default class ClientRepository {
    private _clients: Array<Client>;

    constructor() {
        this._clients = [];
    }

    public findAll(): Array<Client> {
        return this._clients;
    }

    public findByCode(code: number): Client | undefined {
        return this._clients.find(client => client.code === code);
    }

    public save(name: string, email: string, phone: number, code:number): Client {
        this._clients.push(new Client(name, email, phone, code));
        return this._clients[this._clients.length - 1];
    }
}