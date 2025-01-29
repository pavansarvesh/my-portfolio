<div align="center">

# ✨ my-portfolio ✨

</div>

🚀 **my-portfolio** is an opinionated, no-frills static blogging template built with
[Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/).

---

## 🌟 Features (Next.js 15 + Contentlayer 2)

- **[Next.js 15](https://nextjs.org/)** with **App Router** for optimized rendering,
  including **server components, streaming, and partial hydration**.
- **[Tailwind CSS](https://tailwindcss.com/)** with automatic styling across light and dark themes.
  Includes accessible, theme-aware UI components for navigation, buttons, etc.
- **[rehype-pretty-code](https://rehype-pretty.pages.dev/)** for advanced code block styling,
  syntax highlighting, and support for code block titles/captions.
- **[MDX](https://mdxjs.com/)** for blog post authoring with interactive components.
- **SEO Optimization** with fine-grained control over metadata.
- **[Contentlayer 2](https://contentlayer.dev/)** for seamless, **type-safe** content management
  and static generation of Markdown/MDX blog posts.

🌟 This setup leverages **Next.js 15’s full potential** while integrating
**Contentlayer 2 for a powerful, streamlined content workflow**.

---

## 🛠️ Technology Stack

| Category       | Technology Name                          |
| -------------- | ---------------------------------------- |
| **Framework**  | [Next.js](https://nextjs.org/)           |
| **Styling**    | [Tailwind CSS](https://tailwindcss.com/) |
| **Content**    | [MDX](https://mdxjs.com/)                |
| **Graphics**   | [Figma](https://www.figma.com/)          |
| **Deployment** | [Vercel](https://vercel.com/)            |

---

## 🚀 Getting Started

### 1️⃣ **Create a New Repository**

Click the **“Use this template”** button on GitHub to create a new repository with this template.

### 2️⃣ **Clone the Repository**

```sh
git clone https://github.com/pavansarvesh/my-portfolio.git
cd my-portfolio
```

### 3️⃣ **Install Dependencies**

```sh
npm install
```

### 4️⃣ **Start the Development Server**

```sh
npm run dev
```

Visit `http://localhost:3000` to see the project live. 🚀

---

## ✨ Contentlayer2 Setup

To enable Tailwind Typography, install it first:

```sh
npm install contentlayer2 next-contentlayer2 date-fns
```

### Next.js Configuration

To hook Contentlayer into the `next dev` and `next build` processes, you'll want to wrap the Next.js configuration using the `withContentlayer` method

```js
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true };

module.exports = withContentlayer(nextConfig);
```

Now, apply `prose` styles to your blog content:

```jsx
<div className='prose prose-lg dark:prose-invert'>
  <MDXContent />
</div>
```

### Add Contentlayer Config

Because we're building a simple blog site, let's define a single document type called Post. Create a file `contentlayer.config.ts` in the root of your project, and add the following content.

```
import { defineDocumentType, makeSource } from 'contentlayer2/source-files';
import rehypePrettyCode from 'rehype-pretty-code';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`, // match all .mdx files in all directories
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string'},
    // body: { type: 'mdx' }, // define body field only here
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath,
    },
  },
}));

export default makeSource({
  contentDirPath: 'blogs', // the directory where your .mdx files are stored
  documentTypes: [Post], // define Post as a document type
  mdx: {
    remarkPlugins: [], // enable GitHub Flavored Markdown support
    rehypePlugins: [], // enable syntax highlighting
  },
});
```

---

## ✨ Tailwind Typography Plugin Setup

To enable Tailwind Typography, install it first:

```sh
npm install -D @tailwindcss/typography
```

Then, add it to your `tailwind.config.js`:

```js
module.exports = {
  plugins: [require('@tailwindcss/typography')],
};
```

Now, apply `prose` styles to your blog content:

```jsx
<div className='prose prose-lg dark:prose-invert'>
  <MDXContent />
</div>
```

---

## 🎨 Customization

### 🎨 Color Palette

Modify colors inside `/app/global.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: Arial, Helvetica, sans-serif;
}
```

---

## 📝 Adding Content

### 📚 Blog Posts

Add new blog posts as **MDX** files inside `/blogs/`.
Each post should include the following **frontmatter**:

```yaml
---
title: 'Your Post Title'
date: 2024-01-01
description: 'A brief description of your post!'
---
```

### 📌 Blog Schema

| Field         | Type         | Requirements                     | Required    |
| ------------- | ------------ | -------------------------------- | ----------- |
| `title`       | `string`     | Must be **≤60 characters**       | ✅ Yes      |
| `date`        | `YYYY-MM-DD` | Must be in **YYYY-MM-DD** format | ✅ Yes      |
| `description` | `string`     | Must be **≤155 characters**      | ❌ Optional |

---

## 🎯 Available Commands

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start the development server     |
| `npm run build`   | Build the project for production |
| `npm run start`   | Start the built project          |
| `npm run preview` | Preview the built project        |

---

🎉 **That's it!** You now have a blazing-fast, fully functional blog template
powered by **Next.js 15, Contentlayer 2, and Tailwind CSS**! 🚀🔥
Happy coding! 🖥️✨
