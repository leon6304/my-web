﻿function add_boss() {
    $.post('https://script.google.com/macros/s/AKfycbz_fyHwQosV-lWEXGFQ-pkCoimSjg-snI6Zz6pmkmhh_Wx3z81R/exec', {
        startRow: 1,
        startColumn: 1,
        LastColumn: 1,
        url: "1k95M4EHQ0yE8TIOBWelsNcooWl5K5ZZ3MAQDJU0jK0M",
        nan: "戰場boss"
    }, function (e) {
        var boss_1 = ''
        var boss1 = [];
        var boss1 = e.split(',');
        for (g of boss1)
            boss_1 += '<option value="' + g + '" />';
        document.getElementById('theboss').innerHTML = boss_1;
    });

}

function add_girl() {
    $.post('https://script.google.com/macros/s/AKfycbz_fyHwQosV-lWEXGFQ-pkCoimSjg-snI6Zz6pmkmhh_Wx3z81R/exec', {
        startRow: 1,
        startColumn: 1,
        LastColumn: 1,
        url: "1k95M4EHQ0yE8TIOBWelsNcooWl5K5ZZ3MAQDJU0jK0M",
        nan: "女武神列表"
    }, function (e) {
        var girl1 = ''
        var girl = [];
        var girl = e.split(',');
        for (x of girl)
            girl1 += '<option value="' + x + '" />';
        document.getElementById('girllist').innerHTML = girl1;
    });

}

function add_san1() {
    $.post('https://script.google.com/macros/s/AKfycbz_fyHwQosV-lWEXGFQ-pkCoimSjg-snI6Zz6pmkmhh_Wx3z81R/exec', {
        startRow: 1,
        startColumn: 1,
        LastColumn: 1,
        url: "1k95M4EHQ0yE8TIOBWelsNcooWl5K5ZZ3MAQDJU0jK0M",
        nan: "聖痕(上)"
    }, function (e) {
        var san_1 = ''
        var san1 = [];
        var san1 = e.split(',');
        for (x of san1)
            san_1 += '<option value="' + x + '" />';
        document.getElementById('san1').innerHTML = san_1;
    });

}

function add_san2() {
    $.post('https://script.google.com/macros/s/AKfycbz_fyHwQosV-lWEXGFQ-pkCoimSjg-snI6Zz6pmkmhh_Wx3z81R/exec', {
        startRow: 1,
        startColumn: 1,
        LastColumn: 1,
        url: "1k95M4EHQ0yE8TIOBWelsNcooWl5K5ZZ3MAQDJU0jK0M",
        nan: "聖痕(中)"
    }, function (e) {
        var san_2 = ''
        var san2 = [];
        var san2 = e.split(',');
        for (x of san2)
            san_2 += '<option value="' + x + '" />';
        document.getElementById('san2').innerHTML = san_2;
    });

}

function add_san3() {
    $.post('https://script.google.com/macros/s/AKfycbz_fyHwQosV-lWEXGFQ-pkCoimSjg-snI6Zz6pmkmhh_Wx3z81R/exec', {
        startRow: 1,
        startColumn: 1,
        LastColumn: 1,
        url: "1k95M4EHQ0yE8TIOBWelsNcooWl5K5ZZ3MAQDJU0jK0M",
        nan: "聖痕(下)"
    }, function (e) {
        var san_3 = ''
        var san3 = [];
        var san3 = e.split(',');
        for (x of san3)
            san_3 += '<option value="' + x + '" />';
        document.getElementById('san3').innerHTML = san_3;
    });

}

function add_attack1() {
    
    $("#attack1").empty();
    document.getElementById('attack_1').value = '';
    var girl1 = document.getElementById('girl1').value;  
    var weaponName;
    var weaponTypeList = ["雙槍", "十字架", "拳套", "重炮", "太刀", "大劍", "鐮刀","任意武器"];
    var girlTypeList = [['領域裝‧白練', '女武神‧遊俠', '白騎士‧月光', '聖女祈禱', '第六夜想曲', '聖儀裝‧今樣', '空之律者', '原罪獵人'],
    ['女武神‧誓約', '處刑裝‧紫苑', '櫻火輪舞', '神恩頌歌', '月下初擁'],
    ['女武神‧迅羽', '影騎士‧月輪', '白夜執事', '熾翎'],
    ['女武神‧戰車', '驅動裝‧山吹', '雪地狙擊', '次元邊界突破', '銀狼的黎明', '異度黑核侵蝕'],
    ['脈衝裝‧緋紅', '女武神‧強襲', '影武衝擊', '雷電女王的鬼鎧', '逆神巫女', '御神裝‧勿忘', '真炎幸魂'],
    ['女武神‧凱旋', '融核裝‧深紅', '戰場疾風', '血色玫瑰', '極地戰刃', '真紅騎士‧月蝕', '藍莓特攻', '櫻桃炸彈'],
    ['獵襲裝‧影鐵','黯薔薇','蒼騎士‧月魂'],['任意女武神']];

    for (x in girlTypeList)
        if (girlTypeList[x].includes(girl1))
            weaponName = weaponTypeList[x];

    
    if (weaponName == undefined)
    {
        document.getElementById('girl1').value=''
    }
     

    else
        $.post('https://script.google.com/macros/s/AKfycbz_fyHwQosV-lWEXGFQ-pkCoimSjg-snI6Zz6pmkmhh_Wx3z81R/exec', {
            startRow: 1,
            startColumn: 1,
            LastColumn: 1,
            url: "1k95M4EHQ0yE8TIOBWelsNcooWl5K5ZZ3MAQDJU0jK0M",
            nan: weaponName
        }, function (e) {
            var attack_1 = ''
            var attack1 = e.split(',');
            for (x of attack1)
                attack_1 += '<option value="' + x + '" />';
            document.getElementById('attack1').innerHTML = attack_1;
        });
}

function add_attack2() {

    $("#attack2").empty();
    document.getElementById('attack_2').value = '';
    var girl2 = document.getElementById('girl2').value;
    var weapon2Name;
    var weapon2TypeList = ["雙槍", "十字架", "拳套", "重炮", "太刀", "大劍", "鐮刀", "任意武器"];
    var girl2TypeList = [['領域裝‧白練', '女武神‧遊俠', '白騎士‧月光', '聖女祈禱', '第六夜想曲', '聖儀裝‧今樣', '空之律者', '原罪獵人'],
    ['女武神‧誓約', '處刑裝‧紫苑', '櫻火輪舞', '神恩頌歌', '月下初擁'],
    ['女武神‧迅羽', '影騎士‧月輪', '白夜執事', '熾翎'],
    ['女武神‧戰車', '驅動裝‧山吹', '雪地狙擊', '次元邊界突破', '銀狼的黎明', '異度黑核侵蝕'],
    ['脈衝裝‧緋紅', '女武神‧強襲', '影武衝擊', '雷電女王的鬼鎧', '逆神巫女', '御神裝‧勿忘', '真炎幸魂'],
    ['女武神‧凱旋', '融核裝‧深紅', '戰場疾風', '血色玫瑰', '極地戰刃', '真紅騎士‧月蝕', '藍莓特攻', '櫻桃炸彈'],
    ['獵襲裝‧影鐵', '黯薔薇', '蒼騎士‧月魂'], ['任意女武神']];

    for (x in girl2TypeList)
        if (girl2TypeList[x].includes(girl2))
            weapon2Name = weapon2TypeList[x];


    if (weapon2Name == undefined) {
        document.getElementById('girl2').value = ''
    }


    else
        $.post('https://script.google.com/macros/s/AKfycbz_fyHwQosV-lWEXGFQ-pkCoimSjg-snI6Zz6pmkmhh_Wx3z81R/exec', {
            startRow: 1,
            startColumn: 1,
            LastColumn: 1,
            url: "1k95M4EHQ0yE8TIOBWelsNcooWl5K5ZZ3MAQDJU0jK0M",
            nan: weapon2Name
        }, function (e) {
            var attack_2 = ''
            var attack2 = e.split(',');
            for (x of attack2)
                attack_2 += '<option value="' + x + '" />';
            document.getElementById('attack2').innerHTML = attack_2;
        });
}

function add_attack3() {

    $("#attack3").empty();
    document.getElementById('attack_3').value = '';
    var girl3 = document.getElementById('girl3').value;
    var weapon3Name;
    var weapon3TypeList = ["雙槍", "十字架", "拳套", "重炮", "太刀", "大劍", "鐮刀", "任意武器"];
    var girl3TypeList = [['領域裝‧白練', '女武神‧遊俠', '白騎士‧月光', '聖女祈禱', '第六夜想曲', '聖儀裝‧今樣', '空之律者', '原罪獵人'],
    ['女武神‧誓約', '處刑裝‧紫苑', '櫻火輪舞', '神恩頌歌', '月下初擁'],
    ['女武神‧迅羽', '影騎士‧月輪', '白夜執事', '熾翎'],
    ['女武神‧戰車', '驅動裝‧山吹', '雪地狙擊', '次元邊界突破', '銀狼的黎明', '異度黑核侵蝕'],
    ['脈衝裝‧緋紅', '女武神‧強襲', '影武衝擊', '雷電女王的鬼鎧', '逆神巫女', '御神裝‧勿忘', '真炎幸魂'],
    ['女武神‧凱旋', '融核裝‧深紅', '戰場疾風', '血色玫瑰', '極地戰刃', '真紅騎士‧月蝕', '藍莓特攻', '櫻桃炸彈'],
    ['獵襲裝‧影鐵', '黯薔薇', '蒼騎士‧月魂'], ['任意女武神']];

    for (x in girl3TypeList)
        if (girl3TypeList[x].includes(girl3))
            weapon3Name = weapon3TypeList[x];


    if (weapon3Name == undefined) {
        document.getElementById('girl3').value = ''
    }


    else
        $.post('https://script.google.com/macros/s/AKfycbz_fyHwQosV-lWEXGFQ-pkCoimSjg-snI6Zz6pmkmhh_Wx3z81R/exec', {
            startRow: 1,
            startColumn: 1,
            LastColumn: 1,
            url: "1k95M4EHQ0yE8TIOBWelsNcooWl5K5ZZ3MAQDJU0jK0M",
            nan: weapon3Name
        }, function (e) {
            var attack_3 = ''
            var attack3 = e.split(',');
            for (x of attack3)
                attack_3 += '<option value="' + x + '" />';
            document.getElementById('attack3').innerHTML = attack_3;
        });
}

function scoreck()
{var score = document.getElementById('score').value
    if (score >= 0 && score <= 31893) { }
    else if (score >= 31893 && score <= 32000) { alert('你是不是開了大月卡??'); document.getElementById('score').value = '' }
    else { alert('錯誤 分數應在0~32000'); document.getElementById('score').value='' }
}

function textclick(a) {
    document.getElementById(a).value = ''
}

function buttonclick()
{
    var boss_ = document.getElementById('boss_1').value;
    var girl1 = document.getElementById('girl1').value;
    var girl2 = document.getElementById('girl2').value;
    var girl3 = document.getElementById('girl3').value;
    var s_1 = document.getElementById('s_1').value;
    var attack_1 = document.getElementById('attack_1').value;
    var san_1_1 = document.getElementById('san_1_1').value;
    var san_1_2 = document.getElementById('san_1_2').value;
    var san_1_3 = document.getElementById('san_1_3').value;
    var s_2 = document.getElementById('s_1').value;
    var attack_2 = document.getElementById('attack_2').value;
    var san_2_1 = document.getElementById('san_2_1').value;
    var san_2_2 = document.getElementById('san_2_2').value;
    var san_2_3 = document.getElementById('san_2_3').value;
    var s_3 = document.getElementById('s_3').value;
    var attack_3 = document.getElementById('attack_3').value;
    var san_3_1 = document.getElementById('san_3_1').value;
    var san_3_2 = document.getElementById('san_3_2').value;
    var san_3_3 = document.getElementById('san_3_3').value;
    var score_ = document.getElementById('score').value;
    var video = document.getElementById('video').value;

    if (girl1 == '任意女武神' && girl2 == '任意女武神' && girl3 == '任意女武神') { alert('錯誤！3位女武神不可全為任意') }
    else  if (girl1 == '' || girl2 == '' || girl3 == '' || s_1 == '' || s_2 == '' || s_3 == '' || attack_1 == '' || attack_2 == '' || attack_3 == '' || san_1_1 == '' || san_1_2 == '' || san_1_3 == '' || san_2_1 == '' || san_2_2 == '' || san_2_3 == '' || san_3_1 == '' || san_3_2 == '' || san_3_3 == '' || score_ == '' || boss_ == '') { alert('錯誤！有必填的項目沒填(除了參考影片皆為必填)') }
    else if (girl1 == girl2 || girl2 == girl3 || girl1 == girl3) {
        if (girl1 == '任意女武神' && girl2 == '任意女武神' || girl2 == '任意女武神' && girl3 == '任意女武神' || girl1 == '任意女武神' && girl3 == '任意女武神') { }
        else { alert('錯誤！女武神不得重複') }
    }
   
    else
    {
        
           $.post('https://script.google.com/macros/s/AKfycbzKSKvYQbmtdj8LwLHdS9a34Q_c3ADyxGG819ZA1NKvtgUcyxU/exec', {
               url: "1tQP2Y8bEoL_0WP0V3KS0fYRevZlaproEWnbZauESEEs",
               nan: boss_,
               girl1_: girl1,
               s_1_: s_1,
               attack_1_: attack_1,
               san_1_1_: san_1_1,
               san_1_2_: san_1_2,
               san_1_3_: san_1_3,
               girl2_: girl2,
               s_2_: s_2,
               attack_2_: attack_2,
               san_2_1_: san_2_1,
               san_2_2_: san_2_2,
               san_2_3_: san_2_3,
               girl3_: girl3,
               s_3_: s_3,
               attack_3_: san_3_3,
               san_3_1_: san_3_1,
               san_3_2_:san_3_2,
               san_3_3_: san_3_3,
               score__: score_,
               video_: video,
           }
               , function (e) {
                   alert(e); window.close();
                
            });

        
    };
    
}

function loadok()
{ alert('資料庫載入完成') }

function checkvalue(textid, checknan) {
    var textvalue = document.getElementById(textid).value;

    $.post('https://script.google.com/macros/s/AKfycbz_fyHwQosV-lWEXGFQ-pkCoimSjg-snI6Zz6pmkmhh_Wx3z81R/exec', {
        startRow: 1,
        startColumn: 1,
        LastColumn: 1,
        url: "1k95M4EHQ0yE8TIOBWelsNcooWl5K5ZZ3MAQDJU0jK0M",
        nan: checknan
    }, function (e) {
       
        var check = [];
        var check = e.split(',');
            for (g of boss1)
            {
                if (g.includes(textvalue)) { }
                else { alert('錯誤！請選擇選單內的選項')}
            }
    });
}