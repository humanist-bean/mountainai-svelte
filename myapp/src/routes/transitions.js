import { writable } from 'svelte/store';

export const transition = writable(true);

export function transition_end(){
    console.log("transition_end fired");
    transition.set(true);
}

export function transition_start(){
    console.log("transition_start fired");
    transition.set(false);
}