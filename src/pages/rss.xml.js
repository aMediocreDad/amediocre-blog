import rss from "@astrojs/rss";

export async function GET(context) {
	const postImportResult = import.meta.glob("../content/posts/**/*.md", {
		eager: true,
	});
	const posts = Object.values(postImportResult);

	return rss({
		title: "aMediocreBlog",
		description: "A blog about web development, programming, and other things.",
		site_url: "https://amediocre.blog",
		site: context.site,
		items: posts.map((post) => ({
			title: post.frontmatter.title,
			description: post.frontmatter.spoiler,
			link: post.frontmatter.href,
			pubDate: new Date(post.frontmatter.date),
		})),
	});
}
