import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold my-4">The page is not found</h2>
      <p>
        Go to the home page{" "}
        <Link className="bg-task-100 text-white p-2 rounded-lg" href="/">
          Home
        </Link>
      </p>
    </div>
  );
}
