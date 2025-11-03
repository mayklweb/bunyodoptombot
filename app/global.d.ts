export {};

declare global {
  interface TelegramWebApp {
    MainButton: {
      setText: (text: string) => void;
      onClick: (cb: () => void) => void;
      show: () => void;
      hide: () => void;
    };
  }

  interface Window {
    Telegram?: {
      WebApp?: TelegramWebApp;
    };
  }
}
