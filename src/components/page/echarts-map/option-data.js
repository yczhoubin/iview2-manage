let option = {};
// var BJData = [
//     [{name:'北京'}, {name:'上海',value:95}],
//     [{name:'北京'}, {name:'广州',value:90}],
//     [{name:'北京'}, {name:'大连',value:80}],
//     [{name:'北京'}, {name:'南宁',value:70}],
//     [{name:'北京'}, {name:'南昌',value:60}],
//     [{name:'北京'}, {name:'拉萨',value:50}],
//     [{name:'北京'}, {name:'长春',value:40}],
//     [{name:'北京'}, {name:'包头',value:30}],
//     [{name:'北京'}, {name:'重庆',value:20}],
//     [{name:'北京'}, {name:'常州',value:10}]
// ];

// var SHData = [
//     [{name: '上海'}, {name: '包头', value: 95}],
//     [{name: '上海'}, {name: '昆明', value: 90}],
//     [{name: '上海'}, {name: '广州', value: 80}],
//     [{name: '上海'}, {name: '郑州', value: 70}],
//     [{name: '上海'}, {name: '长春', value: 60}],
//     [{name: '上海'}, {name: '重庆', value: 50}],
//     [{name: '上海'}, {name: '长沙', value: 40}],
//     [{name: '上海'}, {name: '北京', value: 30}],
//     [{name: '上海'}, {name: '丹东', value: 20}],
//     [{name: '上海'}, {name: '大连', value: 10}]
// ];

// var GZData = [
//     [{name: '广州'}, {name: '福州', value: 95}],
//     [{name: '广州'}, {name: '太原', value: 90}],
//     [{name: '广州'}, {name: '长春', value: 80}],
//     [{name: '广州'}, {name: '重庆', value: 70}],
//     [{name: '广州'}, {name: '西安', value: 60}],
//     [{name: '广州'}, {name: '成都', value: 50}],
//     [{name: '广州'}, {name: '常州', value: 40}],
//     [{name: '广州'}, {name: '北京', value: 30}],
//     [{name: '广州'}, {name: '北海', value: 20}],
//     [{name: '广州'}, {name: '海口', value: 10}]
// ];

option.BJData = [
    [{
        name: '上海',
        value: 95
    }, {
        name: '北京'
    }],
    [{
        name: '广州',
        value: 90
    }, {
        name: '北京'
    }],
    [{
        name: '大连',
        value: 80
    }, {
        name: '北京'
    }],
    [{
        name: '南宁',
        value: 70
    }, {
        name: '北京'
    }],
    [{
        name: '南昌',
        value: 60
    }, {
        name: '北京'
    }],
    [{
        name: '拉萨',
        value: 50
    }, {
        name: '北京'
    }],
    [{
        name: '长春',
        value: 40
    }, {
        name: '北京'
    }],
    [{
        name: '包头',
        value: 30
    }, {
        name: '北京'
    }],
    [{
        name: '重庆',
        value: 20
    }, {
        name: '北京'
    }],
    [{
        name: '常州',
        value: 10
    }, {
        name: '北京'
    }]
];

option.SHData = [
    [{name: '包头', value: 95}, {name: '上海'}],
    [{name: '昆明', value: 90}, {name: '上海'}],
    [{name: '广州', value: 80}, {name: '上海'}],
    [{name: '郑州', value: 70}, {name: '上海'}],
    [{name: '长春', value: 60}, {name: '上海'}],
    [{name: '重庆', value: 50}, {name: '上海'}],
    [{name: '长沙', value: 40}, {name: '上海'}],
    [{name: '北京', value: 30}, {name: '上海'}],
    [{name: '丹东', value: 20}, {name: '上海'}],
    [{name: '大连', value: 10}, {name: '上海'}]
];

option.GZData = [
    [{name: '福州', value: 95}, {name: '广州'}],
    [{name: '太原', value: 90}, {name: '广州'}],
    [{name: '长春', value: 80}, {name: '广州'}],
    [{name: '重庆', value: 70}, {name: '广州'}],
    [{name: '西安', value: 60}, {name: '广州'}],
    [{name: '成都', value: 50}, {name: '广州'}],
    [{name: '常州', value: 40}, {name: '广州'}],
    [{name: '北京', value: 30}, {name: '广州'}],
    [{name: '北海', value: 20}, {name: '广州'}],
    [{name: '海口', value: 10}, {name: '广州'}]
];

option.optionArray = [
    ['北京', option.BJData],
    ['上海', option.SHData],
    ['广州', option.GZData]
];

option.legendData = ['北京', '上海', '广州'];
option.legendSelected = {'北京': true, '上海': false, '广州': false};

export const options = option;