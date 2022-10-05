import { h } from 'preact'

export default function App() {
  return (
    <div className="mx-auto my-8 mt-10 w-8/12 rounded border border-gray-200 p-4 shadow-md dark:border-neutral-600 dark:bg-neutral-800 dark:shadow-none">
      <h1 className="mb-4 text-4xl">Welcome</h1>
      <p className="my-4">
        <em>Minimal, fast, sensible defaults.</em>
      </p>
      <p className="my-4">
        Using{' '}
        <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
          Vite
        </a>
        ,{' '}
        <a href="https://preactjs.com/" target="_blank" rel="noreferrer">
          Preact
        </a>
        ,{' '}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >
          TypeScript
        </a>{' '}
        and{' '}
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          Tailwind
        </a>
        .
      </p>
      <p className="my-4">
        Change{' '}
        <code className="border-1 2py-1 rounded border border-pink-500 bg-neutral-100 px-1 font-mono text-pink-500 dark:border-pink-400 dark:bg-neutral-700 dark:text-pink-400">
          src/app.tsx
        </code>{' '}
        for live updates.
      </p>
    </div>
  )
}
