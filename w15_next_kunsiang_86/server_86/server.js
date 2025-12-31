import express from 'express';
import cors from 'cors';

const app = express();

import db from './utils/database.js';

app.use(cors());

app.use('/api/blog_86/', async (req, res, next) => {
  const results = await db.query(`select * from blog_86`);
  console.log('results', JSON.stringify(results.rows));
  res.json(results.rows);
});

app.use('/api/shop_86/cart:uid', async (req, res, next) => {
  console.log('uid', req.params.uid);
  const results = await db.query(
    `select C.user_id, U.uname, C.product_id, S.pname, C.quantity, S.price, S.img_url
    from cart2_86 as C, user2_86 as U, shop2_86 as S
    where U.uid = '213410086' and C.user_id = U.uid and C.product_id = S.pid`,
    [req.params.uid]
  );
  // console.log('results', JSON.stringify(results.rows));
  res.json(results.rows);
});

app.use('/api/shop_86/:category', async (req, res, next) => {
  console.log('category', req.params.category);
  const results = await db.query(
    ` select *from category2_86, shop2_86 where cname = $1 and cid=cat_id`,
    [req.params.category]
  );
  // console.log('results', JSON.stringify(results.rows));
  res.json(results.rows);
});

app.use('/api/shop_86/', async (req, res, next) => {
  const results = await db.query(`select * from shop2_86`);
  console.log('results', JSON.stringify(results.rows));
  res.json(results.rows);
});

app.use('/', (req, res, next) => {
  res.send('Kunsiang Liao,213410186');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
