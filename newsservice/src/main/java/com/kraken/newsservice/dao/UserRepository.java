package com.kraken.newsservice.dao;

import com.kraken.newsservice.bean.Role;
import com.kraken.newsservice.bean.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	User findByEmail(String email);

	User findById(int id);

	List<User> findByRole(Role role);

	List<User> findByName(String name);

}
