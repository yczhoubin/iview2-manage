let option = {};

var echartData = [
    {name: "初步意向", value: 100, count: 289},
    {name: "强烈意向", value: 80, count: 132},
    {name: "企业选址", value: 60, count: 56},
    {name: "洽谈协议", value: 40, count: 20},
    {name: "赢单", value: 20, count: 30}
];

option.serieItems = [
    {name: "招商进度", value: echartData}
]

// var optionColor = ['#ff8986', '#31d4ff', '#c41dff', '#71d131', '#1685ee', '#00ffb4'];
var optionColor = ['rgba(92,221,255,0.2)', 'rgba(92,221,255,0.4)', 'rgba(92,221,255,0.6)', 'rgba(92,221,255,0.8)', 'rgba(92,221,255)'];

option.oneSeries = function(item, index, totle) {
    return {
        name: item.name,
        type: "funnel",
        left: "10%",
        top: 60,
        bottom: 60,
        width: "80%",
        min: 0,
        max: 100,
        minSize: "0%",
        maxSize: "100%",
        sort: 'ascending',
        gap: 2,
        label: {
            normal: {
                show: true,
                position: "inside",
                formatter: function(value) {
                    let data = value.data ? value.data : {};
                    let count = data.count ? data.count : 0;
                    return '{text|' + data.name + " " + count + " 组}";
                },
                rich: {
                    text: {
                        fontFamily: 'MicrosoftYaHei',
                        fontSize: 12,
                        color: '#f3f3f3',
                        borderWidth: 0
                    }
                },
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 0,
            }
        },
        data: item.value,
    }
}

option.option = {
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c}%"
    },
    color: optionColor,
    // calculable: true,
    backgroundColor: 'rgba(255,255,255,0.0)',
    series: []
};
export default option;