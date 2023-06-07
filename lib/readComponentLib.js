import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const componentLibDirectory = path.join(process.cwd(), 'componentLib');

export function getComponentMetadata() {
  const filenames = fs.readdirSync(componentLibDirectory);
  const componentData = filenames.map((filename) => {
    // Each file inside is a folder with the following structure:
    // - filename
    //  - filename.js
    //  - filename.module.sass
    //  - filename.jpg
    //  - filename.md
    // Also id is the same as filename.
    const fullPath = path.join(componentLibDirectory, filename);
    const image = `/${filename}.jpg`
    const fileContent = fs.readFileSync(path.join(fullPath, `${filename}.md`), 'utf8');
    const { data } = matter(fileContent);
    return {
      image,
      ...data,
    };
  });
  return componentData;
}