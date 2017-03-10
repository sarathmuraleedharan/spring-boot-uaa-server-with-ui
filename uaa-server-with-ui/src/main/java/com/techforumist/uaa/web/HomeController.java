package com.techforumist.uaa.web;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techforumist.uaa.domain.AppUser;
import com.techforumist.uaa.repository.AppUserRepository;

@RestController
public class HomeController {
	@Autowired
	AppUserRepository appUserRepository;

	@RequestMapping("/user")
	public AppUser user(Principal principal) {
		AppUser appUser = appUserRepository.findOneByUsername(principal.getName());
		return appUser;
	}

	@RequestMapping("/ping")
	public Object ping() {
		Map<String, Object> map = new HashMap<>();
		map.put("message", "Hello");
		return map;
	}
}
