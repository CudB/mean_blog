var app = angular.module('clientFilters', []);

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});