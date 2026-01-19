# Guia Detalhado: Instalação, Build e Execução do BillAI (Fork)

Este guia descreve, passo a passo, como instalar dependências, compilar, executar e entender a organização dos módulos no seu fork do BillAI.

## 1) Visão geral da arquitetura e módulos

- `src/vs/base/`: utilitários e abstrações básicas (eventos, async, filesystem, etc.)
- `src/vs/platform/`: serviços e infraestrutura de injeção de dependência (DI)
- `src/vs/editor/`: núcleo do editor de texto (modelos, rendering, tokens, etc.)
- `src/vs/workbench/`: interface principal (UI, serviços, contribuições)
- `src/vs/workbench/api/`: Extension Host e implementação da API de extensões
- `src/vs/code/`: processo principal do Electron (lifecycle do app e janelas)
- `src/vs/server/`: execução em modo server (web/remote)
- `extensions/`: extensões built-in que vêm com o BillAI
- `build/`: scripts de build e CI/CD
- `scripts/`: comandos prontos para rodar desktop/web/server/cli
- `resources/`: ícones, temas e recursos estáticos
- `out/`: saída gerada pelo build (JavaScript compilado)

## 2) Pré-requisitos (macOS, Linux, Windows)

### Node.js e npm
- Use uma versão de Node compatível com o repositório (normalmente definida na documentação oficial do BillAI).
- Se o `node` estiver muito novo ou antigo, o build pode falhar.

### Ferramentas nativas
- macOS: Xcode Command Line Tools
- Linux: build-essential, python3, pkg-config, etc.
- Windows: Visual Studio Build Tools

### Git
- Necessário para clonar e atualizar dependências/submódulos (se houver).

## 3) Clonagem do repositório

```bash
git clone https://github.com/seu-usuario/vscode.git
cd vscode
```

## 4) Instalação das dependências

```bash
npm install
```

O `npm install` executa scripts do projeto:
- `preinstall` (build/npm/preinstall.ts)
- `postinstall` (build/npm/postinstall.ts)

Esses scripts preparam dependências nativas e assets necessários.

## 5) Build (compilação)

### Build único (uma vez)
```bash
npm run compile
```

### Build incremental (watch)
```bash
npm run watch
```

Esse comando roda:
- `watch-client` (workbench/renderer)
- `watch-extensions` (extensões built-in)

### Web
```bash
npm run watch-web
```

### CLI
```bash
npm run watch-cli
```

Todos os artefatos são gerados em `out/`.

## 6) Execução do BillAI

### Desktop (Electron)
```bash
./scripts/code.sh
```

### Web
```bash
./scripts/code-web.sh
```

### Server
```bash
./scripts/code-server.sh
```

### CLI
```bash
./scripts/code-cli.sh
```

## 7) Fluxo de execução (alto nível)

1. O Electron inicia pelo `src/vs/code/` (processo principal).
2. A janela é criada e carrega o renderer.
3. O renderer inicializa o `workbench/`, que monta UI e serviços.
4. O Extension Host inicia via `workbench/api/`.
5. Serviços e utilitários se conectam via DI (`platform/`).

## 8) Onde encontrar pontos de entrada

- `src/bootstrap-esm.ts`: bootstrap principal
- `src/vs/code/electron-main/main.ts`: entrada do processo principal
- `src/vs/workbench/browser/workbench.ts`: inicialização da UI
- `src/vs/workbench/api/node/extHostExtensionService.ts`: host de extensões

## 9) Problemas comuns e diagnósticos rápidos

- Falha no `npm install`: verifique versão do Node e toolchain nativo.
- Build lento: use `npm run watch` para incremental.
- Erros de TypeScript: rode novamente o watcher e verifique console.
- Erros em extensões: rodar apenas `watch-extensions` para isolar.

## 10) Próximos passos recomendados

- Escolher um módulo e seguir imports/serviços para entender dependências.
- Abrir testes em `src/vs/*/test` para ver exemplos reais de uso.
- Rodar `npm run valid-layers-check` para entender limites entre camadas.

