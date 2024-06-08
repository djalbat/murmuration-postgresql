# Murmuration for PostGreSQL

Statements, transactions and migrations for PostGreSQL.

This package is based largely on the following parent one:

* [Murmuration](https://github.com/djalbat/murmuration)

This readme file contains a small amount of information specific to this package, however the parent package's readme file is the place to look for how to make use of this package's functionality.

## Installation

You can install Murmuration for PostGreSQL with [npm](https://www.npmjs.com/):

    npm install murmuration-postgresql

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/murmuration-postgresql.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

## Usage

General usage instructions are given in the aforementioned parent package's readme file.

```
const murmuration = require("murmuration-postgresql"); ///

const { database, migrate, transaction, Connection } = murmuration,
      { query, execute } = database;

...
```

This package leverages the [`pg`](https://node-postgres.com/) package and uses its parameterised queries. This guard against SQL injection without further ado.

### Configuration

The `configuration` argument should be a plain old JavaScript object with at least the following properties:

```
{
  host,
  user,
  password,
  database
}
```
In fact the `user` and `password` properties can be left off for trusted connections.

As mentioned in the parent package's readme file, if a `log` property is provided on the `configuration` object then the `log.error()` function will be called with a message containing a reasonable stab at the cause of the error. Specifically, the following error codes are mapped to the following messages:

* `ECONNREFUSED` - `'The database isn\'t running, probably.'`

* `ENOTFOUND` - `'The host is wrong, probably.'`

* `3D000` - `'The database name is wrong, probably.'`

* `28000` - `'The username or the password are wrong, probably.'`

In the remaining cases the error code is simply echoed and the offending SQL, if there is any, will also be echoed in a separate call to the `log.error()` function.

### Placeholders

A variable length list of parameters can be passed between the `sql` and `callback` arguments of both the `query()` and `execute()` functions. These replace the `$#` placeholders in the SQL you provide. For example, if the SQL passed to the `query()` function is the following...

```

  SELECT * FROM user WHERE username=$1 and `password`=MD5($2);

```
...then you would call the `query()` function thus:

```
const username = ... ,
      password = ... ;

query(connection, sql, username, password, (error, rows) => {

  ...

});

```
The `execute()` function is treated entirely similarly.

For more information on placeholders and performing queries in general, see the `pg` package documentation [here](https://node-postgres.com/features/queries).

## Contact

* james.smith@djalbat.com
