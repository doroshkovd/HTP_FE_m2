export class RouterHistory {
  constructor() {
    this.routes = {
        '404': () => {
        console.log('Not found');
  }
  };

    this.mainContentPages = document.querySelectorAll('.main-content .page');

    // window.history.replaceState(null, null, window.location.href);
    // this.render(decodeURI(window.location.pathname));

    window.addEventListener('popstate', () => {
      this.render(decodeURI(window.location.pathname));
    });

  //   window.addEventListener('hashchange', () => {
  //     this.render(decodeURI(window.location.hash));
  // });
  }

  addRoute(route, action) {
    this.routes[route] = action;
  }


  render(url) {
    console.log(url);
    let temp = url.slice(1, url.length - 1).split('/')[0];
    console.log(temp);
    [...this.mainContentPages].forEach((page) => {
      page.classList.remove('visible');
  });

    this.routes[temp] ? this.routes[temp]() : this.routes['404']();
  }
}
