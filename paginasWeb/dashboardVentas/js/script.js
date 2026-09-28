// =========================
// GRÁFICO DE VENTAS
// =========================

const ventas = document.getElementById("ventas");
const ctxVentas = ventas.getContext("2d");

const gradient = ctxVentas.createLinearGradient(0, 0, 0, 350);

gradient.addColorStop(0, "rgba(91, 61, 245, .35)");
gradient.addColorStop(1, "rgba(91, 61, 245, 0)");

new Chart(ctxVentas, {

    type: "line",

    data: {
        labels: [
            "1 Jun",
            "6 Jun",
            "11 Jun",
            "16 Jun",
            "21 Jun",
            "26 Jun",
            "30 Jun"
        ],

        datasets: [{
            label: "Ventas",

            data: [
                15000,
                25000,
                32000,
                30000,
                42000,
                39000,
                50000
            ],

            borderColor: "#5B3DF5",
            backgroundColor: gradient,

            fill: true,

            tension: .45,

            borderWidth: 4,

            pointRadius: 4,
            pointHoverRadius: 6,

            pointBackgroundColor: "#5B3DF5",
            pointBorderColor: "#FFFFFF",
            pointBorderWidth: 2
        }]
    },

    options: {

        responsive: true,
        maintainAspectRatio: false,

        plugins: {

            legend: {
                display: false
            }

        },

        scales: {

            x: {
                grid: {
                    display: false
                }
            },

            y: {

                beginAtZero: false,

                ticks: {
                    callback: value => "€" + value.toLocaleString()
                },

                grid: {
                    color: "#E5E7EB"
                }

            }

        }

    }

});



// =========================
// GRÁFICO DE CATEGORÍAS
// =========================

const categorias = document.getElementById("categorias");

new Chart(categorias, {

    type: "doughnut",

    data: {

        labels: [
            "Electrónica",
            "Ropa",
            "Hogar",
            "Deportes",
            "Otros"
        ],

        datasets: [{

            data: [
                35,
                25,
                20,
                12,
                8
            ],

            backgroundColor: [
                "#5B3DF5",
                "#2563EB",
                "#35C46B",
                "#F9A83B",
                "#C9CED6"
            ],

            borderColor: "#FFFFFF",
            borderWidth: 2

        }]

    },

    options: {

        responsive: true,
        maintainAspectRatio: false,

        cutout: "60%",
        radius: "72%",

        plugins: {

            legend: {

                position: "right",

                labels: {

                    boxWidth: 14,
                    boxHeight: 14,

                    padding: 18,

                    font: {
                        family: "Poppins",
                        size: 13
                    }

                }

            }

        }

    }

});



// =========================
// GRÁFICO DE CANALES
// =========================

const canales = document.getElementById("canales");

new Chart(canales, {

    type: "bar",

    data: {

        labels: [
            "Online",
            "Física",
            "Marketplace",
            "Redes"
        ],

        datasets: [{

            data: [
                21450,
                13280,
                7850,
                5670
            ],

            backgroundColor: [
                "#5B3DF5",
                "#2563EB",
                "#35C46B",
                "#F9A83B"
            ],

            borderRadius: 10,
            borderSkipped: false

        }]

    },

    options: {

        responsive: true,
        maintainAspectRatio: false,

        plugins: {

            legend: {
                display: false
            }

        },

        scales: {

            x: {

                grid: {
                    display: false
                }

            },

            y: {

                beginAtZero: true,

                ticks: {
                    callback: value => "€" + value.toLocaleString()
                },

                grid: {
                    color: "#E5E7EB"
                }

            }

        }

    }

});