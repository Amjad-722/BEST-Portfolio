<script lang="ts">
	interface Props {
		id: string;
		label: string;
		type?: string;
		placeholder?: string;
		required?: boolean;
		value: string;
		rows?: number;
	}

	let { 
		id, 
		label, 
		type = 'text', 
		placeholder = '', 
		required = false,
		value = $bindable(),
		rows
	}: Props = $props();

	const inputClasses = `w-full px-4 py-3 rounded-lg bg-[var(--color-bg-dark)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)]/50
		focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all duration-300`;
</script>

<div>
	<label for={id} class="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
		{label}
	</label>
	
	{#if rows}
		<textarea
			{id}
			bind:value
			{required}
			{rows}
			class="{inputClasses} resize-none"
			{placeholder}
		></textarea>
	{:else}
		<input
			{type}
			{id}
			bind:value
			{required}
			class={inputClasses}
			{placeholder}
		/>
	{/if}
</div>
