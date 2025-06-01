export const TOKEN_EXPIRY_DAYS = 1;

export const cookieUtils = {
  set(name: string, value: string, days: number) {
    if (typeof document === 'undefined') return;
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    const domain = window.location.hostname;
    document.cookie = `${name}=${value};${expires};path=/;domain=${domain};SameSite=Lax`;
  },

  get(name: string): string | null {
    if (typeof document === 'undefined') return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null;
    }
    return null;
  },

  delete(name: string) {
    if (typeof document === 'undefined') return;
    const domain = window.location.hostname;
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${domain};SameSite=Lax`;
  }
}; 