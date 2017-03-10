package com.techforumist.uaa.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.techforumist.uaa.domain.AppUser;
import com.techforumist.uaa.repository.AppUserRepository;

@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	AppUserRepository appUserRepository;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Object users() {
		return appUserRepository.findAll();
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	public Object usersPost(@RequestBody AppUser appUser) {
		return appUserRepository.save(appUser);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void usersPost(@PathVariable("id") Long id) {
		appUserRepository.delete(id);
	}

}
