insert into app_user(id,name,username,password) values (1,'John Doe','admin','admin');
insert into app_user(id,name,username,password) values (2,'Liza Elizabeth','user','user');
insert into app_user(id,name,username,password) values (3,'Sarath Muraleedharan','sarath-m','admin');

insert into app_user_roles(app_user_id,roles) values (1,'ADMIN');
insert into app_user_roles(app_user_id,roles) values (1,'USER');
insert into app_user_roles(app_user_id,roles) values (2,'USER');


insert into app_user_roles(app_user_id,roles) values (3,'ADMIN');
insert into app_user_roles(app_user_id,roles) values (3,'USER');
insert into app_user_roles(app_user_id,roles) values (3,'SUPER_ADMIN');