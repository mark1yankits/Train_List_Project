module.exports = {
	'[externals]/util [external] (util, cjs)': function (__turbopack_context__) {
		var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
		{
			const mod = __turbopack_context__.x('util', () => require('util'));

			module.exports = mod;
		}
	},
	'[externals]/stream [external] (stream, cjs)': function (
		__turbopack_context__,
	) {
		var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
		{
			const mod = __turbopack_context__.x('stream', () => require('stream'));

			module.exports = mod;
		}
	},
	'[externals]/path [external] (path, cjs)': function (__turbopack_context__) {
		var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
		{
			const mod = __turbopack_context__.x('path', () => require('path'));

			module.exports = mod;
		}
	},
	'[externals]/http [external] (http, cjs)': function (__turbopack_context__) {
		var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
		{
			const mod = __turbopack_context__.x('http', () => require('http'));

			module.exports = mod;
		}
	},
	'[externals]/https [external] (https, cjs)': function (
		__turbopack_context__,
	) {
		var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
		{
			const mod = __turbopack_context__.x('https', () => require('https'));

			module.exports = mod;
		}
	},
	'[externals]/url [external] (url, cjs)': function (__turbopack_context__) {
		var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
		{
			const mod = __turbopack_context__.x('url', () => require('url'));

			module.exports = mod;
		}
	},
	'[externals]/fs [external] (fs, cjs)': function (__turbopack_context__) {
		var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
		{
			const mod = __turbopack_context__.x('fs', () => require('fs'));

			module.exports = mod;
		}
	},
	'[externals]/crypto [external] (crypto, cjs)': function (
		__turbopack_context__,
	) {
		var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
		{
			const mod = __turbopack_context__.x('crypto', () => require('crypto'));

			module.exports = mod;
		}
	},
	'[externals]/assert [external] (assert, cjs)': function (
		__turbopack_context__,
	) {
		var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
		{
			const mod = __turbopack_context__.x('assert', () => require('assert'));

			module.exports = mod;
		}
	},
	'[externals]/tty [external] (tty, cjs)': function (__turbopack_context__) {
		var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
		{
			const mod = __turbopack_context__.x('tty', () => require('tty'));

			module.exports = mod;
		}
	},
	'[externals]/os [external] (os, cjs)': function (__turbopack_context__) {
		var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
		{
			const mod = __turbopack_context__.x('os', () => require('os'));

			module.exports = mod;
		}
	},
	'[externals]/zlib [external] (zlib, cjs)': function (__turbopack_context__) {
		var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
		{
			const mod = __turbopack_context__.x('zlib', () => require('zlib'));

			module.exports = mod;
		}
	},
	'[externals]/events [external] (events, cjs)': function (
		__turbopack_context__,
	) {
		var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
		{
			const mod = __turbopack_context__.x('events', () => require('events'));

			module.exports = mod;
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
			var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
				__turbopack_context__.i(
					'[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)',
				);
			var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
				__turbopack_context__.i(
					'[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
				);
			('use client');
			function HomePage() {
				const [trains, setTrains] = (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					'useState'
				])([]);
				const [loading, setLoading] = (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					'useState'
				])(true);
				const fetchTrains = async () => {
					try {
						const response =
							await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
								'default'
							].get('http://localhost:3000/trains');
						setTrains(response.data);
						setLoading(false);
					} catch (error) {
						console.error('Помилка при завантаженні поїздів:', error);
						setLoading(false);
					}
				};
				(0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					'useEffect'
				])(() => {
					fetchTrains();
				}, []);
				return /*#__PURE__*/ (0,
				__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
					'jsxDEV'
				])(
					'div',
					{
						style: {
							padding: '20px',
						},
						children: [
							/*#__PURE__*/ (0,
							__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
								'jsxDEV'
							])(
								'h1',
								{
									children: 'Розклад поїздів',
								},
								void 0,
								false,
								{
									fileName: '[project]/src/app/page.tsx',
									lineNumber: 37,
									columnNumber: 7,
								},
								this,
							),
							loading
								? /*#__PURE__*/ (0,
									__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
										'jsxDEV'
									])(
										'p',
										{
											children: 'Завантаження...',
										},
										void 0,
										false,
										{
											fileName: '[project]/src/app/page.tsx',
											lineNumber: 39,
											columnNumber: 9,
										},
										this,
									)
								: trains.length === 0
									? /*#__PURE__*/ (0,
										__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
											'jsxDEV'
										])(
											'p',
											{
												children: 'Поїздів не знайдено.',
											},
											void 0,
											false,
											{
												fileName: '[project]/src/app/page.tsx',
												lineNumber: 41,
												columnNumber: 9,
											},
											this,
										)
									: /*#__PURE__*/ (0,
										__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
											'jsxDEV'
										])(
											'ul',
											{
												children: trains.map((train) =>
													/*#__PURE__*/ (0,
													__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
														'jsxDEV'
													])(
														'li',
														{
															style: {
																marginBottom: '10px',
															},
															children: [
																train.trainName,
																' | ',
																train.departCity,
																' → ',
																train.arrivalCity,
																' | Час відправлення: ',
																new Date(train.departTime).toLocaleString(),
																' | Час прибуття: ',
																new Date(train.arrivalTime).toLocaleString(),
																' | Тривалість: ',
																train.duration,
																' | Номер поїзда: ',
																train.trainNumber || 'Немає',
															],
														},
														train.id,
														true,
														{
															fileName: '[project]/src/app/page.tsx',
															lineNumber: 45,
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
												lineNumber: 43,
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
						lineNumber: 36,
						columnNumber: 5,
					},
					this,
				);
			}
		}
	},
};

//# sourceMappingURL=%5Broot-of-the-server%5D__9b8886f1._.js.map
