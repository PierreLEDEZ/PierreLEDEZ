import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const post = await import(`/src/content/blog/${params.slug}.md`);

		return {
			content: post.default,
			metadata: post.metadata as {
				title: string;
				date: string;
				description: string;
				tags: string[];
			}
		};
	} catch {
		throw error(404, 'Article non trouvé');
	}
};
