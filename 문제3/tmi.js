const tmi = [
    {
        question: "나의 애착 인형은?",
        answer: "분홍 강아지 배게",
    },
    {
        question: "녹차 호 vs. 불호?",
        answer: "호호",
    },
    {
        question: "가장 좋아하는 색은?",
        answer: "파랑색",
    },
    {
        question: "퍼스널 컬러?",
        answer: "봄웜브라이트",
    },
    {
        question: "배우고 싶은 거?",
        answer: "일렉기타",
    }
];

const question = document.getElementById("question")
const answer = document.getElementById("answer")
const todaysTmi = tmi[Math.floor(Math.random()*tmi.length)]

question.innerText = todaysTmi.question
answer.innerText = todaysTmi.answer