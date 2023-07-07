import { writable } from 'svelte/store';
import {show_header, hide_header} from '$lib/js/header.js';

export const results_page = writable(false);

export function show_results_page() {
    console.log("show_results_page fired");
    results_page.set(true);
    show_header();
}

export function hide_results_page() {
    console.log("hide_results_page fired");
    results_page.set(false);
    hide_header();
}