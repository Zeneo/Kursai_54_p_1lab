let workersObj = {
    'available': [
            {
                'id'        :   1,
                'name'      :   'Nicole Augustina',
                'picture'   :   'url("../img/worker1.jpg")',
                'searchTime':   3,
                'capacity'  :   2,
                'price'     :   500

            },
        {
            'id'        :   2,
            'name'      :   'John Wick',
            'picture'   :   'url("../img/worker2.jpg")',
            'searchTime':   5,
            'capacity'  :   6,
            'price'     :   300

        },
        {
            'id'        :   3,
            'name'      :   'Tom Henrik',
            'picture'   :   'url("../img/worker3.jpg")',
            'searchTime':   6,
            'capacity'  :   10,
            'price'     :   500

        },
        {
            'id'        :   4,
            'name'      :   'Ana Morenina',
            'picture'   :   'url("../img/worker4.jpg")',
            'searchTime':   4,
            'capacity'  :   4,
            'price'     :   300

        },
        {
            'id'        :   5,
            'name'      :   'Igor Menteiev',
            'picture'   :   'url("../img/worker5.jpg")',
            'searchTime':   5,
            'capacity'  :   7,
            'price'     :   500

        },
        {
            'id'        :   6,
            'name'      :   'Iuter Faustis',
            'picture'   :   'url("../img/worker6.jpg")',
            'searchTime':   8,
            'capacity'  :   3,
            'price'     :   600
        },
    ],
    'hired' :   [],
    'hire'  :   hireWorker
};

/**
 *
 * @param worker
 * @param budget
 * @returns {*}
 */
function hireWorker(worker, budget) {
    if (worker.price <= budget) {
        budget -= Number(worker.price);
        workers.hired.push(worker);
        for(let [key, item] of workers.available) {
            if (item.id === worker.id) {
                workers.available.splice(key, 1);
            }
        }
    }

    return budget;
}

function workers() {
    return workersObj
}

export default workers()
