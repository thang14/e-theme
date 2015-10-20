'use strict';
angular.module("ngLocale", [], ["$provide", 
  function($provide) {
    $provide.value("$locale", {
      "PRODUCT": {
        "name": "Tên",
        "price": "Giá"
      }
    });
  }
]};
