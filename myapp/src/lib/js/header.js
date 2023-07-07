import { writable } from 'svelte/store';

export const header = writable(false);

export function show_header() {
    console.log("show_header fired");
    header.set(true);
}

export function hide_header() {
    console.log("hide_header fired");
    header.set(false);
}