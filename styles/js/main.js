
import workers from "./workers.js";
import addBrand from "./brand.js";
import addYears from "./years.js";
let budget = 0;
ready();


document.getElementById('js-submit').addEventListener('click', function(e) {

})

function ready() {
    drawList();
}

function drawAvailableList () {
    let units = workers;
    for(let [key, item] of workers.available) {
        
        if (item.id === worker.id) {
            workers.available.splice(key, 1);
        }
    }
}