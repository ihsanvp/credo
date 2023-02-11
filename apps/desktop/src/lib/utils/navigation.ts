import { writable, type Writable } from "svelte/store";
import { base } from "$app/paths";
import { goto } from "$app/navigation";

export const previousPage: Writable<string> = writable(base)

let previousPageValue: string;
previousPage.subscribe(url => previousPageValue = url)

export async function goBack() {
  await goto(previousPageValue)
}