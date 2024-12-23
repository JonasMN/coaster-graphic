Chart.defaults.color = '#fff'
Chart.defaults.borderColor = '#444'



const printCharts = () => {
    const allCoasters = [
        { name: 'Coaster 1', model: 'Model A', height: 30, length: 30, speed: 40, year: 1999 },
        { name: 'Coaster 2', model: 'Model B', height: 25, length: 25, speed: 50, year: 2001 },
        { name: 'Coaster 3', model: 'Model A', height: 28, length: 28, speed: 60, year: 2005 },
        { name: 'Coaster 4', model: 'Model C', height: 32, length: 40, speed: 40, year: 2010 },
        { name: 'Coaster 5', model: 'Model B', height: 29, length: 56, speed: 60, year: 2013 },
        { name: 'Coaster 6', model: 'Model A', height: 26, length: 20, speed: 80, year: 2016 },
        { name: 'Coaster 7', model: 'Model C', height: 35, length: 10, speed: 15, year: 2019 },
        { name: 'Coaster 8', model: 'Model B', height: 22, length: 16, speed: 8, year: 2020 },
    ];

    const nationalCoasters = [
        { name: 'Coaster 1', model: 'Model A', height: 30, length: 20, speed: 10, year: 1999 },
        { name: 'Coaster 3', model: 'Model A', height: 28, length: 20, speed: 3, year: 2005 },
        { name: 'Coaster 6', model: 'Model A', height: 26, length: 20, speed: 90, year: 2016 },
    ];

    renderModelsChart(allCoasters);
    renderFeaturesChart(nationalCoasters);
    renderYearsChart(allCoasters);
    enableEventHandlers(nationalCoasters);
};

const renderModelsChart = coasters => {

    const uniqueModels = [...new Set(coasters.map(coaster => coaster.model))]

    const data = {
        labels: uniqueModels,
        datasets: [{
            data: uniqueModels.map(currentModel => coasters.filter(coaster => coaster.model === currentModel).length),
            borderColor: getDataColors(),
            backgroundColor: getDataColors(50)
        }]
    }

    const options = {
        plugins: {
            legend: { position: 'left' }
        }
    }

    new Chart('modelsChart', { type: 'doughnut', data, options })
}

const renderFeaturesChart = coasters => {

    const data = {
        labels: coasters.map(coaster => coaster.name),
        datasets: [{
            label: 'Altura (m)',
            data: coasters.map(coaster => coaster.height),
            borderColor: getDataColors()[0],
            backgroundColor: getDataColors(20)[0]
        }]
    }

    const options = {
        plugins: {
            legend: { display: false }
        },
        scales: {
            r: {
                ticks: { display: false }
            }
        }
    }

    new Chart('featuresChart', { type: 'radar', data, options })
}

const renderYearsChart = coasters => {

    const years = ['1998-2000', '2001-2003', '2004-2006', '2007-2009', '2013-2015', '2016-2018', '2019-2021']

    const data = {
        labels: years,
        datasets: [{
            data: getCoastersByYear(coasters, years),
            tension: .5,
            borderColor: getDataColors()[1],
            backgroundColor: getDataColors(50)[1],
            fill: true,
            pointBorderWidth: 5
        }]
    }

    const options = {
        plugins: {
            legend: { display: false }
        }
    }

    new Chart('yearsChart', { type: 'line', data, options })
}

printCharts()