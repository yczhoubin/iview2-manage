let option = {};

option.serieItem = {name: '项目统计汇总', value: 73.6};

option.serieGauge = function () {
    /*仪表盘图，做中间刻度线*/
    return {
        type: 'gauge',
        name: '业务指标',
        radius: '60%',
        startAngle: '0',
        endAngle: '-359.99',
        splitNumber: '100',
        pointer: {
            show: false
        },
        title: {
            show: false
        },
        detail: {
            show: false
        },
        data: [{ value: 95, name: '完成率' }],
        axisLine: {
            lineStyle: {
                color: [],
                width: 20,
                opacity: 1
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            length: 20,
            lineStyle: {
                color: 'rgba(255,255,255,1)',
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
                    color: '#c521ff',
                    // shadowColor: '#f74369',
                    shadowBlur: 10
                }
            }
        }, {
            value: 100 - item.value,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: 'rgba(11,44,86,1.0)', // 完成的圆环的颜色
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                // emphasis: {
                //     color: 'rgba(44,59,70,1)' // 未完成的圆环的颜色
                // }
            }
        }]
    };
}

option.seriePie2 = function () {
    /*外层环形图，展示详细占比*/
    return {
        name: 'pie',
        type: 'pie',
        clockWise: true,
        startAngle: -270,
        radius: ['60%', '65%'],
        hoverAnimation: false,
        center: ['50%', '50%'],
        data: [{
            value: 5,
            name: '1',
            itemStyle: {
                normal: {
                    color: '#e7b507'
                }
            }
        },
        {
            value: 25,
            name: '1',
            itemStyle: {
                normal: {
                    color: '#009eff'
                }
            }
        },
        {
            value: 15,
            name: '1',
            itemStyle: {
                normal: {
                    color: '#f74369'
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
    backgroundColor: 'rgba(255,255,255,0.0)',
    series: []
};

export default option;