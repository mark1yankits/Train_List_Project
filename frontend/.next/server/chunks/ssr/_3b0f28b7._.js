module.exports = {

"[project]/src/app/pages/Admin/AdminPage.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "adminContainer": "AdminPage-module__VIVoiG__adminContainer",
  "deleteButton": "AdminPage-module__VIVoiG__deleteButton",
  "editButton": "AdminPage-module__VIVoiG__editButton",
  "form": "AdminPage-module__VIVoiG__form",
  "formInput": "AdminPage-module__VIVoiG__formInput",
  "formTitle": "AdminPage-module__VIVoiG__formTitle",
  "searchInput": "AdminPage-module__VIVoiG__searchInput",
  "submitButton": "AdminPage-module__VIVoiG__submitButton",
  "title": "AdminPage-module__VIVoiG__title",
  "trainTable": "AdminPage-module__VIVoiG__trainTable",
});
}}),
"[project]/src/app/pages/Admin/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AdminPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/pages/Admin/AdminPage.module.css [app-ssr] (css module)");
"use client";
;
;
;
function AdminPage() {
    const [trains, setTrains] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [formTrain, setFormTrain] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        id: 0,
        trainName: "",
        trainNumber: "",
        departCity: "",
        arrivalCity: "",
        departTime: "",
        arrivalTime: "",
        duration: ""
    });
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchTrains = async ()=>{
        try {
            const response = await fetch("http://localhost:3009/trains");
            if (!response.ok) throw new Error("Не вдалося завантажити розклад");
            const data = await response.json();
            const normalizedTrains = data.map((train)=>({
                    id: train.id || 0,
                    trainName: train.trainName || "",
                    trainNumber: train.trainNumber || "",
                    departCity: train.departCity || "",
                    arrivalCity: train.arrivalCity || "",
                    departTime: train.departTime || "",
                    arrivalTime: train.arrivalTime || "",
                    duration: train.duration || ""
                }));
            setTrains(normalizedTrains);
        } catch (error) {
            console.error(error);
            setError("Не вдалося завантажити розклад. Перевірте сервер.");
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchTrains();
    }, []);
    const handleSearch = (e)=>{
        setSearchQuery(e.target.value);
    };
    const filteredTrains = trains.filter((train)=>train.trainName.toLowerCase().includes(searchQuery.toLowerCase()) || train.trainNumber.includes(searchQuery) || train.departCity.toLowerCase().includes(searchQuery.toLowerCase()) || train.arrivalCity.toLowerCase().includes(searchQuery.toLowerCase()));
    const handleEdit = (train)=>{
        if (!train.id) {
            setError("Невалідний ID потяга");
            return;
        }
        setFormTrain({
            id: train.id,
            trainName: train.trainName || "",
            trainNumber: train.trainNumber || "",
            departCity: train.departCity || "",
            arrivalCity: train.arrivalCity || "",
            departTime: train.departTime || "",
            arrivalTime: train.arrivalTime || "",
            duration: train.duration || ""
        });
        setIsEditing(true);
    };
    const handleDelete = async (id)=>{
        try {
            const trainExists = trains.find((train)=>train.id === id);
            if (!trainExists) {
                throw new Error(`Потяг з ID ${id} не знайдено в локальному списку`);
            }
            const response = await fetch(`http://localhost:3009/trains/${id}`, {
                method: "DELETE"
            });
            if (!response.ok) {
                const errorData = await response.json().catch(()=>({}));
                throw new Error(`Не вдалося видалити потяг: ${response.status} ${response.statusText} ${JSON.stringify(errorData)}`);
            }
            await fetchTrains();
            setError(null);
        } catch (error) {
            console.error("Error in handleDelete:", error);
            setError(error.message || "Не вдалося видалити потяг. Перевірте сервер.");
        }
    };
    const handleAddOrUpdateTrain = async ()=>{
        try {
            if (!formTrain.trainName || !formTrain.trainNumber || !formTrain.departCity || !formTrain.arrivalCity) {
                throw new Error("Заповніть усі обов’язкові поля");
            }
            console.log("Sending request:", {
                url: isEditing ? `http://localhost:3009/trains/${formTrain.id}` : "http://localhost:3009/trains",
                method: isEditing ? "PUT" : "POST",
                body: {
                    trainName: formTrain.trainName,
                    trainNumber: formTrain.trainNumber,
                    departCity: formTrain.departCity,
                    arrivalCity: formTrain.arrivalCity,
                    departTime: formTrain.departTime,
                    arrivalTime: formTrain.arrivalTime,
                    duration: formTrain.duration
                }
            });
            const response = await fetch(isEditing ? `http://localhost:3009/trains/${formTrain.id}` : "http://localhost:3009/trains", {
                method: isEditing ? "PUT" : "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    trainName: formTrain.trainName,
                    trainNumber: formTrain.trainNumber,
                    departCity: formTrain.departCity,
                    arrivalCity: formTrain.arrivalCity,
                    departTime: formTrain.departTime,
                    arrivalTime: formTrain.arrivalTime,
                    duration: formTrain.duration || undefined
                })
            });
            if (!response.ok) {
                const errorData = await response.json().catch(()=>({}));
                console.error("Error response:", errorData);
                throw new Error(`Не вдалося зберегти потяг: ${response.status} ${response.statusText} ${JSON.stringify(errorData)}`);
            }
            await fetchTrains();
            setFormTrain({
                id: 0,
                trainName: "",
                trainNumber: "",
                departCity: "",
                arrivalCity: "",
                departTime: "",
                arrivalTime: "",
                duration: ""
            });
            setIsEditing(false);
            setError(null);
        } catch (error) {
            console.error("Error in handleAddOrUpdateTrain:", error);
            setError(error.message || "Не вдалося зберегти потяг. Перевірте сервер.");
        }
    };
    const handleCancelEdit = ()=>{
        setFormTrain({
            id: 0,
            trainName: "",
            trainNumber: "",
            departCity: "",
            arrivalCity: "",
            departTime: "",
            arrivalTime: "",
            duration: ""
        });
        setIsEditing(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].adminContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                children: "Адмін-сторінка"
            }, void 0, false, {
                fileName: "[project]/src/app/pages/Admin/page.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].error,
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/pages/Admin/page.tsx",
                lineNumber: 205,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Пошук потягів...",
                value: searchQuery,
                onChange: handleSearch,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].searchInput
            }, void 0, false, {
                fileName: "[project]/src/app/pages/Admin/page.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].trainTable,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Назва"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/Admin/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Номер потяга"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/Admin/page.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Відправлення"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/Admin/page.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Прибуття"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/Admin/page.tsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    children: "Дії"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/Admin/page.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/Admin/page.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Admin/page.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: filteredTrains.map((train)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: train.trainName
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/Admin/page.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: train.trainNumber
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/pages/Admin/page.tsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: [
                                            train.departCity,
                                            " - ",
                                            train.departTime
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/pages/Admin/page.tsx",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: [
                                            train.arrivalCity,
                                            " - ",
                                            train.arrivalTime
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/pages/Admin/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleEdit(train),
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].editButton,
                                                children: "Редагувати"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pages/Admin/page.tsx",
                                                lineNumber: 237,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleDelete(train.id),
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].deleteButton,
                                                children: "Видалити"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/pages/Admin/page.tsx",
                                                lineNumber: 243,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/pages/Admin/page.tsx",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, train.id, true, {
                                fileName: "[project]/src/app/pages/Admin/page.tsx",
                                lineNumber: 227,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Admin/page.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/Admin/page.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formTitle,
                children: isEditing ? "Редагувати потяг" : "Додати новий потяг"
            }, void 0, false, {
                fileName: "[project]/src/app/pages/Admin/page.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].form,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Назва потяга",
                        value: formTrain.trainName,
                        onChange: (e)=>setFormTrain({
                                ...formTrain,
                                trainName: e.target.value
                            }),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formInput
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Admin/page.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Номер потяга",
                        value: formTrain.trainNumber,
                        onChange: (e)=>setFormTrain({
                                ...formTrain,
                                trainNumber: e.target.value
                            }),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formInput
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Admin/page.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Місто відправлення",
                        value: formTrain.departCity,
                        onChange: (e)=>setFormTrain({
                                ...formTrain,
                                departCity: e.target.value
                            }),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formInput
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Admin/page.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Місто призначення",
                        value: formTrain.arrivalCity,
                        onChange: (e)=>setFormTrain({
                                ...formTrain,
                                arrivalCity: e.target.value
                            }),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formInput
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Admin/page.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Час відправлення",
                        value: formTrain.departTime,
                        onChange: (e)=>setFormTrain({
                                ...formTrain,
                                departTime: e.target.value
                            }),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formInput
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Admin/page.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Час прибуття",
                        value: formTrain.arrivalTime,
                        onChange: (e)=>setFormTrain({
                                ...formTrain,
                                arrivalTime: e.target.value
                            }),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formInput
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Admin/page.tsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Тривалість",
                        value: formTrain.duration,
                        onChange: (e)=>setFormTrain({
                                ...formTrain,
                                duration: e.target.value
                            }),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formInput
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Admin/page.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAddOrUpdateTrain,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitButton,
                        children: isEditing ? "Оновити" : "Додати"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Admin/page.tsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, this),
                    isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCancelEdit,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Admin$2f$AdminPage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cancelButton,
                        children: "Скасувати"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Admin/page.tsx",
                        lineNumber: 330,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/Admin/page.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/pages/Admin/page.tsx",
        lineNumber: 202,
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

//# sourceMappingURL=_3b0f28b7._.js.map