import { writable } from "svelte/store";

export const cart = writable({
    item: 'Fall Limited Edition Sneakers',
    price: '$125.00',
    qty: 0,
    total: 0
});