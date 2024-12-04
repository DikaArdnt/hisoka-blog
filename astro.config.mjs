import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Hisoka',
			logo: {
				src: '/public/logo.png',
				alt: 'Hisoka',
				replacesTitle: true,
			},
			favicon: '/favicon.ico',
			editLink: {
				baseUrl: 'https://blog.hisoka.net',
			},
			social: {
				github: 'https://github.com/HisokaLabs/hisoka',
				email: 'mailto:contact@hisoka.net'
			},
			sidebar: [
				{
					label: 'Apa itu Hisoka?',
					slug: 'intro',
				},
				{
					label: 'Tutorial',
					items: [
						{
							label: 'Register',
							slug: 'tutorial/register',
						},
						{
							label: 'Create Bot',
							slug: 'tutorial/create',
						},
					],
				},
				{
					label: 'Dashboard',
					autogenerate: { directory: 'dashboard' },
				},
				{
					label: 'Features',
					autogenerate: { directory: 'features' },
				},
			],
			credits: true,
		}),
	],
});
