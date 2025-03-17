let restaurant = [
    {
        "Name": "麥當勞",
        "Place": "小吃部",
        "Time": "0700-2359"
    },
    {
        "Name": "7-Eleven",
        "Place": "小吃部",
        "Time": "2400-2400"
    },
    {
        "Name": "漢城異國美食",
        "Place": "小吃部",
        "Time": "1100-2000"
    },
    {
        "Name": "比思多",
        "Place": "小吃部",
        "Time": "0700-1400"
    },
    {
        "Name": "蘇記牛肉麵",
        "Place": "小吃部",
        "Time": ["1100-1400", "1700-2000"]
    },
    {
        "Name": "一番快餐",
        "Place": "小吃部",
        "Time": ["1100-1400", "1700-2000"]
    },
    {
        "Name": "品嘉日式料理",
        "Place": "小吃部",
        "Time": ["1100-1400", "1700-1900"]
    },
    {
        "Name": "飯吃壹點",
        "Place": "小吃部",
        "Time": "1100-2000"
    },
    {
        "Name": "全家",
        "Place": "水木",
        "Time": "0700-2400"
    },
    {
        "Name": "樂菓烘焙坊",
        "Place": "水木",
        "Time": "1000-2000"
    },
    {
        "Name": "四海遊龍",
        "Place": "水木",
        "Time": "1100-1930"
    },
    {
        "Name": "朕在嚐粉",
        "Place": "水木",
        "Time": ["1115-1330", "1630-1845"]
    },
    {
        "Name": "羴羊肉",
        "Place": "水木",
        "Time": "1130-2000"
    },
    {
        "Name": "金展自助餐",
        "Place": "水木",
        "Time": ["1030-1330", "1630-1915"]
    },
    {
        "Name": "利竫和食",
        "Place": "水木",
        "Time": "1100-1930"
    },
    {
        "Name": "弘謙食堂",
        "Place": "水木",
        "Time": "1100-1930"
    },
    {
        "Name": "晨光早午餐",
        "Place": "水木",
        "Time": "0630-1400"
    },
    {
        "Name": "小木屋鬆餅",
        "Place": "水木",
        "Time": "1100-1900"
    },
    {
        "Name": "鼎盛蔬食",
        "Place": "風雲",
        "Floor": "2",
        "Time": ["1100-1400", "1700-1930"]
    },
    {
        "Name": "禾米餐食",
        "Place": "風雲",
        "Floor": "2",
        "Time": ["1100-1400", "1700-1930"]
    },
    {
        "Name": "紅燒如意坊",
        "Place": "風雲",
        "Floor": "2",
        "Time": ["1100-1400", "1700-1930"]
    },
    {
        "Name": "友記快餐館",
        "Place": "風雲",
        "Floor": "2",
        "Time": ["1100-1400", "1700-2000"]
    },
    {
        "Name": "風雲牛肉麵",
        "Place": "風雲",
        "Floor": "2",
        "Time": ["1100-1400", "1700-2000"]
    },
    {
        "Name": "帕森義大利麵",
        "Place": "風雲",
        "Floor": "2",
        "Time": ["1100-1400", "1700-2000"]
    },
    {
        "Name": "碳烤小姐",
        "Place": "風雲",
        "Floor": "2",
        "Time": ["1100-1400", "1700-2000"]
    },
    {
        "Name": "喜番咖哩",
        "Place": "風雲",
        "Floor": "2",
        "Time": ["1100-1400", "1700-2000"]
    },
    {
        "Name": "牛肉先生",
        "Place": "風雲",
        "Floor": "3",
        "Time": "1100-1930"
    },
    {
        "Name": "墨尼捲餅",
        "Place": "風雲",
        "Floor": "3",
        "Time": "1100-1930"
    },
    {
        "Name": "珍御品粥麵館",
        "Place": "風雲",
        "Floor": "3",
        "Time": "1030-2000"
    },
    {
        "Name": "鳴野食蘋早午餐",
        "Place": "風雲",
        "Floor": "3",
        "Time": "0700-1330"
    },
    {
        "Name": "瑪尼卡巴",
        "Place": "風雲",
        "Floor": "3",
        "Time": ["1130-1430", "1600-1930"]
    },
    {
        "Name": "完顏南洋料理",
        "Place": "風雲",
        "Floor": "3",
        "Time": "1100-1930"
    },
    {
        "Name": "清華湖漾餐廳",
        "Place": "風雲",
        "Floor": "4",
        "Time": ["1000-1400", "1600-2000"]
    }
    

]


let small_value = document.querySelector('.small');
let watertree_value = document.querySelector('.watertree');
let windcloud_value = document.querySelector('.windcloud');
let consider_time = document.querySelector('.consider_time');

let restaurant_result = document.querySelector('.restaurant_result');
let restaurant_name = document.querySelector('.restaurant_name');
let restaurant_place = document.querySelector('.restaurant_place');
let restaurant_time = document.querySelector('.restaurant_time');



let rest_times_hour = [];
let rest_times_minute = [];

let button = document.querySelector('.random_btn');



button.addEventListener('click', e =>{
    if(small_value.checked == false && watertree_value.checked == false && windcloud_value.checked == false){
        restaurant_result.innerHTML = "至少選擇一個地點";
        return;
    }

    let aval_rest = [{"Name": "不要吃"}, ];
    for(let i = 0; i < restaurant.length; i++){
        
        
        
        if(restaurant[i].Place == "小吃部" && small_value.checked){
            if(consider_time.checked && check_time(restaurant[i].Time) == false) continue;
            aval_rest.push(restaurant[i]);
        }
        else if(restaurant[i].Place == "水木" && watertree_value.checked){
            if(consider_time.checked && check_time(restaurant[i].Time) == false) continue;
            aval_rest.push(restaurant[i]);
        }
        else if(restaurant[i].Place == "風雲" && windcloud_value.checked){
            if(consider_time.checked && check_time(restaurant[i].Time) == false) continue;
            aval_rest.push(restaurant[i]);
        }
    }

    if(aval_rest.length == 0){
        restaurant_result.innerHTML = "現在沒有可以吃的地方";
        return;
    }

    let random = Math.floor(Math.random() * aval_rest.length);
    
    let time = "<br>";

    
    if(aval_rest[random].Name != "不要吃"){
        if(typeof(aval_rest[random].Time) == "string"){
            time += aval_rest[random].Time.substr(0, 2) + ":" + aval_rest[random].Time.substr(2, 2) + " ~ " + aval_rest[random].Time.substr(5, 2) + ":" + aval_rest[random].Time.substr(7, 2);
        }
        else{
            for(let i = 0; i < aval_rest[random].Time.length; i++){
                time += aval_rest[random].Time[i].substr(0, 2) + ":" + aval_rest[random].Time[i].substr(2, 2) + " ~ " + aval_rest[random].Time[i].substr(5, 2) + ":" + aval_rest[random].Time[i].substr(7, 2) + "<br>";
            }
        }
        
        restaurant_result.innerHTML = "今天吃";
        restaurant_name.innerHTML = aval_rest[random].Name;
        if(aval_rest[random].Place == "風雲") restaurant_place.innerHTML = "位置：" + aval_rest[random].Place + " " + aval_rest[random].Floor + "樓";
        else restaurant_place.innerHTML = "位置：" + aval_rest[random].Place;
        restaurant_time.innerHTML = "開放時間：" + time;
    }
    else{
        restaurant_result.innerHTML = "今天就";
        restaurant_name.innerHTML = "不要吃";
        restaurant_place.innerHTML = "";
        restaurant_time.innerHTML = "";
    }

})

function getRandColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function time_aval(rest_time){
    let today = new Date();
    let hours = ('0' + today.getHours()).slice(-2); 
    let minutes = ('0' + today.getMinutes()).slice(-2);
    if(rest_time == "2400-2400"){
        return true;
    }
    if(parseInt(rest_time.substr(0, 2)) <= hours && hours <= parseInt(rest_time.substr(5, 2) && parseInt(rest_time.substr(2, 2)) <= minutes && minutes <= parseInt(rest_time.substr(7, 2)))){
        return true;
    }

    return false;
}

function check_time(rest_time){
    
    if(typeof(rest_time) == "string"){
        return time_aval(rest_time);
    }
    else if(typeof(rest_time) == "object"){
        let flag = 0;
        for(let j = 0; j < rest_time.length; j++){
            if(time_aval(rest_time[j])){
                flag = 1;
            }
        }
        if(flag == 0){
            return false;
        }
        else return true;
    }

}
setInterval(() => {
    restaurant_name.style.color = getRandColor();
}, 200);





