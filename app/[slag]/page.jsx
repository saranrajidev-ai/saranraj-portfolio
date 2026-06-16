// app/blog/[slug]/page.tsx
export default async function BlogPost({ params }) {
    const { slug } = await params;
    return <h1>Viewing blog post: {slug}</h1>;
}