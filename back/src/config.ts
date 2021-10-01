export const config = () => ({
  port: Number(process.env.PORT) || 3000,
  database: {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.POSTGRES_PORT) || 5431,
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    database: process.env.POSTGRES_DB || 'postgres',
    synchronize: true,
    logging: false,
    entities: ['dist/**/*.entity{.ts,.js}'],
  }
});
