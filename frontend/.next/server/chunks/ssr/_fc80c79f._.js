module.exports = {
	'[project]/src/app/page.tsx [app-ssr] (ecmascript)': (
		__turbopack_context__,
	) => {
		'use strict';

		var { g: global, __dirname } = __turbopack_context__;
		{
			__turbopack_context__.s({
				default: () => UserPage,
			});
			var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
				__turbopack_context__.i(
					'[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
				);
			var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
				__turbopack_context__.i(
					'[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
				);
			var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
				__turbopack_context__.i(
					'[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)',
				);
			(() => {
				const e = new Error("Cannot find module './styles.module.css'");
				e.code = 'MODULE_NOT_FOUND';
				throw e;
			})();
			(() => {
				const e = new Error("Cannot find module '../app/'");
				e.code = 'MODULE_NOT_FOUND';
				throw e;
			})();
			('use client');
			function UserPage() {
				const [trains, setTrains] = (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					'useState'
				])([]);
				const [searchTerm, setSearchTerm] = (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					'useState'
				])('');
				const [sortColumn, setSortColumn] = (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					'useState'
				])(null);
				const [sortDirection, setSortDirection] = (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					'useState'
				])('asc');
				const [loading, setLoading] = (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					'useState'
				])(true);
				const [error, setError] = (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					'useState'
				])(null);
				const [user, setUser] = (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					'useState'
				])(null);
				const [token, setToken] = (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					'useState'
				])(null);
				const router = (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					'useRouter'
				])();
				const handleLogin = (user, token) => {
					setUser(user);
					setToken(token);
					localStorage.setItem('authToken', token); // Зберігаємо токен у localStorage
					router.push('/'); // Перенаправляємо на головну сторінку
				};
				(0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					'useEffect'
				])(() => {
					if (!token) return;
					const fetchTrains = async () => {
						try {
							const response = await fetch('http://localhost:3009/trains', {
								headers: {
									Authorization: `Bearer ${token}`,
								},
							});
							if (!response.ok) {
								throw new Error('Не вдалося завантажити дані');
							}
							const data = await response.json();
							setTrains(data);
							setLoading(false);
						} catch (err) {
							setError('Помилка при завантаженні даних');
							setLoading(false);
						}
					};
					fetchTrains();
				}, [token]);
				const handleSort = (column) => {
					const newDirection =
						sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc';
					setSortColumn(column);
					setSortDirection(newDirection);
					const sortedTrains = [...trains].sort((a, b) => {
						const valueA = a[column];
						const valueB = b[column];
						if (newDirection === 'asc') {
							return valueA > valueB ? 1 : -1;
						} else {
							return valueA < valueB ? 1 : -1;
						}
					});
					setTrains(sortedTrains);
				};
				const filteredTrains = trains.filter((train) =>
					train.name.toLowerCase().includes(searchTerm.toLowerCase()),
				);
				if (!user) {
					return /*#__PURE__*/ (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						'jsxDEV'
					])(
						LoginForm,
						{
							onLogin: handleLogin,
						},
						void 0,
						false,
						{
							fileName: '[project]/src/app/page.tsx',
							lineNumber: 86,
							columnNumber: 12,
						},
						this,
					);
				}
				if (loading) {
					return /*#__PURE__*/ (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						'jsxDEV'
					])(
						'div',
						{
							className: styles.container,
							children: 'Завантаження...',
						},
						void 0,
						false,
						{
							fileName: '[project]/src/app/page.tsx',
							lineNumber: 90,
							columnNumber: 12,
						},
						this,
					);
				}
				if (error) {
					return /*#__PURE__*/ (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						'jsxDEV'
					])(
						'div',
						{
							className: styles.container,
							children: error,
						},
						void 0,
						false,
						{
							fileName: '[project]/src/app/page.tsx',
							lineNumber: 94,
							columnNumber: 12,
						},
						this,
					);
				}
				return /*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					'jsxDEV'
				])(
					'div',
					{
						className: styles.container,
						children: [
							/*#__PURE__*/ (0,
							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
								'jsxDEV'
							])(
								'h1',
								{
									className: styles.title,
									children: 'Rozklad poyizdiv',
								},
								void 0,
								false,
								{
									fileName: '[project]/src/app/page.tsx',
									lineNumber: 99,
									columnNumber: 7,
								},
								this,
							),
							/*#__PURE__*/ (0,
							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
								'jsxDEV'
							])(
								'p',
								{
									children: [
										'Ви увійшли як: ',
										user.email,
										' (',
										user.role,
										')',
									],
								},
								void 0,
								true,
								{
									fileName: '[project]/src/app/page.tsx',
									lineNumber: 100,
									columnNumber: 7,
								},
								this,
							),
							user.role === 'admin' &&
								/*#__PURE__*/ (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
									'jsxDEV'
								])(
									'div',
									{
										className: styles.adminActions,
										children: /*#__PURE__*/ (0,
										__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
											'jsxDEV'
										])(
											'button',
											{
												className: styles.adminButton,
												children: 'Dodaty poyizd (Admin only)',
											},
											void 0,
											false,
											{
												fileName: '[project]/src/app/page.tsx',
												lineNumber: 104,
												columnNumber: 11,
											},
											this,
										),
									},
									void 0,
									false,
									{
										fileName: '[project]/src/app/page.tsx',
										lineNumber: 103,
										columnNumber: 9,
									},
									this,
								),
							/*#__PURE__*/ (0,
							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
								'jsxDEV'
							])(
								'div',
								{
									className: styles.searchWrapper,
									children: /*#__PURE__*/ (0,
									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
										'jsxDEV'
									])(
										'input',
										{
											type: 'text',
											placeholder: 'Poshuk za nazvoyu poyizda...',
											value: searchTerm,
											onChange: (e) => setSearchTerm(e.target.value),
											className: styles.searchInput,
										},
										void 0,
										false,
										{
											fileName: '[project]/src/app/page.tsx',
											lineNumber: 109,
											columnNumber: 9,
										},
										this,
									),
								},
								void 0,
								false,
								{
									fileName: '[project]/src/app/page.tsx',
									lineNumber: 108,
									columnNumber: 7,
								},
								this,
							),
							/*#__PURE__*/ (0,
							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
								'jsxDEV'
							])(
								'table',
								{
									className: styles.trainTable,
									children: [
										/*#__PURE__*/ (0,
										__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
											'jsxDEV'
										])(
											'thead',
											{
												children: /*#__PURE__*/ (0,
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													'jsxDEV'
												])(
													'tr',
													{
														className: styles.tableHeader,
														children: [
															/*#__PURE__*/ (0,
															__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																'jsxDEV'
															])(
																'th',
																{
																	className: styles.tableHeaderCell,
																	onClick: () => handleSort('id'),
																	children: [
																		'ID ',
																		sortColumn === 'id' &&
																			(sortDirection === 'asc' ? '↑' : '↓'),
																	],
																},
																void 0,
																true,
																{
																	fileName: '[project]/src/app/page.tsx',
																	lineNumber: 121,
																	columnNumber: 13,
																},
																this,
															),
															/*#__PURE__*/ (0,
															__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																'jsxDEV'
															])(
																'th',
																{
																	className: styles.tableHeaderCell,
																	onClick: () => handleSort('name'),
																	children: [
																		'Nazva ',
																		sortColumn === 'name' &&
																			(sortDirection === 'asc' ? '↑' : '↓'),
																	],
																},
																void 0,
																true,
																{
																	fileName: '[project]/src/app/page.tsx',
																	lineNumber: 124,
																	columnNumber: 13,
																},
																this,
															),
															/*#__PURE__*/ (0,
															__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																'jsxDEV'
															])(
																'th',
																{
																	className: styles.tableHeaderCell,
																	onClick: () => handleSort('departure'),
																	children: [
																		'Vidpravlennya ',
																		sortColumn === 'departure' &&
																			(sortDirection === 'asc' ? '↑' : '↓'),
																	],
																},
																void 0,
																true,
																{
																	fileName: '[project]/src/app/page.tsx',
																	lineNumber: 127,
																	columnNumber: 13,
																},
																this,
															),
															/*#__PURE__*/ (0,
															__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																'jsxDEV'
															])(
																'th',
																{
																	className: styles.tableHeaderCell,
																	onClick: () => handleSort('destination'),
																	children: [
																		'Pryznachennya ',
																		sortColumn === 'destination' &&
																			(sortDirection === 'asc' ? '↑' : '↓'),
																	],
																},
																void 0,
																true,
																{
																	fileName: '[project]/src/app/page.tsx',
																	lineNumber: 130,
																	columnNumber: 13,
																},
																this,
															),
															/*#__PURE__*/ (0,
															__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																'jsxDEV'
															])(
																'th',
																{
																	className: styles.tableHeaderCell,
																	onClick: () => handleSort('time'),
																	children: [
																		'Chas ',
																		sortColumn === 'time' &&
																			(sortDirection === 'asc' ? '↑' : '↓'),
																	],
																},
																void 0,
																true,
																{
																	fileName: '[project]/src/app/page.tsx',
																	lineNumber: 133,
																	columnNumber: 13,
																},
																this,
															),
														],
													},
													void 0,
													true,
													{
														fileName: '[project]/src/app/page.tsx',
														lineNumber: 120,
														columnNumber: 11,
													},
													this,
												),
											},
											void 0,
											false,
											{
												fileName: '[project]/src/app/page.tsx',
												lineNumber: 119,
												columnNumber: 9,
											},
											this,
										),
										/*#__PURE__*/ (0,
										__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
											'jsxDEV'
										])(
											'tbody',
											{
												children: filteredTrains.map((train) =>
													/*#__PURE__*/ (0,
													__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
														'jsxDEV'
													])(
														'tr',
														{
															className: styles.tableRow,
															children: [
																/*#__PURE__*/ (0,
																__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																	'jsxDEV'
																])(
																	'td',
																	{
																		className: styles.tableCell,
																		children: train.id,
																	},
																	void 0,
																	false,
																	{
																		fileName: '[project]/src/app/page.tsx',
																		lineNumber: 141,
																		columnNumber: 15,
																	},
																	this,
																),
																/*#__PURE__*/ (0,
																__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																	'jsxDEV'
																])(
																	'td',
																	{
																		className: styles.tableCell,
																		children: train.name,
																	},
																	void 0,
																	false,
																	{
																		fileName: '[project]/src/app/page.tsx',
																		lineNumber: 142,
																		columnNumber: 15,
																	},
																	this,
																),
																/*#__PURE__*/ (0,
																__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																	'jsxDEV'
																])(
																	'td',
																	{
																		className: styles.tableCell,
																		children: train.departure,
																	},
																	void 0,
																	false,
																	{
																		fileName: '[project]/src/app/page.tsx',
																		lineNumber: 143,
																		columnNumber: 15,
																	},
																	this,
																),
																/*#__PURE__*/ (0,
																__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																	'jsxDEV'
																])(
																	'td',
																	{
																		className: styles.tableCell,
																		children: train.destination,
																	},
																	void 0,
																	false,
																	{
																		fileName: '[project]/src/app/page.tsx',
																		lineNumber: 144,
																		columnNumber: 15,
																	},
																	this,
																),
																/*#__PURE__*/ (0,
																__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																	'jsxDEV'
																])(
																	'td',
																	{
																		className: styles.tableCell,
																		children: train.time,
																	},
																	void 0,
																	false,
																	{
																		fileName: '[project]/src/app/page.tsx',
																		lineNumber: 145,
																		columnNumber: 15,
																	},
																	this,
																),
															],
														},
														train.id,
														true,
														{
															fileName: '[project]/src/app/page.tsx',
															lineNumber: 140,
															columnNumber: 13,
														},
														this,
													),
												),
											},
											void 0,
											false,
											{
												fileName: '[project]/src/app/page.tsx',
												lineNumber: 138,
												columnNumber: 9,
											},
											this,
										),
									],
								},
								void 0,
								true,
								{
									fileName: '[project]/src/app/page.tsx',
									lineNumber: 118,
									columnNumber: 7,
								},
								this,
							),
						],
					},
					void 0,
					true,
					{
						fileName: '[project]/src/app/page.tsx',
						lineNumber: 98,
						columnNumber: 5,
					},
					this,
				);
			}
		}
	},
	'[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)':
		function (__turbopack_context__) {
			var {
				g: global,
				__dirname,
				m: module,
				e: exports,
			} = __turbopack_context__;
			{
				('use strict');
				module.exports = __turbopack_context__.r(
					'[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)',
				).vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
			}
		},
	'[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)': function (
		__turbopack_context__,
	) {
		var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
		{
			module.exports = __turbopack_context__.r(
				'[project]/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)',
			);
		}
	},
};

//# sourceMappingURL=_fc80c79f._.js.map
