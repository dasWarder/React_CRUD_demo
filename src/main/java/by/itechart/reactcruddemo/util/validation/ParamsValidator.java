package by.itechart.reactcruddemo.util.validation;

import java.util.Arrays;

import static org.springframework.util.Assert.notNull;

public class ParamsValidator {

    public static void validateInputParams(Object ... params) {

        Arrays.stream(params)
                .forEach(param -> {
                    notNull(param, "The param must be not null");
                });
    }
}
