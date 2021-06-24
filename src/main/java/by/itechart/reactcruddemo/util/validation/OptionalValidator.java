package by.itechart.reactcruddemo.util.validation;

import by.itechart.reactcruddemo.exception.ClientNotFoundException;
import by.itechart.reactcruddemo.model.Client;
import javassist.NotFoundException;

import java.util.Optional;

public class OptionalValidator {

    public static final String CLIENT_NOT_FOUND_EXCEPTION_MSG = "The client hasn't been found";

    public static final String OBJECT_NOT_FOUND_EXCEPTION_MSG = "The object hasn't been found";


    public static <T> T validateOptional(Optional<T> optional, Class aClass) throws Exception {
        Exception validationEntityException = getValidationEntityException(aClass);

        return optional.orElseThrow(() -> validationEntityException);
    }



    private static Exception getValidationEntityException(Class aClass) {

        if (aClass.getName().equals(
                                    Client.class.getName())) {

            return new ClientNotFoundException(CLIENT_NOT_FOUND_EXCEPTION_MSG);

        } else {

            return new NotFoundException(OBJECT_NOT_FOUND_EXCEPTION_MSG);

        }
    }
}
