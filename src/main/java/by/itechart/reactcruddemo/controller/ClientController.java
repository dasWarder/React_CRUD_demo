package by.itechart.reactcruddemo.controller;

import by.itechart.reactcruddemo.model.Client;
import by.itechart.reactcruddemo.service.ClientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.List;


@RestController
@RequestMapping("/clients")
public class ClientController {

    private final ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }


    @GetMapping
    public ResponseEntity<List<Client>> getAllClients() {

        List<Client> clients = clientService.getAllClients();

        return new ResponseEntity<>(
                                    clients,
                                    HttpStatus.OK);
    }

    @PostMapping("/client")
    public ResponseEntity<Client> saveSingleClient(@RequestBody Client client) throws URISyntaxException {

        Client storedClient = clientService.saveClient(client);

        return new ResponseEntity<>(
                                    storedClient,
                                    HttpStatus.CREATED);
    }

    @GetMapping("/client/{id}")
    public ResponseEntity<Client> getSingleClientById(@PathVariable("id") Long clientId) throws Exception {

        Client clientById = clientService.getClientById(clientId);

        return new ResponseEntity<>(clientById, HttpStatus.OK);
    }

    @GetMapping("/client")
    public ResponseEntity<Client> getSingleClientByEmail(@ModelAttribute("email") String email)
                                                                                  throws Exception {

        Client clientByEmail = clientService.getClientByEmail(email);

        return new ResponseEntity<>(clientByEmail, HttpStatus.OK);
    }

    @PutMapping("/client/{id}")
    public ResponseEntity<Client> updateSingleClient(@RequestBody Client client,
                                                     @PathVariable("id") Long clientId) throws Exception {

        Client updatedClient = clientService.updateClient(clientId, client);

        return new ResponseEntity<>(updatedClient, HttpStatus.OK);
    }

    @DeleteMapping("/client/{id}")
    public ResponseEntity deleteSingleClient(@PathVariable("id") Long clientId) {

        clientService.deleteClient(clientId);

        return new ResponseEntity(HttpStatus.OK);
    }

}
