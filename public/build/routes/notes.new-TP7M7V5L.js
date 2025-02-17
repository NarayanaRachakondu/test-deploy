import {
  require_note
} from "/build/_shared/chunk-2LJDV4EM.js";
import {
  require_node,
  require_session
} from "/build/_shared/chunk-2LTVY2GU.js";
import {
  Form,
  useActionData
} from "/build/_shared/chunk-T7Y376S6.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-7M2JA6UR.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/notes.new.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_note = __toESM(require_note(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/notes.new.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/notes.new.tsx"
  );
  import.meta.hot.lastModified = "1739789676404.02";
}
function NewNotePage() {
  _s();
  const actionData = useActionData();
  const titleRef = (0, import_react2.useRef)(null);
  const bodyRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    if (actionData?.errors?.title) {
      titleRef.current?.focus();
    } else if (actionData?.errors?.body) {
      bodyRef.current?.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", style: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    width: "100%"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex w-full flex-col gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Title: " }, void 0, false, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: titleRef, name: "title", className: "flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose", "aria-invalid": actionData?.errors?.title ? true : void 0, "aria-errormessage": actionData?.errors?.title ? "title-error" : void 0 }, void 0, false, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/notes.new.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      actionData?.errors?.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.title }, void 0, false, {
        fileName: "app/routes/notes.new.tsx",
        lineNumber: 84,
        columnNumber: 38
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/routes/notes.new.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex w-full flex-col gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Body: " }, void 0, false, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 91,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { ref: bodyRef, name: "body", rows: 8, className: "w-full flex-1 rounded-md border-2 border-blue-500 px-3 py-2 text-lg leading-6", "aria-invalid": actionData?.errors?.body ? true : void 0, "aria-errormessage": actionData?.errors?.body ? "body-error" : void 0 }, void 0, false, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 92,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/notes.new.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      actionData?.errors?.body ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-1 text-red-700", id: "body-error", children: actionData.errors.body }, void 0, false, {
        fileName: "app/routes/notes.new.tsx",
        lineNumber: 94,
        columnNumber: 37
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/routes/notes.new.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400", children: "Save" }, void 0, false, {
      fileName: "app/routes/notes.new.tsx",
      lineNumber: 100,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/notes.new.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.new.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
}
_s(NewNotePage, "FqTS+MoncyjDl4GQ+6WtDeU0reg=", false, function() {
  return [useActionData];
});
_c = NewNotePage;
var _c;
$RefreshReg$(_c, "NewNotePage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  NewNotePage as default
};
//# sourceMappingURL=/build/routes/notes.new-TP7M7V5L.js.map
