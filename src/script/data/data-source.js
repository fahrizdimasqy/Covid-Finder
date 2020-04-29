import covids from './covids.js';
class DataSource {
    static searchCovid(keyword) {
        return new Promise((resolve, reject) => {
            const filteredCovids = covids.filter(covid =>
                covid.Provinsi.toUpperCase().includes(keyword.toUpperCase()));
            if (filteredCovids.length) {
                resolve(filteredCovids)
            } else {
                reject(`${keyword} is not found`);
            }
        });
    }
}

export default DataSource;