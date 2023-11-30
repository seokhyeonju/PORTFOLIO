$(document).ready(function(){

        // 롤링 배너 복제본 생성
        let roller = document.querySelector('.rolling-list');
        roller.id = 'roller1'; // 아이디 부여

        let clone = roller.cloneNode(true)
        // cloneNode : 노드 복제. 기본값은 false. 자식 노드까지 복제를 원하면 true 사용
        clone.id = 'roller2';
        document.querySelector('.wrap').appendChild(clone); // wrap 하위 자식으로 부착

        document.querySelector('#roller1').style.left = '0px';
        document.querySelector('#roller2').style.left = document.querySelector('.rolling-list ul').offsetWidth + 'px';
        // offsetWidth : 요소의 크기 확인(margin을 제외한 padding값, border값까지 계산한 값)

        roller.classList.add('original');
        clone.classList.add('clone');
    
    
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5' , 'page6', 'page7'],
        sectionsColor: ['#000','#000','#000','#000','#000','#000','#000'],
        navigation: true,
        navigationPosition: 'left',
        responsiveWidth: 1000, // 1000px 이하가 되면 풀페이지 해제
        keyboardScrolling: false,

        // afterLoad: function(anchors, index){
        //     console.log('현재 섹션번호는' + index)
        //     // 만약에 index 번호가 6번이면
        //     // 마지막 섹션이라고 경고창 띄우기
        //     if(index==6){
        //         alert(`마지막 페이지입니다.`)
        //     }else{
        //         false
        //     }
        // }



    })

    $('.inner .button a#timeline').click(function(){
        $('.about').addClass('show')
    })
    $('.about .close ').click(function(){
        $('.about').removeClass('show')
    })
})