export interface Response<T> { //argumento com propriedade generic
  message?: string;
  data: T;
}
