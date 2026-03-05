import type { PageServerLoad } from './$types';

export interface BlogPost {
	slug: string;
	title: string;
	date: string;
	description: string;
	tags: string[];
}

export const load: PageServerLoad = async () => {
	const posts: BlogPost[] = [];

	const modules = import.meta.glob('/src/content/blog/*.md', { eager: true });

	for (const [path, module] of Object.entries(modules)) {
		const slug = path.split('/').pop()?.replace('.md', '') ?? '';
		const mod = module as { metadata: Record<string, string | string[]> };
		const metadata = mod.metadata;

		posts.push({
			slug,
			title: metadata.title as string,
			date: metadata.date as string,
			description: metadata.description as string,
			tags: (metadata.tags as string[]) ?? []
		});
	}

	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { posts };
};
