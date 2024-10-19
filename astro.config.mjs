// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Cyber Security Program Guide',
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'CyberPatriot', slug: 'guides/cyberpatriot' },
						{ label: 'National Cyber League', slug: 'guides/national-cyber-league' },
						{ label: 'Windows Guide', slug: 'guides/windows' },
						{ label: 'Linux Guide', slug: 'guides/linux' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
