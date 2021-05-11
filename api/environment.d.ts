declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TYPEORM_CONNECTION: string;
      TYPEORM_HOST: string;
      TYPEORM_USERNAME: string;
      TYPEORM_PASSWORD: string;
      TYPEORM_DATABASE: string;
      NODE_ENV: 'development' | 'production';

    }
  }
}

export { }