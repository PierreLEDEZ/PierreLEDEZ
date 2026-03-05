<svelte:head>
	<title>Projets — Pierre Le Dez</title>
</svelte:head>

<section class="py-8">
	<h1 class="text-3xl font-bold tracking-tight mb-2">Projets</h1>
	<p class="text-gray-500 mb-12">Une sélection de mes réalisations.</p>

	<div class="flex flex-col gap-12">
		{#each projects as project}
			<article class="group border-b border-gray-200 pb-8">
				<div class="flex items-baseline justify-between mb-2">
					<h2 class="text-xl font-medium group-hover:underline underline-offset-4">{project.title}</h2>
					<span class="font-mono text-xs text-gray-400">{project.year}</span>
				</div>
				<p class="text-sm text-gray-600 leading-relaxed mb-4">{project.description}</p>
				<div class="flex flex-wrap gap-2 mb-4">
					{#each project.stack as tech}
						<span class="font-mono text-xs border border-gray-300 px-2 py-0.5">{tech}</span>
					{/each}
				</div>
				<div class="flex gap-4">
					{#if project.github}
						<a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							class="font-mono text-xs text-gray-500 hover:text-black transition-colors"
						>
							Code source →
						</a>
					{/if}
					{#if project.demo}
						<a
							href={project.demo}
							target="_blank"
							rel="noopener noreferrer"
							class="font-mono text-xs text-gray-500 hover:text-black transition-colors"
						>
							Démo live →
						</a>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</section>

<script lang="ts">
	const projects = [
		{
			title: 'Application de gestion de tâches',
			description:
				'Application full-stack de gestion de tâches avec authentification, drag-and-drop et notifications en temps réel.',
			stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'WebSocket'],
			year: '2024',
			github: 'https://github.com',
			demo: ''
		},
		{
			title: 'API REST e-commerce',
			description:
				'API RESTful complète pour une plateforme e-commerce avec gestion des produits, paniers, commandes et paiements.',
			stack: ['Go', 'PostgreSQL', 'Redis', 'Docker', 'Stripe'],
			year: '2023',
			github: 'https://github.com',
			demo: ''
		},
		{
			title: 'Dashboard analytique',
			description:
				'Tableau de bord interactif pour visualiser des données en temps réel avec graphiques et filtres dynamiques.',
			stack: ['Svelte', 'D3.js', 'Python', 'FastAPI'],
			year: '2023',
			github: 'https://github.com',
			demo: ''
		},
		{
			title: 'CLI de déploiement',
			description:
				'Outil en ligne de commande pour automatiser le déploiement d\'applications sur des serveurs distants via SSH.',
			stack: ['Python', 'Click', 'SSH', 'Docker'],
			year: '2022',
			github: 'https://github.com',
			demo: ''
		}
	];
</script>
