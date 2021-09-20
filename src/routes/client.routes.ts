import { response, Router } from "express";
import ClientRepository from "../repositories/ClientRepository";
import CreateClientService from "../services/CreateClientService";

const clientRouter = Router();
const clientRepository = new ClientRepository();

clientRouter.get('/', (req, res) => {
    res.json(clientRepository.findAll());
})

clientRouter.post('/', (req, res) => {
    const { name, email, phone, code } = req.body;

    try {
        const service = new CreateClientService(clientRepository);
        const client = service.execute(name, email, phone, code);
        return res.status(201).json(client);
    } catch (error) {
        return res.status(400).json({ Erro: error.message })
    }
})

clientRouter.get('/:code', (req, res) => { 
    const code = parseInt(req.params.code);

    try{
        const client = clientRepository.findByCode(code);    
        if(client)
            return res.status(201).json(client);
        else
            return res.status(404).json({Erro: 'Cliente não encontrado.'});    
    }catch (error) {
        return res.status(400).json({ Erro: error.message })
    }
})

export default clientRouter;