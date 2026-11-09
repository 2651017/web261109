// script.js : 내 영화 평점 통계(콘솔판)
// 작성자 : 이름(학번)
const titles = ["해리 포터와 마법사의 돌", "해리 포터와 비밀의 방", "해리 포터와 아즈카반의 죄수", "해리 포터와 불사조 기사단", "해리 포터와 죽음의 성물 1"];
const ratings = [7.9, 7.7, 8.0, 7.6, 7.7];
const years = [2001, 2002, 2004, 2007, 2010];
let sum = 0;

for (let i = 0; i < ratings.length; i++) {
    sum = sum + ratings[i];
    
}
console.log("합계:", sum);

const average = sum / ratings.length;
console.log("평균:", average);

let max = ratings[0]; 
let maxIndex = 0;
let count = 0;
for (let i = 0; i < ratings.length; i++) {

    if (ratings[i] > max){
        max = ratings[i];
        maxIndex = i;
    }
    if (ratings[i] >= 8) count++;
}
 console.log("최고:", titles[maxIndex], max);
 console.log("8점 이상:", count + "편");

for (let i = 0; i < ratings.length; i++) {
   let label;
    if(ratings[i]>= 8.5) label="명작";
   else if(ratings[i]>=7) label="추천";
   else label="보통";
    console.log(titles[i] + " (" + years[i] + "): " + ratings[i] + " " + label);

}
const avgText = average.toFixed(1);
const best = titles[maxIndex];
alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);


//document.write("외부 스크립트 방법");

// console.log("여기 부분은 웹페이지가 아니라 콘솔에 출력 됩니다");

// let dan = 3;

// console.log("**엄청나다 구구단 3단!**");
// for(let i =1; i<=9; i++){
//     console.log(`${dan}x${i}=${dan*i}`);
// }

// if(dan === 3){
//     console.log("3단이 맞습니다.")
// }
// else {
//     console.log("틀렸습니다.")
// }

// let arr = [80,70,'메롱',90,60];
// console.log(arr);
// console.log(arr[2]);

// let stdScore ={
//     korean : 80,
//     english : 70,
//     math : 90,
//     science : 60
// };
// console.log(stdScore);
// console.log(stdScore.math);
// stdScore.name = "홍길동";
// console.log(stdScore);