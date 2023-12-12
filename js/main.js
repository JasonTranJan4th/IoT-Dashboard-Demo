import Chart from 'chart.js/auto';
import dashboardApi from './api/dashboardApi';


function initBtnHeader(btnList) {
    const btnElE = document.querySelectorAll(btnList);
    btnElE.forEach((btn) => {
        btn.addEventListener('click', () => {

            //clear all interval id are running
            for (let i = 0; i < 99; i++) {
                window.clearInterval(i);
            }

            window.setInterval(function handleLoadData() {

                console.log("run")

                let btnId = btn.getAttribute("id");
                let data;

                //const data1 = JSON.parse('{"ID":1,"Name":"Machine 1","Status":1,"Plan":2000,"Target":1000,"Actual":500,"NG":10,"OEE":{"Current":69.8,"IsInc":false,"PercentInc":-13.3,"Historical":[60.0,55.0,45.0,60.0,70.0,75.0,70.0,72.0,70.0,65.0]},"Availability":{"Current":85.0,"IsInc":true,"PercentInc":2.7,"Historical":[70.0,55.0,45.0,60.0,70.0,75.0,70.0,72.0,70.0,65.0]},"Performance":{"Current":86.4,"IsInc":false,"PercentInc":-15.4,"Historical":[60.0,65.0,45.0,69.0,70.0,75.0,76.0,72.0,88.0,65.0]},"Quality":{"Current":92.4,"IsInc":false,"PercentInc":-0.6,"Historical":[60.0,55.0,45.0,60.0,70.0,75.0,70.0,72.0,70.0,65.0]},"ProductionOrders":[{"No":"1","ID":"LSX-0001","ProductName":"Product 1","Target":105,"Actual":54,"NG":7,"Status":2},{"No":"2","ID":"LSX-0002","ProductName":"Product 2","Target":104,"Actual":54,"NG":6,"Status":2},{"No":"3","ID":"LSX-0003","ProductName":"Product 3","Target":104,"Actual":54,"NG":6,"Status":1},{"No":"4","ID":"LSX-0004","ProductName":"Product 4","Target":104,"Actual":54,"NG":6,"Status":0},{"No":"5","ID":"LSX-0005","ProductName":"Product 5","Target":107,"Actual":54,"NG":8,"Status":0}]}');
                const data1 = JSON.parse('{"ID":1,"Name":"Machine 1","Status":1,"Plan":2000,"Target":1000,"Actual":500,"NG":10,"OEE":{"Current":69.8,"IsInc":false,"PercentInc":-13.3,"Historical":[60.0,55.0,45.0,60.0,70.0,75.0,70.0,72.0,70.0,65.0]},"Availability":{"Current":85.0,"IsInc":true,"PercentInc":2.7,"Historical":[70.0,55.0,45.0,60.0,70.0,75.0,70.0,72.0,70.0,65.0]},"Performance":{"Current":86.4,"IsInc":false,"PercentInc":-15.4,"Historical":[60.0,65.0,45.0,69.0,70.0,75.0,76.0,72.0,88.0,65.0]},"Quality":{"Current":92.4,"IsInc":false,"PercentInc":-0.6,"Historical":[60.0,55.0,45.0,60.0,70.0,75.0,70.0,72.0,70.0,65.0]},"ProductionOrders":[{"ID":"LSX-0001","ProductName":"Product 1","Target":105,"Actual":54,"NG":7,"Status":2},{"ID":"LSX-0002","ProductName":"Product 2","Target":104,"Actual":54,"NG":6,"Status":2},{"ID":"LSX-0003","ProductName":"Product 3","Target":104,"Actual":54,"NG":6,"Status":1},{"ID":"LSX-0004","ProductName":"Product 4","Target":104,"Actual":54,"NG":6,"Status":0}]}');
                const data2 = JSON.parse('{"ID":1,"Name":"Machine 2","Status":1,"Plan":3000,"Target":2000,"Actual":600,"NG":11,"OEE":{"Current":70.8,"IsInc":false,"PercentInc":-13.3,"Historical":[70.0,55.0,90.0,60.0,70.0,75.0,70.0,72.0,70.0,65.0]},"Availability":{"Current":85.0,"IsInc":false,"PercentInc":2.7,"Historical":[80.0,55.0,45.0,60.0,70.0,75.0,70.0,72.0,70.0,65.0]},"Performance":{"Current":86.4,"IsInc":false,"PercentInc":-15.4,"Historical":[60.0,65.0,45.0,69.0,70.0,75.0,76.0,72.0,88.0,65.0]},"Quality":{"Current":92.4,"IsInc":false,"PercentInc":-0.6,"Historical":[60.0,55.0,45.0,60.0,70.0,75.0,70.0,72.0,70.0,65.0]},"ProductionOrders":[{"ID":"LSX-0006","ProductName":"Product 6","Target":105,"Actual":54,"NG":7,"Status":2},{"ID":"LSX-0007","ProductName":"Product 7","Target":104,"Actual":54,"NG":6,"Status":2},{"ID":"LSX-0008","ProductName":"Product 8","Target":104,"Actual":54,"NG":6,"Status":1},{"ID":"LSX-0009","ProductName":"Product 9","Target":104,"Actual":54,"NG":6,"Status":0},{"ID":"LSX-00010","ProductName":"Product 10","Target":107,"Actual":54,"NG":8,"Status":0}]}');
                const data3 = JSON.parse('{"ID":1,"Name":"Machine 3","Status":1,"Plan":4000,"Target":3000,"Actual":700,"NG":12,"OEE":{"Current":99.9,"IsInc":false,"PercentInc":-13.3,"Historical":[80.0,55.0,45.0,60.0,70.0,75.0,70.0,72.0,70.0,65.0]},"Availability":{"Current":85.0,"IsInc":true,"PercentInc":2.7,"Historical":[90.0,55.0,45.0,60.0,70.0,75.0,70.0,72.0,70.0,65.0]},"Performance":{"Current":86.4,"IsInc":false,"PercentInc":-15.4,"Historical":[60.0,65.0,45.0,69.0,70.0,75.0,76.0,72.0,88.0,65.0]},"Quality":{"Current":92.4,"IsInc":false,"PercentInc":-0.6,"Historical":[60.0,55.0,45.0,60.0,70.0,75.0,70.0,72.0,70.0,65.0]},"ProductionOrders":[{"ID":"LSX-00011","ProductName":"Product 11","Target":105,"Actual":54,"NG":7,"Status":2},{"ID":"LSX-00012","ProductName":"Product 12","Target":104,"Actual":54,"NG":6,"Status":2},{"ID":"LSX-00013","ProductName":"Product 13","Target":104,"Actual":54,"NG":6,"Status":1},{"ID":"LSX-00014","ProductName":"Product 14","Target":104,"Actual":54,"NG":6,"Status":0},{"ID":"LSX-00015","ProductName":"Product 15","Target":107,"Actual":54,"NG":8,"Status":0}]}');

                if (btnId === "1") {
                    data = data1;
                } else if (btnId === "2") {
                    data = data2;
                } else {
                    data = data3;
                }

                btnElE.forEach((btn) => {
                    btn.classList.remove('btn_active');
                })

                btn.classList.add("btn_active");

                // const datafromApi = await dashboardApi.getById(btnId);
                // console.log(datafromApi.JSON.parse);

                /**
                 * init change information
                 */
                const machine = document.querySelector(".info_card_item_machine");
                machine.textContent = data.Name;

                const status = document.querySelector(".info_card_item_status");
                status.textContent = data.Status === 1 ? "RUNNING" : "PENDDING";

                const plan = document.querySelector(".info_card_item_plan");
                plan.textContent = data.Plan;

                const target = document.querySelector(".info_card_item_target");
                target.textContent = data.Target;

                const actual = document.querySelector(".info_card_item_actual");
                actual.textContent = data.Actual;

                const ng = document.querySelector(".info_card_item_ng");
                ng.textContent = data.NG;

                /**
                 * end - init change information
                 */

                /**
                 * init change oee, perform, avail, quality
                 */

                const oee = document.getElementById("oee");
                oee.textContent = `${data.OEE.Current.toFixed(1)}%`;

                const oeeTrend = document.getElementById("oee_trend");
                oeeTrend.textContent = `Trend ${data.OEE.PercentInc}%`;

                const oeeStatus = document.getElementById("oee_status");
                oeeStatus.classList.add(data.OEE.IsInc === true ? "trend_increase" : "trend_decrease");

                const perform = document.getElementById("perform");
                perform.textContent = `${data.Performance.Current.toFixed(1)}%`;

                const performTrend = document.getElementById("perform_trend");
                performTrend.textContent = `Trend ${data.Performance.PercentInc}%`;

                const performStatus = document.getElementById("perform_status");
                performStatus.classList.add(data.Performance.IsInc === true ? "trend_increase" : "trend_decrease");

                const avail = document.getElementById("avail");
                avail.textContent = `${data.Availability.Current.toFixed(1)}%`;
                //avail.textContent = data.Availability.Current.slice(-1) === "0" ? `${data.Availability.Current}.0%` : `${data.Availability.Current}%`;

                const availTrend = document.getElementById("avail_trend");
                availTrend.textContent = `Trend ${data.Availability.PercentInc}%`;

                const availStatus = document.getElementById("avail_status");
                availStatus.classList.remove("trend_increase", "trend_decrease");
                availStatus.classList.add(data.Availability.IsInc === true ? "trend_increase" : "trend_decrease");

                const quanlity = document.getElementById("quanlity");
                quanlity.textContent = `${data.Quality.Current.toFixed(1)}%`;

                const quanlityTrend = document.getElementById("quanlity_trend");
                quanlityTrend.textContent = `Trend ${data.Quality.PercentInc}%`;

                const quanlityStatus = document.getElementById("quanlity_status");
                quanlityStatus.classList.remove("trend_increase", "trend_decrease");
                quanlityStatus.classList.add(data.Quality.IsInc === true ? "trend_increase" : "trend_decrease");

                /**
                 * end - init change oee, perform, avail, quality
                 */

                /**
                 * init change data table
                 */

                const ulList = document.querySelectorAll(".detail_body_list");
                if (ulList) {

                    // clear all data in data table
                    for (let i = 0; i < ulList.length; i++) {
                        const ulEle = ulList[i];

                        const liList = ulEle.querySelectorAll(".detail_body_item");

                        for (let j = 0; j < liList.length; j++) {
                            const liEle = liList[j];
                            if (liEle) {
                                const pEle = liEle.querySelector(".detail_body_item > p");
                                pEle.textContent = "";
                            }
                        }
                    }

                    //bind data into each li
                    for (let i = 0; i < data.ProductionOrders.length; i++) {
                        const ulEle = ulList[i];

                        const liList = ulEle.querySelectorAll(".detail_body_item");

                        for (let j = 0; j < liList.length; j++) {
                            const liEle = liList[j];
                            if (liEle) {
                                const pEle = liEle.querySelector(".detail_body_item > p");
                                pEle.classList.remove("low", "normal", "high");
                                const keyValue = pEle.dataset.id;

                                if (keyValue === "No") {
                                    pEle.textContent = i + 1;
                                }
                                else if (keyValue === "Target" || keyValue === "Actual" || keyValue === "NG") {
                                    const value = Number.parseInt(data.ProductionOrders[i][keyValue]);
                                    if (value <= 50) {
                                        pEle.classList.add("low");
                                        pEle.textContent = data.ProductionOrders[i][keyValue];
                                    } else if (value <= 70) {
                                        pEle.classList.add("normal");
                                        pEle.textContent = data.ProductionOrders[i][keyValue];
                                    }
                                    else {
                                        pEle.classList.add("high");
                                        pEle.textContent = data.ProductionOrders[i][keyValue];
                                    }
                                } else {
                                    pEle.textContent = data.ProductionOrders[i][keyValue];
                                }
                            }
                        }
                    }
                }

                /**
                * end - init change data table
                */

                /**
                * init change chart dataset
                */

                const oeeChart = Chart.getChart('oeeChart');
                oeeChart.config.data.datasets[0].data = data.OEE.Historical;
                oeeChart.update();

                const performChart = Chart.getChart('performChart');
                performChart.config.data.datasets[0].data = data.Performance.Historical;
                performChart.update();

                const availChart = Chart.getChart('availChart');
                availChart.config.data.datasets[0].data = data.Availability.Historical;
                availChart.update();

                const qualityChart = Chart.getChart('qualityChart');
                qualityChart.config.data.datasets[0].data = data.Quality.Historical;
                qualityChart.update();

                /**
                * end - init change chart dataset
                */

                return handleLoadData;
            }(), 3000);
        })
    })
}

(() => {

    const xValues = new Array(10).fill('');

    let oeeChart = Chart.getChart('oeeChart');
    if (oeeChart) {
        oeeChart.destroy();
    }

    let performChart = Chart.getChart('performChart');
    if (performChart) {
        performChart.destroy();
    }

    let availChart = Chart.getChart('availChart');
    if (availChart) {
        availChart.destroy();
    }

    let qualityChart = Chart.getChart('qualityChart');
    if (qualityChart) {
        qualityChart.destroy();
    }

    oeeChart = new Chart(
        document.getElementById('oeeChart'),
        {
            type: 'line',
            data: {
                labels: xValues,
                datasets: [{
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    borderColor: 'rgb(75, 192, 192)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        display: false
                    },
                    y: {
                        display: false
                    }
                }
            }
        }
    );

    performChart = new Chart(
        document.getElementById('performChart'),
        {
            type: 'line',
            data: {
                labels: xValues,
                datasets: [{
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    borderColor: 'rgb(75, 192, 192)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        display: false
                    },
                    y: {
                        display: false
                    }
                }
            }
        }
    );

    availChart = new Chart(
        document.getElementById('availChart'),
        {
            type: 'line',
            data: {
                labels: xValues,
                datasets: [{
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    borderColor: 'rgb(75, 192, 192)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        display: false
                    },
                    y: {
                        display: false
                    }
                }
            }
        }
    );

    qualityChart = new Chart(
        document.getElementById('qualityChart'),
        {
            type: 'line',
            data: {
                labels: xValues,
                datasets: [{
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    borderColor: 'rgb(75, 192, 192)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        display: false
                    },
                    y: {
                        display: false
                    }
                }
            }
        }
    );


    initBtnHeader('.btn_header');
})();