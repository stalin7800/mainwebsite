export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/about/index.svelte"),
	() => import("../../src/routes/contact/index.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/projects/index.svelte")
];

export const dictionary = {
	"": [[0, 4], [1]],
	"about": [[0, 2], [1]],
	"contact": [[0, 3], [1]],
	"projects": [[0, 5], [1]]
};