<script lang="ts">
	interface Props {
		tech: string;
	}

	let { tech }: Props = $props();
</script>

<span class="px-4 py-2 rounded-full bg-[var(--color-bg-card)]/60 border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] backdrop-blur-sm hover:border-[var(--color-primary)]/50 transition-colors duration-300">
	{tech}
</span>
