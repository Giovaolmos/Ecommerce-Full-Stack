import { IProducts } from '../products/IProducts';

export interface ICreateOrder {
  userId: number;
  products: IProducts[];
}
