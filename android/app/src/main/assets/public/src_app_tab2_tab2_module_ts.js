"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 559:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource),
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType)
/* harmony export */ });
var CameraSource;
(function (CameraSource) {
    /**
     * Prompts the user to select either the photo album or take a photo.
     */
    CameraSource["Prompt"] = "PROMPT";
    /**
     * Take a new photo using the camera.
     */
    CameraSource["Camera"] = "CAMERA";
    /**
     * Pick an existing photo fron the gallery or photo album.
     */
    CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection["Rear"] = "REAR";
    CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
    CameraResultType["Uri"] = "uri";
    CameraResultType["Base64"] = "base64";
    CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));


/***/ }),

/***/ 3201:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource),
/* harmony export */   "Camera": () => (/* binding */ Camera)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 2960);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 559);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 1482)).then(m => new m.CameraWeb()),
});




/***/ }),

/***/ 2960:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": () => (/* binding */ Capacitor),
/* harmony export */   "CapacitorException": () => (/* binding */ CapacitorException),
/* harmony export */   "CapacitorPlatforms": () => (/* binding */ CapacitorPlatforms),
/* harmony export */   "ExceptionCode": () => (/* binding */ ExceptionCode),
/* harmony export */   "Plugins": () => (/* binding */ Plugins),
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin),
/* harmony export */   "WebView": () => (/* binding */ WebView),
/* harmony export */   "addPlatform": () => (/* binding */ addPlatform),
/* harmony export */   "registerPlugin": () => (/* binding */ registerPlugin),
/* harmony export */   "registerWebPlugin": () => (/* binding */ registerWebPlugin),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform)
/* harmony export */ });
/* harmony import */ var _Users_simonbrigant_Documents_iut_2021_2022_photo_gallery_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 2783);


/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = win => {
  const defaultPlatformMap = new Map();
  defaultPlatformMap.set('web', {
    name: 'web'
  });
  const capPlatforms = win.CapacitorPlatforms || {
    currentPlatform: {
      name: 'web'
    },
    platforms: defaultPlatformMap
  };

  const addPlatform = (name, platform) => {
    capPlatforms.platforms.set(name, platform);
  };

  const setPlatform = name => {
    if (capPlatforms.platforms.has(name)) {
      capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
    }
  };

  capPlatforms.addPlatform = addPlatform;
  capPlatforms.setPlatform = setPlatform;
  return capPlatforms;
};

const initPlatforms = win => win.CapacitorPlatforms = createCapacitorPlatforms(win);
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */


const CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
  var _a;

  const config = webPlugin.config;
  const Plugins = cap.Plugins;

  if (!config || !config.name) {
    // TODO: add link to upgrade guide
    throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
  } // TODO: add link to upgrade guide


  console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);

  if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
    // Add the web plugin into the plugins registry if there already isn't
    // an existing one. If it doesn't already exist, that means
    // there's no existing native implementation for it.
    // - OR -
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    Plugins[config.name] = webPlugin;
  }
};

var ExceptionCode;

(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */

  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));

class CapacitorException extends Error {
  constructor(message, code) {
    super(message);
    this.message = message;
    this.code = code;
  }

}

const getPlatformId = win => {
  var _a, _b;

  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return 'android';
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return 'ios';
  } else {
    return 'web';
  }
};

const createCapacitor = win => {
  var _a, _b, _c, _d, _e;

  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  /**
   * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
   */

  const capPlatforms = win.CapacitorPlatforms;

  const defaultGetPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };

  const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;

  const defaultIsNativePlatform = () => getPlatform() !== 'web';

  const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;

  const defaultIsPluginAvailable = pluginName => {
    const plugin = registeredPlugins.get(pluginName);

    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      // JS implementation available for the current platform.
      return true;
    }

    if (getPluginHeader(pluginName)) {
      // Native implementation available.
      return true;
    }

    return false;
  };

  const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;

  const defaultGetPluginHeader = pluginName => {
    var _a;

    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
  };

  const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;

  const handleError = err => win.console.error(err);

  const pluginMethodNoop = (_target, prop, pluginName) => {
    return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
  };

  const registeredPlugins = new Map();

  const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);

    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }

    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;

    const loadPluginImplementation = /*#__PURE__*/function () {
      var _ref = (0,_Users_simonbrigant_Documents_iut_2021_2022_photo_gallery_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = yield jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }

        return jsImplementation;
      });

      return function loadPluginImplementation() {
        return _ref.apply(this, arguments);
      };
    }();

    const createPluginMethod = (impl, prop) => {
      var _a, _b;

      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);

        if (methodHeader) {
          if (methodHeader.rtype === 'promise') {
            return options => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };

    const createPluginMethodWrapper = prop => {
      let remove;

      const wrapper = (...args) => {
        const p = loadPluginImplementation().then(impl => {
          const fn = createPluginMethod(impl, prop);

          if (fn) {
            const p = fn(...args);
            remove = p === null || p === void 0 ? void 0 : p.remove;
            return p;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });

        if (prop === 'addListener') {
          p.remove = /*#__PURE__*/(0,_Users_simonbrigant_Documents_iut_2021_2022_photo_gallery_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return remove();
          });
        }

        return p;
      }; // Some flair ✨


      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;

      Object.defineProperty(wrapper, 'name', {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };

    const addListener = createPluginMethodWrapper('addListener');
    const removeListener = createPluginMethodWrapper('removeListener');

    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);

      const remove = /*#__PURE__*/function () {
        var _ref3 = (0,_Users_simonbrigant_Documents_iut_2021_2022_photo_gallery_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const callbackId = yield call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        });

        return function remove() {
          return _ref3.apply(this, arguments);
        };
      }();

      const p = new Promise(resolve => call.then(() => resolve({
        remove
      })));
      p.remove = /*#__PURE__*/(0,_Users_simonbrigant_Documents_iut_2021_2022_photo_gallery_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };

    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case '$$typeof':
            return undefined;

          case 'toJSON':
            return () => ({});

          case 'addListener':
            return pluginHeader ? addListenerNative : addListener;

          case 'removeListener':
            return removeListener;

          default:
            return createPluginMethodWrapper(prop);
        }
      }

    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
    });
    return proxy;
  };

  const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin; // Add in convertFileSrc for web, it will already be available in native context

  if (!cap.convertFileSrc) {
    cap.convertFileSrc = filePath => filePath;
  }

  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.pluginMethodNoop = pluginMethodNoop;
  cap.registerPlugin = registerPlugin;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled; // Deprecated props

  cap.platform = cap.getPlatform();
  cap.isNative = cap.isNativePlatform();
  return cap;
};

const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);

const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */

const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */

const registerWebPlugin = plugin => legacyRegisterWebPlugin(Capacitor, plugin);
/**
 * Base class web plugins should extend.
 */


class WebPlugin {
  constructor(config) {
    this.listeners = {};
    this.windowListeners = {};

    if (config) {
      // TODO: add link to upgrade guide
      console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
      this.config = config;
    }
  }

  addListener(eventName, listenerFunc) {
    var _this = this;

    const listeners = this.listeners[eventName];

    if (!listeners) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
    // go ahead and add it

    const windowListener = this.windowListeners[eventName];

    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }

    const remove = /*#__PURE__*/function () {
      var _ref5 = (0,_Users_simonbrigant_Documents_iut_2021_2022_photo_gallery_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this.removeListener(eventName, listenerFunc);
      });

      return function remove() {
        return _ref5.apply(this, arguments);
      };
    }();

    const p = Promise.resolve({
      remove
    });
    Object.defineProperty(p, 'remove', {
      value: function () {
        var _ref6 = (0,_Users_simonbrigant_Documents_iut_2021_2022_photo_gallery_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.warn(`Using addListener() without 'await' is deprecated.`);
          yield remove();
        });

        return function value() {
          return _ref6.apply(this, arguments);
        };
      }()
    });
    return p;
  }

  removeAllListeners() {
    var _this2 = this;

    return (0,_Users_simonbrigant_Documents_iut_2021_2022_photo_gallery_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.listeners = {};

      for (const listener in _this2.windowListeners) {
        _this2.removeWindowListener(_this2.windowListeners[listener]);
      }

      _this2.windowListeners = {};
    })();
  }

  notifyListeners(eventName, data) {
    const listeners = this.listeners[eventName];

    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }

  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }

  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: event => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }

  unimplemented(msg = 'not implemented') {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }

  unavailable(msg = 'not available') {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }

  removeListener(eventName, listenerFunc) {
    var _this3 = this;

    return (0,_Users_simonbrigant_Documents_iut_2021_2022_photo_gallery_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const listeners = _this3.listeners[eventName];

      if (!listeners) {
        return;
      }

      const index = listeners.indexOf(listenerFunc);

      _this3.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
      // remove the window listener


      if (!_this3.listeners[eventName].length) {
        _this3.removeWindowListener(_this3.windowListeners[eventName]);
      }
    })();
  }

  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }

  removeWindowListener(handle) {
    if (!handle) {
      return;
    }

    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }

}

const WebView = /*#__PURE__*/registerPlugin('WebView');


/***/ }),

/***/ 5800:
/*!********************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/definitions.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": () => (/* binding */ Directory),
/* harmony export */   "Encoding": () => (/* binding */ Encoding),
/* harmony export */   "FilesystemDirectory": () => (/* binding */ FilesystemDirectory),
/* harmony export */   "FilesystemEncoding": () => (/* binding */ FilesystemEncoding)
/* harmony export */ });
var Directory;
(function (Directory) {
    /**
     * The Documents directory
     * On iOS it's the app's documents directory.
     * Use this directory to store user-generated content.
     * On Android it's the Public Documents folder, so it's accessible from other apps.
     * It's not accesible on Android 10 unless the app enables legacy External Storage
     * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
     * in the `AndroidManifest.xml`.
     * It's not accesible on Android 11 or newer.
     *
     * @since 1.0.0
     */
    Directory["Documents"] = "DOCUMENTS";
    /**
     * The Data directory
     * On iOS it will use the Documents directory
     * On Android it's the directory holding application files.
     * Files will be deleted when the application is uninstalled.
     *
     * @since 1.0.0
     */
    Directory["Data"] = "DATA";
    /**
     * The Cache directory
     * Can be deleted in cases of low memory, so use this directory to write app-specific files
     * that your app can re-create easily.
     *
     * @since 1.0.0
     */
    Directory["Cache"] = "CACHE";
    /**
     * The external directory
     * On iOS it will use the Documents directory
     * On Android it's the directory on the primary shared/external
     * storage device where the application can place persistent files it owns.
     * These files are internal to the applications, and not typically visible
     * to the user as media.
     * Files will be deleted when the application is uninstalled.
     *
     * @since 1.0.0
     */
    Directory["External"] = "EXTERNAL";
    /**
     * The external storage directory
     * On iOS it will use the Documents directory
     * On Android it's the primary shared/external storage directory.
     * It's not accesible on Android 10 unless the app enables legacy External Storage
     * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
     * in the `AndroidManifest.xml`.
     * It's not accesible on Android 11 or newer.
     *
     * @since 1.0.0
     */
    Directory["ExternalStorage"] = "EXTERNAL_STORAGE";
})(Directory || (Directory = {}));
var Encoding;
(function (Encoding) {
    /**
     * Eight-bit UCS Transformation Format
     *
     * @since 1.0.0
     */
    Encoding["UTF8"] = "utf8";
    /**
     * Seven-bit ASCII, a.k.a. ISO646-US, a.k.a. the Basic Latin block of the
     * Unicode character set
     * This encoding is only supported on Android.
     *
     * @since 1.0.0
     */
    Encoding["ASCII"] = "ascii";
    /**
     * Sixteen-bit UCS Transformation Format, byte order identified by an
     * optional byte-order mark
     * This encoding is only supported on Android.
     *
     * @since 1.0.0
     */
    Encoding["UTF16"] = "utf16";
})(Encoding || (Encoding = {}));
/**
 * @deprecated Use `Directory`.
 * @since 1.0.0
 */
const FilesystemDirectory = Directory;
/**
 * @deprecated Use `Encoding`.
 * @since 1.0.0
 */
const FilesystemEncoding = Encoding;


/***/ }),

/***/ 1414:
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Directory),
/* harmony export */   "Encoding": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Encoding),
/* harmony export */   "FilesystemDirectory": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemDirectory),
/* harmony export */   "FilesystemEncoding": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemEncoding),
/* harmony export */   "Filesystem": () => (/* binding */ Filesystem)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 2960);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 5800);

const Filesystem = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Filesystem', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_filesystem_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 5250)).then(m => new m.FilesystemWeb()),
});




/***/ }),

/***/ 1638:
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/storage/dist/esm/definitions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 872:
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/storage/dist/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Storage": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 2960);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 1638);

const Storage = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Storage', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_storage_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 9138)).then(m => new m.StorageWeb()),
});




/***/ }),

/***/ 3787:
/*!*******************************************!*\
  !*** ./src/app/services/photo.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoService": () => (/* binding */ PhotoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/camera */ 3201);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 2960);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/filesystem */ 1414);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/storage */ 872);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);







let PhotoService = class PhotoService {
    constructor(platform) {
        this.photos = [];
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.PHOTO_STORAGE = 'photos';
        this.convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        });
        this.platform = platform;
    }
    addNewToGallery() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // Take a photo
            const capturedPhoto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.Camera.getPhoto({
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraResultType.Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_0__.CameraSource.Camera,
                quality: 100,
            });
            // Save the picture and add it to photo collection
            const savedImageFile = yield this.savePicture(capturedPhoto);
            this.photos.unshift(savedImageFile);
            _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                key: this.PHOTO_STORAGE,
                value: JSON.stringify(this.photos),
            });
        });
    }
    loadSaved() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // Retrieve cached photo array data
            const photoList = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({ key: this.PHOTO_STORAGE });
            this.photos = JSON.parse(photoList.value) || [];
            // Easiest way to detect when running on the web:
            // “when the platform is NOT hybrid, do this”
            if (!this.platform.is('hybrid')) {
                // Display the photo by reading into base64 format
                for (const photo of this.photos) {
                    // Read each saved photo's data from the Filesystem
                    const readFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.readFile({
                        path: photo.filepath,
                        directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data,
                    });
                    // Web platform only: Load the photo as base64 data
                    photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
                }
            }
        });
    }
    readAsBase64(photo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // "hybrid" will detect Cordova or Capacitor
            if (this.platform.is('hybrid')) {
                // Read the file into base64 format
                const file = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.readFile({
                    path: photo.path,
                });
                return file.data;
            }
            else {
                // Fetch the photo, read as a blob, then convert to base64 format
                const response = yield fetch(photo.webPath);
                const blob = yield response.blob();
                return (yield this.convertBlobToBase64(blob));
            }
        });
    }
    // Save picture to file on device
    savePicture(photo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // Convert photo to base64 format, required by Filesystem API to save
            const base64Data = yield this.readAsBase64(photo);
            // Write the file to the data directory
            const fileName = new Date().getTime() + '.jpeg';
            const savedFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.writeFile({
                path: fileName,
                data: base64Data,
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data,
            });
            if (this.platform.is('hybrid')) {
                // Display the new image by rewriting the 'file://' path to HTTP
                // Details: https://ionicframework.com/docs/building/webview#file-protocol
                return {
                    filepath: savedFile.uri,
                    webviewPath: _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.convertFileSrc(savedFile.uri),
                };
            }
            else {
                // Use webPath to display the new image instead of base64 since it's
                // already loaded into memory
                return {
                    filepath: fileName,
                    webviewPath: photo.webPath,
                };
            }
        });
    }
};
PhotoService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform }
];
PhotoService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root',
    })
], PhotoService);



/***/ }),

/***/ 9561:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 4787);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 4250:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 4787);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 456);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 9561);








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 4787:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_simonbrigant_Documents_iut_2021_2022_photo_gallery_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab2.page.html */ 2040);
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss */ 282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/photo.service */ 3787);





let Tab2Page = class Tab2Page {
    constructor(photoService) {
        this.photoService = photoService;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.photoService.loadSaved();
        });
    }
    addPhotoToGallery() {
        this.photoService.addNewToGallery();
    }
};
Tab2Page.ctorParameters = () => [
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_2__.PhotoService }
];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab2',
        template: _Users_simonbrigant_Documents_iut_2021_2022_photo_gallery_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab2Page);



/***/ }),

/***/ 2040:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab2/tab2.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>Photo Gallery</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col\n        size=\"6\"\n        *ngFor=\"let photo of photoService.photos; index as position\"\n      >\n        <ion-img [src]=\"photo.webviewPath\"></ion-img>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n    <ion-fab-button (click)=\"addPhotoToGallery()\">\n      <ion-icon name=\"camera\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ 282:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map