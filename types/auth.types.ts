export type SignInData =
  | { email: string; password: string; username?: never }
  | { username: string; password: string; email?: never };
