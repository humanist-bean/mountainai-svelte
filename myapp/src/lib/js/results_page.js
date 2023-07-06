import { writable } from 'svelte/store';

export const results_page = writable(false);

export function show_results_page() {
    console.log("show_results_page fired");
    results_page.set(true);
}

export function hide_results_page() {
    console.log("hide_results_page fired");
    results_page.set(false);
}