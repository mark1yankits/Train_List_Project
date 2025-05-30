module.exports = {
	'[project]/src/app/pages/User/PageStyle.module.css [app-ssr] (css module)': (
		__turbopack_context__,
	) => {
		var { g: global, __dirname } = __turbopack_context__;
		{
			__turbopack_context__.v({
				container: 'PageStyle-module__cyIYoq__container',
				searchInput: 'PageStyle-module__cyIYoq__searchInput',
				searchWrapper: 'PageStyle-module__cyIYoq__searchWrapper',
				tableCell: 'PageStyle-module__cyIYoq__tableCell',
				tableHeader: 'PageStyle-module__cyIYoq__tableHeader',
				tableHeaderCell: 'PageStyle-module__cyIYoq__tableHeaderCell',
				tableRow: 'PageStyle-module__cyIYoq__tableRow',
				title: 'PageStyle-module__cyIYoq__title',
				trainTable: 'PageStyle-module__cyIYoq__trainTable',
			});
		}
	},
	'[project]/src/app/pages/User/page.tsx [app-ssr] (ecmascript)': (
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
			var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ =
				__turbopack_context__.i(
					'[project]/src/app/pages/User/PageStyle.module.css [app-ssr] (css module)',
				);
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
				(0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					'useEffect'
				])(() => {
					const storedToken = localStorage.getItem('authToken');
					const storedUser = localStorage.getItem('user');
					if (storedToken && storedUser) {
						setToken(storedToken);
						setUser(JSON.parse(storedUser));
					} else {
						router.push('/');
					}
				}, [router]);
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
								throw new Error('Unable to upload data');
							}
							const data = await response.json();
							setTrains(data);
							setLoading(false);
						} catch (err) {
							setError('ERROR to upload data');
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
					train.trainName.toLowerCase().includes(searchTerm.toLowerCase()),
				);
				const handleLogout = () => {
					localStorage.removeItem('authToken');
					localStorage.removeItem('user');
					setUser(null);
					setToken(null);
					setTrains([]);
					router.push('/');
				};
				if (loading) {
					return /*#__PURE__*/ (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
						'jsxDEV'
					])(
						'div',
						{
							className:
								__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
									'default'
								].pageWrapper,
							children: 'Завантаження...',
						},
						void 0,
						false,
						{
							fileName: '[project]/src/app/pages/User/page.tsx',
							lineNumber: 103,
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
							className:
								__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
									'default'
								].pageWrapper,
							children: error,
						},
						void 0,
						false,
						{
							fileName: '[project]/src/app/pages/User/page.tsx',
							lineNumber: 107,
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
						className:
							__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
								'default'
							].pageWrapper,
						children: [
							/*#__PURE__*/ (0,
							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
								'jsxDEV'
							])(
								'h1',
								{
									className:
										__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
											'default'
										].pageTitle,
									children: 'Train schedule',
								},
								void 0,
								false,
								{
									fileName: '[project]/src/app/pages/User/page.tsx',
									lineNumber: 112,
									columnNumber: 7,
								},
								this,
							),
							/*#__PURE__*/ (0,
							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
								'jsxDEV'
							])(
								'div',
								{
									className:
										__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
											'default'
										].userHeader,
									children: [
										/*#__PURE__*/ (0,
										__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
											'jsxDEV'
										])(
											'p',
											{
												className:
													__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
														'default'
													].userInfo,
												children: [
													'Вітаємо  ',
													user?.name,
													/*#__PURE__*/ (0,
													__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
														'jsxDEV'
													])(
														'br',
														{},
														void 0,
														false,
														{
															fileName: '[project]/src/app/pages/User/page.tsx',
															lineNumber: 114,
															columnNumber: 61,
														},
														this,
													),
													' Приємного перегляду',
												],
											},
											void 0,
											true,
											{
												fileName: '[project]/src/app/pages/User/page.tsx',
												lineNumber: 114,
												columnNumber: 9,
											},
											this,
										),
										/*#__PURE__*/ (0,
										__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
											'jsxDEV'
										])(
											'button',
											{
												className:
													__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
														'default'
													].logoutButton,
												onClick: handleLogout,
												children: 'Вийти',
											},
											void 0,
											false,
											{
												fileName: '[project]/src/app/pages/User/page.tsx',
												lineNumber: 115,
												columnNumber: 9,
											},
											this,
										),
									],
								},
								void 0,
								true,
								{
									fileName: '[project]/src/app/pages/User/page.tsx',
									lineNumber: 113,
									columnNumber: 7,
								},
								this,
							),
							user?.role === 'admin' &&
								/*#__PURE__*/ (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
									'jsxDEV'
								])(
									'div',
									{
										className:
											__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
												'default'
											].adminControls,
										children: /*#__PURE__*/ (0,
										__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
											'jsxDEV'
										])(
											'button',
											{
												className:
													__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
														'default'
													].adminAddButton,
												children: 'Add train (Admin only)',
											},
											void 0,
											false,
											{
												fileName: '[project]/src/app/pages/User/page.tsx',
												lineNumber: 122,
												columnNumber: 11,
											},
											this,
										),
									},
									void 0,
									false,
									{
										fileName: '[project]/src/app/pages/User/page.tsx',
										lineNumber: 121,
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
									className:
										__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
											'default'
										].searchContainer,
									children: /*#__PURE__*/ (0,
									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
										'jsxDEV'
									])(
										'input',
										{
											type: 'text',
											placeholder: 'Enter train name...',
											value: searchTerm,
											onChange: (e) => setSearchTerm(e.target.value),
											className:
												__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
													'default'
												].searchField,
										},
										void 0,
										false,
										{
											fileName: '[project]/src/app/pages/User/page.tsx',
											lineNumber: 127,
											columnNumber: 9,
										},
										this,
									),
								},
								void 0,
								false,
								{
									fileName: '[project]/src/app/pages/User/page.tsx',
									lineNumber: 126,
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
									className:
										__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
											'default'
										].scheduleTable,
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
														className:
															__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
																'default'
															].tableHeaderRow,
														children: [
															/*#__PURE__*/ (0,
															__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																'jsxDEV'
															])(
																'th',
																{
																	className:
																		__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
																			'default'
																		].tableHeaderItem,
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
																	fileName:
																		'[project]/src/app/pages/User/page.tsx',
																	lineNumber: 139,
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
																	className:
																		__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
																			'default'
																		].tableHeaderItem,
																	onClick: () => handleSort('trainName'),
																	children: [
																		'Train name ',
																		sortColumn === 'trainName' &&
																			(sortDirection === 'asc' ? '↑' : '↓'),
																	],
																},
																void 0,
																true,
																{
																	fileName:
																		'[project]/src/app/pages/User/page.tsx',
																	lineNumber: 142,
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
																	className:
																		__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
																			'default'
																		].tableHeaderItem,
																	onClick: () => handleSort('trainNumber'),
																	children: [
																		'Number ',
																		sortColumn === 'trainNumber' &&
																			(sortDirection === 'asc' ? '↑' : '↓'),
																	],
																},
																void 0,
																true,
																{
																	fileName:
																		'[project]/src/app/pages/User/page.tsx',
																	lineNumber: 145,
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
																	className:
																		__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
																			'default'
																		].tableHeaderItem,
																	onClick: () => handleSort('departureCity'),
																	children: [
																		'City departure ',
																		sortColumn === 'departureCity' &&
																			(sortDirection === 'asc' ? '↑' : '↓'),
																	],
																},
																void 0,
																true,
																{
																	fileName:
																		'[project]/src/app/pages/User/page.tsx',
																	lineNumber: 148,
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
																	className:
																		__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
																			'default'
																		].tableHeaderItem,
																	onClick: () => handleSort('arrivalCity'),
																	children: [
																		'City arrival ',
																		sortColumn === 'arrivalCity' &&
																			(sortDirection === 'asc' ? '↑' : '↓'),
																	],
																},
																void 0,
																true,
																{
																	fileName:
																		'[project]/src/app/pages/User/page.tsx',
																	lineNumber: 151,
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
																	className:
																		__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
																			'default'
																		].tableHeaderItem,
																	onClick: () => handleSort('departureTime'),
																	children: [
																		'Time departure ',
																		sortColumn === 'departureTime' &&
																			(sortDirection === 'asc' ? '↑' : '↓'),
																	],
																},
																void 0,
																true,
																{
																	fileName:
																		'[project]/src/app/pages/User/page.tsx',
																	lineNumber: 154,
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
																	className:
																		__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
																			'default'
																		].tableHeaderItem,
																	onClick: () => handleSort('arrivalTime'),
																	children: [
																		'Time arrival ',
																		sortColumn === 'arrivalTime' &&
																			(sortDirection === 'asc' ? '↑' : '↓'),
																	],
																},
																void 0,
																true,
																{
																	fileName:
																		'[project]/src/app/pages/User/page.tsx',
																	lineNumber: 157,
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
																	className:
																		__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
																			'default'
																		].tableHeaderItem,
																	onClick: () => handleSort('duration'),
																	children: [
																		'Duration ',
																		sortColumn === 'duration' &&
																			(sortDirection === 'asc' ? '↑' : '↓'),
																	],
																},
																void 0,
																true,
																{
																	fileName:
																		'[project]/src/app/pages/User/page.tsx',
																	lineNumber: 160,
																	columnNumber: 13,
																},
																this,
															),
														],
													},
													void 0,
													true,
													{
														fileName: '[project]/src/app/pages/User/page.tsx',
														lineNumber: 138,
														columnNumber: 11,
													},
													this,
												),
											},
											void 0,
											false,
											{
												fileName: '[project]/src/app/pages/User/page.tsx',
												lineNumber: 137,
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
															className:
																__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
																	'default'
																].tableRow,
															children: [
																/*#__PURE__*/ (0,
																__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
																	'jsxDEV'
																])(
																	'td',
																	{
																		className:
																			__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
																				'default'
																			].tableCell,
																		children: train.id,
																	},
																	void 0,
																	false,
																	{
																		fileName:
																			'[project]/src/app/pages/User/page.tsx',
																		lineNumber: 168,
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
																		className:
																			__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
																				'default'
																			].tableCell,
																		children: train.trainName,
																	},
																	void 0,
																	false,
																	{
																		fileName:
																			'[project]/src/app/pages/User/page.tsx',
																		lineNumber: 169,
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
																		className:
																			__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
																				'default'
																			].tableCell,
																		children: train.trainNumber,
																	},
																	void 0,
																	false,
																	{
																		fileName:
																			'[project]/src/app/pages/User/page.tsx',
																		lineNumber: 170,
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
																		className:
																			__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
																				'default'
																			].tableCell,
																		children: train.departureCity,
																	},
																	void 0,
																	false,
																	{
																		fileName:
																			'[project]/src/app/pages/User/page.tsx',
																		lineNumber: 171,
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
																		className:
																			__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
																				'default'
																			].tableCell,
																		children: train.arrivalCity,
																	},
																	void 0,
																	false,
																	{
																		fileName:
																			'[project]/src/app/pages/User/page.tsx',
																		lineNumber: 172,
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
																		className:
																			__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
																				'default'
																			].tableCell,
																		children: new Date(
																			train.departureTime,
																		).toLocaleString(),
																	},
																	void 0,
																	false,
																	{
																		fileName:
																			'[project]/src/app/pages/User/page.tsx',
																		lineNumber: 173,
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
																		className:
																			__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
																				'default'
																			].tableCell,
																		children: new Date(
																			train.arrivalTime,
																		).toLocaleString(),
																	},
																	void 0,
																	false,
																	{
																		fileName:
																			'[project]/src/app/pages/User/page.tsx',
																		lineNumber: 176,
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
																		className:
																			__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
																				'default'
																			].tableCell,
																		children: train.duration,
																	},
																	void 0,
																	false,
																	{
																		fileName:
																			'[project]/src/app/pages/User/page.tsx',
																		lineNumber: 179,
																		columnNumber: 15,
																	},
																	this,
																),
															],
														},
														train.id,
														true,
														{
															fileName: '[project]/src/app/pages/User/page.tsx',
															lineNumber: 167,
															columnNumber: 13,
														},
														this,
													),
												),
											},
											void 0,
											false,
											{
												fileName: '[project]/src/app/pages/User/page.tsx',
												lineNumber: 165,
												columnNumber: 9,
											},
											this,
										),
									],
								},
								void 0,
								true,
								{
									fileName: '[project]/src/app/pages/User/page.tsx',
									lineNumber: 136,
									columnNumber: 7,
								},
								this,
							),
						],
					},
					void 0,
					true,
					{
						fileName: '[project]/src/app/pages/User/page.tsx',
						lineNumber: 111,
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

//# sourceMappingURL=_0317d380._.js.map
