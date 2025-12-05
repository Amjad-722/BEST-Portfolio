<script lang="ts">
	import type { Technology } from '$lib/types';

	interface Props {
		tech: Technology;
	}

	let { tech }: Props = $props();
</script>

<div class="space-y-2">
	<div class="flex justify-between items-center">
		<span class="text-[var(--color-text-primary)] font-medium">{tech.name}</span>
		<span class="text-[var(--color-accent)] text-sm">{tech.level}%</span>
	</div>
	<div class="h-2 bg-[var(--color-bg-dark)] rounded-full overflow-hidden">
		<div 
			class="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full transition-all duration-1000 ease-out"
			style="width: {tech.level}%;"
		></div>
	</div>
</div>
