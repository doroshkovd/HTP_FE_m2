import { Router } from './router';
import { CheckboxService } from "./checkbox.service";
import { RouterHistory } from './router-history';

class App {
    constructor() {
        this.products = [];
        // this.router = new RouterHistory();
        this.router = new Router();
        this.checkboxService = new CheckboxService();
        this.checkboxService.subscribe(this.onFilterChange.bind(this));
        this.initSingleProductPage();
        this.init();
    }

    init() {
        fetch('http://localhost:3006/products', { headers: {
          'Content-Type': 'application/json'
        }})
            .then((res) => res.json())
            .then((data) => {
                this.products = data;
                this.generateAllProductsHTML(this.products);
                this.initRoutes();
                // this.router.render(decodeURI(window.location.pathname));
                window.dispatchEvent(new HashChangeEvent('hashchange'));
            });
    }

    initRoutes() {
        this.router.addRoute('', this.renderHomePage.bind(this));
        this.router.addRoute('#filter', this.renderFilterResults.bind(this));
        this.router.addRoute('#product', this.renderSingleProduct.bind(this));
        // this.router.addRoute('filter', this.renderFilterResults.bind(this));
        // this.router.addRoute('product', this.renderSingleProduct.bind(this));
        this.router.addRoute('404', this.renderErrorPage.bind(this));
    }

    onFilterChange(data) {
       location.hash = data;
      // window.history.pushState(null, 'Filter page', '/' + data);
      // this.router.render(decodeURI(window.location.pathname));
    }

    renderHomePage() {
        this.renderProductsPage(this.products);
    }

    initSingleProductPage() {
        const self = this;
        this.singleProductPage = document.querySelector('.single-product');
        this.singleProductPage.addEventListener('click', (event) => {
           if (self.singleProductPage.classList.contains('visible')) {
               const clicked = event.target;

               if (clicked.classList.contains('close') || clicked.classList.contains('overlay')) {
                 location.hash = self.checkboxService.getCurrentState();
                 // window.history.pushState(null, null, '/' + self.checkboxService.getCurrentState());
                 // this.router.render(decodeURI(window.location.pathname));
               }
           }
        });
    }

    renderProductsPage(data) {
        const page = document.querySelector('.all-products');
        const allProducts = document.querySelectorAll('.all-products .products-list > li');

        [...allProducts].forEach((product) => {
           product.classList.add('hidden');
        });

        [...allProducts].forEach((product) => {
            data.forEach((item) => {
               if (Number(product.dataset.index) === Number(item.id)) {
                   product.classList.remove('hidden');
               }
            });
        });
        page.classList.add('visible');
    }

    renderFilterResults() {
      console.log('filter result');
      // let filter = location.pathname.split('filter/')[1].trim();
      let filter = location.hash.split('#filter/')[1].trim();
        try {
            filter = JSON.parse(decodeURI(filter))
        } catch (e) {
          window.location.hash = '#';
          // window.location.href = '';
            return false;
        }

        const results = this.checkboxService.renderFilters(this.products, filter);
        this.renderProductsPage(results);
    }

    renderSingleProduct() {
        const page = document.querySelector('.single-product');
        const container = document.querySelector('.preview-large');
        // const index = location.pathname.split('product/')[1].trim();
        const index = location.hash.split('#product/')[1].trim();
        if (this.products.length) {
            this.products.forEach((item) => {
                if (Number(item.id) === Number(index)) {
                    container.querySelector('h3').innerText = item.name;
                    container.querySelector('img').setAttribute('src', '/' + item.image.large);
                    container.querySelector('p').innerText = item.description;
                }
            });
        }

        page.classList.add('visible');
    }

    generateAllProductsHTML(data) {
        const list = document.querySelector('.all-products .products-list');
        const theTemplateScript = document.getElementById('products-template').innerHTML;

        //compile
        const theTemplate = Handlebars.compile(theTemplateScript);
        list.innerHTML = theTemplate(data);
        list.querySelectorAll('li').forEach((li) => {
            li.addEventListener('click', (event) => {
                event.preventDefault();
                window.location.hash = `product/${li.dataset.index}`;
                // window.history.pushState(null, null, `/product/${li.dataset.index}`);
                // this.router.render(decodeURI(window.location.pathname));
    })
        });
    }

    renderErrorPage() {
        const page = document.querySelector('.error');
        page.classList.add('visible');
    }
}

const app = new App();