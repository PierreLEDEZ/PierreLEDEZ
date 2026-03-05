<svelte:head>
	<title>Pierre Le Dez — Ingénieur Logiciel</title>
</svelte:head>

<!-- Hero -->
<section class="py-16 md:py-24">
	<p class="font-mono text-sm text-gray-500 mb-4">Bonjour, je suis</p>
	<h1 class="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
		Pierre Le Dez
	</h1>
	<p class="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
		Ingénieur logiciel passionné par la création de solutions élégantes et performantes.
	</p>
	<div class="mt-8 flex gap-4">
		<a
			href="/projets"
			class="font-mono text-sm border border-black px-5 py-2.5 hover:bg-black hover:text-white transition-colors"
		>
			Voir mes projets
		</a>
		<a
			href="/contact"
			class="font-mono text-sm text-gray-500 px-5 py-2.5 hover:text-black transition-colors"
		>
			Me contacter
		</a>
	</div>
</section>

<!-- À propos -->
<section class="py-12 border-t border-gray-200">
	<h2 class="font-mono text-xs uppercase tracking-widest text-gray-400 mb-8">À propos</h2>
	<p class="text-gray-600 leading-relaxed max-w-xl">
		Ingénieur logiciel avec une expertise en développement full-stack.
		J'aime concevoir des architectures propres, écrire du code maintenable et
		résoudre des problèmes complexes avec des solutions simples.
	</p>
</section>

<!-- Compétences -->
<section class="py-12 border-t border-gray-200">
	<h2 class="font-mono text-xs uppercase tracking-widest text-gray-400 mb-8">Compétences</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		<div>
			<h3 class="font-mono text-sm font-medium mb-3">Langages</h3>
			<div class="flex flex-wrap gap-2">
				{#each ['TypeScript', 'JavaScript', 'Python', 'Go', 'Java', 'SQL'] as skill}
					<span class="font-mono text-xs border border-gray-300 px-3 py-1">{skill}</span>
				{/each}
			</div>
		</div>
		<div>
			<h3 class="font-mono text-sm font-medium mb-3">Frontend</h3>
			<div class="flex flex-wrap gap-2">
				{#each ['React', 'Svelte', 'Next.js', 'Tailwind CSS', 'HTML/CSS'] as skill}
					<span class="font-mono text-xs border border-gray-300 px-3 py-1">{skill}</span>
				{/each}
			</div>
		</div>
		<div>
			<h3 class="font-mono text-sm font-medium mb-3">Backend</h3>
			<div class="flex flex-wrap gap-2">
				{#each ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis'] as skill}
					<span class="font-mono text-xs border border-gray-300 px-3 py-1">{skill}</span>
				{/each}
			</div>
		</div>
		<div>
			<h3 class="font-mono text-sm font-medium mb-3">Outils</h3>
			<div class="flex flex-wrap gap-2">
				{#each ['Git', 'Docker', 'CI/CD', 'Linux', 'AWS'] as skill}
					<span class="font-mono text-xs border border-gray-300 px-3 py-1">{skill}</span>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Expérience -->
<section class="py-12 border-t border-gray-200">
	<h2 class="font-mono text-xs uppercase tracking-widest text-gray-400 mb-8">Expérience</h2>
	<div class="flex flex-col gap-8">
		<div class="group">
			<div class="flex items-baseline justify-between mb-1">
				<h3 class="font-medium">Ingénieur Logiciel Senior</h3>
				<span class="font-mono text-xs text-gray-400">2022 — Présent</span>
			</div>
			<p class="font-mono text-sm text-gray-500 mb-2">Entreprise A</p>
			<p class="text-sm text-gray-600 leading-relaxed">
				Conception et développement d'applications web à grande échelle.
				Mise en place de pipelines CI/CD et amélioration des performances.
			</p>
		</div>
		<div class="group">
			<div class="flex items-baseline justify-between mb-1">
				<h3 class="font-medium">Développeur Full-Stack</h3>
				<span class="font-mono text-xs text-gray-400">2020 — 2022</span>
			</div>
			<p class="font-mono text-sm text-gray-500 mb-2">Entreprise B</p>
			<p class="text-sm text-gray-600 leading-relaxed">
				Développement de fonctionnalités frontend et backend.
				Collaboration avec les équipes produit et design.
			</p>
		</div>
		<div class="group">
			<div class="flex items-baseline justify-between mb-1">
				<h3 class="font-medium">Développeur Junior</h3>
				<span class="font-mono text-xs text-gray-400">2018 — 2020</span>
			</div>
			<p class="font-mono text-sm text-gray-500 mb-2">Entreprise C</p>
			<p class="text-sm text-gray-600 leading-relaxed">
				Premiers pas dans le développement professionnel.
				Apprentissage des bonnes pratiques et méthodologies agiles.
			</p>
		</div>
	</div>
</section>
