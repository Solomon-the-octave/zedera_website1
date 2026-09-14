/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Where the contact form posts. Set this in Vercel under
   * Settings -> Environment Variables, e.g.
   *   VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxxxxx
   * If it is unset, the form falls back to opening the visitor's mail
   * client with the brief pre-filled, so an enquiry is never lost.
   */
  readonly VITE_FORM_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
