<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<svelte:head>
	<title>DevPortfolio | SvelteKit Developer</title>
	<meta name="description" content="Portfolio of a passionate SvelteKit developer crafting beautiful and performant web experiences. Specializing in Svelte, TypeScript, and modern web technologies." />
</svelte:head>

<Hero />
<About />
<Projects />
<Contact />
