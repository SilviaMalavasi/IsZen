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
})({"6mTcr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _asyncToGeneratorMjs = require("@swc/helpers/src/_async_to_generator.mjs");
var _asyncToGeneratorMjsDefault = parcelHelpers.interopDefault(_asyncToGeneratorMjs);
var _toConsumableArrayMjs = require("@swc/helpers/src/_to_consumable_array.mjs");
var _toConsumableArrayMjsDefault = parcelHelpers.interopDefault(_toConsumableArrayMjs);
var _tsGeneratorMjs = require("@swc/helpers/src/_ts_generator.mjs");
var _tsGeneratorMjsDefault = parcelHelpers.interopDefault(_tsGeneratorMjs);
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "74e197cc4c623764";
module.bundle.HMR_BUNDLE_ID = "b31beaef9d088b2a";
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
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
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
    ws.onmessage = function() {
        var _ref = (0, _asyncToGeneratorMjsDefault.default)(function(event) {
            var data, assets, handled, processedAssets, i, id, i1, id1, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, ansiDiagnostic, stack, overlay;
            return (0, _tsGeneratorMjsDefault.default)(this, function(_state) {
                switch(_state.label){
                    case 0:
                        checkedAssets = {} /*: {|[string]: boolean|} */ ;
                        assetsToAccept = [];
                        assetsToDispose = [];
                        data = JSON.parse(event.data);
                        if (!(data.type === "update")) return [
                            3,
                            3
                        ];
                        // Remove error overlay if there is one
                        if (typeof document !== "undefined") removeErrorOverlay();
                        assets = data.assets.filter(function(asset) {
                            return asset.envHash === HMR_ENV_HASH;
                        }); // Handle HMR Update
                        handled = assets.every(function(asset) {
                            return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                        });
                        if (!handled) return [
                            3,
                            2
                        ];
                        console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                        if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                        return [
                            4,
                            hmrApplyUpdates(assets)
                        ];
                    case 1:
                        _state.sent(); // Dispose all old assets.
                        processedAssets = {} /*: {|[string]: boolean|} */ ;
                        for(i = 0; i < assetsToDispose.length; i++){
                            id = assetsToDispose[i][1];
                            if (!processedAssets[id]) {
                                hmrDispose(assetsToDispose[i][0], id);
                                processedAssets[id] = true;
                            }
                        } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                        processedAssets = {};
                        for(i1 = 0; i1 < assetsToAccept.length; i1++){
                            id1 = assetsToAccept[i1][1];
                            if (!processedAssets[id1]) {
                                hmrAccept(assetsToAccept[i1][0], id1);
                                processedAssets[id1] = true;
                            }
                        }
                        return [
                            3,
                            3
                        ];
                    case 2:
                        fullReload();
                        _state.label = 3;
                    case 3:
                        if (data.type === "error") {
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                // Log parcel errors to console
                                for(_iterator = data.diagnostics.ansi[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    ansiDiagnostic = _step.value;
                                    stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                                    console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }
                            if (typeof document !== "undefined") {
                                // Render the fancy html overlay
                                removeErrorOverlay();
                                overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                                document.body.appendChild(overlay);
                            }
                        }
                        return [
                            2
                        ];
                }
            });
        });
        return function(event) {
            return _ref.apply(this, arguments);
        };
    }();
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
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = diagnostics[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var diagnostic = _step.value;
            var stack = diagnostic.frames.length ? diagnostic.frames.reduce(function(p, frame) {
                return "".concat(p, '\n<a href="/__parcel_launch_editor?file=').concat(encodeURIComponent(frame.location), '" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">').concat(frame.location, "</a>\n").concat(frame.code);
            }, "") : diagnostic.stack;
            errorHTML += '\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          \uD83D\uDEA8 '.concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return "<div>\uD83D\uDCA1 " + hint + "</div>";
            }).join(""), "\n        </div>\n        ").concat(diagnostic.documentation ? '<div>\uD83D\uDCDD <a style="color: violet" href="'.concat(diagnostic.documentation, '" target="_blank">Learn more</a></div>') : "", "\n      </div>\n    ");
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
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
            var script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise(function(resolve, reject) {
                var _document$head;
                script.onload = function() {
                    return resolve(script);
                };
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise(function(resolve, reject) {
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
function hmrApplyUpdates(assets) {
    return _hmrApplyUpdates.apply(this, arguments);
}
function _hmrApplyUpdates() {
    _hmrApplyUpdates = (0, _asyncToGeneratorMjsDefault.default)(function(assets) {
        var scriptsToRemove, promises;
        return (0, _tsGeneratorMjsDefault.default)(this, function(_state) {
            switch(_state.label){
                case 0:
                    global.parcelHotUpdate = Object.create(null);
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        ,
                        4,
                        5
                    ]);
                    if (!!supportsSourceURL) return [
                        3,
                        3
                    ];
                    promises = assets.map(function(asset) {
                        var _hmrDownload;
                        return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch(function(err) {
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
                    return [
                        4,
                        Promise.all(promises)
                    ];
                case 2:
                    scriptsToRemove = _state.sent();
                    _state.label = 3;
                case 3:
                    assets.forEach(function(asset) {
                        hmrApply(module.bundle.root, asset);
                    });
                    return [
                        3,
                        5
                    ];
                case 4:
                    delete global.parcelHotUpdate;
                    if (scriptsToRemove) scriptsToRemove.forEach(function(script) {
                        if (script) {
                            var _document$head2;
                            (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
                        }
                    });
                    return [
                        7
                    ];
                case 5:
                    return [
                        2
                    ];
            }
        });
    });
    return _hmrApplyUpdates.apply(this, arguments);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            var fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            var _parents;
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            (_parents = parents).push.apply(_parents, (0, _toConsumableArrayMjsDefault.default)(p));
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

},{"@swc/helpers/src/_async_to_generator.mjs":"KtC6s","@swc/helpers/src/_to_consumable_array.mjs":"dIPcS","@swc/helpers/src/_ts_generator.mjs":"7apmi","@parcel/transformer-js/src/esmodule-helpers.js":"ckhj1"}],"3F9rR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScrollSmoother", function() {
    return ScrollSmoother;
});
parcelHelpers.export(exports, "default", function() {
    return ScrollSmoother;
});
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
/*!
 * ScrollSmoother 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var gsap, _coreInitted, _win, _doc, _docEl, _body, _root, _toArray, _clamp, ScrollTrigger, _mainInstance, _expo, _getVelocityProp, _inputObserver, _context, _onResizeDelayedCall, _windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, _getGSAP = function _getGSAP() {
    return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
}, _bonusValidated = 1, //<name>ScrollSmoother</name>
_isViewport = function _isViewport(e) {
    return !!~_root.indexOf(e);
}, _getTime = Date.now, _round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
}, _autoDistance = function _autoDistance(el, progress) {
    // for calculating the distance (and offset) for elements with speed: "auto". Progress is for if it's "above the fold" (negative start position), so we can crop as little as possible.
    var parent = el.parentNode || _docEl, b1 = el.getBoundingClientRect(), b2 = parent.getBoundingClientRect(), gapTop = b2.top - b1.top, gapBottom = b2.bottom - b1.bottom, change = (Math.abs(gapTop) > Math.abs(gapBottom) ? gapTop : gapBottom) / (1 - progress), offset = -change * progress, ratio, extraChange;
    if (change > 0) {
        // if the image starts at the BOTTOM of the container, adjust things so that it shows as much of the image as possible while still covering.
        ratio = b2.height / (_win.innerHeight + b2.height);
        extraChange = ratio === 0.5 ? b2.height * 2 : Math.min(b2.height, -change * ratio / (2 * ratio - 1)) * 2 * (progress || 1);
        offset += progress ? -extraChange * progress : -extraChange / 2; // whatever the offset, we must double that in the opposite direction to compensate.
        change += extraChange;
    }
    return {
        change: change,
        offset: offset
    };
}, _wrap = function _wrap(el) {
    var wrapper = _doc.querySelector(".ScrollSmoother-wrapper"); // some frameworks load multiple times, so one already exists, just use that to avoid duplicates
    if (!wrapper) {
        wrapper = _doc.createElement("div");
        wrapper.classList.add("ScrollSmoother-wrapper");
        el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);
    }
    return wrapper;
};
var ScrollSmoother = /*#__PURE__*/ function() {
    function ScrollSmoother(vars) {
        var _this = this;
        _coreInitted || ScrollSmoother.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollSmoother)");
        vars = this.vars = vars || {};
        _mainInstance && _mainInstance.kill();
        _mainInstance = this;
        _context(this);
        var _vars = vars, smoothTouch = _vars.smoothTouch, _onUpdate = _vars.onUpdate, onStop = _vars.onStop, smooth = _vars.smooth, onFocusIn = _vars.onFocusIn, normalizeScroll = _vars.normalizeScroll, wholePixels = _vars.wholePixels, content, wrapper, height, mainST, effects, sections, intervalID, wrapperCSS, contentCSS, paused, pausedNormalizer, recordedRefreshScroll, recordedRefreshScrub, self = this, effectsPrefix = vars.effectsPrefix || "", scrollFunc = ScrollTrigger.getScrollFunc(_win), smoothDuration = ScrollTrigger.isTouch === 1 ? smoothTouch === true ? 0.8 : parseFloat(smoothTouch) || 0 : smooth === 0 || smooth === false ? 0 : parseFloat(smooth) || 0.8, speed = smoothDuration && +vars.speed || 1, currentY = 0, delta = 0, startupPhase = 1, tracker = _getVelocityProp(0), updateVelocity = function updateVelocity() {
            return tracker.update(-currentY);
        }, scroll = {
            y: 0
        }, removeScroll = function removeScroll() {
            return content.style.overflow = "visible";
        }, isProxyScrolling, killScrub = function killScrub(trigger) {
            trigger.update(); // it's possible that it hasn't been synchronized with the actual scroll position yet, like if it's later in the _triggers Array. If it was already updated, it'll skip the processing anyway.
            var scrub = trigger.getTween();
            if (scrub) {
                scrub.pause();
                scrub._time = scrub._dur; // force the playhead to completion without rendering just so that when it resumes, it doesn't jump back in the .resetTo().
                scrub._tTime = scrub._tDur;
            }
            isProxyScrolling = false;
            trigger.animation.progress(trigger.progress, true);
        }, render = function render(y, force) {
            if (y !== currentY && !paused || force) {
                wholePixels && (y = Math.round(y));
                if (smoothDuration) {
                    content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)"; //content.style.transform = "translateY(" + y + "px)"; // NOTE: when we used matrix3d() or set will-change: transform, it performed noticeably worse on iOS counter-intuitively!
                    content._gsap.y = y + "px";
                }
                delta = y - currentY;
                currentY = y;
                ScrollTrigger.isUpdating || ScrollSmoother.isRefreshing || ScrollTrigger.update(); // note: if we allowed an update() when in the middle of a refresh() it could render all the other ScrollTriggers and inside the update(), _refreshing would be true thus scrubs would jump instantly, but then on the very next update they'd continue from there. Basically this allowed update() to be called on OTHER ScrollTriggers during the refresh() of the mainST which could cause some complications. See https://greensock.com/forums/topic/35536-smoothscroller-ignoremobileresize-for-non-touch-devices
            }
        }, scrollTop = function scrollTop(value) {
            if (arguments.length) {
                value < 0 && (value = 0);
                scroll.y = -value; // don't use currentY because we must accurately track the delta variable (in render() method)
                isProxyScrolling = true; // otherwise, if snapping was applied (or anything that attempted to SET the scroll proxy's scroll position), we'd set the scroll here which would then (on the next tick) update the content tween/ScrollTrigger which would try to smoothly animate to that new value, thus the scrub tween would impede the progress. So we use this flag to respond accordingly in the ScrollTrigger's onUpdate and effectively force the scrub to its end immediately.
                paused ? currentY = -value : render(-value);
                ScrollTrigger.isRefreshing ? mainST.update() : scrollFunc(value / speed); // during a refresh, we revert all scrollers to 0 and then put them back. We shouldn't force the window to that value too during the refresh.
                return this;
            }
            return -currentY;
        }, resizeObserver = typeof ResizeObserver !== "undefined" && vars.autoResize !== false && new ResizeObserver(function() {
            if (!ScrollTrigger.isRefreshing) {
                var max = ScrollTrigger.maxScroll(wrapper);
                max < -currentY && scrollTop(max); // if the user scrolled down to the bottom, for example, and then the page resizes smaller, we should adjust things accordingly right away so that the scroll position isn't past the very end.
                _onResizeDelayedCall.restart(true);
            }
        }), lastFocusElement, _onFocusIn = function _onFocusIn(e) {
            // when the focus changes, make sure that element is on-screen
            wrapper.scrollTop = 0;
            if (e.target.contains && e.target.contains(wrapper) || onFocusIn && onFocusIn(_this, e) === false) return;
            ScrollTrigger.isInViewport(e.target) || e.target === lastFocusElement || _this.scrollTo(e.target, false, "center center");
            lastFocusElement = e.target;
        }, adjustParallaxPosition = function adjustParallaxPosition(triggers, createdAfterEffectWasApplied) {
            var pins, start, dif, markers;
            effects.forEach(function(st) {
                pins = st.pins;
                markers = st.markers;
                triggers.forEach(function(trig) {
                    if (st.trigger && trig.trigger && st !== trig && (trig.trigger === st.trigger || trig.pinnedContainer === st.trigger || st.trigger.contains(trig.trigger))) {
                        start = trig.start;
                        dif = (start - st.start - st.offset) / st.ratio - (start - st.start); // createdAfterEffectWasApplied && (dif -= (gsap.getProperty(st.trigger, "y") - st.startY) / st.ratio); // the effect applied a y offset, so if the ScrollTrigger was created after that, it'll be based on that position so we must compensate. Later we added code to ScrollTrigger to roll back in this situation anyway, so this isn't necessary. Saving it in case a situation arises where it comes in handy.
                        pins.forEach(function(p) {
                            return dif -= p.distance / st.ratio - p.distance;
                        });
                        trig.setPositions(start + dif, trig.end + dif);
                        trig.markerStart && markers.push(gsap.quickSetter([
                            trig.markerStart,
                            trig.markerEnd
                        ], "y", "px"));
                        if (trig.pin && trig.end > 0) {
                            dif = trig.end - trig.start;
                            pins.push({
                                start: trig.start,
                                end: trig.end,
                                distance: dif,
                                trig: trig
                            });
                            st.setPositions(st.start, st.end + dif);
                            st.vars.onRefresh(st);
                        }
                    }
                });
            });
        }, onRefresh = function onRefresh() {
            removeScroll();
            requestAnimationFrame(removeScroll);
            if (effects) {
                // adjust all the effect start/end positions including any pins!
                effects.forEach(function(st) {
                    var start = st.start, end = st.auto ? Math.min(ScrollTrigger.maxScroll(st.scroller), st.end) : start + (st.end - start) / st.ratio, offset = (end - st.end) / 2; // we split the difference so that it reaches its natural position in the MIDDLE of the viewport
                    start -= offset;
                    end -= offset;
                    st.offset = offset || 0.0001; // we assign at least a tiny value because we check in the onUpdate for .offset being set in order to apply values.
                    st.pins.length = 0;
                    st.setPositions(Math.min(start, end), Math.max(start, end));
                    st.vars.onRefresh(st);
                });
                adjustParallaxPosition(ScrollTrigger.sort());
            }
            tracker.reset();
        }, addOnRefresh = function addOnRefresh() {
            return ScrollTrigger.addEventListener("refresh", onRefresh);
        }, restoreEffects = function restoreEffects() {
            return effects && effects.forEach(function(st) {
                return st.vars.onRefresh(st);
            });
        }, revertEffects = function revertEffects() {
            effects && effects.forEach(function(st) {
                return st.vars.onRefreshInit(st);
            });
            return restoreEffects;
        }, effectValueGetter = function effectValueGetter(name, value, index, el) {
            return function() {
                var v = typeof value === "function" ? value(index, el) : value;
                v || v === 0 || (v = el.getAttribute("data-" + effectsPrefix + name) || (name === "speed" ? 1 : 0));
                el.setAttribute("data-" + effectsPrefix + name, v);
                return v === "auto" ? v : parseFloat(v);
            };
        }, createEffect = function createEffect(el, speed, lag, index, effectsPadding) {
            effectsPadding = (typeof effectsPadding === "function" ? effectsPadding(index, el) : effectsPadding) || 0;
            var getSpeed = effectValueGetter("speed", speed, index, el), getLag = effectValueGetter("lag", lag, index, el), startY = gsap.getProperty(el, "y"), cache = el._gsap, ratio, st, autoSpeed, scrub, progressOffset, yOffset, initDynamicValues = function initDynamicValues() {
                speed = getSpeed();
                lag = getLag();
                ratio = parseFloat(speed) || 1;
                autoSpeed = speed === "auto";
                progressOffset = autoSpeed ? 0 : 0.5;
                scrub && scrub.kill();
                scrub = lag && gsap.to(el, {
                    ease: _expo,
                    overwrite: false,
                    y: "+=0",
                    duration: lag
                });
                if (st) {
                    st.ratio = ratio;
                    st.autoSpeed = autoSpeed;
                }
            }, revert = function revert() {
                cache.y = startY + "px";
                cache.renderTransform(1);
                initDynamicValues();
            }, pins = [], markers = [], change = 0, updateChange = function updateChange(self) {
                if (autoSpeed) {
                    revert();
                    var auto = _autoDistance(el, _clamp(0, 1, -self.start / (self.end - self.start)));
                    change = auto.change;
                    yOffset = auto.offset;
                } else {
                    change = (self.end - self.start) * (1 - ratio);
                    yOffset = 0;
                }
                pins.forEach(function(p) {
                    return change -= p.distance * (1 - ratio);
                });
                self.vars.onUpdate(self);
                scrub && scrub.progress(1);
            };
            initDynamicValues();
            if (ratio !== 1 || autoSpeed || scrub) {
                st = ScrollTrigger.create({
                    trigger: autoSpeed ? el.parentNode : el,
                    start: "top bottom+=" + effectsPadding,
                    end: "bottom top-=" + effectsPadding,
                    scroller: wrapper,
                    scrub: true,
                    refreshPriority: -999,
                    // must update AFTER any other ScrollTrigger pins
                    onRefreshInit: revert,
                    onRefresh: updateChange,
                    onKill: function onKill(self) {
                        var i = effects.indexOf(self);
                        i >= 0 && effects.splice(i, 1);
                        revert();
                    },
                    onUpdate: function onUpdate(self) {
                        var y = startY + change * (self.progress - progressOffset), i = pins.length, extraY = 0, pin, scrollY, end;
                        if (self.offset) {
                            // wait until the effects are adjusted.
                            if (i) {
                                // pinning must be handled in a special way because when pinned, slope changes to 1.
                                scrollY = -currentY; // -scroll.y;
                                end = self.end;
                                while(i--){
                                    pin = pins[i];
                                    if (pin.trig.isActive || scrollY >= pin.start && scrollY <= pin.end) {
                                        // currently pinned so no need to set anything
                                        if (scrub) {
                                            pin.trig.progress += pin.trig.direction < 0 ? 0.001 : -0.001; // just to make absolutely sure that it renders (if the progress didn't change, it'll skip)
                                            pin.trig.update(0, 0, 1);
                                            scrub.resetTo("y", parseFloat(cache.y), -delta, true);
                                            startupPhase && scrub.progress(1);
                                        }
                                        return;
                                    }
                                    scrollY > pin.end && (extraY += pin.distance);
                                    end -= pin.distance;
                                }
                                y = startY + extraY + change * ((gsap.utils.clamp(self.start, self.end, scrollY) - self.start - extraY) / (end - self.start) - progressOffset);
                            }
                            y = _round(y + yOffset);
                            markers.length && !autoSpeed && markers.forEach(function(setter) {
                                return setter(y - extraY);
                            });
                            if (scrub) {
                                scrub.resetTo("y", y, -delta, true);
                                startupPhase && scrub.progress(1);
                            } else {
                                cache.y = y + "px";
                                cache.renderTransform(1);
                            }
                        }
                    }
                });
                updateChange(st);
                gsap.core.getCache(st.trigger).stRevert = revertEffects; // if user calls ScrollSmoother.create() with effects and THEN creates a ScrollTrigger on the same trigger element, the effect would throw off the start/end positions thus we needed a way to revert things when creating a new ScrollTrigger in that scenario, so we use this stRevert property of the GSCache inside ScrollTrigger.
                st.startY = startY;
                st.pins = pins;
                st.markers = markers;
                st.ratio = ratio;
                st.autoSpeed = autoSpeed;
                el.style.willChange = "transform";
            }
            return st;
        };
        addOnRefresh();
        ScrollTrigger.addEventListener("killAll", addOnRefresh);
        gsap.delayedCall(0.5, function() {
            return startupPhase = 0;
        });
        this.scrollTop = scrollTop;
        this.scrollTo = function(target, smooth, position) {
            var p = gsap.utils.clamp(0, ScrollTrigger.maxScroll(_win), isNaN(target) ? _this.offset(target, position) : +target);
            !smooth ? scrollTop(p) : paused ? gsap.to(_this, {
                duration: smoothDuration,
                scrollTop: p,
                overwrite: "auto",
                ease: _expo
            }) : scrollFunc(p);
        };
        this.offset = function(target, position) {
            target = _toArray(target)[0];
            var cssText = target.style.cssText, // because if there's an effect applied, we revert(). We need to restore.
            st = ScrollTrigger.create({
                trigger: target,
                start: position || "top top"
            }), y;
            effects && adjustParallaxPosition([
                st
            ], true);
            y = st.start / speed;
            st.kill(false);
            target.style.cssText = cssText;
            gsap.core.getCache(target).uncache = 1;
            return y;
        };
        function refreshHeight() {
            height = content.clientHeight;
            content.style.overflow = "visible";
            _body.style.height = _win.innerHeight + (height - _win.innerHeight) / speed + "px";
            return height - _win.innerHeight;
        }
        this.content = function(element) {
            if (arguments.length) {
                var newContent = _toArray(element || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || _body.children[0];
                if (newContent !== content) {
                    content = newContent;
                    contentCSS = content.getAttribute("style") || "";
                    resizeObserver && resizeObserver.observe(content);
                    gsap.set(content, {
                        overflow: "visible",
                        width: "100%",
                        boxSizing: "border-box",
                        y: "+=0"
                    });
                    smoothDuration || gsap.set(content, {
                        clearProps: "transform"
                    });
                }
                return this;
            }
            return content;
        };
        this.wrapper = function(element) {
            if (arguments.length) {
                wrapper = _toArray(element || "#smooth-wrapper")[0] || _wrap(content);
                wrapperCSS = wrapper.getAttribute("style") || "";
                refreshHeight();
                gsap.set(wrapper, smoothDuration ? {
                    overflow: "hidden",
                    position: "fixed",
                    height: "100%",
                    width: "100%",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                } : {
                    overflow: "visible",
                    position: "relative",
                    width: "100%",
                    height: "auto",
                    top: "auto",
                    bottom: "auto",
                    left: "auto",
                    right: "auto"
                });
                return this;
            }
            return wrapper;
        };
        this.effects = function(targets, config) {
            var _effects;
            effects || (effects = []);
            if (!targets) return effects.slice(0);
            targets = _toArray(targets);
            targets.forEach(function(target) {
                var i = effects.length;
                while(i--)effects[i].trigger === target && effects[i].kill(); // will automatically splice() it from the effects Array in the onKill
            });
            config = config || {};
            var _config = config, speed = _config.speed, lag = _config.lag, effectsPadding = _config.effectsPadding, effectsToAdd = [], i, st;
            for(i = 0; i < targets.length; i++){
                st = createEffect(targets[i], speed, lag, i, effectsPadding);
                st && effectsToAdd.push(st);
            }
            (_effects = effects).push.apply(_effects, effectsToAdd);
            return effectsToAdd;
        };
        this.sections = function(targets, config) {
            var _sections;
            sections || (sections = []);
            if (!targets) return sections.slice(0);
            var newSections = _toArray(targets).map(function(el) {
                return ScrollTrigger.create({
                    trigger: el,
                    start: "top 120%",
                    end: "bottom -20%",
                    onToggle: function onToggle(self) {
                        el.style.opacity = self.isActive ? "1" : "0";
                        el.style.pointerEvents = self.isActive ? "all" : "none";
                    }
                });
            });
            config && config.add ? (_sections = sections).push.apply(_sections, newSections) : sections = newSections.slice(0);
            return newSections;
        };
        this.content(vars.content);
        this.wrapper(vars.wrapper);
        this.render = function(y) {
            return render(y || y === 0 ? y : currentY);
        };
        this.getVelocity = function() {
            return tracker.getVelocity(-currentY);
        };
        ScrollTrigger.scrollerProxy(wrapper, {
            scrollTop: scrollTop,
            scrollHeight: function scrollHeight() {
                return refreshHeight() && _body.scrollHeight;
            },
            fixedMarkers: vars.fixedMarkers !== false && !!smoothDuration,
            content: content,
            getBoundingClientRect: function getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: _win.innerWidth,
                    height: _win.innerHeight
                };
            }
        });
        ScrollTrigger.defaults({
            scroller: wrapper
        });
        var existingScrollTriggers = ScrollTrigger.getAll().filter(function(st) {
            return st.scroller === _win || st.scroller === wrapper;
        });
        existingScrollTriggers.forEach(function(st) {
            return st.revert(true, true);
        }); // in case it's in an environment like React where child components that have ScrollTriggers instantiate BEFORE the parent that does ScrollSmoother.create(...);
        mainST = ScrollTrigger.create({
            animation: gsap.fromTo(scroll, {
                y: 0
            }, {
                y: function y() {
                    return -refreshHeight();
                },
                immediateRender: false,
                ease: "none",
                data: "ScrollSmoother",
                duration: 100,
                // for added precision
                onUpdate: function onUpdate() {
                    if (this._dur) {
                        // skip when it's the "from" part of the tween (setting the startAt)
                        var force = isProxyScrolling;
                        if (force) {
                            killScrub(mainST);
                            scroll.y = currentY;
                        }
                        render(scroll.y, force);
                        updateVelocity();
                        _onUpdate && !paused && _onUpdate(self);
                    }
                }
            }),
            onRefreshInit: function onRefreshInit(self) {
                ScrollSmoother.isRefreshing = true;
                if (effects) {
                    var pins = ScrollTrigger.getAll().filter(function(st) {
                        return !!st.pin;
                    });
                    effects.forEach(function(st) {
                        if (!st.vars.pinnedContainer) pins.forEach(function(pinST) {
                            if (pinST.pin.contains(st.trigger)) {
                                var v = st.vars;
                                v.pinnedContainer = pinST.pin;
                                st.vars = null; // otherwise, it'll self.kill(), triggering the onKill()
                                st.init(v, st.animation);
                            }
                        });
                    });
                }
                var scrub = self.getTween();
                recordedRefreshScrub = scrub && scrub._end > scrub._dp._time; // don't use scrub.progress() < 1 because we may have called killScrub() recently in which case it'll report progress() as 1 when we were actually in the middle of a scrub. That's why we tap into the _end instead.
                recordedRefreshScroll = currentY;
                scroll.y = 0;
                if (smoothDuration) {
                    ScrollTrigger.isTouch === 1 && (wrapper.style.position = "absolute"); // Safari 16 has a major bug - if you set wrapper.scrollTop to 0 (even if it's already 0), it blocks the whole page from scrolling page non-scrollable! See https://bugs.webkit.org/show_bug.cgi?id=245300 and https://codepen.io/GreenSock/pen/YzLZVOz. Originally we set pointer-events: none on the wrapper temporarily, and set it back to all after setting scrollTop to 0, but that could cause mouseenter/mouseleave/etc. events to fire too, so we opted to set the position to absolute and then back to fixed after setting scrollTop.
                    wrapper.scrollTop = 0; // set wrapper.scrollTop to 0 because in some very rare situations, the browser will auto-set that, like if there's a hash in the link or changing focus to an off-screen input
                    ScrollTrigger.isTouch === 1 && (wrapper.style.position = "fixed");
                }
            },
            onRefresh: function onRefresh(self) {
                self.animation.invalidate(); // because pinnedContainers may have been found in ScrollTrigger's _refreshAll() that extend the height. Without this, it may prevent the user from being able to scroll all the way down.
                self.setPositions(self.start, refreshHeight() / speed);
                recordedRefreshScrub || killScrub(self);
                scroll.y = -scrollFunc() * speed; // in 3.11.1, we shifted to forcing the scroll position to 0 during the entire refreshAll() in ScrollTrigger and then restored the scroll position AFTER everything had been updated, thus we should always make these adjustments AFTER a full refresh rather than putting it in the onRefresh() of the individual mainST ScrollTrigger which would fire before the scroll position was restored.
                render(scroll.y);
                startupPhase || self.animation.progress(gsap.utils.clamp(0, 1, recordedRefreshScroll / speed / -self.end));
                if (recordedRefreshScrub) {
                    // we need to trigger the scrub to happen again
                    self.progress -= 0.001;
                    self.update();
                }
                ScrollSmoother.isRefreshing = false;
            },
            id: "ScrollSmoother",
            scroller: _win,
            invalidateOnRefresh: true,
            start: 0,
            refreshPriority: -9999,
            // because all other pins, etc. should be calculated first before this figures out the height of the body. BUT this should also update FIRST so that the scroll position on the proxy is up-to-date when all the ScrollTriggers calculate their progress! -9999 is a special number that ScrollTrigger looks for to handle in this way.
            end: function end() {
                return refreshHeight() / speed;
            },
            onScrubComplete: function onScrubComplete() {
                tracker.reset();
                onStop && onStop(_this);
            },
            scrub: smoothDuration || true
        });
        this.smooth = function(value) {
            if (arguments.length) {
                smoothDuration = value || 0;
                speed = smoothDuration && +vars.speed || 1;
                mainST.scrubDuration(value);
            }
            return mainST.getTween() ? mainST.getTween().duration() : 0;
        };
        mainST.getTween() && (mainST.getTween().vars.ease = vars.ease || _expo);
        this.scrollTrigger = mainST;
        vars.effects && this.effects(vars.effects === true ? "[data-" + effectsPrefix + "speed], [data-" + effectsPrefix + "lag]" : vars.effects, {
            effectsPadding: vars.effectsPadding
        });
        vars.sections && this.sections(vars.sections === true ? "[data-section]" : vars.sections);
        existingScrollTriggers.forEach(function(st) {
            st.vars.scroller = wrapper;
            st.revert(false, true);
            st.init(st.vars, st.animation);
        });
        this.paused = function(value, allowNestedScroll) {
            if (arguments.length) {
                if (!!paused !== value) {
                    if (value) {
                        // pause
                        mainST.getTween() && mainST.getTween().pause();
                        scrollFunc(-currentY / speed);
                        tracker.reset();
                        pausedNormalizer = ScrollTrigger.normalizeScroll();
                        pausedNormalizer && pausedNormalizer.disable(); // otherwise the normalizer would try to scroll the page on things like wheel events.
                        paused = ScrollTrigger.observe({
                            preventDefault: true,
                            type: "wheel,touch,scroll",
                            debounce: false,
                            allowClicks: true,
                            onChangeY: function onChangeY() {
                                return scrollTop(-currentY);
                            } // refuse to scroll
                        });
                        paused.nested = _inputObserver(_docEl, "wheel,touch,scroll", true, allowNestedScroll !== false); // allow nested scrolling, like modals
                    } else {
                        // resume
                        paused.nested.kill();
                        paused.kill();
                        paused = 0;
                        pausedNormalizer && pausedNormalizer.enable();
                        mainST.progress = (-currentY / speed - mainST.start) / (mainST.end - mainST.start);
                        killScrub(mainST);
                    }
                }
                return this;
            }
            return !!paused;
        };
        this.kill = this.revert = function() {
            _this.paused(false);
            killScrub(mainST);
            mainST.kill();
            var triggers = (effects || []).concat(sections || []), i = triggers.length;
            while(i--)// make sure we go backwards because the onKill() will effects.splice(index, 1) and we don't want to skip
            triggers[i].kill();
            ScrollTrigger.scrollerProxy(wrapper);
            ScrollTrigger.removeEventListener("killAll", addOnRefresh);
            ScrollTrigger.removeEventListener("refresh", onRefresh);
            wrapper.style.cssText = wrapperCSS;
            content.style.cssText = contentCSS;
            var defaults = ScrollTrigger.defaults({});
            defaults && defaults.scroller === wrapper && ScrollTrigger.defaults({
                scroller: _win
            });
            _this.normalizer && ScrollTrigger.normalizeScroll(false);
            clearInterval(intervalID);
            _mainInstance = null;
            resizeObserver && resizeObserver.disconnect();
            _body.style.removeProperty("height");
            _win.removeEventListener("focusin", _onFocusIn);
        };
        this.refresh = function(soft, force) {
            return mainST.refresh(soft, force);
        };
        if (normalizeScroll) this.normalizer = ScrollTrigger.normalizeScroll(normalizeScroll === true ? {
            debounce: true,
            content: !smoothDuration && content
        } : normalizeScroll);
        ScrollTrigger.config(vars); // in case user passes in ignoreMobileResize for example
        "overscrollBehavior" in _win.getComputedStyle(_body) && gsap.set([
            _body,
            _docEl
        ], {
            overscrollBehavior: "none"
        });
        "scrollBehavior" in _win.getComputedStyle(_body) && gsap.set([
            _body,
            _docEl
        ], {
            scrollBehavior: "auto"
        }); // if the user hits the tab key (or whatever) to shift focus to an element that's off-screen, center that element.
        _win.addEventListener("focusin", _onFocusIn);
        intervalID = setInterval(updateVelocity, 250);
        _doc.readyState === "loading" || requestAnimationFrame(function() {
            return ScrollTrigger.refresh();
        });
    }
    ScrollSmoother.register = function register(core) {
        if (!_coreInitted) {
            gsap = core || _getGSAP();
            if (_windowExists() && window.document) {
                _win = window;
                _doc = document;
                _docEl = _doc.documentElement;
                _body = _doc.body;
            }
            if (gsap) {
                _toArray = gsap.utils.toArray;
                _clamp = gsap.utils.clamp;
                _expo = gsap.parseEase("expo");
                _context = gsap.core.context || function() {};
                _onResizeDelayedCall = gsap.delayedCall(0.2, function() {
                    return ScrollTrigger.isRefreshing || _mainInstance && _mainInstance.refresh();
                }).pause();
                ScrollTrigger = gsap.core.globals().ScrollTrigger;
                gsap.core.globals("ScrollSmoother", ScrollSmoother); // must register the global manually because in Internet Explorer, functions (classes) don't have a "name" property.
                //	gsap.ticker.lagSmoothing(50, 100); // generally people don't want things to jump (honoring smoothness over time is better with smooth scrolling)
                if (_body && ScrollTrigger) {
                    _root = [
                        _win,
                        _doc,
                        _docEl,
                        _body
                    ];
                    _getVelocityProp = ScrollTrigger.core._getVelocityProp;
                    _inputObserver = ScrollTrigger.core._inputObserver;
                    ScrollSmoother.refresh = ScrollTrigger.refresh;
                    _coreInitted = 1;
                }
            }
        }
        return _coreInitted;
    };
    _createClass(ScrollSmoother, [
        {
            key: "progress",
            get: function get() {
                return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0;
            }
        }
    ]);
    return ScrollSmoother;
}();
ScrollSmoother.version = "3.11.5";
ScrollSmoother.create = function(vars) {
    return _mainInstance && vars && _mainInstance.content() === _toArray(vars.content)[0] ? _mainInstance : new ScrollSmoother(vars);
};
ScrollSmoother.get = function() {
    return _mainInstance;
};
_getGSAP() && gsap.registerPlugin(ScrollSmoother);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ckhj1"}]},["6mTcr"], null, "parcelRequire57d0")

