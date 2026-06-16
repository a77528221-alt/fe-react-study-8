import './NewsBlog.css';
import { useState } from 'react';
import Modal from './Modal';

function NewsBlog() {


    //제목 내용
    //하드코딩(텍스트 직접) vs 변수 vs state변수
    let title = 'React Study'; // useState('React Study');


    let [news1, setNews1] = useState('어제의 뉴스');
    let [news2, setNews2] = useState('오늘의 뉴스');
    let [news3, setNews3] = useState('내일의 뉴스');

    let [news, setNews] = useState(['어제의 뉴스', '오늘의 뉴스', '내일의 뉴스']);

    let [likeCount, setLikeCount] = useState(0);
    //likeCount1 likeCount2 likeCount3

    let [likeCountArr, setLikeCountArr] = useState([0, 0, 0]);  //뉴스별 좋아요 갯수

    let [modalFlag, setModalFlag] = useState(false);


    //Modal 창에 전달할 선택한 뉴스 포스팅의 관련 정보
    let [selectedTitle, setSelectedTitle] = useState('');
    let [selectedLikeCount, setSelectedLikeCount] = useState(0);

    // input 요소에서 입력된 값을 저장하는 용도
    let [inputText, setInputText] = useState('');


    return (
        <div>
            <div className='black-nav'>
                <h3>Blog Header</h3>
                {/* <div>React Study</div> */}
                <div style={{ color: "orange", fontSize: "20px" }}>{title}</div>
            </div>



            {
                news.map((item, index) => {
                    return (
                        <div className='post-list' key={index}>
                            <h4 onClick={() => {
                                
                                setModalFlag(!modalFlag); //모달창 표시 여부 On/Off   true/false 
                                //어떤 뉴스를 눌렀는지 정보 -> state 저장 -> Modal props 전달
                                setSelectedTitle(item);
                                setSelectedLikeCount(likeCountArr[index]);

                            }}>{news[index]} <span onClick={(event) => {
                                event.stopPropagation(); //이벤트 발생을 추가로 전파(전달)하는 것을 stop!

                                //배열에 존재하는 값 변경 -> 재렌더링
                                let temp = [...likeCountArr];
                                temp[index] += 1;
                                setLikeCountArr(temp);

                            }}>❤</span> {likeCountArr[index]}  </h4>
                            <p>내용자리</p>
                            <button onClick={()=>{
                                //누른 대상을 삭제
                                // 배열안에 누른 대상의 index 위치에 있는 값을 제거

                                //index

                                // arr.splice(index, 몇게지울, 추가할값)

                                // 뉴스제목
                                // let temp = [...news];
                                // temp.splice(index,1); // 삭제를 누른 index위치에 값 1개 삭제
                                // setNews(temp);

                                // // 좋아요 갯수
                                // likeCountArr.splice(index,1);

                                let temp = [...news];
                                temp.filter((value, idx)=>{
                                    return idx != index;  // 0 != 2
                                })
                                console.log(temp);
                                setNews(temp);

                                setLikeCountArr( likeCountArr.filter(( _, idx)=> idx != index))

                            }}>삭제</button>
                        </div>
                    )
                })
            }


            <button onClick={()=>{
                let temp = [...news];
                temp[0] = 'Today 긴급 속보';
                setNews(temp);
            }}>긴급제목변경</button>

            <div>
                <input type='text' id = "input_news_title" onChange={(event)=>{

                    //input 창에서 입력이 발생-> onChange 변경된 함수 -> value 값 -> state 변수에 저장

                    //console.log(event);
                    console.log(event.target.value);
                    setInputText(event.target.value);

                    // let input_title = document.getElementById('input_news_title');
                    // let title = input_title.value;

                    // 배열...push(title);
                    // input_title.vlaue = '';

                }}/>
                <button onClick={()=>{
                    // 발행 버튼 클릭 -> input 입력한 값 state 변수에 저장된 값-> 배열에 등록/추가 처리

                    //추가혀는 값이 비어있으면 진헹x
                    if(inputText ==''){
                        alert('값을 입력해주세요');
                        setInputText('');  //입력칸 초기화
                        return;
                    }

                    let temp = [ ...news];
                    temp.push(inputText);
                    setNews(temp);

                    setInputText(''); //입력된 값 제거

                    let temp2= [...likeCountArr,0];
                    setLikeCountArr(temp2);

                }}>발행</button>
            </div>


            {
                /* modalFlag == true ?  <Modal/> : nul */
            }

            {
                modalFlag && <Modal title={selectedTitle} likeCount={selectedLikeCount} 
                                news={news} setNews={setNews} bgColor={'lightblue'} />
            }


        </div>
    )
}

export default NewsBlog;