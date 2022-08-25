/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly BASE_API_URL: string;
  readonly IMAGE_URL: string;
  readonly RESIZED_IMAGE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}