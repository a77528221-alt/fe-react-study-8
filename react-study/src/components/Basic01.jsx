function Basic01() {

    // js 코드 작성 영역
    let hello1= "안녕하세요";

    let hello3;
    if(1==2){
        hello3 = '안녕';
    } else {
        hello3 = '잘가';
    }

    let flag = true;

    let himsg = "";
    for(let i = 1; i<=10; i++){
        himsg += "반갑습니다";0
    }

    //flag : true -> hello1
    //flag : false -> hello2



    // js + xml (html  표기방식)
    return (
        <div>
            <h1>React Basic01</h1>
            <h2 className="font-red">hello react</h2>
            <h3>{hello1}</h3>
            <h3>{hello3}</h3>

            {
                //삼항연산자
                flag == true ? <p>{hello1}</p> : <p>{hello2}</p>
            }

            {
                //삼항연산자
                flag == true && <p>{hello1}</p>
            }

            {
                //삼항연산자
                flag == false &&<p>{hello2}</p> 
            }

            <h2 style={{color:blue, fontSize:'25px'}}>{himsg}</h2>

        </div>
    )


    // if(flag == true){
    //     return (
    //         <div>
    //             <h1>React Basic01</h1>
    //             <h2 className="font-red">hello react</h2>
    //             <h3>{hello1}</h3>
    //             <h3>{hello3}</h3>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <h1>React Basic01</h1>
    //             <h2 className="font-red">hello react</h2>
    //             <h3>{hello1}</h3>
    //             <h3>{hello3}</h3>
    //         </div>
    //     )

    // }

}

export default Basic01;