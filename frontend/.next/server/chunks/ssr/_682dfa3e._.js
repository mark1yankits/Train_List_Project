module.exports = {
	'[project]/src/app/components/LoginFormStyle.module.css [app-ssr] (css module)':
		(__turbopack_context__) => {
			var { g: global, __dirname } = __turbopack_context__;
			{
				__turbopack_context__.v({
					activeTab: 'LoginFormStyle-module__Wf0BzG__activeTab',
					inactiveTab: 'LoginFormStyle-module__Wf0BzG__inactiveTab',
					loginButton: 'LoginFormStyle-module__Wf0BzG__loginButton',
					loginContainer: 'LoginFormStyle-module__Wf0BzG__loginContainer',
					loginError: 'LoginFormStyle-module__Wf0BzG__loginError',
					loginInput: 'LoginFormStyle-module__Wf0BzG__loginInput',
					loginTitle: 'LoginFormStyle-module__Wf0BzG__loginTitle',
					modeToggle: 'LoginFormStyle-module__Wf0BzG__modeToggle',
				});
			}
		},
	'[project]/src/app/components/LoginForm.tsx [app-ssr] (ecmascript)': (
		__turbopack_context__,
	) => {
		'use strict';

		var { g: global, __dirname } = __turbopack_context__;
		{
			__turbopack_context__.s({
				default: () => LoginForm,
			});
			var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
				__turbopack_context__.i(
					'[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
				);
			var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
				__turbopack_context__.i(
					'[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
				);
			var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoginFormStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ =
				__turbopack_context__.i(
					'[project]/src/app/components/LoginFormStyle.module.css [app-ssr] (css module)',
				);
			('use client');
			function LoginForm({ onLogin }) {
				const [isLoginMode, setIsLoginMode] = (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					'useState'
				])(true);
				const [email, setEmail] = (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					'useState'
				])('');
				const [password, setPassword] = (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					'useState'
				])('');
				const [name, setName] = (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					'useState'
				])('');
				const [surname, setSurname] = (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					'useState'
				])('');
				const [role, setRole] = (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					'useState'
				])('user');
				const [error, setError] = (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					'useState'
				])(null);
				const handleSubmit = async () => {
					setError(null);
					if (
						!email ||
						!password ||
						(!isLoginMode && (!name || !surname || !role))
					) {
						setError('Будь ласка, заповніть всі поля');
						return;
					}
					if (!/\S+@\S+\.\S+/.test(email)) {
						setError('Будь ласка, введіть правильний email');
						return;
					}
					if (isLoginMode) {
						try {
							const response = await fetch('http://localhost:3009/auth/login', {
								method: 'POST',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify({
									email,
									password,
								}),
							});
							if (!response.ok) {
								throw new Error('Невірний email або пароль');
							}
							const data = await response.json();
							onLogin(
								{
									email: data.user.email,
									role: data.user.role,
									name: data.user.name,
									surname: data.user.surname,
								},
								data.access_token,
							);
						} catch (err) {
							setError('Помилка авторизації');
						}
					} else {
						try {
							const response = await fetch(
								'http://localhost:3009/auth/register',
								{
									method: 'POST',
									headers: {
										'Content-Type': 'application/json',
									},
									body: JSON.stringify({
										email,
										password,
										name,
										surname,
										role,
									}),
								},
							);
							if (!response.ok) {
								const errorData = await response.json();
								throw new Error(errorData.message.join(', '));
							}
							const data = await response.json();
							onLogin(
								{
									email: data.user.email,
									role: data.user.role,
									name: data.user.name,
									surname: data.user.surname,
								},
								data.access_token,
							);
						} catch (err) {
							console.error('Registration Error:', err);
						}
					}
				};
				return /*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					'jsxDEV'
				])(
					'div',
					{
						className:
							__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoginFormStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
								'default'
							].loginContainer,
						children: [
							/*#__PURE__*/ (0,
							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
								'jsxDEV'
							])(
								'h2',
								{
									className:
										__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoginFormStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
											'default'
										].loginTitle,
									children: isLoginMode ? 'Avtorizatsiya' : 'Reiestratsiya',
								},
								void 0,
								false,
								{
									fileName: '[project]/src/app/components/LoginForm.tsx',
									lineNumber: 95,
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
										__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoginFormStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
											'default'
										].modeToggle,
									children: [
										/*#__PURE__*/ (0,
										__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
											'jsxDEV'
										])(
											'button',
											{
												onClick: () => setIsLoginMode(true),
												className: isLoginMode
													? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoginFormStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
															'default'
														].activeTab
													: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoginFormStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
															'default'
														].inactiveTab,
												children: 'Увійти',
											},
											void 0,
											false,
											{
												fileName: '[project]/src/app/components/LoginForm.tsx',
												lineNumber: 98,
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
												onClick: () => setIsLoginMode(false),
												className: !isLoginMode
													? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoginFormStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
															'default'
														].activeTab
													: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoginFormStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
															'default'
														].inactiveTab,
												children: 'Зареєструватися',
											},
											void 0,
											false,
											{
												fileName: '[project]/src/app/components/LoginForm.tsx',
												lineNumber: 104,
												columnNumber: 9,
											},
											this,
										),
									],
								},
								void 0,
								true,
								{
									fileName: '[project]/src/app/components/LoginForm.tsx',
									lineNumber: 97,
									columnNumber: 7,
								},
								this,
							),
							/*#__PURE__*/ (0,
							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
								'jsxDEV'
							])(
								'input',
								{
									type: 'email',
									placeholder: 'Email',
									value: email,
									onChange: (e) => setEmail(e.target.value),
									className:
										__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoginFormStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
											'default'
										].loginInput,
								},
								void 0,
								false,
								{
									fileName: '[project]/src/app/components/LoginForm.tsx',
									lineNumber: 112,
									columnNumber: 7,
								},
								this,
							),
							/*#__PURE__*/ (0,
							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
								'jsxDEV'
							])(
								'input',
								{
									type: 'password',
									placeholder: 'Parol',
									value: password,
									onChange: (e) => setPassword(e.target.value),
									className:
										__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoginFormStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
											'default'
										].loginInput,
								},
								void 0,
								false,
								{
									fileName: '[project]/src/app/components/LoginForm.tsx',
									lineNumber: 119,
									columnNumber: 7,
								},
								this,
							),
							!isLoginMode &&
								/*#__PURE__*/ (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
									'jsxDEV'
								])(
									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
										'Fragment'
									],
									{
										children: [
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												'jsxDEV'
											])(
												'input',
												{
													type: 'text',
													placeholder: 'Im’ya',
													value: name,
													onChange: (e) => setName(e.target.value),
													className:
														__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoginFormStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
															'default'
														].loginInput,
												},
												void 0,
												false,
												{
													fileName:
														'[project]/src/app/components/LoginForm.tsx',
													lineNumber: 129,
													columnNumber: 11,
												},
												this,
											),
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												'jsxDEV'
											])(
												'input',
												{
													type: 'text',
													placeholder: 'Prizvyshche',
													value: surname,
													onChange: (e) => setSurname(e.target.value),
													className:
														__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoginFormStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
															'default'
														].loginInput,
												},
												void 0,
												false,
												{
													fileName:
														'[project]/src/app/components/LoginForm.tsx',
													lineNumber: 136,
													columnNumber: 11,
												},
												this,
											),
											/*#__PURE__*/ (0,
											__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
												'jsxDEV'
											])(
												'select',
												{
													value: role,
													onChange: (e) => setRole(e.target.value),
													className:
														__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoginFormStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
															'default'
														].loginInput,
													children: [
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															'jsxDEV'
														])(
															'option',
															{
																value: 'user',
																children: 'User',
															},
															void 0,
															false,
															{
																fileName:
																	'[project]/src/app/components/LoginForm.tsx',
																lineNumber: 148,
																columnNumber: 13,
															},
															this,
														),
														/*#__PURE__*/ (0,
														__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
															'jsxDEV'
														])(
															'option',
															{
																value: 'admin',
																children: 'Admin',
															},
															void 0,
															false,
															{
																fileName:
																	'[project]/src/app/components/LoginForm.tsx',
																lineNumber: 149,
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
														'[project]/src/app/components/LoginForm.tsx',
													lineNumber: 143,
													columnNumber: 11,
												},
												this,
											),
										],
									},
									void 0,
									true,
								),
							/*#__PURE__*/ (0,
							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
								'jsxDEV'
							])(
								'button',
								{
									onClick: handleSubmit,
									className:
										__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoginFormStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
											'default'
										].loginButton,
									children: isLoginMode ? 'Uviti' : 'Zareiestruvatysia',
								},
								void 0,
								false,
								{
									fileName: '[project]/src/app/components/LoginForm.tsx',
									lineNumber: 154,
									columnNumber: 7,
								},
								this,
							),
							error &&
								/*#__PURE__*/ (0,
								__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
									'jsxDEV'
								])(
									'p',
									{
										className:
											__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoginFormStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__[
												'default'
											].loginError,
										children: error,
									},
									void 0,
									false,
									{
										fileName: '[project]/src/app/components/LoginForm.tsx',
										lineNumber: 157,
										columnNumber: 17,
									},
									this,
								),
						],
					},
					void 0,
					true,
					{
						fileName: '[project]/src/app/components/LoginForm.tsx',
						lineNumber: 94,
						columnNumber: 5,
					},
					this,
				);
			}
		}
	},
	'[project]/src/app/page.tsx [app-ssr] (ecmascript)': (
		__turbopack_context__,
	) => {
		'use strict';

		var { g: global, __dirname } = __turbopack_context__;
		{
			__turbopack_context__.s({
				default: () => HomePage,
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
			var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoginForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
				__turbopack_context__.i(
					'[project]/src/app/components/LoginForm.tsx [app-ssr] (ecmascript)',
				);
			('use client');
			function HomePage() {
				const [isAuthenticated, setIsAuthenticated] = (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					'useState'
				])(false);
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
						setIsAuthenticated(true);
					}
				}, []);
				const handleLogin = (user, token) => {
					setUser(user);
					setToken(token);
					localStorage.setItem('authToken', token);
					localStorage.setItem('user', JSON.stringify(user));
					setIsAuthenticated(true);
					router.push('/pages/User');
				};
				const handleViewSchedule = () => {
					if (isAuthenticated) {
						router.push('/pages/User');
					}
				};
				const handleLogout = () => {
					localStorage.removeItem('authToken');
					localStorage.removeItem('user');
					setIsAuthenticated(false);
					setUser(null);
					setToken(null);
				};
				return /*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					'jsxDEV'
				])(
					'div',
					{
						style: {
							padding: '20px',
							textAlign: 'center',
						},
						children: [
							/*#__PURE__*/ (0,
							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
								'jsxDEV'
							])(
								'h1',
								{
									style: {
										fontSize: '28px',
										marginBottom: '20px',
									},
									children: 'Ласкаво просимо до розкладу поїздів!',
								},
								void 0,
								false,
								{
									fileName: '[project]/src/app/page.tsx',
									lineNumber: 55,
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
									style: {
										fontSize: '16px',
										color: '#555',
										marginBottom: '30px',
									},
									children:
										'Дізнайтесь розклад поїздів, щоб спланувати свою подорож. Увійдіть, щоб переглянути деталі.',
								},
								void 0,
								false,
								{
									fileName: '[project]/src/app/page.tsx',
									lineNumber: 56,
									columnNumber: 7,
								},
								this,
							),
							isAuthenticated
								? /*#__PURE__*/ (0,
									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
										'jsxDEV'
									])(
										'div',
										{
											children: [
												/*#__PURE__*/ (0,
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													'jsxDEV'
												])(
													'p',
													{
														style: {
															fontSize: '16px',
															marginBottom: '20px',
														},
														children: [
															'Ви увійшли як: ',
															user?.email,
															' (',
															user?.role,
															')',
														],
													},
													void 0,
													true,
													{
														fileName: '[project]/src/app/page.tsx',
														lineNumber: 62,
														columnNumber: 11,
													},
													this,
												),
												/*#__PURE__*/ (0,
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													'jsxDEV'
												])(
													'button',
													{
														onClick: handleViewSchedule,
														style: {
															padding: '10px 20px',
															backgroundColor: '#007bff',
															color: '#fff',
															border: 'none',
															borderRadius: '4px',
															cursor: 'pointer',
															marginRight: '10px',
														},
														children: 'Переглянути розклад',
													},
													void 0,
													false,
													{
														fileName: '[project]/src/app/page.tsx',
														lineNumber: 65,
														columnNumber: 11,
													},
													this,
												),
												/*#__PURE__*/ (0,
												__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
													'jsxDEV'
												])(
													'button',
													{
														onClick: handleLogout,
														style: {
															padding: '10px 20px',
															backgroundColor: '#dc3545',
															color: '#fff',
															border: 'none',
															borderRadius: '4px',
															cursor: 'pointer',
														},
														children: 'Вийти',
													},
													void 0,
													false,
													{
														fileName: '[project]/src/app/page.tsx',
														lineNumber: 79,
														columnNumber: 11,
													},
													this,
												),
											],
										},
										void 0,
										true,
										{
											fileName: '[project]/src/app/page.tsx',
											lineNumber: 61,
											columnNumber: 9,
										},
										this,
									)
								: /*#__PURE__*/ (0,
									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
										'jsxDEV'
									])(
										__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$LoginForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
											'default'
										],
										{
											onLogin: handleLogin,
										},
										void 0,
										false,
										{
											fileName: '[project]/src/app/page.tsx',
											lineNumber: 94,
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
						lineNumber: 54,
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

//# sourceMappingURL=_682dfa3e._.js.map
