import geoCoordMap from './geoCoordMap.js';

let option = {};
var color = ['#a6c84c', '#ffa022', '#46bee9'];
var series = [];
// var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
option.geoCoordMap=geoCoordMap;

option.convertData = function (data) {
    let res = [];
    for (let i = 0; i < data.length; i++) {
        let dataItem = data[i];
        let fromCoord = this.geoCoordMap[dataItem[0].name];
        let toCoord = this.geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};

option.effectScatterData = function(items) {
    let result = [];
    for(let i = 0; i < items.length; i++) {
        let dataItem = items[i];
        let newItem = {
            name: items[0].name,
            value: this.geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
        }
        result.push(newItem);
    }
    return result;
}

option.oneSerie = function (item, i) {
    return [{
        name: item[0],
        type: 'lines',
        zlevel: 2,
        effect: {
            show: true,
            period: 4,
            trailLength: 0.02,
            symbol: 'arrow',
            symbolSize: 5,
        },
        lineStyle: {
            normal: {
                width: 1,
                opacity: 0.6,
                curveness: 0.2,
                color: '#d48265'
            }
        },
        data: this.convertData(item[1])
    }, {
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                period: 4,
                brushType: 'stroke',
                scale: 5
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    offset: [5, 0],
                    formatter: '{b}'
                },
                emphasis: {
                    show: true
                }
            },
            // symbol: 'circle',
            symbol: 'emptyCircle',
            symbolSize: function (val) {
                return 4 + val[2] / 10;
            },
            itemStyle: {
                normal: {
                    show: false,
                    color: 'lime'
                }
            },
            data: this.effectScatterData(item[1])
        },
        //被攻击点
        {
            name: item[0],
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            hoverAnimation: true,
            rippleEffect: {
                period: 4,
                brushType: 'stroke',
                scale: 4
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    color: '#00ffff',
                    formatter: '{b}',
                    textStyle: {
                        color: "#00ffff"
                    }
                },
                emphasis: {
                    show: true
                }
            },
            symbol: 'circle',
            symbolSize: 15,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#f00'
                }
            },
            data: [{
                name: item[0],
                value: this.geoCoordMap[item[0]].concat([100]),
            }],
        }];
}

option.option = {
    backgroundColor: '#FFFFFF',
    title: {
        text: '模拟迁徙',
        subtext: '数据纯属虚构',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        type: 'plain',
        orient: 'vertical',
        top: 'top',
        left: 'left',
        data: [],
        selected: [],
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'single',
        formatter: function (name) {
            return name;
        },
        tooltip: {
            show: true
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                color: 'rgba(51, 69, 89, .5)',
                borderColor: 'rgba(100,149,237,1)'
            },
            emphasis: {
                color: 'rgba(37, 43, 61, .5)'
            }
        }
    },
    series: series
};

export default option;