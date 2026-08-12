# DOZE Platform — Super Admin v0.2

Primeira versão visual e funcional do painel central da DOZE, construída para o mesmo fluxo GitHub + Netlify usado no projeto do AC Matosinhos.

## O que já existe

- Dashboard global
- Gestão de clubes
- AC Matosinhos pré-criado com logótipo e URL reais
- Criação de novos clubes
- Ficha individual de clube
- Identidade visual e URL da aplicação
- Ativação/desativação manual de módulos
- Plano, estado, periodicidade, valor e renovação
- Área de integração por clube
- Métricas falsas removidas: valores desconhecidos aparecem como “Por ligar”
- Área de utilizadores preparada para ligação real
- Notas internas
- Comunicação/comunicados
- Estatísticas base
- Persistência com Netlify Blobs
- Fallback para `localStorage` quando a API Netlify não estiver disponível
- Interface responsiva para computador e telemóvel
- Proteção simples por chave privada para o protótipo

## Publicar no GitHub + Netlify

1. Cria um repositório novo no GitHub, por exemplo `doze-platform`.
2. Coloca **todo o conteúdo desta pasta** na raiz do repositório.
3. No Netlify, cria um novo site a partir desse repositório.
4. O `netlify.toml` já define `public` como pasta de publicação e `netlify/functions` como pasta das funções.
5. O Netlify instala automaticamente a dependência `@netlify/blobs` durante o build.
6. Em `Site configuration > Environment variables`, cria `DOZE_ADMIN_KEY` e escolhe uma chave longa e privada.
7. Faz novo deploy. Ao abrir o site, o painel pede essa chave.

### Segurança desta versão

A chave protege o protótipo e não fica gravada no GitHub; permanece apenas na sessão do navegador. Isto **não é ainda o sistema de autenticação definitivo**. Antes de guardar dados comerciais reais, vamos substituir este mecanismo por login real, sessões e permissões.

## Modo local / demonstração

Se as Netlify Functions não estiverem disponíveis, o frontend muda automaticamente para modo de demonstração e guarda alterações no `localStorage` do navegador. Isto permite testar rapidamente o design e os fluxos.

## Próxima fase recomendada

1. Autenticação real do Super Admin.
2. Modelo multi-clube definitivo e permissões.
3. Criar a ponte segura DOZE ↔ AC Matosinhos para métricas e comandos em tempo real.
4. Aplicação automática de módulos/planos nas apps dos clubes.
5. Gestão de pagamentos DOZE → clube e comprovativos.
6. Métricas reais de utilizadores e atividade.
7. Provisionamento de novas apps/identidades por clube.

## Desenvolvimento

Requer Node.js 20 ou superior.

```bash
npm install
npm run check
npm test
```
