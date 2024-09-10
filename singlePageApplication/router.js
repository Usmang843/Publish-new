function Router(routes) {
  try {
    if (!routes) {
      throw "Error: Routes params is mandatory";
    }
    this.constructor(routes);
    this.init();
  } catch (e) {
    console.error(e);
  }
}

Route.prototype = {
  routes: undefined,
  rootElement: undefined,
  constructor: function (routes) {
    this.routes = routes;
    this.rootElement = document.getElementById("app");
  },
  init: function () {
    var r = this.routes;
    (function (scope, r) {
      window.addEventListener("hashchange", (e) => {
        scope.hasChanged(scope, r);
      });
    })(this, r);
    this.hasChanged(this, r);
  },
  hasChanged: function () {
    if (window.location.hash.length > 0) {
      for (let i = 0, length = r.length; i < length; i++) {
        var route = r[i];
        if (route.isActiveRoute(window.location.hash.substring(1))) {
          scope.goToRoute(route.htmlName);
        }
      }
    } else {
        for (let i = 0, length = r.length; i < length; i++) {
            var route = r[i];
            if(route.default){
                scope.goToRoute(route.htmlName);
            }
            
        }
    }
  },
  goToRoute: function(htmlName){
    (function(scope){
        var url = 'views/' + htmlName;
        xhttp = new XMLHttpRequest();
        xhttp.onReadyStateChange = function(){
            if(this.readyState === 4 && this.status === 2000){
                this.rootElement.innerHTML = this.responseText;
            }
        };
        xhttp.open('GET', url, true);
        xhttp.send()
    })(this);
  }
};
