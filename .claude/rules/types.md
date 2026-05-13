---
description: This file describes the TypeScript code style for the project.
globs:
  - '**/*.ts'
  - '**/*.tsx'
alwaysApply: true
---

# Nullable Types

Never use raw `T | null`, `T | undefined`, or `T | null | undefined` inline.
Use the project's utility types instead:

| Instead of               | Use           |
| ------------------------ | ------------- |
| `T \| null`              | `Nullish<T>`  |
| `T \| undefined`         | `Optional<T>` |
| `T \| null \| undefined` | `Nullish<T>`  |

This ensures that the codebase has a consistent way of representing nullable types, and it allows for better readability and maintainability.

## Examples

```typescript
// ❌ Bad
function getUser(id: string): User | null { ... }
let name: string | undefined;
function find(): Item | null | undefined { ... }

// ✅ Good
function getUser(id: string): Nullable<User> { ... }
let name: Optional<string>;
function find(): Nullish<Item> { ... }
```

## No import needed

`Nullish<T>` and `Optional<T>` are declared globally in `global.d.ts`.
Never import them — they are available everywhere in the project without any import statement.

```typescript
// ❌ Bad
import type { Nullish } from '@/types/global';

// ✅ Good
// No import — just use Nullish and Optional directly
```
