(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
	typeof document === 'object' ? document.currentScript : undefined,
	{
		'[project]/src/app/pages/Admin/AdminPage.module.css [app-client] (css module)':
			(__turbopack_context__) => {
				var { g: global, __dirname } = __turbopack_context__;
				{
					__turbopack_context__.v({
						adminContainer: 'AdminPage-module__VIVoiG__adminContainer',
						deleteButton: 'AdminPage-module__VIVoiG__deleteButton',
						editButton: 'AdminPage-module__VIVoiG__editButton',
						form: 'AdminPage-module__VIVoiG__form',
						formInput: 'AdminPage-module__VIVoiG__formInput',
						formTitle: 'AdminPage-module__VIVoiG__formTitle',
						searchInput: 'AdminPage-module__VIVoiG__searchInput',
						submitButton: 'AdminPage-module__VIVoiG__submitButton',
						title: 'AdminPage-module__VIVoiG__title',
						trainTable: 'AdminPage-module__VIVoiG__trainTable',
					});
				}
			},
		'[project]/src/app/pages/Admin/page.tsx [app-client] (ecmascript)': (
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
					default: () => AdminPage,
				});
				var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
					__turbopack_context__.i(
						'[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
					);
				var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
					__turbopack_context__.i(
						'[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
					);
				var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ =
					__turbopack_context__.i(
						'[project]/src/app/pages/Admin/AdminPage.module.css [app-client] (css module)',
					);
				var _s = __turbopack_context__.k.signature();
				('use client');
				function AdminPage() {
					_s();
					const [trains, setTrains] = (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'useState'
					])([]);
					const [searchQuery, setSearchQuery] = (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'useState'
					])('');
					const [formTrain, setFormTrain] = (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'useState'
					])({
						id: 0,
						trainName: '',
						trainNumber: '',
						departCity: '',
						arrivalCity: '',
						departTime: '',
						arrivalTime: '',
						duration: '',
					});
					const [isEditing, setIsEditing] = (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'useState'
					])(false);
					const [error, setError] = (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'useState'
					])(null);
					const fetchTrains = async () => {
						try {
							const response = await fetch('http://localhost:3009/trains');
							if (!response.ok)
								throw new Error('Не вдалося завантажити розклад');
							const data = await response.json();
							const normalizedTrains = data.map((train) => ({
								id: train.id || 0,
								trainName: train.trainName || '',
								trainNumber: train.trainNumber || '',
								departCity: train.departCity || '',
								arrivalCity: train.arrivalCity || '',
								departTime: train.departTime || '',
								arrivalTime: train.arrivalTime || '',
								duration: train.duration || '',
							}));
							setTrains(normalizedTrains);
						} catch (error) {
							console.error(error);
							setError('Не вдалося завантажити розклад. Перевірте сервер.');
						}
					};
					(0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'useEffect'
					])(
						{
							'AdminPage.useEffect': () => {
								fetchTrains();
							},
						}['AdminPage.useEffect'],
						[],
					);
					const handleSearch = (e) => {
						setSearchQuery(e.target.value);
					};
					const filteredTrains = trains.filter(
						(train) =>
							train.trainName
								.toLowerCase()
								.includes(searchQuery.toLowerCase()) ||
							train.trainNumber.includes(searchQuery) ||
							train.departCity
								.toLowerCase()
								.includes(searchQuery.toLowerCase()) ||
							train.arrivalCity
								.toLowerCase()
								.includes(searchQuery.toLowerCase()),
					);
					const handleEdit = (train) => {
						if (!train.id) {
							setError('Невалідний ID потяга');
							return;
						}
						setFormTrain({
							id: train.id,
							trainName: train.trainName || '',
							trainNumber: train.trainNumber || '',
							departCity: train.departCity || '',
							arrivalCity: train.arrivalCity || '',
							departTime: train.departTime || '',
							arrivalTime: train.arrivalTime || '',
							duration: train.duration || '',
						});
						setIsEditing(true);
					};
					const handleDelete = async (id) => {
						try {
							const trainExists = trains.find((train) => train.id === id);
							if (!trainExists) {
								throw new Error(
									`Потяг з ID ${id} не знайдено в локальному списку`,
								);
							}
							const response = await fetch(
								`http://localhost:3009/trains/${id}`,
								{
									method: 'DELETE',
								},
							);
							if (!response.ok) {
								const errorData = await response.json().catch(() => ({}));
								throw new Error(
									`Не вдалося видалити потяг: ${response.status} ${response.statusText} ${JSON.stringify(errorData)}`,
								);
							}
							await fetchTrains();
							setError(null);
						} catch (error) {
							console.error('Error in handleDelete:', error);
							setError(
								error.message || 'Не вдалося видалити потяг. Перевірте сервер.',
							);
						}
					};
					const handleAddOrUpdateTrain = async () => {
						try {
							if (
								!formTrain.trainName ||
								!formTrain.trainNumber ||
								!formTrain.departCity ||
								!formTrain.arrivalCity
							) {
								throw new Error('Заповніть усі обов’язкові поля');
							}
							console.log('Sending request:', {
								url: isEditing
									? `http://localhost:3009/trains/${formTrain.id}`
									: 'http://localhost:3009/trains',
								method: isEditing ? 'PUT' : 'POST',
								body: {
									trainName: formTrain.trainName,
									trainNumber: formTrain.trainNumber,
									departCity: formTrain.departCity,
									arrivalCity: formTrain.arrivalCity,
									departTime: formTrain.departTime,
									arrivalTime: formTrain.arrivalTime,
									duration: formTrain.duration,
								},
							});
							const response = await fetch(
								isEditing
									? `http://localhost:3009/trains/${formTrain.id}`
									: 'http://localhost:3009/trains',
								{
									method: isEditing ? 'PUT' : 'POST',
									headers: {
										'Content-Type': 'application/json',
									},
									body: JSON.stringify({
										trainName: formTrain.trainName,
										trainNumber: formTrain.trainNumber,
										departCity: formTrain.departCity,
										arrivalCity: formTrain.arrivalCity,
										departTime: formTrain.departTime,
										arrivalTime: formTrain.arrivalTime,
										duration: formTrain.duration || undefined,
									}),
								},
							);
							if (!response.ok) {
								const errorData = await response.json().catch(() => ({}));
								console.error('Error response:', errorData);
								throw new Error(
									`Не вдалося зберегти потяг: ${response.status} ${response.statusText} ${JSON.stringify(errorData)}`,
								);
							}
							await fetchTrains();
							setFormTrain({
								id: 0,
								trainName: '',
								trainNumber: '',
								departCity: '',
								arrivalCity: '',
								departTime: '',
								arrivalTime: '',
								duration: '',
							});
							setIsEditing(false);
							setError(null);
						} catch (error) {
							console.error('Error in handleAddOrUpdateTrain:', error);
							setError(
								error.message || 'Не вдалося зберегти потяг. Перевірте сервер.',
							);
						}
					};
					const handleCancelEdit = () => {
						setFormTrain({
							id: 0,
							trainName: '',
							trainNumber: '',
							departCity: '',
							arrivalCity: '',
							departTime: '',
							arrivalTime: '',
							duration: '',
						});
						setIsEditing(false);
					};
					return /*#__PURE__*/ (0,
					__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
						'jsxDEV'
					])(
						'div',
						{
							className:
								__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
									'default'
								].adminContainer,
							children: [
								/*#__PURE__*/ (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
									'jsxDEV'
								])(
									'h2',
									{
										className:
											__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
												'default'
											].title,
										children: 'Адмін-сторінка',
									},
									void 0,
									false,
									{
										fileName: '[project]/src/app/pages/Admin/page.tsx',
										lineNumber: 203,
										columnNumber: 7,
									},
									this,
								),
								error &&
									/*#__PURE__*/ (0,
									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
										'jsxDEV'
									])(
										'div',
										{
											className:
												__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
													'default'
												].error,
											children: error,
										},
										void 0,
										false,
										{
											fileName: '[project]/src/app/pages/Admin/page.tsx',
											lineNumber: 205,
											columnNumber: 17,
										},
										this,
									),
								/*#__PURE__*/ (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
									'jsxDEV'
								])(
									'input',
									{
										type: 'text',
										placeholder: 'Пошук потягів...',
										value: searchQuery,
										onChange: handleSearch,
										className:
											__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
												'default'
											].searchInput,
									},
									void 0,
									false,
									{
										fileName: '[project]/src/app/pages/Admin/page.tsx',
										lineNumber: 207,
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
											__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
												'default'
											].trainTable,
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
															children: [
																/*#__PURE__*/ (0,
																__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
																	'jsxDEV'
																])(
																	'th',
																	{
																		children: 'Назва',
																	},
																	void 0,
																	false,
																	{
																		fileName:
																			'[project]/src/app/pages/Admin/page.tsx',
																		lineNumber: 218,
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
																		children: 'Номер потяга',
																	},
																	void 0,
																	false,
																	{
																		fileName:
																			'[project]/src/app/pages/Admin/page.tsx',
																		lineNumber: 219,
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
																		children: 'Відправлення',
																	},
																	void 0,
																	false,
																	{
																		fileName:
																			'[project]/src/app/pages/Admin/page.tsx',
																		lineNumber: 220,
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
																		children: 'Прибуття',
																	},
																	void 0,
																	false,
																	{
																		fileName:
																			'[project]/src/app/pages/Admin/page.tsx',
																		lineNumber: 221,
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
																		children: 'Дії',
																	},
																	void 0,
																	false,
																	{
																		fileName:
																			'[project]/src/app/pages/Admin/page.tsx',
																		lineNumber: 222,
																		columnNumber: 13,
																	},
																	this,
																),
															],
														},
														void 0,
														true,
														{
															fileName:
																'[project]/src/app/pages/Admin/page.tsx',
															lineNumber: 217,
															columnNumber: 11,
														},
														this,
													),
												},
												void 0,
												false,
												{
													fileName: '[project]/src/app/pages/Admin/page.tsx',
													lineNumber: 216,
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
																children: [
																	/*#__PURE__*/ (0,
																	__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
																		'jsxDEV'
																	])(
																		'td',
																		{
																			children: train.trainName,
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				'[project]/src/app/pages/Admin/page.tsx',
																			lineNumber: 228,
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
																			children: train.trainNumber,
																		},
																		void 0,
																		false,
																		{
																			fileName:
																				'[project]/src/app/pages/Admin/page.tsx',
																			lineNumber: 229,
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
																			children: [
																				train.departCity,
																				' - ',
																				train.departTime,
																			],
																		},
																		void 0,
																		true,
																		{
																			fileName:
																				'[project]/src/app/pages/Admin/page.tsx',
																			lineNumber: 230,
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
																			children: [
																				train.arrivalCity,
																				' - ',
																				train.arrivalTime,
																			],
																		},
																		void 0,
																		true,
																		{
																			fileName:
																				'[project]/src/app/pages/Admin/page.tsx',
																			lineNumber: 233,
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
																			children: [
																				/*#__PURE__*/ (0,
																				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
																					'jsxDEV'
																				])(
																					'button',
																					{
																						onClick: () => handleEdit(train),
																						className:
																							__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
																								'default'
																							].editButton,
																						children: 'Редагувати',
																					},
																					void 0,
																					false,
																					{
																						fileName:
																							'[project]/src/app/pages/Admin/page.tsx',
																						lineNumber: 237,
																						columnNumber: 17,
																					},
																					this,
																				),
																				/*#__PURE__*/ (0,
																				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
																					'jsxDEV'
																				])(
																					'button',
																					{
																						onClick: () =>
																							handleDelete(train.id),
																						className:
																							__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
																								'default'
																							].deleteButton,
																						children: 'Видалити',
																					},
																					void 0,
																					false,
																					{
																						fileName:
																							'[project]/src/app/pages/Admin/page.tsx',
																						lineNumber: 243,
																						columnNumber: 17,
																					},
																					this,
																				),
																			],
																		},
																		void 0,
																		true,
																		{
																			fileName:
																				'[project]/src/app/pages/Admin/page.tsx',
																			lineNumber: 236,
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
																	'[project]/src/app/pages/Admin/page.tsx',
																lineNumber: 227,
																columnNumber: 13,
															},
															this,
														),
													),
												},
												void 0,
												false,
												{
													fileName: '[project]/src/app/pages/Admin/page.tsx',
													lineNumber: 225,
													columnNumber: 9,
												},
												this,
											),
										],
									},
									void 0,
									true,
									{
										fileName: '[project]/src/app/pages/Admin/page.tsx',
										lineNumber: 215,
										columnNumber: 7,
									},
									this,
								),
								/*#__PURE__*/ (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
									'jsxDEV'
								])(
									'h3',
									{
										className:
											__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
												'default'
											].formTitle,
										children: isEditing
											? 'Редагувати потяг'
											: 'Додати новий потяг',
									},
									void 0,
									false,
									{
										fileName: '[project]/src/app/pages/Admin/page.tsx',
										lineNumber: 255,
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
											__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
												'default'
											].form,
										children: [
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
												'jsxDEV'
											])(
												'input',
												{
													type: 'text',
													placeholder: 'Назва потяга',
													value: formTrain.trainName,
													onChange: (e) =>
														setFormTrain({
															...formTrain,
															trainName: e.target.value,
														}),
													className:
														__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
															'default'
														].formInput,
												},
												void 0,
												false,
												{
													fileName: '[project]/src/app/pages/Admin/page.tsx',
													lineNumber: 259,
													columnNumber: 9,
												},
												this,
											),
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
												'jsxDEV'
											])(
												'input',
												{
													type: 'text',
													placeholder: 'Номер потяга',
													value: formTrain.trainNumber,
													onChange: (e) =>
														setFormTrain({
															...formTrain,
															trainNumber: e.target.value,
														}),
													className:
														__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
															'default'
														].formInput,
												},
												void 0,
												false,
												{
													fileName: '[project]/src/app/pages/Admin/page.tsx',
													lineNumber: 268,
													columnNumber: 9,
												},
												this,
											),
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
												'jsxDEV'
											])(
												'input',
												{
													type: 'text',
													placeholder: 'Місто відправлення',
													value: formTrain.departCity,
													onChange: (e) =>
														setFormTrain({
															...formTrain,
															departCity: e.target.value,
														}),
													className:
														__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
															'default'
														].formInput,
												},
												void 0,
												false,
												{
													fileName: '[project]/src/app/pages/Admin/page.tsx',
													lineNumber: 277,
													columnNumber: 9,
												},
												this,
											),
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
												'jsxDEV'
											])(
												'input',
												{
													type: 'text',
													placeholder: 'Місто призначення',
													value: formTrain.arrivalCity,
													onChange: (e) =>
														setFormTrain({
															...formTrain,
															arrivalCity: e.target.value,
														}),
													className:
														__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
															'default'
														].formInput,
												},
												void 0,
												false,
												{
													fileName: '[project]/src/app/pages/Admin/page.tsx',
													lineNumber: 286,
													columnNumber: 9,
												},
												this,
											),
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
												'jsxDEV'
											])(
												'input',
												{
													type: 'text',
													placeholder: 'Час відправлення',
													value: formTrain.departTime,
													onChange: (e) =>
														setFormTrain({
															...formTrain,
															departTime: e.target.value,
														}),
													className:
														__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
															'default'
														].formInput,
												},
												void 0,
												false,
												{
													fileName: '[project]/src/app/pages/Admin/page.tsx',
													lineNumber: 295,
													columnNumber: 9,
												},
												this,
											),
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
												'jsxDEV'
											])(
												'input',
												{
													type: 'text',
													placeholder: 'Час прибуття',
													value: formTrain.arrivalTime,
													onChange: (e) =>
														setFormTrain({
															...formTrain,
															arrivalTime: e.target.value,
														}),
													className:
														__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
															'default'
														].formInput,
												},
												void 0,
												false,
												{
													fileName: '[project]/src/app/pages/Admin/page.tsx',
													lineNumber: 304,
													columnNumber: 9,
												},
												this,
											),
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
												'jsxDEV'
											])(
												'input',
												{
													type: 'text',
													placeholder: 'Тривалість',
													value: formTrain.duration,
													onChange: (e) =>
														setFormTrain({
															...formTrain,
															duration: e.target.value,
														}),
													className:
														__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
															'default'
														].formInput,
												},
												void 0,
												false,
												{
													fileName: '[project]/src/app/pages/Admin/page.tsx',
													lineNumber: 313,
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
													onClick: handleAddOrUpdateTrain,
													className:
														__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
															'default'
														].submitButton,
													children: isEditing ? 'Оновити' : 'Додати',
												},
												void 0,
												false,
												{
													fileName: '[project]/src/app/pages/Admin/page.tsx',
													lineNumber: 323,
													columnNumber: 9,
												},
												this,
											),
											isEditing &&
												/*#__PURE__*/ (0,
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
													'jsxDEV'
												])(
													'button',
													{
														onClick: handleCancelEdit,
														className:
															__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
																'default'
															].cancelButton,
														children: 'Скасувати',
													},
													void 0,
													false,
													{
														fileName: '[project]/src/app/pages/Admin/page.tsx',
														lineNumber: 330,
														columnNumber: 11,
													},
													this,
												),
										],
									},
									void 0,
									true,
									{
										fileName: '[project]/src/app/pages/Admin/page.tsx',
										lineNumber: 258,
										columnNumber: 7,
									},
									this,
								),
							],
						},
						void 0,
						true,
						{
							fileName: '[project]/src/app/pages/Admin/page.tsx',
							lineNumber: 202,
							columnNumber: 5,
						},
						this,
					);
				}
				_s(AdminPage, 'd8LUOJ3522il5otmTP+ok/K53CA=');
				_c = AdminPage;
				var _c;
				__turbopack_context__.k.register(_c, 'AdminPage');
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
	},
]);

//# sourceMappingURL=_7cf16631._.js.map
