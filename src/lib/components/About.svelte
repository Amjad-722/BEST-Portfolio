<script lang="ts">
	import { SectionHeader, Card, IconBadge, SkillBar } from '$lib/components/ui';
	import { skills, technologies } from '$lib/data';
</script>

<section id="about" class="py-24 relative">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<SectionHeader 
			subtitle="About Me"
			title="Passionate About Crafting Digital Experiences"
			highlightedWord="Crafting"
			description="With over 5 years of experience in web development, I specialize in building modern web applications using the Svelte ecosystem. I love turning complex problems into elegant solutions."
		/>

		<!-- Skills Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
			{#each skills as skill, i}
				<Card 
					class="text-center group"
					style="animation-delay: {i * 100}ms;"
				>
					<IconBadge icon={skill.icon} class="mb-4" />
					<h3 class="text-xl font-semibold text-[var(--color-text-primary)] mb-2">{skill.title}</h3>
					<p class="text-[var(--color-text-secondary)] text-sm leading-relaxed">{skill.description}</p>
				</Card>
			{/each}
		</div>

		<!-- Technologies Section -->
		<Card padding="lg" hover={false}>
			<h3 class="text-2xl font-bold text-[var(--color-text-primary)] mb-8 text-center">
				Technical Expertise
			</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				{#each technologies as tech}
					<SkillBar {tech} />
				{/each}
			</div>
		</Card>
	</div>
</section>
