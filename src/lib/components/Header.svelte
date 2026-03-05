<script lang="ts">
	import { page } from '$app/state';

	const links = [
		{ href: '/', label: 'Accueil' },
		{ href: '/projets', label: 'Projets' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/contact', label: 'Contact' }
	];

	let menuOpen = $state(false);
</script>

<header class="border-b border-gray-200">
	<nav class="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
		<a href="/" class="font-mono font-bold text-lg tracking-tight hover:opacity-60 transition-opacity">
			PLD<span class="text-gray-400">.</span>
		</a>

		<!-- Desktop -->
		<ul class="hidden md:flex gap-8">
			{#each links as link}
				<li>
					<a
						href={link.href}
						class="text-sm font-mono tracking-wide transition-opacity hover:opacity-60 {page.url.pathname === link.href ? 'underline underline-offset-4' : ''}"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<!-- Mobile toggle -->
		<button
			class="md:hidden font-mono text-sm"
			onclick={() => (menuOpen = !menuOpen)}
			aria-label="Menu"
		>
			{menuOpen ? '✕' : '☰'}
		</button>
	</nav>

	<!-- Mobile menu -->
	{#if menuOpen}
		<ul class="md:hidden border-t border-gray-200 px-6 py-4 flex flex-col gap-4">
			{#each links as link}
				<li>
					<a
						href={link.href}
						class="text-sm font-mono tracking-wide {page.url.pathname === link.href ? 'underline underline-offset-4' : ''}"
						onclick={() => (menuOpen = false)}
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</header>
