let option = {};

var echartData = [
    {value: 385,name: '物流仓储'}, 
    {value: 351,name: '生产制造'}, 
    {value: 351,name: '能源环保'}, 
    {value: 385,name: '服务业'}, 
    {value: 215,name: '金融业'},
    {value: 232,name: '电子信息'}
];

option.serieItems = [
    {name: "统计", value: echartData}
];

var rich = {
    total: {
        color: "#fff",
        fontSize: 25,
        align: 'center'
    },
    name: {
        color: '#fff',
        fontFamily: "MicrosoftYaHei",
        fontSize: 14,
        padding: [5, 4],
        align: 'center'
    },
    percent: {
        color: '#5cd8ff',
        fontFamily: "MicrosoftYaHei",
        fontSize: 22,
        align: 'center'
    },
    percentUnit: {
        color: '#5cd8ff',
        fontFamily: "MicrosoftYaHei",
        fontSize: 14,
        align: 'center'
    }
};

var seriesColor = ['#ff8986', '#31d4ff', '#c41dff', '#71d131', '#1685ee', '#00ffb4',
                   '#ff8986', '#31d4ff', '#c41dff', '#71d131', '#1685ee', '#00ffb4',
                   '#ff8986', '#31d4ff', '#c41dff', '#71d131', '#1685ee', '#00ffb4'];

option.oneSerie = function(item, i, index) {
    return {
        name: item.name,
        type: 'pie',
        radius: ['42%', '50%'],
        hoverAnimation: false,
        label: {
            normal: {
                formatter: function (params, ticket, callback) {
                    var total = 0;
                    var percent = 0;
                    item.value.forEach(function (value, index, array) {
                        total += value.value;
                    });
                    percent = ((params.value / total) * 100).toFixed(1);
                    return '{name|' + params.name + '}{percent| ' + percent + ' }{percentUnit|%}';
                },
                rich: rich
            },
        },
        labelLine: {
            normal: {
                length: 30,
                length2: 80,
                lineStyle: {
                    color: '#0b5263'
                }
            }
        },
        data: item.value
    }
}

option.option = {
    backgroundColor: 'rgba(255,255,255,0.0)',
    title: {
        show: false,
        text: '行业分布',
        left: 'left',
        top: 'top',
        padding: [24, 0],
        textStyle: {
            color: '#fff',
            fontSize: 18,
            align: 'center'
        }
    },
    color: seriesColor,
    legend: {
        selectedMode: false,
        formatter: function(name) {},
        data: [],
        left: 'center',
        top: 'center',
        icon: 'none',
        align: 'center',
        textStyle: {
            color: "#fff",
            fontSize: 10,
            rich: rich
        },
    },
    series: [],
};

export default option;