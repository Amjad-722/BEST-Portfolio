// Skills and technologies data
import { Code2, Palette, Rocket, Users } from 'lucide-svelte';
import type { Skill, Technology } from '$lib/types';

export const skills: Skill[] = [
	{ 
		icon: Code2, 
		title: 'Clean Code', 
		description: 'Writing maintainable, scalable, and well-documented code that stands the test of time.' 
	},
	{ 
		icon: Palette, 
		title: 'UI/UX Design', 
		description: 'Creating intuitive interfaces with attention to detail and a focus on user experience.' 
	},
	{ 
		icon: Rocket, 
		title: 'Performance', 
		description: 'Building lightning-fast applications optimized for speed and SEO.' 
	},
	{ 
		icon: Users, 
		title: 'Collaboration', 
		description: 'Working effectively in teams with clear communication and agile methodologies.' 
	}
];

export const technologies: Technology[] = [
	{ name: 'Svelte/SvelteKit', level: 95 },
	{ name: 'TypeScript', level: 90 },
	{ name: 'Tailwind CSS', level: 92 },
	{ name: 'Node.js', level: 85 },
	{ name: 'PostgreSQL', level: 80 },
	{ name: 'GraphQL', level: 75 }
];

export const techStack: string[] = [
    'svelte',
	'SvelteKit', 
	'TypeScript', 
	'Tailwind CSS', 
	'Node.js', 
	'PostgreSQL'
];
