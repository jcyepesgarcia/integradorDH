package com.dh.booking.controller;

import com.dh.booking.model.Category;
import com.dh.booking.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    private CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @PostMapping
    public ResponseEntity<Category> saveCategory(@RequestBody Category category) {
        return ResponseEntity.ok(categoryService.saveCategory(category));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> categorySearch(@PathVariable("id") Long id) {
        Optional<Category> categoryToSearch= categoryService.searchCategory(id);
        if (categoryToSearch.isPresent()){
            return ResponseEntity.ok(categoryToSearch.get());
        }
        else{
            return ResponseEntity.notFound().build();
        }    }

    @PutMapping
    public ResponseEntity<String> categoryUpdate(@RequestBody Category category)  {
        Optional<Category> categoryToSearch = categoryService.searchCategory(category.getId());
        if (categoryToSearch.isPresent()) {
            categoryService.updateCategory(category);
            return ResponseEntity.ok("Category with id = " + category.getId() + " updated successfully");

        } else {
            return ResponseEntity.badRequest().body("Cannot update category with id= " + category.getId() + ",not found");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> categoryDelete(@PathVariable Long id) {
        categoryService.deleteCategory(id);
        return ResponseEntity.ok("Category with id " + id + " deleted successfully");
    }

    @GetMapping
    public ResponseEntity<List<Category>> listCategory() {
        return ResponseEntity.ok(categoryService.categoryList());
    }










}
