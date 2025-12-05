// Type definitions for the portfolio

import type { Component } from 'svelte';

export interface NavLink {
	href: string;
	label: string;
}

export interface Skill {
	icon: Component;
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
	icon: Component;
	label: string;
	value: string;
	href: string | null;
}

export interface SocialLink {
	href: string;
	icon: Component;
	label: string;
}
