<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Blog — Pierre Le Dez</title>
</svelte:head>

<section class="py-8">
	<h1 class="text-3xl font-bold tracking-tight mb-2">Blog</h1>
	<p class="text-gray-500 mb-12">Réflexions, tutoriels et retours d'expérience.</p>

	<div class="flex flex-col gap-8">
		{#each data.posts as post}
			<article class="group border-b border-gray-200 pb-8">
				<a href="/blog/{post.slug}" class="block">
					<div class="flex items-baseline justify-between mb-2">
						<h2 class="text-xl font-medium group-hover:underline underline-offset-4">
							{post.title}
						</h2>
						<time class="font-mono text-xs text-gray-400 shrink-0 ml-4">
							{new Date(post.date).toLocaleDateString('fr-FR', {
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}
						</time>
					</div>
					<p class="text-sm text-gray-600 leading-relaxed mb-3">{post.description}</p>
					<div class="flex flex-wrap gap-2">
						{#each post.tags as tag}
							<span class="font-mono text-xs text-gray-400">#{tag}</span>
						{/each}
					</div>
				</a>
			</article>
		{/each}
	</div>

	{#if data.posts.length === 0}
		<p class="text-gray-500 font-mono text-sm">Aucun article pour le moment.</p>
	{/if}
</section>
