package com.carleton.CapstoneSystem.DTO;

import com.carleton.CapstoneSystem.models.Role;
import com.carleton.CapstoneSystem.models.WebUser;
import com.fasterxml.jackson.annotation.JsonProperty;

public class UserDTO {

    @JsonProperty
    private String firstname;

    @JsonProperty
    private String lastname;

    @JsonProperty
    private String username;

    @JsonProperty
    private String email;

    @JsonProperty
    private String token;

    @JsonProperty
    private Role role;

    @JsonProperty
    private long id;

    @JsonProperty
    private long identifier;

    public UserDTO() {

    }

    public UserDTO(WebUser user) {
        this.username = user.getUserName();
        this.id = user.getId();
        this.role = user.getRole();
        this.firstname = user.getFirstName();
        this.lastname = user.getLastName();
        this.identifier = user.getIdentifier();
        this.email = user.getEmail();
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}