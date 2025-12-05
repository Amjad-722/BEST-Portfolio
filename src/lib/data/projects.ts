// Projects data
import type { FeaturedProject, OtherProject } from '$lib/types';

export const featuredProjects: FeaturedProject[] = [
	{
		title: 'E-Commerce Platform',
		description: 'A full-stack e-commerce solution built with SvelteKit, featuring real-time inventory, Stripe payments, and an admin dashboard.',
		image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
		tags: ['SvelteKit', 'TypeScript', 'Stripe', 'PostgreSQL'],
		github: 'https://github.com/Amjad-722',
		live: 'https://example.com'
	},
	{
		title: 'Task Management App',
		description: 'A beautiful Kanban-style task manager with drag-and-drop, real-time collaboration, and dark mode support.',
		image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop',
		tags: ['Svelte', 'Firebase', 'Tailwind CSS', 'DnD Kit'],
		github: 'https://github.com/Amjad-722',
		live: 'https://example.com'
	},
	{
		title: 'Analytics Dashboard',
		description: 'Interactive data visualization dashboard with real-time charts, filters, and export functionality.',
		image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
		tags: ['SvelteKit', 'D3.js', 'Node.js', 'MongoDB'],
		github: 'https://github.com/Amjad-722',
		live: 'https://example.com'
	}
];

export const otherProjects: OtherProject[] = [
	{ 
		title: 'Weather App', 
		description: 'Beautiful weather app with location-based forecasts', 
		tags: ['Svelte', 'OpenWeather API'] 
	},
	{ 
		title: 'Markdown Editor', 
		description: 'Live markdown editor with syntax highlighting', 
		tags: ['SvelteKit', 'Prism.js'] 
	},
	{ 
		title: 'Portfolio Template', 
		description: 'Customizable portfolio template for developers', 
		tags: ['Svelte', 'Tailwind CSS'] 
	},
	{ 
		title: 'Chat Application', 
		description: 'Real-time chat with WebSocket support', 
		tags: ['SvelteKit', 'Socket.io'] 
	},
	{ 
		title: 'Recipe Finder', 
		description: 'Search and save your favorite recipes', 
		tags: ['Svelte', 'Spoonacular API'] 
	},
	{ 
		title: 'Expense Tracker', 
		description: 'Track and visualize your expenses', 
		tags: ['SvelteKit', 'Chart.js'] 
	}
];
