


function CustomerService(){

    /*
        localStorage 사용
        브라우저에서 간단한 데이터 저장 및 활용

        읽기 localStorage.getItem(키)
        쓰기 localStorage.setItem(키, 값)
        삭제 localStorage.semoveItem(키)

    */

    localStorage.setItem('key11', '안녕하세요');
    localStorage.setItem('hello', 'hi')

    localStorage.removeItem('abc');
    console.log(localStorage.getItem('msg'));

    /*
        단순 텍스트가 아니라 복잡한 배열이나 객체 단위를 저장

        localStorage 단순 텍스트만 저장

        JSON 포멧의 텍스트

        js객체 -> json 포멧의 문자열 반환 -> 저장

        읽기 -> json 포멧의 문자열 -> js 객체 변환
        json.parse()

        
    */

    let tempFood = {
        
        id : 'fd002',
        title : "Hamburger",
        content : "완전식품 햄버거",
        price : 11000,
        imgPath: 'images/food3.jpg',
        stockCount: 0
    
    }
    localStorage.setItem('tempFood', tempFood);
    localStorage.setTtem('tempFoodJson', JSON.stringify(tempFood));

    
    let tempFoodjson = localStorage.getItem('tempFoodJson')
    console.log(tempFoodjson);
    console.log(tempFoodjson.title);

    let jsonObject= JSON.parse(tempFoodjson)
    console.log(jsonObject);
    console.log(jsonObject.id);
    console.log(jsonObject.title);


    return (
        <div>
            <h1>고객서비스페이지</h1>
            <h2>정성을 다하겠습니다</h2>
        </div>
    )

}

export default CustomerService;
