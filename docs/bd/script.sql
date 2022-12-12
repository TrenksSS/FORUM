drop database if exists projetoForum; 
create database projetoForum charset=UTF8 collate utf8_general_ci;

use projetoForum;

create table users(
    id integer  auto_increment not null primary key,
    nome_user varchar(50) not null,
    nickname varchar(50) not null unique,
    email varchar(50) not null unique,
    data_nasci date not null,
    senha varchar(20) not null,
    role_stats varchar(20) not null,
    avatar mediumblob
);

create table post(
    id integer  auto_increment not null primary key,
    id_user integer,
    titulo_post varchar(100) not null,
    data_post date not null,
    tipo_post varchar(50) not null,
    curtida integer,
    img mediumblob,
    foreign key (id_user) references users(id) on delete cascade
);
create table comentarios (
    id integer  auto_increment not null primary key,
    id_post integer not null,
    id_user integer not null,
    comentario varchar(800) not null,
    data_coment date not null,
    foreign key (id_user) references users(id) on delete cascade,
    foreign key (id_post) references post(id) on delete cascade

);

create table respostas(
    id_resp integer auto_increment not null primary key,
    id_coment integer not null,
    id_users integer not null,
    comentario varchar(800) not null,
    data_coment datetime not null,
    foreign key (id_coment) references comentarios(id) on delete cascade,
    foreign key (id_users) references users(id) on delete cascade
);



insert into users values(default,'Juliana', 'ju','julianaSato@hotmail.com','2002-11-10', 'plocploc','User',"https://conteudo.imguol.com.br/c/noticias/51/2018/07/25/25jul2018---momo-perfil-do-whatsapp-que-esta-intrigando-as-pessoas-1532524592590_615x300.jpg.webp");
insert into users values(default,'O.O', 'OO','Uepa@gmail.com','2002-11-10', '1234','admin',"https://4maos.com.br/wp-content/uploads/2022/06/dd4119682cc07831e8a39ae2d157f906.jpg");

insert into post values(default,1, 'Esse carro é PIKA ', DATE_SUB(curdate(),INTERVAL 3 DAY), 'Carro',33,'https://pbs.twimg.com/media/DCmgkOdXUAAsO_N?format=jpg&name=360x360');
insert into post values(default,2, 'Esse carro é do pikasso ', DATE_SUB(curdate(),INTERVAL 1 DAY), 'Carro',300,'https://pbs.twimg.com/media/DCmgkOdXUAAsO_N?format=jpg&name=360x360');



insert into comentarios values(default, 1,1,"OPA",curDate());
insert into respostas values(default,1,1,"TESTE", curDate());

-- create view vw_adm as 
-- select 

create view vw_coment as
select p.id as id_post,c.id as id_coment,u.id as id_user,u.nickname, c.comentario,c.data_coment from users u
inner join comentarios c on  c.id_user = u.id
inner join post p on p.id = c.id_post;

create view vw_status as
select  u.id as id_user, u.nickname,u.email, u.role_stats, u.senha, u.avatar from users u ;

create view vw_posts as
select  p.id as id_post, p.tipo_post, p.titulo_post, p.data_post, p.id_user, p.img, p.curtida, u.nickname,u.email,u.avatar from post p 
inner join users u on  u.id = p.id_user;


select * from users;
select * from post; 
select * from comentarios; 
select * from respostas;
select * from vw_coment;
select * from vw_status;
select * from vw_posts;


