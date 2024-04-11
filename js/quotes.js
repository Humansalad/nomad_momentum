const quotes =[
    {
    quote : "삶이 있는 한 희망은 있다" ,
    author : "키케로"
}, 
{
    quote : "산다는것 그것은 치열한 전투이다.",
    author : "로망로랑"
},
{
    quote : "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    author : "사무엘존슨"
},
{
    quote : "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해",
    author : "찰리 채플린"
},
{
    quote : "신은 용기있는자를 결코 버리지 않는다",
    author : "켄러"
},
{
    quote : "피할수 없으면 즐겨라",
    author : "로버트 엘리엇"
},
{
    quote : "먼저핀꽃은 먼저진다 남보다 먼저 공을 세우려고 조급히 서둘것이 아니다",
    author : "채근담"
},
{
    quote : "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
    author : "L.론허바드"
},
{
    quote : "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다",
    author : "제임스 오펜하임"
},
{
    quote : "한번의 실패와 영원한 실패를 혼동하지 마라",
    author : "F.스콧 핏제랄드"
},
{
    quote : "이미끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라."  ,
    author : "탈무드"
}
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function rand(Max) {
    return Math.floor(Math.random() * (Max + 1));
  }

const quoteNumb = quotes.length - 1;
const RandomNumber = rand(quoteNumb);
const todaysQuote = quotes[RandomNumber];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author
