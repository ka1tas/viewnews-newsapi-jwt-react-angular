package com.kraken.newsservice.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kraken.newsservice.bean.Language;


@Repository
public interface LanguageRepository extends JpaRepository<Language, Integer> {

	Language findById (int id);
}
