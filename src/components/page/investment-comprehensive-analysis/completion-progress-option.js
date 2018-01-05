let option = {};

var gradientColor = {
    type: 'linear',
    x: 0,  // 右
    y: 0,  // 下
    x2: 0,  // 左
    y2: 1,  // 上
    colorStops: [{
        offset: 0, color: 'rgb(91,220,255)' // 0% 处的颜色
    },{
        offset: 1, color: 'rgb(11,90,156)'  // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
};


option.serieItems = [
    { name: "测试项目一", value: 80},
    { name: "测试项目二", value: 63},
    { name: "测试项目三", value: 78},
    { name: "测试项目四", value: 57},
    { name: "测试项目五", value: 89},
    { name: "测试项目六", value: 66},
    { name: "测试项目七", value: 93}
];

// 柱状图的宽度 px
var barWidth = 9;

// 横坐标字体样式
option.xAxis1TextStyle = {
    fontFamily: 'MicrosoftYaHei',
    fontSize: 12,
    color: '#bcc8d4'
};

option.xAxis1 = function(names, length) {
    return {
        type: 'category',
        axisTick: {
            show: true,
            length: 10,
            lineStyle: {
                color: '#1f3851',
            },
            interval: function(index, value) {
                if (index == 0 || index == (length - 1)) {
                    return false;
                }
                return true;
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#1f3851',
                type: 'dashed'
            }
        },
        data: names
    };
}

option.xAxis2 = function(names) {
    return {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: names
    };
}

option.serieBackground = function(length) {
    let values = [];
    for(let i = 0; i < length; i++) {
        values.push(100);
    }
    return {
        name: '最大比例',
        type: 'bar',
        xAxisIndex: 1,
        itemStyle: {
            normal: {
                show: true,
                color: 'rgba(3,34,79, 0.5)',
                barBorderRadius: 50,
                borderWidth: 0,
                borderColor: '#333',
            }
        },
        barWidth: barWidth,
        data: values
    };
}

option.serieBefore = function(value) {
    return {
        name: '数值',
        type: 'bar',
        itemStyle: {
            normal: {
                show: true,
                color: '#00FFE6',
                barBorderRadius: 50,
                borderWidth: 0,
                borderColor: '#0b5a9c',
            }
        },
        barWidth: barWidth,
        data: value
    };
}

option.option = {
    backgroundColor: 'rgba(0, 0, 0, 1)',
    // backgroundColor: 'rgba(255, 255, 255, 0.0)',
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#bcc8d4',
            fontFamily: 'MicrosoftYaHei',
            fontSize: 12,
            formatter: function (value, index) {
                return value + "%";
            },
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#000',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#1f3851',
                type: 'dashed'
            }
        },
    },
    xAxis: [],
    series: []
};

export default option;