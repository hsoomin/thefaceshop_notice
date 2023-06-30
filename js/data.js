let a=[]; //전체공지 배열 선언
let b=[]; //쇼핑공지 배열 선언
let c=[]; //브랜드공지 배열 선언

let n=-1;  //필터링 카운트 변수 n
let m=-1; // 필터링 카운트 변수 m
let txt=''; // 출력할 배열 내용 기억 변수
let cnt=0; //글번호
let imgName=''; //구분 이미지

let noticeBtNum=0;  //필터링 변수 전체공지=0, 쇼핑공지=1, 브랜드공지=2
let totRecord=0; //전체 레코드 갯수 전체공지=200, 쇼핑공지=150, 브랜드공지=50
let list=5; //한 화면에 보여질 목록갯수
let startRecord=0; //레코드 시작하는 부분 (1page~ 시작번호)
let endRecord=startRecord+list; 

let totPage=0;  //전체=200페이지 / 5=40, 쇼핑=150/5=30, 브랜드=50/5=10
let group=1;  //그룹번호 1~5(그룹1), 6~10(그룹2), ... 36~40(그룹40)
let groupPage=10;
let frontPage=0;
let rearPage=frontPage+groupPage;
let currentPage=0; //현재 보이는 페이지(현재 페이지에서 표시할 addclass 사용할 버튼)

$.ajax({
    url:'./data/notice.json',
    dataType:'JSON',
    success:function(data){
        console.log(data)
    }


})