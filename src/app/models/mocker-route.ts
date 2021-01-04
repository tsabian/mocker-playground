import { MockerRequest } from './mocker-request';

export interface MockerRoute {
  _id: string;
  name: string;
  path: string;
  context: string[];
  method: string;
  expectedStatus: number;
  request: MockerRequest;
}
