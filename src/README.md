To build static site:

```
npm install
grunt
```

Templates are `*.dust` files (see http://akdubya.github.io/dustjs/)  
Data is JSON, and should be kept in `data\` subfolder.

To add a new page, edit the `Gruntfile.js`.
To edit an existing page, edit the appropriate `.dust` file, then run `grunt`.

