# Populate mongodb databse with countries using meteor
---

This is just an example working with json and mongodb, merging two json about countries and flag emojis data into one database collection.

Just run project using [meteor](https://www.meteor.com/)
```
meteor
```

Run this script on robomongo to export collection to json
```
var cursor = db.getCollection('countries').find({}, {});
while(cursor.hasNext()) {
    print(tojson(cursor.next()))
}
```