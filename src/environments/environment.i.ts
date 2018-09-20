export interface Environment {
  readonly host: string;
  readonly api: string;
  readonly oauth: {
    url: string,
    clientId: string;
  };
  readonly production: boolean;
  readonly environmentName: string;
}
