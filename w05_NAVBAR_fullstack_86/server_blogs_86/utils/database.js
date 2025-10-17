import pg from 'pg';
const { Pool } = pg;

const mode = (process.env.DATABASE || '').toLowerCase();
let pool;

if (mode === 'local') {
  pool = new Pool({ host:'localhost', port:'5432', user:'postgres', password:'5858', database:'wp1_demo_86' });
} else if (mode === 'supabase') {
  pool = new Pool({
    host: process.env.SUPABASE_HOST,
    port: process.env.SUPABASE_PORT,
    user: process.env.SUPABASE_USER,
    password: process.env.SUPABASE_PASSWORD,
    database: process.env.SUPABASE_DB,
    ssl: { rejectUnauthorized: false },
  });
} else {
  throw new Error(`Invalid DATABASE value: ${process.env.DATABASE}. Use 'LOCAL' or 'SUPABASE'.`);
}

export default pool;
