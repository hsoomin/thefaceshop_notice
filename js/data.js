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
        //console.log(data)


        $.each(data.공지사항,function(idx,obj){
            a[idx]=[]; //전체 공지사항을 불러오는데 (0,1,2~): a의 인덱스값을 배열로 받아오기  "2차 배열 선언"
            if(obj.구분=='쇼핑'){
                imgName="<img src='./img/icon_notice1.gif' alt=''>"
            }else{
                imgName="<img src='./img/icon_notice2.gif' alt=''>"
            }

            a[idx][0]=idx+1;  //순번
            a[idx][1]=imgName;  //==obj.구분;
            a[idx][2]=obj.제목;
            a[idx][3]=obj.날짜;

            if(obj.구분=='쇼핑'){
                n++;
                b[n]=[]; //==0
                b[n][0]=n+1; //123으로 만든거
                b[n][1]=imgName; 
                b[n][2]=obj.제목;
                b[n][3]=obj.날짜;
            }
            if(obj.구분=='브랜드'){
                m++;
                c[m]=[]; 
                c[m][0]=n+1; 
                c[m][1]=imgName; 
                c[m][2]=obj.제목;
                c[m][3]=obj.날짜;
            }
        })
        $('.noticeBt').each(function(index){
            $(this).on({click:function(){  //노티스비티 3개중에 하나를 클릭하면
                $('.noticeBt').removeClass('addNav');
                $(this).addClass('addNav');
            }})  
        });
    }
})