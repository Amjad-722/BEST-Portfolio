// Type definitions for the portfolio

import type { ComponentType, SvelteComponent } from 'svelte';

// Generic type for Lucide icons and similar component types
type IconComponent = ComponentType<SvelteComponent>;

export interface NavLink {
	href: string;
	label: string;
}

export interface Skill {
	icon: IconComponent;
	title: string;
	description: string;
}

export interface Technology {
	name: string;
	level: number;
}

export interface FeaturedProject {
	title: string;
	description: string;
	image: string;
	tags: string[];
	github: string;
	live: string;
}

export interface OtherProject {
	title: string;
	description: string;
	tags: string[];
	github?: string;
	live?: string;
}

export interface ContactInfo {
	icon: IconComponent;
	label: string;
	value: string;
	href: string | null;
}

export interface SocialLink {
	href: string;
	icon: IconComponent;
	label: string;
}
