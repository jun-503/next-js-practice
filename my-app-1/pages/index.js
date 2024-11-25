import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'posts', 'hello_world.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    props: {
      post: {
        title: data.title,
        date: data.date,
        content,
      },
    },
  };
}

export default function Home({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
