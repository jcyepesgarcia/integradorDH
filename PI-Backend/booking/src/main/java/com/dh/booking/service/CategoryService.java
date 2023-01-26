package com.dh.booking.service;


import com.dh.booking.model.Category;
import com.dh.booking.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    private CategoryRepository categoryRepository;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public Category saveCategory (Category category){
        return categoryRepository.save(category);
    }

    public Optional<Category> searchCategory (Long id){
       return categoryRepository.findById(id);
    }

    public void updateCategory(Category category){
        categoryRepository.save(category);
    }

    public void deleteCategory(Long id){
        Optional<Category> categoryToDelete = searchCategory(id);
        if(categoryToDelete.isPresent()){
            categoryRepository.deleteById(id);
        }
    }

    public List<Category> categoryList(){
        return categoryRepository.findAll();
    }

}
