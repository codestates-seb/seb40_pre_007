package com.server.global.security.properties;

public interface JwtProperties {
    String SECRET = "28d93268-a80b-4594-918b-5926a79a49ed";
    int EXPIRATION_TIME = 1000 * 60 * 60;
    String TOKEN_PREFIX = "Bearer";
    String HEADER_STRING = "Authorization";
}
