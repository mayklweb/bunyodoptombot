export {};

declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        ready: () => void;
        expand: () => void;
        disableVerticalSwipes: () => void;
        initData?: string;
        initDataUnsafe?: any;
        themeParams?: any;
        colorScheme?: string;
      };
    };
  }
}
