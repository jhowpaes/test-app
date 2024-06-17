export enum QueryKeys {
  getChat = "getChat",
  getMessages = "getMessages",
}

export interface MutationOptions<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (message: string) => void;
  errorMessage?: string;
}
