<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.metadata.title} — Pierre Le Dez</title>
	<meta name="description" content={data.metadata.description} />
</svelte:head>

<article class="py-8">
	<header class="mb-12">
		<a href="/blog" class="font-mono text-xs text-gray-400 hover:text-black transition-colors mb-4 inline-block">
			← Retour au blog
		</a>
		<h1 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">{data.metadata.title}</h1>
		<div class="flex items-center gap-4">
			<time class="font-mono text-sm text-gray-500">
				{new Date(data.metadata.date).toLocaleDateString('fr-FR', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
			</time>
			<div class="flex gap-2">
				{#each data.metadata.tags as tag}
					<span class="font-mono text-xs text-gray-400">#{tag}</span>
				{/each}
			</div>
		</div>
	</header>

	<div class="prose prose-neutral max-w-none
		[&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4
		[&_h3]:text-lg [&_h3]:font-medium [&_h3]:mt-8 [&_h3]:mb-3
		[&_p]:text-gray-600 [&_p]:leading-relaxed [&_p]:mb-4
		[&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ul]:text-gray-600
		[&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4 [&_ol]:text-gray-600
		[&_li]:mb-1 [&_li]:leading-relaxed
		[&_code]:font-mono [&_code]:text-sm [&_code]:bg-gray-100 [&_code]:px-1.5 [&_code]:py-0.5
		[&_pre]:bg-gray-950 [&_pre]:text-gray-100 [&_pre]:p-4 [&_pre]:overflow-x-auto [&_pre]:mb-6 [&_pre]:text-sm
		[&_pre_code]:bg-transparent [&_pre_code]:p-0
		[&_strong]:font-medium
		[&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:opacity-60
		[&_blockquote]:border-l-2 [&_blockquote]:border-gray-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-500
	">
		<svelte:component this={data.content} />
	</div>
</article>
