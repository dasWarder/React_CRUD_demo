package by.itechart.reactcruddemo;

import by.itechart.reactcruddemo.model.Client;
import by.itechart.reactcruddemo.service.ClientService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


@Component
public class Populator implements CommandLineRunner {

    private static final Client TEST_CLIENT_1 = new Client("alex", "smith", "alex@gmail.com");

    private static final Client TEST_CLIENT_2 = new Client("jack", "sparrow", "jack@gmail.com");

    private static final Client TEST_CLIENT_3 = new Client("arahorn", "arathorn", "arahorn@gmail.com");


    private final ClientService clientService;

    public Populator(ClientService clientService) {
        this.clientService = clientService;
    }

    @Override
    public void run(String... args) throws Exception {

        clientService.saveClient(TEST_CLIENT_1);
        clientService.saveClient(TEST_CLIENT_2);
        clientService.saveClient(TEST_CLIENT_3);
    }
}
