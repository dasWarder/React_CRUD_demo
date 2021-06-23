package by.itechart.reactcruddemo.service;

import by.itechart.reactcruddemo.model.Client;

import java.util.List;

public interface ClientService {

    Client saveClient(Client client);

    Client updateClient(Long clientId, Client clientBody) throws Exception;

    Client getClientById(Long clientId) throws Exception;

    Client getClientByEmail(String email) throws Exception;

    void deleteClient(Long clientId);

    List<Client> getAllClients();
}
