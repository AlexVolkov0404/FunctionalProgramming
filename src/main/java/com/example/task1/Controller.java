package com.example.task1;

import com.google.gson.Gson;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    private static class Response {
        String id;
        String name;
    }

    private Gson gson = new Gson();

    @GetMapping(value = "/products/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    String getProduct(@PathVariable int id) {
        Response response = new Response();
        response.id = Integer.toString(id);
        response.name = id + " name";
        return gson.toJson(response);
    }
}
