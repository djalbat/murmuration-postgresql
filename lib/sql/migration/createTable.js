"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const createTableMigrationSQL = `

    CREATE TABLE migration (
      version integer NOT NULL DEFAULT 0,
      PRIMARY KEY (version)
    );

`;
const _default = createTableMigrationSQL;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zcWwvbWlncmF0aW9uL2NyZWF0ZVRhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBjcmVhdGVUYWJsZU1pZ3JhdGlvblNRTCA9IGBcblxuICAgIENSRUFURSBUQUJMRSBtaWdyYXRpb24gKFxuICAgICAgdmVyc2lvbiBpbnRlZ2VyIE5PVCBOVUxMIERFRkFVTFQgMCxcbiAgICAgIFBSSU1BUlkgS0VZICh2ZXJzaW9uKVxuICAgICk7XG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhYmxlTWlncmF0aW9uU1FMO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVRhYmxlTWlncmF0aW9uU1FMIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztBQVRBLE1BQU1BLDBCQUEwQixDQUFDOzs7Ozs7O0FBT2pDLENBQUM7TUFFRCxXQUFlQSJ9