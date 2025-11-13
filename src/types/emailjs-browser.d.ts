declare module '@emailjs/browser' {
  export function send(
    serviceID: string,
    templateID: string,
    templateParams: Record<string, any>,
    userID?: string
  ): Promise<any>;
}