<script lang="ts">
	import { Code2, Palette, Rocket, Users } from 'lucide-svelte';

	const skills = [
		{ icon: Code2, title: 'Clean Code', description: 'Writing maintainable, scalable, and well-documented code that stands the test of time.' },
		{ icon: Palette, title: 'UI/UX Design', description: 'Creating intuitive interfaces with attention to detail and a focus on user experience.' },
		{ icon: Rocket, title: 'Performance', description: 'Building lightning-fast applications optimized for speed and SEO.' },
		{ icon: Users, title: 'Collaboration', description: 'Working effectively in teams with clear communication and agile methodologies.' }
	];

	const technologies = [
		{ name: 'Svelte/SvelteKit', level: 95 },
		{ name: 'TypeScript', level: 90 },
		{ name: 'Tailwind CSS', level: 92 },
		{ name: 'Node.js', level: 85 },
		{ name: 'PostgreSQL', level: 80 },
		{ name: 'GraphQL', level: 75 }
	];
</script>

<section id="about" class="py-24 relative">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<span class="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest">About Me</span>
			<h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mt-3 mb-6">
				Passionate About <span class="text-gradient">Crafting</span> Digital Experiences
			</h2>
			<p class="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed">
				With over 5 years of experience in web development, I specialize in building modern web applications 
				using the Svelte ecosystem. I love turning complex problems into elegant solutions.
			</p>
		</div>

		<!-- Skills Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
			{#each skills as skill, i}
				<div 
					class="glass-card p-6 text-center group hover:scale-105 transition-all duration-500"
					style="animation-delay: {i * 100}ms;"
				>
					<div class="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] mb-4 group-hover:scale-110 transition-transform duration-300">
						<skill.icon class="w-7 h-7 text-white" />
					</div>
					<h3 class="text-xl font-semibold text-[var(--color-text-primary)] mb-2">{skill.title}</h3>
					<p class="text-[var(--color-text-secondary)] text-sm leading-relaxed">{skill.description}</p>
				</div>
			{/each}
		</div>

		<!-- Technologies Section -->
		<div class="glass-card p-8 md:p-12">
			<h3 class="text-2xl font-bold text-[var(--color-text-primary)] mb-8 text-center">
				Technical Expertise
			</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				{#each technologies as tech}
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
				{/each}
			</div>
		</div>
	</div>
</section>
