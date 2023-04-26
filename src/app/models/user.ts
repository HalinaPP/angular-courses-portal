export interface User {
  id:string;
  firstName:string;
  lastName:string;
}

export interface UserI{
  login:string;
  password: string
  id: string;
  fakeToken:string;
  name:{
    first: string;
    last:string;
  }
}

export interface TokenDataI {
  token: string;
}

