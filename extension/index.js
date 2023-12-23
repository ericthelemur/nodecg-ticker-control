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
})({"eGA2g":[function(require,module,exports) {
var _utils = require("./utils");
module.exports = function(nodecg) {
    (0, _utils.storeNodeCG)(nodecg);
    const replicants = require("4b0cb1a9fb475cd5");
    const queue = require("c441b82d69ed44ae");
    const listeners = require("41e8d6c82d5519d8");
};

},{"./utils":"8mEuU","4b0cb1a9fb475cd5":"40CoO","c441b82d69ed44ae":"avj3O","41e8d6c82d5519d8":"4lqHC"}],"8mEuU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "storeNodeCG", ()=>storeNodeCG);
parcelHelpers.export(exports, "getNodeCG", ()=>getNodeCG);
let nodecg;
function storeNodeCG(ncg) {
    nodecg = ncg;
}
function getNodeCG() {
    return nodecg;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"9VN6q"}],"9VN6q":[function(require,module,exports) {
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

},{}],"40CoO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bank", ()=>bank);
parcelHelpers.export(exports, "pools", ()=>pools);
parcelHelpers.export(exports, "queue", ()=>queue);
parcelHelpers.export(exports, "current", ()=>current);
var _utils = require("./utils");
const nodecg = (0, _utils.getNodeCG)();
const bank = nodecg.Replicant("bank");
const pools = nodecg.Replicant("pools");
const queue = nodecg.Replicant("queue");
const current = nodecg.Replicant("current");

},{"./utils":"8mEuU","@parcel/transformer-js/src/esmodule-helpers.js":"9VN6q"}],"avj3O":[function(require,module,exports) {
var _objectSpread = require("@swc/helpers/_/_object_spread");
var _objectSpreadProps = require("@swc/helpers/_/_object_spread_props");
var _replicants = require("./replicants");
var _utils = require("./utils");
const QUEUE_LEN = 12;
const DISPLAY_TIME = 5000;
const nodecg = (0, _utils.getNodeCG)();
function lastQueued(time) {
    const nextTime = (0, _replicants.current).value.endTime;
    const times = {};
    (0, _replicants.queue).value.msgs.forEach((ref, i)=>{
        times[ref.id] = nextTime + DISPLAY_TIME * i;
    });
    return times;
}
function pickNext(time) {
    const lastQueuedTimes = lastQueued(time);
    var maxRef;
    var maxMsg;
    var maxPriority = 0;
    for (const pool of Object.values((0, _replicants.pools).value))for (const ref of pool.msgs){
        const msg = (0, _replicants.bank).value[ref.id];
        const age = lastQueuedTimes[ref.id] || msg.lastShown || time - 3000000;
        const timeSince = (time - age) / 1000;
        const weight = pool.priority * msg.priority * timeSince;
        if (maxPriority < weight) {
            maxPriority = weight;
            maxRef = ref;
            maxMsg = msg;
        }
    }
    return maxRef;
}
// Add new to queue when below min length
(0, _replicants.queue).on("change", (val)=>{
    while(val.msgs.length < QUEUE_LEN){
        const dispTime = Date.now() + DISPLAY_TIME * (val.msgs.length + 1);
        const next = pickNext(dispTime);
        if (next) {
            nodecg.log.info("Queueing", next);
            val.msgs.push({
                id: next.id,
                time: Date.now()
            });
        }
    }
});
// Keep current msg text up to date with bank
(0, _replicants.bank).on("change", (val)=>{
    if ((0, _replicants.current).value && (0, _replicants.current).value.msgID) {
        const currRef = (0, _replicants.current).value.msgID;
        const bankMsg = (0, _replicants.bank).value[currRef];
        if (!bankMsg) return;
        if ((0, _replicants.current).value.text !== bankMsg.text) (0, _replicants.current).value.text = bankMsg.text;
    }
});
var interval;
function playNext() {
    nodecg.log.info("Moving to next donation");
    if ((0, _replicants.queue).value.msgs) {
        const newRef = (0, _replicants.queue).value.msgs[0];
        if (!newRef) return nodecg.log.warn("Reading null value on queue");
        const newMsg = (0, _replicants.bank).value[newRef.id];
        if (!newMsg) return nodecg.log.warn("No message found for ref", newRef.id);
        (0, _replicants.current).value = (0, _objectSpreadProps._)((0, _objectSpread._)({}, (0, _replicants.current).value), {
            text: newMsg.text,
            msgID: newRef.id,
            endTime: Date.now() + DISPLAY_TIME,
            time: newRef.time
        });
        (0, _replicants.queue).value.msgs.splice(0, 1);
    }
    clearInterval(interval);
    interval = setInterval(playNextPause, DISPLAY_TIME);
}
function playNextPause() {
    if (!(0, _replicants.current).value.pause) playNext();
}
const now = Date.now();
if (!(0, _replicants.current).value.pause && (0, _replicants.current).value.endTime < now) playNext();

},{"@swc/helpers/_/_object_spread":"3fvE7","@swc/helpers/_/_object_spread_props":"8TpEU","./replicants":"40CoO","./utils":"8mEuU"}],"3fvE7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_object_spread", ()=>_object_spread);
parcelHelpers.export(exports, "_", ()=>_object_spread);
var _definePropertyJs = require("./_define_property.js");
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            (0, _definePropertyJs._define_property)(target, key, source[key]);
        });
    }
    return target;
}

},{"./_define_property.js":"bdMCd","@parcel/transformer-js/src/esmodule-helpers.js":"9VN6q"}],"bdMCd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_define_property", ()=>_define_property);
parcelHelpers.export(exports, "_", ()=>_define_property);
function _define_property(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"9VN6q"}],"8TpEU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_object_spread_props", ()=>_object_spread_props);
parcelHelpers.export(exports, "_", ()=>_object_spread_props);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"9VN6q"}],"4lqHC":[function(require,module,exports) {
var _utils = require("./utils");
var _replicants = require("./replicants");
var _listeners = require("../common/listeners");
const nodecg = (0, _utils.getNodeCG)();
// Utilities
function genID(prefix, exclusions) {
    var id;
    do id = `${prefix}-${Math.floor(Math.random() * 100000000)}`;
    while (exclusions.includes(id));
    return id;
}
function findMsgIDIndex(pool, id) {
    if (!id) return -1;
    return pool.msgs.findIndex((m)=>m.id === id);
}
function findMsgRefIndex(pool, ref) {
    if (!ref) return -1;
    return pool.msgs.findIndex((m)=>m.id === ref.id && m.time === ref.time);
}
function findQueueMsgIDIndexes(queue, id) {
    if (!id) return [];
    const pred = (m)=>m.id === id;
    return queue.msgs.reduce((m, e, i)=>pred(e) ? [
            ...m,
            i
        ] : m, []);
}
const findQueueMsgRefIndex = findMsgRefIndex;
// Pools
const defaultPool = ()=>{
    return {
        name: "New Pool",
        priority: 0,
        msgs: []
    };
};
(0, _listeners.listenTo)("addPool", ()=>{
    const id = genID("pool", Object.keys((0, _replicants.pools).value));
    (0, _replicants.pools).value[id] = defaultPool();
});
(0, _listeners.listenTo)("removePool", ({ pid }, ack)=>{
    const pool = (0, _replicants.pools).value[pid];
    if (!pool) return (0, _listeners.sendError)(ack, "Pool does not exist");
    if (!pool.msgs) return (0, _listeners.sendError)(ack, "Empty pool before deleting");
    delete (0, _replicants.pools).value[pid];
});
function removeFromPool(ref, pool) {
    const ind = typeof ref === "string" ? findMsgIDIndex(pool, ref) : findMsgRefIndex(pool, ref);
    if (ind === -1) return null;
    const [rem] = pool.msgs.splice(ind, 1);
    return rem;
}
function addToPool(ref, pool, before) {
    if (before === null) pool.msgs.push(ref);
    else {
        const dstIndex = findQueueMsgRefIndex(pool, before);
        // Fallback to add to end
        if (dstIndex === -1) return addToPool(ref, pool, null);
        pool.msgs.splice(dstIndex, 0, ref);
    }
    return true;
}
function movePool(source, dest, mid, before) {
    const elem = removeFromPool(mid, source);
    if (!elem) return false;
    return addToPool(elem, dest, before);
}
// Messages
const defaultMsg = ()=>{
    return {
        text: "New Message",
        priority: 0
    };
};
(0, _listeners.listenTo)("addMessage", ({ pid, before }, ack)=>{
    const pool = pid === "queue" ? (0, _replicants.queue).value : (0, _replicants.pools).value[pid];
    if (!pool) return (0, _listeners.sendError)(ack, "Pool does not exist");
    const temp = pid === "queue";
    const id = genID(temp ? "temp" : "msg", Object.keys((0, _replicants.bank)));
    const msg = defaultMsg();
    if (temp) msg.type = "temp";
    (0, _replicants.bank).value[id] = msg;
    addToPool({
        id: id
    }, pool, before);
});
(0, _listeners.listenTo)("removeMessage", ({ mid }, ack)=>{
    if (!(mid in (0, _replicants.bank).value)) return (0, _listeners.sendError)(ack, "Message does not exist");
    Object.values((0, _replicants.pools).value).forEach((pool)=>removeFromPool(mid, pool));
    (0, _replicants.queue).value.msgs = (0, _replicants.queue).value.msgs.filter((m)=>m.id !== mid);
    delete (0, _replicants.bank).value[mid];
});
(0, _listeners.listenTo)("movePool", ({ aref: mid, oldpid, newpid, before })=>{
    movePool((0, _replicants.pools).value[oldpid], (0, _replicants.pools).value[newpid], mid, before);
});
// Queue
(0, _listeners.listenTo)("reorderQueue", ({ aref: mid, before })=>movePool((0, _replicants.queue).value, (0, _replicants.queue).value, mid, before));
(0, _listeners.listenTo)("enqueue", ({ mid, before })=>addToPool({
        id: mid,
        time: Date.now()
    }, (0, _replicants.queue).value, before));
(0, _listeners.listenTo)("dequeue", ({ aref })=>removeFromPool(aref, (0, _replicants.queue).value));
(0, _listeners.listenTo)("skipTo", ({ aref })=>{
    const index = findQueueMsgRefIndex((0, _replicants.queue).value, aref);
    if (index === -1) return;
    (0, _replicants.queue).value.msgs.splice(0, index);
});
(0, _listeners.listenTo)("unlink", ({ aref })=>{
    const oldMsg = (0, _replicants.bank).value[aref.id];
    const newID = genID("temp", Object.keys((0, _replicants.bank).value));
    (0, _replicants.bank).value[newID] = {
        "text": oldMsg.text,
        "priority": oldMsg.priority,
        "type": "temp"
    };
    const index = findQueueMsgRefIndex((0, _replicants.queue).value, aref);
    (0, _replicants.queue).value.msgs[index] = {
        id: newID,
        time: Date.now()
    };
});

},{"./utils":"8mEuU","./replicants":"40CoO","../common/listeners":"ik2HY"}],"ik2HY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sendError", ()=>sendError);
parcelHelpers.export(exports, "sendSuccess", ()=>sendSuccess);
parcelHelpers.export(exports, "listenTo", ()=>listenTo);
parcelHelpers.export(exports, "sendToF", ()=>sendToF);
parcelHelpers.export(exports, "sendTo", ()=>sendTo);
var _utils = require("../extension/utils");
var ncg;
try {
    ncg = nodecg;
} catch (e) {
    ncg = (0, _utils.getNodeCG)();
}
function sendError(ack, msg) {
    if (ack && !ack.handled) ack(new Error(msg));
}
function sendSuccess(ack, value) {
    if (ack && !ack.handled) ack(null, value);
}
function listenTo(name, listener) {
    ncg.listenFor(name, (data, ack)=>{
        console.debug("Calling", name, "with", data);
        listener(data, ack);
    });
}
function sendToF(name, data) {
    return ()=>{
        console.debug("Sending", name, "with", data);
        ncg.sendMessage(name, data);
    };
}
function sendTo(name, data) {
    sendToF(name, data)();
}

},{"../extension/utils":"8mEuU","@parcel/transformer-js/src/esmodule-helpers.js":"9VN6q"}]},["eGA2g"], "eGA2g", "parcelRequireadfa")

//# sourceMappingURL=index.js.map
