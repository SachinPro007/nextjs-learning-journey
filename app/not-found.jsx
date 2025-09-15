import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
        Page Not Found
      </h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
