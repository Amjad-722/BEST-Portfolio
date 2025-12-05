<script lang="ts">
	import { Menu, X, Code2 } from 'lucide-svelte';
	import { Button } from '$lib/components/ui';
	import { navLinks } from '$lib/data';

	let isOpen = $state(false);

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function closeMenu() {
		isOpen = false;
	}
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-dark)]/80 backdrop-blur-lg border-b border-[var(--color-border)]">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16">
			<!-- Logo -->
			<a href="#hero" class="flex items-center gap-2 group" onclick={closeMenu}>
				<div class="p-2 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] group-hover:animate-pulse-glow transition-all duration-300">
					<Code2 class="w-5 h-5 text-white" />
				</div>
				<span class="text-xl font-bold text-gradient">DevPortfolio</span>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center gap-8">
				{#each navLinks as link}
					<a
						href={link.href}
						class="relative text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300 font-medium
							   after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[var(--color-primary)] after:to-[var(--color-accent)]
							   hover:after:w-full after:transition-all after:duration-300"
					>
						{link.label}
					</a>
				{/each}
				<Button href="#contact" size="sm">
					Hire Me
				</Button>
			</div>

			<!-- Mobile Menu Button -->
			<button
				class="md:hidden p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-card)] transition-all duration-300"
				onclick={toggleMenu}
				aria-label="Toggle menu"
			>
				{#if isOpen}
					<X class="w-6 h-6" />
				{:else}
					<Menu class="w-6 h-6" />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Navigation -->
	{#if isOpen}
		<div class="md:hidden absolute top-16 left-0 right-0 bg-[var(--color-bg-dark)]/95 backdrop-blur-lg border-b border-[var(--color-border)]">
			<div class="px-4 py-4 space-y-3">
				{#each navLinks as link}
					<a
						href={link.href}
						class="block py-3 px-4 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-card)] transition-all duration-300"
						onclick={closeMenu}
					>
						{link.label}
					</a>
				{/each}
				<a
					href="#contact"
					class="block py-3 px-4 rounded-lg text-center bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white font-semibold"
					onclick={closeMenu}
				>
					Hire Me
				</a>
			</div>
		</div>
	{/if}
</nav>
