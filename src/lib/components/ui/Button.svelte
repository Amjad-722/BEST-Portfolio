<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href?: string;
		variant?: 'primary' | 'secondary' | 'ghost';
		size?: 'sm' | 'md' | 'lg';
		disabled?: boolean;
		class?: string;
		type?: 'button' | 'submit' | 'reset';
		children: Snippet;
		onclick?: () => void;
	}

	let { 
		href, 
		variant = 'primary', 
		size = 'md', 
		disabled = false,
		class: className = '',
		type = 'button',
		children,
		onclick
	}: Props = $props();

	const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300';
	
	const variantClasses = {
		primary: 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white hover:shadow-lg hover:shadow-[var(--color-primary)]/30 hover:scale-105',
		secondary: 'border-2 border-[var(--color-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-primary)]/10',
		ghost: 'text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:bg-[var(--color-bg-card)]'
	};

	const sizeClasses = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-3 text-base',
		lg: 'px-8 py-4 text-lg'
	};

	const disabledClasses = disabled ? 'opacity-70 cursor-not-allowed hover:scale-100' : '';

	const computedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
</script>

{#if href}
	<a {href} class={computedClasses}>
		{@render children()}
	</a>
{:else}
	<button {type} {disabled} {onclick} class={computedClasses}>
		{@render children()}
	</button>
{/if}
