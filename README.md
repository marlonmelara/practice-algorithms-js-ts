# practice-algorithms-js-ts

Algorithms and data structures exercises solved in JavaScript and TypeScript.
Each exercise includes problem statement, solution, and detailed explanation.

## Project Structure

```
practice-algorithms-js-ts/
├── src/
│   ├── js/
│   │   ├── 01-identify-number.js
│   │   ├── ...
│   ├── ts/
│   │   ├── 01-identify-number.ts
│   │   ├── ...
│   ├── ejercicios-de-logica.md
│   └── index.html
├── dist/
│   └── (compiled TypeScript output)
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── oxlintrc.json
├── .gitignore
└── README.md
```

---

## Directory Explanation

- **`src/js/`** - Vanilla JavaScript solutions
- **`src/ts/`** - TypeScript implementations with static typing
- **`src/ejercicios-de-logica.md`** - Problem statements and guides
- **`src/index.html`** - Optional HTML interface
- **`dist/`** - Compiled JavaScript output from TypeScript

---

## Tech Stack

- **JavaScript** (.js) - Vanilla JS implementations
- **TypeScript** (.ts) - Type-safe, static typing versions
- **pnpm** - Package manager
- **TypeScript Compiler** - Transpile TS to JS
- **oxlint** - Linting for JS/TS
- **oxfmt** - Code formatting for JS/TS

---

## Prerequisites

- **Node.js** (v16+)
- **pnpm** (https://pnpm.io/installation)

---

## Getting Started

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Compile TypeScript

```bash
# Compile once
pnpm run build

# Watch mode (auto-compile on save)
pnpm run build:watch
```

Output files go to `dist/` folder, preserving the directory structure from `src/ts/`.

### 3. Run Exercises

```bash
# Run JavaScript version
node src/js/01-identify-number.js

# Run compiled TypeScript
node dist/ts/01-identify-number.js
```

### 4. View in Browser (Optional)

Open `src/index.html` in your browser if it has interactive exercises.

---

## Code Quality

### Linting

```bash
# Check for issues in src/
pnpm run lint

# Fix issues automatically
pnpm run lint:fix
```

### Formatting

```bash
# Format all files in src/
pnpm run format

# Check formatting without changes
pnpm run format:check
```

---

## Exercise List

| #   | Exercise             | JS  | TS  | Docs |
| --- | -------------------- | --- | --- | ---- |
| 01  | Identify Number      | ✓   | ✓   | ✓    |
| 02  | Sum and Average      | ✓   | ✓   | ✓    |
| 03  | Get Numbers Range    | ✓   | ✓   | ✓    |
| 04  | Get Odd Numbers      | ✓   | ✓   | ✓    |
| 05  | Factoring Calculator | ✓   | ✓   | ✓    |
| 06  | Misc Array           | ✓   | ✓   | ✓    |
| 07  | Tech Search Array    | ✓   | ✓   | ✓    |

---

## Topics Covered

- **Data Structures**: Arrays, objects, strings
- **Algorithms**: Search, filtering, sorting, mathematical operations
- **Programming Concepts**: Loops, conditionals, functions, recursion
- **Type Safety**: TypeScript static typing, interfaces, generics

---

## Exercise Format

Each exercise includes:

- `src/js/XX-exercise-name.js` - JavaScript implementation
- `src/ts/XX-exercise-name.ts` - TypeScript implementation
- `src/ejercicios-de-logica.md` - Problem statements & explanations

Files feature:

- Problem statement and requirements
- Step-by-step explanation
- Complete solution code with comments
- Time and space complexity analysis
- Test cases and examples

---

## What I Learned

- Algorithm design and implementation
- Data structure manipulation
- TypeScript typing and interfaces
- Build workflows with TypeScript
- Code linting and formatting automation
- Problem decomposition and optimization
- Organizing code in meaningful directory structures

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
