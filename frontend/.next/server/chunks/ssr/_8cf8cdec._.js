module.exports = {

"[project]/src/app/pages/User/PageStyle.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "container": "PageStyle-module__cyIYoq__container",
  "searchInput": "PageStyle-module__cyIYoq__searchInput",
  "searchWrapper": "PageStyle-module__cyIYoq__searchWrapper",
  "tableCell": "PageStyle-module__cyIYoq__tableCell",
  "tableHeader": "PageStyle-module__cyIYoq__tableHeader",
  "tableHeaderCell": "PageStyle-module__cyIYoq__tableHeaderCell",
  "tableRow": "PageStyle-module__cyIYoq__tableRow",
  "title": "PageStyle-module__cyIYoq__title",
  "trainTable": "PageStyle-module__cyIYoq__trainTable",
});
}}),
"[project]/src/app/pages/User/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>UserPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/pages/User/PageStyle.module.css [app-ssr] (css module)");
'use client';
;
;
;
function UserPage() {
    const [trains, setTrains] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [sortColumn, setSortColumn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sortDirection, setSortDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('asc');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // load data from APi
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchTrains = async ()=>{
            try {
                const response = await fetch('http://localhost:3009/trains');
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
    }, []);
    // sort
    const handleSort = (column)=>{
        const newDirection = sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc';
        setSortColumn(column);
        setSortDirection(newDirection);
        const sortedTrains = [
            ...trains
        ].sort((a, b)=>{
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
    // find
    const filteredTrains = trains.filter((train)=>train.trainName.toLowerCase().includes(searchTerm.toLowerCase()));
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: "Завантаження..."
        }, void 0, false, {
            fileName: "[project]/src/app/pages/User/page.tsx",
            lineNumber: 69,
            columnNumber: 12
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: error
        }, void 0, false, {
            fileName: "[project]/src/app/pages/User/page.tsx",
            lineNumber: 73,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                children: "Train schedule"
            }, void 0, false, {
                fileName: "[project]/src/app/pages/User/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchWrapper,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Enter train name...",
                    value: searchTerm,
                    onChange: (e)=>setSearchTerm(e.target.value),
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchInput
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/User/page.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/pages/User/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].trainTable,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableHeaderCell,
                                    onClick: ()=>handleSort('id'),
                                    children: [
                                        "ID ",
                                        sortColumn === 'id' && (sortDirection === 'asc' ? '↑' : '↓')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/User/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableHeaderCell,
                                    onClick: ()=>handleSort('trainName'),
                                    children: [
                                        "Train name ",
                                        sortColumn === 'trainName' && (sortDirection === 'asc' ? '↑' : '↓')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/User/page.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableHeaderCell,
                                    onClick: ()=>handleSort('trainNumber'),
                                    children: [
                                        "Number ",
                                        sortColumn === 'trainNumber' && (sortDirection === 'asc' ? '↑' : '↓')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/User/page.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableHeaderCell,
                                    onClick: ()=>handleSort('departureCity'),
                                    children: [
                                        "City departure ",
                                        sortColumn === 'departureCity' && (sortDirection === 'asc' ? '↑' : '↓')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/User/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableHeaderCell,
                                    onClick: ()=>handleSort('arrivalCity'),
                                    children: [
                                        "City arrivalCity ",
                                        sortColumn === 'arrivalCity' && (sortDirection === 'asc' ? '↑' : '↓')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/User/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableHeaderCell,
                                    onClick: ()=>handleSort('departureTime'),
                                    children: [
                                        "Time departure ",
                                        sortColumn === 'departureTime' && (sortDirection === 'asc' ? '↑' : '↓')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/User/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableHeaderCell,
                                    onClick: ()=>handleSort('arrivalTime'),
                                    children: [
                                        "Time arriaval ",
                                        sortColumn === 'arrivalTime' && (sortDirection === 'asc' ? '↑' : '↓')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/User/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableHeaderCell,
                                    onClick: ()=>handleSort('duration'),
                                    children: [
                                        "Duration ",
                                        sortColumn === 'duration' && (sortDirection === 'asc' ? '↑' : '↓')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/User/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/User/page.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/User/page.tsx",
                        lineNumber: 91,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: filteredTrains.map((train)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableRow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableCell,
                                        children: train.id
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/User/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableCell,
                                        children: train.trainName
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/User/page.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableCell,
                                        children: train.trainNumber
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/User/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableCell,
                                        children: train.departureCity
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/User/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableCell,
                                        children: train.arrivalCity
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/User/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableCell,
                                        children: train.departureTime
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/User/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableCell,
                                        children: train.arrivalTime
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/User/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$User$2f$PageStyle$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableCell,
                                        children: train.duration
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/User/page.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, train.id, true, {
                                fileName: "[project]/src/app/pages/User/page.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/User/page.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/User/page.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/pages/User/page.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),

};

//# sourceMappingURL=_8cf8cdec._.js.map