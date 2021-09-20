import Client from "../models/Clients";
import ClientRepository from "../repositories/ClientRepository";

export default class CreateClientService {
    private repository: ClientRepository;

    constructor(repository: ClientRepository) {
        this.repository = repository;
    }

    public execute(
        name: string,
        email: string,
        phone: number,
        code: number
    ): Client {
        if (this.repository.findByCode(code)) {
            throw Error('Cliente já cadastrado');
        } else {
            const newClient = this.repository.save(name, email, phone, code);
            return newClient;
        }
    }
}
