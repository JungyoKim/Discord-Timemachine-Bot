var moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

const schedule = require('node-schedule');
const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'Nzk2MTY2MTIwNTI4MjgxNjcw.X_T9ew.1qDpS8dKMU_fB0hYd2a4vGHGUh8';

client.on('ready', () => {
    console.log('타임머신이 로그인 했습니다');
    client.user.setActivity('시간표', { type: 'WATCHING' })
    const channel = client.channels.cache.get('794034341646565406');
    // channel.send('STARTED');
});

client.on('message', (message) => {
    var date = moment().format('HH:mm:ss');
    
    if(message.content === '시간표') {
        message.reply('https://cdn.discordapp.com/attachments/764389401635586058/796185535512444989/image0.jpg')
        message.reply('시간표를 열었습니다')
        message.reply(date)
    }
    
    else if(message.content === '봇 추가') {
        message.reply('https://discord.com/api/oauth2/authorize?client_id=796166120528281670&permissions=8&scope=bot')
    }

    else if(message.content === '방학') {
        message.reply('방학 시작')
        var semester = "8"
        var semester7 = "8"
    }

    else if(message.content === '개학') {
        message.reply('개학')
        var semester = "1,2,3,4,5"
        var semester7 = "2,3,5"
    }

});

var semester = "1,2,3,4,5"
var semester7 = "2,3,5"

const class1 = (s) => {
    var rule = new schedule.RecurrenceRule();
    rule.dayOfWeek = [semester];
    rule.hour = 9;
    rule.minute = 0;

    var j =schedule.scheduleJob(rule,function() {
        const channel = client.channels.cache.get('794034341646565406');
        channel.send('1교시 시작');
        console.log('log');
    });
};

class1();

const class2 = (s) => {
    var rule2 = new schedule.RecurrenceRule();
    rule2.dayOfWeek = [semester];
    rule2.hour = 9;
    rule2.minute = 50;

    var j =schedule.scheduleJob(rule2,function() {
        const channel = client.channels.cache.get('794034341646565406');
        channel.send('2교시 시작');
        console.log('log');
    });
};

class2();

const class3 = (s) => {
    var rule3 = new schedule.RecurrenceRule();
    rule3.dayOfWeek = [semester];
    rule3.hour = 10;
    rule3.minute = 40;

    var j =schedule.scheduleJob(rule3,function() {
        const channel = client.channels.cache.get('794034341646565406');
        channel.send('3교시 시작');
        console.log('log');
    });
};

class3();

const class4 = (s) => {
    var rule4 = new schedule.RecurrenceRule();
    rule4.dayOfWeek = [semester];
    rule4.hour = 11;
    rule4.minute = 30;

    var j =schedule.scheduleJob(rule4,function() {
        const channel = client.channels.cache.get('794034341646565406');
        channel.send('4교시 시작');
        console.log('log');
    });
};

class4();

const lunch = (s) => {
    var rule5 = new schedule.RecurrenceRule();
    rule5.dayOfWeek = [semester];
    rule5.hour = 12;
    rule5.minute = 10;

    var j =schedule.scheduleJob(rule5,function() {
        const channel = client.channels.cache.get('794034341646565406');
        channel.send('점심시간 시작');
        console.log('log');
    });
};

lunch();

const class5 = (s) => {
    var rule6 = new schedule.RecurrenceRule();
    rule6.dayOfWeek = [semester];
    rule6.hour = 13;
    rule6.minute = 10;

    var j =schedule.scheduleJob(rule6,function() {
        const channel = client.channels.cache.get('794034341646565406');
        channel.send('5교시 시작');
        console.log('log');
    });
};

class5();

const class6 = (s) => {
    var rule7 = new schedule.RecurrenceRule();
    rule7.dayOfWeek = [semester];
    rule7.hour = 14;
    rule7.minute = 0;

    var j =schedule.scheduleJob(rule7,function() {
        const channel = client.channels.cache.get('794034341646565406');
        channel.send('6교시 시작');
        console.log('log');
    });
};

class6();

const class7 = (s) => {
    var rule8 = new schedule.RecurrenceRule();
    rule8.dayOfWeek = [semester7];
    rule8.hour = 14;
    rule8.minute = 50;

    var j =schedule.scheduleJob(rule8,function() {
        const channel = client.channels.cache.get('794034341646565406');
        channel.send('7교시 시작');
        console.log('log');
    });
};

class7();

const classf = (s) => {
    var rule9 = new schedule.RecurrenceRule();
    rule9.dayOfWeek = [semester7];
    rule9.hour = 15;
    rule9.minute = 30;

    var j =schedule.scheduleJob(rule9,function() {
        const channel = client.channels.cache.get('794034341646565406');
        channel.send('학교 끝');
        console.log('log');
    });
};

classf();

client.login(token);
