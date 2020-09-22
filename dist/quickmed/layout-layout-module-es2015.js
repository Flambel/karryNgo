(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js ***!
  \*************************************************************************/
/*! exports provided: DEFAULT_LANGUAGE, FakeMissingTranslationHandler, MissingTranslationHandler, TranslateCompiler, TranslateDefaultParser, TranslateDirective, TranslateFakeCompiler, TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateParser, TranslatePipe, TranslateService, TranslateStore, USE_DEFAULT_LANG, USE_EXTEND, USE_STORE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LANGUAGE", function() { return DEFAULT_LANGUAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeMissingTranslationHandler", function() { return FakeMissingTranslationHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingTranslationHandler", function() { return MissingTranslationHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateCompiler", function() { return TranslateCompiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateDefaultParser", function() { return TranslateDefaultParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateDirective", function() { return TranslateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateFakeCompiler", function() { return TranslateFakeCompiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateFakeLoader", function() { return TranslateFakeLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateLoader", function() { return TranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateModule", function() { return TranslateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateParser", function() { return TranslateParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return TranslatePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateStore", function() { return TranslateStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_DEFAULT_LANG", function() { return USE_DEFAULT_LANG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_EXTEND", function() { return USE_EXTEND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_STORE", function() { return USE_STORE; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




/**
 * @fileoverview added by tsickle
 * Generated from: lib/translate.loader.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */

class TranslateLoader {
}
if (false) {}
/**
 * This loader is just a placeholder that does nothing, in case you don't need a loader at all
 */
class TranslateFakeLoader extends TranslateLoader {
    /**
     * @param {?} lang
     * @return {?}
     */
    getTranslation(lang) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({});
    }
}
TranslateFakeLoader.ɵfac = function TranslateFakeLoader_Factory(t) { return ɵTranslateFakeLoader_BaseFactory(t || TranslateFakeLoader); };
TranslateFakeLoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranslateFakeLoader, factory: TranslateFakeLoader.ɵfac });
const ɵTranslateFakeLoader_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TranslateFakeLoader);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslateFakeLoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/missing-translation-handler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MissingTranslationHandlerParams() { }
if (false) {}
/**
 * @abstract
 */
class MissingTranslationHandler {
}
if (false) {}
/**
 * This handler is just a placeholder that does nothing, in case you don't need a missing translation handler at all
 */
class FakeMissingTranslationHandler {
    /**
     * @param {?} params
     * @return {?}
     */
    handle(params) {
        return params.key;
    }
}
FakeMissingTranslationHandler.ɵfac = function FakeMissingTranslationHandler_Factory(t) { return new (t || FakeMissingTranslationHandler)(); };
FakeMissingTranslationHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FakeMissingTranslationHandler, factory: FakeMissingTranslationHandler.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FakeMissingTranslationHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/util.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable */
/**
 * Determines if two objects or two values are equivalent.
 *
 * Two objects or values are considered equivalent if at least one of the following is true:
 *
 * * Both objects or values pass `===` comparison.
 * * Both objects or values are of the same type and all of their properties are equal by
 *   comparing them with `equals`.
 *
 * @param {?} o1 Object or value to compare.
 * @param {?} o2 Object or value to compare.
 * @return {?} true if arguments are equal.
 */
function equals(o1, o2) {
    if (o1 === o2)
        return true;
    if (o1 === null || o2 === null)
        return false;
    if (o1 !== o1 && o2 !== o2)
        return true; // NaN === NaN
    // NaN === NaN
    /** @type {?} */
    let t1 = typeof o1;
    /** @type {?} */
    let t2 = typeof o2;
    /** @type {?} */
    let length;
    /** @type {?} */
    let key;
    /** @type {?} */
    let keySet;
    if (t1 == t2 && t1 == 'object') {
        if (Array.isArray(o1)) {
            if (!Array.isArray(o2))
                return false;
            if ((length = o1.length) == o2.length) {
                for (key = 0; key < length; key++) {
                    if (!equals(o1[key], o2[key]))
                        return false;
                }
                return true;
            }
        }
        else {
            if (Array.isArray(o2)) {
                return false;
            }
            keySet = Object.create(null);
            for (key in o1) {
                if (!equals(o1[key], o2[key])) {
                    return false;
                }
                keySet[key] = true;
            }
            for (key in o2) {
                if (!(key in keySet) && typeof o2[key] !== 'undefined') {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}
/* tslint:enable */
/**
 * @param {?} value
 * @return {?}
 */
function isDefined(value) {
    return typeof value !== 'undefined' && value !== null;
}
/**
 * @param {?} item
 * @return {?}
 */
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
/**
 * @param {?} target
 * @param {?} source
 * @return {?}
 */
function mergeDeep(target, source) {
    /** @type {?} */
    let output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, { [key]: source[key] });
                }
                else {
                    output[key] = mergeDeep(target[key], source[key]);
                }
            }
            else {
                Object.assign(output, { [key]: source[key] });
            }
        }));
    }
    return output;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/translate.parser.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class TranslateParser {
}
if (false) {}
class TranslateDefaultParser extends TranslateParser {
    constructor() {
        super(...arguments);
        this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
    }
    /**
     * @param {?} expr
     * @param {?=} params
     * @return {?}
     */
    interpolate(expr, params) {
        /** @type {?} */
        let result;
        if (typeof expr === 'string') {
            result = this.interpolateString(expr, params);
        }
        else if (typeof expr === 'function') {
            result = this.interpolateFunction(expr, params);
        }
        else {
            // this should not happen, but an unrelated TranslateService test depends on it
            result = (/** @type {?} */ (expr));
        }
        return result;
    }
    /**
     * @param {?} target
     * @param {?} key
     * @return {?}
     */
    getValue(target, key) {
        /** @type {?} */
        let keys = typeof key === 'string' ? key.split('.') : [key];
        key = '';
        do {
            key += keys.shift();
            if (isDefined(target) && isDefined(target[key]) && (typeof target[key] === 'object' || !keys.length)) {
                target = target[key];
                key = '';
            }
            else if (!keys.length) {
                target = undefined;
            }
            else {
                key += '.';
            }
        } while (keys.length);
        return target;
    }
    /**
     * @private
     * @param {?} fn
     * @param {?=} params
     * @return {?}
     */
    interpolateFunction(fn, params) {
        return fn(params);
    }
    /**
     * @private
     * @param {?} expr
     * @param {?=} params
     * @return {?}
     */
    interpolateString(expr, params) {
        if (!params) {
            return expr;
        }
        return expr.replace(this.templateMatcher, (/**
         * @param {?} substring
         * @param {?} b
         * @return {?}
         */
        (substring, b) => {
            /** @type {?} */
            let r = this.getValue(params, b);
            return isDefined(r) ? r : substring;
        }));
    }
}
TranslateDefaultParser.ɵfac = function TranslateDefaultParser_Factory(t) { return ɵTranslateDefaultParser_BaseFactory(t || TranslateDefaultParser); };
TranslateDefaultParser.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranslateDefaultParser, factory: TranslateDefaultParser.ɵfac });
const ɵTranslateDefaultParser_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TranslateDefaultParser);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslateDefaultParser, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/translate.compiler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class TranslateCompiler {
}
if (false) {}
/**
 * This compiler is just a placeholder that does nothing, in case you don't need a compiler at all
 */
class TranslateFakeCompiler extends TranslateCompiler {
    /**
     * @param {?} value
     * @param {?} lang
     * @return {?}
     */
    compile(value, lang) {
        return value;
    }
    /**
     * @param {?} translations
     * @param {?} lang
     * @return {?}
     */
    compileTranslations(translations, lang) {
        return translations;
    }
}
TranslateFakeCompiler.ɵfac = function TranslateFakeCompiler_Factory(t) { return ɵTranslateFakeCompiler_BaseFactory(t || TranslateFakeCompiler); };
TranslateFakeCompiler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranslateFakeCompiler, factory: TranslateFakeCompiler.ɵfac });
const ɵTranslateFakeCompiler_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TranslateFakeCompiler);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslateFakeCompiler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/translate.store.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslateStore {
    constructor() {
        /**
         * The lang currently used
         */
        this.currentLang = this.defaultLang;
        /**
         * a list of translations per lang
         */
        this.translations = {};
        /**
         * an array of langs
         */
        this.langs = [];
        /**
         * An EventEmitter to listen to translation change events
         * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
         *     // do something
         * });
         */
        this.onTranslationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An EventEmitter to listen to lang change events
         * onLangChange.subscribe((params: LangChangeEvent) => {
         *     // do something
         * });
         */
        this.onLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An EventEmitter to listen to default lang change events
         * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
         *     // do something
         * });
         */
        this.onDefaultLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/translate.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const USE_STORE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('USE_STORE');
/** @type {?} */
const USE_DEFAULT_LANG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('USE_DEFAULT_LANG');
/** @type {?} */
const DEFAULT_LANGUAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('DEFAULT_LANGUAGE');
/** @type {?} */
const USE_EXTEND = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('USE_EXTEND');
/**
 * @record
 */
function TranslationChangeEvent() { }
if (false) {}
/**
 * @record
 */
function LangChangeEvent() { }
if (false) {}
/**
 * @record
 */
function DefaultLangChangeEvent() { }
if (false) {}
class TranslateService {
    /**
     *
     * @param {?} store an instance of the store (that is supposed to be unique)
     * @param {?} currentLoader An instance of the loader currently used
     * @param {?} compiler An instance of the compiler currently used
     * @param {?} parser An instance of the parser currently used
     * @param {?} missingTranslationHandler A handler for missing translations.
     * @param {?=} useDefaultLang whether we should use default language translation when current language translation is missing.
     * @param {?=} isolate whether this service should use the store or not
     * @param {?=} extend To make a child module extend (and use) translations from parent modules.
     * @param {?=} defaultLanguage Set the default language using configuration
     */
    constructor(store, currentLoader, compiler, parser, missingTranslationHandler, useDefaultLang = true, isolate = false, extend = false, defaultLanguage) {
        this.store = store;
        this.currentLoader = currentLoader;
        this.compiler = compiler;
        this.parser = parser;
        this.missingTranslationHandler = missingTranslationHandler;
        this.useDefaultLang = useDefaultLang;
        this.isolate = isolate;
        this.extend = extend;
        this.pending = false;
        this._onTranslationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._onLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._onDefaultLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._langs = [];
        this._translations = {};
        this._translationRequests = {};
        /** set the default language from configuration */
        if (defaultLanguage) {
            this.setDefaultLang(defaultLanguage);
        }
    }
    /**
     * An EventEmitter to listen to translation change events
     * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
     *     // do something
     * });
     * @return {?}
     */
    get onTranslationChange() {
        return this.isolate ? this._onTranslationChange : this.store.onTranslationChange;
    }
    /**
     * An EventEmitter to listen to lang change events
     * onLangChange.subscribe((params: LangChangeEvent) => {
     *     // do something
     * });
     * @return {?}
     */
    get onLangChange() {
        return this.isolate ? this._onLangChange : this.store.onLangChange;
    }
    /**
     * An EventEmitter to listen to default lang change events
     * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
     *     // do something
     * });
     * @return {?}
     */
    get onDefaultLangChange() {
        return this.isolate ? this._onDefaultLangChange : this.store.onDefaultLangChange;
    }
    /**
     * The default lang to fallback when translations are missing on the current lang
     * @return {?}
     */
    get defaultLang() {
        return this.isolate ? this._defaultLang : this.store.defaultLang;
    }
    /**
     * @param {?} defaultLang
     * @return {?}
     */
    set defaultLang(defaultLang) {
        if (this.isolate) {
            this._defaultLang = defaultLang;
        }
        else {
            this.store.defaultLang = defaultLang;
        }
    }
    /**
     * The lang currently used
     * @return {?}
     */
    get currentLang() {
        return this.isolate ? this._currentLang : this.store.currentLang;
    }
    /**
     * @param {?} currentLang
     * @return {?}
     */
    set currentLang(currentLang) {
        if (this.isolate) {
            this._currentLang = currentLang;
        }
        else {
            this.store.currentLang = currentLang;
        }
    }
    /**
     * an array of langs
     * @return {?}
     */
    get langs() {
        return this.isolate ? this._langs : this.store.langs;
    }
    /**
     * @param {?} langs
     * @return {?}
     */
    set langs(langs) {
        if (this.isolate) {
            this._langs = langs;
        }
        else {
            this.store.langs = langs;
        }
    }
    /**
     * a list of translations per lang
     * @return {?}
     */
    get translations() {
        return this.isolate ? this._translations : this.store.translations;
    }
    /**
     * @param {?} translations
     * @return {?}
     */
    set translations(translations) {
        if (this.isolate) {
            this._translations = translations;
        }
        else {
            this.store.translations = translations;
        }
    }
    /**
     * Sets the default language to use as a fallback
     * @param {?} lang
     * @return {?}
     */
    setDefaultLang(lang) {
        if (lang === this.defaultLang) {
            return;
        }
        /** @type {?} */
        let pending = this.retrieveTranslations(lang);
        if (typeof pending !== "undefined") {
            // on init set the defaultLang immediately
            if (this.defaultLang == null) {
                this.defaultLang = lang;
            }
            pending.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
                .subscribe((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                this.changeDefaultLang(lang);
            }));
        }
        else { // we already have this language
            this.changeDefaultLang(lang);
        }
    }
    /**
     * Gets the default language used
     * @return {?}
     */
    getDefaultLang() {
        return this.defaultLang;
    }
    /**
     * Changes the lang currently used
     * @param {?} lang
     * @return {?}
     */
    use(lang) {
        // don't change the language if the language given is already selected
        if (lang === this.currentLang) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.translations[lang]);
        }
        /** @type {?} */
        let pending = this.retrieveTranslations(lang);
        if (typeof pending !== "undefined") {
            // on init set the currentLang immediately
            if (!this.currentLang) {
                this.currentLang = lang;
            }
            pending.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
                .subscribe((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                this.changeLang(lang);
            }));
            return pending;
        }
        else { // we have this language, return an Observable
            this.changeLang(lang);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.translations[lang]);
        }
    }
    /**
     * Retrieves the given translations
     * @private
     * @param {?} lang
     * @return {?}
     */
    retrieveTranslations(lang) {
        /** @type {?} */
        let pending;
        // if this language is unavailable or extend is true, ask for it
        if (typeof this.translations[lang] === "undefined" || this.extend) {
            this._translationRequests[lang] = this._translationRequests[lang] || this.getTranslation(lang);
            pending = this._translationRequests[lang];
        }
        return pending;
    }
    /**
     * Gets an object of translations for a given language with the current loader
     * and passes it through the compiler
     * @param {?} lang
     * @return {?}
     */
    getTranslation(lang) {
        this.pending = true;
        /** @type {?} */
        const loadingTranslations = this.currentLoader.getTranslation(lang).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
        this.loadingTranslations = loadingTranslations.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} res
         * @return {?}
         */
        (res) => this.compiler.compileTranslations(res, lang))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
        this.loadingTranslations
            .subscribe({
            next: (/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                this.translations[lang] = this.extend && this.translations[lang] ? Object.assign(Object.assign({}, res), this.translations[lang]) : res;
                this.updateLangs();
                this.pending = false;
            }),
            error: (/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                this.pending = false;
            })
        });
        return loadingTranslations;
    }
    /**
     * Manually sets an object of translations for a given language
     * after passing it through the compiler
     * @param {?} lang
     * @param {?} translations
     * @param {?=} shouldMerge
     * @return {?}
     */
    setTranslation(lang, translations, shouldMerge = false) {
        translations = this.compiler.compileTranslations(translations, lang);
        if ((shouldMerge || this.extend) && this.translations[lang]) {
            this.translations[lang] = mergeDeep(this.translations[lang], translations);
        }
        else {
            this.translations[lang] = translations;
        }
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    }
    /**
     * Returns an array of currently available langs
     * @return {?}
     */
    getLangs() {
        return this.langs;
    }
    /**
     * Add available langs
     * @param {?} langs
     * @return {?}
     */
    addLangs(langs) {
        langs.forEach((/**
         * @param {?} lang
         * @return {?}
         */
        (lang) => {
            if (this.langs.indexOf(lang) === -1) {
                this.langs.push(lang);
            }
        }));
    }
    /**
     * Update the list of available langs
     * @private
     * @return {?}
     */
    updateLangs() {
        this.addLangs(Object.keys(this.translations));
    }
    /**
     * Returns the parsed result of the translations
     * @param {?} translations
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?}
     */
    getParsedResult(translations, key, interpolateParams) {
        /** @type {?} */
        let res;
        if (key instanceof Array) {
            /** @type {?} */
            let result = {};
            /** @type {?} */
            let observables = false;
            for (let k of key) {
                result[k] = this.getParsedResult(translations, k, interpolateParams);
                if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(result[k])) {
                    observables = true;
                }
            }
            if (observables) {
                /** @type {?} */
                const sources = key.map((/**
                 * @param {?} k
                 * @return {?}
                 */
                k => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(result[k]) ? result[k] : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])((/** @type {?} */ (result[k])))));
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(sources).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
                 * @param {?} arr
                 * @return {?}
                 */
                (arr) => {
                    /** @type {?} */
                    let obj = {};
                    arr.forEach((/**
                     * @param {?} value
                     * @param {?} index
                     * @return {?}
                     */
                    (value, index) => {
                        obj[key[index]] = value;
                    }));
                    return obj;
                })));
            }
            return result;
        }
        if (translations) {
            res = this.parser.interpolate(this.parser.getValue(translations, key), interpolateParams);
        }
        if (typeof res === "undefined" && this.defaultLang != null && this.defaultLang !== this.currentLang && this.useDefaultLang) {
            res = this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang], key), interpolateParams);
        }
        if (typeof res === "undefined") {
            /** @type {?} */
            let params = { key, translateService: this };
            if (typeof interpolateParams !== 'undefined') {
                params.interpolateParams = interpolateParams;
            }
            res = this.missingTranslationHandler.handle(params);
        }
        return typeof res !== "undefined" ? res : key;
    }
    /**
     * Gets the translated value of a key (or an array of keys)
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?} the translated key, or an object of translated keys
     */
    get(key, interpolateParams) {
        if (!isDefined(key) || !key.length) {
            throw new Error(`Parameter "key" required`);
        }
        // check if we are loading a new translation to use
        if (this.pending) {
            return this.loadingTranslations.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                res = this.getParsedResult(res, key, interpolateParams);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(res) ? res : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(res);
            })));
        }
        else {
            /** @type {?} */
            let res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(res) ? res : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(res);
        }
    }
    /**
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the translation changes.
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?} A stream of the translated key, or an object of translated keys
     */
    getStreamOnTranslationChange(key, interpolateParams) {
        if (!isDefined(key) || !key.length) {
            throw new Error(`Parameter "key" required`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])((/**
         * @return {?}
         */
        () => this.get(key, interpolateParams))), this.onTranslationChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const res = this.getParsedResult(event.translations, key, interpolateParams);
            if (typeof res.subscribe === 'function') {
                return res;
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(res);
            }
        }))));
    }
    /**
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the language changes.
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?} A stream of the translated key, or an object of translated keys
     */
    stream(key, interpolateParams) {
        if (!isDefined(key) || !key.length) {
            throw new Error(`Parameter "key" required`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["defer"])((/**
         * @return {?}
         */
        () => this.get(key, interpolateParams))), this.onLangChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const res = this.getParsedResult(event.translations, key, interpolateParams);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(res) ? res : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(res);
        }))));
    }
    /**
     * Returns a translation instantly from the internal state of loaded translation.
     * All rules regarding the current language, the preferred language of even fallback languages will be used except any promise handling.
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?}
     */
    instant(key, interpolateParams) {
        if (!isDefined(key) || !key.length) {
            throw new Error(`Parameter "key" required`);
        }
        /** @type {?} */
        let res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
        if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(res)) {
            if (key instanceof Array) {
                /** @type {?} */
                let obj = {};
                key.forEach((/**
                 * @param {?} value
                 * @param {?} index
                 * @return {?}
                 */
                (value, index) => {
                    obj[key[index]] = key[index];
                }));
                return obj;
            }
            return key;
        }
        else {
            return res;
        }
    }
    /**
     * Sets the translated value of a key, after compiling it
     * @param {?} key
     * @param {?} value
     * @param {?=} lang
     * @return {?}
     */
    set(key, value, lang = this.currentLang) {
        this.translations[lang][key] = this.compiler.compile(value, lang);
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    }
    /**
     * Changes the current lang
     * @private
     * @param {?} lang
     * @return {?}
     */
    changeLang(lang) {
        this.currentLang = lang;
        this.onLangChange.emit({ lang: lang, translations: this.translations[lang] });
        // if there is no default lang, use the one that we just set
        if (this.defaultLang == null) {
            this.changeDefaultLang(lang);
        }
    }
    /**
     * Changes the default lang
     * @private
     * @param {?} lang
     * @return {?}
     */
    changeDefaultLang(lang) {
        this.defaultLang = lang;
        this.onDefaultLangChange.emit({ lang: lang, translations: this.translations[lang] });
    }
    /**
     * Allows to reload the lang file from the file
     * @param {?} lang
     * @return {?}
     */
    reloadLang(lang) {
        this.resetLang(lang);
        return this.getTranslation(lang);
    }
    /**
     * Deletes inner translation
     * @param {?} lang
     * @return {?}
     */
    resetLang(lang) {
        this._translationRequests[lang] = undefined;
        this.translations[lang] = undefined;
    }
    /**
     * Returns the language code name from the browser, e.g. "de"
     * @return {?}
     */
    getBrowserLang() {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        /** @type {?} */
        let browserLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserLang = browserLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        if (typeof browserLang === 'undefined') {
            return undefined;
        }
        if (browserLang.indexOf('-') !== -1) {
            browserLang = browserLang.split('-')[0];
        }
        if (browserLang.indexOf('_') !== -1) {
            browserLang = browserLang.split('_')[0];
        }
        return browserLang;
    }
    /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     * @return {?}
     */
    getBrowserCultureLang() {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        /** @type {?} */
        let browserCultureLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserCultureLang = browserCultureLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        return browserCultureLang;
    }
}
TranslateService.ɵfac = function TranslateService_Factory(t) { return new (t || TranslateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](TranslateStore), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](TranslateLoader), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](TranslateCompiler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](TranslateParser), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MissingTranslationHandler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](USE_DEFAULT_LANG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](USE_STORE), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](USE_EXTEND), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DEFAULT_LANGUAGE)); };
TranslateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranslateService, factory: TranslateService.ɵfac });
/** @nocollapse */
TranslateService.ctorParameters = () => [
    { type: TranslateStore },
    { type: TranslateLoader },
    { type: TranslateCompiler },
    { type: TranslateParser },
    { type: MissingTranslationHandler },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [USE_DEFAULT_LANG,] }] },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [USE_STORE,] }] },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [USE_EXTEND,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [DEFAULT_LANGUAGE,] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: TranslateStore }, { type: TranslateLoader }, { type: TranslateCompiler }, { type: TranslateParser }, { type: MissingTranslationHandler }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [USE_DEFAULT_LANG]
            }] }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [USE_STORE]
            }] }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [USE_EXTEND]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [DEFAULT_LANGUAGE]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/translate.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslateDirective {
    /**
     * @param {?} translateService
     * @param {?} element
     * @param {?} _ref
     */
    constructor(translateService, element, _ref) {
        this.translateService = translateService;
        this.element = element;
        this._ref = _ref;
        // subscribe to onTranslationChange event, in case the translations of the current lang change
        if (!this.onTranslationChangeSub) {
            this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                if (event.lang === this.translateService.currentLang) {
                    this.checkNodes(true, event.translations);
                }
            }));
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChangeSub) {
            this.onLangChangeSub = this.translateService.onLangChange.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                this.checkNodes(true, event.translations);
            }));
        }
        // subscribe to onDefaultLangChange event, in case the default language changes
        if (!this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub = this.translateService.onDefaultLangChange.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                this.checkNodes(true);
            }));
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    set translate(key) {
        if (key) {
            this.key = key;
            this.checkNodes();
        }
    }
    /**
     * @param {?} params
     * @return {?}
     */
    set translateParams(params) {
        if (!equals(this.currentParams, params)) {
            this.currentParams = params;
            this.checkNodes(true);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this.checkNodes();
    }
    /**
     * @param {?=} forceUpdate
     * @param {?=} translations
     * @return {?}
     */
    checkNodes(forceUpdate = false, translations) {
        /** @type {?} */
        let nodes = this.element.nativeElement.childNodes;
        // if the element is empty
        if (!nodes.length) {
            // we add the key as content
            this.setContent(this.element.nativeElement, this.key);
            nodes = this.element.nativeElement.childNodes;
        }
        for (let i = 0; i < nodes.length; ++i) {
            /** @type {?} */
            let node = nodes[i];
            if (node.nodeType === 3) { // node type 3 is a text node
                // node type 3 is a text node
                /** @type {?} */
                let key;
                if (forceUpdate) {
                    node.lastKey = null;
                }
                if (isDefined(node.lookupKey)) {
                    key = node.lookupKey;
                }
                else if (this.key) {
                    key = this.key;
                }
                else {
                    /** @type {?} */
                    let content = this.getContent(node);
                    /** @type {?} */
                    let trimmedContent = content.trim();
                    if (trimmedContent.length) {
                        node.lookupKey = trimmedContent;
                        // we want to use the content as a key, not the translation value
                        if (content !== node.currentValue) {
                            key = trimmedContent;
                            // the content was changed from the user, we'll use it as a reference if needed
                            node.originalContent = content || node.originalContent;
                        }
                        else if (node.originalContent) { // the content seems ok, but the lang has changed
                            // the current content is the translation, not the key, use the last real content as key
                            key = node.originalContent.trim();
                        }
                        else if (content !== node.currentValue) {
                            // we want to use the content as a key, not the translation value
                            key = trimmedContent;
                            // the content was changed from the user, we'll use it as a reference if needed
                            node.originalContent = content || node.originalContent;
                        }
                    }
                }
                this.updateValue(key, node, translations);
            }
        }
    }
    /**
     * @param {?} key
     * @param {?} node
     * @param {?} translations
     * @return {?}
     */
    updateValue(key, node, translations) {
        if (key) {
            if (node.lastKey === key && this.lastParams === this.currentParams) {
                return;
            }
            this.lastParams = this.currentParams;
            /** @type {?} */
            let onTranslation = (/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                if (res !== key) {
                    node.lastKey = key;
                }
                if (!node.originalContent) {
                    node.originalContent = this.getContent(node);
                }
                node.currentValue = isDefined(res) ? res : (node.originalContent || key);
                // we replace in the original content to preserve spaces that we might have trimmed
                this.setContent(node, this.key ? node.currentValue : node.originalContent.replace(key, node.currentValue));
                this._ref.markForCheck();
            });
            if (isDefined(translations)) {
                /** @type {?} */
                let res = this.translateService.getParsedResult(translations, key, this.currentParams);
                if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(res)) {
                    res.subscribe(onTranslation);
                }
                else {
                    onTranslation(res);
                }
            }
            else {
                this.translateService.get(key, this.currentParams).subscribe(onTranslation);
            }
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    getContent(node) {
        return isDefined(node.textContent) ? node.textContent : node.data;
    }
    /**
     * @param {?} node
     * @param {?} content
     * @return {?}
     */
    setContent(node, content) {
        if (isDefined(node.textContent)) {
            node.textContent = content;
        }
        else {
            node.data = content;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.onLangChangeSub) {
            this.onLangChangeSub.unsubscribe();
        }
        if (this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub.unsubscribe();
        }
        if (this.onTranslationChangeSub) {
            this.onTranslationChangeSub.unsubscribe();
        }
    }
}
TranslateDirective.ɵfac = function TranslateDirective_Factory(t) { return new (t || TranslateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
TranslateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TranslateDirective, selectors: [["", "translate", ""], ["", "ngx-translate", ""]], inputs: { translate: "translate", translateParams: "translateParams" } });
/** @nocollapse */
TranslateDirective.ctorParameters = () => [
    { type: TranslateService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
TranslateDirective.propDecorators = {
    translate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    translateParams: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[translate],[ngx-translate]'
            }]
    }], function () { return [{ type: TranslateService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { translate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], translateParams: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/translate.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslatePipe {
    /**
     * @param {?} translate
     * @param {?} _ref
     */
    constructor(translate, _ref) {
        this.translate = translate;
        this._ref = _ref;
        this.value = '';
    }
    /**
     * @param {?} key
     * @param {?=} interpolateParams
     * @param {?=} translations
     * @return {?}
     */
    updateValue(key, interpolateParams, translations) {
        /** @type {?} */
        let onTranslation = (/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            this.value = res !== undefined ? res : key;
            this.lastKey = key;
            this._ref.markForCheck();
        });
        if (translations) {
            /** @type {?} */
            let res = this.translate.getParsedResult(translations, key, interpolateParams);
            if (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(res.subscribe)) {
                res.subscribe(onTranslation);
            }
            else {
                onTranslation(res);
            }
        }
        this.translate.get(key, interpolateParams).subscribe(onTranslation);
    }
    /**
     * @param {?} query
     * @param {...?} args
     * @return {?}
     */
    transform(query, ...args) {
        if (!query || !query.length) {
            return query;
        }
        // if we ask another time for the same key, return the last value
        if (equals(query, this.lastKey) && equals(args, this.lastParams)) {
            return this.value;
        }
        /** @type {?} */
        let interpolateParams;
        if (isDefined(args[0]) && args.length) {
            if (typeof args[0] === 'string' && args[0].length) {
                // we accept objects written in the template such as {n:1}, {'n':1}, {n:'v'}
                // which is why we might need to change it to real JSON objects such as {"n":1} or {"n":"v"}
                /** @type {?} */
                let validArgs = args[0]
                    .replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g, '"$2":')
                    .replace(/:(\s)?(\')(.*?)(\')/g, ':"$3"');
                try {
                    interpolateParams = JSON.parse(validArgs);
                }
                catch (e) {
                    throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${args[0]}`);
                }
            }
            else if (typeof args[0] === 'object' && !Array.isArray(args[0])) {
                interpolateParams = args[0];
            }
        }
        // store the query, in case it changes
        this.lastKey = query;
        // store the params, in case they change
        this.lastParams = args;
        // set the value
        this.updateValue(query, interpolateParams);
        // if there is a subscription to onLangChange, clean it
        this._dispose();
        // subscribe to onTranslationChange event, in case the translations change
        if (!this.onTranslationChange) {
            this.onTranslationChange = this.translate.onTranslationChange.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                if (this.lastKey && event.lang === this.translate.currentLang) {
                    this.lastKey = null;
                    this.updateValue(query, interpolateParams, event.translations);
                }
            }));
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChange) {
            this.onLangChange = this.translate.onLangChange.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                if (this.lastKey) {
                    this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                    this.updateValue(query, interpolateParams, event.translations);
                }
            }));
        }
        // subscribe to onDefaultLangChange event, in case the default language changes
        if (!this.onDefaultLangChange) {
            this.onDefaultLangChange = this.translate.onDefaultLangChange.subscribe((/**
             * @return {?}
             */
            () => {
                if (this.lastKey) {
                    this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                    this.updateValue(query, interpolateParams);
                }
            }));
        }
        return this.value;
    }
    /**
     * Clean any existing subscription to change events
     * @private
     * @return {?}
     */
    _dispose() {
        if (typeof this.onTranslationChange !== 'undefined') {
            this.onTranslationChange.unsubscribe();
            this.onTranslationChange = undefined;
        }
        if (typeof this.onLangChange !== 'undefined') {
            this.onLangChange.unsubscribe();
            this.onLangChange = undefined;
        }
        if (typeof this.onDefaultLangChange !== 'undefined') {
            this.onDefaultLangChange.unsubscribe();
            this.onDefaultLangChange = undefined;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._dispose();
    }
}
TranslatePipe.ɵfac = function TranslatePipe_Factory(t) { return new (t || TranslatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectPipeChangeDetectorRef"]()); };
TranslatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "translate", type: TranslatePipe, pure: false });
TranslatePipe.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranslatePipe, factory: TranslatePipe.ɵfac });
/** @nocollapse */
TranslatePipe.ctorParameters = () => [
    { type: TranslateService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'translate',
                pure: false // required to update the value when the promise is resolved
            }]
    }], function () { return [{ type: TranslateService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function TranslateModuleConfig() { }
if (false) {}
class TranslateModule {
    /**
     * Use this method in your root module to provide the TranslateService
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = {}) {
        return {
            ngModule: TranslateModule,
            providers: [
                config.loader || { provide: TranslateLoader, useClass: TranslateFakeLoader },
                config.compiler || { provide: TranslateCompiler, useClass: TranslateFakeCompiler },
                config.parser || { provide: TranslateParser, useClass: TranslateDefaultParser },
                config.missingTranslationHandler || { provide: MissingTranslationHandler, useClass: FakeMissingTranslationHandler },
                TranslateStore,
                { provide: USE_STORE, useValue: config.isolate },
                { provide: USE_DEFAULT_LANG, useValue: config.useDefaultLang },
                { provide: USE_EXTEND, useValue: config.extend },
                { provide: DEFAULT_LANGUAGE, useValue: config.defaultLanguage },
                TranslateService
            ]
        };
    }
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     * @param {?=} config
     * @return {?}
     */
    static forChild(config = {}) {
        return {
            ngModule: TranslateModule,
            providers: [
                config.loader || { provide: TranslateLoader, useClass: TranslateFakeLoader },
                config.compiler || { provide: TranslateCompiler, useClass: TranslateFakeCompiler },
                config.parser || { provide: TranslateParser, useClass: TranslateDefaultParser },
                config.missingTranslationHandler || { provide: MissingTranslationHandler, useClass: FakeMissingTranslationHandler },
                { provide: USE_STORE, useValue: config.isolate },
                { provide: USE_DEFAULT_LANG, useValue: config.useDefaultLang },
                { provide: USE_EXTEND, useValue: config.extend },
                { provide: DEFAULT_LANGUAGE, useValue: config.defaultLanguage },
                TranslateService
            ]
        };
    }
}
TranslateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TranslateModule });
TranslateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TranslateModule_Factory(t) { return new (t || TranslateModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TranslateModule, { declarations: [TranslatePipe, TranslateDirective], exports: [TranslatePipe, TranslateDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    TranslatePipe,
                    TranslateDirective
                ],
                exports: [
                    TranslatePipe,
                    TranslateDirective
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-translate-core.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-translate-core.js.map

/***/ }),

/***/ "./src/app/layout/about/about.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/about/about.component.ts ***!
  \*************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




function AboutComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-page-header", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_div_2_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.add(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Service Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Modified On ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", "Services")("icon", "fa-settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Services : ", ctx_r0.services_data == null ? null : ctx_r0.services_data.length, "\n");
} }
class AboutComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 3, vars: 2, consts: [[4, "ngIf"], [3, "heading", "icon"], [1, "row"], [1, "col-lg-12"], [1, "card", "mb-3"], [1, "card-header"], [1, "btn", "btn-success", 2, "text-align", "right", 3, "click"], [1, "card-body", "table-responsive"], [1, "table"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AboutComponent_div_2_Template, 27, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routerTransition", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.route.children.length === 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");







const _c0 = function () { return ["/"]; };
class HeaderComponent {
    constructor(translate, router, authenticationService) {
        this.translate = translate;
        this.router = router;
        this.authenticationService = authenticationService;
        this.pushRightClass = 'push-right';
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
        this.router.events.subscribe(val => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                this.isToggled()) {
                this.toggleSidebar();
            }
        });
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnInit() { }
    isToggled() {
        const dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }
    toggleSidebar() {
        const dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }
    rltAndLtr() {
        const dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    }
    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
    logoutApp() {
        console.log("Logout");
        this.authenticationService.logout();
    }
    changeLang(language) {
        this.translate.use(language);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 130, vars: 57, consts: [[1, "navbar", "navbar-expand-lg", "fixed-top"], [1, "navbar-brand", 3, "routerLink"], ["type", "button", 1, "navbar-toggler", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-bars", "text-muted"], [1, "collapse", "navbar-collapse"], [1, "form-inline", "my-2", "my-lg-0"], ["type", "text", 1, "form-control", "mr-sm-2", 3, "placeholder"], [1, "navbar-nav"], [1, "nav-item"], ["href", "javascript:void(0)", 1, "nav-link", "mt-1", 2, "padding", "0.375rem 1rem !important", "border-color", "#999", 3, "click"], ["ngbDropdown", "", 1, "nav-item", "dropdown"], ["href", "javascript:void(0)", "ngbDropdownToggle", "", 1, "nav-link"], [1, "fa", "fa-envelope"], [1, "caret"], [1, "sr-only"], ["ngbDropdownMenu", "", 1, "dropdown-menu-right", "messages"], [1, "media"], ["src", "http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg", "alt", "Generic placeholder image", 1, "d-flex", "align-self-center", "mr-3"], [1, "media-body"], [1, "mt-0", "mb-1"], [1, "small", "text-muted"], [1, "fa", "fa-clock-o"], [1, "last"], [1, "fa", "fa-bell"], ["ngbDropdownMenu", "", 1, "dropdown-menu-right"], ["href", "javascript:void(0)", 1, "dropdown-item"], [1, "badge", "badge-info"], [1, "dropdown-divider"], [1, "fa", "fa-language"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-user"], [1, "fa", "fa-fw", "fa-user"], [1, "fa", "fa-fw", "fa-envelope"], [1, "fa", "fa-fw", "fa-gear"], [1, "fa", "fa-fw", "fa-power-off"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SB Admin Angular5 BS4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener() { return ctx.toggleSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_11_listener() { return ctx.rltAndLtr(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " RTL/LTR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "b", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Yesterday at 4:32 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Lorem ipsum dolor sit amet, consectetur...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Yesterday at 4:32 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Lorem ipsum dolor sit amet, consectetur...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Yesterday at 4:32 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Lorem ipsum dolor sit amet, consectetur...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "b", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " 13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " 45");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](81, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "b", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_84_listener() { return ctx.changeLang("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_87_listener() { return ctx.changeLang("fr"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](89, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_90_listener() { return ctx.changeLang("ur"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](92, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_93_listener() { return ctx.changeLang("es"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](95, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_96_listener() { return ctx.changeLang("it"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](98, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_99_listener() { return ctx.changeLang("fa"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](101, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_102_listener() { return ctx.changeLang("de"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_105_listener() { return ctx.changeLang("zh-CHS"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](107, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "b", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](117, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](121, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](125, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_126_listener() { return ctx.logoutApp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](129, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](56, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 20, "Search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 22, "Pending Task"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](65, 24, "In queue"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](70, 26, "Mail"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 28, "View All"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](81, 30, "Language"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](86, 32, "English"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](89, 34, "French"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](92, 36, "Urdu"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](95, 38, "Spanish"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](98, 40, "Italian"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](101, 42, "Farsi"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](104, 44, "German"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](107, 46, "Simplified Chinese"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentUser.user.username, "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](117, 48, "Profile"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](121, 50, "Inbox"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](125, 52, "Settings"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](129, 54, "Log Out"), " ");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownMenu"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  background-color: #222;\n}\n[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: #fff;\n}\n[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #999;\n}\n[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n[_nghost-%COMP%]   .messages[_ngcontent-%COMP%] {\n  width: 300px;\n}\n[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n  padding: 5px 10px;\n}\n[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n}\n[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  margin: 0;\n}\n[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .last[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLHNCQUhrQjtBQUUxQjtBQUVRO0VBQ0ksV0FBQTtBQUFaO0FBRVE7RUFDSSxXQUFBO0FBQVo7QUFDWTtFQUNJLFdBQUE7QUFDaEI7QUFHSTtFQUNJLFlBQUE7QUFEUjtBQUVRO0VBQ0ksNkJBQUE7RUFDQSxpQkFBQTtBQUFaO0FBQ1k7RUFDSSxtQkFBQTtBQUNoQjtBQUdZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBRGhCO0FBR1k7RUFDSSxTQUFBO0FBRGhCO0FBR1k7RUFDSSxlQUFBO0VBQ0EsU0FBQTtBQURoQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdG9wbmF2LWJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbjpob3N0IHtcclxuICAgIC5uYXZiYXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICAubmF2YmFyLWJyYW5kIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXYtaXRlbSA+IGEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tZXNzYWdlcyB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIC5tZWRpYSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lZGlhLWJvZHkge1xyXG4gICAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxhc3Qge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






const _c0 = function (a0, a1) { return { sidebarPushRight: a0, collapsed: a1 }; };
const _c1 = function () { return ["router-link-active"]; };
const _c2 = function () { return ["/portal/languages"]; };
const _c3 = function () { return ["/portal/roles"]; };
const _c4 = function () { return ["/portal/list-users"]; };
const _c5 = function () { return ["/portal/chat"]; };
const _c6 = function () { return ["/portal/viewchat"]; };
const _c7 = function () { return ["/portal/settings"]; };
const _c8 = function () { return ["/portal/categories-services"]; };
const _c9 = function () { return ["/portal/subcategories"]; };
const _c10 = function () { return ["/portal/services"]; };
const _c11 = function () { return ["/portal/about"]; };
const _c12 = function () { return ["/portal/blank-page"]; };
const _c13 = function (a0) { return { collapsed: a0 }; };
class SidebarComponent {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
        this.collapsedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');
        this.router.events.subscribe(val => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    }
    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }
    isToggled() {
        const dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }
    toggleSidebar() {
        const dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }
    rltAndLtr() {
        const dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    }
    changeLang(language) {
        this.translate.use(language);
    }
    onLoggedout() {
        localStorage.removeItem('isLoggedin');
        localStorage.removeItem('currentUser');
        this.router.navigate(["/logon"]);
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], outputs: { collapsedEvent: "collapsedEvent" }, decls: 183, vars: 146, consts: [[1, "sidebar", 3, "ngClass"], [1, "list-group"], ["routerLink", "/portal/dashboard", 1, "list-group-item", 3, "routerLinkActive"], [1, "fa", "fa-fw", "fa-dashboard"], [1, "list-group-item", 3, "routerLink", "routerLinkActive"], [1, "fa", "fa-fw", "fa-users"], [1, "fa", "fa-envelope"], [1, "fa", "fa-fw", "fa-th-list"], [1, "nested-menu"], [1, "list-group-item", 3, "click"], [1, "fa", "fa-plus"], [1, "nested"], [1, "submenu"], ["href", "javascript:void(0)"], [1, "fa", "fa-monument"], [1, "fa", "fa-file-o"], [1, "header-fields"], [1, "fa", "fa-arrows-h"], [1, "fa", "fa-language"], [1, "caret"], ["href", "javascript:void(0)", 3, "click"], [1, "fa", "fa-user"], [1, "fa", "fa-fw", "fa-user"], [1, "fa", "fa-fw", "fa-envelope"], [1, "fa", "fa-fw", "fa-gear"], [3, "click"], [1, "fa", "fa-fw", "fa-power-off"], [1, "toggle-button", 3, "ngClass", "click"], [1, "fa", "fa-fw", "fa-angle-double-left"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_69_listener() { return ctx.addExpandClass("pages"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](97, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](103, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_105_listener() { return ctx.rltAndLtr(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\u00A0 RTL/LTR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_110_listener() { return ctx.addExpandClass("languages"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](114, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "b", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_119_listener() { return ctx.changeLang("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](121, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_123_listener() { return ctx.changeLang("fr"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](125, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_127_listener() { return ctx.changeLang("ur"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](129, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_131_listener() { return ctx.changeLang("es"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](133, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_135_listener() { return ctx.changeLang("it"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](137, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_139_listener() { return ctx.changeLang("fa"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](141, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_143_listener() { return ctx.changeLang("de"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](145, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_147_listener() { return ctx.addExpandClass("profile"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "\u00A0 John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](158, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](164, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](170, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_172_listener() { return ctx.onLoggedout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](176, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_177_listener() { return ctx.toggleCollapsed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](182, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](118, _c0, ctx.isActive, ctx.collapsed));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](121, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 60, "Dashboard"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](122, _c2))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](123, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 62, "Languages Management"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](124, _c3))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](125, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 64, "Roles Management"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](126, _c4))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](127, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 66, "Users List"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](128, _c5))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](129, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 68, "Messages"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](130, _c6))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](131, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 70, "Live chat"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](132, _c7))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](133, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 72, "Settings"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](134, _c8))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](135, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 74, "Categories"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](136, _c9))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](137, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 76, "Sous Categories"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](138, _c10))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](139, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 78, "Services"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](140, _c11))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](141, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](67, 80, "About"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](74, 82, "Menu"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("expand", ctx.showMenu === "pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](83, 84, "Submenu"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](90, 86, "Submenu"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](97, 88, "Submenu"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](142, _c12))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](143, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](103, 90, "Blank Page"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](114, 92, "Language"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("expand", ctx.showMenu === "languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](121, 94, "English"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](125, 96, "French"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](129, 98, "Urdu"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](133, 100, "Spanish"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](137, 102, "Italian"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](141, 104, "Farsi"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](145, 106, "German"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("expand", ctx.showMenu === "profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](158, 108, "Profile"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](164, 110, "Inbox"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](170, 112, "Settings"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](176, 114, "Log Out"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](144, _c13, ctx.collapsed));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](182, 116, "Collapse Sidebar"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: [".sidebar[_ngcontent-%COMP%] {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 56px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  margin-bottom: 48px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  white-space: nowrap;\n  transition: all 0.2s ease-in-out;\n}\n.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%] {\n  background: #222;\n  border: 0;\n  border-radius: 0;\n  color: #999;\n  text-decoration: none;\n}\n.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #151515;\n  color: #fff;\n}\n.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.router-link-active[_ngcontent-%COMP%] {\n  background: #151515;\n  color: #fff;\n}\n.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%]    > .list-group-item[_ngcontent-%COMP%]:first-child {\n  border-top: 1px solid rgba(255, 255, 255, 0.2);\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:focus {\n  border-radius: none;\n  border: none;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  height: 50px;\n  margin-bottom: 0;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #999;\n  text-decoration: none;\n  font-weight: 400;\n  background: #222;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.5rem;\n  padding-top: 1rem;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  color: #fff;\n  outline: none;\n  outline-offset: -2px;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]:hover {\n  background: #151515;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%] {\n  border-radious: 0;\n  border: none;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  border-radius: 0;\n  background-color: #222;\n  border: 0 solid transparent;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #999;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover {\n  background: #151515;\n}\n.nested-menu[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.nested-menu[_ngcontent-%COMP%]   .nested[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.nested-menu[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%] {\n  display: none;\n  height: 0;\n}\n.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%] {\n  display: block;\n  list-style-type: none;\n  height: auto;\n}\n.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 10px;\n  display: block;\n}\n@media screen and (max-width: 992px) {\n  .sidebar[_ngcontent-%COMP%] {\n    top: 54px;\n    left: 0px;\n  }\n}\n@media print {\n  .sidebar[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .header-fields[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px white;\n  border-radius: 3px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px white;\n}\n.toggle-button[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 236px;\n  cursor: pointer;\n  padding: 12px;\n  bottom: 0;\n  color: #999;\n  background: #212529;\n  border-top: 1px solid #999;\n  transition: all 0.2s ease-in-out;\n}\n.toggle-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 23px;\n}\n.toggle-button[_ngcontent-%COMP%]:hover {\n  background: #151515;\n  color: #fff;\n}\n.collapsed[_ngcontent-%COMP%] {\n  width: 50px;\n}\n.collapsed[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQWJzQjtFQWN0QixTQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBS0EsZ0NBQUE7QUFBSjtBQUdRO0VBQ0ksZ0JBMUJjO0VBMkJkLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQURaO0FBRVk7RUFDSSxrQkFBQTtBQUFoQjtBQUdRO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FBRFo7QUFHUTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQURaO0FBR1E7RUFDSSxpQkFBQTtBQURaO0FBR1k7RUFDSSw4Q0FBQTtBQURoQjtBQU1RO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBSlo7QUFNUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFKWjtBQUtZO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFoRVU7QUE2RDFCO0FBSWdCO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUZwQjtBQUtZOztFQUVJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUFIaEI7QUFNUTtFQUNJLG1CQUFBO0FBSlo7QUFNUTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQUpaO0FBTWdCO0VBQ0ksZ0JBQUE7RUFDQSxzQkF4Rk07RUF5Rk4sMkJBQUE7QUFKcEI7QUFLb0I7RUFDSSxXQUFBO0FBSHhCO0FBS29CO0VBQ0ksV0FBQTtBQUh4QjtBQU1nQjtFQUNJLG1CQUFBO0FBSnBCO0FBWUk7RUFDSSxlQUFBO0FBVFI7QUFXSTtFQUNJLHFCQUFBO0FBVFI7QUFXSTtFQUNJLGFBQUE7RUFDQSxTQUFBO0FBVFI7QUFZUTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFWWjtBQVlnQjtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQVZwQjtBQWdCQTtFQUNJO0lBQ0ksU0FBQTtJQUNBLFNBQUE7RUFiTjtBQUNGO0FBZUE7RUFDSTtJQUNJLHdCQUFBO0VBYk47QUFDRjtBQWVBO0VBQ0k7SUFDSSxhQUFBO0VBYk47QUFDRjtBQWdCQTtFQUNJLFVBQUE7QUFkSjtBQWlCQTtFQUNJLHVDQUFBO0VBQ0Esa0JBQUE7QUFkSjtBQWlCQTtFQUNJLGtCQUFBO0VBQ0EsdUNBQUE7QUFkSjtBQWlCQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBUUEsMEJBQUE7RUFLQSxnQ0FBQTtBQXJCSjtBQVNJO0VBQ0ksZUFBQTtBQVBSO0FBU0k7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUFQUjtBQWlCQTtFQUNJLFdBQUE7QUFkSjtBQWVJO0VBQ0ksYUFBQTtBQWJSIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4uc2lkZWJhciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHRvcDogNTZweDtcclxuICAgIGxlZnQ6IDIzNXB4O1xyXG4gICAgd2lkdGg6IDIzNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMzVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XHJcbiAgICAubGlzdC1ncm91cCB7XHJcbiAgICAgICAgYS5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgLmZhIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYS5yb3V0ZXItbGluay1hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhZGVyLWZpZWxkcyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA+IC5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zaWRlYmFyLWRyb3Bkb3duIHtcclxuICAgICAgICAqOmZvY3VzIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGFuZWwtdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYTpob3ZlcixcclxuICAgICAgICAgICAgYTpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucGFuZWwtdGl0bGU6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYW5lbC1jb2xsYXBzZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpb3VzOiAwO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIC5wYW5lbC1ib2R5IHtcclxuICAgICAgICAgICAgICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uZXN0ZWQtbWVudSB7XHJcbiAgICAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAubmVzdGVkIHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICB1bC5zdWJtZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgIH1cclxuICAgICYgLmV4cGFuZCB7XHJcbiAgICAgICAgdWwuc3VibWVudSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLnNpZGViYXIge1xyXG4gICAgICAgIHRvcDogNTRweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuaGVhZGVyLWZpZWxkcyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogOHB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG59XHJcblxyXG4udG9nZ2xlLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMjM2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjEyNTI5O1xyXG4gICAgaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM5OTk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5jb2xsYXBzZWQge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { collapsedEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/layout/about/about.component.ts");






const routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~bs-component-bs-component-module~bs-element-bs-element-module~categorieservice-categorieserv~259c75fa"), __webpack_require__.e("common"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/layout/dashboard/dashboard.module.ts")).then(m => m.DashboardModule) },
            { path: 'charts', loadChildren: () => Promise.all(/*! import() | charts-charts-module */[__webpack_require__.e("default~bs-component-bs-component-module~bs-element-bs-element-module~categorieservice-categorieserv~259c75fa"), __webpack_require__.e("common"), __webpack_require__.e("charts-charts-module")]).then(__webpack_require__.bind(null, /*! ./charts/charts.module */ "./src/app/layout/charts/charts.module.ts")).then(m => m.ChartsModule) },
            { path: 'tables', loadChildren: () => Promise.all(/*! import() | tables-tables-module */[__webpack_require__.e("default~bs-component-bs-component-module~bs-element-bs-element-module~categorieservice-categorieserv~259c75fa"), __webpack_require__.e("common"), __webpack_require__.e("tables-tables-module")]).then(__webpack_require__.bind(null, /*! ./tables/tables.module */ "./src/app/layout/tables/tables.module.ts")).then(m => m.TablesModule) },
            { path: 'forms', loadChildren: () => Promise.all(/*! import() | form-form-module */[__webpack_require__.e("default~bs-component-bs-component-module~bs-element-bs-element-module~categorieservice-categorieserv~259c75fa"), __webpack_require__.e("common"), __webpack_require__.e("form-form-module")]).then(__webpack_require__.bind(null, /*! ./form/form.module */ "./src/app/layout/form/form.module.ts")).then(m => m.FormModule) },
            { path: 'grid', loadChildren: () => Promise.all(/*! import() | grid-grid-module */[__webpack_require__.e("default~bs-component-bs-component-module~bs-element-bs-element-module~categorieservice-categorieserv~259c75fa"), __webpack_require__.e("common"), __webpack_require__.e("grid-grid-module")]).then(__webpack_require__.bind(null, /*! ./grid/grid.module */ "./src/app/layout/grid/grid.module.ts")).then(m => m.GridModule) },
            { path: 'bs-element', loadChildren: () => Promise.all(/*! import() | bs-element-bs-element-module */[__webpack_require__.e("default~bs-component-bs-component-module~bs-element-bs-element-module~categorieservice-categorieserv~259c75fa"), __webpack_require__.e("common"), __webpack_require__.e("bs-element-bs-element-module")]).then(__webpack_require__.bind(null, /*! ./bs-element/bs-element.module */ "./src/app/layout/bs-element/bs-element.module.ts")).then(m => m.BsElementModule) },
            { path: 'grid', loadChildren: () => Promise.all(/*! import() | grid-grid-module */[__webpack_require__.e("default~bs-component-bs-component-module~bs-element-bs-element-module~categorieservice-categorieserv~259c75fa"), __webpack_require__.e("common"), __webpack_require__.e("grid-grid-module")]).then(__webpack_require__.bind(null, /*! ./grid/grid.module */ "./src/app/layout/grid/grid.module.ts")).then(m => m.GridModule) },
            { path: 'blank-page', loadChildren: () => __webpack_require__.e(/*! import() | blank-page-blank-page-module */ "blank-page-blank-page-module").then(__webpack_require__.bind(null, /*! ./blank-page/blank-page.module */ "./src/app/layout/blank-page/blank-page.module.ts")).then(m => m.BlankPageModule) },
            { path: 'components', loadChildren: () => Promise.all(/*! import() | bs-component-bs-component-module */[__webpack_require__.e("default~bs-component-bs-component-module~bs-element-bs-element-module~categorieservice-categorieserv~259c75fa"), __webpack_require__.e("bs-component-bs-component-module")]).then(__webpack_require__.bind(null, /*! ./bs-component/bs-component.module */ "./src/app/layout/bs-component/bs-component.module.ts")).then(m => m.BsComponentModule) },
            { path: 'list-users', loadChildren: () => Promise.all(/*! import() | list-users-list-users-module */[__webpack_require__.e("default~bs-component-bs-component-module~bs-element-bs-element-module~categorieservice-categorieserv~259c75fa"), __webpack_require__.e("common"), __webpack_require__.e("list-users-list-users-module")]).then(__webpack_require__.bind(null, /*! ./list-users/list-users.module */ "./src/app/layout/list-users/list-users.module.ts")).then(m => m.ListUserModule) },
            { path: 'settings', loadChildren: () => Promise.all(/*! import() | settings-settings-module */[__webpack_require__.e("default~bs-component-bs-component-module~bs-element-bs-element-module~categorieservice-categorieserv~259c75fa"), __webpack_require__.e("common"), __webpack_require__.e("settings-settings-module")]).then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "./src/app/layout/settings/settings.module.ts")).then(m => m.SettingsModule) },
            { path: 'categories-services', loadChildren: () => Promise.all(/*! import() | categorieservice-categorieservice-module */[__webpack_require__.e("default~bs-component-bs-component-module~bs-element-bs-element-module~categorieservice-categorieserv~259c75fa"), __webpack_require__.e("common"), __webpack_require__.e("categorieservice-categorieservice-module")]).then(__webpack_require__.bind(null, /*! ./categorieservice/categorieservice.module */ "./src/app/layout/categorieservice/categorieservice.module.ts")).then(m => m.CategorieserviceModule) },
            { path: 'subcategories', loadChildren: () => Promise.all(/*! import() | subcategories-subcategories-module */[__webpack_require__.e("default~bs-component-bs-component-module~bs-element-bs-element-module~categorieservice-categorieserv~259c75fa"), __webpack_require__.e("common"), __webpack_require__.e("subcategories-subcategories-module")]).then(__webpack_require__.bind(null, /*! ./subcategories/subcategories.module */ "./src/app/layout/subcategories/subcategories.module.ts")).then(m => m.SubcategoriesModule) },
            { path: 'services', loadChildren: () => Promise.all(/*! import() | services-services-module */[__webpack_require__.e("default~bs-component-bs-component-module~bs-element-bs-element-module~categorieservice-categorieserv~259c75fa"), __webpack_require__.e("common"), __webpack_require__.e("services-services-module")]).then(__webpack_require__.bind(null, /*! ./services/services.module */ "./src/app/layout/services/services.module.ts")).then(m => m.ServicesModule) },
            { path: 'languages', loadChildren: () => Promise.all(/*! import() | langue-langue-module */[__webpack_require__.e("default~bs-component-bs-component-module~bs-element-bs-element-module~categorieservice-categorieserv~259c75fa"), __webpack_require__.e("common"), __webpack_require__.e("langue-langue-module")]).then(__webpack_require__.bind(null, /*! ./langue/langue.module */ "./src/app/layout/langue/langue.module.ts")).then(m => m.LangueModule) },
            { path: 'viewchat', loadChildren: () => Promise.all(/*! import() | view-chat-view-chat-module */[__webpack_require__.e("default~bs-component-bs-component-module~bs-element-bs-element-module~categorieservice-categorieserv~259c75fa"), __webpack_require__.e("common"), __webpack_require__.e("view-chat-view-chat-module")]).then(__webpack_require__.bind(null, /*! ./view-chat/view-chat.module */ "./src/app/layout/view-chat/view-chat.module.ts")).then(m => m.ViewChatModule) },
            { path: 'roles', loadChildren: () => Promise.all(/*! import() | role-role-module */[__webpack_require__.e("default~bs-component-bs-component-module~bs-element-bs-element-module~categorieservice-categorieserv~259c75fa"), __webpack_require__.e("common"), __webpack_require__.e("role-role-module")]).then(__webpack_require__.bind(null, /*! ./role/role.module */ "./src/app/layout/role/role.module.ts")).then(m => m.RoleModule) },
            { path: 'chat', loadChildren: () => Promise.all(/*! import() | help-notes-help-notes-module */[__webpack_require__.e("default~bs-component-bs-component-module~bs-element-bs-element-module~categorieservice-categorieserv~259c75fa"), __webpack_require__.e("common"), __webpack_require__.e("help-notes-help-notes-module")]).then(__webpack_require__.bind(null, /*! ./help-notes/help-notes.module */ "./src/app/layout/help-notes/help-notes.module.ts")).then(m => m.HelpNotesModule) },
            { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
        ]
    }
];
class LayoutRoutingModule {
}
LayoutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutRoutingModule });
LayoutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutRoutingModule_Factory(t) { return new (t || LayoutRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/layout/components/header/header.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/layout/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






const _c0 = function (a0) { return { collapsed: a0 }; };
class LayoutComponent {
    constructor() { }
    ngOnInit() { }
    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 4, vars: 3, consts: [[3, "collapsedEvent"], [1, "main-container", 3, "ngClass"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("collapsedEvent", function LayoutComponent_Template_app_sidebar_collapsedEvent_1_listener($event) { return ctx.receiveCollapsed($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.collapedSideBar));
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\n  transition: margin-left 0.2s ease-in-out;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  margin-top: 56px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden;\n}\n\n.collapsed[_ngcontent-%COMP%] {\n  margin-left: 100px;\n}\n\n@media screen and (max-width: 992px) {\n  .main-container[_ngcontent-%COMP%] {\n    margin-left: 0px !important;\n  }\n}\n\n@media print {\n  .main-container[_ngcontent-%COMP%] {\n    margin-top: 0px !important;\n    margin-left: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUtJLHdDQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0FBR0o7O0FBREE7RUFDSTtJQUNJLDJCQUFBO0VBSU47QUFDRjs7QUFGQTtFQUNJO0lBQ0ksMEJBQUE7SUFDQSwyQkFBQTtFQUlOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIzNXB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIC1tcy1vdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jb2xsYXBzZWQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAubWFpbi1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgcHJpbnQge1xyXG4gICAgLm1haW4tY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/layout/components/header/header.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/layout/components/sidebar/sidebar.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/layout/about/about.component.ts");











class LayoutModule {
}
LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__["LayoutRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__["LayoutRoutingModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__["LayoutRoutingModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forRoot()
                ],
                declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=layout-layout-module-es2015.js.map