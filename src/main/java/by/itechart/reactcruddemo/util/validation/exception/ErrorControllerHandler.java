package by.itechart.reactcruddemo.util.validation.exception;


import by.itechart.reactcruddemo.exception.ClientNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

import static by.itechart.reactcruddemo.util.validation.exception.ExceptionConverter.convertExceptionToExceptionResponse;

@RestController
@ControllerAdvice
public class ErrorControllerHandler {


    @ExceptionHandler(value =
                             { ClientNotFoundException.class })
    public ResponseEntity catchClientNotFoundException(ClientNotFoundException e) {

        ExceptionResponse exceptionResponse = convertExceptionToExceptionResponse(e);

        return new ResponseEntity(exceptionResponse, HttpStatus.NOT_FOUND);
    }
}
