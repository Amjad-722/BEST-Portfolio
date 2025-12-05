<script lang="ts">
	import { ArrowDown, Sparkles } from 'lucide-svelte';
	import { Button, TechPill } from '$lib/components/ui';
	import { techStack } from '$lib/data';
</script>

<section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
	<!-- Background Orbs -->
	<div class="absolute top-20 left-10 w-72 h-72 bg-[var(--color-primary)]/20 rounded-full blur-3xl animate-float"></div>
	<div class="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-accent)]/15 rounded-full blur-3xl animate-float" style="animation-delay: -3s;"></div>
	<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 rounded-full blur-3xl"></div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
		<!-- Badge -->
		<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg-card)]/80 border border-[var(--color-primary)]/30 backdrop-blur-sm mb-8 animate-pulse-glow">
			<Sparkles class="w-4 h-4 text-[var(--color-accent)]" />
			<span class="text-sm text-[var(--color-text-secondary)]">Open for opportunities</span>
		</div>

		<!-- Main Heading -->
		<h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
			<span class="text-[var(--color-text-primary)]">Hi, I'm </span>
			<span class="text-gradient">Amjad Ali</span>
			<br />
			<span class="text-[var(--color-text-primary)]">I build </span>
			<span class="relative inline-block">
				<span class="text-gradient">amazing</span>
				<svg class="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M2 9C50 3 150 3 198 9" stroke="url(#gradient)" stroke-width="3" stroke-linecap="round"/>
					<defs>
						<linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0">
							<stop offset="0%" stop-color="var(--color-primary)"/>
							<stop offset="100%" stop-color="var(--color-accent)"/>
						</linearGradient>
					</defs>
				</svg>
			</span>
			<span class="text-[var(--color-text-primary)]"> web apps</span>
		</h1>

		<!-- Subtitle -->
		<p class="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
			A passionate <span class="text-[var(--color-accent)]">SvelteKit developer</span> crafting beautiful, 
			performant, and user-friendly web experiences that make a difference.
		</p>

		<!-- CTA Buttons -->
		<div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
			<Button href="#projects" size="lg" class="group">
				View My Work
				<ArrowDown class="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
			</Button>
			<Button href="#contact" variant="secondary" size="lg">
				Get In Touch
			</Button>
		</div>

		<!-- Tech Stack Pills -->
		<div class="flex flex-wrap items-center justify-center gap-3">
			{#each techStack as tech}
				<TechPill {tech} />
			{/each}
		</div>
	</div>

	<!-- Scroll Indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
		<a href="#about" class="flex flex-col items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300">
			<span class="text-xs uppercase tracking-widest">Scroll</span>
			<ArrowDown class="w-5 h-5" />
		</a>
	</div>
</section>
