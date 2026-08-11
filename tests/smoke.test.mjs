import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
test('ficheiros essenciais existem',()=>{for(const f of ['public/index.html','public/app.js','public/styles.css','netlify/functions/platform-api.mjs','netlify.toml'])assert.equal(fs.existsSync(path.join(root,f)),true,f)});
test('app contém módulos estruturais',()=>{const js=fs.readFileSync(path.join(root,'public/app.js'),'utf8');for(const label of ['Dashboard','Clubes','Subscrições','Comunicação','Módulos'])assert.match(js,new RegExp(label))});
