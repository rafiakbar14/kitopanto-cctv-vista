
interface Window {
  grecaptcha: {
    ready(callback: () => void): void;
    execute(
      siteKey: string,
      options: { action: string }
    ): Promise<string>;
    render(container: HTMLElement, parameters: object): string;
    reset(widgetId?: string): void;
  };
}
