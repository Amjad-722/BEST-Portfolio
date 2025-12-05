<script lang="ts">
	import { Github, Linkedin, Twitter, Mail, Heart, Code2 } from 'lucide-svelte';

	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{ href: 'https://github.com', icon: Github, label: 'GitHub' },
		{ href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
		{ href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
		{ href: 'mailto:hello@example.com', icon: Mail, label: 'Email' }
	];
</script>

<footer class="bg-[var(--color-bg-dark)] border-t border-[var(--color-border)]">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
			<!-- Brand -->
			<div class="space-y-4">
				<a href="#hero" class="flex items-center gap-2 group">
					<div class="p-2 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]">
						<Code2 class="w-5 h-5 text-white" />
					</div>
					<span class="text-xl font-bold text-gradient">DevPortfolio</span>
				</a>
				<p class="text-[var(--color-text-secondary)] text-sm leading-relaxed">
					Crafting beautiful and performant web experiences with SvelteKit and modern web technologies.
				</p>
			</div>

			<!-- Quick Links -->
			<div class="space-y-4">
				<h3 class="text-lg font-semibold text-[var(--color-text-primary)]">Quick Links</h3>
				<nav class="flex flex-col gap-2">
					<a href="#about" class="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300">About</a>
					<a href="#projects" class="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300">Projects</a>
					<a href="#contact" class="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300">Contact</a>
				</nav>
			</div>

			<!-- Social Links -->
			<div class="space-y-4">
				<h3 class="text-lg font-semibold text-[var(--color-text-primary)]">Connect</h3>
				<div class="flex gap-4">
					{#each socialLinks as social}
						<a
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							class="p-3 rounded-lg bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:bg-[var(--color-bg-card-hover)] transition-all duration-300 hover:scale-110"
							aria-label={social.label}
						>
							<social.icon class="w-5 h-5" />
						</a>
					{/each}
				</div>
			</div>
		</div>

		<!-- Divider -->
		<div class="border-t border-[var(--color-border)] pt-8">
			<div class="flex flex-col md:flex-row items-center justify-between gap-4">
				<p class="text-[var(--color-text-secondary)] text-sm flex items-center gap-1">
					&copy; {currentYear} DevPortfolio. Made with 
					<Heart class="w-4 h-4 text-red-500 fill-red-500" />
					using SvelteKit
				</p>
				<p class="text-[var(--color-text-secondary)] text-sm">
					All rights reserved.
				</p>
			</div>
		</div>
	</div>
</footer>
