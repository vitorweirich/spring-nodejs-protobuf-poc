package com.github.vitorweirich.spring.nodejs.protobuf.poc.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.github.vitorweirich.spring.nodejs.protobuf.poc.Course;
import com.github.vitorweirich.spring.nodejs.protobuf.poc.CourseRepository;

@RestController
public class TestController {

	@Autowired
    CourseRepository courseRepo;

	@GetMapping("/courses/{id}")
	Course customer(@PathVariable Integer id) {
        return courseRepo.getCourse(id);
    }
}
