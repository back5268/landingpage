export default function Footer() {
  return (
    <footer className="bg-black/50 border-t border-gray-800 py-8">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        <p className="mt-2 text-sm">Built with Next.js, Tailwind CSS & Framer Motion</p>
      </div>
    </footer>
  );
}
