export declare type CreateUser = {
  emailId: String;
  password: string;
  token?: string;
};

export declare type UpdateUser = {
  emailId: String;
  password: String;
};

export declare type GetUser = {
  id?: String;
  emailId?: String;
  password?: String;
  createdAt?: Date;
  updatedAt?: Date;
  lastLoginAt?: Date;
};

export declare type RegisterUser = {
  address?: String;
  firstName: String | undefined;
  lastName: String | undefined;
  phoneNumber?: String;
  emailId?: String;
  password?: String;
  userId?: String;
  sId?: String;
};

export declare type GetRegisterUser = {
  id?: String;
  address?: String;
  firstName?: String;
  lastName?: String;
  phoneNumber?: String;
  emailId?: String;
  password?: String;
};

export declare type DocumentType = {
  id? : string;
  name : string;
  description : string;
  attachment : string;
  extension : string;
  size : string;
};

export declare type GetDocument = {
  id? : string;
  name : string;
  description : string;
  attachment : string;
  extension : string;
  size : string;
};