set names UTF8;
drop database if exists my_sql;
create database my_sql charset=UTF8;
use my_sql;
create table user(
   uid int primary key auto_increment,
   phone varchar(11),
   uname varchar(10),
   upwd varchar(12),
   email varchar(20)
);
insert into user values(NULL,'13598507395','dingding','123456','1123456@qq.com');
insert into user values(NULL,'13111111112','ranran','234567','466456@qq.com');
insert into user values(NULL,'13111111113','dongdong','345678','s545s@163.com');
insert into user values(NULL,'13111111114','liangliang','456789','1sad23@163.com');

create table jiayong(
  cid int primary key auto_increment,
  url varchar(30),
  price decimal(6,2)
);
INSERT INTO jiayong VALUES(NULL,'img/jiayong/car1.jpg',380);
INSERT INTO jiayong VALUES(NULL,'img/jiayong/car2.jpg',280);
INSERT INTO jiayong VALUES(NULL,'img/jiayong/car3.jpg',290);
INSERT INTO jiayong VALUES(NULL,'img/jiayong/car4.jpg',270);
INSERT INTO jiayong VALUES(NULL,'img/jiayong/car5.jpg',320);
INSERT INTO jiayong VALUES(NULL,'img/jiayong/car6.jpg',260);

create table mianbao(
  cid int primary key auto_increment,
  url varchar(30),
  price decimal(6,2)
);
INSERT INTO mianbao VALUES(NULL,'img/mianbao/car1.jpg',180);
INSERT INTO mianbao VALUES(NULL,'img/mianbao/car2.jpg',190);
INSERT INTO mianbao VALUES(NULL,'img/mianbao/car3.jpg',170);
INSERT INTO mianbao VALUES(NULL,'img/mianbao/car4.jpg',210);
INSERT INTO mianbao VALUES(NULL,'img/mianbao/car5.jpg',200);
INSERT INTO mianbao VALUES(NULL,'img/mianbao/car6.jpg',180);

create table keche(
  cid int primary key auto_increment,
  url varchar(30),
  price decimal(6,2)
);
INSERT INTO keche VALUES(NULL,'img/keche/car1.jpg',380);
INSERT INTO keche VALUES(NULL,'img/keche/car2.jpg',300);
INSERT INTO keche VALUES(NULL,'img/keche/car3.jpg',480);
INSERT INTO keche VALUES(NULL,'img/keche/car4.jpg',290);
INSERT INTO keche VALUES(NULL,'img/keche/car5.jpg',350);
INSERT INTO keche VALUES(NULL,'img/keche/car6.jpg',340);