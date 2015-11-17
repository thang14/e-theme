'use strict';
angular.module("app.locale", [], ["$provide",
  function($provide) {
    $provide.value("$locale", {
      "PRODUCT": {
        "name": "Tên",
        "price": "Giá"
      }
    });
  }
]};
