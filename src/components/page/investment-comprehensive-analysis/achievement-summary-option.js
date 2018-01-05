let option = {};

var gradientColor = {
    type: 'linear',
    x: 0,  // 右
    y: 1,  // 下
    x2: 1,  // 左
    y2: 0,  // 上
    colorStops: [{
        offset: 0, color: 'rgb(95, 214, 255)' // 0% 处的颜色
    },{
        offset: 1, color: 'rgb(197, 33, 255)'  // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
};

option.serieItem = { name: '项目统计汇总', value: 84.6 };


option.serieGauge = function () {
    /*仪表盘图，做中间刻度线*/
    return {
        type: 'gauge',
        name: '业务指标',
        radius: '56%',
        startAngle: '240',
        endAngle: '-119.9',
        splitNumber: '50',
        pointer: {
            show: false
        },
        title: {
            show: false
        },
        detail: {
            show: false
        },
        data: [{ value: 100, name: '完成率' }],
        axisLine: {
            lineStyle: {
                color: [[1, 'rgba(0,0,0,0.0)']],
                width: 30,
                opacity: 1
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            length: 10,
            lineStyle: {
                // color: 'rgba(255,255,255,1)',
                color: gradientColor,
                width: 2,
                type: 'solid',
            },
        },
        axisLabel: {
            show: false
        }
    };
}

option.serieOutPie = function (item) {
    /*内心原型图，展示整体数据概览*/
    return {
        name: item.value,
        type: 'pie',
        clockWise: true,
        startAngle: 240,
        zlevel: 2,
        radius: ['60%', '65%'],
        hoverAnimation: false,
        center: ['50%', '50%'],
        data: [{
            value: item.value,
            label: {
                normal: {
                    formatter: function (value) {
                        return '{num|' + item.value + '%}';
                        // return '{text|' + item.name +'}\n{num|' + item.value + '%}';
                    },
                    rich: {
                        text: {
                            color: "#ebebeb",
                            fontFamily: "PingFangSC-Regular",
                            fontSize: 18,
                            align: 'center',
                            padding: [5, 0]
                        },
                        num: {
                            color: "#ebebeb",
                            align: 'center',
                            fontFamily: 'PingFangSC-Medium',
                            fontSize: 35,
                            padding: [21, 0]
                        }
                    },
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '35',
                        fontWeight: 'normal',
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    // color: '#c521ff',
                    color: gradientColor,
                    shadowBlur: 10
                }
            }
        }, {
            value: 100 - item.value,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: 'rgba(11,44,86,0.0)', // 完成的圆环的颜色
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
            }
        }]
    };
}

option.serieBackgroundPie = function () {
    /*外层环形图，展示详细占比*/
    return {
        name: 'pie',
        type: 'pie',
        clockWise: true,
        zlevel: 1,
        startAngle: -270,
        radius: ['61.5%', '63.5%'],
        hoverAnimation: false,
        center: ['50%', '50%'],
        data: [{
            value: 100,
            itemStyle: {
                normal: {
                    color: 'rgba(11,44,86,1.0)',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }],
        itemStyle: {
            normal: {
                borderWidth: 3,
                borderColor: '#00264d'
            }
        }
    }
}

option.option = {
    backgroundColor: 'rgba(0,0,0,1)',
    // backgroundColor: 'rgba(255,255,255,0.0)',
    series: []
};

export default option;