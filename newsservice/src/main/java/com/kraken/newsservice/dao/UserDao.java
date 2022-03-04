package com.kraken.newsservice.dao;

import com.kraken.newsservice.bean.User;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManagerFactory;
import java.util.List;

@Component
public class UserDao {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserDao.class);
	private SessionFactory sessionFactory;

	@Autowired
	public void setSessionFactory(EntityManagerFactory emFactory) {
		this.sessionFactory = emFactory.unwrap(SessionFactory.class);
	}

	public boolean save(User user) {

		try {
			LOGGER.info("Start of save() method in UserDao");
			LOGGER.debug("{user}", user);
			Session session = sessionFactory.openSession();
			session.save(user);
			session.close();
			LOGGER.info("End of save() method in userDao");
			return true;
		} catch (HibernateException e) {
			System.out.println(e.getMessage());
			System.out.println("error");
			return false;
		}
	}

	public User findByEmail(String email) {
		User user = null;
		try {
			Session session = sessionFactory.openSession();
			@SuppressWarnings("unchecked")
			List<User> users = (List<User>) session.createQuery("from User u where u.email = :email")
					.setParameter("email", email).list();
			if (users.size() > 0) {
				user = users.get(0);
			}
			session.close();
		} catch (HibernateException e) {
			e.printStackTrace();
			System.out.println(e.getMessage());
			System.out.println("error");
		}
		return user;
	}

	public List<User> findAll() {
		
		try {
			Session session = sessionFactory.openSession();
			@SuppressWarnings("unchecked")
			List<User> users = (List<User>) session.createQuery("from User").list();
			session.close();
			return users;
		} catch (HibernateException e) {
			e.printStackTrace();
			System.out.println(e.getMessage());
			System.out.println("error");
		}
		return null;
	}

	
	public List<User> findAnalyst() {
		try {
			
		
			Session session = sessionFactory.openSession();
			@SuppressWarnings("unchecked")
			List<User> users = (List<User>) session.createQuery("from User u where u.role = :role")
					.setParameter("role","sa" ).list();
			
			session.close();
			return users;
		} catch (HibernateException e) {
			e.printStackTrace();
			System.out.println(e.getMessage());
			System.out.println("error");
		}
		return null;
	}
	

}
