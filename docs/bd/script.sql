drop database if exists projetoForum;
create database projetoForum charset=UTF8 collate utf8_general_ci;

use projetoForum;

create table users(
    id_user integer  auto_increment not null primary key,
    nome_user varchar(50) not null,
    nickname varchar(50) not null unique,
    data_nasci date not null,
    senha varchar(20) not null
);

create table comentarios (
    id_com integer  auto_increment not null primary key,
    id_user integer not null,
    comentario varchar(500) not null,
    data_coment date not null,
    tipo_categoria varchar(50) not null
);

create table adms(
    id_adm integer  auto_increment not null primary key,
    nome_adm varchar(50) not null,
    senha_adm varchar(20) not null
);

insert into users values(default,'Juliana', 'jujubinha', '2002-11-10', 'plocploc');
insert into comentarios values(default, 1,"OPA",curDate(),"Test");
insert into adms values(default,'Douglas','ADM');

create view vw_coment as
select c.id_com, u.id_user,u.nickname , c.comentario,c.data_coment, c.tipo_categoria from users u
inner join comentarios c on  c.id_user = u.id_user;

select * from users;
select * from adms;
select * from comentarios; 
select * from vw_coment;