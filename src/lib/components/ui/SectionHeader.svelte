<script lang="ts">
	interface Props {
		subtitle?: string;
		title: string;
		highlightedWord?: string;
		description?: string;
	}

	let { subtitle, title, highlightedWord, description }: Props = $props();
</script>

<div class="text-center mb-16">
	{#if subtitle}
		<span class="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest">
			{subtitle}
		</span>
	{/if}
	
	<h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mt-3 mb-6">
		{#if highlightedWord}
			{@html title.replace(highlightedWord, `<span class="text-gradient">${highlightedWord}</span>`)}
		{:else}
			{title}
		{/if}
	</h2>
	
	{#if description}
		<p class="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed">
			{description}
		</p>
	{/if}
</div>
