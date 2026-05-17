const fs = require('fs');
const path = require('path');

const updateNav = (file, prefix) => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/<li><a href="[^"]*?#projects">Projects<\/a><\/li>\s*(?:<li><a href="[^"]*?contact[^"]*">Contact<\/a><\/li>)?/g, `<li><a href="${prefix}#projects">Projects</a></li>\n                <li><a href="${prefix}#contact">Contact</a></li>`);
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
};

updateNav('index.html', 'index.html');
const projectsDir = 'projects';
if (fs.existsSync(projectsDir)) {
    fs.readdirSync(projectsDir).filter(f => f.endsWith('.html')).forEach(f => {
        updateNav(path.join(projectsDir, f), '../index.html');
    });
}
