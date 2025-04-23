export type TMeta = {
  page: number;
  limit: number;
  total: number;
};

export type TResponseSuccess = {
  data?: any;
  meta?: TMeta;
};

export type TGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: TGenericErrorMessage[];
};

export type TGenericErrorMessage = {
  path: string | number;
  message: string;
};
