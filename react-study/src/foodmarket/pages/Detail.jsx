import { Container , Row, Col, Button, Modal} from "react-bootstrap";
import { useParams , useNavigate} from "react-router";
import { useState, useEffect } from "react";
import './Detail.css';

function Detail({foods}) {

    // 접속path = /detail/id
    // /detail/fd000 / detail/fd001

    // id 위치에 넘어온 값이 무엇이냐? --> foods 데이터 id 가 동일한 상품 찾기



    //---------------------------------------------------------------------

    /*
        useEffect(실행할 함수, 의존성 배열)
        useEffect(실행할 함수, [] )
        useEffect(실행할 함수)

        useEffect(실행할 함수{
            return ()=>{clean up function)
        }, 의존성배열)
        
    */

    let [orderCount, setOrderConut] = useState(0);
    let [test, setTest] = useState(0);


    useEffect(()=>{
        console.log('useEffect 함수 실행 의존성 배열 없음')
    }) //의존성배열 x -> 로딩될때마다 매번 실행

    useEffect(()=>{
        console.log('useEffect 함수 실행 [] 빈배열 의존')
    }, [])  //빈배열 -> 생성/로딩시 1회 실행

    useEffect(()=>{
        console.log('useEffect 함수 실행 [orderCount] 의존성배열')
        console.log('useEffect[orderCount] :' + orderCount)

        return ()=>{ //clean up function
            console.log('useEffect[orderCount] -> return () 실행');
        }

    }, [orderCount])  //의존성 배열에 존재하는 값 -> 참고


    useEffect(()=>{
        console.log('useEffect 함수 실행 [ tset] 의존성 배열')
    }, [ test])  //의존성 배열에 존재하는 값 -> 참고

    useEffect(()=>{
        console.log('useEffect 함수 실행 [ tset, orderCount ] 의존성 배열')
    }, [ test, orderCount ])  //의존성 배열에 존재하는 값 -> 참고


    let [viewStatus, setViewStatus] = useState(''); 

    useEffect(()=>{
        setTimeout(()=>{
            setViewStatus('end');
        }, 500)
        
    }, [])
    
    let [modalShow, setModalShow] = useState(true); //모달창 표시 여부 true, false

    // modal 창 자동으로 닫히게 적용
    useEffect(()=>{
        //modalSohow state변수 true -> false
        setTimeout(()=>{
            setModalShow(false);
        }, 2000)
        //2초 후 닫음
    }, [])

    useEffect(()=>{

        //setTimeout
        //setInterval
        //비동기식

        //clearTiemout


        const interv = setInterval(()=>{
            console.log('interval');
        }, 1000)

        //vlean up function
        return ()=> {
            clearInterval(interv);
        }

    }, [orderCount])

    //-------------------------------------------------------------------------

    // 경로에 있는 값을 읽어오기
    let { id } = useParams();
    console.log(id);

    // id 확인 -> foods 배열 데이터 id 값 같은 food 데이터 찾기 -> food 화면에 표시-> 


    let food = foods.find((item)=>{
                        return item.id ==id; 
                    })

    let foodIndex =  foods.findIndex((item)=>{
                        return item.id ==id; 
                    })

    let navigate = useNavigate();


    if( food == undefined || food == null ){
        return (
            <div>
                <h1>존재하지 않는 상품입니다</h1>
                <h2>잘못된 접근입니다</h2>
                <Button variant="info" onClick={()=>{
                    navigate("/");
                }}>홈으로 돌아가기</Button>
            </div>
        )
    }
    

    return (
        <Container className={"start " + viewStatus}>
            <Row>
                <Col md={6}>
                    <img src ={import.meta.env.BASE_URL + food.imgPath} style={{width:'100%'}}/>
                </Col>

                <Col md = {6}>
                    <h4>{food.title}</h4>
                    <p>{food.content}</p>
                    <p>{food.price}</p>

                    <p>
                        <button variant="dard" onClick={()=>{setOrderConut(orderCount-1)}}>-</button>
                        <span> {orderCount} </span>
                        <Button variant="dard" onClick={()=>{
                            setOrderConut(orderCount+1)
                            console.log('onclick(): ' + orderCount)
                            }}>+</Button>
                    </p>

                    <Button variant="primary">주문하기</Button>



                </Col>
            </Row>

            <Modal
                show={modalShow}
                onHide={()=>{ setModalShow(false); }}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        어서오세요
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Food Good</h4>
                    <p>
                        많이 구매하세요
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>{ setModalShow(false); }}>Close</Button>
                </Modal.Footer>
            </Modal>

        </Container>
    )

}

export default Detail;