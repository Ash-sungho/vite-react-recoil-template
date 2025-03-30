/// <reference types="react-scripts" />
/// <reference types="vite/client" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_API_URL: string;
    NODE_ENV: "development" | "production" | "test";
    PORT?: string;
    PWD: string;
  }
}

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_VERSION: string;
  readonly VITE_NODE_ENV: "development" | "production" | "test";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
