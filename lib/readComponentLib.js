import fs from 'fs';
import path from 'path';

const componentLibDirectory = path.join(process.cwd(), 'componentLib');

export async function getComponentMetadata() {
  const filenames = fs.readdirSync(componentLibDirectory);
  const componentData = await Promise.all(filenames.map((filename) => {
    // Each file inside is a folder with the following structure:
    // - filename
    //  - filename.js
    //  - filename.module.sass
    //  - filename.jpg
    //  - filename.md
    // Also id is the same as filename.
    const fullPath = path.join(componentLibDirectory, filename);
    const componentFiles = fs.readdirSync(fullPath);
    if (componentFiles.includes(`${filename}.md`)) {
      const data = (async function() {
        const matter = (await import('gray-matter')).default;
        const fileContent = fs.readFileSync(path.join(fullPath, `${filename}.md`), 'utf8');
        const { data } = matter(fileContent);
        return data
      }());
      return data;
    }
    return "No metadata found"
  }));
  return componentData;
}