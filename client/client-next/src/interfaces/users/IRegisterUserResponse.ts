import { ICredentials } from '../credentials/ICredentials';

export interface IRegisterUserResponse {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  role: string;
  credential: ICredentials;
}
