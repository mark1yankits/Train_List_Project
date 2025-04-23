(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
	typeof document === 'object' ? document.currentScript : undefined,
	{
		'[project]/src/app/pages/User/PageStyle.module.css [app-client] (css module)':
			(__turbopack_context__) => {
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
		'[project]/src/app/pages/User/page.tsx [app-client] (ecmascript)': (
			__turbopack_context__,
		) => {
			'use strict';

			var {
				g: global,
				__dirname,
				k: __turbopack_refresh__,
				m: module,
			} = __turbopack_context__;
			{
				__turbopack_context__.s({
					default: () => UserPage,
				});
				var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
					__turbopack_context__.i(
						'[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
					);
				var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
					__turbopack_context__.i(
						'[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
					);
				var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
					__turbopack_context__.i(
						'[project]/node_modules/next/navigation.js [app-client] (ecmascript)',
					);
				var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ =
					__turbopack_context__.i(
						'[project]/src/app/pages/User/PageStyle.module.css [app-client] (css module)',
					);
				var _s = __turbopack_context__.k.signature();
				('use client');
				function UserPage() {
					_s();
					const [trains, setTrains] = (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'useState'
					])([]);
					const [searchTerm, setSearchTerm] = (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'useState'
					])('');
					const [sortColumn, setSortColumn] = (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'useState'
					])(null);
					const [sortDirection, setSortDirection] = (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'useState'
					])('asc');
					const [loading, setLoading] = (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'useState'
					])(true);
					const [error, setError] = (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'useState'
					])(null);
					const [user, setUser] = (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'useState'
					])(null);
					const [token, setToken] = (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'useState'
					])(null);
					const router = (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'useRouter'
					])();
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'useEffect'
					])(
						{
							'UserPage.useEffect': () => {
								const storedToken = localStorage.getItem('authToken');
								const storedUser = localStorage.getItem('user');
								if (storedToken && storedUser) {
									setToken(storedToken);
									setUser(JSON.parse(storedUser));
								} else {
									router.push('/');
								}
							},
						}['UserPage.useEffect'],
						[router],
					);
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'useEffect'
					])(
						{
							'UserPage.useEffect': () => {
								if (!token) return;
								const fetchTrains = {
									'UserPage.useEffect.fetchTrains': async () => {
										try {
											const response = await fetch(
												'http://localhost:3009/trains',
												{
													headers: {
														Authorization: `Bearer ${token}`,
													},
												},
											);
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
									},
								}['UserPage.useEffect.fetchTrains'];
								fetchTrains();
							},
						}['UserPage.useEffect'],
						[token],
					);
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
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
							'jsxDEV'
						])(
							'div',
							{
								className:
									__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
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
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
							'jsxDEV'
						])(
							'div',
							{
								className:
									__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
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
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'jsxDEV'
					])(
						'div',
						{
							className:
								__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
									'default'
								].pageWrapper,
							children: [
								/*#__PURE__*/ (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
									'jsxDEV'
								])(
									'h1',
									{
										className:
											__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
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
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
									'jsxDEV'
								])(
									'div',
									{
										className:
											__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
												'default'
											].userHeader,
										children: [
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
												'jsxDEV'
											])(
												'p',
												{
													className:
														__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
															'default'
														].userInfo,
													children: [
														'Вітаємо  ',
														user?.name,
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
															'jsxDEV'
														])(
															'br',
															{},
															void 0,
															false,
															{
																fileName:
																	'[project]/src/app/pages/User/page.tsx',
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
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
												'jsxDEV'
											])(
												'button',
												{
													className:
														__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
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
									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
										'jsxDEV'
									])(
										'div',
										{
											className:
												__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
													'default'
												].adminControls,
											children: /*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
												'jsxDEV'
											])(
												'button',
												{
													className:
														__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
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
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
									'jsxDEV'
								])(
									'div',
									{
										className:
											__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
												'default'
											].searchContainer,
										children: /*#__PURE__*/ (0,
										__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
											'jsxDEV'
										])(
											'input',
											{
												type: 'text',
												placeholder: 'Enter train name...',
												value: searchTerm,
												onChange: (e) => setSearchTerm(e.target.value),
												className:
													__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
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
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
									'jsxDEV'
								])(
									'table',
									{
										className:
											__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
												'default'
											].scheduleTable,
										children: [
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
												'jsxDEV'
											])(
												'thead',
												{
													children: /*#__PURE__*/ (0,
													__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
														'jsxDEV'
													])(
														'tr',
														{
															className:
																__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
																	'default'
																].tableHeaderRow,
															children: [
																/*#__PURE__*/ (0,
																__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
																	'jsxDEV'
																])(
																	'th',
																	{
																		className:
																			__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
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
																__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
																	'jsxDEV'
																])(
																	'th',
																	{
																		className:
																			__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
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
																__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
																	'jsxDEV'
																])(
																	'th',
																	{
																		className:
																			__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
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
																__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
																	'jsxDEV'
																])(
																	'th',
																	{
																		className:
																			__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
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
																__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
																	'jsxDEV'
																])(
																	'th',
																	{
																		className:
																			__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
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
																__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
																	'jsxDEV'
																])(
																	'th',
																	{
																		className:
																			__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
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
																__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
																	'jsxDEV'
																])(
																	'th',
																	{
																		className:
																			__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
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
																__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
																	'jsxDEV'
																])(
																	'th',
																	{
																		className:
																			__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
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
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
												'jsxDEV'
											])(
												'tbody',
												{
													children: filteredTrains.map((train) =>
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
															'jsxDEV'
														])(
															'tr',
															{
																className:
																	__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
																		'default'
																	].tableRow,
																children: [
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
																		'jsxDEV'
																	])(
																		'td',
																		{
																			className:
																				__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
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
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
																		'jsxDEV'
																	])(
																		'td',
																		{
																			className:
																				__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
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
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
																		'jsxDEV'
																	])(
																		'td',
																		{
																			className:
																				__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
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
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
																		'jsxDEV'
																	])(
																		'td',
																		{
																			className:
																				__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
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
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
																		'jsxDEV'
																	])(
																		'td',
																		{
																			className:
																				__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
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
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
																		'jsxDEV'
																	])(
																		'td',
																		{
																			className:
																				__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
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
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
																		'jsxDEV'
																	])(
																		'td',
																		{
																			className:
																				__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
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
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
																		'jsxDEV'
																	])(
																		'td',
																		{
																			className:
																				__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
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
																fileName:
																	'[project]/src/app/pages/User/page.tsx',
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
				_s(UserPage, 'jUt8Ck6TYT7yl0MuTcKWfdZxJRo=', false, function () {
					return [
						__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
							'useRouter'
						],
					];
				});
				_c = UserPage;
				var _c;
				__turbopack_context__.k.register(_c, 'UserPage');
				if (
					typeof globalThis.$RefreshHelpers$ === 'object' &&
					globalThis.$RefreshHelpers !== null
				) {
					__turbopack_context__.k.registerExports(
						module,
						globalThis.$RefreshHelpers$,
					);
				}
			}
		},
		'[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)':
			function (__turbopack_context__) {
				var {
					g: global,
					__dirname,
					m: module,
					e: exports,
				} = __turbopack_context__;
				{
					/**
					 * @license React
					 * react-jsx-dev-runtime.development.js
					 *
					 * Copyright (c) Meta Platforms, Inc. and affiliates.
					 *
					 * This source code is licensed under the MIT license found in the
					 * LICENSE file in the root directory of this source tree.
					 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							'[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)',
						);
					('use strict');
					'production' !== ('TURBOPACK compile-time value', 'development') &&
						(function () {
							function getComponentNameFromType(type) {
								if (null == type) return null;
								if ('function' === typeof type)
									return type.$$typeof === REACT_CLIENT_REFERENCE
										? null
										: type.displayName || type.name || null;
								if ('string' === typeof type) return type;
								switch (type) {
									case REACT_FRAGMENT_TYPE:
										return 'Fragment';
									case REACT_PROFILER_TYPE:
										return 'Profiler';
									case REACT_STRICT_MODE_TYPE:
										return 'StrictMode';
									case REACT_SUSPENSE_TYPE:
										return 'Suspense';
									case REACT_SUSPENSE_LIST_TYPE:
										return 'SuspenseList';
									case REACT_ACTIVITY_TYPE:
										return 'Activity';
								}
								if ('object' === typeof type)
									switch (
										('number' === typeof type.tag &&
											console.error(
												'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.',
											),
										type.$$typeof)
									) {
										case REACT_PORTAL_TYPE:
											return 'Portal';
										case REACT_CONTEXT_TYPE:
											return (type.displayName || 'Context') + '.Provider';
										case REACT_CONSUMER_TYPE:
											return (
												(type._context.displayName || 'Context') + '.Consumer'
											);
										case REACT_FORWARD_REF_TYPE:
											var innerType = type.render;
											type = type.displayName;
											type ||
												((type = innerType.displayName || innerType.name || ''),
												(type =
													'' !== type
														? 'ForwardRef(' + type + ')'
														: 'ForwardRef'));
											return type;
										case REACT_MEMO_TYPE:
											return (
												(innerType = type.displayName || null),
												null !== innerType
													? innerType
													: getComponentNameFromType(type.type) || 'Memo'
											);
										case REACT_LAZY_TYPE:
											innerType = type._payload;
											type = type._init;
											try {
												return getComponentNameFromType(type(innerType));
											} catch (x) {}
									}
								return null;
							}
							function testStringCoercion(value) {
								return '' + value;
							}
							function checkKeyStringCoercion(value) {
								try {
									testStringCoercion(value);
									var JSCompiler_inline_result = !1;
								} catch (e) {
									JSCompiler_inline_result = !0;
								}
								if (JSCompiler_inline_result) {
									JSCompiler_inline_result = console;
									var JSCompiler_temp_const = JSCompiler_inline_result.error;
									var JSCompiler_inline_result$jscomp$0 =
										('function' === typeof Symbol &&
											Symbol.toStringTag &&
											value[Symbol.toStringTag]) ||
										value.constructor.name ||
										'Object';
									JSCompiler_temp_const.call(
										JSCompiler_inline_result,
										'The provided key is an unsupported type %s. This value must be coerced to a string before using it here.',
										JSCompiler_inline_result$jscomp$0,
									);
									return testStringCoercion(value);
								}
							}
							function getTaskName(type) {
								if (type === REACT_FRAGMENT_TYPE) return '<>';
								if (
									'object' === typeof type &&
									null !== type &&
									type.$$typeof === REACT_LAZY_TYPE
								)
									return '<...>';
								try {
									var name = getComponentNameFromType(type);
									return name ? '<' + name + '>' : '<...>';
								} catch (x) {
									return '<...>';
								}
							}
							function getOwner() {
								var dispatcher = ReactSharedInternals.A;
								return null === dispatcher ? null : dispatcher.getOwner();
							}
							function UnknownOwner() {
								return Error('react-stack-top-frame');
							}
							function hasValidKey(config) {
								if (hasOwnProperty.call(config, 'key')) {
									var getter = Object.getOwnPropertyDescriptor(
										config,
										'key',
									).get;
									if (getter && getter.isReactWarning) return !1;
								}
								return void 0 !== config.key;
							}
							function defineKeyPropWarningGetter(props, displayName) {
								function warnAboutAccessingKey() {
									specialPropKeyWarningShown ||
										((specialPropKeyWarningShown = !0),
										console.error(
											'%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)',
											displayName,
										));
								}
								warnAboutAccessingKey.isReactWarning = !0;
								Object.defineProperty(props, 'key', {
									get: warnAboutAccessingKey,
									configurable: !0,
								});
							}
							function elementRefGetterWithDeprecationWarning() {
								var componentName = getComponentNameFromType(this.type);
								didWarnAboutElementRef[componentName] ||
									((didWarnAboutElementRef[componentName] = !0),
									console.error(
										'Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.',
									));
								componentName = this.props.ref;
								return void 0 !== componentName ? componentName : null;
							}
							function ReactElement(
								type,
								key,
								self,
								source,
								owner,
								props,
								debugStack,
								debugTask,
							) {
								self = props.ref;
								type = {
									$$typeof: REACT_ELEMENT_TYPE,
									type: type,
									key: key,
									props: props,
									_owner: owner,
								};
								null !== (void 0 !== self ? self : null)
									? Object.defineProperty(type, 'ref', {
											enumerable: !1,
											get: elementRefGetterWithDeprecationWarning,
										})
									: Object.defineProperty(type, 'ref', {
											enumerable: !1,
											value: null,
										});
								type._store = {};
								Object.defineProperty(type._store, 'validated', {
									configurable: !1,
									enumerable: !1,
									writable: !0,
									value: 0,
								});
								Object.defineProperty(type, '_debugInfo', {
									configurable: !1,
									enumerable: !1,
									writable: !0,
									value: null,
								});
								Object.defineProperty(type, '_debugStack', {
									configurable: !1,
									enumerable: !1,
									writable: !0,
									value: debugStack,
								});
								Object.defineProperty(type, '_debugTask', {
									configurable: !1,
									enumerable: !1,
									writable: !0,
									value: debugTask,
								});
								Object.freeze &&
									(Object.freeze(type.props), Object.freeze(type));
								return type;
							}
							function jsxDEVImpl(
								type,
								config,
								maybeKey,
								isStaticChildren,
								source,
								self,
								debugStack,
								debugTask,
							) {
								var children = config.children;
								if (void 0 !== children)
									if (isStaticChildren)
										if (isArrayImpl(children)) {
											for (
												isStaticChildren = 0;
												isStaticChildren < children.length;
												isStaticChildren++
											)
												validateChildKeys(children[isStaticChildren]);
											Object.freeze && Object.freeze(children);
										} else
											console.error(
												'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.',
											);
									else validateChildKeys(children);
								if (hasOwnProperty.call(config, 'key')) {
									children = getComponentNameFromType(type);
									var keys = Object.keys(config).filter(function (k) {
										return 'key' !== k;
									});
									isStaticChildren =
										0 < keys.length
											? '{key: someKey, ' + keys.join(': ..., ') + ': ...}'
											: '{key: someKey}';
									didWarnAboutKeySpread[children + isStaticChildren] ||
										((keys =
											0 < keys.length
												? '{' + keys.join(': ..., ') + ': ...}'
												: '{}'),
										console.error(
											'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
											isStaticChildren,
											children,
											keys,
											children,
										),
										(didWarnAboutKeySpread[children + isStaticChildren] = !0));
								}
								children = null;
								void 0 !== maybeKey &&
									(checkKeyStringCoercion(maybeKey),
									(children = '' + maybeKey));
								hasValidKey(config) &&
									(checkKeyStringCoercion(config.key),
									(children = '' + config.key));
								if ('key' in config) {
									maybeKey = {};
									for (var propName in config)
										'key' !== propName &&
											(maybeKey[propName] = config[propName]);
								} else maybeKey = config;
								children &&
									defineKeyPropWarningGetter(
										maybeKey,
										'function' === typeof type
											? type.displayName || type.name || 'Unknown'
											: type,
									);
								return ReactElement(
									type,
									children,
									self,
									source,
									getOwner(),
									maybeKey,
									debugStack,
									debugTask,
								);
							}
							function validateChildKeys(node) {
								'object' === typeof node &&
									null !== node &&
									node.$$typeof === REACT_ELEMENT_TYPE &&
									node._store &&
									(node._store.validated = 1);
							}
							var React = __turbopack_context__.r(
									'[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
								),
								REACT_ELEMENT_TYPE = Symbol.for('react.transitional.element'),
								REACT_PORTAL_TYPE = Symbol.for('react.portal'),
								REACT_FRAGMENT_TYPE = Symbol.for('react.fragment'),
								REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode'),
								REACT_PROFILER_TYPE = Symbol.for('react.profiler');
							Symbol.for('react.provider');
							var REACT_CONSUMER_TYPE = Symbol.for('react.consumer'),
								REACT_CONTEXT_TYPE = Symbol.for('react.context'),
								REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref'),
								REACT_SUSPENSE_TYPE = Symbol.for('react.suspense'),
								REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list'),
								REACT_MEMO_TYPE = Symbol.for('react.memo'),
								REACT_LAZY_TYPE = Symbol.for('react.lazy'),
								REACT_ACTIVITY_TYPE = Symbol.for('react.activity'),
								REACT_CLIENT_REFERENCE = Symbol.for('react.client.reference'),
								ReactSharedInternals =
									React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
								hasOwnProperty = Object.prototype.hasOwnProperty,
								isArrayImpl = Array.isArray,
								createTask = console.createTask
									? console.createTask
									: function () {
											return null;
										};
							React = {
								'react-stack-bottom-frame': function (callStackForError) {
									return callStackForError();
								},
							};
							var specialPropKeyWarningShown;
							var didWarnAboutElementRef = {};
							var unknownOwnerDebugStack = React[
								'react-stack-bottom-frame'
							].bind(React, UnknownOwner)();
							var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
							var didWarnAboutKeySpread = {};
							exports.Fragment = REACT_FRAGMENT_TYPE;
							exports.jsxDEV = function (
								type,
								config,
								maybeKey,
								isStaticChildren,
								source,
								self,
							) {
								var trackActualOwner =
									1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
								return jsxDEVImpl(
									type,
									config,
									maybeKey,
									isStaticChildren,
									source,
									self,
									trackActualOwner
										? Error('react-stack-top-frame')
										: unknownOwnerDebugStack,
									trackActualOwner
										? createTask(getTaskName(type))
										: unknownOwnerDebugTask,
								);
							};
						})();
				}
			},
		'[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)':
			function (__turbopack_context__) {
				var {
					g: global,
					__dirname,
					m: module,
					e: exports,
				} = __turbopack_context__;
				{
					var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
						__turbopack_context__.i(
							'[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)',
						);
					('use strict');
					if (('TURBOPACK compile-time falsy', 0)) {
						('TURBOPACK unreachable');
					} else {
						module.exports = __turbopack_context__.r(
							'[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)',
						);
					}
				}
			},
		'[project]/node_modules/next/navigation.js [app-client] (ecmascript)':
			function (__turbopack_context__) {
				var {
					g: global,
					__dirname,
					m: module,
					e: exports,
				} = __turbopack_context__;
				{
					module.exports = __turbopack_context__.r(
						'[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)',
					);
				}
			},
	},
]);

//# sourceMappingURL=_3b8850c3._.js.map
