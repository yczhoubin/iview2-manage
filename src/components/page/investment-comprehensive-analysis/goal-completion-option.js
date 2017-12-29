let option = {};


option.totleSerieItem = { name: '总计', value: 69, isTotle: true };

option.serieItems = [
    { name: '测试项目一', value: 80, isTotle: false },
    { name: '测试项目二', value: 63, isTotle: false },
    { name: '测试项目三', value: 78, isTotle: false },
    { name: '测试项目四', value: 57, isTotle: false },
    { name: '测试项目五', value: 89, isTotle: false },
    { name: '测试项目六', value: 66, isTotle: false },
    { name: '测试项目七', value: 93, isTotle: false }
];

var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 40,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
    }
};

var placeHolderStyle = {
    normal: {
        color: 'rgba(44,59,70,1)', // 未完成的圆环的颜色
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: 'rgba(44,59,70,1)' // 未完成的圆环的颜色
    }
};

var rich = {
    total: {
        color: "#ffc72b",
        fontSize: 25,
        align: 'center'
    },
    name: {
        color: '#3dd4de',
        fontSize: 13,
        padding: [5, 2],
        align: 'center'
    },
    percent: {
        color: '#3dd4de',
        fontSize: 25,
        // padding: [8, 0, 0, 0],
        align: 'center'
    }
};

option.pieTotleCenter = function(item, index, totle) {
    return ["80%" , "50%"];
}

option.pieFirstRowCenter = function(item, index, totle) {
    let y = "32%";
    let xPoint = index * 15 + 20;
    return [xPoint + "%", y];
}

option.pieSecondRowCenter = function(item, index, totle) {
    let y = "68%";
    let xPoint = (index - 3) * 15 + 13;
    return [xPoint + "%", y];
}

option.pieCenter = function (item, index, totle) {
    if(item.isTotle) {
        return  this.pieTotleCenter(item, index, totle);
    }
    if (index < 3) {
        return this.pieFirstRowCenter(item, index, totle);
    } else {
        return this.pieSecondRowCenter(item, index, totle);
    }
}

option.pieRadius = function(item) {
    if(item.isTotle) {
        return ['45%', '50%'];
    } else {
        return ['18%', '21%'];
    }
}

option.oneSeries = function (item, index, totle) {
    return {
        name: item.value,
        type: 'pie',
        clockWise: false,
        radius: this.pieRadius(item),
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: this.pieCenter(item, index, totle),
        data: [{
            value: item.value,
            label: {
                normal: {
                    formatter: function (value) {
                        return '{name|' + item.name + ' }\n{percent|' + item.value + '%}';
                    },
                    position: 'center',
                    show: true,
                    rich: rich,
                    // textStyle: {
                    //     fontSize: '15',
                        // fontWeight: 'normal',
                    //     color: '#3dd4de'
                    // }
                }
            },
            itemStyle: {
                normal: {
                    color: '#3dd4de',
                    shadowColor: '#3dd4de',
                    shadowBlur: 10
                }
            }
        }, {
            value: 100 - item.value,
            name: 'invisible',
            itemStyle: placeHolderStyle,
        }]
    };
}

option.option = {
    title: {
        show: false,
        text: '业绩完成',
        left: 'left',
        top: 'top',
        padding: [24, 10],
        textStyle: {
            color: '#fff',
            fontSize: 18,
            align: 'center'
        }
    },
    tooltip: {
        show: false,
    },
    toolbox: {
        show: false,
    },
    backgroundColor: 'rgba(255,255,255,0.0)',
    series: [],
};

export default option;