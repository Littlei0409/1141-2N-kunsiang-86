CREATE TABLE cart2_86 (
    cid int NOT NULL PRIMARY KEY,
    user_id int,
    product_id int,
    quantity int,
    total int DEFAULT 0,
    added_at timestamp DEFAULT CURRENT_TIMESTAMP
    constraint fk_1 foreign key (user_id) references user2_86(uid) on delete set null on update cascade,
    constraint fk_2 foreign key (product_id) references shop2_86(pid) on delete set null on update cascade
);

INSERT INTO cart2_86 (cid, user_id, product_id, quantity, total, added_at) 
VALUES
(1, 213410086, 1, 2, 0,  '2024-12-24 18:50:00'),
(2, 213410086, 10, 3, 0, '2024-12-24 18:50:00'),
(3, 213410086, 15, 1, 0, '2024-12-24 18:50:00'),
(4, 213410086, 23, 2, 0, '2024-12-24 18:50:00'),
(5, 213410086, 30, 2, 0, '2024-12-24 18:50:00'),
(6, 1, 1, 2, 0, '2024-12-24 18:50:00'),
(7, 2, 10, 3, 0, '2024-12-24 18:50:00'),
(8, 3, 15, 1, 0, '2024-12-24 18:50:00'),
(9, 4, 23, 2, 0, '2024-12-24 18:50:00'),
(10, 4, 30, 2, 0, '2024-12-24 18:50:00')

select C.user_id, U.uname, C.product_id, S.pname, C.quantity, S.price, S.img_url
from cart2_86 as C, user2_86 as U, shop2_86 as S
where U.uid = '213410086' and C.user_id = U.uid and C.product_id = S.pid



