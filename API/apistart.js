import axios from "axios";
//잔디를 심어보자
const BASE_URL = "https://api.github.com";
const OWNER = "angular";
const REPO = "angular-cli";

export const fetchIssues = async (page = 1, perPage = 10) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/repos/${OWNER}/${REPO}/issues`,
            {
                params: {
                    page,
                    per_page: perPage,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

// import axios from "axios";-->API를 시작하기 위한 코드...

// -간편하고 사용하기 쉬운 API를 제공함,HTTP(요청과 응답)요청을 간단하게 수행하기위한 라이브러리(get, post, put, delete..등)
// -Promise를 기반으로 하는 비동기 처리를 지원 비동기 작업을 쉽게함

// const BASE_URL = "https://api.github.com";'ㅇㅇ

// -GitHub API의 기본 URL을 나타내고 GitHub API의 기본 URL은 https://api.github.com이다

// const OWNER = "angular";ㅣ

// -GitHub 리포지토리의 소유자(Owner)를 나타내며 angular은 소유자를 뜻함

// const REPO = "angular-cli";

// G-itHub 리포지토리의 이름 ,angular-cli"는 Angular CLI 프로젝트의 이름입니다.

// -----------------------------------------------------함수 밖에서 사용된 전역번수

// export const fetchIssues = async (page = 1, perPage = 10) => {

//     -GitHub API로부터 특정 리포지토리의 이슈 목록을 가져오는 비동기 함수
//     -fetchIssues(임의의변수명)함수를  Axios(async)를 사용하여 비동기적(async)으로 GET 요청을 보내고(export), 응답을 받아와서 이슈 데이터를 반환
//     -page = 1, perPage = 10 매개변수로써 GitHub API에서 가져올 이슈 목록의 페이지와 페이지당 항목 수를 의미함
// try {
//         const response = await axios.get(

//             -await 키워드를 사용하여 Promise가 처리될 때까지 대기하고, 응답을 받을 때까지 함수의 실행이 중단함
//             -axios.get 는 Axios의 매서드중하나 이슈목록을 가져오기위한 매서드

//             `${BASE_URL}/repos/${OWNER}/${REPO}/issues`
//               { params: {
//                       page,
//                           per_page: perPage,}

//             -이 URL은 axios.get 메서드에 전달되어 GitHub API로 GET 요청을 보내는 데 사용
//             -이 URL을 사용하면 Axios를 통해 GitHub API에 GET 요청을 보낼 수 있습니다
//             -params는 매개변수인 page,per_page를  GitHub API로 요청을 함
//
//         );
//         return response.data;

//         -성공적으로 응답을 받으면 response.data를 반환함, GitHub API로부터 받아온 이슈 목록과 데이터를 호출자( fetchIssues )에게 반환
//         -response(응답객체),data(GitHub API로부터 가져온 특정 리포지토리의 이슈 목록에 대한 정보)

//     } catch (error) {

//         -에러가 발생한 경우, catch 블록에서 에러를 콘솔에 기록하고 이렇게 하면 함수를 호출하는 쪽에서도 에러를 처리할 수 있습니다.

//         console.error("Error:", error);

//         throw error;

//         - throw 키워드를 사용하면 예외(또는 에러)를 발생시킴
//           throw 키워드를 사용하면 그 함수의 실행이 즉시 중단되고 남은 부분은 실행되지 않는다
//           이후에는 코드는 무시되고 호출자(이 경우에는 try-catch 블록)로 예외가 전파된다
//           비정상적으로 종료되지 않고, 예외를 적절하게 처리하여 프로그램의 안정성을 높이기 위해서 throw가 사용된다
//     }
// };

// async 의 기본형태

// export const 변수명 = async ()=>{

//      try{
//         비동기 작업 수행
//         const 변수명1 = await ()
//         console.log(변수명1)
//         return 변수명1

//     }catch(error){
//     console.error('Error',error)

//     throw error

// }
// }

// -async 함수는 항상 Promise(비동기작업을 다루기 위한 객체)를 반환함. 함수 내에 return 구문을 사용하면 해당 값이 Promise로 감싸져서 반환됌

// -await 키워드는 Promise를 처리하고, 해당 Promise가 완료될 때까지 함수의 실행을 일시 중단함
//  await 뒤에는 항상 Promise를 반환하는 비동기 함수가 와야함

//  -try{
//     비동기 작업 수행
//  }
//   catch(){

//   } :비동기 작업에서 발생할 수 있는 에러를 적절하게 함

//githubapi.js 에는 fetchIssues 함수가 정의되어 있고 이 함수는 GitHub API로부터 이슈 목록을 가져오는 역할을 한다
//이 함수에는 페이지와 페이지당 항목 수를 매개변수로 받을 수 있도록 설정되어 있음
