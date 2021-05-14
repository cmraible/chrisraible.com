function importAll(r) {
    return r.keys().map((fileName) => ({
        link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
        module: r(fileName)
    }));
}

export const posts = importAll(
    require.context("./pages/posts/", true, /\.mdx$/)
).filter((post) => {
    return post.module.meta.published instanceof Date;
});