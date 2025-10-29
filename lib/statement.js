"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Statement;
    }
});
var _murmuration = require("murmuration");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var camelCaseToSnakeCase = _murmuration.caseUtilities.camelCaseToSnakeCase, snakeCaseToCamelCase = _murmuration.caseUtilities.snakeCaseToCamelCase;
var Statement = /*#__PURE__*/ function(BaseStatement) {
    _inherits(Statement, BaseStatement);
    function Statement(connection, sql, query, parameters, oneHandler, noneHandler, manyHandler, elseHandler, firstHandler, errorHandler, successHandler, placeholderIndex) {
        _class_call_check(this, Statement);
        var _this;
        _this = _call_super(this, Statement, [
            connection,
            sql,
            query,
            parameters,
            oneHandler,
            noneHandler,
            manyHandler,
            elseHandler,
            firstHandler,
            errorHandler,
            successHandler
        ]);
        _this.placeholderIndex = placeholderIndex;
        return _this;
    }
    _create_class(Statement, [
        {
            key: "getPlaceholderIndex",
            value: function getPlaceholderIndex() {
                return this.placeholderIndex;
            }
        },
        {
            key: "update",
            value: function update(relation) {
                var sql = 'UPDATE "'.concat(relation, '"');
                this.setSQL(sql);
                return this;
            }
        },
        {
            key: "insertInto",
            value: function insertInto(relation) {
                var sql = 'INSERT INTO "'.concat(relation, '"');
                this.setSQL(sql);
                return this;
            }
        },
        {
            key: "deleteFrom",
            value: function deleteFrom(relation) {
                var sql = 'DELETE FROM "'.concat(relation, '"');
                this.setSQL(sql);
                return this;
            }
        },
        {
            key: "selectFrom",
            value: function selectFrom(relation) {
                var sql = 'SELECT * FROM "'.concat(relation, '"'), query = true;
                this.setSQL(sql);
                this.setQuery(query);
                return this;
            }
        },
        {
            key: "placeholder",
            value: function placeholder() {
                var placeholder = "$".concat(this.placeholderIndex);
                this.placeholderIndex++;
                return placeholder;
            }
        },
        {
            key: "columnFromKey",
            value: function columnFromKey(key) {
                var column = '"'.concat(camelCaseToSnakeCase(key), '"');
                return column;
            }
        },
        {
            key: "keyFromColumn",
            value: function keyFromColumn(column) {
                var key = snakeCaseToCamelCase(column);
                return key;
            }
        }
    ], [
        {
            key: "fromConnection",
            value: function fromConnection(Class, connection) {
                if (connection === undefined) {
                    connection = Class; ///
                    Class = Statement;
                }
                var sql = null, query = false, parameters = [], oneHandler = null, noneHandler = null, manyHandler = null, elseHandler = null, firstHandler = null, errorHandler = null, successHandler = null, placeholderIndex = 1, statement = new Class(connection, sql, query, parameters, oneHandler, noneHandler, manyHandler, elseHandler, firstHandler, errorHandler, successHandler, placeholderIndex);
                return statement;
            }
        }
    ]);
    return Statement;
}(_murmuration.Statement);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFN0YXRlbWVudCBhcyBCYXNlU3RhdGVtZW50LCBjYXNlVXRpbGl0aWVzIH0gZnJvbSBcIm11cm11cmF0aW9uXCI7XG5cbmNvbnN0IHsgY2FtZWxDYXNlVG9TbmFrZUNhc2UsIHNuYWtlQ2FzZVRvQ2FtZWxDYXNlIH0gPSBjYXNlVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZW1lbnQgZXh0ZW5kcyBCYXNlU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29ubmVjdGlvbiwgc3FsLCBxdWVyeSwgcGFyYW1ldGVycywgb25lSGFuZGxlciwgbm9uZUhhbmRsZXIsIG1hbnlIYW5kbGVyLCBlbHNlSGFuZGxlciwgZmlyc3RIYW5kbGVyLCBlcnJvckhhbmRsZXIsIHN1Y2Nlc3NIYW5kbGVyLCBwbGFjZWhvbGRlckluZGV4KSB7XG4gICAgc3VwZXIoY29ubmVjdGlvbiwgc3FsLCBxdWVyeSwgcGFyYW1ldGVycywgb25lSGFuZGxlciwgbm9uZUhhbmRsZXIsIG1hbnlIYW5kbGVyLCBlbHNlSGFuZGxlciwgZmlyc3RIYW5kbGVyLCBlcnJvckhhbmRsZXIsIHN1Y2Nlc3NIYW5kbGVyKTtcblxuICAgIHRoaXMucGxhY2Vob2xkZXJJbmRleCA9IHBsYWNlaG9sZGVySW5kZXg7XG4gIH1cblxuICBnZXRQbGFjZWhvbGRlckluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLnBsYWNlaG9sZGVySW5kZXg7XG4gIH1cblxuICB1cGRhdGUocmVsYXRpb24pIHtcbiAgICBjb25zdCBzcWwgPSBgVVBEQVRFIFwiJHtyZWxhdGlvbn1cImA7XG5cbiAgICB0aGlzLnNldFNRTChzcWwpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpbnNlcnRJbnRvKHJlbGF0aW9uKSB7XG4gICAgY29uc3Qgc3FsID0gYElOU0VSVCBJTlRPIFwiJHtyZWxhdGlvbn1cImA7XG5cbiAgICB0aGlzLnNldFNRTChzcWwpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkZWxldGVGcm9tKHJlbGF0aW9uKSB7XG4gICAgY29uc3Qgc3FsID0gYERFTEVURSBGUk9NIFwiJHtyZWxhdGlvbn1cImA7XG5cbiAgICB0aGlzLnNldFNRTChzcWwpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZWxlY3RGcm9tKHJlbGF0aW9uKSB7XG4gICAgY29uc3Qgc3FsID0gYFNFTEVDVCAqIEZST00gXCIke3JlbGF0aW9ufVwiYCxcbiAgICAgICAgICBxdWVyeSA9IHRydWU7XG5cbiAgICB0aGlzLnNldFNRTChzcWwpO1xuXG4gICAgdGhpcy5zZXRRdWVyeShxdWVyeSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHBsYWNlaG9sZGVyKCkge1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gYFxcJCR7dGhpcy5wbGFjZWhvbGRlckluZGV4fWA7XG5cbiAgICB0aGlzLnBsYWNlaG9sZGVySW5kZXgrKztcblxuICAgIHJldHVybiBwbGFjZWhvbGRlcjtcbiAgfVxuXG4gIGNvbHVtbkZyb21LZXkoa2V5KSB7XG4gICAgY29uc3QgY29sdW1uID0gYFwiJHtjYW1lbENhc2VUb1NuYWtlQ2FzZShrZXkpfVwiYDtcblxuICAgIHJldHVybiBjb2x1bW47XG4gIH1cblxuICBrZXlGcm9tQ29sdW1uKGNvbHVtbikge1xuICAgIGNvbnN0IGtleSA9IHNuYWtlQ2FzZVRvQ2FtZWxDYXNlKGNvbHVtbik7XG5cbiAgICByZXR1cm4ga2V5O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25uZWN0aW9uKENsYXNzLCBjb25uZWN0aW9uKSB7XG4gICAgaWYgKGNvbm5lY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29ubmVjdGlvbiA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBTdGF0ZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc3FsID0gbnVsbCxcbiAgICAgICAgICBxdWVyeSA9IGZhbHNlLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBbXSxcbiAgICAgICAgICBvbmVIYW5kbGVyID0gbnVsbCxcbiAgICAgICAgICBub25lSGFuZGxlciA9IG51bGwsXG4gICAgICAgICAgbWFueUhhbmRsZXIgPSBudWxsLFxuICAgICAgICAgIGVsc2VIYW5kbGVyID0gbnVsbCxcbiAgICAgICAgICBmaXJzdEhhbmRsZXIgPSBudWxsLFxuICAgICAgICAgIGVycm9ySGFuZGxlciA9IG51bGwsXG4gICAgICAgICAgc3VjY2Vzc0hhbmRsZXIgPSBudWxsLFxuICAgICAgICAgIHBsYWNlaG9sZGVySW5kZXggPSAxLFxuICAgICAgICAgIHN0YXRlbWVudCA9IG5ldyBDbGFzcyhjb25uZWN0aW9uLCBzcWwsIHF1ZXJ5LCBwYXJhbWV0ZXJzLCBvbmVIYW5kbGVyLCBub25lSGFuZGxlciwgbWFueUhhbmRsZXIsIGVsc2VIYW5kbGVyLCBmaXJzdEhhbmRsZXIsIGVycm9ySGFuZGxlciwgc3VjY2Vzc0hhbmRsZXIsIHBsYWNlaG9sZGVySW5kZXgpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN0YXRlbWVudCIsImNhbWVsQ2FzZVRvU25ha2VDYXNlIiwiY2FzZVV0aWxpdGllcyIsInNuYWtlQ2FzZVRvQ2FtZWxDYXNlIiwiY29ubmVjdGlvbiIsInNxbCIsInF1ZXJ5IiwicGFyYW1ldGVycyIsIm9uZUhhbmRsZXIiLCJub25lSGFuZGxlciIsIm1hbnlIYW5kbGVyIiwiZWxzZUhhbmRsZXIiLCJmaXJzdEhhbmRsZXIiLCJlcnJvckhhbmRsZXIiLCJzdWNjZXNzSGFuZGxlciIsInBsYWNlaG9sZGVySW5kZXgiLCJnZXRQbGFjZWhvbGRlckluZGV4IiwidXBkYXRlIiwicmVsYXRpb24iLCJzZXRTUUwiLCJpbnNlcnRJbnRvIiwiZGVsZXRlRnJvbSIsInNlbGVjdEZyb20iLCJzZXRRdWVyeSIsInBsYWNlaG9sZGVyIiwiY29sdW1uRnJvbUtleSIsImtleSIsImNvbHVtbiIsImtleUZyb21Db2x1bW4iLCJmcm9tQ29ubmVjdGlvbiIsIkNsYXNzIiwidW5kZWZpbmVkIiwic3RhdGVtZW50IiwiQmFzZVN0YXRlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7MkJBSnFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxRCxJQUFRQyx1QkFBK0NDLDBCQUFhLENBQTVERCxzQkFBc0JFLHVCQUF5QkQsMEJBQWEsQ0FBdENDO0FBRWYsSUFBQSxBQUFNSCwwQkFBTjtjQUFNQTthQUFBQSxVQUNQSSxVQUFVLEVBQUVDLEdBQUcsRUFBRUMsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxXQUFXLEVBQUVDLFdBQVcsRUFBRUMsWUFBWSxFQUFFQyxZQUFZLEVBQUVDLGNBQWMsRUFBRUMsZ0JBQWdCO2dDQUQ1SWY7O2dCQUVqQixrQkFGaUJBO1lBRVhJO1lBQVlDO1lBQUtDO1lBQU9DO1lBQVlDO1lBQVlDO1lBQWFDO1lBQWFDO1lBQWFDO1lBQWNDO1lBQWNDOztRQUV6SCxNQUFLQyxnQkFBZ0IsR0FBR0E7OztrQkFKUGY7O1lBT25CZ0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxnQkFBZ0I7WUFDOUI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsUUFBUTtnQkFDYixJQUFNYixNQUFNLEFBQUMsV0FBbUIsT0FBVGEsVUFBUztnQkFFaEMsSUFBSSxDQUFDQyxNQUFNLENBQUNkO2dCQUVaLE9BQU8sSUFBSTtZQUNiOzs7WUFFQWUsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdGLFFBQVE7Z0JBQ2pCLElBQU1iLE1BQU0sQUFBQyxnQkFBd0IsT0FBVGEsVUFBUztnQkFFckMsSUFBSSxDQUFDQyxNQUFNLENBQUNkO2dCQUVaLE9BQU8sSUFBSTtZQUNiOzs7WUFFQWdCLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXSCxRQUFRO2dCQUNqQixJQUFNYixNQUFNLEFBQUMsZ0JBQXdCLE9BQVRhLFVBQVM7Z0JBRXJDLElBQUksQ0FBQ0MsTUFBTSxDQUFDZDtnQkFFWixPQUFPLElBQUk7WUFDYjs7O1lBRUFpQixLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0osUUFBUTtnQkFDakIsSUFBTWIsTUFBTSxBQUFDLGtCQUEwQixPQUFUYSxVQUFTLE1BQ2pDWixRQUFRO2dCQUVkLElBQUksQ0FBQ2EsTUFBTSxDQUFDZDtnQkFFWixJQUFJLENBQUNrQixRQUFRLENBQUNqQjtnQkFFZCxPQUFPLElBQUk7WUFDYjs7O1lBRUFrQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUEsY0FBYyxBQUFDLElBQTBCLE9BQXRCLElBQUksQ0FBQ1QsZ0JBQWdCO2dCQUU5QyxJQUFJLENBQUNBLGdCQUFnQjtnQkFFckIsT0FBT1M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxHQUFHO2dCQUNmLElBQU1DLFNBQVMsQUFBQyxJQUE2QixPQUExQjFCLHFCQUFxQnlCLE1BQUs7Z0JBRTdDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0QsTUFBTTtnQkFDbEIsSUFBTUQsTUFBTXZCLHFCQUFxQndCO2dCQUVqQyxPQUFPRDtZQUNUOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLGVBQWVDLEtBQUssRUFBRTFCLFVBQVU7Z0JBQ3JDLElBQUlBLGVBQWUyQixXQUFXO29CQUM1QjNCLGFBQWEwQixPQUFPLEdBQUc7b0JBRXZCQSxRQXRFZTlCO2dCQXVFakI7Z0JBRUEsSUFBTUssTUFBTSxNQUNOQyxRQUFRLE9BQ1JDLGFBQWEsRUFBRSxFQUNmQyxhQUFhLE1BQ2JDLGNBQWMsTUFDZEMsY0FBYyxNQUNkQyxjQUFjLE1BQ2RDLGVBQWUsTUFDZkMsZUFBZSxNQUNmQyxpQkFBaUIsTUFDakJDLG1CQUFtQixHQUNuQmlCLFlBQVksSUFBSUYsTUFBTTFCLFlBQVlDLEtBQUtDLE9BQU9DLFlBQVlDLFlBQVlDLGFBQWFDLGFBQWFDLGFBQWFDLGNBQWNDLGNBQWNDLGdCQUFnQkM7Z0JBRS9KLE9BQU9pQjtZQUNUOzs7V0F2Rm1CaEM7RUFBa0JpQyxzQkFBYSJ9