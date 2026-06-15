# practice-algorithms-js-ts

Algorithms and data structures exercises implemented in **JavaScript** and **TypeScript**.

This repository is part of my continuous learning journey, where I solve programming problems and compare vanilla JavaScript solutions with their TypeScript equivalents.

---

## Project Structure

```text
practice-algorithms-js-ts/
├── src/
│   ├── js/
│   ├── ts/
│   ├── logic-exercises.md
│   └── index.html
├── dist/
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── oxlintrc.json
├── .prettierrc
├── .gitignore
└── README.md
```

---

## Tech Stack

- Vanilla (.js) - JS implementations
- TypeScript (.ts) - Type-safe, static typing versions
- pnpm - Package manager
- TypeScript Compiler - Transpile TS to JS
- Oxlint - Linting for JS/TS
- Prettier - Code formatting for JS/TS

## Prerequisites

- Node.js (v16+)
- pnpm (https://pnpm.io/)

---

## Getting Started

Install dependencies:

```bash
pnpm install
```

Compile TypeScript:

```bash
pnpm build
```

Watch for changes:

```bash
pnpm build:watch
```

---

## Development

### Lint

```bash
pnpm lint
```

Automatically fix issues:

```bash
pnpm lint:fix
```

### Format

Format the project:

```bash
pnpm format
```

Check formatting:

```bash
pnpm format:check
```

### Compile TypeScript

```bash
# Compile once
pnpm run build

# Watch mode (auto-compile on save)
pnpm run build:watch
```

---

## Running an Exercise

JavaScript:

```bash
node src/js/01-identify-number.js
```

Compiled TypeScript:

```bash
node dist/ts/01-identify-number.js
```

---

## Resources

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Oxc Documentation](https://oxc.rs/)
- [pnpm Documentation](https://pnpm.io/)
- [JavaScript Algorithms & Data Structures](https://github.com/trekhleb/javascript-algorithms)

---

## License

MIT

---

_Part of code-practice learning path | 2026_
