# ReactJS Learning Repository

This repository documents my journey learning ReactJS, following the CodeWithHarry (CWH) course and other resources. It contains the projects I've built and notes I've taken along the way.

## 📂 Projects

### 1. Todo List Application

- **Directory**: `todo-list/`
- **Description**: A fully functional Todo List application that allows users to add, view, and delete daily tasks.
- **Key Concepts Learned**:
  - Functional Components
  - Props & PropTypes
  - State Management (useState)
  - JSX Syntax
  - Component Reusability

## 📚 Learning Notes

Here are some key takeaways and command references from my learning process:

### 🚀 Getting Started

To create a new React app without installing global packages, use `npx`:

```bash
npx create-react-app <app-name>
# Example:
npx create-react-app todo-list
```

### 🛠️ Common NPM Commands

- `npm start`: Starts the development server.
- `npm run build`: Bundles the app into static files for production.
- `npm test`: Starts the test runner.
- `npm run eject`: Removes the single build dependency (Warning: irreversible!).

### 💡 React Concepts

#### JSX (JavaScript XML)

- **HTML in JS**: React allows writing HTML-like syntax directly in JavaScript.
- **Dynamic Content**: Use curly braces `{}` to insert JavaScript variables or expressions.
  ```jsx
  <h1>Hello, {name}</h1>
  ```
- **Fragments**: Always wrap adjacent elements in a parent tag or a fragment `<> ... </>` because a component must return a single element.

#### Class vs ClassName

In React/JSX, use `className` instead of `class` and `htmlFor` instead of `for` because `class` and `for` are reserved keywords in JavaScript.

#### Component Naming

- **Capitalization**: Custom components **must** start with an uppercase letter (e.g., `<Header />` not `<header />`) to distinguish them from built-in HTML elements.

#### Exports & Imports

- **Default Export**:

  ```javascript
  // File: todos.js
  export default Todos;

  // Import:
  import Todos from "./my-components/todos";
  ```

- **Named Export**:

  ```javascript
  // File: todos.js
  export const Todos = () => { ... };

  // Import:
  import { Todos } from './my-components/todos';
  ```

### 🧩 VS Code Extensions

Useful snippets for quick coding:

- `rfc`: Creates a React Functional Component.
- `rafc`: Creates a React Arrow Functional Component.
