import { Dictionary } from './dictionary';

export interface MockerRequest {
  headers: Dictionary<string>;
  query: Dictionary<string>;
  body: any;
  params: Dictionary<string>;
  responses: Response[];
}
