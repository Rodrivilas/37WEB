import { writable } from 'svelte/store';

export type Page = 'loading' | 'age-verification' | 'home' | 'promo' | '404';

export const currentPage = writable<Page>('loading');
export const isAgeVerified = writable<boolean>(false);

export function navigateTo(page: Page) {
    currentPage.set(page);
}