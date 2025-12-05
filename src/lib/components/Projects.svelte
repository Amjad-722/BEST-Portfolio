<script lang="ts">
	import { ExternalLink, Github, Folder } from 'lucide-svelte';

	const featuredProjects = [
		{
			title: 'E-Commerce Platform',
			description: 'A full-stack e-commerce solution built with SvelteKit, featuring real-time inventory, Stripe payments, and an admin dashboard.',
			image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
			tags: ['SvelteKit', 'TypeScript', 'Stripe', 'PostgreSQL'],
			github: 'https://github.com',
			live: 'https://example.com'
		},
		{
			title: 'Task Management App',
			description: 'A beautiful Kanban-style task manager with drag-and-drop, real-time collaboration, and dark mode support.',
			image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop',
			tags: ['Svelte', 'Firebase', 'Tailwind CSS', 'DnD Kit'],
			github: 'https://github.com',
			live: 'https://example.com'
		},
		{
			title: 'Analytics Dashboard',
			description: 'Interactive data visualization dashboard with real-time charts, filters, and export functionality.',
			image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
			tags: ['SvelteKit', 'D3.js', 'Node.js', 'MongoDB'],
			github: 'https://github.com',
			live: 'https://example.com'
		}
	];

	const otherProjects = [
		{ title: 'Weather App', description: 'Beautiful weather app with location-based forecasts', tags: ['Svelte', 'OpenWeather API'] },
		{ title: 'Markdown Editor', description: 'Live markdown editor with syntax highlighting', tags: ['SvelteKit', 'Prism.js'] },
		{ title: 'Portfolio Template', description: 'Customizable portfolio template for developers', tags: ['Svelte', 'Tailwind CSS'] },
		{ title: 'Chat Application', description: 'Real-time chat with WebSocket support', tags: ['SvelteKit', 'Socket.io'] },
		{ title: 'Recipe Finder', description: 'Search and save your favorite recipes', tags: ['Svelte', 'Spoonacular API'] },
		{ title: 'Expense Tracker', description: 'Track and visualize your expenses', tags: ['SvelteKit', 'Chart.js'] }
	];
</script>

<section id="projects" class="py-24 relative">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<span class="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest">My Work</span>
			<h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mt-3 mb-6">
				Featured <span class="text-gradient">Projects</span>
			</h2>
			<p class="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed">
				Here are some of my recent projects that showcase my skills in building modern web applications.
			</p>
		</div>

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
					<div class="glass-card p-6 group hover:scale-105 transition-all duration-300">
						<div class="flex items-center justify-between mb-4">
							<Folder class="w-10 h-10 text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-300" />
							<div class="flex gap-3">
								<a href="https://github.com" target="_blank" rel="noopener noreferrer" class="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300">
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
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
