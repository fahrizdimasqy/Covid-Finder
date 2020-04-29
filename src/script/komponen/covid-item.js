class CovidItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        })
    }

    set covid(covid) {
        this._covid = covid;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>

        *{
            margin:0;
            padding:0;
            box-sizing: border-box;
        }

        :host {
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
            display: block;
        }
        
        .covid-info {
            padding: 24px;
        }
        
        .covid-info>h2 {
            font-weight: lighter;
        }
        
        .covid-info>p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10;
        }
        </style>
                <div class="covid-info">
                <h2> Provinsi: ${this._covid.Provinsi} </h2>
                <p> Positif : ${this._covid.Kasus_Posi} </p>
                <p> Sembuh : ${this._covid.Kasus_Semb} </p>
                <p> Meninggal : ${this._covid.Kasus_Meni}</p>
                </div>`;
    }
}
customElements.define("covid-item", CovidItem);