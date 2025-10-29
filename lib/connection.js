"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Connection;
    }
});
var _pg = require("pg");
var _murmuration = require("murmuration");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var pool = null;
var Connection = /*#__PURE__*/ function() {
    function Connection(client, done, log) {
        _class_call_check(this, Connection);
        this.client = client;
        this.done = done;
        this.log = log;
    }
    _create_class(Connection, [
        {
            key: "getLog",
            value: function getLog() {
                return this.log;
            }
        },
        {
            key: "query",
            value: function query(sql, parameters, callback) {
                var _this = this;
                this.client.query(sql, parameters, function(error, result) {
                    var rows = null;
                    if (error) {
                        diagnoseError(error, sql, _this.log);
                    } else {
                        rows = result.rows;
                    }
                    callback(error, rows);
                });
            }
        },
        {
            key: "release",
            value: function release() {
                this.done();
            }
        },
        {
            key: "begin",
            value: function begin(callback) {
                this.client.query("BEGIN", callback);
            }
        },
        {
            key: "commit",
            value: function commit(callback) {
                this.client.query("COMMIT", callback);
            }
        },
        {
            key: "rollback",
            value: function rollback(callback) {
                this.client.query("ROLLBACK", callback);
            }
        }
    ], [
        {
            key: "fromConfiguration",
            value: function fromConfiguration(configuration, callback) {
                if (pool === null) {
                    configuration = Object.assign({}, configuration); ///
                    var log = configuration.log;
                    delete configuration.log;
                    pool = new _pg.Pool(configuration);
                    Object.assign(configuration, {
                        log: log
                    });
                }
                pool.connect(function(error, client, done) {
                    var connection = null;
                    var _configuration_log = configuration.log, log = _configuration_log === void 0 ? _murmuration.defaultLog : _configuration_log;
                    if (error) {
                        var sql = null; ///
                        diagnoseError(error, sql, log);
                    } else {
                        error = null;
                        connection = new Connection(client, done, log);
                    }
                    callback(error, connection);
                });
            }
        }
    ]);
    return Connection;
}();
function diagnoseError(error, sql, log) {
    var code = error.code;
    log.error('Error code "'.concat(code, '"...'));
    switch(code){
        case "ECONNREFUSED":
            log.error("The database isn't running, probably.");
            break;
        case "ENOTFOUND":
            log.error("The host is wrong, probably.");
            break;
        case "3D000":
            log.error("The database name is wrong, probably.");
            break;
        case "28000":
            log.error("The username or the password are wrong, probably.");
            break;
        default:
            {
                var message = error.message;
                log.error(message);
                if (sql) {
                    log.error('The offending SQL is: "'.concat(sql, '"'));
                }
            }
            break;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25uZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBQb29sIH0gZnJvbSBcInBnXCI7XG5pbXBvcnQgeyBkZWZhdWx0TG9nIH0gZnJvbSBcIm11cm11cmF0aW9uXCI7XG5cbmxldCBwb29sID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29ubmVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCwgZG9uZSwgbG9nKSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgdGhpcy5kb25lID0gZG9uZTtcbiAgICB0aGlzLmxvZyA9IGxvZztcbiAgfVxuXG4gIGdldExvZygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2c7XG4gIH1cblxuICBxdWVyeShzcWwsIHBhcmFtZXRlcnMsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5jbGllbnQucXVlcnkoc3FsLCBwYXJhbWV0ZXJzLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgbGV0IHJvd3MgPSBudWxsO1xuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgZGlhZ25vc2VFcnJvcihlcnJvciwgc3FsLCB0aGlzLmxvZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoeyByb3dzIH0gPSByZXN1bHQpO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhlcnJvciwgcm93cyk7XG4gICAgfSk7XG4gIH1cblxuICByZWxlYXNlKCkge1xuICAgIHRoaXMuZG9uZSgpO1xuICB9XG5cbiAgYmVnaW4oY2FsbGJhY2spIHtcbiAgICB0aGlzLmNsaWVudC5xdWVyeShcIkJFR0lOXCIsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbW1pdChjYWxsYmFjaykge1xuICAgIHRoaXMuY2xpZW50LnF1ZXJ5KFwiQ09NTUlUXCIsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJvbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5jbGllbnQucXVlcnkoXCJST0xMQkFDS1wiLCBjYWxsYmFjayk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbmZpZ3VyYXRpb24oY29uZmlndXJhdGlvbiwgY2FsbGJhY2spIHtcbiAgICBpZiAocG9vbCA9PT0gbnVsbCkge1xuICAgICAgY29uZmlndXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZ3VyYXRpb24pOyAvLy9cblxuICAgICAgY29uc3QgeyBsb2cgfSA9IGNvbmZpZ3VyYXRpb247XG5cbiAgICAgIGRlbGV0ZSBjb25maWd1cmF0aW9uLmxvZztcblxuICAgICAgcG9vbCA9IG5ldyBQb29sKGNvbmZpZ3VyYXRpb24pO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGNvbmZpZ3VyYXRpb24sIHtcbiAgICAgICAgbG9nXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwb29sLmNvbm5lY3QoKGVycm9yLCBjbGllbnQsIGRvbmUpID0+IHtcbiAgICAgIGxldCBjb25uZWN0aW9uID0gbnVsbDtcblxuICAgICAgY29uc3QgeyBsb2cgPSBkZWZhdWx0TG9nIH0gPSBjb25maWd1cmF0aW9uO1xuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc3Qgc3FsID0gbnVsbDsgLy8vXG5cbiAgICAgICAgZGlhZ25vc2VFcnJvcihlcnJvciwgc3FsLCBsb2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3IgPSBudWxsO1xuXG4gICAgICAgIGNvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbihjbGllbnQsIGRvbmUsIGxvZyk7XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yLCBjb25uZWN0aW9uKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaWFnbm9zZUVycm9yKGVycm9yLCBzcWwsIGxvZykge1xuICBjb25zdCB7IGNvZGUgfSA9IGVycm9yO1xuXG4gIGxvZy5lcnJvcihgRXJyb3IgY29kZSBcIiR7Y29kZX1cIi4uLmApO1xuXG4gIHN3aXRjaChjb2RlKSB7XG4gICAgY2FzZSBcIkVDT05OUkVGVVNFRFwiOlxuICAgICAgbG9nLmVycm9yKFwiVGhlIGRhdGFiYXNlIGlzbid0IHJ1bm5pbmcsIHByb2JhYmx5LlwiKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcIkVOT1RGT1VORFwiOlxuICAgICAgbG9nLmVycm9yKFwiVGhlIGhvc3QgaXMgd3JvbmcsIHByb2JhYmx5LlwiKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcIjNEMDAwXCI6XG4gICAgICBsb2cuZXJyb3IoXCJUaGUgZGF0YWJhc2UgbmFtZSBpcyB3cm9uZywgcHJvYmFibHkuXCIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiMjgwMDBcIjpcbiAgICAgIGxvZy5lcnJvcihcIlRoZSB1c2VybmFtZSBvciB0aGUgcGFzc3dvcmQgYXJlIHdyb25nLCBwcm9iYWJseS5cIik7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlIH0gPSBlcnJvcjtcblxuICAgICAgICBsb2cuZXJyb3IobWVzc2FnZSk7XG5cbiAgICAgICAgaWYgKHNxbCkge1xuICAgICAgICAgIGxvZy5lcnJvcihgVGhlIG9mZmVuZGluZyBTUUwgaXM6IFwiJHtzcWx9XCJgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb25uZWN0aW9uIiwicG9vbCIsImNsaWVudCIsImRvbmUiLCJsb2ciLCJnZXRMb2ciLCJxdWVyeSIsInNxbCIsInBhcmFtZXRlcnMiLCJjYWxsYmFjayIsImVycm9yIiwicmVzdWx0Iiwicm93cyIsImRpYWdub3NlRXJyb3IiLCJyZWxlYXNlIiwiYmVnaW4iLCJjb21taXQiLCJyb2xsYmFjayIsImZyb21Db25maWd1cmF0aW9uIiwiY29uZmlndXJhdGlvbiIsIk9iamVjdCIsImFzc2lnbiIsIlBvb2wiLCJjb25uZWN0IiwiY29ubmVjdGlvbiIsImRlZmF1bHRMb2ciLCJjb2RlIiwibWVzc2FnZSJdLCJtYXBw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