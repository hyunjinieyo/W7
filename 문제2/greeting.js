// 1. form 요소 선택
var form = document.getElementById("login-form");

// 2. submit 이벤트 리스너 등록
form.addEventListener("submit", function (event) {
    // 2-1. 새로고침 방지
    event.preventDefault();

    // 2-2. 입력된 이름 가져오기
    var name = form.elements[0].value;

    // 2-3. 입력된 이름을 포함한 인사 문구 생성
    var greeting = "Hello" + name;

    // 2-4. login-form 요소 숨기기
    form.classList.add("hidden");

    // 2-5. greeting 요소에 인사 문구 표시
    var greetingElement = document.getElementById("greeting");
    greetingElement.textContent = greeting;
    greetingElement.classList.remove("hidden");
});