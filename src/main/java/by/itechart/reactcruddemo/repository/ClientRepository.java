package by.itechart.reactcruddemo.repository;

import by.itechart.reactcruddemo.model.Client;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface ClientRepository extends CrudRepository<Client, Long> {

    Optional<Client> getClientByEmail(String email);
}
