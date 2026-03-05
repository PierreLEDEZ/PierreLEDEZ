<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Pierre Le Dez — Ingénieur Logiciel</title>
</svelte:head>

<div class="min-h-screen flex flex-col bg-white text-black font-sans">
	<Header />
	<main class="flex-1 w-full max-w-3xl mx-auto px-6 py-12">
		{@render children()}
	</main>
	<Footer />
</div>
