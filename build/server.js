module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest() {
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch (e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/
/******/ 	//eslint-disable-next-line no-unused-vars
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "790b72dc92eae2f3bc2a";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "main";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:3001/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/assets.json":
/*!***************************!*\
  !*** ./build/assets.json ***!
  \***************************/
/*! exports provided: client, default */
/***/ (function(module) {

module.exports = {"client":{"js":"http://localhost:3001/static/js/bundle.js"}};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./src/styles/fonts.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-0!./src/styles/fonts.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* CircularStd @font-face kit */\n@font-face {\n  font-family: 'CircularStd';\n  src: url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-Black.eot */ "./src/assets/fonts/CircularStd-Black.eot")) + ");\n  src: url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-Black.eot */ "./src/assets/fonts/CircularStd-Black.eot")) + "?#iefix) format('embedded-opentype'), url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-Black.woff */ "./src/assets/fonts/CircularStd-Black.woff")) + ") format('woff'), url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-Black.ttf */ "./src/assets/fonts/CircularStd-Black.ttf")) + ") format('truetype'), url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-Black.svg */ "./src/assets/fonts/CircularStd-Black.svg")) + "#bcc26993292869431e54c666aafa8fcd) format('svg');\n  font-weight: 800;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'CircularStd';\n  src: url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-BlackItalic.eot */ "./src/assets/fonts/CircularStd-BlackItalic.eot")) + ");\n  src: url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-BlackItalic.eot */ "./src/assets/fonts/CircularStd-BlackItalic.eot")) + "?#iefix) format('embedded-opentype'), url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-BlackItalic.woff */ "./src/assets/fonts/CircularStd-BlackItalic.woff")) + ") format('woff'), url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-BlackItalic.ttf */ "./src/assets/fonts/CircularStd-BlackItalic.ttf")) + ") format('truetype'), url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-BlackItalic.svg */ "./src/assets/fonts/CircularStd-BlackItalic.svg")) + "#bcc26993292869431e54c666aafa8fcd) format('svg');\n  font-weight: 800;\n  font-style: italic;\n}\n@font-face {\n  font-family: 'CircularStd';\n  src: url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-Bold.eot */ "./src/assets/fonts/CircularStd-Bold.eot")) + ");\n  src: url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-Bold.eot */ "./src/assets/fonts/CircularStd-Bold.eot")) + "?#iefix) format('embedded-opentype'), url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-Bold.woff */ "./src/assets/fonts/CircularStd-Bold.woff")) + ") format('woff'), url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-Bold.ttf */ "./src/assets/fonts/CircularStd-Bold.ttf")) + ") format('truetype'), url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-Bold.svg */ "./src/assets/fonts/CircularStd-Bold.svg")) + "#bcc26993292869431e54c666aafa8fcd) format('svg');\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'CircularStd';\n  src: url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-BoldItalic.eot */ "./src/assets/fonts/CircularStd-BoldItalic.eot")) + ");\n  src: url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-BoldItalic.eot */ "./src/assets/fonts/CircularStd-BoldItalic.eot")) + "?#iefix) format('embedded-opentype'), url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-BoldItalic.woff */ "./src/assets/fonts/CircularStd-BoldItalic.woff")) + ") format('woff'), url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-BoldItalic.ttf */ "./src/assets/fonts/CircularStd-BoldItalic.ttf")) + ") format('truetype'), url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-BoldItalic.svg */ "./src/assets/fonts/CircularStd-BoldItalic.svg")) + "#bcc26993292869431e54c666aafa8fcd) format('svg');\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: 'CircularStd';\n  src: url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-Medium.eot */ "./src/assets/fonts/CircularStd-Medium.eot")) + ");\n  src: url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-Medium.eot */ "./src/assets/fonts/CircularStd-Medium.eot")) + "?#iefix) format('embedded-opentype'), url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-Medium.woff */ "./src/assets/fonts/CircularStd-Medium.woff")) + ") format('woff'), url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-Medium.ttf */ "./src/assets/fonts/CircularStd-Medium.ttf")) + ") format('truetype'), url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-Medium.svg */ "./src/assets/fonts/CircularStd-Medium.svg")) + "#bcc26993292869431e54c666aafa8fcd) format('svg');\n  font-weight: 500;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'CircularStd';\n  src: url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-MediumItalic.eot */ "./src/assets/fonts/CircularStd-MediumItalic.eot")) + ");\n  src: url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-MediumItalic.eot */ "./src/assets/fonts/CircularStd-MediumItalic.eot")) + "?#iefix) format('embedded-opentype'), url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-MediumItalic.woff */ "./src/assets/fonts/CircularStd-MediumItalic.woff")) + ") format('woff'), url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-MediumItalic.ttf */ "./src/assets/fonts/CircularStd-MediumItalic.ttf")) + ") format('truetype'), url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-MediumItalic.svg */ "./src/assets/fonts/CircularStd-MediumItalic.svg")) + "#bcc26993292869431e54c666aafa8fcd) format('svg');\n  font-weight: 500;\n  font-style: italic;\n}\n@font-face {\n  font-family: 'CircularStd';\n  src: url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-Book.eot */ "./src/assets/fonts/CircularStd-Book.eot")) + ");\n  src: url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-Book.eot */ "./src/assets/fonts/CircularStd-Book.eot")) + "?#iefix) format('embedded-opentype'), url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-Book.woff */ "./src/assets/fonts/CircularStd-Book.woff")) + ") format('woff'), url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-Book.ttf */ "./src/assets/fonts/CircularStd-Book.ttf")) + ") format('truetype'), url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-Book.svg */ "./src/assets/fonts/CircularStd-Book.svg")) + "#bcc26993292869431e54c666aafa8fcd) format('svg');\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'CircularStd';\n  src: url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-BookItalic.eot */ "./src/assets/fonts/CircularStd-BookItalic.eot")) + ");\n  src: url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-BookItalic.eot */ "./src/assets/fonts/CircularStd-BookItalic.eot")) + "?#iefix) format('embedded-opentype'), url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-BookItalic.woff */ "./src/assets/fonts/CircularStd-BookItalic.woff")) + ") format('woff'), url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-BookItalic.ttf */ "./src/assets/fonts/CircularStd-BookItalic.ttf")) + ") format('truetype'), url(" + escape(__webpack_require__(/*! ../assets/fonts/CircularStd-BookItalic.svg */ "./src/assets/fonts/CircularStd-BookItalic.svg")) + "#bcc26993292869431e54c666aafa8fcd) format('svg');\n  font-weight: 400;\n  font-style: italic;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!*****************************************!*\
  !*** (webpack)/hot/log-apply-result.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(updatedModules, renewedModules) {
	var unacceptedModules = updatedModules.filter(function(moduleId) {
		return renewedModules && renewedModules.indexOf(moduleId) < 0;
	});
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

	if (unacceptedModules.length > 0) {
		log(
			"warning",
			"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"
		);
		unacceptedModules.forEach(function(moduleId) {
			log("warning", "[HMR]  - " + moduleId);
		});
	}

	if (!renewedModules || renewedModules.length === 0) {
		log("info", "[HMR] Nothing hot updated.");
	} else {
		log("info", "[HMR] Updated modules:");
		renewedModules.forEach(function(moduleId) {
			if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
				var parts = moduleId.split("!");
				log.groupCollapsed("info", "[HMR]  - " + parts.pop());
				log("info", "[HMR]  - " + moduleId);
				log.groupEnd("info");
			} else {
				log("info", "[HMR]  - " + moduleId);
			}
		});
		var numberIds = renewedModules.every(function(moduleId) {
			return typeof moduleId === "number";
		});
		if (numberIds)
			log(
				"info",
				"[HMR] Consider using the NamedModulesPlugin for module names."
			);
	}
};


/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!****************************!*\
  !*** (webpack)/hot/log.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var logLevel = "info";

function dummy() {}

function shouldLog(level) {
	var shouldLog =
		(logLevel === "info" && level === "info") ||
		(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning") ||
		(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error");
	return shouldLog;
}

function logGroup(logFn) {
	return function(level, msg) {
		if (shouldLog(level)) {
			logFn(msg);
		}
	};
}

module.exports = function(level, msg) {
	if (shouldLog(level)) {
		if (level === "info") {
			console.log(msg);
		} else if (level === "warning") {
			console.warn(msg);
		} else if (level === "error") {
			console.error(msg);
		}
	}
};

/* eslint-disable node/no-unsupported-features/node-builtins */
var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
/* eslint-enable node/no-unsupported-features/node-builtins */

module.exports.group = logGroup(group);

module.exports.groupCollapsed = logGroup(groupCollapsed);

module.exports.groupEnd = logGroup(groupEnd);

module.exports.setLogLevel = function(level) {
	logLevel = level;
};


/***/ }),

/***/ "./node_modules/webpack/hot/poll.js?300":
/*!*********************************!*\
  !*** (webpack)/hot/poll.js?300 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__resourceQuery) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/*globals __resourceQuery */
if (true) {
	var hotPollInterval = +__resourceQuery.substr(1) || 10 * 60 * 1000;
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

	var checkForUpdate = function checkForUpdate(fromUpdate) {
		if (module.hot.status() === "idle") {
			module.hot
				.check(true)
				.then(function(updatedModules) {
					if (!updatedModules) {
						if (fromUpdate) log("info", "[HMR] Update applied.");
						return;
					}
					__webpack_require__(/*! ./log-apply-result */ "./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);
					checkForUpdate(true);
				})
				.catch(function(err) {
					var status = module.hot.status();
					if (["abort", "fail"].indexOf(status) >= 0) {
						log("warning", "[HMR] Cannot apply update.");
						log("warning", "[HMR] " + (err.stack || err.message));
						log("warning", "[HMR] You need to restart the application!");
					} else {
						log(
							"warning",
							"[HMR] Update failed: " + (err.stack || err.message)
						);
					}
				});
		}
	};
	setInterval(checkForUpdate, hotPollInterval);
} else {}

/* WEBPACK VAR INJECTION */}.call(this, "?300"))

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _screens_Root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/Root */ "./src/screens/Root/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/App.css */ "./src/styles/App.css");
/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_App_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/App.js';









var App = function App(_ref) {
  var routes = _ref.routes,
      initialData = _ref.initialData,
      initialDataError = _ref.initialDataError;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"],
    { store: _store__WEBPACK_IMPORTED_MODULE_4__["default"], __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_screens_Root__WEBPACK_IMPORTED_MODULE_3__["default"], { routes: routes, initialData: initialData, initialDataError: initialDataError, __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    })
  );
};

App.propTypes = {
  routes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  initialData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  initialDataError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/promise */ "babel-runtime/core-js/promise");
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "babel-runtime/core-js/object/keys");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);







var PUBLIC_URI =  false ? undefined : 'http://localhost:8080';

var API = function API() {
  var _this = this;

  babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, API);

  this.setErrors = function (errors) {
    var errorObj = {};
    if (errors && babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(errors).length) {
      babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(errors).forEach(function (error) {
        errorObj[error] = errors[error].msg;
      });
    }

    return errorObj;
  };

  this.setAuthHeader = function (token) {
    _this.axios.defaults.headers.common['Authorization'] = 'bearer ' + token;
  };

  this.removeAuthHeader = function () {
    delete _this.axios.defaults.headers.common['Authorization'];
  };

  this.signup = function (userDetails) {
    return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(resolve, reject) {
        var response;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this.axios.post('/signup', userDetails);

              case 3:
                response = _context.sent;
                return _context.abrupt('return', resolve(response.data));

              case 7:
                _context.prev = 7;
                _context.t0 = _context['catch'](0);
                return _context.abrupt('return', reject(_context.t0));

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 7]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  };

  this.confirmEmail = function (code) {
    return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function () {
      var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(resolve, reject) {
        var response;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _this.axios.post('/confirm', { confirmationCode: code });

              case 3:
                response = _context2.sent;
                return _context2.abrupt('return', resolve(response));

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2['catch'](0);
                return _context2.abrupt('return', reject(_context2.t0));

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this, [[0, 7]]);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());
  };

  this.login = function (userDetails) {
    return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function () {
      var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(resolve, reject) {
        var response;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _this.axios.post('/login', userDetails);

              case 3:
                response = _context3.sent;
                return _context3.abrupt('return', resolve(response.data));

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3['catch'](0);
                return _context3.abrupt('return', reject(_context3.t0));

              case 10:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this, [[0, 7]]);
      }));

      return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }());
  };

  this.addAddress = function (addressDetails) {
    return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function () {
      var _ref4 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(resolve, reject) {
        var response;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _this.axios.post('/addresses', addressDetails);

              case 3:
                response = _context4.sent;
                return _context4.abrupt('return', resolve(response.data));

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4['catch'](0);
                return _context4.abrupt('return', reject(_context4.t0));

              case 10:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this, [[0, 7]]);
      }));

      return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
      };
    }());
  };

  this.getCurrencies = function () {
    return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function () {
      var _ref5 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(resolve, reject) {
        var response;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _this.axios.get('/currencies');

              case 3:
                response = _context5.sent;
                return _context5.abrupt('return', resolve(response.data));

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5['catch'](0);
                return _context5.abrupt('return', reject(_context5.t0));

              case 10:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this, [[0, 7]]);
      }));

      return function (_x9, _x10) {
        return _ref5.apply(this, arguments);
      };
    }());
  };

  this.updateUser = function (details) {
    return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function () {
      var _ref6 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(resolve, reject) {
        var response;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _this.axios.put('/profile', details);

              case 3:
                response = _context6.sent;
                return _context6.abrupt('return', resolve(response.data));

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6['catch'](0);
                return _context6.abrupt('return', reject(_context6.t0));

              case 10:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this, [[0, 7]]);
      }));

      return function (_x11, _x12) {
        return _ref6.apply(this, arguments);
      };
    }());
  };

  this.verifyEmail = function () {
    return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function () {
      var _ref7 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(resolve, reject) {
        var response;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return _this.axios.get('/verify/email');

              case 3:
                response = _context7.sent;
                return _context7.abrupt('return', resolve(response.data));

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7['catch'](0);
                return _context7.abrupt('return', reject(_context7.t0));

              case 10:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, _this, [[0, 7]]);
      }));

      return function (_x13, _x14) {
        return _ref7.apply(this, arguments);
      };
    }());
  };

  this.getAuthUser = function () {
    return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function () {
      var _ref8 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(resolve, reject) {
        var response;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return _this.axios.get('/profile');

              case 3:
                response = _context8.sent;
                return _context8.abrupt('return', resolve(response.data));

              case 7:
                _context8.prev = 7;
                _context8.t0 = _context8['catch'](0);
                return _context8.abrupt('return', reject(_context8.t0));

              case 10:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, _this, [[0, 7]]);
      }));

      return function (_x15, _x16) {
        return _ref8.apply(this, arguments);
      };
    }());
  };

  this.getAddresses = function () {
    return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function () {
      var _ref9 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(resolve, reject) {
        var response;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return _this.axios.get('/addresses');

              case 3:
                response = _context9.sent;
                return _context9.abrupt('return', resolve(response.data));

              case 7:
                _context9.prev = 7;
                _context9.t0 = _context9['catch'](0);
                return _context9.abrupt('return', reject(_context9.t0));

              case 10:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, _this, [[0, 7]]);
      }));

      return function (_x17, _x18) {
        return _ref9.apply(this, arguments);
      };
    }());
  };

  this.updateAddress = function (addressDetails) {
    return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function () {
      var _ref10 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(resolve, reject) {
        var response;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return _this.axios.put('/addresses/' + addressDetails.currency.symbol, { address: addressDetails.address });

              case 3:
                response = _context10.sent;
                return _context10.abrupt('return', resolve(response.data));

              case 7:
                _context10.prev = 7;
                _context10.t0 = _context10['catch'](0);
                return _context10.abrupt('return', reject(_context10.t0));

              case 10:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, _this, [[0, 7]]);
      }));

      return function (_x19, _x20) {
        return _ref10.apply(this, arguments);
      };
    }());
  };

  this.deleteAddress = function (address) {
    return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function () {
      var _ref11 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(resolve, reject) {
        var response;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                _context11.next = 3;
                return _this.axios.delete('/addresses/' + address.currency.symbol);

              case 3:
                response = _context11.sent;
                return _context11.abrupt('return', resolve(response.data));

              case 7:
                _context11.prev = 7;
                _context11.t0 = _context11['catch'](0);
                return _context11.abrupt('return', reject(_context11.t0));

              case 10:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, _this, [[0, 7]]);
      }));

      return function (_x21, _x22) {
        return _ref11.apply(this, arguments);
      };
    }());
  };

  this.getProfile = function (username) {
    return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function () {
      var _ref12 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(resolve, reject) {
        var response;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                _context12.next = 3;
                return _this.axios.get('' + username);

              case 3:
                response = _context12.sent;
                return _context12.abrupt('return', resolve(response.data));

              case 7:
                _context12.prev = 7;
                _context12.t0 = _context12['catch'](0);
                return _context12.abrupt('return', reject(_context12.t0));

              case 10:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, _this, [[0, 7]]);
      }));

      return function (_x23, _x24) {
        return _ref12.apply(this, arguments);
      };
    }());
  };

  this.axios = axios__WEBPACK_IMPORTED_MODULE_5___default.a.create({
    baseURL: PUBLIC_URI + '/api'
  });
};

/* harmony default export */ __webpack_exports__["default"] = (new API());

/***/ }),

/***/ "./src/assets/fonts/CircularStd-Black.eot":
/*!************************************************!*\
  !*** ./src/assets/fonts/CircularStd-Black.eot ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-Black.faf6412f.eot";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-Black.svg":
/*!************************************************!*\
  !*** ./src/assets/fonts/CircularStd-Black.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-Black.263293c6.svg";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-Black.ttf":
/*!************************************************!*\
  !*** ./src/assets/fonts/CircularStd-Black.ttf ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-Black.c885948f.ttf";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-Black.woff":
/*!*************************************************!*\
  !*** ./src/assets/fonts/CircularStd-Black.woff ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-Black.59880bb7.woff";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-BlackItalic.eot":
/*!******************************************************!*\
  !*** ./src/assets/fonts/CircularStd-BlackItalic.eot ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-BlackItalic.2d00dacf.eot";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-BlackItalic.svg":
/*!******************************************************!*\
  !*** ./src/assets/fonts/CircularStd-BlackItalic.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-BlackItalic.f3c01bca.svg";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-BlackItalic.ttf":
/*!******************************************************!*\
  !*** ./src/assets/fonts/CircularStd-BlackItalic.ttf ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-BlackItalic.7f645a71.ttf";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-BlackItalic.woff":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/CircularStd-BlackItalic.woff ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-BlackItalic.e13b5c7b.woff";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-Bold.eot":
/*!***********************************************!*\
  !*** ./src/assets/fonts/CircularStd-Bold.eot ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-Bold.e66cd439.eot";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-Bold.svg":
/*!***********************************************!*\
  !*** ./src/assets/fonts/CircularStd-Bold.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-Bold.b4c1f01a.svg";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-Bold.ttf":
/*!***********************************************!*\
  !*** ./src/assets/fonts/CircularStd-Bold.ttf ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-Bold.ce2a6c41.ttf";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-Bold.woff":
/*!************************************************!*\
  !*** ./src/assets/fonts/CircularStd-Bold.woff ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-Bold.1ced22ee.woff";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-BoldItalic.eot":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/CircularStd-BoldItalic.eot ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-BoldItalic.e714c355.eot";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-BoldItalic.svg":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/CircularStd-BoldItalic.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-BoldItalic.91e63932.svg";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-BoldItalic.ttf":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/CircularStd-BoldItalic.ttf ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-BoldItalic.fe0bddb8.ttf";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-BoldItalic.woff":
/*!******************************************************!*\
  !*** ./src/assets/fonts/CircularStd-BoldItalic.woff ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-BoldItalic.8f682a90.woff";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-Book.eot":
/*!***********************************************!*\
  !*** ./src/assets/fonts/CircularStd-Book.eot ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-Book.d246520d.eot";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-Book.svg":
/*!***********************************************!*\
  !*** ./src/assets/fonts/CircularStd-Book.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-Book.81002b22.svg";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-Book.ttf":
/*!***********************************************!*\
  !*** ./src/assets/fonts/CircularStd-Book.ttf ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-Book.c43e9feb.ttf";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-Book.woff":
/*!************************************************!*\
  !*** ./src/assets/fonts/CircularStd-Book.woff ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-Book.ed76eb21.woff";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-BookItalic.eot":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/CircularStd-BookItalic.eot ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-BookItalic.6d37d850.eot";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-BookItalic.svg":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/CircularStd-BookItalic.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-BookItalic.892039ad.svg";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-BookItalic.ttf":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/CircularStd-BookItalic.ttf ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-BookItalic.77a3e2ba.ttf";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-BookItalic.woff":
/*!******************************************************!*\
  !*** ./src/assets/fonts/CircularStd-BookItalic.woff ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-BookItalic.61889cfb.woff";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-Medium.eot":
/*!*************************************************!*\
  !*** ./src/assets/fonts/CircularStd-Medium.eot ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-Medium.3473fea8.eot";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-Medium.svg":
/*!*************************************************!*\
  !*** ./src/assets/fonts/CircularStd-Medium.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-Medium.e6af6d0c.svg";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-Medium.ttf":
/*!*************************************************!*\
  !*** ./src/assets/fonts/CircularStd-Medium.ttf ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-Medium.46d551df.ttf";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-Medium.woff":
/*!**************************************************!*\
  !*** ./src/assets/fonts/CircularStd-Medium.woff ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-Medium.bb9a359a.woff";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-MediumItalic.eot":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/CircularStd-MediumItalic.eot ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-MediumItalic.1e3f8d0e.eot";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-MediumItalic.svg":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/CircularStd-MediumItalic.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-MediumItalic.fde448ff.svg";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-MediumItalic.ttf":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/CircularStd-MediumItalic.ttf ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-MediumItalic.7095d23a.ttf";

/***/ }),

/***/ "./src/assets/fonts/CircularStd-MediumItalic.woff":
/*!********************************************************!*\
  !*** ./src/assets/fonts/CircularStd-MediumItalic.woff ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CircularStd-MediumItalic.21a7520d.woff";

/***/ }),

/***/ "./src/components/Button/index.js":
/*!****************************************!*\
  !*** ./src/components/Button/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles */ "./src/components/Button/styles.js");







var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/components/Button/index.js';





var Button = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Button, _Component);

  function Button(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Button);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Button.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(Button)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Button, [{
    key: 'onClick',
    value: function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }
      if (this.props.onClick) {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          primary = _props.primary,
          secondary = _props.secondary,
          active = _props.active,
          error = _props.error,
          link = _props.link,
          block = _props.block,
          style = _props.style,
          outline = _props.outline,
          disabled = _props.disabled,
          Tag = _props.tag,
          attributes = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_props, ['primary', 'secondary', 'active', 'error', 'link', 'block', 'style', 'outline', 'disabled', 'tag']);

      var buttonStyle = '' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].button;

      if (primary) {
        buttonStyle = buttonStyle + ' ' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].primary;

        if (outline) {
          buttonStyle = buttonStyle + ' ' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].primaryOutline;
        }

        if (active) {
          buttonStyle = buttonStyle + ' ' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].primaryActive;
        }
      }

      if (secondary) {
        buttonStyle = buttonStyle + ' ' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].secondary;

        if (outline) {
          buttonStyle = buttonStyle + ' ' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].secondaryOutline;
        }

        if (active) {
          buttonStyle = buttonStyle + ' ' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].secondaryActive;
        }
      }

      if (error) {
        buttonStyle = buttonStyle + ' ' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].error;

        if (outline) {
          buttonStyle = buttonStyle + ' ' + style.errorOutline;
        }

        if (active) {
          buttonStyle = buttonStyle + ' ' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].errorActive;
        }
      }

      if (disabled) {
        buttonStyle = _styles__WEBPACK_IMPORTED_MODULE_9__["default"].button + ' ' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].disabled;
      }

      if (link) {
        buttonStyle = _styles__WEBPACK_IMPORTED_MODULE_9__["default"].button + ' ' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].link;

        if (disabled) {
          buttonStyle = _styles__WEBPACK_IMPORTED_MODULE_9__["default"].button + ' ' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].disabledLink;
        }

        if (error) {
          buttonStyle = buttonStyle + ' ' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].errorLink;
        }
      }

      if (attributes.href && Tag === 'button') {
        Tag = 'a';
      }

      if (block) {
        buttonStyle = buttonStyle + ' ' + _styles__WEBPACK_IMPORTED_MODULE_9__["default"].block;
      }

      if (style) {
        buttonStyle = buttonStyle + ' ' + style;
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Tag, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        type: Tag === 'button' && attributes.onClick ? 'button' : undefined
      }, attributes, {
        className: buttonStyle,
        onClick: this.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }));
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Button.propTypes = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  block: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  primary: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  secondary: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  error: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  link: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  outline: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string]),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node,
  style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any
};

Button.defaultProps = {
  tag: 'button',
  primary: true,
  disabled: false
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/Button/styles.js":
/*!*****************************************!*\
  !*** ./src/components/Button/styles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  border-color: ', ';\n  color: ', ';\n'], ['\n  background-color: ', ';\n  border-color: ', ';\n  color: ', ';\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\nbackground-color: transparent;\ncolor: ', ';\n\n&:hover {\n  color: ', ';\n}\n'], ['\nbackground-color: transparent;\ncolor: ', ';\n\n&:hover {\n  color: ', ';\n}\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  color: ', ';\n\n  &:hover: {\n    color: ', ';\n  }\n'], ['\n  color: ', ';\n\n  &:hover: {\n    color: ', ';\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  color: ', ';\n  cursor: not-allowed;\n'], ['\n  color: ', ';\n  cursor: not-allowed;\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  display: inline-block;\n  font-weight: 600;\n  font-family: ', ';\n  text-decoration: none;\n  text-align: center;\n  white-space: nowrap;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: .7rem 2rem;\n  font-size: 1.2rem;\n  line-height: 1.5;\n  border-radius: .25em;\n  cursor: pointer;\n  text-transform: none;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\n  &:hover {\n    text-decoration: none;\n  }\n\n  &:not(:disabled):not(', ') {\n    cursor: pointer;\n  }\n'], ['\n  display: inline-block;\n  font-weight: 600;\n  font-family: ', ';\n  text-decoration: none;\n  text-align: center;\n  white-space: nowrap;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: .7rem 2rem;\n  font-size: 1.2rem;\n  line-height: 1.5;\n  border-radius: .25em;\n  cursor: pointer;\n  text-transform: none;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\n  &:hover {\n    text-decoration: none;\n  }\n\n  &:not(:disabled):not(', ') {\n    cursor: pointer;\n  }\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  display: block;\n  width: 100%;\n'], ['\n  display: block;\n  width: 100%;\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  color: ', ';\n  border-color: ', ';\n\n  &:hover {\n    background-color: ', ';\n    border-color: ', ';\n  }\n'], ['\n  background-color: ', ';\n  color: ', ';\n  border-color: ', ';\n\n  &:hover {\n    background-color: ', ';\n    border-color: ', ';\n  }\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  color: ', ';\n  border-color: ', ';\n\n  &:hover {\n    background-color: ', ';\n    border-color: ', '\n  }\n'], ['\n  background-color: ', ';\n  color: ', ';\n  border-color: ', ';\n\n  &:hover {\n    background-color: ', ';\n    border-color: ', '\n  }\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n    border: 2px solid ', ';\n    color: ', ';\n    background-color: transparent;\n\n    &:hover {\n      color: ', ';\n      background-color: ', ';\n      border-color: ', ';\n    }\n'], ['\n    border: 2px solid ', ';\n    color: ', ';\n    background-color: transparent;\n\n    &:hover {\n      color: ', ';\n      background-color: ', ';\n      border-color: ', ';\n    }\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  border: 2px solid ', ';\n  color: ', ';\n  background-color: transparent;\n'], ['\n  border: 2px solid ', ';\n  color: ', ';\n  background-color: transparent;\n']),
    _templateObject11 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  border-color: 2px solid ', ';\n  color: ', ';\n  background-color: transparent;\n'], ['\n  border-color: 2px solid ', ';\n  color: ', ';\n  background-color: transparent;\n']),
    _templateObject12 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  border-color: ', ';\n'], ['\n  background-color: ', ';\n  border-color: ', ';\n']);






var disabled = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].disabled, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white);

var link = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.4, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText));

var primaryLink = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary));

var secondaryLink = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary));

var errorLink = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].errorText, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].errorText));

var disabledLink = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].disabled);

var button = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5, _styles__WEBPACK_IMPORTED_MODULE_2__["typography"].primaryFont, disabled);
var block = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6);

var primary = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary), Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary));

var secondary = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary), Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary));

var error = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].errorText, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].errorText), Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].errorText), Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].errorText));

var primaryOutline = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary);

var secondaryOutline = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary);

var errorOutline = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject11, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].errorText, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary);

var primaryActive = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary), Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary));

var secondaryActive = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary), Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary));

var errorActive = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].errorText), Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].errorText));

var styles = {
  button: button,
  primary: primary,
  secondary: secondary,
  block: block,
  error: error,
  disabled: disabled,
  link: link,
  primaryLink: primaryLink,
  secondaryLink: secondaryLink,
  errorLink: errorLink,
  disabledLink: disabledLink,
  primaryOutline: primaryOutline,
  secondaryOutline: secondaryOutline,
  errorOutline: errorOutline,
  primaryActive: primaryActive,
  secondaryActive: secondaryActive,
  errorActive: errorActive
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/components/Container/index.js":
/*!*******************************************!*\
  !*** ./src/components/Container/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/components/Container/styles.js");


var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/components/Container/index.js';





var Container = function Container(_ref) {
  var content = _ref.content,
      fullHeight = _ref.fullHeight,
      fluid = _ref.fluid,
      style = _ref.style,
      children = _ref.children,
      hostRef = _ref.hostRef,
      props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ['content', 'fullHeight', 'fluid', 'style', 'children', 'hostRef']);

  var containerStyle = '' + _styles__WEBPACK_IMPORTED_MODULE_4__["default"].base;

  if (content) {
    containerStyle = containerStyle + ' ' + _styles__WEBPACK_IMPORTED_MODULE_4__["default"].content;
  }

  if (fullHeight) {
    containerStyle = containerStyle + ' ' + _styles__WEBPACK_IMPORTED_MODULE_4__["default"].fullHeight;
  }

  if (fluid) {
    containerStyle = containerStyle + ' ' + _styles__WEBPACK_IMPORTED_MODULE_4__["default"].fluid;
  }

  if (style) {
    containerStyle = containerStyle + ' ' + style;
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
    'div',
    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ className: containerStyle, ref: hostRef || null }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    }),
    children
  );
};

Container.propTypes = {
  content: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  fullHeight: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  fluid: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  hostRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,
  style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./src/components/Container/styles.js":
/*!********************************************!*\
  !*** ./src/components/Container/styles.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: transparent;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  label: base-cntr;\n'], ['\n  background-color: transparent;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  label: base-cntr;\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-left: 2em;\n  padding-right: 2em;\n  label: content-cntr;\n'], ['\n  padding-left: 2em;\n  padding-right: 2em;\n  label: content-cntr;\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  min-width: 100%;\n  label: fluid-cntr;\n'], ['\n  min-width: 100%;\n  label: fluid-cntr;\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  min-height: 100vh;\n  label: full-height-cntr;\n'], ['\n  min-height: 100vh;\n  label: full-height-cntr;\n']);



var base = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject);
var content = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2);

var fluid = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3);
var fullHeight = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4);

var styles = {
  base: base,
  content: content,
  fluid: fluid,
  fullHeight: fullHeight
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-media */ "react-media");
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_media__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Container */ "./src/components/Container/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ "./src/components/Button/index.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Text */ "./src/components/Text/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./src/components/Footer/styles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");
var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/components/Footer/index.js';











var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _Container__WEBPACK_IMPORTED_MODULE_3__["default"],
    { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].mainContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _Container__WEBPACK_IMPORTED_MODULE_3__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].logoContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _Text__WEBPACK_IMPORTED_MODULE_5__["default"],
        { tag: 'h6', style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].logoTextStyle, unstyled: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        },
        'Bitcharge \xA9 2018'
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react_media__WEBPACK_IMPORTED_MODULE_2___default.a,
        { query: '(max-width: ' + _styles__WEBPACK_IMPORTED_MODULE_7__["breakpoints"].tablet + ')', __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        function (matches) {
          return matches ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _Container__WEBPACK_IMPORTED_MODULE_3__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].rightNavContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              }
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Button__WEBPACK_IMPORTED_MODULE_4__["default"],
              { href: 'https://twitter.com/bitcharge_co', target: '_blank', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].logoutStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 21
                }
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'icon ion-logo-twitter', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 21
                }
              })
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Button__WEBPACK_IMPORTED_MODULE_4__["default"],
              { href: '/profile', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].logoutStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                }
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'icon ion-logo-facebook', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                }
              })
            )
          ) : null;
        }
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _Container__WEBPACK_IMPORTED_MODULE_3__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].centerNavContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _Button__WEBPACK_IMPORTED_MODULE_4__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], to: '/about', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        },
        'About'
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _Button__WEBPACK_IMPORTED_MODULE_4__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], to: '/terms', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        },
        'Terms'
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _Button__WEBPACK_IMPORTED_MODULE_4__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], to: '/privacy', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        },
        'Privacy'
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      react_media__WEBPACK_IMPORTED_MODULE_2___default.a,
      { query: '(max-width: ' + _styles__WEBPACK_IMPORTED_MODULE_7__["breakpoints"].tablet + ')', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      },
      function (matches) {
        return !matches ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _Container__WEBPACK_IMPORTED_MODULE_3__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].rightNavContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _Button__WEBPACK_IMPORTED_MODULE_4__["default"],
            { href: 'https://twitter.com/bitcharge_co', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].logoutStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              }
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'icon ion-logo-twitter', __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              }
            })
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _Button__WEBPACK_IMPORTED_MODULE_4__["default"],
            { href: '/profile', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].logoutStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'icon ion-logo-facebook', __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            })
          )
        ) : null;
      }
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Footer/styles.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/styles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  margin: 0 auto;\n  min-height: 4.5em;\n  color: ', ';\n  padding: 1em 3em;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n\n  @media (max-width: ', ') {\n    padding-left: 1em;\n    padding-right: 1em;\n    flex-direction: column;\n    padding-top: 1em;\n  }\n'], ['\n  background-color: ', ';\n  margin: 0 auto;\n  min-height: 4.5em;\n  color: ', ';\n  padding: 1em 3em;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n\n  @media (max-width: ', ') {\n    padding-left: 1em;\n    padding-right: 1em;\n    flex-direction: column;\n    padding-top: 1em;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    border-bottom: 1px solid ', ';\n    padding-bottom: 1em;\n  }\n'], ['\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    border-bottom: 1px solid ', ';\n    padding-bottom: 1em;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: .5em 0;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n\n  @media (min-width: ', ' and max-width: ', ') {\n    width: 60%;\n  }\n'], ['\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: .5em 0;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n\n  @media (min-width: ', ' and max-width: ', ') {\n    width: 60%;\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n'], ['\n  flex-direction: row;\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n  font-size: 1em;\n  border-radius: 0;\n\n  @media (max-width: ', ') {\n    padding-left: 1em;\n    padding-right: 1em;\n    font-size: 1em;\n  }\n'], ['\n  font-weight: 500;\n  font-size: 1em;\n  border-radius: 0;\n\n  @media (max-width: ', ') {\n    padding-left: 1em;\n    padding-right: 1em;\n    font-size: 1em;\n  }\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-size: 1.8em;\n  padding-top: 0;\n  padding-bottom: 0;\n  color: ', ';\n\n  @media (max-width: ', ') {\n    font-weight: 600;\n    padding-top: 0;\n    padding-bottom: 0;\n    font-size: 1.4em;\n    margin-right: -.7em;\n  }\n'], ['\n  font-size: 1.8em;\n  padding-top: 0;\n  padding-bottom: 0;\n  color: ', ';\n\n  @media (max-width: ', ') {\n    font-weight: 600;\n    padding-top: 0;\n    padding-bottom: 0;\n    font-size: 1.4em;\n    margin-right: -.7em;\n  }\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n'], ['\n  font-weight: 600;\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 150px;\n  height: auto;\n\n  @media (max-width: ', ') {\n    width: 120px;\n    height: auto;\n  }\n'], ['\n  width: 150px;\n  height: auto;\n\n  @media (max-width: ', ') {\n    width: 120px;\n    height: auto;\n  }\n']);





var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var logoContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray);

var centerNavContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var rightNavContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4);

var linkStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var logoutStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText), _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var logoTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7);

var logoImageStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var styles = {
  mainContainer: mainContainer,
  logoContainer: logoContainer,
  centerNavContainer: centerNavContainer,
  logoTextStyle: logoTextStyle,
  logoImageStyle: logoImageStyle,
  linkStyle: linkStyle,
  logoutStyle: logoutStyle,
  rightNavContainer: rightNavContainer
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/components/Input/index.js":
/*!***************************************!*\
  !*** ./src/components/Input/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_select_lib_Async__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-select/lib/Async */ "react-select/lib/Async");
/* harmony import */ var react_select_lib_Async__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_select_lib_Async__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Container */ "./src/components/Container/index.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Text */ "./src/components/Text/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles */ "./src/components/Input/styles.js");







var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/components/Input/index.js';










var Input = function (_PureComponent) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Input, _PureComponent);

  function Input(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Input);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Input.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(Input)).call(this, props));

    _this.handleSelectChange = function (value) {
      this.props.onChange(this.props.name, value);
    };

    _this.handleSelectBlur = function () {
      this.props.onBlur(this.props.name, true);
    };

    _this.handleSelectChange = _this.handleSelectChange.bind(_this);
    _this.handleSelectBlur = _this.handleSelectBlur.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          name = _props.name,
          noErrorText = _props.noErrorText,
          type = _props.type,
          error = _props.error,
          placeholder = _props.placeholder,
          inputStyle = _props.inputStyle,
          inputContainerStyle = _props.inputContainerStyle,
          props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_props, ['label', 'name', 'noErrorText', 'type', 'error', 'placeholder', 'inputStyle', 'inputContainerStyle']);

      var innerInputStyle = Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].inputBaseStyle);
      var mainContainerStyle = Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].mainContainer);

      var innerInputContainerStyle = Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].inputContainer);

      if (inputStyle) {
        innerInputContainerStyle = innerInputContainerStyle + ' ' + inputStyle;
      }

      if (inputContainerStyle) {
        mainContainerStyle = Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(mainContainerStyle, inputContainerStyle);
      }

      var Tag = 'input';

      if (type === 'select') {
        Tag = react_select__WEBPACK_IMPORTED_MODULE_8___default.a;
      }
      if (type === 'async-select') {
        Tag = react_select_lib_Async__WEBPACK_IMPORTED_MODULE_9___default.a;
      }

      if (type === 'textarea') {
        Tag = 'textarea';
        innerInputStyle = Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(innerInputStyle, _styles__WEBPACK_IMPORTED_MODULE_14__["default"].inputTextAreaStyle);
      }

      if (error) {
        innerInputStyle = Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(innerInputStyle, _styles__WEBPACK_IMPORTED_MODULE_14__["default"].inputErrorStyle);
      }
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _Container__WEBPACK_IMPORTED_MODULE_12__["default"],
        { style: mainContainerStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: innerInputContainerStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          },
          label && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _Container__WEBPACK_IMPORTED_MODULE_12__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].inputLabelContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 63
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _Text__WEBPACK_IMPORTED_MODULE_13__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].labelText, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 64
                }
              },
              label
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _Container__WEBPACK_IMPORTED_MODULE_12__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].inputFieldContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              }
            },
            type === 'select' || type === 'async-select' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Tag, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ name: name, placeholder: placeholder || label || null }, props, { onChange: this.handleSelectChange, onBlur: this.handleSelectBlur, __source: {
                fileName: _jsxFileName,
                lineNumber: 70
              }
            })) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Tag, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ className: innerInputStyle, name: name, placeholder: placeholder || label || null, type: type }, props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              }
            })),
            !noErrorText && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _Text__WEBPACK_IMPORTED_MODULE_13__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].errorText, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 73
                }
              },
              error || react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                'span',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                  }
                },
                '\xA0'
              )
            )
          )
        )
      );
    }
  }]);

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

Input.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  error: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  inputStyle: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any,
  noErrorText: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  inputContainerStyle: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any
};

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./src/components/Input/styles.js":
/*!****************************************!*\
  !*** ./src/components/Input/styles.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  align-items: flex-start;\n  font-family: ', ';\n  width: 100%;\n'], ['\n  align-items: flex-start;\n  font-family: ', ';\n  width: 100%;\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  margin: .5em;\n  width: 100%;\n  justify-content: flex-start;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n'], ['\n  flex-direction: row;\n  margin: .5em;\n  width: 100%;\n  justify-content: flex-start;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  min-height: 5em;\n'], ['\n  min-height: 5em;\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 2;\n  margin-right: 1em;\n  align-items: flex-start;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n'], ['\n  flex: 2;\n  margin-right: 1em;\n  align-items: flex-start;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 5;\n  align-items: flex-start;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n'], ['\n  flex: 5;\n  align-items: flex-start;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  box-sizing: border-box;\n  width: calc(100% - .8em);\n  border: 0.5px solid transparent;\n  border-radius: .25rem;\n  padding: .8em;\n  font-family: ', ';\n  font-size: 1.2rem;\n  background-color: #F5F8F9;\n\n  &:focus {\n    border: 0.5px solid ', ';\n  }\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n'], ['\n  box-sizing: border-box;\n  width: calc(100% - .8em);\n  border: 0.5px solid transparent;\n  border-radius: .25rem;\n  padding: .8em;\n  font-family: ', ';\n  font-size: 1.2rem;\n  background-color: #F5F8F9;\n\n  &:focus {\n    border: 0.5px solid ', ';\n  }\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  border: 0.5px solid ', ';\n  transition: all 0.15s ease-out;\n'], ['\n  border: 0.5px solid ', ';\n  transition: all 0.15s ease-out;\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-size: 1rem;\n  font-weight: 400;\n  margin-bottom: 1.6rem;\n'], ['\n  font-size: 1rem;\n  font-weight: 400;\n  margin-bottom: 1.6rem;\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  color: ', ';\n  font-size: .9rem;\n  margin-top: 0.4em;\n  font-family: inherit;\n  transition: all 0.15s ease-out;\n\n  @media (max-width: ', ') {\n    margin-top: .2em;\n  }\n'], ['\n  color: ', ';\n  font-size: .9rem;\n  margin-top: 0.4em;\n  font-family: inherit;\n  transition: all 0.15s ease-out;\n\n  @media (max-width: ', ') {\n    margin-top: .2em;\n  }\n']);




var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["typography"].primaryFont);

var inputContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var inputTextAreaStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3);

var inputLabelContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var inputFieldContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var inputBaseStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["typography"].primaryFont, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var inputErrorStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].errorText);

var labelText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8);

var errorText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].errorText, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var styles = {
  mainContainer: mainContainer,
  inputContainer: inputContainer,
  inputLabelContainer: inputLabelContainer,
  inputFieldContainer: inputFieldContainer,
  inputBaseStyle: inputBaseStyle,
  inputTextAreaStyle: inputTextAreaStyle,
  inputErrorStyle: inputErrorStyle,
  labelText: labelText,
  errorText: errorText
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/components/Modal/index.js":
/*!***************************************!*\
  !*** ./src/components/Modal/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/components/Modal/styles.js");
var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/components/Modal/index.js';







var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
      label = _ref.label,
      handleClose = _ref.handleClose,
      style = _ref.style,
      children = _ref.children;

  var modalStyle = style ? Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].modalContainer, style) : Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].modalContainer);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    react_modal__WEBPACK_IMPORTED_MODULE_2___default.a,
    {
      isOpen: isOpen,
      contentLabel: label,
      onRequestClose: handleClose,
      className: modalStyle,
      overlayClassName: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_4__["default"].overlayContainer),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    },
    children
  );
};

Modal.propTypes = {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  handleClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/components/Modal/styles.js":
/*!****************************************!*\
  !*** ./src/components/Modal/styles.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  display: flex;\n  flex-direction: column;\n  padding: 2em;\n  margin-top: 10%;\n  background-color: ', ';\n  border-radius: 4px;\n  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.25);\n  transition: all 300ms ease-out;\n\n  @media (max-width: ', ') {\n    margin-top: 0;\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  padding: 2em;\n  margin-top: 10%;\n  background-color: ', ';\n  border-radius: 4px;\n  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.25);\n  transition: all 300ms ease-out;\n\n  @media (max-width: ', ') {\n    margin-top: 0;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  position: fixed;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 1em;\n  background-color: rgba(0, 0, 0, 0.5);\n\n  @media (max-width: ', ') {\n    align-items: center;\n  }\n\n'], ['\n  position: fixed;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 1em;\n  background-color: rgba(0, 0, 0, 0.5);\n\n  @media (max-width: ', ') {\n    align-items: center;\n  }\n\n']);




var modalContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var overlayContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var styles = {
  modalContainer: modalContainer,
  overlayContainer: overlayContainer
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/components/Navbar/index.js":
/*!****************************************!*\
  !*** ./src/components/Navbar/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Container */ "./src/components/Container/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ "./src/components/Button/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./src/components/Navbar/styles.js");
var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/components/Navbar/index.js';









var Navbar = function Navbar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _Container__WEBPACK_IMPORTED_MODULE_3__["default"],
    { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_5__["default"].mainContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _Container__WEBPACK_IMPORTED_MODULE_3__["default"],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'a',
        { href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { alt: 'bitcharge-logo', className: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_5__["default"].logoImageStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1532990484/icons/bitcharge-logo-secondary.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        })
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _Container__WEBPACK_IMPORTED_MODULE_3__["default"],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _Button__WEBPACK_IMPORTED_MODULE_4__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], link: true, to: '/profile', style: _styles__WEBPACK_IMPORTED_MODULE_5__["default"].profileTextStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        'My Bitcharge'
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/Navbar/styles.js":
/*!*****************************************!*\
  !*** ./src/components/Navbar/styles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  height: 4.5em;\n  padding-left: 3em;\n  padding-right: 3em;\n  color: ', ';\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n\n  @media (max-width: ', ') {\n    padding-left: 1em;\n    padding-right: 1em;\n  }\n'], ['\n  background-color: ', ';\n  height: 4.5em;\n  padding-left: 3em;\n  padding-right: 3em;\n  color: ', ';\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n\n  @media (max-width: ', ') {\n    padding-left: 1em;\n    padding-right: 1em;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n'], ['\n  font-weight: 600;\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 400;\n  font-size: 1em;\n  padding-right: 1em;\n\n  @media (max-width: ', ') {\n    padding-right: .1em;\n    font-size: 0.9em;\n  }\n'], ['\n  font-weight: 400;\n  font-size: 1em;\n  padding-right: 1em;\n\n  @media (max-width: ', ') {\n    padding-right: .1em;\n    font-size: 0.9em;\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 150px;\n  height: auto;\n\n  @media (max-width: ', ') {\n    width: 120px;\n    height: auto;\n  }\n'], ['\n  width: 150px;\n  height: auto;\n\n  @media (max-width: ', ') {\n    width: 120px;\n    height: auto;\n  }\n']);




var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var logoTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2);

var profileTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var logoImageStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var styles = {
  mainContainer: mainContainer,
  logoTextStyle: logoTextStyle,
  logoImageStyle: logoImageStyle,
  profileTextStyle: profileTextStyle
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/components/Scroll/index.js":
/*!****************************************!*\
  !*** ./src/components/Scroll/index.js ***!
  \****************************************/
/*! exports provided: ScrollToTopOnMount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToTopOnMount", function() { return ScrollToTopOnMount; });
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var ScrollToTopOnMount = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ScrollToTopOnMount, _Component);

  function ScrollToTopOnMount() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ScrollToTopOnMount);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (ScrollToTopOnMount.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(ScrollToTopOnMount)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ScrollToTopOnMount, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return ScrollToTopOnMount;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/components/Spinner/index.js":
/*!*****************************************!*\
  !*** ./src/components/Spinner/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/components/Spinner/index.js';

var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n    0% {\n    transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  '], ['\n    0% {\n    transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  ']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n    display: inline-block;\n    position: relative;\n    width: ', ';\n    height: ', ';\n  '], ['\n    display: inline-block;\n    position: relative;\n    width: ', ';\n    height: ', ';\n  ']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: ', ';\n    height: ', ';\n    margin: ', ';;\n    border: ', ' solid ', ';\n    border-radius: 50%;\n    animation: ', ' 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: ', ' transparent transparent transparent;\n  '], ['\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: ', ';\n    height: ', ';\n    margin: ', ';;\n    border: ', ' solid ', ';\n    border-radius: 50%;\n    animation: ', ' 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: ', ' transparent transparent transparent;\n  ']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n    animation-delay: -0.45s;\n  '], ['\n    animation-delay: -0.45s;\n  ']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n    animation-delay: -0.3s;\n  '], ['\n    animation-delay: -0.3s;\n  ']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n    animation-delay: -0.15s;\n  '], ['\n    animation-delay: -0.15s;\n  ']);





var Spinner = function Spinner(_ref) {
  var width = _ref.width,
      size = _ref.size,
      color = _ref.color;

  var rotateDelay = Object(emotion__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_templateObject);

  var ring = Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2, size + 'px', size + 'px');

  var innerRing1 = Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3, size + 'px', size + 'px', width + 'px', width + 'px', color, rotateDelay, color);

  var innerRing2 = Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject4);

  var innerRing3 = Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject5);

  var innerRing4 = Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject6);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    'div',
    { className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(ring), __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      }
    },
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', { className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(innerRing1), __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      }
    }),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', { className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(innerRing2), __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      }
    }),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', { className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(innerRing3), __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      }
    }),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', { className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(innerRing4), __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      }
    })
  );
};

Spinner.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

Spinner.defaultProps = {
  width: 6,
  size: 64,
  color: '#fff'
};

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./src/components/Text/index.js":
/*!**************************************!*\
  !*** ./src/components/Text/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/components/Text/styles.js");

var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/components/Text/index.js';





var Text = function Text(_ref) {
  var tag = _ref.tag,
      children = _ref.children,
      unstyled = _ref.unstyled,
      style = _ref.style,
      props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ['tag', 'children', 'unstyled', 'style']);

  var textStyle = '' + _styles__WEBPACK_IMPORTED_MODULE_3__["default"].base;
  var Tag = 'p';

  if (tag) {
    textStyle = textStyle + ' ' + _styles__WEBPACK_IMPORTED_MODULE_3__["default"][tag];
    Tag = tag;
  }

  if (unstyled) {
    textStyle = textStyle + ' ' + _styles__WEBPACK_IMPORTED_MODULE_3__["default"].unstyledText;
  }

  if (style) {
    textStyle = textStyle + ' ' + style;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    Tag,
    { className: textStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    },
    children
  );
};

Text.propTypes = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired,
  unstyled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./src/components/Text/styles.js":
/*!***************************************!*\
  !*** ./src/components/Text/styles.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-bottom: .5rem;\n  font-weight: 400;\n  line-height: 1.2;\n  font-family: inherit;\n  font-size: 1rem;\n'], ['\n  margin-bottom: .5rem;\n  font-weight: 400;\n  line-height: 1.2;\n  font-family: inherit;\n  font-size: 1rem;\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-size: ', ';\n'], ['\n  font-size: ', ';\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-size: ', '\n'], ['\n  font-size: ', '\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-bottom: 0;\n'], ['\n  margin-bottom: 0;\n']);




var base = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject);
var h1 = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["typography"].h1);

var h2 = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["typography"].h2);

var h3 = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["typography"].h3);

var h4 = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["typography"].h4);

var h5 = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["typography"].h5);

var h6 = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["typography"].h6);

var unstyledText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4);

var styles = {
  base: base,
  h1: h1,
  h2: h2,
  h3: h3,
  h4: h4,
  h5: h5,
  h6: h6,
  unstyledText: unstyledText
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/containers/DashboardNavbar/index.js":
/*!*************************************************!*\
  !*** ./src/containers/DashboardNavbar/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-media */ "react-media");
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_media__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions/auth */ "./src/store/actions/auth.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles */ "./src/containers/DashboardNavbar/styles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");
var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/containers/DashboardNavbar/index.js';














var Navbar = function Navbar(_ref) {
  var match = _ref.match,
      logoutAction = _ref.logoutAction;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_6__["default"],
    { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].mainContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _components_Container__WEBPACK_IMPORTED_MODULE_6__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].logoContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'a',
        { href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { alt: 'bitcharge-logo', className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].logoImageStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1532990484/icons/bitcharge-logo-secondary.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        })
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react_media__WEBPACK_IMPORTED_MODULE_5___default.a,
        { query: '(max-width: ' + _styles__WEBPACK_IMPORTED_MODULE_10__["breakpoints"].tablet + ')', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        },
        function (matches) {
          return matches ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_6__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].rightNavContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
              { onClick: logoutAction, link: true, style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].logoutStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                }
              },
              'Logout'
            )
          ) : null;
        }
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _components_Container__WEBPACK_IMPORTED_MODULE_6__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].centerNavContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
        {
          tag: react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
          to: '/profile',
          link: true,
          style: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].linkStyle, match.isExact ? _styles__WEBPACK_IMPORTED_MODULE_9__["default"].activeLinkStyle : null),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        },
        'Profile'
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_4__["NavLink"], to: '/profile/addresses', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].linkStyle, activeClassName: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].activeLinkStyle), __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        },
        'Addresses'
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_4__["NavLink"], to: '/profile/settings', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].linkStyle, activeClassName: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].activeLinkStyle), __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        },
        'Settings'
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      react_media__WEBPACK_IMPORTED_MODULE_5___default.a,
      { query: '(max-width: ' + _styles__WEBPACK_IMPORTED_MODULE_10__["breakpoints"].tablet + ')', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      },
      function (matches) {
        return !matches ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_6__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].rightNavContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
            { onClick: logoutAction, link: true, style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].logoutStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              }
            },
            'Logout'
          )
        ) : null;
      }
    )
  );
};

Navbar.propTypes = {
  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  logoutAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, { logoutAction: _store_actions_auth__WEBPACK_IMPORTED_MODULE_8__["logout"] })(Navbar)));

/***/ }),

/***/ "./src/containers/DashboardNavbar/styles.js":
/*!**************************************************!*\
  !*** ./src/containers/DashboardNavbar/styles.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  margin: 0 auto;\n  min-height: 4.5em;\n  color: ', ';\n  padding: 0 3em;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    padding-left: 1em;\n    padding-right: 1em;\n    flex-direction: column;\n    padding-top: 1em;\n  }\n'], ['\n  background-color: ', ';\n  margin: 0 auto;\n  min-height: 4.5em;\n  color: ', ';\n  padding: 0 3em;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    padding-left: 1em;\n    padding-right: 1em;\n    flex-direction: column;\n    padding-top: 1em;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    border-bottom: 1px solid ', ';\n    padding-bottom: 1em;\n  }\n'], ['\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    border-bottom: 1px solid ', ';\n    padding-bottom: 1em;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  height: 4.5em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    height: 4.5em;\n  }\n\n  @media (min-width: ', ' and max-width: ', ') {\n    width: 60%;\n    height: 4.5em;\n  }\n'], ['\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  height: 4.5em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    height: 4.5em;\n  }\n\n  @media (min-width: ', ' and max-width: ', ') {\n    width: 60%;\n    height: 4.5em;\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 400;\n  padding-top: 1.05em;\n  padding-bottom: 1.05em;\n  border-radius: 0;\n\n  @media (max-width: ', ') {\n    padding-left: 1em;\n    padding-right: 1em;\n    padding-top: 1.3em;\n    padding-bottom: 1.3em;\n    font-size: 1em;\n  }\n'], ['\n  font-weight: 400;\n  padding-top: 1.05em;\n  padding-bottom: 1.05em;\n  border-radius: 0;\n\n  @media (max-width: ', ') {\n    padding-left: 1em;\n    padding-right: 1em;\n    padding-top: 1.3em;\n    padding-bottom: 1.3em;\n    font-size: 1em;\n  }\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 400;\n  font-size: 1em;\n\n  @media (max-width: ', ') {\n    font-weight: 600;\n    font-size: 1em;\n    padding-right: 0.5em;\n  }\n'], ['\n  font-weight: 400;\n  font-size: 1em;\n\n  @media (max-width: ', ') {\n    font-weight: 600;\n    font-size: 1em;\n    padding-right: 0.5em;\n  }\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  border-bottom: 4px solid ', ';\n'], ['\n  border-bottom: 4px solid ', ';\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n'], ['\n  font-weight: 600;\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 150px;\n  height: auto;\n\n  @media (max-width: ', ') {\n    width: 120px;\n    height: auto;\n  }\n'], ['\n  width: 150px;\n  height: auto;\n\n  @media (max-width: ', ') {\n    width: 120px;\n    height: auto;\n  }\n']);




var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var logoContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray);

var centerNavContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var linkStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var logoutStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var activeLinkStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText);

var logoTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7);

var logoImageStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var styles = {
  mainContainer: mainContainer,
  logoContainer: logoContainer,
  centerNavContainer: centerNavContainer,
  logoTextStyle: logoTextStyle,
  logoImageStyle: logoImageStyle,
  linkStyle: linkStyle,
  logoutStyle: logoutStyle,
  activeLinkStyle: activeLinkStyle
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/containers/PrivateRoute.js":
/*!****************************************!*\
  !*** ./src/containers/PrivateRoute.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/containers/PrivateRoute.js';





var PrivateRoute = function PrivateRoute(_ref) {
  var isAuthenticated = _ref.isAuthenticated,
      rest = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ['isAuthenticated']);

  if (isAuthenticated) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Redirect"], { to: { pathname: '/login' }, __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    });
  }
};
PrivateRoute.propTypes = {
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, null)(PrivateRoute)));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ "./src/server.js");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);



var server = http__WEBPACK_IMPORTED_MODULE_1___default.a.createServer(_server__WEBPACK_IMPORTED_MODULE_0__["default"]);

var currentApp = _server__WEBPACK_IMPORTED_MODULE_0__["default"];

server.listen("3000" || 3000, function (error) {
  if (error) {
    console.log(error);
  }

  console.log('🚀 started');
});

if (true) {
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept(/*! ./server */ "./src/server.js", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ "./src/server.js");
(function () {
    console.log('🔁  HMR Reloading `./server`...');
    server.removeListener('request', currentApp);
    var newApp = __webpack_require__(/*! ./server */ "./src/server.js").default;
    server.on('request', newApp);
    currentApp = newApp;
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _screens_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/Home */ "./src/screens/Home/index.js");
/* harmony import */ var _screens_Privacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/Privacy */ "./src/screens/Privacy/index.js");
/* harmony import */ var _screens_Terms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/Terms */ "./src/screens/Terms/index.js");
/* harmony import */ var _screens_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/About */ "./src/screens/About/index.js");
/* harmony import */ var _screens_Signup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/Signup */ "./src/screens/Signup/index.js");
/* harmony import */ var _screens_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screens/Login */ "./src/screens/Login/index.js");
/* harmony import */ var _screens_ForgotPassword__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screens/ForgotPassword */ "./src/screens/ForgotPassword/index.js");
/* harmony import */ var _screens_Profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./screens/Profile */ "./src/screens/Profile/index.js");
/* harmony import */ var _screens_Dashboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./screens/Dashboard */ "./src/screens/Dashboard/index.js");
/* harmony import */ var _screens_AddAddress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./screens/AddAddress */ "./src/screens/AddAddress/index.js");
/* harmony import */ var _screens_SignupConfirmation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./screens/SignupConfirmation */ "./src/screens/SignupConfirmation/index.js");













var routes = [{
  path: '/signup',
  component: _screens_Signup__WEBPACK_IMPORTED_MODULE_4__["default"],
  name: 'Signup',
  exact: true
}, {
  path: '/login',
  component: _screens_Login__WEBPACK_IMPORTED_MODULE_5__["default"],
  name: 'Login',
  exact: true
}, {
  path: '/confirm',
  component: _screens_SignupConfirmation__WEBPACK_IMPORTED_MODULE_10__["default"],
  name: 'SignupConfirmation'
}, {
  path: '/forgot',
  component: _screens_ForgotPassword__WEBPACK_IMPORTED_MODULE_6__["default"],
  name: 'Forgot',
  exact: true
}, {
  path: '/profile',
  component: _screens_Dashboard__WEBPACK_IMPORTED_MODULE_8__["default"],
  name: 'Dashboard',
  private: true
}, {
  path: '/address/new',
  component: _screens_AddAddress__WEBPACK_IMPORTED_MODULE_9__["default"],
  name: 'New Address',
  private: true
}, {
  path: '/privacy',
  component: _screens_Privacy__WEBPACK_IMPORTED_MODULE_1__["default"],
  name: 'Privacy',
  exact: true
}, {
  path: '/terms',
  component: _screens_Terms__WEBPACK_IMPORTED_MODULE_2__["default"],
  name: 'Terms',
  exact: true
}, {
  path: '/about',
  component: _screens_About__WEBPACK_IMPORTED_MODULE_3__["default"],
  name: 'Terms',
  exact: true
}, {
  path: '/',
  component: _screens_Home__WEBPACK_IMPORTED_MODULE_0__["default"],
  name: 'Home',
  exact: true
}, {
  path: '/:username',
  component: _screens_Profile__WEBPACK_IMPORTED_MODULE_7__["default"],
  name: 'Profile'
}];

/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./src/screens/About/index.js":
/*!************************************!*\
  !*** ./src/screens/About/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-media */ "react-media");
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_media__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Navbar */ "./src/components/Navbar/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _components_Scroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Scroll */ "./src/components/Scroll/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles */ "./src/screens/About/styles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");





var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/About/index.js';















var About = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(About, _Component);

  function About() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, About);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (About.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(About)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(About, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
        { fluid: true, fullHeight: true, style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Scroll__WEBPACK_IMPORTED_MODULE_13__["ScrollToTopOnMount"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
          { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
            { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].headerContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
              { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].headerTextStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                }
              },
              'About Bitcharge'
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              react_media__WEBPACK_IMPORTED_MODULE_8___default.a,
              { query: '(max-width: ' + _styles__WEBPACK_IMPORTED_MODULE_15__["breakpoints"].tablet + ')', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25
                }
              },
              function (matches) {
                return matches ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_9__["default"], { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].workItemTextBorder, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  }
                }) : null;
              }
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].detailsContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              }
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  }
                },
                'What is Bitcharge ?'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                  }
                },
                'Bitcharge is a platform for freelancers, businesses and just regular people to accept payments in their favourite cryptocurrency. You can get started by signing up on ',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"],
                  { to: '/', className: '' + Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].linkText), __source: {
                      fileName: _jsxFileName,
                      lineNumber: 35
                    }
                  },
                  'Bitcharge.com'
                ),
                ' with a username and creating a profile.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                  }
                },
                'How does it work ?'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                  }
                },
                'When you signup with Bitcharge, you get a public link that you can share with the world. You can add multiple currencies to your profile and never worry about forgetting or finding your addresses. You can edit your addresses anytime, making sure people from whom you would like to receive a payment always have your active crypto address.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  }
                },
                'I don\'t see my favourite cryptocurrency ?'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  }
                },
                'We are really sorry about that. We are working hard to get every cryptocurrency on our platform. If you want us to add a particular cryptocurrency, send us an email at ',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  'a',
                  { className: '' + Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].linkText), href: 'mailto:support@bitcharge.co', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 51
                    }
                  },
                  'support@bitcharge.co'
                ),
                ' and we would be more than happy to include it in our list.'
              )
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        })
      );
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/screens/About/styles.js":
/*!*************************************!*\
  !*** ./src/screens/About/styles.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  label: home-main-cntr;\n\n  @media (max-width: ', ') {\n    background-color: ', ';\n  }\n'], ['\n  background-color: ', ';\n  label: home-main-cntr;\n\n  @media (max-width: ', ') {\n    background-color: ', ';\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  min-height: calc(100vh - 4.5em);\n  border-top: 2px solid ', ';\n  align-items: center;\n  label: home-body-cntr;\n\n  @media (max-width: ', ') {\n    border-bottom: 1px solid ', ';\n  }\n'], ['\n  min-height: calc(100vh - 4.5em);\n  border-top: 2px solid ', ';\n  align-items: center;\n  label: home-body-cntr;\n\n  @media (max-width: ', ') {\n    border-bottom: 1px solid ', ';\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  height: 7px;\n  width: 60%;\n  margin-top: .5em;\n  background-color: ', ';\n\n  @media (max-width: ', ') {\n    height: 6px;\n  }\n'], ['\n  height: 7px;\n  width: 60%;\n  margin-top: .5em;\n  background-color: ', ';\n\n  @media (max-width: ', ') {\n    height: 6px;\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 5em;\n  margin-bottom: 3em;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    margin-top: 3em;\n    margin-bottom: 0em;\n  }\n'], ['\n  margin-top: 5em;\n  margin-bottom: 3em;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    margin-top: 3em;\n    margin-bottom: 0em;\n  }\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n\n  @media (max-width: ', ') {\n    font-weight: 500;\n    font-size: 2em;\n  }\n'], ['\n  font-weight: 600;\n\n  @media (max-width: ', ') {\n    font-weight: 500;\n    font-size: 2em;\n  }\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 65%;\n  margin-top: 3em;\n  margin-bottom: 5em;\n  background-color: ', ';\n  border-radius: 5px;\n  border: 1px solid ', ';\n  padding: 4em 5em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    padding: 1.5em;\n    border: 0;\n  }\n'], ['\n  width: 65%;\n  margin-top: 3em;\n  margin-bottom: 5em;\n  background-color: ', ';\n  border-radius: 5px;\n  border: 1px solid ', ';\n  padding: 4em 5em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    padding: 1.5em;\n    border: 0;\n  }\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 2em 0;\n  border-bottom: 1px dashed ', ';\n\n  &:last-child {\n    border-bottom: 0;\n  }\n'], ['\n  padding: 2em 0;\n  border-bottom: 1px dashed ', ';\n\n  &:last-child {\n    border-bottom: 0;\n  }\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n  margin: 1em 0 1.5em 0;\n'], ['\n  font-weight: 500;\n  margin: 1em 0 1.5em 0;\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  color: ', ';\n  line-height: 1.5;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    font-size: 1em;\n  }\n'], ['\n  color: ', ';\n  line-height: 1.5;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    font-size: 1em;\n  }\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  color: ', ';\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.15s ease-out;\n\n  &:hover {\n    color: ', ';\n  }\n'], ['\n  color: ', ';\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.15s ease-out;\n\n  &:hover {\n    color: ', ';\n  }\n']);





var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].background, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white);

var bodyContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder);

var workItemTextBorder = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var headerContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var headerTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var detailsContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.1, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder), _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var sectionContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder);

var sectionHeader = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8);

var bodyText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText), _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var linkText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].linkText, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].linkText));

var styles = {
  mainContainer: mainContainer,
  bodyContainer: bodyContainer,
  detailsContainer: detailsContainer,
  headerContainer: headerContainer,
  workItemTextBorder: workItemTextBorder,
  headerTextStyle: headerTextStyle,
  sectionContainer: sectionContainer,
  sectionHeader: sectionHeader,
  bodyText: bodyText,
  linkText: linkText
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/AddAddress/AddAddressSuccess/index.js":
/*!***********************************************************!*\
  !*** ./src/screens/AddAddress/AddAddressSuccess/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./src/screens/AddAddress/AddAddressSuccess/styles.js");
var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/AddAddress/AddAddressSuccess/index.js';










var AddAddressSuccess = function AddAddressSuccess(_ref) {
  var hostRef = _ref.hostRef,
      onAddNewAddress = _ref.onAddNewAddress;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_3__["default"],
    { hostRef: hostRef, style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].successContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_4__["default"],
      { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].successHeaderText, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      'Address added successfully.'
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_4__["default"],
      { tag: 'h5', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      },
      'Your address was added successfully, would you like to add another address. You can access all you addresses in your dashboard too.'
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _components_Container__WEBPACK_IMPORTED_MODULE_3__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].buttonContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_5__["default"],
        { onClick: onAddNewAddress, primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].submitButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        'Add Address'
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_5__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], to: '/profile', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].cancelButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        },
        'Skip'
      )
    )
  );
};

AddAddressSuccess.propTypes = {
  hostRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  onAddNewAddress: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/* harmony default export */ __webpack_exports__["default"] = (AddAddressSuccess);

/***/ }),

/***/ "./src/screens/AddAddress/AddAddressSuccess/styles.js":
/*!************************************************************!*\
  !*** ./src/screens/AddAddress/AddAddressSuccess/styles.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles */ "./src/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 0 4em;\n  width: 100%;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n  }\n'], ['\n  padding: 0 4em;\n  width: 100%;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  text-align: left;\n  font-weight: 600;\n  margin-bottom: 2em;\n'], ['\n  text-align: left;\n  font-weight: 600;\n  margin-bottom: 2em;\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  justify-content: flex-start;\n  padding-top: 2em;\n'], ['\n  flex-direction: row;\n  justify-content: flex-start;\n  padding-top: 2em;\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: transparent;\n  color: ', ';\n  label: login-cancel-button;\n\n  &:hover {\n    color: ', ';\n  }\n'], ['\n  background-color: transparent;\n  color: ', ';\n  label: login-cancel-button;\n\n  &:hover {\n    color: ', ';\n  }\n']);





var successContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var successHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2);

var buttonContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3);

var cancelButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.4, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText));

var styles = {
  successContainer: successContainer,
  successHeaderText: successHeaderText,
  cancelButton: cancelButton,
  buttonContainer: buttonContainer
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/AddAddress/AddressForm/index.js":
/*!*****************************************************!*\
  !*** ./src/screens/AddAddress/AddressForm/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/promise */ "babel-runtime/core-js/promise");
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/Input */ "./src/components/Input/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/Spinner */ "./src/components/Spinner/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../api */ "./src/api/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./styles */ "./src/screens/AddAddress/AddressForm/styles.js");






var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/AddAddress/AddressForm/index.js',
    _this = undefined;



















var validationSchema = yup__WEBPACK_IMPORTED_MODULE_11__["object"]().shape({
  currency: yup__WEBPACK_IMPORTED_MODULE_11__["string"]().required('Currency is required'),
  address: yup__WEBPACK_IMPORTED_MODULE_11__["string"]().min(30).required('Address is required')
});

var selectStyles = {
  control: function control(base) {
    return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, base, _styles__WEBPACK_IMPORTED_MODULE_18__["default"].selectStyle);
  },
  container: function container(base) {
    return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, base, { width: '100%' });
  },
  indicatorsContainer: function indicatorsContainer(base) {
    return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, base, { transition: 'all 0.3s ease-out' });
  },
  option: function option(base) {
    return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, _styles__WEBPACK_IMPORTED_MODULE_18__["default"].dropdownItemStyle);
  }
};

var DropdownItem = function DropdownItem(props) {
  var isDisabled = props.isDisabled,
      data = props.data;

  return !isDisabled ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
    react_select__WEBPACK_IMPORTED_MODULE_7__["components"].Option,
    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      }
    }),
    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('img', { alt: 'dropdown-item', src: data.icon, className: Object(emotion__WEBPACK_IMPORTED_MODULE_8__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["default"].dropdownItemImage), __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      }
    }),
    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_16__["default"],
      { tag: 'h5', unstyled: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      },
      data.name
    )
  ) : null;
};

var getCurrenciesOption = function getCurrenciesOption(inputVaue) {
  return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function () {
    var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(resolve, reject) {
      var data;
      return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _api__WEBPACK_IMPORTED_MODULE_17__["default"].getCurrencies();

            case 3:
              data = _context.sent;

              resolve(data.currencies);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context['catch'](0);

              reject(_context.t0);

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 7]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

var AddressForm = function AddressForm(_ref2) {
  var onSubmit = _ref2.onSubmit,
      onCancel = _ref2.onCancel,
      hostRef = _ref2.hostRef;

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
    { hostRef: hostRef, style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].formContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      }
    },
    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_9__["Formik"], {
      initialValues: { currency: '', address: '' },
      onSubmit: onSubmit,
      validationSchema: validationSchema,
      render: function render(_ref3) {
        var values = _ref3.values,
            touched = _ref3.touched,
            handleChange = _ref3.handleChange,
            handleBlur = _ref3.handleBlur,
            handleSubmit = _ref3.handleSubmit,
            handleReset = _ref3.handleReset,
            setFieldValue = _ref3.setFieldValue,
            setFieldTouched = _ref3.setFieldTouched,
            errors = _ref3.errors,
            isValid = _ref3.isValid,
            isSubmitting = _ref3.isSubmitting;

        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            }
          },
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_13__["default"], {
            label: 'Currency',
            name: 'currency',
            type: 'async-select',
            styles: selectStyles,
            components: { Option: DropdownItem },
            getOptionLabel: function getOptionLabel(_ref4) {
              var name = _ref4.name;
              return name;
            },
            getOptionValue: function getOptionValue(_ref5) {
              var symbol = _ref5.symbol;
              return symbol;
            },
            cacheOptions: true,
            defaultOptions: true,
            onChange: setFieldValue,
            onBlur: setFieldTouched,
            error: touched.currency && errors.currency,
            loadOptions: getCurrenciesOption,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_13__["default"], {
            label: 'Your address',
            name: 'address',
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.address,
            error: touched.address && errors.address,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].buttonContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 101
              }
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_14__["default"],
              {
                primary: true,
                disabled: !isValid || isSubmitting,
                type: 'submit',
                style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].submitButton,
                onClick: handleSubmit,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 102
                }
              },
              'Submit ',
              isSubmitting && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'span',
                { className: Object(emotion__WEBPACK_IMPORTED_MODULE_8__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["default"].spinnerIcon), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_15__["default"], { size: 20, width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                  }
                })
              )
            ),
            onCancel ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_14__["default"],
              { onClick: onCancel, link: true, style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].cancelButton, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 112
                }
              },
              'Cancel'
            ) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_14__["default"],
              { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"], to: '/profile', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].cancelButton, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 113
                }
              },
              'Skip'
            )
          )
        );
      }, __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      }
    })
  );
};

DropdownItem.propTypes = {
  isDisabled: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.boolean,
  data: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.obj
};

AddressForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  hostRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any
};

/* harmony default export */ __webpack_exports__["default"] = (AddressForm);

/***/ }),

/***/ "./src/screens/AddAddress/AddressForm/styles.js":
/*!******************************************************!*\
  !*** ./src/screens/AddAddress/AddressForm/styles.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles */ "./src/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 100%;\n  label: login-body-form-cntr;\n'], ['\n  width: 100%;\n  label: login-body-form-cntr;\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  justify-content: center;\n  padding-top: 1em;\n  margin-left: 1.6em;\n'], ['\n  flex-direction: row;\n  justify-content: center;\n  padding-top: 1em;\n  margin-left: 1.6em;\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-left: 0.5em;\n  label: login-submit-button-icon;\n'], ['\n  padding-left: 0.5em;\n  label: login-submit-button-icon;\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-left: 0.2em;\n'], ['\n  margin-left: 0.2em;\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: transparent;\n  color: ', ';\n  label: login-cancel-button;\n\n  &:hover {\n    color: ', ';\n  }\n'], ['\n  background-color: transparent;\n  color: ', ';\n  label: login-cancel-button;\n\n  &:hover {\n    color: ', ';\n  }\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-right: 1em;\n  width: 2em;\n  height: 2em;\n  border-radius: 50%;\n  border: 1px solid ', ';\n'], ['\n  margin-right: 1em;\n  width: 2em;\n  height: 2em;\n  border-radius: 50%;\n  border: 1px solid ', ';\n']);





var formContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject);

var buttonContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2);

var submitButtonIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3);

var spinnerIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4);

var cancelButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.4, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText));

var selectStyle = {
  boxSizing: 'border-box',
  width: 'calc(100% - .8em)',
  border: '0.5px solid transparent',
  borderRadius: '.25rem',
  padding: '.5em',
  fontFamily: _styles__WEBPACK_IMPORTED_MODULE_2__["typography"].primaryFont,
  fontSize: '1.2rem',
  backgroundColor: '#F5F8F9'
};

var dropdownItemStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '0.8em',
  maxWidth: '100%',
  transition: 'background 0.3s ease-out',
  '&:hover': {
    backgroundColor: _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary,
    color: _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white
  },
  '&:active': {
    backgroundColor: _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary,
    color: _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white
  },
  '&:last-child': {
    borderBottom: '1px solid ' + _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].background
  }
};

var dropdownItemImage = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white);

var styles = {
  formContainer: formContainer,
  buttonContainer: buttonContainer,
  submitButtonIcon: submitButtonIcon,
  spinnerIcon: spinnerIcon,
  cancelButton: cancelButton,
  selectStyle: selectStyle,
  dropdownItemStyle: dropdownItemStyle,
  dropdownItemImage: dropdownItemImage
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/AddAddress/index.js":
/*!*****************************************!*\
  !*** ./src/screens/AddAddress/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _AddressForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AddressForm */ "./src/screens/AddAddress/AddressForm/index.js");
/* harmony import */ var _AddAddressSuccess__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AddAddressSuccess */ "./src/screens/AddAddress/AddAddressSuccess/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _store_actions_address__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../store/actions/address */ "./src/store/actions/address.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./styles */ "./src/screens/AddAddress/styles.js");







var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/AddAddress/index.js';
















var AddAddress = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(AddAddress, _Component);

  function AddAddress(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, AddAddress);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (AddAddress.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(AddAddress)).call(this, props));

    _this.state = {
      isAddAddressSuccess: false
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.onAddNewAddress = _this.onAddNewAddress.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(AddAddress, [{
    key: 'handleSubmit',
    value: function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, bag) {
        var addressDetails, data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                addressDetails = {
                  currency: values.currency.symbol,
                  address: values.address
                };
                _context.prev = 1;
                _context.next = 4;
                return _api__WEBPACK_IMPORTED_MODULE_16__["default"].addAddress(addressDetails);

              case 4:
                data = _context.sent;

                bag.setSubmitting(false);
                this.setState({ isAddAddressSuccess: true });
                this.props.addAddress(data.address);
                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](1);

                bag.setSubmitting(false);
                bag.setErrors(_api__WEBPACK_IMPORTED_MODULE_16__["default"].setErrors(_context.t0.response.data.errors.details.errors));

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 10]]);
      }));

      function handleSubmit(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: 'onAddNewAddress',
    value: function onAddNewAddress() {
      this.setState({ isAddAddressSuccess: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var PoseAddressForm = react_pose__WEBPACK_IMPORTED_MODULE_11___default()(_AddressForm__WEBPACK_IMPORTED_MODULE_14__["default"])({
        visible: { opacity: 1 },
        invisible: { opacity: 0, display: 'none' }
      });

      var PoseAddAddressSuccess = react_pose__WEBPACK_IMPORTED_MODULE_11___default()(_AddAddressSuccess__WEBPACK_IMPORTED_MODULE_15__["default"])({
        visible: { opacity: 1 },
        invisible: { opacity: 0, display: 'none' }
      });

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
        { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].heroContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].heroLogoContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'a',
              { href: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                }
              },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'bitcharge-logo', className: Object(emotion__WEBPACK_IMPORTED_MODULE_10__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["default"].logoImageStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1532990484/icons/bitcharge-logo-white.png', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                }
              })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].heroTextContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'add-address-avatar', className: Object(emotion__WEBPACK_IMPORTED_MODULE_10__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["default"].addressAvatarIconStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1535940306/hen-avatar.png', __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              }
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
              { tag: 'h3', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].heroText, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66
                }
              },
              'Add your addresses'
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].bodyContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PoseAddressForm, { pose: this.state.isAddAddressSuccess ? 'invisible' : 'visible', onSubmit: this.handleSubmit, __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PoseAddAddressSuccess, { pose: this.state.isAddAddressSuccess ? 'visible' : 'invisible', onAddNewAddress: this.onAddNewAddress, __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            }
          })
        )
      );
    }
  }]);

  return AddAddress;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

AddAddress.propTypes = {
  addAddress: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(null, { addAddress: _store_actions_address__WEBPACK_IMPORTED_MODULE_17__["addAddress"] })(AddAddress));

/***/ }),

/***/ "./src/screens/AddAddress/styles.js":
/*!******************************************!*\
  !*** ./src/screens/AddAddress/styles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  label: signup-main-cntr;\n  flex-direction: row;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n'], ['\n  background-color: ', ';\n  label: signup-main-cntr;\n  flex-direction: row;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 2;\n  background-color: ', ';\n  color: ', ';\n  padding: 0 2em;\n  label: signup-hero-cntr;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n'], ['\n  flex: 2;\n  background-color: ', ';\n  color: ', ';\n  padding: 0 2em;\n  label: signup-hero-cntr;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 1;\n  padding: 1em;\n  label: signup-hero-text-cntr;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n    height: auto;\n  }\n'], ['\n  flex: 1;\n  padding: 1em;\n  label: signup-hero-text-cntr;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n    height: auto;\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-top: 1em;\n'], ['\n  padding-top: 1em;\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 150px;\n  height: auto;\n'], ['\n  width: 150px;\n  height: auto;\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 150px;\n  height: 150px;\n  border-radius: 75px;\n  margin-bottom: .5em;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 125px;\n    height: 125px;\n  }\n'], ['\n  width: 150px;\n  height: 150px;\n  border-radius: 75px;\n  margin-bottom: .5em;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 125px;\n    height: 125px;\n  }\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 1em;\n  font-weight: 600;\n'], ['\n  margin-top: 1em;\n  font-weight: 600;\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 5;\n  align-items: center;\n  justify-content: center;\n  padding: 6em;\n  height: 100vh;\n  label: signup-body-cntr;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n    height: auto;\n  }\n'], ['\n  flex: 5;\n  align-items: center;\n  justify-content: center;\n  padding: 6em;\n  height: 100vh;\n  label: signup-body-cntr;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n    height: auto;\n  }\n']);




var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroTextContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroLogoContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4);

var logoImageStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5);

var addressAvatarIconStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7);

var bodyContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var styles = {
  mainContainer: mainContainer,
  heroContainer: heroContainer,
  heroLogoContainer: heroLogoContainer,
  addressAvatarIconStyle: addressAvatarIconStyle,
  heroTextContainer: heroTextContainer,
  heroText: heroText,
  logoImageStyle: logoImageStyle,
  bodyContainer: bodyContainer
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/Addresses/AddressItem/index.js":
/*!****************************************************!*\
  !*** ./src/screens/Addresses/AddressItem/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-copy-to-clipboard */ "react-copy-to-clipboard");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components/Input */ "./src/components/Input/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../components/Modal */ "./src/components/Modal/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../api */ "./src/api/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./styles */ "./src/screens/Addresses/AddressItem/styles.js");








var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Addresses/AddressItem/index.js';

















var validationSchema = yup__WEBPACK_IMPORTED_MODULE_13__["object"]().shape({
  address: yup__WEBPACK_IMPORTED_MODULE_13__["string"]().min(30).required('Address is required')
});

var EditAddressForm = function EditAddressForm(_ref) {
  var onSubmit = _ref.onSubmit,
      onCancel = _ref.onCancel,
      address = _ref.address;

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_11__["Formik"], {
    initialValues: { address: address },
    onSubmit: onSubmit,
    validationSchema: validationSchema,
    render: function render(_ref2) {
      var values = _ref2.values,
          handleChange = _ref2.handleChange,
          handleSubmit = _ref2.handleSubmit,
          handleBlur = _ref2.handleBlur,
          errors = _ref2.errors,
          touched = _ref2.touched,
          isValid = _ref2.isValid,
          isSubmitting = _ref2.isSubmitting;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressInputContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_16__["default"], {
          name: 'address',
          noErrorText: true,
          inputStyle: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressInputStyle,
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.address,
          error: touched.address && errors.address,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].optionsContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          },
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_17__["default"],
            {
              primary: true,
              disabled: !isValid || isSubmitting,
              onClick: handleSubmit,
              style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].editAddressSaveButton,
              type: 'submit',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              }
            },
            'Save'
          ),
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_17__["default"],
            {
              onClick: onCancel,
              style: Object(emotion__WEBPACK_IMPORTED_MODULE_10__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressActionButton, _styles__WEBPACK_IMPORTED_MODULE_20__["default"].editAddressCancelButton),
              link: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            },
            'Cancel'
          )
        )
      );
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  });
};

var AddressItem = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(AddressItem, _Component);

  function AddressItem(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, AddressItem);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, (AddressItem.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default()(AddressItem)).call(this, props));

    _this.state = {
      copiedAddress: false,
      deleteAddressModal: false,
      isEditing: false
    };

    _this.onCopyAddress = function () {
      _this.setState({ copied: true });
      setInterval(function () {
        _this.setState({ copied: false });
      }, 3000);
    };

    _this.onEdit = function () {
      _this.setState({ isEditing: true });
    };

    _this.onDeleteAddress = function () {
      _this.setState({ deleteAddressModal: true });
    };

    _this.handleDeleteAddress = function () {
      _this.props.deleteAddress(_this.props.address);
      _this.closeDeleteAddressModal();
    };

    _this.closeDeleteAddressModal = function () {
      _this.setState({ deleteAddressModal: false });
    };

    _this.renderDeleteModal = function () {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_Modal__WEBPACK_IMPORTED_MODULE_18__["default"],
        { label: 'Delete Address', style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].deleteAddressModalStyle, isOpen: _this.state.deleteAddressModal, handleClose: _this.closeDeleteAddressModal, __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
          { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].deleteAddressHeaderStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            }
          },
          'Are you sure you want to delete this address?'
        ),
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].deleteAddressModalbuttonContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 129
            }
          },
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_17__["default"],
            { error: true, link: true, onClick: _this.handleDeleteAddress, __source: {
                fileName: _jsxFileName,
                lineNumber: 130
              }
            },
            'Delete'
          ),
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_17__["default"],
            { link: true, onClick: _this.closeDeleteAddressModal, __source: {
                fileName: _jsxFileName,
                lineNumber: 131
              }
            },
            'Cancel'
          )
        )
      );
    };

    _this.onCancelEdit = function () {
      _this.setState({ isEditing: false });
    };

    _this.renderAddressText = function () {
      var address = _this.props.address;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressTextContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          }
        },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
          { tag: 'h6', style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressTextStyle, unstyled: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 145
            }
          },
          address.address
        ),
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].optionsContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 146
            }
          },
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_12__["CopyToClipboard"],
            { text: address.address, onCopy: _this.onCopyAddress, __source: {
                fileName: _jsxFileName,
                lineNumber: 147
              }
            },
            _this.state.copied ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
              { tag: 'h6', style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].copiedTextStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 149
                }
              },
              'Copied!'
            ) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_17__["default"],
              { onClick: _this.addNewAddress, style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressActionButton, link: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 150
                }
              },
              'Copy'
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_17__["default"],
            { onClick: _this.onEdit, style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressActionButton, link: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 153
              }
            },
            'Edit'
          ),
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_17__["default"],
            { onClick: _this.onDeleteAddress, style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressActionButton, link: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 154
              }
            },
            'Delete'
          )
        )
      );
    };

    _this.onEditSubmit = _this.onEditSubmit.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(AddressItem, [{
    key: 'onEditSubmit',
    value: function () {
      var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, bag) {
        var addressDetails, data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                addressDetails = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, this.props.address, { address: values.address });
                _context.prev = 1;
                _context.next = 4;
                return _api__WEBPACK_IMPORTED_MODULE_19__["default"].updateAddress(addressDetails);

              case 4:
                data = _context.sent;

                bag.setSubmitting(false);
                this.props.deleteAddress(this.props.address, { local: true });
                this.props.editAddress(data.address);
                this.setState({ isEditing: false });
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](1);

                bag.setSubmitting(false);
                bag.setErrors(_api__WEBPACK_IMPORTED_MODULE_19__["default"].setErrors(_context.t0.response.data.errors.details.errors));

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 11]]);
      }));

      function onEditSubmit(_x, _x2) {
        return _ref3.apply(this, arguments);
      }

      return onEditSubmit;
    }()
  }, {
    key: 'render',
    value: function render() {
      var address = this.props.address;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressItemContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          }
        },
        this.renderDeleteModal(),
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressIconContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 165
            }
          },
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement('img', { alt: 'adress-icon', src: address.currency.icon, className: Object(emotion__WEBPACK_IMPORTED_MODULE_10__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressIconImage), __source: {
              fileName: _jsxFileName,
              lineNumber: 166
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_20__["default"].addressIconText, __source: {
                fileName: _jsxFileName,
                lineNumber: 167
              }
            },
            address.currency.name
          )
        ),
        this.state.isEditing ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(EditAddressForm, { onSubmit: this.onEditSubmit, onCancel: this.onCancelEdit, address: this.props.address.address, __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          }
        }) : this.renderAddressText()
      );
    }
  }]);

  return AddressItem;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

EditAddressForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  address: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
};

AddressItem.propTypes = {
  address: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  editAddress: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  deleteAddress: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
};

/* harmony default export */ __webpack_exports__["default"] = (AddressItem);

/***/ }),

/***/ "./src/screens/Addresses/AddressItem/styles.js":
/*!*****************************************************!*\
  !*** ./src/screens/Addresses/AddressItem/styles.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 1.6em 0 1em 0;\n  border-bottom: .5px dotted ', ';\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n\n  &:last-child {\n    border-bottom: 0;\n  }\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 1em 0;\n  }\n'], ['\n  padding: 1.6em 0 1em 0;\n  border-bottom: .5px dotted ', ';\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n\n  &:last-child {\n    border-bottom: 0;\n  }\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 1em 0;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (max-width: ', ') {\n    margin-bottom: 1.5em;\n  }\n'], ['\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (max-width: ', ') {\n    margin-bottom: 1.5em;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 40px;\n  height: 40px;\n  margin-right: 1em;\n  border-radius: 50%;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 35px;\n    height: 35px;\n  }\n'], ['\n  width: 40px;\n  height: 40px;\n  margin-right: 1em;\n  border-radius: 50%;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 35px;\n    height: 35px;\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n  margin-bottom: 0px;\n\n  @media (max-width: ', ') {\n    font-size: 1.1em;\n  }\n\n'], ['\n  font-weight: 500;\n  margin-bottom: 0px;\n\n  @media (max-width: ', ') {\n    font-size: 1.1em;\n  }\n\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  align-items: flex-end;\n  justify-content: space-between;\n\n  @media (max-width: ', ') {\n    align-items: center;\n  }\n'], ['\n  align-items: flex-end;\n  justify-content: space-between;\n\n  @media (max-width: ', ') {\n    align-items: center;\n  }\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  align-items: flex-end;\n  width: 70%;\n  justify-content: space-between;\n\n  @media (max-width: ', ') {\n    width: 100%;\n  }\n'], ['\n  align-items: flex-end;\n  width: 70%;\n  justify-content: space-between;\n\n  @media (max-width: ', ') {\n    width: 100%;\n  }\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  align-self: flex-end;\n  margin: 0;\n  margin-right: -0.6em;\n  font-size: 1em;\n'], ['\n  align-self: flex-end;\n  margin: 0;\n  margin-right: -0.6em;\n  font-size: 1em;\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  margin-top: 0.6em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    justify-content: center;\n  }\n'], ['\n  flex-direction: row;\n  margin-top: 0.6em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    justify-content: center;\n  }\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-left: .5em;\n  padding-right: .5em;\n  font-size: 1rem;\n  color: ', ';\n\n  &:last-child {\n    padding-right: 0em;\n  }\n'], ['\n  padding-left: .5em;\n  padding-right: .5em;\n  font-size: 1rem;\n  color: ', ';\n\n  &:last-child {\n    padding-right: 0em;\n  }\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  color: ', ';\n'], ['\n  color: ', ';\n']),
    _templateObject11 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-size: 1rem;\n  margin-right: 1em;\n'], ['\n  font-size: 1rem;\n  margin-right: 1em;\n']),
    _templateObject12 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  color: ', ';\n  font-weight: 600;\n  padding-top: .9em;\n  padding-right: .2em;\n  font-size: 1rem;\n  transition: all 0.15s ease-out;\n'], ['\n  color: ', ';\n  font-weight: 600;\n  padding-top: .9em;\n  padding-right: .2em;\n  font-size: 1rem;\n  transition: all 0.15s ease-out;\n']),
    _templateObject13 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 3em 3em 2em 3em;\n'], ['\n  padding: 3em 3em 2em 3em;\n']),
    _templateObject14 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  @media (max-width: ', ') {\n    font-size: 0.8em;\n  }\n'], ['\n  @media (max-width: ', ') {\n    font-size: 0.8em;\n  }\n']),
    _templateObject15 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  justify-content: flex-end;\n  padding-top: 1.8em;\n  margin-right: -1.2em;\n'], ['\n  flex-direction: row;\n  justify-content: flex-end;\n  padding-top: 1.8em;\n  margin-right: -1.2em;\n']);




var addressItemContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var addressIconContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var addressIconImage = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var addressIconText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var addressTextContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var addressInputContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var addressInputStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7);
var optionsContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var addressActionButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary);

var editAddressCancelButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText);

var editAddressSaveButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject11);

var copiedTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary);

var deleteAddressModalStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject13);

var addressTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject14, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var deleteAddressModalbuttonContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject15);

var styles = {
  addressItemContainer: addressItemContainer,
  addressIconContainer: addressIconContainer,
  addressIconImage: addressIconImage,
  addressIconText: addressIconText,
  addressTextStyle: addressTextStyle,
  addressTextContainer: addressTextContainer,
  addressInputContainer: addressInputContainer,
  addressInputStyle: addressInputStyle,
  optionsContainer: optionsContainer,
  addressActionButton: addressActionButton,
  editAddressSaveButton: editAddressSaveButton,
  editAddressCancelButton: editAddressCancelButton,
  copiedTextStyle: copiedTextStyle,
  deleteAddressModalStyle: deleteAddressModalStyle,
  deleteAddressModalbuttonContainer: deleteAddressModalbuttonContainer
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/Addresses/index.js":
/*!****************************************!*\
  !*** ./src/screens/Addresses/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "babel-runtime/core-js/object/keys");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _AddressItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AddressItem */ "./src/screens/Addresses/AddressItem/index.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Spinner */ "./src/components/Spinner/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/Modal */ "./src/components/Modal/index.js");
/* harmony import */ var _AddAddress_AddressForm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../AddAddress/AddressForm */ "./src/screens/AddAddress/AddressForm/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _store_actions_address__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../store/actions/address */ "./src/store/actions/address.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./styles */ "./src/screens/Addresses/styles.js");








var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Addresses/index.js';


















var Addresses = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Addresses, _Component);

  function Addresses(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Addresses);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, (Addresses.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default()(Addresses)).call(this, props));

    _this.state = {
      addNewAddressModal: false,
      isAddAddressSuccess: false
    };

    _this.openAddNewAddressModal = function () {
      _this.setState({ addNewAddressModal: true });
    };

    _this.closeAddNewAddressModal = function () {
      _this.setState({ addNewAddressModal: false });
    };

    _this._renderUserAddresses = function (addresses) {
      var addressList = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(addresses).map(function (address) {
        return addresses[address];
      }).sort(function (a, b) {
        var textA = a.currency.name.toUpperCase();
        var textB = b.currency.name.toUpperCase();

        return textA.localeCompare(textB);
      });
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].addressesContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].addressesHeaderContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            }
          },
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].addressesHeaderTextStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              }
            },
            'My Addresses'
          ),
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_15__["default"],
            { onClick: _this.openAddNewAddressModal, style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].addNewAddressButton, primary: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              }
            },
            'Add new'
          ),
          _this._renderAddAddressModal()
        ),
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].addressesListContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            }
          },
          addressList.length && addressList.map(function (address) {
            return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_AddressItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
              key: address.address,
              address: address,
              deleteAddress: _this.props.deleteAddress,
              editAddress: _this.props.updateAddress,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              }
            });
          })
        )
      );
    };

    _this._renderLoading = function () {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].loadingContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_14__["default"], { size: 50, width: 7, color: _styles__WEBPACK_IMPORTED_MODULE_20__["colors"].lightText, __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        })
      );
    };

    _this._renderError = function () {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].loadingContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
          { tag: 'h3', __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            }
          },
          'Something went wrong. Try reloading the page'
        )
      );
    };

    _this._renderAddAddressModal = function () {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_Modal__WEBPACK_IMPORTED_MODULE_16__["default"],
        { label: 'Add New Address', style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].addAddressModalStyle, isOpen: _this.state.addNewAddressModal, handleClose: _this.closeAddNewAddressModal, __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
          { tag: 'h3', style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].addAddressModalHeaderStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 102
            }
          },
          'Add a new address'
        ),
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_AddAddress_AddressForm__WEBPACK_IMPORTED_MODULE_17__["default"], { onSubmit: _this.handleAddAddressSubmit, onCancel: _this.closeAddNewAddressModal, __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        })
      );
    };

    _this._renderEmpty = function () {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].loadingContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
          { tag: 'h3', __source: {
              fileName: _jsxFileName,
              lineNumber: 111
            }
          },
          'You haven\'t added any addresses.'
        ),
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Button__WEBPACK_IMPORTED_MODULE_15__["default"],
          { primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].addNewEmptyButton, onClick: _this.openAddNewAddressModal, __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            }
          },
          'Add New Address'
        ),
        _this._renderAddAddressModal()
      );
    };

    _this._renderCurrentState = function () {
      var _this$props = _this.props,
          isLoading = _this$props.isLoading,
          error = _this$props.error,
          addresses = _this$props.addresses;

      if (isLoading) {
        return _this._renderLoading();
      }
      if (error) {
        return _this._renderError();
      }

      if (!babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(addresses) || babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(addresses).length === 0) {
        return _this._renderEmpty();
      }

      return _this._renderUserAddresses(_this.props.addresses);
    };

    _this.handleAddAddressSubmit = _this.handleAddAddressSubmit.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Addresses, [{
    key: 'handleAddAddressSubmit',
    value: function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, bag) {
        var addressDetails, data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                addressDetails = {
                  currency: values.currency.symbol,
                  address: values.address
                };
                _context.prev = 1;
                _context.next = 4;
                return _api__WEBPACK_IMPORTED_MODULE_18__["default"].addAddress(addressDetails);

              case 4:
                data = _context.sent;

                bag.setSubmitting(false);
                this.setState({ isAddAddressSuccess: true });
                this.props.addAddress(data.address);
                this.closeAddNewAddressModal();
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](1);

                bag.setSubmitting(false);
                bag.setErrors(_api__WEBPACK_IMPORTED_MODULE_18__["default"].setErrors(_context.t0.response.data.errors.details.errors));

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 11]]);
      }));

      function handleAddAddressSubmit(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return handleAddAddressSubmit;
    }()
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
        { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          }
        },
        react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_21__["default"].cardContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 137
            }
          },
          this._renderCurrentState()
        )
      );
    }
  }]);

  return Addresses;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Addresses.propTypes = {
  addresses: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  deleteAddress: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  addAddress: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  updateAddress: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  error: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    addresses: state.addresses.addressList,
    isLoading: state.addresses.isLoading,
    error: state.addresses.isError
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, { addAddress: _store_actions_address__WEBPACK_IMPORTED_MODULE_19__["addAddress"], updateAddress: _store_actions_address__WEBPACK_IMPORTED_MODULE_19__["updateAddress"], deleteAddress: _store_actions_address__WEBPACK_IMPORTED_MODULE_19__["deleteAddress"] })(Addresses));

/***/ }),

/***/ "./src/screens/Addresses/styles.js":
/*!*****************************************!*\
  !*** ./src/screens/Addresses/styles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 100%;\n  min-height: calc(100vh - 4.5em);\n  align-items: center;\n  border-bottom: 1px solid ', ';\n'], ['\n  width: 100%;\n  min-height: calc(100vh - 4.5em);\n  align-items: center;\n  border-bottom: 1px solid ', ';\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 50em;\n  margin-top: 3em;\n  margin-bottom: 3em;\n  background-color: ', ';\n  border-radius: 4px;\n  padding: 2em 3em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    padding: 1.5em;\n  }\n'], ['\n  width: 50em;\n  margin-top: 3em;\n  margin-bottom: 3em;\n  background-color: ', ';\n  border-radius: 4px;\n  padding: 2em 3em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    padding: 1.5em;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  align-items: center;\n  justify-content: center;\n  padding: 5em;\n'], ['\n  align-items: center;\n  justify-content: center;\n  padding: 5em;\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 1em;\n  border-bottom: .5px dashed ', ';\n'], ['\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 1em;\n  border-bottom: .5px dashed ', ';\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  margin-bottom: -0.4em;\n'], ['\n  font-weight: 600;\n  margin-bottom: -0.4em;\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  font-size: 1em;\n\n  @media (max-width: ', ') {\n    padding-left: .8em;\n    padding-right: .8em;\n  }\n'], ['\n  font-weight: 600;\n  font-size: 1em;\n\n  @media (max-width: ', ') {\n    padding-left: .8em;\n    padding-right: .8em;\n  }\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-right: 0.4em;\n  font-size: 1.1em;\n  font-weight: 600;\n'], ['\n  padding-right: 0.4em;\n  font-size: 1.1em;\n  font-weight: 600;\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 1em;\n'], ['\n  margin-top: 1em;\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 45%;\n\n  @media (max-width: ', ') {\n    width: 100%;\n  }\n'], ['\n  width: 45%;\n\n  @media (max-width: ', ') {\n    width: 100%;\n  }\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  text-align: center;\n  font-weight: 600;\n  margin-top: 1em;\n  margin-bottom: 2em;\n'], ['\n  text-align: center;\n  font-weight: 600;\n  margin-top: 1em;\n  margin-bottom: 2em;\n']),
    _templateObject11 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 2em;\n'], ['\n  margin-top: 2em;\n']),
    _templateObject12 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-left: 0.3em;\n'], ['\n  margin-left: 0.3em;\n']);




var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray);

var cardContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var loadingContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3);

var addressesHeaderContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder);

var addressesHeaderTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5);

var addNewAddressButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var addNewAddressButtonIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7);

var addressesListContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8);

var addAddressModalStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var addAddressModalHeaderStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10);

var addNewEmptyButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject11);

var addIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12);

var styles = {
  mainContainer: mainContainer,
  cardContainer: cardContainer,
  loadingContainer: loadingContainer,
  addressesHeaderTextStyle: addressesHeaderTextStyle,
  addressesHeaderContainer: addressesHeaderContainer,
  addNewAddressButton: addNewAddressButton,
  addNewAddressButtonIcon: addNewAddressButtonIcon,
  addressesListContainer: addressesListContainer,
  addNewEmptyButton: addNewEmptyButton,
  addAddressModalStyle: addAddressModalStyle,
  addAddressModalHeaderStyle: addAddressModalHeaderStyle,
  addIcon: addIcon
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/Dashboard/index.js":
/*!****************************************!*\
  !*** ./src/screens/Dashboard/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../UserProfile */ "./src/screens/UserProfile/index.js");
/* harmony import */ var _Addresses__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Addresses */ "./src/screens/Addresses/index.js");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Settings */ "./src/screens/Settings/index.js");
/* harmony import */ var _containers_DashboardNavbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../containers/DashboardNavbar */ "./src/containers/DashboardNavbar/index.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _store_actions_address__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../store/actions/address */ "./src/store/actions/address.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./styles */ "./src/screens/Dashboard/styles.js");





var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Dashboard/index.js';

















var Dashboard = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Dashboard, _Component);

  function Dashboard() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Dashboard);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Dashboard.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Dashboard)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Dashboard, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchAddresses();
    }
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
        { fluid: true, fullHeight: true, style: _styles__WEBPACK_IMPORTED_MODULE_16__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_containers_DashboardNavbar__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], { path: '/profile/addresses', component: _Addresses__WEBPACK_IMPORTED_MODULE_10__["default"], __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], { path: '/profile/settings', component: _Settings__WEBPACK_IMPORTED_MODULE_11__["default"], __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], { exact: true, path: '/profile', component: _UserProfile__WEBPACK_IMPORTED_MODULE_9__["default"], __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        })
      );
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Dashboard.propTypes = {
  fetchAddresses: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(null, { fetchAddresses: _store_actions_address__WEBPACK_IMPORTED_MODULE_15__["fetchAddresses"] })(Dashboard));

/***/ }),

/***/ "./src/screens/Dashboard/styles.js":
/*!*****************************************!*\
  !*** ./src/screens/Dashboard/styles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n'], ['\n  background-color: ', ';\n']);




var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].background);

var styles = {
  mainContainer: mainContainer
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/ForgotPassword/EmailForm/index.js":
/*!*******************************************************!*\
  !*** ./src/screens/ForgotPassword/EmailForm/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Input */ "./src/components/Input/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Spinner */ "./src/components/Spinner/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles */ "./src/screens/ForgotPassword/EmailForm/styles.js");
var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/ForgotPassword/EmailForm/index.js',
    _this = undefined;















var validationSchema = yup__WEBPACK_IMPORTED_MODULE_5__["object"]().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().email('Not a valid email').required('Email is required')
});

var EmailForm = function EmailForm(_ref) {
  var handleSubmit = _ref.handleSubmit;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_6__["default"],
    { style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
      initialValues: { email: '' },
      onSubmit: _this.handleSubmit,
      validationSchema: validationSchema,
      render: function render(_ref2) {
        var values = _ref2.values,
            touched = _ref2.touched,
            handleChange = _ref2.handleChange,
            handleBlur = _ref2.handleBlur,
            handleSubmit = _ref2.handleSubmit,
            handleReset = _ref2.handleReset,
            errors = _ref2.errors,
            isValid = _ref2.isValid,
            isSubmitting = _ref2.isSubmitting;

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
            name: 'email',
            type: 'email',
            placeholder: 'awesome@doggo.co',
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.email,
            error: touched.email && errors.email,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_6__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].buttonContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_8__["default"],
              {
                primary: true,
                disabled: !isValid || isSubmitting,
                type: 'submit',
                style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].submitButton,
                onClick: handleSubmit,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                }
              },
              'Submit ',
              isSubmitting && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'span',
                { className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].spinnerIcon), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_9__["default"], { size: 20, width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                  }
                })
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_8__["default"],
              { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], to: '/login', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].cancelButton, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                }
              },
              'Cancel'
            )
          )
        );
      }, __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    })
  );
};

EmailForm.propTypes = {
  handleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (EmailForm);

/***/ }),

/***/ "./src/screens/ForgotPassword/EmailForm/styles.js":
/*!********************************************************!*\
  !*** ./src/screens/ForgotPassword/EmailForm/styles.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles */ "./src/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 0 4em;\n  width: 80%;\n  label: forgot-password-body-form-cntr;\n\n  @media (max-width: ', ') {\n    padding: 0;\n    width: 100%;\n  }\n'], ['\n  padding: 0 4em;\n  width: 80%;\n  label: forgot-password-body-form-cntr;\n\n  @media (max-width: ', ') {\n    padding: 0;\n    width: 100%;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  justify-content: center;\n  padding-top: 1em;\n  label: forgot-password-body-form-cntr-btn-cntr;\n'], ['\n  flex-direction: row;\n  justify-content: center;\n  padding-top: 1em;\n  label: forgot-password-body-form-cntr-btn-cntr;\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-left: 0.5em;\n  label: forgot-password-body-form-cntr-btn;\n'], ['\n  padding-left: 0.5em;\n  label: forgot-password-body-form-cntr-btn;\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-size: 1.3em;\n  margin-right: 1em;\n  label: signup-submit-button;\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n'], ['\n  font-size: 1.3em;\n  margin-right: 1em;\n  label: signup-submit-button;\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-left: 0.2em;\n'], ['\n  margin-left: 0.2em;\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: transparent;\n  color: ', ';\n  label: signup-cancel-button;\n\n  &:hover {\n    color: ', ';\n  }\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n'], ['\n  background-color: transparent;\n  color: ', ';\n  label: signup-cancel-button;\n\n  &:hover {\n    color: ', ';\n  }\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n']);





var formContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var buttonContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2);

var submitButtonIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3);

var submitButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var spinnerIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5);

var cancelButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.4, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText), _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var styles = {
  formContainer: formContainer,
  buttonContainer: buttonContainer,
  submitButton: submitButton,
  submitButtonIcon: submitButtonIcon,
  cancelButton: cancelButton,
  spinnerIcon: spinnerIcon
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/ForgotPassword/index.js":
/*!*********************************************!*\
  !*** ./src/screens/ForgotPassword/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _EmailForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./EmailForm */ "./src/screens/ForgotPassword/EmailForm/index.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./styles */ "./src/screens/ForgotPassword/styles.js");







var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/ForgotPassword/index.js';












var ForgotPassword = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(ForgotPassword, _Component);

  function ForgotPassword(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, ForgotPassword);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (ForgotPassword.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(ForgotPassword)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(ForgotPassword, [{
    key: 'handleSubmit',
    value: function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, bag) {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                try {
                  bag.setSubmitting(false);
                  this.props.history.push('/profile');
                } catch (e) {
                  bag.setSubmitting(false);
                }

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSubmit(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isAuthenticated) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Redirect"], { to: '/profile', __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
        { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_15__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_15__["default"].heroContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_15__["default"].heroLogoContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'a',
              { href: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                }
              },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'bitcharge-logo', className: Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_15__["default"].logoImageStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1532990484/icons/bitcharge-logo-white.png', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                }
              })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_15__["default"].heroTextContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'forgot-password-avatar', className: Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_15__["default"].signupAvatarIconStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1535940360/cat-avatar.png', __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              }
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_14__["default"],
              { tag: 'h3', style: _styles__WEBPACK_IMPORTED_MODULE_15__["default"].heroText, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                }
              },
              'Forgot Password'
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_15__["default"].bodyContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_14__["default"],
            { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_15__["default"].formHeaderText, __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            },
            'We have your back.'
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_EmailForm__WEBPACK_IMPORTED_MODULE_12__["default"], { onSubmit: this.handleSubmit, __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          })
        )
      );
    }
  }]);

  return ForgotPassword;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

ForgotPassword.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps)(ForgotPassword));

/***/ }),

/***/ "./src/screens/ForgotPassword/styles.js":
/*!**********************************************!*\
  !*** ./src/screens/ForgotPassword/styles.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  label: signup-main-cntr;\n  flex-direction: row;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n'], ['\n  background-color: ', ';\n  label: signup-main-cntr;\n  flex-direction: row;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 2;\n  background-color: ', ';\n  color: ', ';\n  padding: 0 2em;\n  label: signup-hero-cntr;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n'], ['\n  flex: 2;\n  background-color: ', ';\n  color: ', ';\n  padding: 0 2em;\n  label: signup-hero-cntr;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 5;\n  align-items: center;\n  justify-content: center;\n  padding: 3em 2em;\n  height: 100vh;\n  label: signup-body-cntr;\n\n  @media (max-width: ', ') {\n    padding: 2em 1em;\n    height: auto;\n  }\n'], ['\n  flex: 5;\n  align-items: center;\n  justify-content: center;\n  padding: 3em 2em;\n  height: 100vh;\n  label: signup-body-cntr;\n\n  @media (max-width: ', ') {\n    padding: 2em 1em;\n    height: auto;\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 0 4em;\n  width: 80%;\n  label: signup-body-form-cntr;\n'], ['\n  padding: 0 4em;\n  width: 80%;\n  label: signup-body-form-cntr;\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  text-align: left;\n  font-weight: 600;\n  margin-bottom: 2em;\n\n  @media (max-width: ', ') {\n    margin-bottom: 1em;\n    font-size: 1.8em;\n  }\n\n'], ['\n  text-align: left;\n  font-weight: 600;\n  margin-bottom: 2em;\n\n  @media (max-width: ', ') {\n    margin-bottom: 1em;\n    font-size: 1.8em;\n  }\n\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-top: 1em;\n'], ['\n  padding-top: 1em;\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 150px;\n  height: auto;\n'], ['\n  width: 150px;\n  height: auto;\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 150px;\n  height: 150px;\n  border-radius: 75px;\n  margin-bottom: .5em;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 125px;\n    height: 125px;\n  }\n'], ['\n  width: 150px;\n  height: 150px;\n  border-radius: 75px;\n  margin-bottom: .5em;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 125px;\n    height: 125px;\n  }\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 1em;\n  font-weight: 600;\n\n  @media (max-width: ', ') {\n    margin-top: .5em;\n    font-size: 1.5em;\n  }\n'], ['\n  margin-top: 1em;\n  font-weight: 600;\n\n  @media (max-width: ', ') {\n    margin-top: .5em;\n    font-size: 1.5em;\n  }\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 1;\n  padding: 1em;\n  label: signup-hero-text-cntr;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n    height: auto;\n  }\n'], ['\n  flex: 1;\n  padding: 1em;\n  label: signup-hero-text-cntr;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n    height: auto;\n  }\n']),
    _templateObject11 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-bottom: 1em;\n'], ['\n  margin-bottom: 1em;\n']),
    _templateObject12 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 1;\n  padding: 4em 4em 4em 2em;\n  align-items: center;\n  justify-content: center;\n  label: signup-hero-image-cntr;\n'], ['\n  flex: 1;\n  padding: 4em 4em 4em 2em;\n  align-items: center;\n  justify-content: center;\n  label: signup-hero-image-cntr;\n']),
    _templateObject13 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n  margin-bottom: 1em;\n  label: home-hero-header-text;\n'], ['\n  font-weight: 500;\n  margin-bottom: 1em;\n  label: home-hero-header-text;\n']),
    _templateObject14 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  line-height: 1.5em;\n  font-weight: 400;\n  margin-bottom: 1.5em;\n  label: home-hero-header-subtext;\n'], ['\n  line-height: 1.5em;\n  font-weight: 400;\n  margin-bottom: 1.5em;\n  label: home-hero-header-subtext;\n']),
    _templateObject15 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  max-width: 100%;\n  height: auto;\n  label: home-hero-image;\n'], ['\n  max-width: 100%;\n  height: auto;\n  label: home-hero-image;\n']),
    _templateObject16 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  display: inline-block;\n  text-decoration: none;\n  color: ', ';\n  padding: .3em;\n  border-radius: .1em;\n  label: login-signup-link;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\n  &:hover {\n    background-color: ', ';\n    color: ', ';\n  }\n'], ['\n  font-weight: 600;\n  display: inline-block;\n  text-decoration: none;\n  color: ', ';\n  padding: .3em;\n  border-radius: .1em;\n  label: login-signup-link;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\n  &:hover {\n    background-color: ', ';\n    color: ', ';\n  }\n']);




var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var bodyContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var formContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4);

var formHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroLogoContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6);

var logoImageStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7);

var signupAvatarIconStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroTextContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroFooterContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject11);

var heroImageContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12);

var heroHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject13);

var heroSubHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject14);

var heroImage = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject15);

var SignupLink = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject16, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary);

var styles = {
  mainContainer: mainContainer,
  bodyContainer: bodyContainer,
  formContainer: formContainer,
  heroContainer: heroContainer,
  heroLogoContainer: heroLogoContainer,
  logoImageStyle: logoImageStyle,
  heroTextContainer: heroTextContainer,
  heroText: heroText,
  heroFooterContainer: heroFooterContainer,
  signupAvatarIconStyle: signupAvatarIconStyle,
  heroImageContainer: heroImageContainer,
  heroHeaderText: heroHeaderText,
  heroSubHeaderText: heroSubHeaderText,
  heroImage: heroImage,
  SignupLink: SignupLink,
  formHeaderText: formHeaderText
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/Home/index.js":
/*!***********************************!*\
  !*** ./src/screens/Home/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Navbar */ "./src/components/Navbar/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles */ "./src/screens/Home/styles.js");





var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Home/index.js';












var Home = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Home, _Component);

  function Home() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Home);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Home.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Home)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Home, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
        { fluid: true, fullHeight: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
          { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].bodyContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
            { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].heroContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              }
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].heroTextContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].heroHeaderText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                  }
                },
                'The easiest way to accept crypto payments.'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].heroSubHeaderText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                  }
                },
                'Pick a username, create a link and get paid in your favorite cryptocurrency. It can\'t get any easier than that.'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Button__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], to: '/signup', primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].getStartedButton, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                  }
                },
                'Get Started ',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('i', { className: 'icon ion-md-arrow-round-forward ' + _styles__WEBPACK_IMPORTED_MODULE_13__["default"].getStartedButtonIcon, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                  }
                })
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].heroImageContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('img', { className: Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_13__["default"].heroImage), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1536025920/assets/hero_image_2.png', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30
                }
              })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].currenciesContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              }
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].currencyItemContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].currenciesSupportText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  }
                },
                'Currently supports'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].currencyItemContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('img', { alt: 'adress-icon', src: 'https://res.cloudinary.com/bitcharge/image/upload/v1532990277/icons/bitcoin.png', className: Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_13__["default"].addressIconImage), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                }
              }),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                { tag: 'h6', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].addressIconText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                  }
                },
                'Bitcoin'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].currencyItemContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('img', { alt: 'adress-icon', src: 'https://res.cloudinary.com/bitcharge/image/upload/v1532990278/icons/ethereum.png', className: Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_13__["default"].addressIconImage), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                }
              }),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                { tag: 'h6', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].addressIconText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                  }
                },
                'Ethereum'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].currencyItemContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('img', { alt: 'adress-icon', src: 'https://res.cloudinary.com/bitcharge/image/upload/v1532990277/icons/litecoin.png', className: Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_13__["default"].addressIconImage), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                }
              }),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                { tag: 'h6', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].addressIconText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  }
                },
                'Litecoin'
              )
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
            { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workHeaderContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].heroHeaderText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                  }
                },
                'How Bitcharge Works'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workDetailsContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workDetailsItemContainer, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
                  { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemImageContainer, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 58
                    }
                  },
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('img', { className: Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemImage), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1536025918/assets/choose_username.png', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 59
                    }
                  })
                ),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
                  { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemTextContainer, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 61
                    }
                  },
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                    { tag: 'h3', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemHeaderText, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                      }
                    },
                    'Pick a username'
                  ),
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_8__["default"], { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemTextBorder, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 65
                    }
                  }),
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                    { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemSubHeaderText, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                      }
                    },
                    'Get started by picking up a username. Your username will be used to create your public profile. When you share your Bitcharge link, it uses your username as the unique identifier.'
                  )
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workDetailsItemContainer, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
                  { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemImageContainer, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 72
                    }
                  },
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('img', { className: Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemImage), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1536025920/assets/setup_profile.png', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 73
                    }
                  })
                ),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
                  { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemTextContainer, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 75
                    }
                  },
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                    { tag: 'h3', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemHeaderText, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76
                      }
                    },
                    'Build your profile'
                  ),
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_8__["default"], { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemTextBorder, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 79
                    }
                  }),
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                    { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemSubHeaderText, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 80
                      }
                    },
                    'Bitcharge doesn\'t create new wallets, instead it just works with your existing crypto wallets. All you need to do add the address of your wallet where you want to recieve payments.'
                  )
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workDetailsItemContainer, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
                  { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemImageContainer, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 86
                    }
                  },
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('img', { className: Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemImage), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1536025920/assets/share_image.png', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 87
                    }
                  })
                ),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
                  { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemTextContainer, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 89
                    }
                  },
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                    { tag: 'h3', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemHeaderText, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 90
                      }
                    },
                    'Share your link'
                  ),
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_8__["default"], { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemTextBorder, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 93
                    }
                  }),
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                    { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workItemSubHeaderText, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 94
                      }
                    },
                    'Start using your Bitcharge.co link by sharing it instantly with anyone: friends, customers, or partners. And now you can start accepting crypto from anyone in an instant.'
                  )
                )
              )
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].callActionContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 101
              }
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].workHeaderContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 102
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_9__["default"],
                { tag: 'h2', style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].heroHeaderText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                  }
                },
                'Set up your unique Bitcharge.co link today.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_8__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].callActionButtonContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 107
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Button__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], to: '/signup', primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_13__["default"].getStartedButton, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                  }
                },
                'Get Started ',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('i', { className: 'icon ion-md-arrow-round-forward ' + _styles__WEBPACK_IMPORTED_MODULE_13__["default"].getStartedButtonIcon, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                  }
                })
              )
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        })
      );
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/screens/Home/styles.js":
/*!************************************!*\
  !*** ./src/screens/Home/styles.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  label: home-main-cntr;\n'], ['\n  background-color: ', ';\n  label: home-main-cntr;\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  min-height: calc(100vh - 4.5em);\n  border-top: 1px solid ', ';\n  label: home-body-cntr;\n'], ['\n  min-height: calc(100vh - 4.5em);\n  border-top: 1px solid ', ';\n  label: home-body-cntr;\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 2em 0;\n  label: home-hero-cntr;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n'], ['\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 2em 0;\n  label: home-hero-cntr;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 1;\n  padding: 4em;\n  label: home-hero-text-cntr;\n  align-items: flex-start;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    align-items: center;\n    padding: 1.5em;\n  }\n'], ['\n  flex: 1;\n  padding: 4em;\n  label: home-hero-text-cntr;\n  align-items: flex-start;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    align-items: center;\n    padding: 1.5em;\n  }\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 1;\n  padding: 6em 4em;\n  align-items: center;\n  justify-content: center;\n  label: home-hero-image-cntr;\n\n  @media (max-width: ', ') {\n    padding: 2em;\n  }\n'], ['\n  flex: 1;\n  padding: 6em 4em;\n  align-items: center;\n  justify-content: center;\n  label: home-hero-image-cntr;\n\n  @media (max-width: ', ') {\n    padding: 2em;\n  }\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  margin-bottom: 1em;\n  label: home-hero-header-text;\n\n  @media (max-width: ', ') {\n    text-align: center;\n    font-size: 1.8em;\n  }\n'], ['\n  font-weight: 600;\n  margin-bottom: 1em;\n  label: home-hero-header-text;\n\n  @media (max-width: ', ') {\n    text-align: center;\n    font-size: 1.8em;\n  }\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  line-height: 1.5em;\n  font-weight: 400;\n  margin-bottom: 1.5em;\n  label: home-hero-header-subtext;\n\n  @media (max-width: ', ') {\n    text-align: center;\n    font-size: 1em;\n    margin-bottom: 2.5em;\n  }\n'], ['\n  line-height: 1.5em;\n  font-weight: 400;\n  margin-bottom: 1.5em;\n  label: home-hero-header-subtext;\n\n  @media (max-width: ', ') {\n    text-align: center;\n    font-size: 1em;\n    margin-bottom: 2.5em;\n  }\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  max-width: 80%;\n  height: auto;\n  label: home-hero-image;\n\n  @media (max-width: ', ') {\n    max-width: 80%;\n  }\n'], ['\n  max-width: 80%;\n  height: auto;\n  label: home-hero-image;\n\n  @media (max-width: ', ') {\n    max-width: 80%;\n  }\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-left: 0.5em;\n  label: home-get-started-button-icon;\n'], ['\n  padding-left: 0.5em;\n  label: home-get-started-button-icon;\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-size: 1.3em;\n  font-weight: 600;\n  label: home-get-started-button;\n'], ['\n  font-size: 1.3em;\n  font-weight: 600;\n  label: home-get-started-button;\n']),
    _templateObject11 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  padding: 2em 4em;\n  border-bottom: 1px solid ', ';\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    padding: 2em 0;\n  }\n'], ['\n  flex-direction: row;\n  padding: 2em 4em;\n  border-bottom: 1px solid ', ';\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    padding: 2em 0;\n  }\n']),
    _templateObject12 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  margin-right: 2em;\n\n  @media (max-width: ', ') {\n    margin-right: 0;\n  }\n'], ['\n  font-weight: 600;\n  margin-right: 2em;\n\n  @media (max-width: ', ') {\n    margin-right: 0;\n  }\n']),
    _templateObject13 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  margin-right: 3em;\n\n  @media (max-width: ', ') {\n    margin-bottom: 1.5em;\n    margin-right: 0;\n  }\n'], ['\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  margin-right: 3em;\n\n  @media (max-width: ', ') {\n    margin-bottom: 1.5em;\n    margin-right: 0;\n  }\n']),
    _templateObject14 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 40px;\n  height: 40px;\n  margin-right: 1em;\n  border-radius: 50%;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 35px;\n    height: 35px;\n  }\n'], ['\n  width: 40px;\n  height: 40px;\n  margin-right: 1em;\n  border-radius: 50%;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 35px;\n    height: 35px;\n  }\n']),
    _templateObject15 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n  margin-bottom: 0px;\n\n  @media (max-width: ', ') {\n    font-size: 1.1em;\n  }\n\n'], ['\n  font-weight: 500;\n  margin-bottom: 0px;\n\n  @media (max-width: ', ') {\n    font-size: 1.1em;\n  }\n\n']),
    _templateObject16 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 2em 0 0 0;\n  label: home-work-cntr;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    padding: 0;\n  }\n'], ['\n  padding: 2em 0 0 0;\n  label: home-work-cntr;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    padding: 0;\n  }\n']),
    _templateObject17 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin: 2em;\n  align-items: center;\n  justify-content: center;\n'], ['\n  margin: 2em;\n  align-items: center;\n  justify-content: center;\n']),
    _templateObject18 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n\n'], ['\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n\n']),
    _templateObject19 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  background-color: ', ';\n  padding: 2em 1em;\n  margin: 0 2em;\n  justify-content: space-between;\n\n  &:nth-child(even) {\n    flex-direction: row-reverse;\n  }\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    margin: 0 1em;\n    padding: 1em 1em;\n\n    &:nth-child(even) {\n      flex-direction: column;\n    }\n  }\n'], ['\n  flex-direction: row;\n  background-color: ', ';\n  padding: 2em 1em;\n  margin: 0 2em;\n  justify-content: space-between;\n\n  &:nth-child(even) {\n    flex-direction: row-reverse;\n  }\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    margin: 0 1em;\n    padding: 1em 1em;\n\n    &:nth-child(even) {\n      flex-direction: column;\n    }\n  }\n']),
    _templateObject20 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 4em 4em;\n  flex: 1;\n  justify-content: center;\n  align-items: flex-start;\n\n  @media (max-width: ', ') {\n    padding: 2em 0;\n  }\n'], ['\n  padding: 4em 4em;\n  flex: 1;\n  justify-content: center;\n  align-items: flex-start;\n\n  @media (max-width: ', ') {\n    padding: 2em 0;\n  }\n']),
    _templateObject21 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  margin-bottom: .5em;\n\n  @media (max-width: ', ') {\n    text-align: center;\n    font-size: 1.5em;\n  }\n'], ['\n  font-weight: 600;\n  margin-bottom: .5em;\n\n  @media (max-width: ', ') {\n    text-align: center;\n    font-size: 1.5em;\n  }\n']),
    _templateObject22 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  height: 7px;\n  width: 40%;\n  background-color: ', ';\n\n  @media (max-width: ', ') {\n    height: 6px;\n  }\n'], ['\n  height: 7px;\n  width: 40%;\n  background-color: ', ';\n\n  @media (max-width: ', ') {\n    height: 6px;\n  }\n']),
    _templateObject23 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-top: 1.5em;\n  color: ', ';\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n\n'], ['\n  padding-top: 1.5em;\n  color: ', ';\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n\n']),
    _templateObject24 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 1;\n  padding: 2em 4em;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    padding: 0;\n    margin-bottom: 1em;\n  }\n'], ['\n  flex: 1;\n  padding: 2em 4em;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    padding: 0;\n    margin-bottom: 1em;\n  }\n']),
    _templateObject25 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 70%;\n  height: auto;\n\n  @media (max-width: ', ') {\n    width: 80%;\n  }\n'], ['\n  width: 70%;\n  height: auto;\n\n  @media (max-width: ', ') {\n    width: 80%;\n  }\n']),
    _templateObject26 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 2em 4em;\n  border-bottom: 1px solid ', ';\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    padding: 1em 0 3em 0;\n  }\n'], ['\n  padding: 2em 4em;\n  border-bottom: 1px solid ', ';\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    padding: 1em 0 3em 0;\n  }\n']),
    _templateObject27 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 2em;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    padding: 0;\n  }\n'], ['\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 2em;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    padding: 0;\n  }\n']);





var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white);

var bodyContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray);

var heroContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var heroTextContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var heroImageContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var heroSubHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var heroImage = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var getStartedButtonIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9);

var getStartedButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10);

var currenciesContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject11, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var currenciesSupportText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var currencyItemContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject13, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var addressIconImage = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject14, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var addressIconText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject15, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var workContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject16, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var workHeaderContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject17);

var workDetailsContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject18, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var workDetailsItemContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject19, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var workItemTextContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject20, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var workItemHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject21, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var workItemTextBorder = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject22, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var workItemSubHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject23, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText), _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var workItemImageContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject24, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var workItemImage = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject25, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var callActionContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject26, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var callActionButtonContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject27, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var styles = {
  mainContainer: mainContainer,
  bodyContainer: bodyContainer,
  heroContainer: heroContainer,
  heroTextContainer: heroTextContainer,
  heroImageContainer: heroImageContainer,
  heroHeaderText: heroHeaderText,
  heroSubHeaderText: heroSubHeaderText,
  heroImage: heroImage,
  getStartedButton: getStartedButton,
  getStartedButtonIcon: getStartedButtonIcon,
  currenciesContainer: currenciesContainer,
  currenciesSupportText: currenciesSupportText,
  currencyItemContainer: currencyItemContainer,
  addressIconImage: addressIconImage,
  addressIconText: addressIconText,
  workContainer: workContainer,
  workHeaderContainer: workHeaderContainer,
  workDetailsContainer: workDetailsContainer,
  workDetailsItemContainer: workDetailsItemContainer,
  workItemTextContainer: workItemTextContainer,
  workItemHeaderText: workItemHeaderText,
  workItemTextBorder: workItemTextBorder,
  workItemSubHeaderText: workItemSubHeaderText,
  workItemImageContainer: workItemImageContainer,
  workItemImage: workItemImage,
  callActionContainer: callActionContainer,
  callActionButtonContainer: callActionButtonContainer
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/Login/LoginForm/index.js":
/*!**********************************************!*\
  !*** ./src/screens/Login/LoginForm/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Input */ "./src/components/Input/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Spinner */ "./src/components/Spinner/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles */ "./src/screens/Login/LoginForm/styles.js");
var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Login/LoginForm/index.js';














var validationSchema = yup__WEBPACK_IMPORTED_MODULE_5__["object"]().shape({
  loginField: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required('Email is required'),
  password: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().min(6).required('Password is required')
});

var LoginForm = function LoginForm(_ref) {
  var onSubmit = _ref.onSubmit;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_6__["default"],
    { style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
      initialValues: { loginField: '', password: '' },
      onSubmit: onSubmit,
      validationSchema: validationSchema,
      render: function render(_ref2) {
        var values = _ref2.values,
            touched = _ref2.touched,
            handleChange = _ref2.handleChange,
            handleBlur = _ref2.handleBlur,
            handleSubmit = _ref2.handleSubmit,
            handleReset = _ref2.handleReset,
            errors = _ref2.errors,
            isValid = _ref2.isValid,
            isSubmitting = _ref2.isSubmitting;

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
            label: 'Username or Email',
            name: 'loginField',
            type: 'email',
            placeholder: 'awesome-doggo',
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.loginField,
            error: touched.loginField && errors.loginField,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
            label: 'Password',
            name: 'password',
            type: 'password',
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.password,
            error: touched.password && errors.password,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_6__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].buttonContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              }
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_8__["default"],
              {
                primary: true,
                disabled: !isValid || isSubmitting,
                type: 'submit',
                style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].submitButton,
                onClick: handleSubmit,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 63
                }
              },
              'Submit ',
              isSubmitting && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'span',
                { className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].spinnerIcon), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_9__["default"], { size: 20, width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                  }
                })
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_8__["default"],
              { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], to: '/forgot', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].cancelButton, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 72
                }
              },
              'Forgot Password'
            )
          )
        );
      }, __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    })
  );
};

LoginForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./src/screens/Login/LoginForm/styles.js":
/*!***********************************************!*\
  !*** ./src/screens/Login/LoginForm/styles.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles */ "./src/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 0 4em;\n  width: 100%;\n  label: login-body-form-cntr;\n\n  @media (max-width: ', ') {\n    padding: 0;\n  }\n'], ['\n  padding: 0 4em;\n  width: 100%;\n  label: login-body-form-cntr;\n\n  @media (max-width: ', ') {\n    padding: 0;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding-top: 1em;\n  margin-left: 1.6em;\n\n  @media (max-width: ', ') {\n  }\n'], ['\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding-top: 1em;\n  margin-left: 1.6em;\n\n  @media (max-width: ', ') {\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n'], ['\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-left: 0.5em;\n  label: login-submit-button-icon;\n'], ['\n  padding-left: 0.5em;\n  label: login-submit-button-icon;\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-left: 0.2em;\n'], ['\n  margin-left: 0.2em;\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: transparent;\n  color: ', ';\n  label: login-cancel-button;\n\n  &:hover {\n    color: ', ';\n  }\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n'], ['\n  background-color: transparent;\n  color: ', ';\n  label: login-cancel-button;\n\n  &:hover {\n    color: ', ';\n  }\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n']);





var formContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var buttonContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var submitButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var submitButtonIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4);

var spinnerIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5);

var cancelButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.4, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText), _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var styles = {
  formContainer: formContainer,
  buttonContainer: buttonContainer,
  submitButtonIcon: submitButtonIcon,
  spinnerIcon: spinnerIcon,
  submitButton: submitButton,
  cancelButton: cancelButton
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/Login/index.js":
/*!************************************!*\
  !*** ./src/screens/Login/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LoginForm */ "./src/screens/Login/LoginForm/index.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../store/actions/auth */ "./src/store/actions/auth.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./styles */ "./src/screens/Login/styles.js");







var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Login/index.js';















var Login = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Login, _Component);

  function Login(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Login);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Login.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(Login)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Login, [{
    key: 'handleSubmit',
    value: function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, bag) {
        var data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _api__WEBPACK_IMPORTED_MODULE_15__["default"].login(values);

              case 3:
                data = _context.sent;

                bag.setSubmitting(false);
                this.props.loginAction(data.user);
                this.props.history.push('/profile');
                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](0);

                bag.setSubmitting(false);
                bag.setErrors(_context.t0.response.data.errors.details.errors.errors);

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function handleSubmit(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isAuthenticated) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Redirect"], { to: '/profile', __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
        { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_17__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_17__["default"].heroContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_17__["default"].heroLogoContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'a',
              { href: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                }
              },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'bitcharge-logo', className: Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_17__["default"].logoImageStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1532990484/icons/bitcharge-logo-white.png', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                }
              })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_17__["default"].heroTextContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'login-avatar', className: Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_17__["default"].signupAvatarIconStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1535940305/panda-avatar.png', __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              }
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_14__["default"],
              { tag: 'h3', style: _styles__WEBPACK_IMPORTED_MODULE_17__["default"].heroText, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 48
                }
              },
              'Welcome back.'
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_17__["default"].heroFooterContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_14__["default"],
              { tag: 'h6', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                }
              },
              'Don\'t have an account. ',
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"],
                { to: '/signup', className: Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_17__["default"].SignupLink), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  }
                },
                'Signup'
              )
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_13__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_17__["default"].bodyContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_LoginForm__WEBPACK_IMPORTED_MODULE_12__["default"], { onSubmit: this.handleSubmit, __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            }
          })
        )
      );
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Login.propTypes = {
  loginAction: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  history: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, { loginAction: _store_actions_auth__WEBPACK_IMPORTED_MODULE_16__["login"] })(Login));

/***/ }),

/***/ "./src/screens/Login/styles.js":
/*!*************************************!*\
  !*** ./src/screens/Login/styles.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  label: signup-main-cntr;\n  flex-direction: row;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n'], ['\n  background-color: ', ';\n  label: signup-main-cntr;\n  flex-direction: row;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 2;\n  background-color: ', ';\n  color: ', ';\n  padding: 0 2em;\n  label: signup-hero-cntr;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n'], ['\n  flex: 2;\n  background-color: ', ';\n  color: ', ';\n  padding: 0 2em;\n  label: signup-hero-cntr;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 5;\n  align-items: center;\n  justify-content: center;\n  padding: 2em;\n  height: 100vh;\n  label: signup-body-cntr;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n    height: auto;\n  }\n'], ['\n  flex: 5;\n  align-items: center;\n  justify-content: center;\n  padding: 2em;\n  height: 100vh;\n  label: signup-body-cntr;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n    height: auto;\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-top: 1em;\n'], ['\n  padding-top: 1em;\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 150px;\n  height: auto;\n'], ['\n  width: 150px;\n  height: auto;\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 150px;\n  height: 150px;\n  border-radius: 75px;\n  margin-bottom: .5em;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 125px;\n    height: 125px;\n  }\n'], ['\n  width: 150px;\n  height: 150px;\n  border-radius: 75px;\n  margin-bottom: .5em;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 125px;\n    height: 125px;\n  }\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 1em;\n  font-weight: 600;\n  text-align: center;\n\n  @media (max-width: ', ') {\n    margin-top: .5em;\n    font-size: 1.5em;\n  }\n'], ['\n  margin-top: 1em;\n  font-weight: 600;\n  text-align: center;\n\n  @media (max-width: ', ') {\n    margin-top: .5em;\n    font-size: 1.5em;\n  }\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 1;\n  padding: 1em;\n  label: signup-hero-text-cntr;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    flex: none;\n    margin-top: 1em;\n  }\n'], ['\n  flex: 1;\n  padding: 1em;\n  label: signup-hero-text-cntr;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    flex: none;\n    margin-top: 1em;\n  }\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-bottom: 1em;\n'], ['\n  margin-bottom: 1em;\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 1;\n  padding: 4em 4em 4em 2em;\n  align-items: center;\n  justify-content: center;\n  label: signup-hero-image-cntr;\n'], ['\n  flex: 1;\n  padding: 4em 4em 4em 2em;\n  align-items: center;\n  justify-content: center;\n  label: signup-hero-image-cntr;\n']),
    _templateObject11 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n  margin-bottom: 1em;\n  label: home-hero-header-text;\n\n  @media (max-width: ', ') {\n    margin-bottom: 0;\n  }\n'], ['\n  font-weight: 500;\n  margin-bottom: 1em;\n  label: home-hero-header-text;\n\n  @media (max-width: ', ') {\n    margin-bottom: 0;\n  }\n']),
    _templateObject12 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  line-height: 1.5em;\n  font-weight: 400;\n  margin-bottom: 1.5em;\n  label: home-hero-header-subtext;\n'], ['\n  line-height: 1.5em;\n  font-weight: 400;\n  margin-bottom: 1.5em;\n  label: home-hero-header-subtext;\n']),
    _templateObject13 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  max-width: 100%;\n  height: auto;\n  label: home-hero-image;\n'], ['\n  max-width: 100%;\n  height: auto;\n  label: home-hero-image;\n']),
    _templateObject14 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-size: 1.3em;\n  margin-right: 1em;\n  label: signup-submit-button;\n'], ['\n  font-size: 1.3em;\n  margin-right: 1em;\n  label: signup-submit-button;\n']),
    _templateObject15 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  display: inline-block;\n  text-decoration: none;\n  color: ', ';\n  padding: .3em;\n  border-radius: .1em;\n  label: login-signup-link;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\n  &:hover {\n    background-color: ', ';\n    color: ', ';\n  }\n'], ['\n  font-weight: 600;\n  display: inline-block;\n  text-decoration: none;\n  color: ', ';\n  padding: .3em;\n  border-radius: .1em;\n  label: login-signup-link;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\n  &:hover {\n    background-color: ', ';\n    color: ', ';\n  }\n']);




var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var bodyContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroLogoContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4);

var logoImageStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5);

var signupAvatarIconStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroTextContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroFooterContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9);

var heroImageContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10);

var heroHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject11, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroSubHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12);

var heroImage = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject13);

var submitButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject14);

var SignupLink = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject15, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary);

var styles = {
  mainContainer: mainContainer,
  bodyContainer: bodyContainer,
  heroContainer: heroContainer,
  heroLogoContainer: heroLogoContainer,
  heroTextContainer: heroTextContainer,
  heroText: heroText,
  heroFooterContainer: heroFooterContainer,
  signupAvatarIconStyle: signupAvatarIconStyle,
  heroImageContainer: heroImageContainer,
  heroHeaderText: heroHeaderText,
  heroSubHeaderText: heroSubHeaderText,
  heroImage: heroImage,
  logoImageStyle: logoImageStyle,
  submitButton: submitButton,
  SignupLink: SignupLink
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/Privacy/index.js":
/*!**************************************!*\
  !*** ./src/screens/Privacy/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-media */ "react-media");
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_media__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Navbar */ "./src/components/Navbar/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _components_Scroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Scroll */ "./src/components/Scroll/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles */ "./src/screens/Privacy/styles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");





var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Privacy/index.js';















var Privacy = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Privacy, _Component);

  function Privacy() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Privacy);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Privacy.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Privacy)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Privacy, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
        { fluid: true, fullHeight: true, style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Scroll__WEBPACK_IMPORTED_MODULE_13__["ScrollToTopOnMount"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
          { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
            { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].headerContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
              { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].headerTextStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                }
              },
              'Privacy Policy'
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              react_media__WEBPACK_IMPORTED_MODULE_8___default.a,
              { query: '(max-width: ' + _styles__WEBPACK_IMPORTED_MODULE_15__["breakpoints"].tablet + ')', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25
                }
              },
              function (matches) {
                return matches ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_9__["default"], { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].workItemTextBorder, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  }
                }) : null;
              }
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].detailsContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              }
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  }
                },
                'Bitcharge is a platform for people and businesses to accept cryptopayments in their favourite crypto currency. At Bitcharge, your privacy is important to us, and we want you to feel confident that your personal information is secure when using our products and our platform.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                  }
                }),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                  }
                }),
                'The services are provided by Droidsize Inc. (parent company and hereinafter referred to as \u201CBitcharge\u201D). It is Bitcharge\u2019s policy to respect your privacy regarding any information we may collect while operating our website.'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  }
                },
                'Website Visitors'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  }
                },
                'Like most website operators, Bitcharge collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Bitcharge\'s purpose in collecting non-personally identifying information is to better understand how Bitcharge\'s visitors use its website. From time to time, Bitcharge may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website. Bitcharge also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users on ',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"],
                  { to: '/', className: '' + Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].linkText), __source: {
                      fileName: _jsxFileName,
                      lineNumber: 39
                    }
                  },
                  'Bitcharge.com'
                ),
                '.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                  }
                },
                'Gathering of Personally-Identifying Information'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                  }
                },
                'Certain visitors to Bitcharge\'s websites choose to interact with Bitcharge in ways that require Bitcharge to gather personally-identifying information. The amount and type of information that Bitcharge gathers depends on the nature of the interaction. For example, we ask visitors who sign up at ',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"],
                  { to: '/', className: '' + Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].linkText), __source: {
                      fileName: _jsxFileName,
                      lineNumber: 47
                    }
                  },
                  'Bitcharge.com'
                ),
                ' to provide a username and email address. In each case, Bitcharge collects such information only insofar as is necessary or appropriate to fulfill the purpose of the visitor\'s interaction with Bitcharge. Bitcharge does not disclose personally-identifying information other than as described below. And visitors can always refuse to supply personally-identifying information, with the caveat that it may prevent them from engaging in certain website-related activities.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  }
                },
                'Aggregated Statistics'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                  }
                },
                'Bitcharge may collect statistics about the behavior of visitors to its websites. Bitcharge may display this information publicly or provide it to others. However, Bitcharge does not disclose personally-identifying information other than as described below.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 58
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                  }
                },
                'Protection of Certain Personally-Identifying Information'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                  }
                },
                'Bitcharge discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that (i) need to know that information in order to process it on Bitcharge\'s behalf or to provide services available at Bitcharge\'s websites, and (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside of your home country; by using Bitcharge\'s websites, you consent to the transfer of such information to them. Bitcharge will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to its employees, contractors and affiliated organizations, as described above, Bitcharge discloses potentially personally-identifying and personally-identifying information only in response to a subpoena, court order or other governmental request, or when Bitcharge believes in good faith that disclosure is reasonably necessary to protect the property or rights of Bitcharge, third parties or the public at large. If you are a registered user of an Bitcharge website and have supplied your email address, Bitcharge may occasionally send you an email to tell you about new features, solicit your feedback, or just keep you up to date with what\'s going on with Bitcharge and our products. If you send us a request (for example via email or via one of our feedback mechanisms), we reserve the right to publish it in order to help us clarify or respond to your request or to help us support other users. Bitcharge takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and personally-identifying information.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                  }
                },
                'Cookies'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                  }
                },
                'A cookie is a string of information that a website stores on a visitor\'s computer, and that the visitor\'s browser provides to the website each time the visitor returns. For more information, visit ',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  'a',
                  { className: '' + Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].linkText), href: 'http://www.allaboutcookies.org/', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 71
                    }
                  },
                  'All About Cookies'
                ),
                '.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                  }
                }),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                  }
                }),
                'Bitcharge uses cookies to help Bitcharge identify and track visitors, their usage of Bitcharge website, and their website access preferences. Some cookies expire after a certain amount of time, or upon logging out (session cookies), others remain on your computer or terminal device for a longer period (persistent cookies). Our Site uses first party cookies (cookies set directly by Anchor) as well as third party cookies, as described below',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                  }
                }),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                  }
                }),
                'Strictly Necessary Cookies: Used to provide Users with the Services available through our Site and to use some of their features, such as the ability to log-in and access to secure areas. These cookies are served by Anchor and are essential for using and navigating the Site. Without these cookies, basic functions of our Site would not work. Because these cookies are strictly necessary to deliver the Site and the Services, you cannot refuse them.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                  }
                }),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                  }
                }),
                'Analytics/Performance: Used to better understand the behavior of the Users on our Site and improve our Site accordingly, for example by making sure Users are finding what they need easily. The Site uses Google Analytics, a web analytics service provided by Google Inc. (\u201CGoogle\u201D). The information collected by Google (including your IP address) will be transmitted to and stored by Google on servers in the United States (Google is certified to the Privacy Shield for data transfers). How long a Google Analytics cookie remains on your computer or device depends on what it is and what it is used for. Some Google Analytics cookies expire at the end of your browser session, whilst others can remain for up to two years. You can prevent your data from being collected by Google Analytics on our Site by downloading and installing the ',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  'a',
                  { className: '' + Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].linkText), href: 'https://tools.google.com/dlpage/gaoptout?hl=en', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 74
                    }
                  },
                  'Google Analytics Opt-out Browser Add-on'
                ),
                ' for your current web browser. For more information on Google Analytics privacy practices, read here.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                  }
                }),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                  }
                }),
                'Bitcharge visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Bitcharge\'s websites, with the drawback that certain features of Bitcharge\'s websites may not function properly without the aid of cookies.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 78
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                  }
                },
                'International Users'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                  }
                },
                'Bitcharge is based in India and the some of its servers are based in the United States. If you are accessing our Services from the European Union or other regions with laws governing data collection and use, please note that your Personal Data will be transmitted to our servers in India and the United States and the data may be transmitted to our service providers supporting our business operations (described above). India and United States may have data protection laws less stringent than or otherwise different from the laws in effect in the country in which you are located. Where we transfer your Personal Data out of the EU we will take steps to ensure that your Personal Data receives an adequate level of protection where it is processed and your rights continue to be protected (GDPR).',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                  }
                }),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                  }
                }),
                'By providing your information to the Services you agree to the transfer of your information to India and the United States and processing globally in accordance with this Privacy Policy.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 87
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                  }
                },
                'Privacy Policy Changes'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                  }
                },
                'Although most changes are likely to be minor, Bitcharge may change its Privacy Policy from time to time, and in Bitcharge\'s sole discretion. Bitcharge encourages visitors to frequently check this page for any changes to its Privacy Policy. If you have a ',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"],
                  { to: '/', className: '' + Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].linkText), __source: {
                      fileName: _jsxFileName,
                      lineNumber: 92
                    }
                  },
                  'Bitcharge.com'
                ),
                ' account, you might also receive an alert informing you of these changes. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 95
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                  }
                },
                'Other Terms and Conditions'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                  }
                },
                'Your access to and use of the Bitcharge is subject to any additional terms applicable to such Services that may be posted on the Terms from time to time, including without limitation, Bitcharge\u2019s Terms of Use available at ',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"],
                  { to: '/terms', className: '' + Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].linkText), __source: {
                      fileName: _jsxFileName,
                      lineNumber: 100
                    }
                  },
                  'https://www.bitcharge.co/terms'
                ),
                '.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 103
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                  }
                },
                'Contact Us'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                  }
                },
                'Please feel free to contact us if you have any questions about Bitcharge\u2019s Privacy Policy or the information practices. You may contact us by sending an email to ',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  'a',
                  { className: '' + Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].linkText), href: 'mailto:support@bitcharge.co', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 108
                    }
                  },
                  'support@bitcharge.co'
                )
              )
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        })
      );
    }
  }]);

  return Privacy;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Privacy);

/***/ }),

/***/ "./src/screens/Privacy/styles.js":
/*!***************************************!*\
  !*** ./src/screens/Privacy/styles.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  label: home-main-cntr;\n\n  @media (max-width: ', ') {\n    background-color: ', ';\n  }\n'], ['\n  background-color: ', ';\n  label: home-main-cntr;\n\n  @media (max-width: ', ') {\n    background-color: ', ';\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  min-height: calc(100vh - 4.5em);\n  border-top: 2px solid ', ';\n  align-items: center;\n  label: home-body-cntr;\n\n  @media (max-width: ', ') {\n    border-bottom: 1px solid ', ';\n  }\n'], ['\n  min-height: calc(100vh - 4.5em);\n  border-top: 2px solid ', ';\n  align-items: center;\n  label: home-body-cntr;\n\n  @media (max-width: ', ') {\n    border-bottom: 1px solid ', ';\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  height: 7px;\n  width: 60%;\n  margin-top: .5em;\n  background-color: ', ';\n\n  @media (max-width: ', ') {\n    height: 6px;\n  }\n'], ['\n  height: 7px;\n  width: 60%;\n  margin-top: .5em;\n  background-color: ', ';\n\n  @media (max-width: ', ') {\n    height: 6px;\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 5em;\n  margin-bottom: 3em;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    margin-top: 3em;\n    margin-bottom: 0em;\n  }\n'], ['\n  margin-top: 5em;\n  margin-bottom: 3em;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    margin-top: 3em;\n    margin-bottom: 0em;\n  }\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n\n  @media (max-width: ', ') {\n    font-weight: 500;\n    font-size: 2em;\n  }\n'], ['\n  font-weight: 600;\n\n  @media (max-width: ', ') {\n    font-weight: 500;\n    font-size: 2em;\n  }\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 65%;\n  margin-top: 3em;\n  margin-bottom: 5em;\n  background-color: ', ';\n  border-radius: 5px;\n  border: 1px solid ', ';\n  padding: 4em 5em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    padding: 1.5em;\n    border: 0;\n  }\n'], ['\n  width: 65%;\n  margin-top: 3em;\n  margin-bottom: 5em;\n  background-color: ', ';\n  border-radius: 5px;\n  border: 1px solid ', ';\n  padding: 4em 5em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    padding: 1.5em;\n    border: 0;\n  }\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 2em 0;\n  border-bottom: 1px dashed ', ';\n\n  &:last-child {\n    border-bottom: 0;\n  }\n'], ['\n  padding: 2em 0;\n  border-bottom: 1px dashed ', ';\n\n  &:last-child {\n    border-bottom: 0;\n  }\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n  margin: 1em 0 1.5em 0;\n'], ['\n  font-weight: 500;\n  margin: 1em 0 1.5em 0;\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  color: ', ';\n  line-height: 1.5;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    font-size: 1em;\n  }\n'], ['\n  color: ', ';\n  line-height: 1.5;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    font-size: 1em;\n  }\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  color: ', ';\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.15s ease-out;\n\n  &:hover {\n    color: ', ';\n  }\n'], ['\n  color: ', ';\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.15s ease-out;\n\n  &:hover {\n    color: ', ';\n  }\n']);





var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].background, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white);

var bodyContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder);

var workItemTextBorder = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var headerContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var headerTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var detailsContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.1, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder), _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var sectionContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder);

var sectionHeader = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8);

var bodyText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText), _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var linkText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].linkText, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].linkText));

var styles = {
  mainContainer: mainContainer,
  bodyContainer: bodyContainer,
  detailsContainer: detailsContainer,
  headerContainer: headerContainer,
  workItemTextBorder: workItemTextBorder,
  headerTextStyle: headerTextStyle,
  sectionContainer: sectionContainer,
  sectionHeader: sectionHeader,
  bodyText: bodyText,
  linkText: linkText
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/Profile/DropdownItem/index.js":
/*!***************************************************!*\
  !*** ./src/screens/Profile/DropdownItem/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./src/screens/Profile/DropdownItem/styles.js");

var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Profile/DropdownItem/index.js';









var DropdownItem = function DropdownItem(props) {
  var isDisabled = props.isDisabled,
      data = props.data;

  return !isDisabled ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    react_select__WEBPACK_IMPORTED_MODULE_3__["components"].Option,
    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('img', { alt: 'dropdown-icon', src: data.currency.icon, className: Object(emotion__WEBPACK_IMPORTED_MODULE_4__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_6__["default"].dropdownItemImage), __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_5__["default"],
      { tag: 'h5', unstyled: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      },
      data.currency.name
    )
  ) : null;
};

DropdownItem.propTypes = {
  isDisabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.boolean,
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};

/* harmony default export */ __webpack_exports__["default"] = (DropdownItem);

/***/ }),

/***/ "./src/screens/Profile/DropdownItem/styles.js":
/*!****************************************************!*\
  !*** ./src/screens/Profile/DropdownItem/styles.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-right: 1em;\n  width: 2em;\n  height: 2em;\n  border-radius: 50%;\n  border: 1px solid ', ';\n'], ['\n  margin-right: 1em;\n  width: 2em;\n  height: 2em;\n  border-radius: 50%;\n  border: 1px solid ', ';\n']);




var dropdownItemImage = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white);

/* harmony default export */ __webpack_exports__["default"] = ({
  dropdownItemImage: dropdownItemImage
});

/***/ }),

/***/ "./src/screens/Profile/SingleValue/index.js":
/*!**************************************************!*\
  !*** ./src/screens/Profile/SingleValue/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./src/screens/Profile/SingleValue/styles.js");

var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Profile/SingleValue/index.js';









var SingleValue = function SingleValue(props) {
  var data = props.data;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    react_select__WEBPACK_IMPORTED_MODULE_3__["components"].SingleValue,
    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('img', { alt: 'selected-icon', src: data.currency.icon, className: Object(emotion__WEBPACK_IMPORTED_MODULE_4__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_6__["default"].selectedItemImage), __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }),
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_5__["default"],
      { tag: 'h5', unstyled: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      data.currency.name
    )
  );
};

SingleValue.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any
};

/* harmony default export */ __webpack_exports__["default"] = (SingleValue);

/***/ }),

/***/ "./src/screens/Profile/SingleValue/styles.js":
/*!***************************************************!*\
  !*** ./src/screens/Profile/SingleValue/styles.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-right: 1em;\n  width: 1.8em;\n  height: 1.8em;\n  border-radius: 50%;\n  border: 1px solid ', ';\n'], ['\n  margin-right: 1em;\n  width: 1.8em;\n  height: 1.8em;\n  border-radius: 50%;\n  border: 1px solid ', ';\n']);




var selectedItemImage = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white);

/* harmony default export */ __webpack_exports__["default"] = ({
  selectedItemImage: selectedItemImage
});

/***/ }),

/***/ "./src/screens/Profile/index.js":
/*!**************************************!*\
  !*** ./src/screens/Profile/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "babel-runtime/core-js/object/keys");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! qrcode.react */ "qrcode.react");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/Navbar */ "./src/components/Navbar/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/Spinner */ "./src/components/Spinner/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _SingleValue__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./SingleValue */ "./src/screens/Profile/SingleValue/index.js");
/* harmony import */ var _DropdownItem__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./DropdownItem */ "./src/screens/Profile/DropdownItem/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./styles */ "./src/screens/Profile/styles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");









var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Profile/index.js';






















var selectStyles = {
  control: function control(base) {
    return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8___default()({}, base, _styles__WEBPACK_IMPORTED_MODULE_25__["default"].selectStyle);
  },
  container: function container(base) {
    return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8___default()({}, base, { width: '100%' });
  },
  indicatorsContainer: function indicatorsContainer(base) {
    return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8___default()({}, base, { transition: 'all 0.3s ease-out' });
  },
  indicatorSeparator: function indicatorSeparator(base) {
    return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8___default()({}, base, { backgroundColor: '#FFF' });
  },
  dropdownIndicator: function dropdownIndicator(base) {
    return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8___default()({}, base, { color: '#000' });
  },
  menu: function menu(base) {
    return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8___default()({}, base, { marginTop: '1px', border: 0, borderRadius: 0 });
  },
  option: function option(base) {
    return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8___default()({}, _styles__WEBPACK_IMPORTED_MODULE_25__["default"].dropdownItemStyle);
  },
  singleValue: function singleValue(base) {
    return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8___default()({}, _styles__WEBPACK_IMPORTED_MODULE_25__["default"].singleValueStyle);
  },
  valueContainer: function valueContainer(base) {
    return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8___default()({}, base, { padding: 0 });
  }
};

var Profile = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Profile, _Component);

  function Profile(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Profile);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, (Profile.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_3___default()(Profile)).call(this, props));

    _this.onCopyAddress = function () {
      _this.setState({ copied: true });
      setInterval(function () {
        _this.setState({ copied: false });
      }, 3000);
    };

    _this.onDropdownItemPress = function (value) {
      _this.setState({ selectedAddress: value });
    };

    _this._renderCardBody = function (addresses) {
      var selectedAddress = _this.state.selectedAddress;


      if (!addresses || !addresses.length) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].cardBodyContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            }
          },
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
            { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].bodyDataContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 77
              }
            },
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].addressContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 78
                }
              },
              react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].noAddressImageContainer, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('img', { className: Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_25__["default"].noAddressImage), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1536110953/assets/building-profile.png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                  }
                })
              ),
              react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_18__["default"],
                { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].noAddressText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                  }
                },
                'This profile is still in progress. No addresses added yet.'
              )
            )
          )
        );
      }

      var addressList = babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(addresses).map(function (address) {
        return addresses[address];
      }).sort(function (a, b) {
        var textA = a.currency.name.toUpperCase();
        var textB = b.currency.name.toUpperCase();

        return textA.localeCompare(textB);
      });

      var addressText = selectedAddress ? selectedAddress.address : addresses[0].address;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].cardBodyContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        },
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_12___default.a, {
          options: addressList,
          defaultValue: addressList[0],
          isSearchable: false,
          components: { Option: _DropdownItem__WEBPACK_IMPORTED_MODULE_24__["default"], SingleValue: _SingleValue__WEBPACK_IMPORTED_MODULE_23__["default"] },
          getOptionLabel: function getOptionLabel(_ref) {
            var currency = _ref.currency;
            return currency.name;
          },
          getOptionValue: function getOptionValue(_ref2) {
            var currency = _ref2.currency;
            return currency.symbol;
          },
          styles: selectStyles,
          onChange: _this.onDropdownItemPress,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
          { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].bodyDataContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 109
            }
          },
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].addressContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              }
            },
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_18__["default"],
              { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].addressHeaderStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 111
                }
              },
              'Wallet Address'
            ),
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_18__["default"],
              { tag: 'h6', style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].addressValueText, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 112
                }
              },
              addressText
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].qrcodeContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 114
              }
            },
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_13___default.a, { value: addressText, size: 172, __source: {
                fileName: _jsxFileName,
                lineNumber: 115
              }
            })
          )
        )
      );
    };

    _this._renderUser = function (user) {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
        react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        },
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].cardHeaderContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 125
            }
          },
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].avatarContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 126
              }
            },
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('img', { alt: 'user-avatar', className: Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_25__["default"].avatarIconStyle), src: user.avatar || 'https://res.cloudinary.com/bitcharge/image/upload/v1535940305/panda-avatar.png', __source: {
                fileName: _jsxFileName,
                lineNumber: 127
              }
            })
          ),
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].headerTextContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 129
              }
            },
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_18__["default"],
              { tag: 'h5', unstyled: true, style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].headerTextStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 130
                }
              },
              user.name
            ),
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_18__["default"],
              { tag: 'h6', unstyled: true, style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].headerSubTextStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 131
                }
              },
              user.intro || user.username
            )
          )
        ),
        _this._renderCardBody(user.addresses)
      );
    };

    _this._renderLoading = function () {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].loadingContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          }
        },
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_21__["default"], { size: 50, width: 7, color: _styles__WEBPACK_IMPORTED_MODULE_26__["colors"].lightText, __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          }
        })
      );
    };

    _this._renderError = function () {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
        react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          }
        },
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].cardErrorHeaderContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 150
            }
          },
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].errorHeaderTextContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 151
              }
            },
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_18__["default"],
              { tag: 'h3', unstyled: true, style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].errorHeaderTextStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 152
                }
              },
              'We couldn\'t find that Bitcharge profile'
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].errorUserContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 155
            }
          },
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].noAddressImageContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 156
              }
            },
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('img', { className: Object(emotion__WEBPACK_IMPORTED_MODULE_11__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_25__["default"].errorUserImage), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1536119853/assets/user-not-found.png', __source: {
                fileName: _jsxFileName,
                lineNumber: 157
              }
            })
          ),
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_18__["default"],
            { tag: 'h6', style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].errorUserText, __source: {
                fileName: _jsxFileName,
                lineNumber: 159
              }
            },
            'Seems like nobody has a Bitcharge profile with that username, try checking the link again. You can also create your own Bitcharge profile with this username. '
          ),
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_22__["default"],
            { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Link"], to: '/signup', primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].getStartedButton, __source: {
                fileName: _jsxFileName,
                lineNumber: 160
              }
            },
            'Create My Profile ',
            react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('i', { className: 'icon ion-md-arrow-round-forward ' + _styles__WEBPACK_IMPORTED_MODULE_25__["default"].getStartedButtonIcon, __source: {
                fileName: _jsxFileName,
                lineNumber: 160
              }
            })
          )
        )
      );
    };

    _this._renderCard = function () {
      if (_this.props.initialData) {
        return _this._renderUser(_this.props.initialData);
      } else if (_this.props.initialDataError) {
        return _this._renderError();
      } else {
        if (_this.state.isLoading) {
          return _this._renderLoading();
        }

        if (_this.state.user) {
          return _this._renderUser(_this.state.user);
        }

        if (_this.state.isError) {
          return _this._renderError();
        }
      }
    };

    _this.getMetaTags = function (user) {
      var firstName = user.name.split(' ')[0];
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
        react_helmet__WEBPACK_IMPORTED_MODULE_15__["Helmet"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          }
        },
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('meta', { property: 'og:title', content: 'Pay ' + firstName + ' in crypto with Bitcharge', __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('meta', { property: 'og:description', content: 'Go to bitcharge.co/' + user.username + ' to pay ' + firstName + ' in your favourite cryptocurrency.', __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('meta', { property: 'og:image', content: 'https://res.cloudinary.com/bitcharge/image/upload/v1536051435/assets/bitcharge-social-graph.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('meta', { property: 'og:image:alt', content: 'Bitcharge', __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('meta', { property: 'og:url', content: 'https://bitcharge.co/' + user.username, __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          }
        })
      );
    };

    _this.state = {
      selectedAddress: null,
      copiedAddress: false
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Profile, [{
    key: 'componentDidMount',
    value: function () {
      var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.props.initialData) {
                  _context.next = 11;
                  break;
                }

                _context.prev = 1;
                _context.next = 4;
                return _api__WEBPACK_IMPORTED_MODULE_16__["default"].getProfile(this.props.match.params.username);

              case 4:
                data = _context.sent;

                this.setState({ isLoading: false, user: data });
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](1);

                this.setState({ isLoading: false, isError: true });

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 8]]);
      }));

      function componentDidMount() {
        return _ref3.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var initialData = this.props.initialData;

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
        { fluid: true, fullHeight: true, style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 202
          }
        },
        initialData && this.getMetaTags(initialData),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_19__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
          { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].bodyContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 205
            }
          },
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_17__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_25__["default"].cardContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 206
              }
            },
            this._renderCard()
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_20__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          }
        })
      );
    }
  }], [{
    key: 'getInitialData',
    value: function getInitialData(_ref4) {
      var match = _ref4.match,
          req = _ref4.req,
          res = _ref4.res;

      return _api__WEBPACK_IMPORTED_MODULE_16__["default"].getProfile(match.params.username);
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Profile.propTypes = {
  match: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any,
  initialData: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
  initialDataError: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./src/screens/Profile/styles.js":
/*!***************************************!*\
  !*** ./src/screens/Profile/styles.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n'], ['\n  background-color: ', ';\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n'], ['\n  font-weight: 500;\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 100%;\n  min-height: calc(100vh - 6em);\n  align-items: center;\n  border-bottom: 1px dashed ', ';\n\n  @media (max-width: ', ') {\n    padding-bottom: 2em;\n    background-color: ', ';\n    border-top: 1px solid ', ';\n  }\n'], ['\n  width: 100%;\n  min-height: calc(100vh - 6em);\n  align-items: center;\n  border-bottom: 1px dashed ', ';\n\n  @media (max-width: ', ') {\n    padding-bottom: 2em;\n    background-color: ', ';\n    border-top: 1px solid ', ';\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  min-width: 32em;\n  max-width: 42em;\n  margin-top: 3em;\n  margin-bottom: 3em;\n  background-color: ', ';\n  border-radius: 4px;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    min-width: 100%;\n    max-width: 100%;\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n'], ['\n  min-width: 32em;\n  max-width: 42em;\n  margin-top: 3em;\n  margin-bottom: 3em;\n  background-color: ', ';\n  border-radius: 4px;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    min-width: 100%;\n    max-width: 100%;\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  align-items: center;\n  justify-content: center;\n  padding: 5em;\n'], ['\n  align-items: center;\n  justify-content: center;\n  padding: 5em;\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 2.5em 2em;\n  background-color: ', ';\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n'], ['\n  padding: 2.5em 2em;\n  background-color: ', ';\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 2em;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    padding: 1.5em 2em;\n  }\n'], ['\n  padding: 2em;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    padding: 1.5em 2em;\n  }\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  align-items: center;\n  justify-content: center;\n'], ['\n  align-items: center;\n  justify-content: center;\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 100%;\n  padding: 2em 4em;\n  margin-bottom: 1em;\n  align-items: center;\n\n  @media (max-width: ', ') {\n    padding: 2em 1em 1em 1em;\n  }\n'], ['\n  width: 100%;\n  padding: 2em 4em;\n  margin-bottom: 1em;\n  align-items: center;\n\n  @media (max-width: ', ') {\n    padding: 2em 1em 1em 1em;\n  }\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 60%;\n  height: auto;\n\n  @media (max-width: ', ') {\n    width: 80%;\n  }\n'], ['\n  width: 60%;\n  height: auto;\n\n  @media (max-width: ', ') {\n    width: 80%;\n  }\n']),
    _templateObject11 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 65%;\n  height: auto;\n\n  @media (max-width: ', ') {\n    width: 80%;\n  }\n'], ['\n  width: 65%;\n  height: auto;\n\n  @media (max-width: ', ') {\n    width: 80%;\n  }\n']),
    _templateObject12 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n  margin: 1em 2em;\n  text-align: center;\n\n  @media (max-width: ', ') {\n    font-size: 1.2em;\n  }\n'], ['\n  font-weight: 500;\n  margin: 1em 2em;\n  text-align: center;\n\n  @media (max-width: ', ') {\n    font-size: 1.2em;\n  }\n']),
    _templateObject13 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 400;\n  margin: 1em 2em;\n  line-height: 1.5em;\n  text-align: center;\n\n  @media (max-width: ', ') {\n    font-size: .9em;\n  }\n'], ['\n  font-weight: 400;\n  margin: 1em 2em;\n  line-height: 1.5em;\n  text-align: center;\n\n  @media (max-width: ', ') {\n    font-size: .9em;\n  }\n']),
    _templateObject14 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 100px;\n  height: 100px;\n  border-radius: 50px;\n  border: 2px solid ', ';\n'], ['\n  width: 100px;\n  height: 100px;\n  border-radius: 50px;\n  border: 2px solid ', ';\n']),
    _templateObject15 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-top: .8em;\n  text-align: center;\n  color: ', ';\n'], ['\n  padding-top: .8em;\n  text-align: center;\n  color: ', ';\n']),
    _templateObject16 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-top: .8em;\n  text-align: center;\n'], ['\n  padding-top: .8em;\n  text-align: center;\n']),
    _templateObject17 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  margin-bottom: .2em;\n'], ['\n  font-weight: 600;\n  margin-bottom: .2em;\n']),
    _templateObject18 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n  margin-bottom: .2em;\n  color: ', ';\n\n  @media (max-width: ', ') {\n    font-size: 1.3em;\n  }\n'], ['\n  font-weight: 500;\n  margin-bottom: .2em;\n  color: ', ';\n\n  @media (max-width: ', ') {\n    font-size: 1.3em;\n  }\n']),
    _templateObject19 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 400;\n'], ['\n  font-weight: 400;\n']),
    _templateObject20 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  align-items: center;\n  width: 32em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n  }\n\n'], ['\n  align-items: center;\n  width: 32em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n  }\n\n']),
    _templateObject21 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  align-items: center;\n  padding: 1em;\n\n  @media (max-width: ', ') {\n    padding: 0.5em;\n  }\n'], ['\n  align-items: center;\n  padding: 1em;\n\n  @media (max-width: ', ') {\n    padding: 0.5em;\n  }\n']),
    _templateObject22 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  @media (max-width: ', ') {\n    font-size: 13px;\n  }\n'], ['\n  @media (max-width: ', ') {\n    font-size: 13px;\n  }\n']),
    _templateObject23 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: .5em;\n  align-items: center;\n'], ['\n  margin-top: .5em;\n  align-items: center;\n']),
    _templateObject24 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 2em;\n'], ['\n  margin-top: 2em;\n']),
    _templateObject25 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-bottom: 2em;\n  align-items: center;\n'], ['\n  padding-bottom: 2em;\n  align-items: center;\n']),
    _templateObject26 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  width: 90%;\n  align-items: center;\n  justify-content: flex-end;\n  @media (max-width: ', ') {\n    width: 90%;\n    justify-content: flex-end;\n  }\n'], ['\n  flex-direction: row;\n  width: 90%;\n  align-items: center;\n  justify-content: flex-end;\n  @media (max-width: ', ') {\n    width: 90%;\n    justify-content: flex-end;\n  }\n']),
    _templateObject27 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-left: .8em;\n  padding-right: .2em;\n  padding-top: .2em;\n  padding-bottom: .2em;\n  font-size: 1.1em;\n\n  &:last-child {\n    padding-right: 0em;\n  }\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n'], ['\n  padding-left: .8em;\n  padding-right: .2em;\n  padding-top: .2em;\n  padding-bottom: .2em;\n  font-size: 1.1em;\n\n  &:last-child {\n    padding-right: 0em;\n  }\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n']),
    _templateObject28 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-right: 4px;\n  color: ', ';\n'], ['\n  margin-right: 4px;\n  color: ', ';\n']),
    _templateObject29 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  color: ', ';\n  font-weight: 500;\n  padding-top: .4em;\n  padding-right: .2em;\n  font-size: 1em;\n  transition: all 0.15s ease-out;\n'], ['\n  color: ', ';\n  font-weight: 500;\n  padding-top: .4em;\n  padding-right: .2em;\n  font-size: 1em;\n  transition: all 0.15s ease-out;\n']),
    _templateObject30 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n'], ['\n']),
    _templateObject31 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 1.2em;\n  align-items: center;\n  justify-content: center;\n'], ['\n  padding: 1.2em;\n  align-items: center;\n  justify-content: center;\n']),
    _templateObject32 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 10em;\n  height: 10em;\n'], ['\n  width: 10em;\n  height: 10em;\n']),
    _templateObject33 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-left: 0.5em;\n  label: home-get-started-button-icon;\n'], ['\n  padding-left: 0.5em;\n  label: home-get-started-button-icon;\n']),
    _templateObject34 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin: 1em 0em 1.5em 0;\n  font-size: 1em;\n  font-weight: 600;\n  label: home-get-started-button;\n\n  @media (max-width: ', ') {\n    font-size: .9em;\n  }\n'], ['\n  margin: 1em 0em 1.5em 0;\n  font-size: 1em;\n  font-weight: 600;\n  label: home-get-started-button;\n\n  @media (max-width: ', ') {\n    font-size: .9em;\n  }\n']);





var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].background);

var logoTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2);

var bodyContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder);

var cardContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var loadingContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5);

var cardHeaderContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var cardErrorHeaderContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var avatarContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8);

var noAddressImageContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var noAddressImage = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var errorUserImage = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject11, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var noAddressText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var errorUserText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject13, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var avatarIconStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject14, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white);

var headerTextContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject15, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white);

var errorHeaderTextContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject16);

var headerTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject17);

var errorHeaderTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject18, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var headerSubTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject19);

var cardBodyContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject20, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var bodyDataContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject21, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var addressValueText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject22, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var addressContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject23);

var noUserDetailsContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject24);

var errorUserContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject25);

var optionsContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject26, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var addressActionButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject27, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var iconButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject28, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText));

var copiedTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject29, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary);

var addNewEmptyButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject24);

var addressHeaderStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject30);

var qrcodeContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject31);

var qrcodeImage = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject32);

var getStartedButtonIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject33);

var getStartedButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject34, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var selectStyle = {
  boxSizing: 'border-box',
  width: '100%',
  borderRadius: 0,
  border: 0,
  borderBottom: '1px solid ' + _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].background,
  padding: '0.8em',
  fontFamily: _styles__WEBPACK_IMPORTED_MODULE_2__["typography"].primaryFont,
  fontSize: '1.2rem',
  backgroundColor: _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white,
  '&:hover': {
    border: 0,
    borderBottom: '1px solid ' + _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].background
  }
};

var dropdownItemStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '0.8em',
  maxWidth: '100%',
  transition: 'background 0.3s ease-out',
  '&:hover': {
    backgroundColor: _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary,
    color: _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white
  },
  '&:active': {
    backgroundColor: _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary,
    color: _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white
  }
};

var singleValueStyle = {
  display: 'flex',
  alignItems: 'center'
};

var styles = {
  mainContainer: mainContainer,
  logoTextStyle: logoTextStyle,
  bodyContainer: bodyContainer,
  cardContainer: cardContainer,
  loadingContainer: loadingContainer,
  cardHeaderContainer: cardHeaderContainer,
  cardErrorHeaderContainer: cardErrorHeaderContainer,
  cardBodyContainer: cardBodyContainer,
  avatarContainer: avatarContainer,
  noAddressImageContainer: noAddressImageContainer,
  noAddressText: noAddressText,
  noAddressImage: noAddressImage,
  avatarIconStyle: avatarIconStyle,
  headerTextContainer: headerTextContainer,
  headerTextStyle: headerTextStyle,
  errorHeaderTextStyle: errorHeaderTextStyle,
  headerSubTextStyle: headerSubTextStyle,
  bodyDataContainer: bodyDataContainer,
  addressContainer: addressContainer,
  addressValueText: addressValueText,
  iconButton: iconButton,
  copiedTextStyle: copiedTextStyle,
  optionsContainer: optionsContainer,
  addressActionButton: addressActionButton,
  addressHeaderStyle: addressHeaderStyle,
  qrcodeContainer: qrcodeContainer,
  qrcodeImage: qrcodeImage,
  addNewEmptyButton: addNewEmptyButton,
  selectStyle: selectStyle,
  singleValueStyle: singleValueStyle,
  dropdownItemStyle: dropdownItemStyle,

  errorUserImage: errorUserImage,
  errorUserText: errorUserText,
  noUserDetailsContainer: noUserDetailsContainer,
  errorUserContainer: errorUserContainer,
  errorHeaderTextContainer: errorHeaderTextContainer,
  getStartedButton: getStartedButton,
  getStartedButtonIcon: getStartedButtonIcon
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/Root/index.js":
/*!***********************************!*\
  !*** ./src/screens/Root/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _containers_PrivateRoute__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../containers/PrivateRoute */ "./src/containers/PrivateRoute.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/actions/auth */ "./src/store/actions/auth.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles */ "./src/screens/Root/styles.js");






var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Root/index.js';












var Root = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Root, _Component);

  function Root() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Root);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Root.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(Root)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Root, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.isAuthenticated) {
        this.props.getAuthUser();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          routes = _props.routes,
          initialData = _props.initialData;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
        { fluid: true, fullHeight: true, style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        },
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          react_helmet__WEBPACK_IMPORTED_MODULE_9__["Helmet"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            }
          },
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement('meta', { property: 'og:title', content: 'Bitcharge', __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement('meta', { property: 'og:site_name', content: 'Bitcharge', __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement('meta', { property: 'og:type', content: 'website', __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement('meta', { property: 'og:description', content: 'The easiest way to accept crypto payments.', __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement('meta', { property: 'og:image', content: 'https://res.cloudinary.com/bitcharge/image/upload/v1536051435/assets/bitcharge-social-graph.png', __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement('meta', { property: 'og:image:alt', content: 'Bitcharge', __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement('meta', { property: 'og:url', content: 'https://bitcharge.co', __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement('meta', { property: 'fb:app_id', content: '1928411100786366', __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement('meta', { name: 'twitter:card', content: 'summary', __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement('meta', { name: 'twitter:site', content: '@bitcharge_co', __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement('meta', { name: 'twitter:creator', content: '@bitcharge_co', __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          })
        ),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Switch"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          },
          routes.map(function (route, index) {
            var Tag = route.private ? _containers_PrivateRoute__WEBPACK_IMPORTED_MODULE_12__["default"] : react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"];
            return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Tag, {
              key: index,
              path: route.path,
              exact: route.exact || false,
              render: function render(props) {
                return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(route.component, babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
                  initialData: initialData[index] || null
                }));
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              }
            });
          })
        )
      );
    }
  }]);

  return Root;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

Root.propTypes = {
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  getAuthUser: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  routes: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array,
  initialData: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, { getAuthUser: _store_actions_auth__WEBPACK_IMPORTED_MODULE_13__["getAuthUser"] })(Root)));

/***/ }),

/***/ "./src/screens/Root/styles.js":
/*!************************************!*\
  !*** ./src/screens/Root/styles.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n'], ['\n  background-color: ', ';\n']);




var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white);

var styles = {
  mainContainer: mainContainer
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/Settings/EditSettingsForm/index.js":
/*!********************************************************!*\
  !*** ./src/screens/Settings/EditSettingsForm/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Input */ "./src/components/Input/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles */ "./src/screens/Settings/styles.js");
var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Settings/EditSettingsForm/index.js';













var validationSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
  username: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2),
  password: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(6)
});

var EditSettingsForm = function EditSettingsForm(_ref) {
  var onSubmit = _ref.onSubmit,
      onCancel = _ref.onCancel,
      user = _ref.user;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: { username: user.username, password: '' },
    onSubmit: onSubmit,
    validationSchema: validationSchema,
    render: function render(_ref2) {
      var values = _ref2.values,
          handleChange = _ref2.handleChange,
          handleSubmit = _ref2.handleSubmit,
          handleBlur = _ref2.handleBlur,
          errors = _ref2.errors,
          touched = _ref2.touched,
          isValid = _ref2.isValid,
          isSubmitting = _ref2.isSubmitting;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsBodyContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_6__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemLabel, __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            },
            'Username'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
            name: 'username',
            noErrorText: true,
            inputStyle: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].textInputStyle,
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.username,
            error: touched.username && errors.username,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_6__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemLabel, __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              }
            },
            'Email'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_6__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemValue, __source: {
                fileName: _jsxFileName,
                lineNumber: 53
              }
            },
            user.email
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_6__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemLabel, __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              }
            },
            'Password'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
            name: 'password',
            noErrorText: true,
            inputStyle: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].textInputStyle,
            type: 'password',
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.password,
            error: touched.password && errors.password,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_6__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemLabel, __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              }
            },
            'Email Verification'
          ),
          user.active ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_6__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemValue, __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              }
            },
            'Verified ',
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'icon ion-md-checkmark-circle-outline ' + Object(emotion__WEBPACK_IMPORTED_MODULE_4__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].verifiedIcon), __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              }
            })
          ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
            { secondary: true, style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].editSettingsButton, __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              }
            },
            'Resend Email',
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'icon ion-md-arrow-round-forward ' + Object(emotion__WEBPACK_IMPORTED_MODULE_4__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].editIcon), __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              }
            })
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
          { style: Object(emotion__WEBPACK_IMPORTED_MODULE_4__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].settingsItemContainer, _styles__WEBPACK_IMPORTED_MODULE_9__["default"].editButtonContainer), __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
            {
              primary: true,
              disabled: !isValid || isSubmitting,
              onClick: handleSubmit,
              style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].editAddressSaveButton,
              type: 'submit',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              }
            },
            'Save'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
            {
              onClick: onCancel,
              style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].editAddressCancelButton,
              link: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 84
              }
            },
            'Cancel'
          )
        )
      );
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  });
};

EditSettingsForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/* harmony default export */ __webpack_exports__["default"] = (EditSettingsForm);

/***/ }),

/***/ "./src/screens/Settings/index.js":
/*!***************************************!*\
  !*** ./src/screens/Settings/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Spinner */ "./src/components/Spinner/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _EditSettingsForm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./EditSettingsForm */ "./src/screens/Settings/EditSettingsForm/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../store/actions/auth */ "./src/store/actions/auth.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./styles */ "./src/screens/Settings/styles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");







var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Settings/index.js';

















var SettingsBody = function SettingsBody(_ref) {
  var user = _ref.user;

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
    { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsBodyContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    },
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      },
      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
        { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemLabel, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        },
        'Username'
      ),
      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
        { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemValue, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        },
        user.username
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      },
      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
        { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemLabel, __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        },
        'Email'
      ),
      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
        { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemValue, __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        },
        user.email
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      },
      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
        { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemLabel, __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        },
        'Password'
      ),
      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
        { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemValue, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        },
        'Change ',
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('i', { className: 'icon ion-md-create ' + Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["default"].verifiedIcon), __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        })
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      },
      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
        { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemLabel, __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        },
        'Email Verification'
      ),
      user.active ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
        { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsItemValue, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        'Verified ',
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('i', { className: 'icon ion-md-checkmark-circle-outline ' + Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["default"].verifiedIcon), __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        })
      ) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_14__["default"],
        { secondary: true, style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].editSettingsButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        },
        'Resend Email',
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('i', { className: 'icon ion-md-arrow-round-forward ' + Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["default"].editIcon), __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        })
      )
    )
  );
};

var Settings = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Settings, _Component);

  function Settings() {
    var _ref2;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Settings);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (_ref2 = Settings.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(Settings)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      isEditing: false
    }, _this._renderLoading = function () {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].loadingContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_12__["default"], { size: 50, width: 7, color: _styles__WEBPACK_IMPORTED_MODULE_19__["colors"].lightText, __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        })
      );
    }, _this.onEdit = function () {
      _this.setState({ isEditing: true });
    }, _this.onCancelEdit = function () {
      _this.setState({ isEditing: false });
    }, _this._renderUserDetails = function (user) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsHeaderContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_13__["default"],
            { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].settingsHeaderTextStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 87
              }
            },
            'Settings'
          ),
          _this.state.isEditing ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_14__["default"],
            { onClick: _this.onCancelEdit, style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].editSettingsButton, secondary: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 90
              }
            },
            'Cancel',
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('i', { className: 'icon ion-md-close ' + Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["default"].editIcon), __source: {
                fileName: _jsxFileName,
                lineNumber: 90
              }
            })
          ) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_14__["default"],
            { onClick: _this.onEdit, style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].editSettingsButton, primary: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 91
              }
            },
            'Edit',
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('i', { className: 'icon ion-md-arrow-round-forward ' + Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["default"].editIcon), __source: {
                fileName: _jsxFileName,
                lineNumber: 91
              }
            })
          )
        ),
        _this.state.isEditing ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_EditSettingsForm__WEBPACK_IMPORTED_MODULE_15__["default"], { user: user, onCancel: _this.onCancelEdit, onSubmit: _this.onEditSubmit, __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SettingsBody, { user: user, __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        })
      );
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Settings, [{
    key: 'onEditSubmit',
    value: function () {
      var _ref3 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, bag) {
        var userDetails, data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userDetails = {
                  username: values.username
                };

                if (values.password) {
                  userDetails['password'] = values.password;
                }

                _context.prev = 2;
                _context.next = 5;
                return _api__WEBPACK_IMPORTED_MODULE_16__["default"].updateUser(userDetails);

              case 5:
                data = _context.sent;

                bag.setSubmitting(false);
                this.props.getAuthUser(data);
                this.setState({ isEditing: false });
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](2);

                bag.setSubmitting(false);
                bag.setErrors(_api__WEBPACK_IMPORTED_MODULE_16__["default"].setErrors(_context.t0.response.data.errors.details.errors));

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 11]]);
      }));

      function onEditSubmit(_x, _x2) {
        return _ref3.apply(this, arguments);
      }

      return onEditSubmit;
    }()
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
        { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_11__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_18__["default"].cardContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 105
            }
          },
          this.props.user ? this._renderUserDetails(this.props.user) : this._renderLoading()
        )
      );
    }
  }]);

  return Settings;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Settings.propTypes = {
  getAuthUser: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  user: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object
};

SettingsBody.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, { getAuthUser: _store_actions_auth__WEBPACK_IMPORTED_MODULE_17__["getAuthUser"] })(Settings));

/***/ }),

/***/ "./src/screens/Settings/styles.js":
/*!****************************************!*\
  !*** ./src/screens/Settings/styles.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 100%;\n  min-height: calc(100vh - 4.5em);\n  align-items: center;\n  border-bottom: 1px solid ', ';\n'], ['\n  width: 100%;\n  min-height: calc(100vh - 4.5em);\n  align-items: center;\n  border-bottom: 1px solid ', ';\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 50em;\n  margin-top: 3em;\n  margin-bottom: 3em;\n  background-color: ', ';\n  border-radius: 4px;\n  padding: 2em 3em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    padding: 1.5em;\n  }\n'], ['\n  width: 50em;\n  margin-top: 3em;\n  margin-bottom: 3em;\n  background-color: ', ';\n  border-radius: 4px;\n  padding: 2em 3em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    padding: 1.5em;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  align-items: center;\n  justify-content: center;\n  padding: 5em;\n'], ['\n  align-items: center;\n  justify-content: center;\n  padding: 5em;\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 1em;\n  border-bottom: .5px dashed ', ';\n'], ['\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 1em;\n  border-bottom: .5px dashed ', ';\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  margin-bottom: -0.4em;\n'], ['\n  font-weight: 600;\n  margin-bottom: -0.4em;\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  font-size: 1em;\n'], ['\n  font-weight: 600;\n  font-size: 1em;\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-left: 0.75em;\n'], ['\n  margin-left: 0.75em;\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-left: 0.3em;\n'], ['\n  margin-left: 0.3em;\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 1em;\n'], ['\n  margin-top: 1em;\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 2em 0 2em 0;\n  border-bottom: .5px dotted ', ';\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  &:last-child {\n    border-bottom: 0;\n  }\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 1em 0;\n  }\n'], ['\n  padding: 2em 0 2em 0;\n  border-bottom: .5px dotted ', ';\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  &:last-child {\n    border-bottom: 0;\n  }\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 1em 0;\n  }\n']),
    _templateObject11 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  justify-content: flex-end;\n\n  @media (max-width: ', ') {\n    flex-direction: row;\n  }\n'], ['\n  justify-content: flex-end;\n\n  @media (max-width: ', ') {\n    flex-direction: row;\n  }\n']),
    _templateObject12 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n'], ['\n  font-weight: 500;\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n']),
    _templateObject13 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  @media (max-width: ', ') {\n    font-size: 1em;\n}\n'], ['\n  @media (max-width: ', ') {\n    font-size: 1em;\n}\n']),
    _templateObject14 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 70%;\n  margin-left: auto;\n  margin-right: -1em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin-right: 0;\n  }\n'], ['\n  width: 70%;\n  margin-left: auto;\n  margin-right: -1em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin-right: 0;\n  }\n']),
    _templateObject15 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n@media (max-width: ', ') {\n  font-size: 1em;\n}\n'], ['\n@media (max-width: ', ') {\n  font-size: 1em;\n}\n']),
    _templateObject16 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n'], ['\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n']);




var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray);

var cardContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var loadingContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3);

var settingsHeaderContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder);

var settingsHeaderTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5);

var editSettingsButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6);

var editIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7);

var verifiedIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8);

var settingsBodyContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9);

var settingsItemContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var editButtonContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject11, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var settingsItemValue = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var settingsItemLabel = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject13, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var textInputStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject14, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var editAddressSaveButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject15, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var editAddressCancelButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject16, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var styles = {
  mainContainer: mainContainer,
  cardContainer: cardContainer,
  loadingContainer: loadingContainer,
  settingsHeaderContainer: settingsHeaderContainer,
  settingsHeaderTextStyle: settingsHeaderTextStyle,
  editSettingsButton: editSettingsButton,
  editAddressSaveButton: editAddressSaveButton,
  editAddressCancelButton: editAddressCancelButton,
  settingsBodyContainer: settingsBodyContainer,
  editButtonContainer: editButtonContainer,
  editIcon: editIcon,
  verifiedIcon: verifiedIcon,
  settingsItemContainer: settingsItemContainer,
  settingsItemLabel: settingsItemLabel,
  settingsItemValue: settingsItemValue,
  textInputStyle: textInputStyle
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/Signup/SignupForm/index.js":
/*!************************************************!*\
  !*** ./src/screens/Signup/SignupForm/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Input */ "./src/components/Input/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Spinner */ "./src/components/Spinner/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles */ "./src/screens/Signup/SignupForm/styles.js");
var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Signup/SignupForm/index.js';













var validationSchema = yup__WEBPACK_IMPORTED_MODULE_4__["object"]().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().email('Not a valid email').required('Email is required'),
  name: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(3).required('Name is required'),
  username: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(4).required('Username is required'),
  password: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(6).required('Password is required'),
  confirmPassword: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().oneOf([yup__WEBPACK_IMPORTED_MODULE_4__["ref"]('password', null)], 'Passwords must match').required('Confirm password is required')
});

var SignupForm = function SignupForm(_ref) {
  var onSubmit = _ref.onSubmit,
      hostRef = _ref.hostRef;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
    { hostRef: hostRef, style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].formContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      }
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
      initialValues: { email: '', username: '', password: '', confirmPassword: '', name: '' },
      onSubmit: onSubmit,
      validationSchema: validationSchema,
      render: function render(_ref2) {
        var values = _ref2.values,
            touched = _ref2.touched,
            handleChange = _ref2.handleChange,
            handleBlur = _ref2.handleBlur,
            handleSubmit = _ref2.handleSubmit,
            handleReset = _ref2.handleReset,
            errors = _ref2.errors,
            isValid = _ref2.isValid,
            isSubmitting = _ref2.isSubmitting;

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
            label: 'Full Name',
            name: 'name',
            placeholder: 'Doggo Best',
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.name,
            error: touched.name && errors.name,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
            label: 'Username',
            name: 'username',
            placeholder: 'awesome-doggo',
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.username,
            error: touched.username && errors.username,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
            label: 'Email',
            name: 'email',
            type: 'email',
            placeholder: 'specksy@doggo.co',
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.email,
            error: touched.email && errors.email,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
            label: 'Password',
            name: 'password',
            type: 'password',
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.password,
            error: touched.password && errors.password,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
            label: 'Confirm Password',
            name: 'confirmPassword',
            type: 'password',
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.confirmPassword,
            error: touched.confirmPassword && errors.confirmPassword,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].buttonContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 98
              }
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
              {
                primary: true,
                disabled: !isValid || isSubmitting,
                type: 'submit',
                style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].submitButton,
                onClick: handleSubmit,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 99
                }
              },
              'Submit ',
              isSubmitting && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'span',
                { className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_9__["default"].spinnerIcon), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_8__["default"], { size: 20, width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                  }
                })
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
              { onClick: handleReset, link: true, style: _styles__WEBPACK_IMPORTED_MODULE_9__["default"].cancelButton, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 108
                }
              },
              'Reset'
            )
          )
        );
      }, __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    })
  );
};

SignupForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  hostRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};

/* harmony default export */ __webpack_exports__["default"] = (SignupForm);

/***/ }),

/***/ "./src/screens/Signup/SignupForm/styles.js":
/*!*************************************************!*\
  !*** ./src/screens/Signup/SignupForm/styles.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles */ "./src/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 0 2em;\n  width: 100%;\n  label: signup-body-form-cntr;\n\n  @media (max-width: ', ') {\n    padding: 0;\n  }\n'], ['\n  padding: 0 2em;\n  width: 100%;\n  label: signup-body-form-cntr;\n\n  @media (max-width: ', ') {\n    padding: 0;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  justify-content: center;\n  padding-top: 1em;\n'], ['\n  flex-direction: row;\n  justify-content: center;\n  padding-top: 1em;\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-left: 0.5em;\n  label: signup-submit-button-icon;\n'], ['\n  padding-left: 0.5em;\n  label: signup-submit-button-icon;\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-size: 1.3em;\n  margin-right: 1em;\n  label: signup-submit-button;\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n'], ['\n  font-size: 1.3em;\n  margin-right: 1em;\n  label: signup-submit-button;\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-left: 0.2em;\n'], ['\n  margin-left: 0.2em;\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: transparent;\n  color: ', ';\n  label: signup-cancel-button;\n\n  &:hover {\n    color: ', ';\n  }\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n'], ['\n  background-color: transparent;\n  color: ', ';\n  label: signup-cancel-button;\n\n  &:hover {\n    color: ', ';\n  }\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n']);





var formContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var buttonContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2);

var submitButtonIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3);

var submitButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var spinnerIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5);

var cancelButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.4, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText), _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var styles = {
  formContainer: formContainer,
  buttonContainer: buttonContainer,
  submitButtonIcon: submitButtonIcon,
  submitButton: submitButton,
  cancelButton: cancelButton,
  spinnerIcon: spinnerIcon
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/Signup/SignupSuccess/index.js":
/*!***************************************************!*\
  !*** ./src/screens/Signup/SignupSuccess/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/screens/Signup/SignupSuccess/styles.js");
var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Signup/SignupSuccess/index.js';








var SignupSuccess = function SignupSuccess(_ref) {
  var hostRef = _ref.hostRef;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_2__["default"],
    { hostRef: hostRef, style: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].successContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_3__["default"],
      { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].successHeaderText, __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      },
      'Thank you for signing up.'
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_3__["default"],
      { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].successInfoText, __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      'We\'ve sent you a verification link on your email. Please click verify in the email to continue.'
    )
  );
};

SignupSuccess.propTypes = {
  hostRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};

/* harmony default export */ __webpack_exports__["default"] = (SignupSuccess);

/***/ }),

/***/ "./src/screens/Signup/SignupSuccess/styles.js":
/*!****************************************************!*\
  !*** ./src/screens/Signup/SignupSuccess/styles.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 0 4em;\n  width: 100%;\n\n  @media (max-width: ', ') {\n    padding: 0;\n  }\n'], ['\n  padding: 0 4em;\n  width: 100%;\n\n  @media (max-width: ', ') {\n    padding: 0;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  text-align: left;\n  font-weight: 600;\n  margin-bottom: 2em;\n\n  @media (max-width: ', ') {\n    font-size: 1.5em;\n    margin-top: 1em;\n    margin-bottom: 1em;\n  }\n'], ['\n  text-align: left;\n  font-weight: 600;\n  margin-bottom: 2em;\n\n  @media (max-width: ', ') {\n    font-size: 1.5em;\n    margin-top: 1em;\n    margin-bottom: 1em;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n@media (max-width: ', ') {\n  font-size: 1em;\n  margin-bottom: 1em;\n}\n'], ['\n@media (max-width: ', ') {\n  font-size: 1em;\n  margin-bottom: 1em;\n}\n']);




var successContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var successHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var successInfoText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var styles = {
  successContainer: successContainer,
  successHeaderText: successHeaderText,
  successInfoText: successInfoText
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/Signup/index.js":
/*!*************************************!*\
  !*** ./src/screens/Signup/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _SignupForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SignupForm */ "./src/screens/Signup/SignupForm/index.js");
/* harmony import */ var _SignupSuccess__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SignupSuccess */ "./src/screens/Signup/SignupSuccess/index.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../store/actions/auth */ "./src/store/actions/auth.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./styles */ "./src/screens/Signup/styles.js");







var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Signup/index.js';

















var Signup = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Signup, _Component);

  function Signup(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Signup);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Signup.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(Signup)).call(this, props));

    _this.state = {
      isSignupSuccess: false
    };

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Signup, [{
    key: 'handleSubmit',
    value: function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, bag) {
        var data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _api__WEBPACK_IMPORTED_MODULE_18__["default"].signup(values);

              case 3:
                data = _context.sent;

                bag.setSubmitting(false);
                this.setState({ isSignupSuccess: true });
                this.props.signupAction(data.user);
                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](0);

                bag.setSubmitting(false);
                bag.setErrors(_api__WEBPACK_IMPORTED_MODULE_18__["default"].setErrors(_context.t0.response.data.errors.details.errors));

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function handleSubmit(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isAuthenticated && !this.state.isSignupSuccess) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Redirect"], { to: '/profile', __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        });
      }

      var PoseSignupForm = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(_SignupForm__WEBPACK_IMPORTED_MODULE_13__["default"])({
        visible: { opacity: 1 },
        invisible: { opacity: 0, display: 'none' }
      });

      var PoseSignupSuccess = react_pose__WEBPACK_IMPORTED_MODULE_9___default()(_SignupSuccess__WEBPACK_IMPORTED_MODULE_14__["default"])({
        visible: { opacity: 1 },
        invisible: { opacity: 0, display: 'none' }
      });

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_15__["default"],
        { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_15__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_15__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroLogoContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'a',
              { href: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 59
                }
              },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'bitcharge-logo', className: Object(emotion__WEBPACK_IMPORTED_MODULE_12__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].logoImageStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1532990484/icons/bitcharge-logo-white.png', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 59
                }
              })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_15__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroTextContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'signup-avatar', className: Object(emotion__WEBPACK_IMPORTED_MODULE_12__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].signupAvatarIconStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1535940306/dog-avatar.png', __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              }
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_16__["default"],
              { tag: 'h3', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroText, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 63
                }
              },
              'Let\'s get you set up.'
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_15__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroFooterContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_16__["default"],
              { tag: 'h6', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66
                }
              },
              'Already have an account. ',
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"],
                { to: '/login', className: Object(emotion__WEBPACK_IMPORTED_MODULE_12__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].LoginLink), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                  }
                },
                'Login'
              )
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_15__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].bodyContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PoseSignupForm, { pose: this.state.isSignupSuccess ? 'invisible' : 'visible', onSubmit: this.handleSubmit, __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PoseSignupSuccess, { pose: this.state.isSignupSuccess ? 'visible' : 'invisible', __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            }
          })
        )
      );
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

Signup.propTypes = {
  signupAction: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, { signupAction: _store_actions_auth__WEBPACK_IMPORTED_MODULE_17__["signup"] })(Signup));

/***/ }),

/***/ "./src/screens/Signup/styles.js":
/*!**************************************!*\
  !*** ./src/screens/Signup/styles.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  label: signup-main-cntr;\n  flex-direction: row;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n'], ['\n  background-color: ', ';\n  label: signup-main-cntr;\n  flex-direction: row;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 2;\n  background-color: ', ';\n  color: ', ';\n  padding: 0 2em;\n  label: signup-hero-cntr;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n'], ['\n  flex: 2;\n  background-color: ', ';\n  color: ', ';\n  padding: 0 2em;\n  label: signup-hero-cntr;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 5;\n  align-items: center;\n  justify-content: center;\n  padding: 0 2em;\n  height: 100vh;\n  label: signup-body-cntr;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n    height: auto;\n  }\n'], ['\n  flex: 5;\n  align-items: center;\n  justify-content: center;\n  padding: 0 2em;\n  height: 100vh;\n  label: signup-body-cntr;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n    height: auto;\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-top: 1em;\n'], ['\n  padding-top: 1em;\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 150px;\n  height: auto;\n'], ['\n  width: 150px;\n  height: auto;\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  margin-bottom: .5em;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 125px;\n    height: 125px;\n  }\n'], ['\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  margin-bottom: .5em;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 125px;\n    height: 125px;\n  }\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 1em;\n  font-weight: 600;\n  text-align: center;\n\n  @media (max-width: ', ') {\n    margin-top: .5em;\n    font-size: 1.5em;\n  }\n'], ['\n  margin-top: 1em;\n  font-weight: 600;\n  text-align: center;\n\n  @media (max-width: ', ') {\n    margin-top: .5em;\n    font-size: 1.5em;\n  }\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 1;\n  padding: 1em;\n  label: signup-hero-text-cntr;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    flex: none;\n    margin-top: 1em;\n  }\n'], ['\n  flex: 1;\n  padding: 1em;\n  label: signup-hero-text-cntr;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    flex: none;\n    margin-top: 1em;\n  }\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-bottom: 1em;\n'], ['\n  margin-bottom: 1em;\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 1;\n  padding: 4em 4em 4em 2em;\n  align-items: center;\n  justify-content: center;\n  label: signup-hero-image-cntr;\n'], ['\n  flex: 1;\n  padding: 4em 4em 4em 2em;\n  align-items: center;\n  justify-content: center;\n  label: signup-hero-image-cntr;\n']),
    _templateObject11 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n  margin-bottom: 1em;\n  label: home-hero-header-text;\n'], ['\n  font-weight: 500;\n  margin-bottom: 1em;\n  label: home-hero-header-text;\n']),
    _templateObject12 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  line-height: 1.5em;\n  font-weight: 400;\n  margin-bottom: 1.5em;\n  label: home-hero-header-subtext;\n'], ['\n  line-height: 1.5em;\n  font-weight: 400;\n  margin-bottom: 1.5em;\n  label: home-hero-header-subtext;\n']),
    _templateObject13 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  max-width: 100%;\n  height: auto;\n  label: home-hero-image;\n'], ['\n  max-width: 100%;\n  height: auto;\n  label: home-hero-image;\n']),
    _templateObject14 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  display: inline-block;\n  text-decoration: none;\n  color: ', ';\n  padding: .3em;\n  border-radius: .1em;\n  label: signup-login-link;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\n  &:hover {\n    background-color: ', ';\n    color: ', ';\n  }\n'], ['\n  font-weight: 600;\n  display: inline-block;\n  text-decoration: none;\n  color: ', ';\n  padding: .3em;\n  border-radius: .1em;\n  label: signup-login-link;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\n  &:hover {\n    background-color: ', ';\n    color: ', ';\n  }\n']);




var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var bodyContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroLogoContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4);

var logoImageStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5);

var signupAvatarIconStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroTextContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroFooterContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9);

var heroImageContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10);

var heroHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject11);

var heroSubHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12);

var heroImage = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject13);

var LoginLink = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject14, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary);

var styles = {
  mainContainer: mainContainer,
  bodyContainer: bodyContainer,
  heroContainer: heroContainer,
  heroLogoContainer: heroLogoContainer,
  logoImageStyle: logoImageStyle,
  heroTextContainer: heroTextContainer,
  heroText: heroText,
  heroFooterContainer: heroFooterContainer,
  signupAvatarIconStyle: signupAvatarIconStyle,
  heroImageContainer: heroImageContainer,
  heroHeaderText: heroHeaderText,
  heroSubHeaderText: heroSubHeaderText,
  heroImage: heroImage,
  LoginLink: LoginLink
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/SignupConfirmation/index.js":
/*!*************************************************!*\
  !*** ./src/screens/SignupConfirmation/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../store/actions/auth */ "./src/store/actions/auth.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./styles */ "./src/screens/SignupConfirmation/styles.js");







var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/SignupConfirmation/index.js';

















var SignupConfirming = function SignupConfirming(_ref) {
  var hostRef = _ref.hostRef;

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
    { hostRef: hostRef, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].confirmationContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    },
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
      { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].confirmationHeaderText, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      },
      'We are confirming your email...'
    )
  );
};

var SignupConfirmationError = function SignupConfirmationError(_ref2) {
  var hostRef = _ref2.hostRef,
      isAuthenticated = _ref2.isAuthenticated,
      handleVerify = _ref2.handleVerify,
      resentVerification = _ref2.resentVerification;

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
    { hostRef: hostRef, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].confirmationContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    },
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
      { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].confirmationHeaderText, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      },
      'Something went wrong'
    ),
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
      { tag: 'h5', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      },
      'Something went wrong while verifying your email. ',
      isAuthenticated ? 'Try resending the verification email' : 'Login to resend the verification email.'
    ),
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].buttonContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      },
      isAuthenticated ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_16__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], to: '/address/new', primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].submitButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        },
        'Resend Verifcation'
      ) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_16__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], to: '/login', primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].submitButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        'Login Now'
      ),
      isAuthenticated && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_16__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], to: '/profile', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].cancelButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        },
        'Skip'
      )
    ),
    resentVerification.action && resentVerification.success && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
      { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].resentVerificationText, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      },
      'Verification mail sent successfully.'
    )
  );
};

var SignupConfirmed = function SignupConfirmed(_ref3) {
  var hostRef = _ref3.hostRef,
      isAuthenticated = _ref3.isAuthenticated;

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
    { hostRef: hostRef, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].confirmationContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      }
    },
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
      { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].confirmationHeaderText, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      },
      'Woohoo! You\'re all set.'
    ),
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
      { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].confirmationInfoText, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      },
      'Thank you for verifying your account. ',
      isAuthenticated ? 'You can now start adding your addresses.' : 'You need to login to start adding your addresses.'
    ),
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].buttonContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      },
      isAuthenticated ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_16__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], to: '/address/new', primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].submitButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        },
        'Add an Address'
      ) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_16__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], to: '/login', primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].submitButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        },
        'Login Now'
      ),
      isAuthenticated && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_16__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], to: '/profile', link: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].cancelButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        },
        'Skip'
      )
    )
  );
};

var SignupConfirmationExpired = function SignupConfirmationExpired(_ref4) {
  var hostRef = _ref4.hostRef,
      isAuthenticated = _ref4.isAuthenticated,
      handleVerify = _ref4.handleVerify,
      resentVerification = _ref4.resentVerification;
  var action = resentVerification.action,
      success = resentVerification.success,
      error = resentVerification.error;

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
    _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
    { hostRef: hostRef, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].confirmationContainer, __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      }
    },
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
      { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].confirmationHeaderText, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      },
      'Something went wrong'
    ),
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
      { tag: 'h5', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      },
      'Your verification email is expired. ',
      isAuthenticated ? 'Try resending the verification email' : 'Login to resend the verification email.'
    ),
    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
      { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].buttonContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      },
      isAuthenticated ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_16__["default"],
        { onClick: handleVerify, primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].submitButton, disabled: action && !(success || error), __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        },
        'Resend Verifcation'
      ) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Button__WEBPACK_IMPORTED_MODULE_16__["default"],
        { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], to: '/login', primary: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].submitButton, __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        },
        'Login Now'
      )
    ),
    action && success && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
      { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].resentVerificationText, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      },
      'Verification mail sent successfully.'
    )
  );
};

var SignupConfirmation = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(SignupConfirmation, _Component);

  function SignupConfirmation(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, SignupConfirmation);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (SignupConfirmation.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(SignupConfirmation)).call(this, props));

    _this.state = {
      isConfirmed: false,
      isConfirming: false,
      isExpired: false,
      isError: false,
      resentVerification: false,
      resentVerificationSuccess: false,
      resentVerificationError: false
    };

    _this.resendVerificationMail = _this.resendVerificationMail.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(SignupConfirmation, [{
    key: 'componentDidMount',
    value: function () {
      var _ref5 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var query, response;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = qs__WEBPACK_IMPORTED_MODULE_13___default.a.parse(this.props.location.search.split('?')[1]);
                _context.prev = 1;
                _context.next = 4;
                return _api__WEBPACK_IMPORTED_MODULE_18__["default"].confirmEmail(query.confirmationCode);

              case 4:
                response = _context.sent;

                this.setState({ isConfirming: false });
                if (response) {
                  this.setState({ isConfirmed: true });
                  this.props.confirmEmailAction(true);
                }
                _context.next = 14;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](1);

                this.setState({ isConfirming: false });
                if (_context.t0.response.status === 410) {
                  this.setState({ isExpired: true });
                }
                this.setState({ isError: true });

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 9]]);
      }));

      function componentDidMount() {
        return _ref5.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'resendVerificationMail',
    value: function () {
      var _ref6 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _api__WEBPACK_IMPORTED_MODULE_18__["default"].verifyEmail();

              case 3:
                this.setState({ resentVerification: true });
                _context2.next = 9;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2['catch'](0);

                this.setState({ resentVerification: true, resentVerificationError: true });

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 6]]);
      }));

      function resendVerificationMail() {
        return _ref6.apply(this, arguments);
      }

      return resendVerificationMail;
    }()
  }, {
    key: 'render',
    value: function render() {
      var PoseSignupConfirming = react_pose__WEBPACK_IMPORTED_MODULE_11___default()(SignupConfirming)({
        visible: { opacity: 1 },
        invisible: { opacity: 0, display: 'none' }
      });

      var PoseSignupConfirmed = react_pose__WEBPACK_IMPORTED_MODULE_11___default()(SignupConfirmed)({
        visible: { opacity: 1 },
        invisible: { opacity: 0, display: 'none' }
      });

      var PoseSignupConfirmError = react_pose__WEBPACK_IMPORTED_MODULE_11___default()(SignupConfirmationError)({
        visible: { opacity: 1 },
        invisible: { opacity: 0, display: 'none' }
      });

      var PoseSignupConfirmExpired = react_pose__WEBPACK_IMPORTED_MODULE_11___default()(SignupConfirmationExpired)({
        visible: { opacity: 1 },
        invisible: { opacity: 0, display: 'none' }
      });

      var resentVerification = {
        action: true,
        success: this.state.resentVerificationSuccess,
        error: this.state.resentVerificationError
      };
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
        { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 155
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroLogoContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 156
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'a',
              { href: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 157
                }
              },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'bitcharge-logo', className: Object(emotion__WEBPACK_IMPORTED_MODULE_12__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].logoImageStyle), src: 'https://res.cloudinary.com/bitcharge/image/upload/v1532990484/icons/bitcharge-logo-white.png', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 157
                }
              })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroTextContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 159
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { className: Object(emotion__WEBPACK_IMPORTED_MODULE_12__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroAvatarIconStyle), alt: 'signup-confirmation-avatar', src: 'https://res.cloudinary.com/bitcharge/image/upload/v1535940306/fox-avatar.png', __source: {
                fileName: _jsxFileName,
                lineNumber: 160
              }
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
              { tag: 'h3', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroText, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 161
                }
              },
              'You\'re almost there.'
            )
          ),
          !this.props.isAuthenticated && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].heroFooterContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 164
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_15__["default"],
              { tag: 'h6', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 165
                }
              },
              'Already have an account. ',
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"],
                { to: '/login', className: Object(emotion__WEBPACK_IMPORTED_MODULE_12__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].LoginLink), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 165
                  }
                },
                'Login'
              )
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_14__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].bodyContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 170
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PoseSignupConfirming, { pose: this.state.isConfirming ? 'visible' : 'invisible', __source: {
              fileName: _jsxFileName,
              lineNumber: 171
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PoseSignupConfirmed, { pose: this.state.isConfirmed ? 'visible' : 'invisible', isAuthenticated: this.props.isAuthenticated, __source: {
              fileName: _jsxFileName,
              lineNumber: 172
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PoseSignupConfirmError, { pose: this.state.isError ? 'visible' : 'invisible', isAuthenticated: this.props.isAuthenticated, handleVerify: this.resendVerificationMail, resentVerification: resentVerification, __source: {
              fileName: _jsxFileName,
              lineNumber: 173
            }
          }),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PoseSignupConfirmExpired, { pose: this.state.isExpired ? 'visible' : 'invisible', isAuthenticated: this.props.isAuthenticated, handleVerify: this.resendVerificationMail, resentVerification: resentVerification, __source: {
              fileName: _jsxFileName,
              lineNumber: 174
            }
          })
        )
      );
    }
  }]);

  return SignupConfirmation;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

SignupConfirmed.propTypes = {
  hostRef: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
};

SignupConfirming.propTypes = {
  hostRef: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any
};

SignupConfirmationError.propTypes = {
  hostRef: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  handleVerify: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  resentVerification: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
};

SignupConfirmationExpired.propTypes = {
  hostRef: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  handleVerify: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  resentVerification: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
};

SignupConfirmation.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  confirmEmailAction: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, { confirmEmailAction: _store_actions_auth__WEBPACK_IMPORTED_MODULE_17__["confirmEmail"] })(SignupConfirmation));

/***/ }),

/***/ "./src/screens/SignupConfirmation/styles.js":
/*!**************************************************!*\
  !*** ./src/screens/SignupConfirmation/styles.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  label: signup-cnf-main-cntr;\n  flex-direction: row;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n'], ['\n  background-color: ', ';\n  label: signup-cnf-main-cntr;\n  flex-direction: row;\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 2;\n  background-color: ', ';\n  color: ', ';\n  padding: 0 2em;\n  label: signup-cnf-hero-cntr;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n'], ['\n  flex: 2;\n  background-color: ', ';\n  color: ', ';\n  padding: 0 2em;\n  label: signup-cnf-hero-cntr;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ', ';\n\n  @media (max-width: ', ') {\n    flex: none;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 5;\n  align-items: center;\n  justify-content: center;\n  padding: 2em;\n  height: 100vh;\n  label: signup-cnf-body-cntr;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n    height: auto;\n  }\n'], ['\n  flex: 5;\n  align-items: center;\n  justify-content: center;\n  padding: 2em;\n  height: 100vh;\n  label: signup-cnf-body-cntr;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n    height: auto;\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-top: 1em;\n'], ['\n  padding-top: 1em;\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 150px;\n  height: auto;\n'], ['\n  width: 150px;\n  height: auto;\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  margin-bottom: .5em;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 125px;\n    height: 125px;\n  }\n'], ['\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  margin-bottom: .5em;\n  border: 2px solid ', ';\n\n  @media (max-width: ', ') {\n    width: 125px;\n    height: 125px;\n  }\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 1em;\n  font-weight: 600;\n\n  @media (max-width: ', ') {\n    font-size: 1.5em;\n    text-align: center;\n  }\n'], ['\n  margin-top: 1em;\n  font-weight: 600;\n\n  @media (max-width: ', ') {\n    font-size: 1.5em;\n    text-align: center;\n  }\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex: 1;\n  padding: 1em;\n  label: signup-hero-text-cntr;\n  align-items: center;\n  justify-content: center;\n'], ['\n  flex: 1;\n  padding: 1em;\n  label: signup-hero-text-cntr;\n  align-items: center;\n  justify-content: center;\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-bottom: 1em;\n'], ['\n  margin-bottom: 1em;\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  display: inline-block;\n  text-decoration: none;\n  color: ', ';\n  padding: .3em;\n  border-radius: .1em;\n  label: signup-login-link;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\n  &:hover {\n    background-color: ', ';\n    color: ', ';\n  }\n'], ['\n  font-weight: 600;\n  display: inline-block;\n  text-decoration: none;\n  color: ', ';\n  padding: .3em;\n  border-radius: .1em;\n  label: signup-login-link;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\n  &:hover {\n    background-color: ', ';\n    color: ', ';\n  }\n']),
    _templateObject11 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 0 4em;\n  width: 100%;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n  }\n'], ['\n  padding: 0 4em;\n  width: 100%;\n\n  @media (max-width: ', ') {\n    padding: 1em;\n  }\n']),
    _templateObject12 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  text-align: left;\n  font-weight: 600;\n  margin-bottom: 2em;\n\n  @media (max-width: ', ') {\n    font-size: 1.5em;\n    margin-bottom: 1em;\n  }\n'], ['\n  text-align: left;\n  font-weight: 600;\n  margin-bottom: 2em;\n\n  @media (max-width: ', ') {\n    font-size: 1.5em;\n    margin-bottom: 1em;\n  }\n']),
    _templateObject13 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n@media (max-width: ', ') {\n  font-size: 1em;\n}\n'], ['\n@media (max-width: ', ') {\n  font-size: 1em;\n}\n']),
    _templateObject14 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 1em;\n  flex-direction: row;\n  justify-content: left;\n  padding-top: 1em;\n'], ['\n  margin-top: 1em;\n  flex-direction: row;\n  justify-content: left;\n  padding-top: 1em;\n']),
    _templateObject15 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-size: 1.3em;\n  label: signup-confirm-submit-button;\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n    padding-left: .75em;\n    padding-right: .75em;\n  }\n'], ['\n  font-size: 1.3em;\n  label: signup-confirm-submit-button;\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n    padding-left: .75em;\n    padding-right: .75em;\n  }\n']),
    _templateObject16 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: transparent;\n  color: ', ';\n  label: login-cancel-button;\n\n  &:hover {\n    color: ', ';\n  }\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n'], ['\n  background-color: transparent;\n  color: ', ';\n  label: login-cancel-button;\n\n  &:hover {\n    color: ', ';\n  }\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n  }\n']),
    _templateObject17 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 1.5em;\n  font-weight: 500;\n'], ['\n  margin-top: 1.5em;\n  font-weight: 500;\n']);





var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var bodyContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroLogoContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4);

var logoImageStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5);

var heroAvatarIconStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var heroTextContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8);

var heroFooterContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9);

var LoginLink = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary);

var confirmationContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject11, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var confirmationHeaderText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var confirmationInfoText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject13, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var buttonContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject14);

var submitButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject15, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var cancelButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject16, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.4, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText), _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var resentVerificationText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject17);

var styles = {
  mainContainer: mainContainer,
  heroContainer: heroContainer,
  bodyContainer: bodyContainer,
  heroText: heroText,
  heroAvatarIconStyle: heroAvatarIconStyle,
  heroTextContainer: heroTextContainer,
  heroFooterContainer: heroFooterContainer,
  heroLogoContainer: heroLogoContainer,
  logoImageStyle: logoImageStyle,
  LoginLink: LoginLink,
  confirmationContainer: confirmationContainer,
  confirmationHeaderText: confirmationHeaderText,
  confirmationInfoText: confirmationInfoText,
  buttonContainer: buttonContainer,
  submitButton: submitButton,
  cancelButton: cancelButton,
  resentVerificationText: resentVerificationText
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/Terms/index.js":
/*!************************************!*\
  !*** ./src/screens/Terms/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-media */ "react-media");
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_media__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Navbar */ "./src/components/Navbar/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _components_Scroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Scroll */ "./src/components/Scroll/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles */ "./src/screens/Terms/styles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");





var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/Terms/index.js';















var Terms = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Terms, _Component);

  function Terms() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Terms);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Terms.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Terms)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Terms, [{
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
        { fluid: true, fullHeight: true, style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Scroll__WEBPACK_IMPORTED_MODULE_13__["ScrollToTopOnMount"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
          { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
            { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].headerContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
              { tag: 'h1', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].headerTextStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                }
              },
              'Terms of Use'
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              react_media__WEBPACK_IMPORTED_MODULE_8___default.a,
              { query: '(max-width: ' + _styles__WEBPACK_IMPORTED_MODULE_15__["breakpoints"].tablet + ')', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25
                }
              },
              function (matches) {
                return matches ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_9__["default"], { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].workItemTextBorder, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  }
                }) : null;
              }
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].detailsContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              }
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  }
                },
                'Welcome to Bitcharge!'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                  }
                },
                'By using Bitcharge, you are allowing to be bound by our website\u2019s Terms and Conditions, all relevant laws and regulations, and you are liable to agree with any applicable local laws. These are Bitcharge\u2019s terms of use and apply to all users of this website and mobile applications.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                  }
                }),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                  }
                }),
                '\u2018We\u2019, \u2018our\u2019 or \u2018us\u2019 refers to Bitcharge. You will be forbidden from using this site if you do not agree with any of these terms. Copyright and trademark law protects all materials used on this website.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                  }
                }),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                  }
                }),
                'You also agree to our ',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"],
                  { to: '/', className: '' + Object(emotion__WEBPACK_IMPORTED_MODULE_6__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_14__["default"].linkText), __source: {
                      fileName: _jsxFileName,
                      lineNumber: 37
                    }
                  },
                  'privacy policy'
                ),
                '. We are not accountable for the quality, timing or legitimacy of content. We may make changes to these terms: if these changes are substantial and affect your privileges unfavourably, we will let you know by announcing the details on the site or via email before the changes come into effect.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  }
                }),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  }
                }),
                'If you continue to use Bitcharge after any modifications to the terms, it will indicate that you have accepted the revised terms.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                  }
                },
                'Use License'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                  }
                },
                'You are liable for all the activity on your profile. We can terminate your account if we find any breach in terms.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  }
                }),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  }
                }),
                'You should not break any law or prompt others to break the law.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  }
                }),
                'We reserve the right to force forfeiture of any username under circumstances that we deem necessary.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                  }
                }),
                'Do not vex or bully others, or support violence or hatred towards others.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  }
                }),
                'Do not share others\u2019 personal information or differently abuse it. Users with access to their Bitcharge personal information should not use it for anything irrelevant to Bitcharge.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  }
                }),
                'Do not post messages that are false or differently misleading.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                  }
                }),
                'Do not generate an account to stop others from using the name or to trade the name.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                  }
                }),
                'Do not modify or copy the materials on this website. You can only utilise the materials for any commercial purpose, or for any public display.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                  }
                }),
                'Do not attempt to decompile or modify engineer any software included on Bitcharge site.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                  }
                }),
                'You are not supposed to spam others and cannot use Bitcharge to host or distribute, malicious or destructive software.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                  }
                }),
                'Do not use the public details of a user or a business found on Bitcharge for anything illegal or malicious.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                  }
                }),
                'This license will automatically terminate if you infringe any of these restrictions and may be terminated by Bitcharge at any time.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                  }
                },
                'Indemnity'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                  }
                },
                'You have to reimburse us for all damages and liabilities, including legal fees, which may result from these terms or relate to your use of Bitcharge. We maintain the right to exclusive control over the defense of a claim included in this clause. If we exercise this right, then you have to assist us in our defense. Your responsibility to indemnify under this clause also refers to our affiliates, officers, directors, agents, employees, and third-party service providers.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 68
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                  }
                },
                'Disclaimer'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                  }
                },
                'Bitcharge is presented \u201Cas is\u201D and without warranty of any sort. Any warranty of merchantability, fitness for a specific purpose, non-infringement, and any other warranty is eliminated to the greatest extent as authorised by law. Besides, Bitcharge does not warrant or present any representations concerning the correctness, possible results, or authenticity of the use of the elements on its Internet web site or otherwise compared to such materials or on any sites associated with this site.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                  }
                }),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                  }
                }),
                'Bitcharge does not take responsibility for the accuracy or precision of user-generated content. Bitcharge does not directly or indirectly endorse or support any word or claim made by any of its users.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 77
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                  }
                },
                'Limitations'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                  }
                },
                'Bitcharge is not accountable to you for any concomitant, consequential or vindictive damages resulting out of these terms, or attempted use or your use of Bitcharge. We will not be responsible for any damages arising out of the inability to use the materials on Bitcharge\'s site even if Bitcharge representative has been informed orally or in writing of the occurrence of such damage. For this clause \u201Cwe\u201D and \u201Cour\u201D is established to include our members, officers, agents, directors, employees, and third-party service providers.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 85
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                  }
                },
                'Revisions and Errata'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                  }
                },
                'Bitcharge website may contain elements which comprise of technical, typographical, or sometimes photographic errors. We do not guarantee that any of the contents on our site are genuine, comprehensive, or contemporary.',
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                  }
                }),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                  }
                }),
                'Bitcharge can make changes to the materials received on its website at any time without notification. However, we do not make any commitment to refresh the contents.'
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _components_Container__WEBPACK_IMPORTED_MODULE_9__["default"],
              { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 94
                }
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { tag: 'h4', style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].sectionHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                  }
                },
                'Links'
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _components_Text__WEBPACK_IMPORTED_MODULE_10__["default"],
                { style: _styles__WEBPACK_IMPORTED_MODULE_14__["default"].bodyText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                  }
                },
                'Bitcharge has not studied all of the sites associated with its Internet web site and is not liable for the elements of any such linked site. The addition of any link does not indicate approval by Bitcharge site. Handling of any such linked web site is at the user\'s own risk.'
              )
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        })
      );
    }
  }]);

  return Terms;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Terms);

/***/ }),

/***/ "./src/screens/Terms/styles.js":
/*!*************************************!*\
  !*** ./src/screens/Terms/styles.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  background-color: ', ';\n  label: home-main-cntr;\n\n  @media (max-width: ', ') {\n    background-color: ', ';\n  }\n'], ['\n  background-color: ', ';\n  label: home-main-cntr;\n\n  @media (max-width: ', ') {\n    background-color: ', ';\n  }\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  min-height: calc(100vh - 4.5em);\n  border-top: 2px solid ', ';\n  align-items: center;\n  label: home-body-cntr;\n\n  @media (max-width: ', ') {\n    border-bottom: 1px solid ', ';\n  }\n'], ['\n  min-height: calc(100vh - 4.5em);\n  border-top: 2px solid ', ';\n  align-items: center;\n  label: home-body-cntr;\n\n  @media (max-width: ', ') {\n    border-bottom: 1px solid ', ';\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  height: 7px;\n  width: 60%;\n  margin-top: .5em;\n  background-color: ', ';\n\n  @media (max-width: ', ') {\n    height: 6px;\n  }\n'], ['\n  height: 7px;\n  width: 60%;\n  margin-top: .5em;\n  background-color: ', ';\n\n  @media (max-width: ', ') {\n    height: 6px;\n  }\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 5em;\n  margin-bottom: 3em;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    margin-top: 3em;\n    margin-bottom: 0;\n  }\n'], ['\n  margin-top: 5em;\n  margin-bottom: 3em;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: ', ') {\n    margin-top: 3em;\n    margin-bottom: 0;\n  }\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n\n  @media (max-width: ', ') {\n    font-weight: 500;\n    font-size: 2em;\n  }\n'], ['\n  font-weight: 600;\n\n  @media (max-width: ', ') {\n    font-weight: 500;\n    font-size: 2em;\n  }\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 65%;\n  margin-top: 3em;\n  margin-bottom: 5em;\n  background-color: ', ';\n  border-radius: 5px;\n  border: 1px solid ', ';\n  padding: 4em 5em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    padding: 1.5em;\n    border: 0;\n  }\n'], ['\n  width: 65%;\n  margin-top: 3em;\n  margin-bottom: 5em;\n  background-color: ', ';\n  border-radius: 5px;\n  border: 1px solid ', ';\n  padding: 4em 5em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    padding: 1.5em;\n    border: 0;\n  }\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 2em 0;\n  border-bottom: 1px dashed ', ';\n\n  &:last-child {\n    border-bottom: 0;\n  }\n'], ['\n  padding: 2em 0;\n  border-bottom: 1px dashed ', ';\n\n  &:last-child {\n    border-bottom: 0;\n  }\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n  margin: 1em 0 1.5em 0;\n'], ['\n  font-weight: 500;\n  margin: 1em 0 1.5em 0;\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  color: ', ';\n  line-height: 1.5;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    font-size: 1em;\n  }\n'], ['\n  color: ', ';\n  line-height: 1.5;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    font-size: 1em;\n  }\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  color: ', ';\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.15s ease-out;\n\n  &:hover {\n    color: ', ';\n  }\n'], ['\n  color: ', ';\n  font-weight: 500;\n  text-decoration: none;\n  transition: all 0.15s ease-out;\n\n  &:hover {\n    color: ', ';\n  }\n']);





var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].background, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white);

var bodyContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].primary, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder);

var workItemTextBorder = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].secondary, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var headerContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var headerTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var detailsContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.1, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder), _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var sectionContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder);

var sectionHeader = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8);

var bodyText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText), _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var linkText = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].linkText, Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].linkText));

var styles = {
  mainContainer: mainContainer,
  bodyContainer: bodyContainer,
  detailsContainer: detailsContainer,
  headerContainer: headerContainer,
  workItemTextBorder: workItemTextBorder,
  headerTextStyle: headerTextStyle,
  sectionContainer: sectionContainer,
  sectionHeader: sectionHeader,
  bodyText: bodyText,
  linkText: linkText
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/UserProfile/EditProfileForm/index.js":
/*!**********************************************************!*\
  !*** ./src/screens/UserProfile/EditProfileForm/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Input */ "./src/components/Input/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Spinner */ "./src/components/Spinner/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles */ "./src/screens/UserProfile/EditProfileForm/styles.js");
var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/UserProfile/EditProfileForm/index.js';














var validationSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2),
  intro: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(1)
});

var EditProfileForm = function EditProfileForm(_ref) {
  var onSubmit = _ref.onSubmit,
      user = _ref.user;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: { name: user.name, intro: user.intro || '' },
    onSubmit: onSubmit,
    validationSchema: validationSchema,
    render: function render(_ref2) {
      var values = _ref2.values,
          handleChange = _ref2.handleChange,
          handleSubmit = _ref2.handleSubmit,
          handleBlur = _ref2.handleBlur,
          handleReset = _ref2.handleReset,
          errors = _ref2.errors,
          touched = _ref2.touched,
          isValid = _ref2.isValid,
          isSubmitting = _ref2.isSubmitting;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formBodyContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formItemContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_6__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formItemLabel, __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              }
            },
            'Full Name'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
            name: 'name',
            inputContainerStyle: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].inputContainerStyle,
            noErrorText: true,
            inputStyle: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].textInputStyle,
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.name,
            error: touched.name && errors.name,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formItemContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_6__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formItemLabel, __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            },
            'Intro'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
            name: 'intro',
            noErrorText: true,
            type: 'textarea',
            inputContainerStyle: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].inputContainerStyle,
            inputStyle: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].textInputStyle,
            onChange: handleChange,
            onBlur: handleBlur,
            value: values.intro,
            error: touched.intro && errors.intro,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_5__["default"],
          { style: Object(emotion__WEBPACK_IMPORTED_MODULE_4__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].formItemContainer, _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formButtonContainer), __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
            {
              primary: true,
              disabled: !isValid || isSubmitting,
              onClick: handleSubmit,
              style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formButtonStyle,
              type: 'submit',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              }
            },
            'Save ',
            isSubmitting && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'span',
              { className: Object(emotion__WEBPACK_IMPORTED_MODULE_4__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_10__["default"].spinnerIcon), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 76
                }
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_9__["default"], { size: 20, width: 4, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 76
                }
              })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_7__["default"],
            {
              onClick: handleReset,
              style: _styles__WEBPACK_IMPORTED_MODULE_10__["default"].formButtonStyle,
              link: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 78
              }
            },
            'Cancel'
          )
        )
      );
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  });
};

EditProfileForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/* harmony default export */ __webpack_exports__["default"] = (EditProfileForm);

/***/ }),

/***/ "./src/screens/UserProfile/EditProfileForm/styles.js":
/*!***********************************************************!*\
  !*** ./src/screens/UserProfile/EditProfileForm/styles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles */ "./src/styles/index.js");


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 1em;\n'], ['\n  margin-top: 1em;\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding: 2em 0 2em 0;\n  border-bottom: .5px dotted ', ';\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  &:last-child {\n    border-bottom: 0;\n  }\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 1em 0;\n  }\n'], ['\n  padding: 2em 0 2em 0;\n  border-bottom: .5px dotted ', ';\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  &:last-child {\n    border-bottom: 0;\n  }\n\n  @media (max-width: ', ') {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 1em 0;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-right: 2em;\n  font-weight: 500;\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n}\n\n'], ['\n  margin-right: 2em;\n  font-weight: 500;\n\n  @media (max-width: ', ') {\n    font-size: 1em;\n}\n\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  margin-top: 0.6em;\n\n  @media (max-width: ', ') {\n    flex-direction: row;\n    align-items: flex-start;\n    padding: 1em 0;\n  }\n'], ['\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  margin-top: 0.6em;\n\n  @media (max-width: ', ') {\n    flex-direction: row;\n    align-items: flex-start;\n    padding: 1em 0;\n  }\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  font-size: 1em;\n'], ['\n  font-weight: 600;\n  font-size: 1em;\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-left: auto;\n  margin-right: -1em;\n\n  @media (max-width: ', ') {\n    margin-right: 0;\n  }\n'], ['\n  margin-left: auto;\n  margin-right: -1em;\n\n  @media (max-width: ', ') {\n    margin-right: 0;\n  }\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 70%;\n\n  @media (max-width: ', ') {\n    width: 100%;\n  }\n'], ['\n  width: 70%;\n\n  @media (max-width: ', ') {\n    width: 100%;\n  }\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-left: 0.2em;\n'], ['\n  margin-left: 0.2em;\n']);




var formBodyContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject);

var formItemContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var formItemLabel = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var formButtonContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var formButtonStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5);

var textInputStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var inputContainerStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var spinnerIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8);

var styles = {
  formBodyContainer: formBodyContainer,
  formItemContainer: formItemContainer,
  formButtonContainer: formButtonContainer,
  formItemLabel: formItemLabel,
  textInputStyle: textInputStyle,
  formButtonStyle: formButtonStyle,
  inputContainerStyle: inputContainerStyle,
  spinnerIcon: spinnerIcon
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/screens/UserProfile/index.js":
/*!******************************************!*\
  !*** ./src/screens/UserProfile/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "babel-runtime/helpers/inherits");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Container */ "./src/components/Container/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Spinner */ "./src/components/Spinner/index.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Text */ "./src/components/Text/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Button */ "./src/components/Button/index.js");
/* harmony import */ var _EditProfileForm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./EditProfileForm */ "./src/screens/UserProfile/EditProfileForm/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../store/actions/auth */ "./src/store/actions/auth.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./styles */ "./src/screens/UserProfile/styles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");







var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/screens/UserProfile/index.js';
/* global FileReader */
/* global FormData */



















var UserProfile = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(UserProfile, _Component);

  function UserProfile(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, UserProfile);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (UserProfile.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_2___default()(UserProfile)).call(this, props));

    _this._renderLoading = function () {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
        { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].loadingContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_13__["default"], { size: 50, width: 7, color: _styles__WEBPACK_IMPORTED_MODULE_20__["colors"].lightText, __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        })
      );
    };

    _this.fileChangeHandler = function (event) {
      if (event.target.files && event.target.files[0]) {
        _this.setState({ selectedProfileImageBinary: event.target.files[0] });
        var reader = new FileReader();
        reader.onload = function (e) {
          _this.setState({ selectedProfileImage: e.target.result });
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    };

    _this.onAvatarCancel = function () {
      _this.setState({ selectedProfileImage: null });
    };

    _this.getUserImage = function (user) {
      if (_this.state.selectedProfileImage) {
        return _this.state.selectedProfileImage;
      }
      if (user.avatar) {
        return user.avatar;
      }

      return 'https://res.cloudinary.com/bitcharge/image/upload/v1535940305/panda-avatar.png';
    };

    _this._renderUserDetails = function (user) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].avatarContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].editImageContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 102
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', { alt: 'user-avatar', className: Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].avatarIconStyle), src: _this.getUserImage(user), __source: {
                fileName: _jsxFileName,
                lineNumber: 103
              }
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('input', { type: 'file', id: 'profileImage', accept: 'image/*', className: Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].inputStyle), onChange: _this.fileChangeHandler, __source: {
                fileName: _jsxFileName,
                lineNumber: 104
              }
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'label',
              { htmlFor: 'profileImage', className: Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].editImageIconContainer), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 105
                }
              },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                'svg',
                { className: 'mdi-icon ', width: '14', height: '14', fill: 'white', viewBox: '0 0 24 24', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                  }
                },
                react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('path', { d: 'M4,4H7L9,2H15L17,4H20C21.1,4 22,4.9 22,6V18C22,19.1 21.1,20 20,20H4C2.9,20 2,19.1 2,18V6C2,4.9 2.9,4 4,4M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7M12,9C13.66,9 15,10.34 15,12C15,13.66 13.66,15 12,15C10.34,15 9,13.66 9,12C9,10.34 10.34,9 12,9Z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                  }
                })
              )
            )
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].headerTextContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 108
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_14__["default"],
            { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].headerNameTextStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 109
              }
            },
            user.name
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Text__WEBPACK_IMPORTED_MODULE_14__["default"],
            { tag: 'h6', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].headerUsernameTextStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              }
            },
            user.username
          )
        ),
        _this.state.selectedProfileImage && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].editAvatarOptionsContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 113
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_15__["default"],
            {
              primary: true,
              onClick: _this.handleAvatarSubmit,
              style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].editProfileButton,
              disabled: _this.state.isSubmittingAvatar,
              type: 'submit',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 114
              }
            },
            'Save ',
            _this.state.isSubmittingAvatar && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'span',
              { className: Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].spinnerIcon), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 121
                }
              },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_13__["default"], { size: 18, width: 4, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 121
                }
              })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Button__WEBPACK_IMPORTED_MODULE_15__["default"],
            {
              onClick: _this.onAvatarCancel,
              style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].editProfileButton,
              disabled: _this.state.isSubmittingAvatar,
              link: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 123
              }
            },
            'Cancel'
          )
        ),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].detailsContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 133
            }
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
            { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].profileHeaderContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 134
              }
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Text__WEBPACK_IMPORTED_MODULE_14__["default"],
              { tag: 'h5', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].profileHeaderTextStyle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 135
                }
              },
              'My Profile'
            ),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_15__["default"],
              { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Link"], to: '/' + user.username, target: '_blank', style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].editProfileButton, secondary: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 136
                }
              },
              'View Profile',
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('i', { className: 'icon ion-md-person ' + Object(emotion__WEBPACK_IMPORTED_MODULE_9__["cx"])(_styles__WEBPACK_IMPORTED_MODULE_19__["default"].editIcon), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 136
                }
              })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_EditProfileForm__WEBPACK_IMPORTED_MODULE_16__["default"], { user: user, onSubmit: _this.handleProfileSubmit, __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            }
          })
        )
      );
    };

    _this.state = {
      selectedProfileImage: null,
      selectedProfileImageBinary: null,
      isSubmittingAvatar: false
    };

    _this.handleAvatarSubmit = _this.handleAvatarSubmit.bind(_this);
    _this.handleProfileSubmit = _this.handleProfileSubmit.bind(_this);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(UserProfile, [{
    key: 'handleAvatarSubmit',
    value: function () {
      var _ref = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var formData, user;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({ isSubmittingAvatar: true });
                _context.prev = 1;
                formData = new FormData();

                formData.append('avatar', this.state.selectedProfileImageBinary, this.state.selectedProfileImageBinary.name);
                _context.next = 6;
                return _api__WEBPACK_IMPORTED_MODULE_17__["default"].updateUser(formData);

              case 6:
                user = _context.sent;

                this.setState({
                  selectedProfileImage: null,
                  selectedProfileImageBinary: null,
                  isSubmittingAvatar: false
                });
                this.props.getAuthUser(user);
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](1);

                this.setState({ isSubmittingAvatar: false });

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 11]]);
      }));

      function handleAvatarSubmit() {
        return _ref.apply(this, arguments);
      }

      return handleAvatarSubmit;
    }()
  }, {
    key: 'handleProfileSubmit',
    value: function () {
      var _ref2 = babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(values, bag) {
        var data;
        return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _api__WEBPACK_IMPORTED_MODULE_17__["default"].updateUser(values);

              case 3:
                data = _context2.sent;

                bag.setSubmitting(false);
                this.props.getAuthUser(data);
                _context2.next = 12;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2['catch'](0);

                bag.setSubmitting(false);
                bag.setErrors(_api__WEBPACK_IMPORTED_MODULE_17__["default"].setErrors(_context2.t0.response.data.errors.details.errors));

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function handleProfileSubmit(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return handleProfileSubmit;
    }()
  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
        { fluid: true, style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _components_Container__WEBPACK_IMPORTED_MODULE_12__["default"],
          { style: _styles__WEBPACK_IMPORTED_MODULE_19__["default"].cardContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 146
            }
          },
          this.props.user ? this._renderUserDetails(this.props.user) : this._renderLoading()
        )
      );
    }
  }]);

  return UserProfile;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

UserProfile.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  getAuthUser: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, { getAuthUser: _store_actions_auth__WEBPACK_IMPORTED_MODULE_18__["getAuthUser"] })(UserProfile));

/***/ }),

/***/ "./src/screens/UserProfile/styles.js":
/*!*******************************************!*\
  !*** ./src/screens/UserProfile/styles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/taggedTemplateLiteral */ "babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./src/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);


var _templateObject = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 100%;\n  align-items: center;\n  min-height: calc(100vh - 4.5em);\n  border-bottom: 1px solid ', ';\n'], ['\n  width: 100%;\n  align-items: center;\n  min-height: calc(100vh - 4.5em);\n  border-bottom: 1px solid ', ';\n']),
    _templateObject2 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 45em;\n  margin-top: 3em;\n  margin-bottom: 3em;\n  background-color: ', ';\n  border-radius: 4px;\n  padding: 2em 3em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    padding: 1.5em;\n  }\n'], ['\n  width: 45em;\n  margin-top: 3em;\n  margin-bottom: 3em;\n  background-color: ', ';\n  border-radius: 4px;\n  padding: 2em 3em;\n\n  @media (max-width: ', ') {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    padding: 1.5em;\n  }\n']),
    _templateObject3 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  align-items: center;\n  justify-content: center;\n  padding: 5em;\n'], ['\n  align-items: center;\n  justify-content: center;\n  padding: 5em;\n']),
    _templateObject4 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n'], ['\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n']),
    _templateObject5 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  display: block;\n  position: relative;\n'], ['\n  display: block;\n  position: relative;\n']),
    _templateObject6 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 125px;\n  height: 125px;\n  border-radius: 50%;\n  display: inline-block;\n  object-fit: cover;\n  border: 2px solid ', ';\n'], ['\n  width: 125px;\n  height: 125px;\n  border-radius: 50%;\n  display: inline-block;\n  object-fit: cover;\n  border: 2px solid ', ';\n']),
    _templateObject7 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n'], ['\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n']),
    _templateObject8 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  display: flex;\n  width: 32px;\n  height: 32px;\n  border-radius: 100%;\n  border: 1px solid white;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  bottom: 2px;\n  right: 2px;\n  background: ', ';\n  transition: all 0.15s ease-out;\n\n  &:hover {\n    background-color: ', ';\n  }\n'], ['\n  display: flex;\n  width: 32px;\n  height: 32px;\n  border-radius: 100%;\n  border: 1px solid white;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  bottom: 2px;\n  right: 2px;\n  background: ', ';\n  transition: all 0.15s ease-out;\n\n  &:hover {\n    background-color: ', ';\n  }\n']),
    _templateObject9 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  padding-top: 1.5em;\n  text-align: center;\n'], ['\n  padding-top: 1.5em;\n  text-align: center;\n']),
    _templateObject10 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 500;\n'], ['\n  font-weight: 500;\n']),
    _templateObject11 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  color: ', ';\n'], ['\n  color: ', ';\n']),
    _templateObject12 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-top: 0.6em;\n'], ['\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-top: 0.6em;\n']),
    _templateObject13 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-top: 2em;\n'], ['\n  margin-top: 2em;\n']),
    _templateObject14 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 1em;\n  border-bottom: .5px dashed ', ';\n'], ['\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 1em;\n  border-bottom: .5px dashed ', ';\n']),
    _templateObject15 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  margin-bottom: -0.4em;\n'], ['\n  font-weight: 600;\n  margin-bottom: -0.4em;\n']),
    _templateObject16 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  font-weight: 600;\n  font-size: 1em;\n\n  @media (max-width: ', ') {\n    padding-left: .8em;\n    padding-right: .8em;\n  }\n'], ['\n  font-weight: 600;\n  font-size: 1em;\n\n  @media (max-width: ', ') {\n    padding-left: .8em;\n    padding-right: .8em;\n  }\n']),
    _templateObject17 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-left: 0.75em;\n'], ['\n  margin-left: 0.75em;\n']),
    _templateObject18 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-left: 0.3em;\n'], ['\n  margin-left: 0.3em;\n']),
    _templateObject19 = babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(['\n  margin-left: 0.2em;\n'], ['\n  margin-left: 0.2em;\n']);





var mainContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightGray);

var cardContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].tablet);

var loadingContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3);

var avatarContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4);

var editImageContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5);

var avatarIconStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].white);

var inputStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7);

var editImageIconContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].blackText));

var headerTextContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9);

var headerNameTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10);

var headerUsernameTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject11, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].lightText);

var editAvatarOptionsContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12);

var detailsContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject13);

var profileHeaderContainer = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject14, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].defaultBorder);

var profileHeaderTextStyle = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject15);

var editProfileButton = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject16, _styles__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].mobile);

var editIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject17);

var verifiedIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject18);

var spinnerIcon = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject19);

var styles = {
  mainContainer: mainContainer,
  cardContainer: cardContainer,
  loadingContainer: loadingContainer,
  avatarContainer: avatarContainer,
  editImageContainer: editImageContainer,
  avatarIconStyle: avatarIconStyle,
  inputStyle: inputStyle,
  headerTextContainer: headerTextContainer,
  headerNameTextStyle: headerNameTextStyle,
  editAvatarOptionsContainer: editAvatarOptionsContainer,
  headerUsernameTextStyle: headerUsernameTextStyle,
  editImageIconContainer: editImageIconContainer,
  detailsContainer: detailsContainer,
  profileHeaderContainer: profileHeaderContainer,
  profileHeaderTextStyle: profileHeaderTextStyle,
  editProfileButton: editProfileButton,
  editIcon: editIcon,
  verifiedIcon: verifiedIcon,
  spinnerIcon: spinnerIcon
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "babel-runtime/core-js/json/stringify");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/promise */ "babel-runtime/core-js/promise");
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var emotion_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! emotion-server */ "emotion-server");
/* harmony import */ var emotion_server__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(emotion_server__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes */ "./src/routes.js");


var _jsxFileName = '/Users/Yogesh/Projects/Bitcharge/bit-web/src/server.js';









var assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");

var server = express__WEBPACK_IMPORTED_MODULE_5___default()();
server.disable('x-powered-by').use(express__WEBPACK_IMPORTED_MODULE_5___default.a.static("/Users/Yogesh/Projects/Bitcharge/bit-web/public")).get('/*', function (req, res) {
  var context = {};

  var matches = _routes__WEBPACK_IMPORTED_MODULE_8__["default"].map(function (route, index) {
    var match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["matchPath"])(req.url, route.path, route);
    if (match) {
      var obj = {
        route: route,
        match: match,
        promise: route.component.getInitialData ? route.component.getInitialData({ match: match, req: req, res: res }) : babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(null)
      };
      return obj;
    }

    return null;
  });
  if (matches.length === 0) {
    res.status(404).send('Not found');
  }

  var promises = matches.map(function (match) {
    return match ? match.promise : null;
  });

  var renderMarkup = function renderMarkup(initialData) {
    var initialDataError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    if (!initialData) {
      initialData = [];
    }
    var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_6__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
      react_router_dom__WEBPACK_IMPORTED_MODULE_4__["StaticRouter"],
      { context: context, location: req.url, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      },
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], { routes: _routes__WEBPACK_IMPORTED_MODULE_8__["default"], initialData: initialData, initialDataError: initialDataError, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      })
    ));
    var htmlWithStyles = Object(emotion_server__WEBPACK_IMPORTED_MODULE_7__["renderStylesToString"])(markup);

    if (context.url) {
      return res.redirect(context.url);
    } else {
      return '<!doctype html>\n      <html lang="">\n      <head>\n          <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n          <meta charset="utf-8" />\n          <link rel="manifest" href="/manifest.json">\n          <link rel="shortcut icon" href="/favicon.png">\n          <link href="https://unpkg.com/ionicons@4.0.0/dist/css/ionicons.min.css"rel="stylesheet"/>\n          <title>Bitcharge</title>\n          <meta name="viewport" content="width=device-width, initial-scale=1">\n          ' + (assets.client.css ? '<link rel="stylesheet" href="' + assets.client.css + '">' : '') + '\n          ' + ( false ? undefined : '<script src="' + assets.client.js + '" defer crossorigin></script>') + '\n      </head>\n      <body>\n          <div id="root">' + htmlWithStyles + '</div>\n          <script>window._INITIAL_DATA_ = ' + babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(initialData) + ';</script>\n          <script>window._INITIAL_DATA_ERROR_ = ' + babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(initialDataError) + ';</script>\n      </body>\n    </html>';
    }
  };

  babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all(promises).then(function (data) {
    var markup = renderMarkup(data);
    return res.status(200).send(markup);
  }).catch(function (error) {
    console.log(error);
    var markup = renderMarkup(null, true);
    return res.status(200).send(markup);
  });
});

/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ }),

/***/ "./src/store/actions/address.js":
/*!**************************************!*\
  !*** ./src/store/actions/address.js ***!
  \**************************************/
/*! exports provided: fetchAddresses, addAddress, updateAddress, deleteAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAddresses", function() { return fetchAddresses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAddress", function() { return addAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAddress", function() { return updateAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAddress", function() { return deleteAddress; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/store/constants.js");


var fetchAddresses = function fetchAddresses() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["FETCH_ADDRESSES"]
  };
};

var addAddress = function addAddress(address) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["ADD_ADDRESS"],
    payload: {
      address: address
    }
  };
};

var updateAddress = function updateAddress(address) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["UPDATE_ADDRESS"],
    payload: {
      address: address
    }
  };
};

var deleteAddress = function deleteAddress(address, params) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["DELETE_ADDRESS"],
    payload: {
      address: address,
      params: params
    }
  };
};



/***/ }),

/***/ "./src/store/actions/auth.js":
/*!***********************************!*\
  !*** ./src/store/actions/auth.js ***!
  \***********************************/
/*! exports provided: signup, login, logout, getAuthUser, confirmEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthUser", function() { return getAuthUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmEmail", function() { return confirmEmail; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/store/constants.js");


var signup = function signup(user) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["SIGNUP"],
    payload: {
      isAuthenticated: true,
      user: user
    }
  };
};

var login = function login(user) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["LOGIN"],
    payload: {
      isAuthenticated: true,
      user: user
    }
  };
};

var logout = function logout() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["LOGOUT"]
  };
};

var getAuthUser = function getAuthUser() {
  var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["FETCH_AUTH_USER"],
    payload: {
      user: user
    }
  };
};

var confirmEmail = function confirmEmail(success) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["CONFIRM_EMAIL"],
    payload: {
      success: success
    }
  };
};



/***/ }),

/***/ "./src/store/constants.js":
/*!********************************!*\
  !*** ./src/store/constants.js ***!
  \********************************/
/*! exports provided: SIGNUP, SIGNUP_SUCCESS, LOGIN, LOGIN_SUCCESS, CONFIRM_EMAIL, LOGOUT, LOGOUT_SUCCESS, FETCH_AUTH_USER, FETCH_AUTH_USER_SUCCESS, FETCH_AUTH_USER_ERROR, FETCH_ADDRESSES, FETCH_ADDRESSES_LOADING, FETCH_ADDRESSES_SUCCESS, FETCH_ADDRESSES_ERROR, ADD_ADDRESS, ADD_ADDRESS_SUCCESS, UPDATE_ADDRESS, UPDATE_ADDRESS_SUCCESS, DELETE_ADDRESS, DELETE_ADDRESS_SUCCESS, DELETE_ADDRESS_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP", function() { return SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_SUCCESS", function() { return SIGNUP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIRM_EMAIL", function() { return CONFIRM_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_SUCCESS", function() { return LOGOUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_AUTH_USER", function() { return FETCH_AUTH_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_AUTH_USER_SUCCESS", function() { return FETCH_AUTH_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_AUTH_USER_ERROR", function() { return FETCH_AUTH_USER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ADDRESSES", function() { return FETCH_ADDRESSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ADDRESSES_LOADING", function() { return FETCH_ADDRESSES_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ADDRESSES_SUCCESS", function() { return FETCH_ADDRESSES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ADDRESSES_ERROR", function() { return FETCH_ADDRESSES_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ADDRESS", function() { return ADD_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ADDRESS_SUCCESS", function() { return ADD_ADDRESS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ADDRESS", function() { return UPDATE_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ADDRESS_SUCCESS", function() { return UPDATE_ADDRESS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ADDRESS", function() { return DELETE_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ADDRESS_SUCCESS", function() { return DELETE_ADDRESS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ADDRESS_ERROR", function() { return DELETE_ADDRESS_ERROR; });
var SIGNUP = 'SIGNUP';
var SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

var LOGIN = 'LOGIN';
var LOGIN_SUCCESS = 'LOGIN_SUCCESS';

var CONFIRM_EMAIL = 'CONFIRM_EMAIL';

var LOGOUT = 'LOGOUT';
var LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

var FETCH_AUTH_USER = 'FETCH_AUTH_USER';
var FETCH_AUTH_USER_SUCCESS = 'FETCH_AUTH_USER_SUCCESS';
var FETCH_AUTH_USER_ERROR = 'FETCH_AUTH_USER_ERROR';

var FETCH_ADDRESSES = 'FETCH_ADDRESSES';
var FETCH_ADDRESSES_LOADING = 'FETCH_ADDRESSES_LOADING';
var FETCH_ADDRESSES_SUCCESS = 'FETCH_ADDRESSES_SUCCESS';
var FETCH_ADDRESSES_ERROR = 'FETCH_ADDRESSES_ERROR';

var ADD_ADDRESS = 'ADD_ADDRESS';
var ADD_ADDRESS_SUCCESS = 'ADD_ADDRESS_SUCCESS';

var UPDATE_ADDRESS = 'UPDATE_ADDRESS';
var UPDATE_ADDRESS_SUCCESS = 'UPDATE_ADDRESS_SUCCESS';

var DELETE_ADDRESS = 'DELETE_ADDRESS';
var DELETE_ADDRESS_SUCCESS = 'DELETE_ADDRESS_SUCCESS';
var DELETE_ADDRESS_ERROR = 'DELETE_ADDRESS_ERROR';

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./src/store/reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sagas */ "./src/store/sagas/index.js");







var sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();

var composeEnhancers =  false ? undefined : redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"];

var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(sagaMiddleware)));

sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/store/reducers/address.js":
/*!***************************************!*\
  !*** ./src/store/reducers/address.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/store/constants.js");



var initialState = {
  isLoading: false,
  addressList: {},
  isError: false
};

var fetchAddresses = function fetchAddresses(addresses) {
  var addressState = {};

  addresses.forEach(function (address) {
    addressState[address.address] = address;
  });

  return addressState;
};

var updateAddress = function updateAddress(address, addressState) {
  var key = address.address;
  var updatedAddressState = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, addressState);
  updatedAddressState[key] = address;

  return updatedAddressState;
};

var addAddress = function addAddress(address, addressState) {
  var addedAddressState = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, addressState);
  addedAddressState[address.address] = address;

  return addedAddressState;
};

var deleteAddress = function deleteAddress(address, addressState) {
  var deletedAddressState = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, addressState);
  delete deletedAddressState[address.address];

  return deletedAddressState;
};

var address = function address() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];
  var type = action.type,
      payload = action.payload;


  switch (type) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__["FETCH_ADDRESSES_LOADING"]:
      return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        isLoading: true
      });
    case _constants__WEBPACK_IMPORTED_MODULE_1__["FETCH_ADDRESSES_SUCCESS"]:
      return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        isLoading: false,
        addressList: fetchAddresses(payload.addresses)
      });

    case _constants__WEBPACK_IMPORTED_MODULE_1__["FETCH_ADDRESSES_ERROR"]:
      return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        isLoading: false,
        isError: true
      });

    case _constants__WEBPACK_IMPORTED_MODULE_1__["ADD_ADDRESS_SUCCESS"]:
      return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        addressList: addAddress(payload.address, state.addressList)
      });

    case _constants__WEBPACK_IMPORTED_MODULE_1__["UPDATE_ADDRESS_SUCCESS"]:
      return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        addressList: updateAddress(payload.address, state.addressList)
      });

    case _constants__WEBPACK_IMPORTED_MODULE_1__["DELETE_ADDRESS_SUCCESS"]:
      return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        addressList: deleteAddress(payload.address, state.addressList)
      });

    case _constants__WEBPACK_IMPORTED_MODULE_1__["DELETE_ADDRESS_ERROR"]:
      return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        isError: true
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (address);

/***/ }),

/***/ "./src/store/reducers/auth.js":
/*!************************************!*\
  !*** ./src/store/reducers/auth.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/store/constants.js");

/* global localStorage */





var initialState = {
  isAuthenticated: false,
  user: null
};

var getInitialState = function getInitialState() {
  try {
    var token = localStorage.getItem('JWT_TOKEN');

    var _jwtDecode = jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(token),
        exp = _jwtDecode.exp;

    // Check if token is expired (It should be more than an hour)


    var isExpired = exp * 1000 - Date.now() < 60 * 1000;

    if (isExpired) {
      return initialState;
    } else {
      _api__WEBPACK_IMPORTED_MODULE_2__["default"].setAuthHeader(token);
      return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, initialState, { isAuthenticated: true });
    }
  } catch (e) {
    return initialState;
  }
};

var auth = function auth() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getInitialState();
  var action = arguments[1];
  var type = action.type,
      payload = action.payload;


  switch (type) {
    case _constants__WEBPACK_IMPORTED_MODULE_3__["SIGNUP_SUCCESS"]:
      return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, payload);

    case _constants__WEBPACK_IMPORTED_MODULE_3__["LOGIN_SUCCESS"]:
      return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, payload);

    case _constants__WEBPACK_IMPORTED_MODULE_3__["FETCH_AUTH_USER_SUCCESS"]:
      return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, payload);

    case _constants__WEBPACK_IMPORTED_MODULE_3__["FETCH_AUTH_USER_ERROR"]:
      return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, payload);

    case _constants__WEBPACK_IMPORTED_MODULE_3__["LOGOUT_SUCCESS"]:
      return babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, initialState);

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (auth);

/***/ }),

/***/ "./src/store/reducers/index.js":
/*!*************************************!*\
  !*** ./src/store/reducers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./src/store/reducers/auth.js");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address */ "./src/store/reducers/address.js");





var App = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _auth__WEBPACK_IMPORTED_MODULE_1__["default"],
  addresses: _address__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/store/sagas/address.js":
/*!************************************!*\
  !*** ./src/store/sagas/address.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "babel-runtime/core-js/object/assign");
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/store/constants.js");



var _marked = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(fetchAddressesFlow),
    _marked2 = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addAddressFlow),
    _marked3 = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(updateAddressFlow),
    _marked4 = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(deleteAddressFlow),
    _marked5 = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addressFlow);






function fetchAddressesFlow(action) {
  var addresses;
  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function fetchAddressesFlow$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({ type: _constants__WEBPACK_IMPORTED_MODULE_4__["FETCH_ADDRESSES_LOADING"] });

        case 3:
          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(_api__WEBPACK_IMPORTED_MODULE_3__["default"].getAddresses);

        case 5:
          addresses = _context.sent;
          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _constants__WEBPACK_IMPORTED_MODULE_4__["FETCH_ADDRESSES_SUCCESS"],
            payload: babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, addresses)
          });

        case 8:
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context['catch'](0);
          _context.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _constants__WEBPACK_IMPORTED_MODULE_4__["FETCH_ADDRESSES_ERROR"]
          });

        case 14:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 10]]);
}

function addAddressFlow(action) {
  var payload;
  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addAddressFlow$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          payload = action.payload;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _constants__WEBPACK_IMPORTED_MODULE_4__["ADD_ADDRESS_SUCCESS"],
            payload: payload
          });

        case 3:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function updateAddressFlow(action) {
  var payload;
  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function updateAddressFlow$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          payload = action.payload;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _constants__WEBPACK_IMPORTED_MODULE_4__["UPDATE_ADDRESS_SUCCESS"],
            payload: payload
          });

        case 3:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

function deleteAddressFlow(action) {
  var payload;
  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function deleteAddressFlow$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          payload = action.payload;

          if (!(payload.params && payload.params.local)) {
            _context4.next = 6;
            break;
          }

          _context4.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _constants__WEBPACK_IMPORTED_MODULE_4__["DELETE_ADDRESS_SUCCESS"],
            payload: payload
          });

        case 4:
          _context4.next = 17;
          break;

        case 6:
          _context4.prev = 6;
          _context4.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(_api__WEBPACK_IMPORTED_MODULE_3__["default"].deleteAddress, payload.address);

        case 9:
          _context4.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _constants__WEBPACK_IMPORTED_MODULE_4__["DELETE_ADDRESS_SUCCESS"],
            payload: payload
          });

        case 11:
          _context4.next = 17;
          break;

        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4['catch'](6);
          _context4.next = 17;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _constants__WEBPACK_IMPORTED_MODULE_4__["DELETE_ADDRESS_ERROR"]
          });

        case 17:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this, [[6, 13]]);
}

function addressFlow() {
  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addressFlow$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_constants__WEBPACK_IMPORTED_MODULE_4__["FETCH_ADDRESSES"], fetchAddressesFlow);

        case 2:
          _context5.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_constants__WEBPACK_IMPORTED_MODULE_4__["ADD_ADDRESS"], addAddressFlow);

        case 4:
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_constants__WEBPACK_IMPORTED_MODULE_4__["UPDATE_ADDRESS"], updateAddressFlow);

        case 6:
          _context5.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_constants__WEBPACK_IMPORTED_MODULE_4__["DELETE_ADDRESS"], deleteAddressFlow);

        case 8:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this);
}

/* harmony default export */ __webpack_exports__["default"] = (addressFlow);

/***/ }),

/***/ "./src/store/sagas/auth.js":
/*!*********************************!*\
  !*** ./src/store/sagas/auth.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/store/constants.js");


var _marked = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signupFlow),
    _marked2 = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loginFlow),
    _marked3 = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(authProfileFlow),
    _marked4 = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logoutFlow),
    _marked5 = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(confirmEmailFlow),
    _marked6 = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(authFlow);

/* global localStorage */






var getAuthenticatedState = function getAuthenticatedState(state) {
  return state.auth.isAuthenticated;
};

var setToken = function setToken(token) {
  _api__WEBPACK_IMPORTED_MODULE_2__["default"].setAuthHeader(token);
  localStorage.setItem('JWT_TOKEN', token);
};

function signupFlow(action) {
  var payload;
  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signupFlow$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          payload = action.payload;


          setToken(payload.user.token);

          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({ type: _constants__WEBPACK_IMPORTED_MODULE_3__["SIGNUP_SUCCESS"], payload: payload });

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

function loginFlow(action) {
  var payload;
  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loginFlow$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          payload = action.payload;


          setToken(payload.user.token);

          _context2.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({ type: _constants__WEBPACK_IMPORTED_MODULE_3__["LOGIN_SUCCESS"], payload: payload });

        case 4:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function authProfileFlow(action) {
  var payload, isAuthenticated, data;
  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function authProfileFlow$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          payload = action.payload;

          if (!(payload && payload.user)) {
            _context3.next = 6;
            break;
          }

          _context3.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({ type: _constants__WEBPACK_IMPORTED_MODULE_3__["FETCH_AUTH_USER_SUCCESS"], payload: payload });

        case 4:
          _context3.next = 20;
          break;

        case 6:
          isAuthenticated = Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["select"])(getAuthenticatedState);

          if (!isAuthenticated) {
            _context3.next = 20;
            break;
          }

          _context3.prev = 8;
          _context3.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_api__WEBPACK_IMPORTED_MODULE_2__["default"].getAuthUser);

        case 11:
          data = _context3.sent;
          _context3.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({ type: _constants__WEBPACK_IMPORTED_MODULE_3__["FETCH_AUTH_USER_SUCCESS"], payload: { user: data } });

        case 14:
          _context3.next = 20;
          break;

        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3['catch'](8);
          _context3.next = 20;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _constants__WEBPACK_IMPORTED_MODULE_3__["FETCH_AUTH_USER_ERROR"],
            payload: {
              isAuthenticated: false
            }
          });

        case 20:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this, [[8, 16]]);
}

function logoutFlow() {
  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logoutFlow$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _api__WEBPACK_IMPORTED_MODULE_2__["default"].removeAuthHeader();
          localStorage.removeItem('JWT_TOKEN');
          _context4.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({ type: _constants__WEBPACK_IMPORTED_MODULE_3__["LOGOUT_SUCCESS"] });

        case 4:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this);
}

function confirmEmailFlow(action) {
  var payload;
  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function confirmEmailFlow$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          payload = action.payload;

          if (!payload.success) {
            _context5.next = 4;
            break;
          }

          _context5.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({ type: _constants__WEBPACK_IMPORTED_MODULE_3__["FETCH_AUTH_USER"] });

        case 4:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this);
}

function authFlow() {
  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function authFlow$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_constants__WEBPACK_IMPORTED_MODULE_3__["SIGNUP"], signupFlow);

        case 2:
          _context6.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_constants__WEBPACK_IMPORTED_MODULE_3__["LOGIN"], loginFlow);

        case 4:
          _context6.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_constants__WEBPACK_IMPORTED_MODULE_3__["LOGOUT"], logoutFlow);

        case 6:
          _context6.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_constants__WEBPACK_IMPORTED_MODULE_3__["FETCH_AUTH_USER"], authProfileFlow);

        case 8:
          _context6.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_constants__WEBPACK_IMPORTED_MODULE_3__["CONFIRM_EMAIL"], confirmEmailFlow);

        case 10:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this);
}

/* harmony default export */ __webpack_exports__["default"] = (authFlow);

/***/ }),

/***/ "./src/store/sagas/index.js":
/*!**********************************!*\
  !*** ./src/store/sagas/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./src/store/sagas/auth.js");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./address */ "./src/store/sagas/address.js");


var _marked = /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);






function rootSaga() {
  return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_auth__WEBPACK_IMPORTED_MODULE_2__["default"]);

        case 2:
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_address__WEBPACK_IMPORTED_MODULE_3__["default"]);

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

/* harmony default export */ __webpack_exports__["default"] = (rootSaga);

/***/ }),

/***/ "./src/styles/App.css":
/*!****************************!*\
  !*** ./src/styles/App.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader??ref--9-0!./fonts.css */ "./node_modules/css-loader/index.js?!./src/styles/fonts.css"), "");

// module
exports.push([module.i, "/* Reset CSS */\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n*:focus {\n\toutline: none;\n}\n\nhtml {\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  min-width: 100vw;\n  min-height: 100vh;\n  font-family: 'CircularStd', sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/styles/index.js":
/*!*****************************!*\
  !*** ./src/styles/index.js ***!
  \*****************************/
/*! exports provided: colors, typography, breakpoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typography", function() { return typography; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return breakpoints; });
var colors = {
  primary: '#95CC65',
  primaryDark: '#77A84D',
  secondary: '#68B7F0',
  disabled: '#C8D6E5',
  background: '#F0F1F5',
  white: '#FFFFFF',
  blackText: '#3A3D42',
  lightText: '#b2b7c4',
  defaultBorder: '#CAD7DD',
  lightBorder: '#343944',
  lightGray: '#EFEFEF',
  linkText: '#3D8CD6',
  errorText: '#E74C3C'
};

var typography = {
  h1: '2.5rem',
  h2: '2rem',
  h3: '1.75rem',
  h4: '1.5rem',
  h5: '1.25rem',
  h6: '1rem',
  primaryFont: '\'CircularStd\', sans-serif'
};

var breakpoints = {
  mobile: '575px',
  tablet: '768px',
  desktop: '991px'
};



/***/ }),

/***/ 0:
/*!**************************************************************************!*\
  !*** multi razzle-dev-utils/prettyNodeErrors webpack/hot/poll?300 ./src ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! razzle-dev-utils/prettyNodeErrors */"razzle-dev-utils/prettyNodeErrors");
__webpack_require__(/*! webpack/hot/poll?300 */"./node_modules/webpack/hot/poll.js?300");
module.exports = __webpack_require__(/*! /Users/Yogesh/Projects/Bitcharge/bit-web/src */"./src/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),

/***/ "babel-runtime/core-js/object/assign":
/*!******************************************************!*\
  !*** external "babel-runtime/core-js/object/assign" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),

/***/ "babel-runtime/core-js/object/get-prototype-of":
/*!****************************************************************!*\
  !*** external "babel-runtime/core-js/object/get-prototype-of" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),

/***/ "babel-runtime/core-js/object/keys":
/*!****************************************************!*\
  !*** external "babel-runtime/core-js/object/keys" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),

/***/ "babel-runtime/core-js/promise":
/*!************************************************!*\
  !*** external "babel-runtime/core-js/promise" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),

/***/ "babel-runtime/helpers/asyncToGenerator":
/*!*********************************************************!*\
  !*** external "babel-runtime/helpers/asyncToGenerator" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "babel-runtime/helpers/classCallCheck":
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/classCallCheck" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),

/***/ "babel-runtime/helpers/createClass":
/*!****************************************************!*\
  !*** external "babel-runtime/helpers/createClass" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),

/***/ "babel-runtime/helpers/extends":
/*!************************************************!*\
  !*** external "babel-runtime/helpers/extends" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),

/***/ "babel-runtime/helpers/inherits":
/*!*************************************************!*\
  !*** external "babel-runtime/helpers/inherits" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),

/***/ "babel-runtime/helpers/objectWithoutProperties":
/*!****************************************************************!*\
  !*** external "babel-runtime/helpers/objectWithoutProperties" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),

/***/ "babel-runtime/helpers/possibleConstructorReturn":
/*!******************************************************************!*\
  !*** external "babel-runtime/helpers/possibleConstructorReturn" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "babel-runtime/helpers/taggedTemplateLiteral":
/*!**************************************************************!*\
  !*** external "babel-runtime/helpers/taggedTemplateLiteral" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/taggedTemplateLiteral");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("emotion");

/***/ }),

/***/ "emotion-server":
/*!*********************************!*\
  !*** external "emotion-server" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("emotion-server");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "polished":
/*!***************************!*\
  !*** external "polished" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "qrcode.react":
/*!*******************************!*\
  !*** external "qrcode.react" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("qrcode.react");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "razzle-dev-utils/prettyNodeErrors":
/*!****************************************************!*\
  !*** external "razzle-dev-utils/prettyNodeErrors" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("razzle-dev-utils/prettyNodeErrors");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-copy-to-clipboard":
/*!******************************************!*\
  !*** external "react-copy-to-clipboard" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-copy-to-clipboard");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-emotion":
/*!********************************!*\
  !*** external "react-emotion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-emotion");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-media":
/*!******************************!*\
  !*** external "react-media" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-media");

/***/ }),

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),

/***/ "react-pose":
/*!*****************************!*\
  !*** external "react-pose" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-pose");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "react-select/lib/Async":
/*!*****************************************!*\
  !*** external "react-select/lib/Async" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select/lib/Async");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map