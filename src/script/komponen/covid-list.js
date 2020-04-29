import './covid-item.js';

class CovidList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        })
    }

    set covids(covids) {
        this._covids = covids;
        this.render();
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
            <style>
                .placeholder {
                    font-weight: lighter;
                    color: rgba(0, 0, 0, 0.5);
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
            }
            </style>
        `;
        this.shadowDOM.innerHTML += '<h2 class="placeholder">' + message + '</h2>'
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._covids.forEach(covid => {
            const covidItemElement = document.
            createElement("covid-item");
            covidItemElement.covid = covid;
            this.shadowDOM.appendChild(covidItemElement);
        });
    }
}

customElements.define("covid-list", CovidList);