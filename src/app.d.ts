// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

// Svelte component module declarations
declare module '*.svelte' {
	import type { ComponentType, SvelteComponent } from 'svelte';
	const component: ComponentType<SvelteComponent>;
	export default component;
}

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
