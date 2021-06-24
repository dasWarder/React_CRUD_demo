package by.itechart.reactcruddemo.service;

import by.itechart.reactcruddemo.model.Client;
import by.itechart.reactcruddemo.repository.ClientRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import static by.itechart.reactcruddemo.util.validation.OptionalValidator.validateOptional;
import static by.itechart.reactcruddemo.util.validation.ParamsValidator.validateInputParams;

@Slf4j
@Service
public class ClientServiceImpl implements ClientService {

    private final ClientRepository clientRepository;

    public ClientServiceImpl(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @Override
    public Client saveClient(Client client) {

        validateInputParams(client);
        log.info("Storing a single client");

        Client storedClient = clientRepository.save(client);

        return storedClient;
    }

    @Override
    public Client updateClient(Long clientId, Client clientBody) throws Exception {

        validateInputParams(clientId, clientBody);
        log.info("Updating a single client with ID = {}", clientId);

        Optional<Client> possibleClient = clientRepository.findById(clientId);
        Client validatedClient = validateOptional(possibleClient, Client.class);
        Client clientWithValidId = setClientBodyId(validatedClient.getId(), clientBody);

        Client storedUpdatedClient = clientRepository.save(clientWithValidId);

        return storedUpdatedClient;
    }

    @Override
    public Client getClientById(Long clientId) throws Exception {

        log.info("Receiving a single client by ID = {}", clientId);
        validateInputParams(clientId);

        Optional<Client> possibleClientById = clientRepository.findById(clientId);
        Client validatedClient = validateOptional(possibleClientById, Client.class);

        return validatedClient;
    }

    @Override
    public Client getClientByEmail(String email) throws Exception {

        log.info("Receiving a single client by email = {}", email);
        validateInputParams(email);

        Optional<Client> possibleClientByEmail = clientRepository.getClientByEmail(email);
        Client validatedClient = validateOptional(possibleClientByEmail, Client.class);

        return validatedClient;
    }

    @Override
    public void deleteClient(Long clientId) {

        log.info("Removing a single client by ID = {}", clientId);
        validateInputParams(clientId);

        clientRepository.deleteById(clientId);
    }

    @Override
    public List<Client> getAllClients() {

        log.info("Receiving a list of all clients");

        List<Client> clients = (List) clientRepository.findAll();

        return clients;
    }

    private Client setClientBodyId(Long clientId, Client clientBody) {

        Client clientToUpdate = clientBody;
        clientToUpdate.setId(clientId);

        return clientToUpdate;
    }
}
