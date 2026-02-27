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
const insertVersionMigrationSQL = `

    INSERT INTO migration (version) VALUES($1);

`;
const _default = insertVersionMigrationSQL;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zcWwvbWlncmF0aW9uL2luc2VydFZlcnNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGluc2VydFZlcnNpb25NaWdyYXRpb25TUUwgPSBgXG5cbiAgICBJTlNFUlQgSU5UTyBtaWdyYXRpb24gKHZlcnNpb24pIFZBTFVFUygkMSk7XG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGluc2VydFZlcnNpb25NaWdyYXRpb25TUUw7XG4iXSwibmFtZXMiOlsiaW5zZXJ0VmVyc2lvbk1pZ3JhdGlvblNRTCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7QUFOQSxNQUFNQSw0QkFBNEIsQ0FBQzs7OztBQUluQyxDQUFDO01BRUQsV0FBZUEifQ==