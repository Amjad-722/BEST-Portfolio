<script lang="ts">
	import { ExternalLink, Github, Folder } from 'lucide-svelte';
	import { SectionHeader, Card } from '$lib/components/ui';
	import { featuredProjects, otherProjects } from '$lib/data';
</script>

<section id="projects" class="py-24 relative">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<SectionHeader 
			subtitle="My Work"
			title="Featured Projects"
			highlightedWord="Projects"
			description="Here are some of my recent projects that showcase my skills in building modern web applications."
		/>

		<!-- Featured Projects -->
		<div class="space-y-12 mb-20">
			{#each featuredProjects as project, i}
				<div class="glass-card overflow-hidden group hover:border-[var(--color-primary)]/40 transition-all duration-500
							{i % 2 === 1 ? 'md:flex-row-reverse' : ''} md:flex">
					<!-- Image -->
					<div class="md:w-1/2 relative overflow-hidden">
						<img 
							src={project.image} 
							alt={project.title}
							class="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-dark)]/80 via-transparent to-transparent"></div>
					</div>

					<!-- Content -->
					<div class="md:w-1/2 p-8 flex flex-col justify-center">
						<h3 class="text-2xl font-bold text-[var(--color-text-primary)] mb-4 group-hover:text-gradient transition-colors duration-300">
							{project.title}
						</h3>
						<p class="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
							{project.description}
						</p>
						<div class="flex flex-wrap gap-2 mb-6">
							{#each project.tags as tag}
								<span class="px-3 py-1 text-sm rounded-full bg-[var(--color-primary)]/10 text-[var(--color-accent)] border border-[var(--color-primary)]/20">
									{tag}
								</span>
							{/each}
						</div>
						<div class="flex gap-4">
							<a 
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300"
							>
								<Github class="w-5 h-5" />
								<span>Code</span>
							</a>
							<a 
								href={project.live}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300"
							>
								<ExternalLink class="w-5 h-5" />
								<span>Live Demo</span>
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Other Projects Grid -->
		<div>
			<h3 class="text-2xl font-bold text-[var(--color-text-primary)] text-center mb-10">
				Other Noteworthy Projects
			</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each otherProjects as project}
					<Card class="group">
						<div class="flex items-center justify-between mb-4">
							<Folder class="w-10 h-10 text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-300" />
							<div class="flex gap-3">
								<a href="https://github.com/Amjad-722" target="_blank" rel="noopener noreferrer" class="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300">
									<Github class="w-5 h-5" />
								</a>
								<a href="https://example.com" target="_blank" rel="noopener noreferrer" class="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300">
									<ExternalLink class="w-5 h-5" />
								</a>
							</div>
						</div>
						<h4 class="text-xl font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-300">
							{project.title}
						</h4>
						<p class="text-[var(--color-text-secondary)] text-sm mb-4 leading-relaxed">
							{project.description}
						</p>
						<div class="flex flex-wrap gap-2">
							{#each project.tags as tag}
								<span class="text-xs text-[var(--color-text-secondary)]">{tag}</span>
							{/each}
						</div>
					</Card>
				{/each}
			</div>
		</div>
	</div>
</section>
