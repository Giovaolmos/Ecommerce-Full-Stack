import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import { Credential } from '../entities/Credential';
import { Order } from '../entities/Order';
import { Category } from '../entities/Category';
import { Product } from '../entities/Product';
import * as dotenv from 'dotenv';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from './envs';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true,
  // dropSchema: true,
  logging: false,
  entities: [User, Credential, Order, Product, Category],
  subscribers: [],
  migrations: [],
});

