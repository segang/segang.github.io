var goodURL  = "downloadCenter.html"  //이곳에 인증이 되었을때 이동할 페이지  입력
    alert("패스워드를 입력하셔야 합니다.")
var password =  prompt("PASSWD 입력","")
    if  (password == "13579")  {                // 비밀번호
        alert("안녕하세요!")
        location  =  goodURL
    }
    else  {
        alert("네이버로 가버렷!")
        location  = "http://www.naver.com"    // 실패시 이동 주소      history.back();를 넣어도 됨
    }
