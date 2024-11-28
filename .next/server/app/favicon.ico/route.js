"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 14021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 64837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./app/favicon.ico?__next_metadata_route__
var favicon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_route_namespaceObject);
__webpack_require__.d(favicon_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(20514);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./app/favicon.ico?__next_metadata_route__


const contentType = "image/x-icon"
const buffer = Buffer.from("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", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=C%3A%5CUsers%5Cmelam%5CDesktop%5Cfixnix%5Capp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = "export"
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/favicon.ico/route",
        pathname: "/favicon.ico",
        filename: "favicon",
        bundlePath: "app/favicon.ico/route"
    },
    resolvedPagePath: "next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&isDynamic=0!C:\\Users\\melam\\Desktop\\fixnix\\app\\favicon.ico?__next_metadata_route__",
    nextConfigOutput,
    userland: favicon_next_metadata_route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/favicon.ico/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,218], () => (__webpack_exec__(64837)));
module.exports = __webpack_exports__;

})();