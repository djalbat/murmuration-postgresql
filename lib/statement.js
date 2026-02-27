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
const _murmuration = require("murmuration");
const { camelCaseToSnakeCase, snakeCaseToCamelCase } = _murmuration.caseUtilities;
class Statement extends _murmuration.Statement {
    constructor(connection, sql, query, parameters, oneHandler, noneHandler, manyHandler, elseHandler, firstHandler, errorHandler, successHandler, placeholderIndex){
        super(connection, sql, query, parameters, oneHandler, noneHandler, manyHandler, elseHandler, firstHandler, errorHandler, successHandler);
        this.placeholderIndex = placeholderIndex;
    }
    getPlaceholderIndex() {
        return this.placeholderIndex;
    }
    update(relation) {
        const sql = `UPDATE "${relation}"`;
        this.setSQL(sql);
        return this;
    }
    insertInto(relation) {
        const sql = `INSERT INTO "${relation}"`;
        this.setSQL(sql);
        return this;
    }
    deleteFrom(relation) {
        const sql = `DELETE FROM "${relation}"`;
        this.setSQL(sql);
        return this;
    }
    selectFrom(relation) {
        const sql = `SELECT * FROM "${relation}"`, query = true;
        this.setSQL(sql);
        this.setQuery(query);
        return this;
    }
    placeholder() {
        const placeholder = `\$${this.placeholderIndex}`;
        this.placeholderIndex++;
        return placeholder;
    }
    columnFromKey(key) {
        const column = `"${camelCaseToSnakeCase(key)}"`;
        return column;
    }
    keyFromColumn(column) {
        const key = snakeCaseToCamelCase(column);
        return key;
    }
    static fromConnection(Class, connection) {
        if (connection === undefined) {
            connection = Class; ///
            Class = Statement;
        }
        const sql = null, query = false, parameters = [], oneHandler = null, noneHandler = null, manyHandler = null, elseHandler = null, firstHandler = null, errorHandler = null, successHandler = null, placeholderIndex = 1, statement = new Class(connection, sql, query, parameters, oneHandler, noneHandler, manyHandler, elseHandler, firstHandler, errorHandler, successHandler, placeholderIndex);
        return statement;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFN0YXRlbWVudCBhcyBCYXNlU3RhdGVtZW50LCBjYXNlVXRpbGl0aWVzIH0gZnJvbSBcIm11cm11cmF0aW9uXCI7XG5cbmNvbnN0IHsgY2FtZWxDYXNlVG9TbmFrZUNhc2UsIHNuYWtlQ2FzZVRvQ2FtZWxDYXNlIH0gPSBjYXNlVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZW1lbnQgZXh0ZW5kcyBCYXNlU3RhdGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29ubmVjdGlvbiwgc3FsLCBxdWVyeSwgcGFyYW1ldGVycywgb25lSGFuZGxlciwgbm9uZUhhbmRsZXIsIG1hbnlIYW5kbGVyLCBlbHNlSGFuZGxlciwgZmlyc3RIYW5kbGVyLCBlcnJvckhhbmRsZXIsIHN1Y2Nlc3NIYW5kbGVyLCBwbGFjZWhvbGRlckluZGV4KSB7XG4gICAgc3VwZXIoY29ubmVjdGlvbiwgc3FsLCBxdWVyeSwgcGFyYW1ldGVycywgb25lSGFuZGxlciwgbm9uZUhhbmRsZXIsIG1hbnlIYW5kbGVyLCBlbHNlSGFuZGxlciwgZmlyc3RIYW5kbGVyLCBlcnJvckhhbmRsZXIsIHN1Y2Nlc3NIYW5kbGVyKTtcblxuICAgIHRoaXMucGxhY2Vob2xkZXJJbmRleCA9IHBsYWNlaG9sZGVySW5kZXg7XG4gIH1cblxuICBnZXRQbGFjZWhvbGRlckluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLnBsYWNlaG9sZGVySW5kZXg7XG4gIH1cblxuICB1cGRhdGUocmVsYXRpb24pIHtcbiAgICBjb25zdCBzcWwgPSBgVVBEQVRFIFwiJHtyZWxhdGlvbn1cImA7XG5cbiAgICB0aGlzLnNldFNRTChzcWwpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpbnNlcnRJbnRvKHJlbGF0aW9uKSB7XG4gICAgY29uc3Qgc3FsID0gYElOU0VSVCBJTlRPIFwiJHtyZWxhdGlvbn1cImA7XG5cbiAgICB0aGlzLnNldFNRTChzcWwpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkZWxldGVGcm9tKHJlbGF0aW9uKSB7XG4gICAgY29uc3Qgc3FsID0gYERFTEVURSBGUk9NIFwiJHtyZWxhdGlvbn1cImA7XG5cbiAgICB0aGlzLnNldFNRTChzcWwpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZWxlY3RGcm9tKHJlbGF0aW9uKSB7XG4gICAgY29uc3Qgc3FsID0gYFNFTEVDVCAqIEZST00gXCIke3JlbGF0aW9ufVwiYCxcbiAgICAgICAgICBxdWVyeSA9IHRydWU7XG5cbiAgICB0aGlzLnNldFNRTChzcWwpO1xuXG4gICAgdGhpcy5zZXRRdWVyeShxdWVyeSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHBsYWNlaG9sZGVyKCkge1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gYFxcJCR7dGhpcy5wbGFjZWhvbGRlckluZGV4fWA7XG5cbiAgICB0aGlzLnBsYWNlaG9sZGVySW5kZXgrKztcblxuICAgIHJldHVybiBwbGFjZWhvbGRlcjtcbiAgfVxuXG4gIGNvbHVtbkZyb21LZXkoa2V5KSB7XG4gICAgY29uc3QgY29sdW1uID0gYFwiJHtjYW1lbENhc2VUb1NuYWtlQ2FzZShrZXkpfVwiYDtcblxuICAgIHJldHVybiBjb2x1bW47XG4gIH1cblxuICBrZXlGcm9tQ29sdW1uKGNvbHVtbikge1xuICAgIGNvbnN0IGtleSA9IHNuYWtlQ2FzZVRvQ2FtZWxDYXNlKGNvbHVtbik7XG5cbiAgICByZXR1cm4ga2V5O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25uZWN0aW9uKENsYXNzLCBjb25uZWN0aW9uKSB7XG4gICAgaWYgKGNvbm5lY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29ubmVjdGlvbiA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBTdGF0ZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc3FsID0gbnVsbCxcbiAgICAgICAgICBxdWVyeSA9IGZhbHNlLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBbXSxcbiAgICAgICAgICBvbmVIYW5kbGVyID0gbnVsbCxcbiAgICAgICAgICBub25lSGFuZGxlciA9IG51bGwsXG4gICAgICAgICAgbWFueUhhbmRsZXIgPSBudWxsLFxuICAgICAgICAgIGVsc2VIYW5kbGVyID0gbnVsbCxcbiAgICAgICAgICBmaXJzdEhhbmRsZXIgPSBudWxsLFxuICAgICAgICAgIGVycm9ySGFuZGxlciA9IG51bGwsXG4gICAgICAgICAgc3VjY2Vzc0hhbmRsZXIgPSBudWxsLFxuICAgICAgICAgIHBsYWNlaG9sZGVySW5kZXggPSAxLFxuICAgICAgICAgIHN0YXRlbWVudCA9IG5ldyBDbGFzcyhjb25uZWN0aW9uLCBzcWwsIHF1ZXJ5LCBwYXJhbWV0ZXJzLCBvbmVIYW5kbGVyLCBub25lSGFuZGxlciwgbWFueUhhbmRsZXIsIGVsc2VIYW5kbGVyLCBmaXJzdEhhbmRsZXIsIGVycm9ySGFuZGxlciwgc3VjY2Vzc0hhbmRsZXIsIHBsYWNlaG9sZGVySW5kZXgpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN0YXRlbWVudCIsImNhbWVsQ2FzZVRvU25ha2VDYXNlIiwic25ha2VDYXNlVG9DYW1lbENhc2UiLCJjYXNlVXRpbGl0aWVzIiwiQmFzZVN0YXRlbWVudCIsImNvbm5lY3Rpb24iLCJzcWwiLCJxdWVyeSIsInBhcmFtZXRlcnMiLCJvbmVIYW5kbGVyIiwibm9uZUhhbmRsZXIiLCJtYW55SGFuZGxlciIsImVsc2VIYW5kbGVyIiwiZmlyc3RIYW5kbGVyIiwiZXJyb3JIYW5kbGVyIiwic3VjY2Vzc0hhbmRsZXIiLCJwbGFjZWhvbGRlckluZGV4IiwiZ2V0UGxhY2Vob2xkZXJJbmRleCIsInVwZGF0ZSIsInJlbGF0aW9uIiwic2V0U1FMIiwiaW5zZXJ0SW50byIsImRlbGV0ZUZyb20iLCJzZWxlY3RGcm9tIiwic2V0UXVlcnkiLCJwbGFjZWhvbGRlciIsImNvbHVtbkZyb21LZXkiLCJrZXkiLCJjb2x1bW4iLCJrZXlGcm9tQ29sdW1uIiwiZnJvbUNvbm5lY3Rpb24iLCJDbGFzcyIsInVuZGVmaW5lZCIsInN0YXRlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7Ozs2QkFKcUM7QUFFMUQsTUFBTSxFQUFFQyxvQkFBb0IsRUFBRUMsb0JBQW9CLEVBQUUsR0FBR0MsMEJBQWE7QUFFckQsTUFBTUgsa0JBQWtCSSxzQkFBYTtJQUNsRCxZQUFZQyxVQUFVLEVBQUVDLEdBQUcsRUFBRUMsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxXQUFXLEVBQUVDLFdBQVcsRUFBRUMsWUFBWSxFQUFFQyxZQUFZLEVBQUVDLGNBQWMsRUFBRUMsZ0JBQWdCLENBQUU7UUFDL0osS0FBSyxDQUFDWCxZQUFZQyxLQUFLQyxPQUFPQyxZQUFZQyxZQUFZQyxhQUFhQyxhQUFhQyxhQUFhQyxjQUFjQyxjQUFjQztRQUV6SCxJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtJQUMxQjtJQUVBQyxzQkFBc0I7UUFDcEIsT0FBTyxJQUFJLENBQUNELGdCQUFnQjtJQUM5QjtJQUVBRSxPQUFPQyxRQUFRLEVBQUU7UUFDZixNQUFNYixNQUFNLENBQUMsUUFBUSxFQUFFYSxTQUFTLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUNDLE1BQU0sQ0FBQ2Q7UUFFWixPQUFPLElBQUk7SUFDYjtJQUVBZSxXQUFXRixRQUFRLEVBQUU7UUFDbkIsTUFBTWIsTUFBTSxDQUFDLGFBQWEsRUFBRWEsU0FBUyxDQUFDLENBQUM7UUFFdkMsSUFBSSxDQUFDQyxNQUFNLENBQUNkO1FBRVosT0FBTyxJQUFJO0lBQ2I7SUFFQWdCLFdBQVdILFFBQVEsRUFBRTtRQUNuQixNQUFNYixNQUFNLENBQUMsYUFBYSxFQUFFYSxTQUFTLENBQUMsQ0FBQztRQUV2QyxJQUFJLENBQUNDLE1BQU0sQ0FBQ2Q7UUFFWixPQUFPLElBQUk7SUFDYjtJQUVBaUIsV0FBV0osUUFBUSxFQUFFO1FBQ25CLE1BQU1iLE1BQU0sQ0FBQyxlQUFlLEVBQUVhLFNBQVMsQ0FBQyxDQUFDLEVBQ25DWixRQUFRO1FBRWQsSUFBSSxDQUFDYSxNQUFNLENBQUNkO1FBRVosSUFBSSxDQUFDa0IsUUFBUSxDQUFDakI7UUFFZCxPQUFPLElBQUk7SUFDYjtJQUVBa0IsY0FBYztRQUNaLE1BQU1BLGNBQWMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDVCxnQkFBZ0IsRUFBRTtRQUVoRCxJQUFJLENBQUNBLGdCQUFnQjtRQUVyQixPQUFPUztJQUNUO0lBRUFDLGNBQWNDLEdBQUcsRUFBRTtRQUNqQixNQUFNQyxTQUFTLENBQUMsQ0FBQyxFQUFFM0IscUJBQXFCMEIsS0FBSyxDQUFDLENBQUM7UUFFL0MsT0FBT0M7SUFDVDtJQUVBQyxjQUFjRCxNQUFNLEVBQUU7UUFDcEIsTUFBTUQsTUFBTXpCLHFCQUFxQjBCO1FBRWpDLE9BQU9EO0lBQ1Q7SUFFQSxPQUFPRyxlQUFlQyxLQUFLLEVBQUUxQixVQUFVLEVBQUU7UUFDdkMsSUFBSUEsZUFBZTJCLFdBQVc7WUFDNUIzQixhQUFhMEIsT0FBTyxHQUFHO1lBRXZCQSxRQUFRL0I7UUFDVjtRQUVBLE1BQU1NLE1BQU0sTUFDTkMsUUFBUSxPQUNSQyxhQUFhLEVBQUUsRUFDZkMsYUFBYSxNQUNiQyxjQUFjLE1BQ2RDLGNBQWMsTUFDZEMsY0FBYyxNQUNkQyxlQUFlLE1BQ2ZDLGVBQWUsTUFDZkMsaUJBQWlCLE1BQ2pCQyxtQkFBbUIsR0FDbkJpQixZQUFZLElBQUlGLE1BQU0xQixZQUFZQyxLQUFLQyxPQUFPQyxZQUFZQyxZQUFZQyxhQUFhQyxhQUFhQyxhQUFhQyxjQUFjQyxjQUFjQyxnQkFBZ0JDO1FBRS9KLE9BQU9pQjtJQUNUO0FBQ0YifQ==