import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				playfair: ['Playfair Display', 'serif'],
				lato: ['Lato', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif']
			},
			colors: {
				primary: {
					50: '#fef6f0',
					100: '#fdeee2',
					200: '#fbd6bd',
					300: '#f9bd98',
					400: '#f48d4e',
					500: '#EF5D04',  // Vibrant terracotta (main brand color)
					600: '#d75403',
					700: '#b34603',
					800: '#8f3802',
					900: '#752d01',
				},
				secondary: {
					50: '#f5f7f6',
					100: '#ebefee',
					200: '#ced7d5',
					300: '#b1bebb',
					400: '#768e88',
					500: '#3B5E55',  // Deep sage green
					600: '#35554d',
					700: '#2c4740',
					800: '#233833',
					900: '#1c2e2a',
				},
				warm: {
					50: '#faf9f7',
					100: '#f5f3f0',
					200: '#e6e2d9',
					300: '#d7d0c2',
					400: '#baad95',
					500: '#9C8A67',  // Warm taupe
					600: '#8c7c5d',
					700: '#75684e',
					800: '#5d533e',
					900: '#4c4433',
				}
			}
		}
	},
	plugins: [typography, forms, containerQueries]
} satisfies Config;
