package by.itechart.reactcruddemo.util.validation;

import by.itechart.reactcruddemo.exception.ClientNotFoundException;
import by.itechart.reactcruddemo.model.Client;
import javassist.NotFoundException;
import org.hibernate.ObjectNotFoundException;

import java.util.Optional;

public class OptionalValidator {

    public static <T> T validateOptional(Optional<T> optional, Class aClass) throws Exception {

        if(optional.isPresent()) {

            T receivedObject = optional.get();

            return receivedObject;
        }

        Exception validationEntityException = getValidationEntityException(aClass);

        throw validationEntityException;
    }



    private static Exception getValidationEntityException(Class aClass) {

        if (aClass.getName().equals(
                                    Client.class.getName())) {

            return new ClientNotFoundException("The client hasn't been found");

        } else {

            return new NotFoundException("The object hasn't been found");

        }
    }
}
