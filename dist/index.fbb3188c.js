// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"csuDB":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "106c69fefbb3188c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bDbGG":[function(require,module,exports) {
var _loadData = require("./load-data");
var _hierarchyJs = require("./hierarchy.js");
const flatData = (0, _loadData.loadData)();
//const [root, descendants, leaves] = CSVToHierarchy(flatData);
const testData = (0, _loadData.loadTempData)();
const [t_root, t_descendants, t_leaves] = (0, _hierarchyJs.CSVToHierarchy)(testData); //const testData = loadJSONData();
 //console.log("testing json", testData);
 //const [root, descendants, leaves] = JSONToHierarchy(testData);
 //console.log("test root", root);
 //console.log("descendants", descendants)
 //console.log("leaves", leaves)
 /*

const flatData = loadCSVData();
const [root, descendants, leaves] = CSVToHierarchy(flatData);

const jsonData = loadJSONData();
const [root_j, descendants_j, leaves_j] = JSONToHierarchy(jsonData);
*/  /*
const preppedData = loadData();
console.log("loaded and formatted", preppedData);
const jsonData = JSON.stringify(preppedData)
const [root, descendants, leaves] = JSONToHierarchy(jsonData);
console.log("root", root, "descendants", descendants, "leaves", leaves)
*/ 

},{"./load-data":"bJWfj","./hierarchy.js":"k5lNf"}],"bJWfj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadData", ()=>loadData);
parcelHelpers.export(exports, "loadTempData", ()=>loadTempData);
const loadData = ()=>{
    //load the data
    const unformattedData = require("191fdb8c0f538f5a");
    // const jsonData = JSON.stringify(unformattedData);
    console.log("csvData", unformattedData);
    const formattedData = formatData(unformattedData);
    //select just the information needed & return
    //console.log("formatted",formattedData )
    //const jsonData = JSON.stringify(formattedData)
    return formattedData;
};
const loadTempData = (data)=>{
    const testData = require("5b1254f0cbd4e1dd");
    console.log("test data", testData);
    return testData;
};
const formatData = (data)=>{
    data.forEach((row)=>{
        row.enrolled = Number(row.enrolled);
    //console.log(row.enrolled)
    });
    return data;
} /*
export const loadJSONData = () => {
    const jsonData = require("../data/Student_Data.json");
    return jsonData;
}

const formatToJSON = (unformattedData) => {
    let compliedData = {
        "name": "Programs by Race",
        "children": []
    };
    let formatted = compliedData.children;
    let addedRaces = [];
    let programLog = [];

    unformattedData.forEach(student => {
        let rPosition = -1;
        let pPosition = -1;

        //make sure the race is added
        if (addedRaces.includes(student.Race_1) == false) 
        {
            formatted.push({
                "name": student.Race_1,
                "children": []
            });
            addedRaces.push(student.Race_1);
            rPosition = addedRaces.length - 1;
        }
        else 
        {
            for (let i = 0; i < addedRaces.length; i++) 
            {
                if (student.Race_1 == addedRaces[i]) 
                {
                    rPosition = i;
                }
            }
        } 
        
        let rPograms = formatted[rPosition].children;
        //handle program1
        if (programLog.includes(`${student.Race_1}, ${student.Programs1}`) == false && student.Programs1 != "")
        {
            rPograms.push({
                "name": student.Programs1,
                "enrolled": 0
            });
            programLog.push(`${student.Race_1}, ${student.Programs1}`);
            pPosition = rPograms.length - 1;
        }
        else 
        {
            for (let i = 0; i < rPograms.length; i++) 
            {
                //console.log("rPograms i", rPograms[i].name)
                if (student.Programs1 == rPograms[i].name) 
                {
                    pPosition = i;
                }
            }
        };
        if (pPosition != -1) 
        {
            //console.log("check ", student.Programs1,"found ", rPograms[pPosition].name, rPograms[pPosition].enrolled);
            rPograms[pPosition].enrolled += 1;
        }

        //handle Program2
        if (programLog.includes(`${student.Race_1}, ${student.Programs2}`) == false && student.Programs2 != "")
        {
            rPograms.push({
                "name": student.Programs2,
                "enrolled": 0
            });
            programLog.push(`${student.Race_1}, ${student.Programs2}`);
            pPosition = rPograms.length - 1;
        }
        else 
        {
            for (let i = 0; i < rPograms.length; i++) 
            {
                if (student.Programs2 == rPograms[i]) 
                {
                    pPosition = i;
                }
            }
        }
        if (pPosition != -1 && student.Programs2 != "") 
        {
            //console.log("check ", student.Programs1,"found ", rPograms[pPosition].name, rPograms[pPosition].enrolled);
            rPograms[pPosition].enrolled += 1;
        }

        //handle Program3
        if (programLog.includes(`${student.Race_1}, ${student.Programs3}`) == false && student.Programs3 != "")
        {
            rPograms.push({
                "name": student.Programs3,
                "enrolled": 0
            });
            programLog.push(`${student.Race_1}, ${student.Programs3}`);
            pPosition = rPograms.length - 1;
        }
        else 
        {
            for (let i = 0; i < rPograms.length; i++) 
            {
                if (student.Programs3 == rPograms[i]) 
                {
                    pPosition = i;
                }
            }
        }
        if (pPosition != -1 && student.Programs3 != "") 
        {
            //console.log("check ", student.Programs1,"found ", rPograms[pPosition].name, rPograms[pPosition].enrolled);
            rPograms[pPosition].enrolled += 1;
        }


        //handle Program4
        if (programLog.includes(`${student.Race_1}, ${student.Programs4}`) == false && student.Programs4 != "")
        {
            rPograms.push({
                "name": student.Programs4,
                "enrolled": 0
            });
            programLog.push(`${student.Race_1}, ${student.Programs4}`);
            pPosition = rPograms.length - 1;
        }
        else 
        {
            for (let i = 0; i < rPograms.length; i++) 
            {
                if (student.Programs4 == rPograms[i]) 
                {
                    pPosition = i;
                }
            }
        }
        if (pPosition != -1 && student.Programs4 != "") 
        {
            //console.log("check ", student.Programs1,"found ", rPograms[pPosition].name, rPograms[pPosition].enrolled);
            rPograms[pPosition].enrolled += 1;
        }

        });
    //console.log("programLog", programLog)
    //console.log("addedRaces", addedRaces)
    return formatted;
}*/ ;

},{"191fdb8c0f538f5a":"3Hj2M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","5b1254f0cbd4e1dd":"kIgaa"}],"3Hj2M":[function(require,module,exports) {
module.exports = JSON.parse('[{"\uFEFFchild":"Enrollment by Race","parent":"","enrolled":"0"},{"\uFEFFchild":"White","parent":"Enrollment by Race","enrolled":"0"},{"\uFEFFchild":"Black","parent":"Enrollment by Race","enrolled":"0"},{"\uFEFFchild":"American Indian/Alaska Native/Hawaiian","parent":"Enrollment by Race","enrolled":"0"},{"\uFEFFchild":"Asian/Pacific Islander","parent":"Enrollment by Race","enrolled":"0"},{"\uFEFFchild":"TK","parent":"White","enrolled":"844"},{"\uFEFFchild":"Armed Forces Family","parent":"White","enrolled":"551"},{"\uFEFFchild":"Structed English Immersion Program or similar","parent":"White","enrolled":"2200"},{"\uFEFFchild":"Homeless","parent":"White","enrolled":"1127"},{"\uFEFFchild":"Developmental Bilingual Program","parent":"White","enrolled":"705"},{"\uFEFFchild":"Parents Opted Out of EL Services","parent":"White","enrolled":"29"},{"\uFEFFchild":"GATE","parent":"White","enrolled":"135"},{"\uFEFFchild":"Migrant","parent":"White","enrolled":"28"},{"\uFEFFchild":"Armed Forces Family","parent":"Black","enrolled":"110"},{"\uFEFFchild":"Structed English Immersion Program or similar","parent":"Black","enrolled":"46"},{"\uFEFFchild":"Homeless","parent":"Black","enrolled":"155"},{"\uFEFFchild":"Developmental Bilingual Program","parent":"Black","enrolled":"4"},{"\uFEFFchild":"Parents Opted Out of EL Services","parent":"Black","enrolled":"1"},{"\uFEFFchild":"GATE","parent":"Black","enrolled":"36"},{"\uFEFFchild":"TK","parent":"Black","enrolled":"75"},{"\uFEFFchild":"TK","parent":"American Indian/Alaska Native/Hawaiian","enrolled":"35"},{"\uFEFFchild":"GATE","parent":"American Indian/Alaska Native/Hawaiian","enrolled":"15"},{"\uFEFFchild":"Developmental Bilingual Program","parent":"American Indian/Alaska Native/Hawaiian","enrolled":"22"},{"\uFEFFchild":"Homeless","parent":"American Indian/Alaska Native/Hawaiian","enrolled":"58"},{"\uFEFFchild":"Structed English Immersion Program or similar","parent":"American Indian/Alaska Native/Hawaiian","enrolled":"92"},{"\uFEFFchild":"Armed Forces Family","parent":"American Indian/Alaska Native/Hawaiian","enrolled":"35"},{"\uFEFFchild":"Armed Forces Family","parent":"Asian/Pacific Islander","enrolled":"346"},{"\uFEFFchild":"Structed English Immersion Program or similar","parent":"Asian/Pacific Islander","enrolled":"1325"},{"\uFEFFchild":"Homeless","parent":"Asian/Pacific Islander","enrolled":"417"},{"\uFEFFchild":"Developmental Bilingual Program","parent":"Asian/Pacific Islander","enrolled":"41"},{"\uFEFFchild":"Parents Opted Out of EL Services","parent":"Asian/Pacific Islander","enrolled":"10"},{"\uFEFFchild":"GATE","parent":"Asian/Pacific Islander","enrolled":"263"},{"\uFEFFchild":"TK","parent":"Asian/Pacific Islander","enrolled":"314"},{"\uFEFFchild":""}]');

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"kIgaa":[function(require,module,exports) {
module.exports = JSON.parse('[{"child":"Languages","parent":"","total_speakers":"","native_speakers":""},{"child":"Indo-European","parent":"Languages","total_speakers":"","native_speakers":""},{"child":"Sino-Tibetan","parent":"Languages","total_speakers":"","native_speakers":""},{"child":"Afro-Asiatic","parent":"Languages","total_speakers":"","native_speakers":""},{"child":"Austronesian","parent":"Languages","total_speakers":"","native_speakers":""},{"child":"Japanic","parent":"Languages","total_speakers":"","native_speakers":""},{"child":"Niger-Congo","parent":"Languages","total_speakers":"","native_speakers":""},{"child":"Dravidian","parent":"Languages","total_speakers":"","native_speakers":""},{"child":"Turkic","parent":"Languages","total_speakers":"","native_speakers":""},{"child":"Koreanic","parent":"Languages","total_speakers":"","native_speakers":""},{"child":"Kra-Dai","parent":"Languages","total_speakers":"","native_speakers":""},{"child":"Uralic","parent":"Languages","total_speakers":"","native_speakers":""},{"child":"Germanic","parent":"Indo-European","total_speakers":"","native_speakers":""},{"child":"Sinitic","parent":"Sino-Tibetan","total_speakers":"","native_speakers":""},{"child":"Indo-Aryan","parent":"Indo-European","total_speakers":"","native_speakers":""},{"child":"Romance","parent":"Indo-European","total_speakers":"","native_speakers":""},{"child":"Semitic","parent":"Afro-Asiatic","total_speakers":"","native_speakers":""},{"child":"Balto-Slavic","parent":"Indo-European","total_speakers":"","native_speakers":""},{"child":"Malayo-Polynesian","parent":"Austronesian","total_speakers":"","native_speakers":""},{"child":"Language Isolate A","parent":"Japanic","total_speakers":"","native_speakers":""},{"child":"Bantu","parent":"Niger-Congo","total_speakers":"","native_speakers":""},{"child":"South-Central","parent":"Dravidian","total_speakers":"","native_speakers":""},{"child":"Southern","parent":"Dravidian","total_speakers":"","native_speakers":""},{"child":"Oghuz","parent":"Turkic","total_speakers":"","native_speakers":""},{"child":"Language Isolate B","parent":"Koreanic","total_speakers":"","native_speakers":""},{"child":"Vietic","parent":"Austronesian","total_speakers":"","native_speakers":""},{"child":"Chadic","parent":"Afro-Asiatic","total_speakers":"","native_speakers":""},{"child":"Zhuang–Tai","parent":"Kra-Dai","total_speakers":"","native_speakers":""},{"child":"Iranian","parent":"Indo-European","total_speakers":"","native_speakers":""},{"child":"Tibeto-Burman","parent":"Sino-Tibetan","total_speakers":"","native_speakers":""},{"child":"Atlantic–Congo","parent":"Niger-Congo","total_speakers":"","native_speakers":""},{"child":"Malayo-Sumbawan","parent":"Austronesian","total_speakers":"","native_speakers":""},{"child":"Karluk","parent":"Turkic","total_speakers":"","native_speakers":""},{"child":"Cushitic","parent":"Afro-Asiatic","total_speakers":"","native_speakers":""},{"child":"Tai","parent":"Kra-Dai","total_speakers":"","native_speakers":""},{"child":"Mande","parent":"Niger-Congo","total_speakers":"","native_speakers":""},{"child":"Hellenic","parent":"Indo-European","total_speakers":"","native_speakers":""},{"child":"Kipchak","parent":"Turkic","total_speakers":"","native_speakers":""},{"child":"Ugric","parent":"Uralic","total_speakers":"","native_speakers":""},{"child":"Language Isolate C","parent":"Austronesian","total_speakers":"","native_speakers":""},{"child":"English","parent":"Germanic","total_speakers":"1132366680","native_speakers":"379007140"},{"child":"Mandarin Chinese","parent":"Sinitic","total_speakers":"1116596640","native_speakers":"917868640"},{"child":"Hindi","parent":"Indo-Aryan","total_speakers":"615475540","native_speakers":"341208640"},{"child":"Spanish","parent":"Romance","total_speakers":"534335730","native_speakers":"460093030"},{"child":"French","parent":"Romance","total_speakers":"279821930","native_speakers":"77177210"},{"child":"Modern Standard Arabic","parent":"Semitic","total_speakers":"273989700","native_speakers":"0"},{"child":"Bengali","parent":"Indo-Aryan","total_speakers":"265042480","native_speakers":"228289600"},{"child":"Russian","parent":"Balto-Slavic","total_speakers":"258227760","native_speakers":"153746530"},{"child":"Portuguese","parent":"Romance","total_speakers":"234168620","native_speakers":"220762620"},{"child":"Indonesian","parent":"Malayo-Polynesian","total_speakers":"198733600","native_speakers":"43364600"},{"child":"Urdu","parent":"Indo-Aryan","total_speakers":"170208780","native_speakers":"68622980"},{"child":"Standard German","parent":"Germanic","total_speakers":"132176520","native_speakers":"76090520"},{"child":"Japanese","parent":"Language Isolate A","total_speakers":"128350830","native_speakers":"128229330"},{"child":"Swahili","parent":"Bantu","total_speakers":"98327740","native_speakers":"16027740"},{"child":"Marathi","parent":"Indo-Aryan","total_speakers":"95312800","native_speakers":"83112800"},{"child":"Telugu","parent":"South-Central","total_speakers":"93040340","native_speakers":"82040340"},{"child":"Western Punjabi","parent":"Indo-Aryan","total_speakers":"92725700","native_speakers":"92725700"},{"child":"Wu Chinese","parent":"Sinitic","total_speakers":"81501290","native_speakers":"81437890"},{"child":"Tamil","parent":"Southern","total_speakers":"80989130","native_speakers":"75039130"},{"child":"Turkish","parent":"Oghuz","total_speakers":"79779360","native_speakers":"79399060"},{"child":"Korean","parent":"Language Isolate B","total_speakers":"77264890","native_speakers":"77264890"},{"child":"Vietnamese","parent":"Vietic","total_speakers":"76950770","native_speakers":"75950770"},{"child":"Yue Chinese","parent":"Sinitic","total_speakers":"73538610","native_speakers":"73136610"},{"child":"Javanese","parent":"Malayo-Polynesian","total_speakers":"68277600","native_speakers":"68277600"},{"child":"Italian","parent":"Romance","total_speakers":"67894920","native_speakers":"64844820"},{"child":"Egyptian Spoken Arabic","parent":"Semitic","total_speakers":"64618100","native_speakers":"64618100"},{"child":"Hausa","parent":"Chadic","total_speakers":"63428100","native_speakers":"43928100"},{"child":"Thai","parent":"Zhuang–Tai","total_speakers":"60657660","native_speakers":"20657660"},{"child":"Gujarati","parent":"Indo-Aryan","total_speakers":"60588970","native_speakers":"56408970"},{"child":"Kannada","parent":"Southern","total_speakers":"56463310","native_speakers":"43563310"},{"child":"Iranian Persian","parent":"Iranian","total_speakers":"52782160","native_speakers":"52782160"},{"child":"Bhojpuri","parent":"Indo-Aryan","total_speakers":"52405300","native_speakers":"52245300"},{"child":"Southern Min Chinese","parent":"Sinitic","total_speakers":"50462190","native_speakers":"50075190"},{"child":"Hakka Chinese","parent":"Sinitic","total_speakers":"48467490","native_speakers":"48467490"},{"child":"Jin Chinese","parent":"Sinitic","total_speakers":"46900000","native_speakers":"46900000"},{"child":"Filipino","parent":"Malayo-Polynesian","total_speakers":"45000000","native_speakers":"28000000"},{"child":"Burmese","parent":"Tibeto-Burman","total_speakers":"42912350","native_speakers":"32912350"},{"child":"Polish","parent":"Balto-Slavic","total_speakers":"40378030","native_speakers":"39713030"},{"child":"Yoruba","parent":"Atlantic–Congo","total_speakers":"39844260","native_speakers":"37844260"},{"child":"Odia","parent":"Indo-Aryan","total_speakers":"38051547","native_speakers":"34461520"},{"child":"Malayalam","parent":"Southern","total_speakers":"37829870","native_speakers":"37134870"},{"child":"Xiang Chinese","parent":"Sinitic","total_speakers":"37300000","native_speakers":"37300000"},{"child":"Maithili","parent":"Indo-Aryan","total_speakers":"34085000","native_speakers":"33890000"},{"child":"Ukrainian","parent":"Balto-Slavic","total_speakers":"33082790","native_speakers":"27282790"},{"child":"Moroccan Spoken Arabic","parent":"Semitic","total_speakers":"32608700","native_speakers":"27488700"},{"child":"Eastern Punjabi","parent":"Indo-Aryan","total_speakers":"32601140","native_speakers":"32600670"},{"child":"Sunda","parent":"Malayo-Sumbawan","total_speakers":"32400000","native_speakers":"32400000"},{"child":"Algerian Spoken Arabic","parent":"Semitic","total_speakers":"32387600","native_speakers":"29387600"},{"child":"Sundanese Spoken Arabic","parent":"Semitic","total_speakers":"31940300","native_speakers":"31940300"},{"child":"Nigerian Pidgin","parent":"Germanic","total_speakers":"30000000","native_speakers":"4700000"},{"child":"Zulu","parent":"Atlantic–Congo","total_speakers":"27779100","native_speakers":"12079100"},{"child":"Igbo","parent":"Atlantic–Congo","total_speakers":"27014190","native_speakers":"27014190"},{"child":"Amharic","parent":"Semitic","total_speakers":"25880630","native_speakers":"21880630"},{"child":"Northern Uzbek","parent":"Karluk","total_speakers":"25164820","native_speakers":"25164820"},{"child":"Sindhi","parent":"Indo-Aryan","total_speakers":"24615591","native_speakers":"24615550"},{"child":"North Levantine Spoken Arabic","parent":"Semitic","total_speakers":"24587400","native_speakers":"24587400"},{"child":"Nepali","parent":"Indo-Aryan","total_speakers":"24528840","native_speakers":"15848840"},{"child":"Romanian","parent":"Romance","total_speakers":"24345750","native_speakers":"24345750"},{"child":"Tagalog","parent":"Malayo-Polynesian","total_speakers":"23808890","native_speakers":"23646890"},{"child":"Dutch","parent":"Germanic","total_speakers":"23069480","native_speakers":"23069480"},{"child":"Sa\'idi Spoken Arabic","parent":"Semitic","total_speakers":"22400000","native_speakers":"22400000"},{"child":"Gan Chinese","parent":"Sinitic","total_speakers":"22100000","native_speakers":"22100000"},{"child":"Northern Pashto","parent":"Iranian","total_speakers":"20850900","native_speakers":"20850900"},{"child":"Magahi","parent":"Indo-Aryan","total_speakers":"20746400","native_speakers":"20735600"},{"child":"Saraiki","parent":"Indo-Aryan","total_speakers":"20009000","native_speakers":"20009000"},{"child":"Xhosa","parent":"Atlantic–Congo","total_speakers":"19183300","native_speakers":"8183300"},{"child":"Malay","parent":"Malayo-Polynesian","total_speakers":"19092180","native_speakers":"16092180"},{"child":"Khmer","parent":"Language Isolate C","total_speakers":"17591230","native_speakers":"16591230"},{"child":"Afrikaans","parent":"Germanic","total_speakers":"17534580","native_speakers":"7234580"},{"child":"Sinhala","parent":"Indo-Aryan","total_speakers":"17287880","native_speakers":"15287880"},{"child":"Somali","parent":"Cushitic","total_speakers":"16321530","native_speakers":"16225930"},{"child":"Chhattisgarhi","parent":"Indo-Aryan","total_speakers":"16300000","native_speakers":"16300000"},{"child":"Cebuano","parent":"Malayo-Polynesian","total_speakers":"15942480","native_speakers":"15942480"},{"child":"Mesopotamian Spoken Arabic","parent":"Semitic","total_speakers":"15655900","native_speakers":"15655900"},{"child":"Assamese","parent":"Indo-Aryan","total_speakers":"15329040","native_speakers":"15328790"},{"child":"Northeastern Thai","parent":"Tai","total_speakers":"15000000","native_speakers":"15000000"},{"child":"Northern Kurdish","parent":"Iranian","total_speakers":"14605670","native_speakers":"14605670"},{"child":"Hijazi Spoken Arabic","parent":"Semitic","total_speakers":"14524500","native_speakers":"14524500"},{"child":"Nigerian Fulfulde","parent":"Atlantic–Congo","total_speakers":"14485000","native_speakers":"14485000"},{"child":"Bavarian","parent":"Germanic","total_speakers":"14359000","native_speakers":"14359000"},{"child":"Bamanankan","parent":"Mande","total_speakers":"14102320","native_speakers":"4102320"},{"child":"South Azerbaijani","parent":"Oghuz","total_speakers":"13813750","native_speakers":"13813750"},{"child":"Northern Sotho","parent":"Atlantic–Congo","total_speakers":"13731000","native_speakers":"4631000"},{"child":"Setswana","parent":"Atlantic–Congo","total_speakers":"13664710","native_speakers":"5814710"},{"child":"Souther Sotho","parent":"Atlantic–Congo","total_speakers":"13524520","native_speakers":"5624520"},{"child":"Czech","parent":"Balto-Slavic","total_speakers":"13386850","native_speakers":"10704850"},{"child":"Greek","parent":"Hellenic","total_speakers":"13170460","native_speakers":"13111960"},{"child":"Chittagonian","parent":"Indo-Aryan","total_speakers":"13000000","native_speakers":"13000000"},{"child":"Kazakh","parent":"Kipchak","total_speakers":"12934060","native_speakers":"12934060"},{"child":"Swedish","parent":"Germanic","total_speakers":"12804900","native_speakers":"9654900"},{"child":"Deccan","parent":"Indo-Aryan","total_speakers":"12800000","native_speakers":"12800000"},{"child":"Hungarian","parent":"Ugric","total_speakers":"12574280","native_speakers":"12574280"},{"child":"Jula","parent":"Mande","total_speakers":"12486000","native_speakers":"2208000"},{"child":"Sadri","parent":"Indo-Aryan","total_speakers":"12131225","native_speakers":"5131180"},{"child":"Kinyarwanda","parent":"Atlantic–Congo","total_speakers":"12120250","native_speakers":"12120250"},{"child":"Cameroonian Pidgin","parent":"Germanic","total_speakers":"12000000","native_speakers":"1466082"},{"child":"Sylheti","parent":"Indo-Aryan","total_speakers":"11800000","native_speakers":"10300000"},{"child":"South Levantine Spoken Arabic","parent":"Semitic","total_speakers":"11601100","native_speakers":"11601100"},{"child":"Tunisian Spoken Arabic","parent":"Semitic","total_speakers":"11571600","native_speakers":"11571600"},{"child":"Sanaani Spoken Arabic","parent":"Semitic","total_speakers":"11350000","native_speakers":"11350000"}]');

},{}],"k5lNf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSVToHierarchy", ()=>CSVToHierarchy);
parcelHelpers.export(exports, "JSONToHierarchy", ()=>JSONToHierarchy);
var _d3Hierarchy = require("d3-hierarchy");
const CSVToHierarchy = (data)=>{
    const hierarchyGenerator = (0, _d3Hierarchy.stratify)().id((d)=>d.child).parentId((d)=>d.parent);
    const root = hierarchyGenerator(data);
    //console.log("root", root);
    const descendants = root.descendants();
    const leaves = root.leaves();
    //console.log("descendants", descendants);
    // console.log("leaves", leaves);
    return [
        root,
        descendants,
        leaves
    ];
};
const JSONToHierarchy = (data)=>{
    const root = (0, _d3Hierarchy.hierarchy)(data);
    console.log("root", root);
    const descendants = root.descendants();
    const leaves = root.leaves();
    console.log("descendants", descendants);
    console.log("leaves", leaves);
    return [
        root,
        descendants,
        leaves
    ];
};

},{"d3-hierarchy":"ffs4h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ffs4h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cluster", ()=>(0, _clusterJsDefault.default));
parcelHelpers.export(exports, "hierarchy", ()=>(0, _indexJsDefault.default));
parcelHelpers.export(exports, "Node", ()=>(0, _indexJs.Node));
parcelHelpers.export(exports, "pack", ()=>(0, _indexJsDefault1.default));
parcelHelpers.export(exports, "packSiblings", ()=>(0, _siblingsJsDefault.default));
parcelHelpers.export(exports, "packEnclose", ()=>(0, _encloseJsDefault.default));
parcelHelpers.export(exports, "partition", ()=>(0, _partitionJsDefault.default));
parcelHelpers.export(exports, "stratify", ()=>(0, _stratifyJsDefault.default));
parcelHelpers.export(exports, "tree", ()=>(0, _treeJsDefault.default));
parcelHelpers.export(exports, "treemap", ()=>(0, _indexJsDefault2.default));
parcelHelpers.export(exports, "treemapBinary", ()=>(0, _binaryJsDefault.default));
parcelHelpers.export(exports, "treemapDice", ()=>(0, _diceJsDefault.default));
parcelHelpers.export(exports, "treemapSlice", ()=>(0, _sliceJsDefault.default));
parcelHelpers.export(exports, "treemapSliceDice", ()=>(0, _sliceDiceJsDefault.default));
parcelHelpers.export(exports, "treemapSquarify", ()=>(0, _squarifyJsDefault.default));
parcelHelpers.export(exports, "treemapResquarify", ()=>(0, _resquarifyJsDefault.default));
var _clusterJs = require("./cluster.js");
var _clusterJsDefault = parcelHelpers.interopDefault(_clusterJs);
var _indexJs = require("./hierarchy/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./pack/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _siblingsJs = require("./pack/siblings.js");
var _siblingsJsDefault = parcelHelpers.interopDefault(_siblingsJs);
var _encloseJs = require("./pack/enclose.js");
var _encloseJsDefault = parcelHelpers.interopDefault(_encloseJs);
var _partitionJs = require("./partition.js");
var _partitionJsDefault = parcelHelpers.interopDefault(_partitionJs);
var _stratifyJs = require("./stratify.js");
var _stratifyJsDefault = parcelHelpers.interopDefault(_stratifyJs);
var _treeJs = require("./tree.js");
var _treeJsDefault = parcelHelpers.interopDefault(_treeJs);
var _indexJs2 = require("./treemap/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _binaryJs = require("./treemap/binary.js");
var _binaryJsDefault = parcelHelpers.interopDefault(_binaryJs);
var _diceJs = require("./treemap/dice.js");
var _diceJsDefault = parcelHelpers.interopDefault(_diceJs);
var _sliceJs = require("./treemap/slice.js");
var _sliceJsDefault = parcelHelpers.interopDefault(_sliceJs);
var _sliceDiceJs = require("./treemap/sliceDice.js");
var _sliceDiceJsDefault = parcelHelpers.interopDefault(_sliceDiceJs);
var _squarifyJs = require("./treemap/squarify.js");
var _squarifyJsDefault = parcelHelpers.interopDefault(_squarifyJs);
var _resquarifyJs = require("./treemap/resquarify.js");
var _resquarifyJsDefault = parcelHelpers.interopDefault(_resquarifyJs);

},{"./cluster.js":false,"./hierarchy/index.js":"dhu0L","./pack/index.js":false,"./pack/siblings.js":false,"./pack/enclose.js":false,"./partition.js":false,"./stratify.js":"hMDLq","./tree.js":false,"./treemap/index.js":false,"./treemap/binary.js":false,"./treemap/dice.js":false,"./treemap/slice.js":false,"./treemap/sliceDice.js":false,"./treemap/squarify.js":false,"./treemap/resquarify.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dhu0L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "computeHeight", ()=>computeHeight);
parcelHelpers.export(exports, "Node", ()=>Node);
var _countJs = require("./count.js");
var _countJsDefault = parcelHelpers.interopDefault(_countJs);
var _eachJs = require("./each.js");
var _eachJsDefault = parcelHelpers.interopDefault(_eachJs);
var _eachBeforeJs = require("./eachBefore.js");
var _eachBeforeJsDefault = parcelHelpers.interopDefault(_eachBeforeJs);
var _eachAfterJs = require("./eachAfter.js");
var _eachAfterJsDefault = parcelHelpers.interopDefault(_eachAfterJs);
var _findJs = require("./find.js");
var _findJsDefault = parcelHelpers.interopDefault(_findJs);
var _sumJs = require("./sum.js");
var _sumJsDefault = parcelHelpers.interopDefault(_sumJs);
var _sortJs = require("./sort.js");
var _sortJsDefault = parcelHelpers.interopDefault(_sortJs);
var _pathJs = require("./path.js");
var _pathJsDefault = parcelHelpers.interopDefault(_pathJs);
var _ancestorsJs = require("./ancestors.js");
var _ancestorsJsDefault = parcelHelpers.interopDefault(_ancestorsJs);
var _descendantsJs = require("./descendants.js");
var _descendantsJsDefault = parcelHelpers.interopDefault(_descendantsJs);
var _leavesJs = require("./leaves.js");
var _leavesJsDefault = parcelHelpers.interopDefault(_leavesJs);
var _linksJs = require("./links.js");
var _linksJsDefault = parcelHelpers.interopDefault(_linksJs);
var _iteratorJs = require("./iterator.js");
var _iteratorJsDefault = parcelHelpers.interopDefault(_iteratorJs);
function hierarchy(data, children) {
    if (data instanceof Map) {
        data = [
            undefined,
            data
        ];
        if (children === undefined) children = mapChildren;
    } else if (children === undefined) children = objectChildren;
    var root = new Node(data), node, nodes = [
        root
    ], child, childs, i, n;
    while(node = nodes.pop())if ((childs = children(node.data)) && (n = (childs = Array.from(childs)).length)) {
        node.children = childs;
        for(i = n - 1; i >= 0; --i){
            nodes.push(child = childs[i] = new Node(childs[i]));
            child.parent = node;
            child.depth = node.depth + 1;
        }
    }
    return root.eachBefore(computeHeight);
}
exports.default = hierarchy;
function node_copy() {
    return hierarchy(this).eachBefore(copyData);
}
function objectChildren(d) {
    return d.children;
}
function mapChildren(d) {
    return Array.isArray(d) ? d[1] : null;
}
function copyData(node) {
    if (node.data.value !== undefined) node.value = node.data.value;
    node.data = node.data.data;
}
function computeHeight(node) {
    var height = 0;
    do node.height = height;
    while ((node = node.parent) && node.height < ++height);
}
function Node(data) {
    this.data = data;
    this.depth = this.height = 0;
    this.parent = null;
}
Node.prototype = hierarchy.prototype = {
    constructor: Node,
    count: (0, _countJsDefault.default),
    each: (0, _eachJsDefault.default),
    eachAfter: (0, _eachAfterJsDefault.default),
    eachBefore: (0, _eachBeforeJsDefault.default),
    find: (0, _findJsDefault.default),
    sum: (0, _sumJsDefault.default),
    sort: (0, _sortJsDefault.default),
    path: (0, _pathJsDefault.default),
    ancestors: (0, _ancestorsJsDefault.default),
    descendants: (0, _descendantsJsDefault.default),
    leaves: (0, _leavesJsDefault.default),
    links: (0, _linksJsDefault.default),
    copy: node_copy,
    [Symbol.iterator]: (0, _iteratorJsDefault.default)
};

},{"./count.js":"d2mnh","./each.js":"6syzK","./eachBefore.js":"gyWQ5","./eachAfter.js":"9cRTr","./find.js":"jqiE6","./sum.js":"1vi3r","./sort.js":"f2orR","./path.js":"5UvUd","./ancestors.js":"61qy3","./descendants.js":"gUlPE","./leaves.js":"czIpN","./links.js":"65v1r","./iterator.js":"cBZOh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d2mnh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function count(node) {
    var sum = 0, children = node.children, i = children && children.length;
    if (!i) sum = 1;
    else while(--i >= 0)sum += children[i].value;
    node.value = sum;
}
exports.default = function() {
    return this.eachAfter(count);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6syzK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(callback, that) {
    let index = -1;
    for (const node of this)callback.call(that, node, ++index, this);
    return this;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gyWQ5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(callback, that) {
    var node = this, nodes = [
        node
    ], children, i, index = -1;
    while(node = nodes.pop()){
        callback.call(that, node, ++index, this);
        if (children = node.children) for(i = children.length - 1; i >= 0; --i)nodes.push(children[i]);
    }
    return this;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9cRTr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(callback, that) {
    var node = this, nodes = [
        node
    ], next = [], children, i, n, index = -1;
    while(node = nodes.pop()){
        next.push(node);
        if (children = node.children) for(i = 0, n = children.length; i < n; ++i)nodes.push(children[i]);
    }
    while(node = next.pop())callback.call(that, node, ++index, this);
    return this;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jqiE6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(callback, that) {
    let index = -1;
    for (const node of this){
        if (callback.call(that, node, ++index, this)) return node;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1vi3r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(value) {
    return this.eachAfter(function(node) {
        var sum = +value(node.data) || 0, children = node.children, i = children && children.length;
        while(--i >= 0)sum += children[i].value;
        node.value = sum;
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f2orR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(compare) {
    return this.eachBefore(function(node) {
        if (node.children) node.children.sort(compare);
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5UvUd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(end) {
    var start = this, ancestor = leastCommonAncestor(start, end), nodes = [
        start
    ];
    while(start !== ancestor){
        start = start.parent;
        nodes.push(start);
    }
    var k = nodes.length;
    while(end !== ancestor){
        nodes.splice(k, 0, end);
        end = end.parent;
    }
    return nodes;
};
function leastCommonAncestor(a, b) {
    if (a === b) return a;
    var aNodes = a.ancestors(), bNodes = b.ancestors(), c = null;
    a = aNodes.pop();
    b = bNodes.pop();
    while(a === b){
        c = a;
        a = aNodes.pop();
        b = bNodes.pop();
    }
    return c;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"61qy3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    var node = this, nodes = [
        node
    ];
    while(node = node.parent)nodes.push(node);
    return nodes;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gUlPE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    return Array.from(this);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"czIpN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    var leaves = [];
    this.eachBefore(function(node) {
        if (!node.children) leaves.push(node);
    });
    return leaves;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"65v1r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    var root = this, links = [];
    root.each(function(node) {
        if (node !== root) links.push({
            source: node.parent,
            target: node
        });
    });
    return links;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cBZOh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function*() {
    var node = this, current, next = [
        node
    ], children, i, n;
    do {
        current = next.reverse(), next = [];
        while(node = current.pop()){
            yield node;
            if (children = node.children) for(i = 0, n = children.length; i < n; ++i)next.push(children[i]);
        }
    }while (next.length);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hMDLq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _accessorsJs = require("./accessors.js");
var _indexJs = require("./hierarchy/index.js");
var preroot = {
    depth: -1
}, ambiguous = {}, imputed = {};
function defaultId(d) {
    return d.id;
}
function defaultParentId(d) {
    return d.parentId;
}
exports.default = function() {
    var id = defaultId, parentId = defaultParentId, path;
    function stratify(data) {
        var nodes = Array.from(data), currentId = id, currentParentId = parentId, n, d, i, root, parent, node, nodeId, nodeKey, nodeByKey = new Map;
        if (path != null) {
            const I = nodes.map((d, i)=>normalize(path(d, i, data)));
            const P = I.map(parentof);
            const S = new Set(I).add("");
            for (const i of P)if (!S.has(i)) {
                S.add(i);
                I.push(i);
                P.push(parentof(i));
                nodes.push(imputed);
            }
            currentId = (_, i)=>I[i];
            currentParentId = (_, i)=>P[i];
        }
        for(i = 0, n = nodes.length; i < n; ++i){
            d = nodes[i], node = nodes[i] = new (0, _indexJs.Node)(d);
            if ((nodeId = currentId(d, i, data)) != null && (nodeId += "")) {
                nodeKey = node.id = nodeId;
                nodeByKey.set(nodeKey, nodeByKey.has(nodeKey) ? ambiguous : node);
            }
            if ((nodeId = currentParentId(d, i, data)) != null && (nodeId += "")) node.parent = nodeId;
        }
        for(i = 0; i < n; ++i){
            node = nodes[i];
            if (nodeId = node.parent) {
                parent = nodeByKey.get(nodeId);
                if (!parent) throw new Error("missing: " + nodeId);
                if (parent === ambiguous) throw new Error("ambiguous: " + nodeId);
                if (parent.children) parent.children.push(node);
                else parent.children = [
                    node
                ];
                node.parent = parent;
            } else {
                if (root) throw new Error("multiple roots");
                root = node;
            }
        }
        if (!root) throw new Error("no root");
        // When imputing internal nodes, only introduce roots if needed.
        // Then replace the imputed marker data with null.
        if (path != null) {
            while(root.data === imputed && root.children.length === 1)root = root.children[0], --n;
            for(let i = nodes.length - 1; i >= 0; --i){
                node = nodes[i];
                if (node.data !== imputed) break;
                node.data = null;
            }
        }
        root.parent = preroot;
        root.eachBefore(function(node) {
            node.depth = node.parent.depth + 1;
            --n;
        }).eachBefore((0, _indexJs.computeHeight));
        root.parent = null;
        if (n > 0) throw new Error("cycle");
        return root;
    }
    stratify.id = function(x) {
        return arguments.length ? (id = (0, _accessorsJs.optional)(x), stratify) : id;
    };
    stratify.parentId = function(x) {
        return arguments.length ? (parentId = (0, _accessorsJs.optional)(x), stratify) : parentId;
    };
    stratify.path = function(x) {
        return arguments.length ? (path = (0, _accessorsJs.optional)(x), stratify) : path;
    };
    return stratify;
};
// To normalize a path, we coerce to a string, strip the trailing slash if any
// (as long as the trailing slash is not immediately preceded by another slash),
// and add leading slash if missing.
function normalize(path) {
    path = `${path}`;
    let i = path.length;
    if (slash(path, i - 1) && !slash(path, i - 2)) path = path.slice(0, -1);
    return path[0] === "/" ? path : `/${path}`;
}
// Walk backwards to find the first slash that is not the leading slash, e.g.:
// "/foo/bar" ⇥ "/foo", "/foo" ⇥ "/", "/" ↦ "". (The root is special-cased
// because the id of the root must be a truthy value.)
function parentof(path) {
    let i = path.length;
    if (i < 2) return "";
    while(--i > 1)if (slash(path, i)) break;
    return path.slice(0, i);
}
// Slashes can be escaped; to determine whether a slash is a path delimiter, we
// count the number of preceding backslashes escaping the forward slash: an odd
// number indicates an escaped forward slash.
function slash(path, i) {
    if (path[i] === "/") {
        let k = 0;
        while(i > 0 && path[--i] === "\\")++k;
        if ((k & 1) === 0) return true;
    }
    return false;
}

},{"./accessors.js":"6pg0v","./hierarchy/index.js":"dhu0L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6pg0v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "optional", ()=>optional);
parcelHelpers.export(exports, "required", ()=>required);
function optional(f) {
    return f == null ? null : required(f);
}
function required(f) {
    if (typeof f !== "function") throw new Error;
    return f;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["csuDB","bDbGG"], "bDbGG", "parcelRequire94c2")

//# sourceMappingURL=index.fbb3188c.js.map
