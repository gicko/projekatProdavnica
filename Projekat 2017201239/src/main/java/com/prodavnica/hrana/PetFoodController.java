package com.prodavnica.hrana;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@RestController
@RequestMapping("/petfoods")
@CrossOrigin
public class PetFoodController {
    @Autowired
    private PetFoodRepository petFoodRepository;

    @GetMapping
    public List<PetFood> getAll() {
        return petFoodRepository.findAll();
    }

    @PostMapping
    public PetFood create(@RequestBody PetFood petFood) {
        return petFoodRepository.save(petFood);
    }
}