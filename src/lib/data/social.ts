// Social links and contact data
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-svelte';
import type { SocialLink, ContactInfo } from '$lib/types';

export const socialLinks: SocialLink[] = [
	{ href: 'https://github.com/Amjad-722', icon: Github, label: 'GitHub' },
	{ href: 'https://www.linkedin.com/in/webdev-amjad/', icon: Linkedin, label: 'LinkedIn' },
	{ href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
	{ href: 'mailto:aliamjad722ee@gmail.com', icon: Mail, label: 'Email' }
];

export const contactInfo: ContactInfo[] = [
	{ icon: Mail, label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
	{ icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: null },
	{ icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' }
];
