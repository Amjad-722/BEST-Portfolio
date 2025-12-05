<script lang="ts">
	import type { Component } from 'svelte';

	interface Props {
		icon: Component;
		size?: 'sm' | 'md' | 'lg';
		class?: string;
		animate?: boolean;
	}

	let { 
		icon: Icon, 
		size = 'md', 
		class: className = '',
		animate = true 
	}: Props = $props();

	const sizeClasses = {
		sm: 'w-10 h-10',
		md: 'w-14 h-14',
		lg: 'w-16 h-16'
	};

	const iconSizeClasses = {
		sm: 'w-5 h-5',
		md: 'w-7 h-7',
		lg: 'w-8 h-8'
	};

	const animateClass = animate ? 'group-hover:scale-110 transition-transform duration-300' : '';
</script>

<div class="inline-flex items-center justify-center {sizeClasses[size]} rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] {animateClass} {className}">
	<Icon class="{iconSizeClasses[size]} text-white" />
</div>
