var age = prompt("나이를 입력해 주세요.");

if(age >= 18){
    alert(`${age}은/는 성인입니다.`);
}
else{
    document.write(`${age}은/는 청소년입니다.`);
}

(age >= 20)?alert(`성인입니다.`):alert(`미성년입니다.`);