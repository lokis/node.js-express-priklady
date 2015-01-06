var sqlite3 = require('sqlite3').verbose();
var config = require('config');
var db = new sqlite3.Database(config.get('db'));

// Table bookmarks initialization
db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='bookmarks'", function (err, rows) {
    if (err !== null) {
        console.log(err);
    }
    else if (rows === undefined) {
        db.run('CREATE TABLE "bookmarks" ' +
        '("id" INTEGER PRIMARY KEY AUTOINCREMENT, ' +
        '"title" VARCHAR(255), ' +
        'url VARCHAR(255))', function (err) {
            if (err !== null) {
                console.log(err);
            }
            else {
                console.log("SQL Table 'bookmarks' initialized.");
            }
        });
    }
    else {
        console.log("SQL Table 'bookmarks' already initialized.");
    }
});
