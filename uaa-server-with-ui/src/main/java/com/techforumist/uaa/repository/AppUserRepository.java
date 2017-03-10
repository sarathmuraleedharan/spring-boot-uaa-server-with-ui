package com.techforumist.uaa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techforumist.uaa.domain.AppUser;

/**
 * @author Sarath Muraleedharan
 *
 */
public interface AppUserRepository extends JpaRepository<AppUser, Long> {
	public AppUser findOneByUsername(String username);
}
