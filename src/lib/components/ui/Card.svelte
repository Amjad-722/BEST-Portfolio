<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		hover?: boolean;
		padding?: 'sm' | 'md' | 'lg';
		children: Snippet;
	}

	let { 
		class: className = '', 
		hover = true,
		padding = 'md',
		children 
	}: Props = $props();

	const paddingClasses = {
		sm: 'p-4',
		md: 'p-6',
		lg: 'p-8'
	};

	const hoverClasses = hover ? 'hover:scale-105 transition-all duration-500' : '';
</script>

<div class="glass-card {paddingClasses[padding]} {hoverClasses} {className}">
	{@render children()}
</div>
