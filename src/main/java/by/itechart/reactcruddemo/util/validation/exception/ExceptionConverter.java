package by.itechart.reactcruddemo.util.validation.exception;

public class ExceptionConverter {

    public static <T extends Exception> ExceptionResponse convertExceptionToExceptionResponse(T exception) {

        ExceptionResponse exceptionResponse = new ExceptionResponse();

        exceptionResponse.setName(exception.getClass().getName());
        exceptionResponse.setMessage(exception.getMessage());

        return exceptionResponse;
    }
}
