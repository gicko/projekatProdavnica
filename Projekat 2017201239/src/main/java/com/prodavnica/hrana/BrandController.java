package com.prodavnica.hrana;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@RestController
@RequestMapping("/brands")
@CrossOrigin
public class BrandController {
    @Autowired
    private BrandRepository brandRepository;

    @GetMapping
    public List<Brand> getAll() {
        return brandRepository.findAll();
    }

    @PostMapping
    public Brand create(@RequestBody Brand brand) {
        return brandRepository.save(brand);
    }
}