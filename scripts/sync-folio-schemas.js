
import path from 'path';
import File from 'fs';
import { simpleGit } from 'simple-git';

// get the FOLIO root from either the FOLIO_ROOT env var or a new directory in the system's tmpdir
const folioRoot = process.env.FOLIO_ROOT || path.join(File.mkdtempSync('folio-graphql-'));

// parse the install.json file in json-schemas to get the list of module versions
const installJsonPath = path.join(process.cwd(), 'json-schemas', 'application-descriptor-complete.json');
const installJson = JSON.parse(File.readFileSync(installJsonPath, 'utf-8'));
const moduleVersions = installJson.modules.reduce((acc, module) => {
  acc[module.name] = module.version;
  return acc;
}, {});

// parse the folio-modules file in json-schemas to get the list of modules we want to sync
const folioModulesPath = path.join(process.cwd(), 'json-schemas', 'folio-modules');
const folioModules = File.readFileSync(folioModulesPath, 'utf-8').split('\n').filter(Boolean);

// for each folioModule, check out the module from github at the version specified in moduleVersions
async function syncFolioSchemas(module, tag) {
  const git = simpleGit({ maxConcurrentProcesses: 1 });

  const repoUrl = `https://github.com/folio-org/${module}`;
  const modulePath = path.join(folioRoot, module);
  // if the module path already exists, skip it
  if (File.existsSync(modulePath)) {
    git.cwd(modulePath).fetch(['--tags']).checkout(tag, (err) => {
      if (err) {
        console.error(`Error checking out tag ${tag} for module ${module}:`, err);
      } else {
        console.log(`Checked out tag ${tag} for module ${module} at ${modulePath}`);
      }
    });
    return;
  }
  // otherwise, clone the repo and check out the specified version
  console.log(`Cloning ${repoUrl} at ${tag} to ${modulePath}`);
  await new Promise((resolve, reject) => {
    git.clone(repoUrl, modulePath, (err) => {
      if (err) return reject(err);
      git.cwd(modulePath).checkout(tag , (err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  });
}

for (const module of folioModules) {
  const version = moduleVersions[module];

  if (!version) {
    console.warn(`No version found for module ${module}, skipping`);
    continue;
  }

  syncFolioSchemas(module, `v${version}`);
}

syncFolioSchemas('acq-models', 'master');
syncFolioSchemas('raml', 'master');
