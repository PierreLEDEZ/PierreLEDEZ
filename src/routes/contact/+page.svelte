<svelte:head>
	<title>Contact — Pierre Le Dez</title>
</svelte:head>

<section class="py-8">
	<h1 class="text-3xl font-bold tracking-tight mb-2">Contact</h1>
	<p class="text-gray-500 mb-12">N'hésitez pas à me contacter pour discuter d'un projet ou d'une opportunité.</p>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
		<div>
			<h2 class="font-mono text-xs uppercase tracking-widest text-gray-400 mb-6">Coordonnées</h2>
			<div class="flex flex-col gap-4">
				<a
					href="mailto:pierre@example.com"
					class="font-mono text-sm hover:underline underline-offset-4"
				>
					pierre@example.com
				</a>
				<a
					href="https://github.com"
					target="_blank"
					rel="noopener noreferrer"
					class="font-mono text-sm hover:underline underline-offset-4"
				>
					github.com/pierreldz
				</a>
				<a
					href="https://linkedin.com/in/pierre-le-dez-111721158"
					target="_blank"
					rel="noopener noreferrer"
					class="font-mono text-sm hover:underline underline-offset-4"
				>
					LinkedIn
				</a>
			</div>
		</div>

		<div>
			<h2 class="font-mono text-xs uppercase tracking-widest text-gray-400 mb-6">Message</h2>
			<form class="flex flex-col gap-4" onsubmit={(e) => e.preventDefault()}>
				<input
					type="text"
					placeholder="Nom"
					class="border border-gray-300 px-4 py-2.5 text-sm font-mono focus:outline-none focus:border-black transition-colors"
				/>
				<input
					type="email"
					placeholder="Email"
					class="border border-gray-300 px-4 py-2.5 text-sm font-mono focus:outline-none focus:border-black transition-colors"
				/>
				<textarea
					placeholder="Votre message"
					rows="5"
					class="border border-gray-300 px-4 py-2.5 text-sm font-mono focus:outline-none focus:border-black transition-colors resize-none"
				></textarea>
				<button
					type="submit"
					class="font-mono text-sm border border-black px-5 py-2.5 hover:bg-black hover:text-white transition-colors self-start"
				>
					Envoyer
				</button>
			</form>
		</div>
	</div>
</section>
