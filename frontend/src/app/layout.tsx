import './globals.css';
import Link from 'next/link';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<nav className="p-4 bg-gray-200">
					<Link href="/" className="mr-4 text-blue-600 hover:underline">
						Головна
					</Link>
					<Link
						href="/pages/Admin"
						className="mr-4 text-blue-600 hover:underline"
					>
						Адмін
					</Link>
					<Link href="/pages/User" className="text-blue-600 hover:underline">
						Користувач
					</Link>
				</nav>
				<main>{children}</main>
			</body>
		</html>
	);
}
