<script lang="ts">
	import type { SocialLink } from '$lib/types';

	interface Props {
		link: SocialLink;
		size?: 'sm' | 'md';
	}

	let { link, size = 'md' }: Props = $props();

	const sizeClasses = {
		sm: 'p-2 w-4 h-4',
		md: 'p-3 w-5 h-5'
	};
</script>

<a
	href={link.href}
	target="_blank"
	rel="noopener noreferrer"
	class="p-3 rounded-lg bg-[var(--color-bg-card)] text-white hover:text-[var(--color-accent)] hover:bg-[var(--color-bg-card-hover)] transition-all duration-300 hover:scale-110"
	aria-label={link.label}
>
	<link.icon class="{sizeClasses[size]}" />
</a>
