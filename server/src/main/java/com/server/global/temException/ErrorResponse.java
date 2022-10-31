package com.server.global.temException;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;

import javax.validation.ConstraintViolation;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Data
//@AllArgsConstructor
public class ErrorResponse {

    private int status;
    private String message;
    private List<FieldError> fieldErrors; // (1)
    private List<ConstraintViolationError> violationErrors;  // (2)

    private ErrorResponse(int status, String message){
        this.status = status;
        this.message = message;
    }
    // (3)
    private ErrorResponse(final List<FieldError> fieldErrors,
                          final List<ConstraintViolationError> violationErrors) {
        this.fieldErrors = fieldErrors;
        this.violationErrors = violationErrors;
    }

    // (4) BindingResult에 대한 ErrorResponse 객체 생성
    public static ErrorResponse of(BindingResult bindingResult) {
        return new ErrorResponse(FieldError.of(bindingResult), null);
    }

    // (5) Set<ConstraintViolation<?>> 객체에 대한 ErrorResponse 객체 생성
    public static ErrorResponse of(Set<ConstraintViolation<?>> violations) {
        return new ErrorResponse(null, ConstraintViolationError.of(violations));
    }

    public static ErrorResponse of(ExceptionCode exceptionCode) {
        return new ErrorResponse(exceptionCode.getStatus(),exceptionCode.getMessage());
    }

    public static ErrorResponse of(HttpStatus httpStatus) {
        return new ErrorResponse(httpStatus.value(), httpStatus.getReasonPhrase());
    }


    // (6) Field Error 가공
    @Getter
    public static class FieldError {
        private String field;
        private Object rejectedValue;
        private String reason;

        private FieldError(String field, Object rejectedValue, String reason) {
            this.field = field;
            this.rejectedValue = rejectedValue;
            this.reason = reason;
        }

        public static List<FieldError> of(BindingResult bindingResult) {
            final List<org.springframework.validation.FieldError> fieldErrors =
                    bindingResult.getFieldErrors();
            return fieldErrors.stream()
                    .map(error -> new FieldError(
                            error.getField(),
                            error.getRejectedValue() == null ?
                                    "" : error.getRejectedValue().toString(),
                            error.getDefaultMessage()))
                    .collect(Collectors.toList());
        }
    }

    // (7) ConstraintViolation Error 가공
    @Getter
    public static class ConstraintViolationError {
        private String propertyPath;
        private Object rejectedValue;
        private String reason;

        private ConstraintViolationError(String propertyPath, Object rejectedValue,
                                         String reason) {
            this.propertyPath = propertyPath;
            this.rejectedValue = rejectedValue;
            this.reason = reason;
        }

        public static List<ConstraintViolationError> of(
                Set<ConstraintViolation<?>> constraintViolations) {
            return constraintViolations.stream()
                    .map(constraintViolation -> new ConstraintViolationError(
                            constraintViolation.getPropertyPath().toString(),
                            constraintViolation.getInvalidValue().toString(),
                            constraintViolation.getMessage()
                    )).collect(Collectors.toList());
        }
    }
//    private int status;
//    private String message;
//    private List<FieldError> fieldErrors;// MethodArgumentNotValidException에러 정보 담는 변수. DTO멤버 변수 필드 유효성 검증 실패로 발생한 에러정보를 담습니다.
//    private List<ConstraintViolationError> violationErrors;// ConstraintViolationException으로 발생하는 에러 정보 담는 변수. URI변수 유효성 검증 실패로 발생한 에러 정보를 담습니다.
//
//    private ErrorResponse(int status, String message) {
//        this.status = status;
//        this.message = message;
//    }
//
//    // ErrorResponse클래스 생성자.
//    private ErrorResponse(final List<FieldError> fieldErrors,
//                          final List<ConstraintViolationError> violationErrors) {
//        this.fieldErrors = fieldErrors;
//        this.violationErrors = violationErrors;
//    }
//
//    // BindingResult에 대한 ErrorResponse객체 생성(MethodArgumentNotValidException에 대한 ErrorResponse객체를 생성)
//    public static ErrorResponse of(BindingResult bindingResult) {
//        return new ErrorResponse(FieldError.of(bindingResult), null);
//    }
//
//    // Set<ConstraintViolation<?>>객체에 대한 ErrorResponse객체 생성
//    public static ErrorResponse of(Set<ConstraintViolation<?>> violations) {
//        return new ErrorResponse(null, ConstraintViolationError.of(violations));
//    }
//
//    public static ErrorResponse of(ExceptionCode exceptionCode) {
//        return new ErrorResponse(exceptionCode.getStatus(), exceptionCode.getMessage());
//    }
//
//    public static ErrorResponse of(HttpStatus httpStatus) {
//        return new ErrorResponse(httpStatus.value(), httpStatus.getReasonPhrase());
//    }
//
    public static ErrorResponse of(HttpStatus httpStatus, String message) {
        return new ErrorResponse(httpStatus.value(), message);
    }
//
//    @Getter
//    public static class FieldError {// DTO멤버변수 유효성 검증에서 발생하는 에러 생성
//        private String field;
//        private Object rejectedValue;
//        private String reason;
//
//        private FieldError(String field, Object rejectedValue, String reason) {
//            this.field = field;
//            this.rejectedValue = rejectedValue;
//            this.reason = reason;
//        }
//
//        public static List<FieldError> of(BindingResult bindingResult) {
//            final List<org.springframework.validation.FieldError> fieldErrors =
//                    bindingResult.getFieldErrors();
//            return fieldErrors.stream()
//                    .map(error -> new FieldError(
//                            error.getField(),
//                            error.getRejectedValue() == null ?
//                                    "" : error.getRejectedValue().toString(),
//                            error.getDefaultMessage()))
//                    .collect(Collectors.toList());
//        }
//    }
//
//    // URI변수에 대한 에러 정보 생성
//    @Getter
//    public static class ConstraintViolationError {
//        private String propertyPath;
//        private Object rejectedValue;
//        private String reason;
//
//        private ConstraintViolationError(String propertyPath, Object rejectedValue,
//                                         String reason) {
//            this.propertyPath = propertyPath;
//            this.rejectedValue = rejectedValue;
//            this.reason = reason;
//        }
//
//        public static List<ConstraintViolationError> of(
//                Set<ConstraintViolation<?>> constraintViolations) {
//            return constraintViolations.stream()
//                    .map(constraintViolation -> new ConstraintViolationError(
//                            constraintViolation.getPropertyPath().toString(),
//                            constraintViolation.getInvalidValue().toString(),
//                            constraintViolation.getMessage()
//                    )).collect(Collectors.toList());
//        }
//    }


}

