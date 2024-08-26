# Pokemon Dex (포켓몬 도감) 만들기

- **과제 기간** : 24.08.20 ~ 24.08.25
- **구현해야 할 컴포넌트**

  - 홈페이지
  - 대시보드
  - 포켓몬 리스트
  - 포켓몬 디테일 페이지

- 💻 **기술 스택** <br>

    <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
    <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white"/>
    <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/>

<br>

- 💻 **폴더 구조** <br>

📦src<br>
┣ 📂components<br>
┃ ┣ 📜Dashboard.jsx<br>
┃ ┣ 📜PokemonCard.jsx<br>
┃ ┣ 📜PokemonDetail.jsx<br>
┃ ┗ 📜PokemonList.jsx<br>
┣ 📂context<br>
┃ ┗ 📜PokemonContext.jsx<br>
┣ 📂pages<br>
┃ ┣ 📜Dex.jsx<br>
┃ ┗ 📜Home.jsx<br>
┣ 📂shared<br>
┃ ┗ 📜Router.jsx<br>
┣ 📜App.css<br>
┣ 📜App.jsx<br>
┣ 📜index.css<br>
┣ 📜main.jsx<br>
┗ 📜mock.js<br>

<br>
<br>

## 🚀 최종 실행화면

![화면 기록 2024-08-26 오후 3 34 46](https://github.com/user-attachments/assets/9ae7deeb-fa2f-41ae-9145-5c088ffed06f)

<br>

### ✅ 경고창 띄우기

toast UI 요소를 사용하여 피드백을 제공하였습니다.

1. 중복된 카드 선택시

<img width="835" alt="스크린샷 2024-08-26 오후 3 40 28" src="https://github.com/user-attachments/assets/fcd27c73-8754-44e3-bc33-e74e8a6f81ac">

<br>

2. 최대 개수(6개) 이상 선택했을 시

<img width="1241" alt="스크린샷 2024-08-26 오후 3 40 41" src="https://github.com/user-attachments/assets/562d97c7-d83e-4a58-bd87-aca5815e6837">

<br>

### ✅ props drilling / Context API 2개의 브랜치로 작업

main 브랜치에는 자잘한 추가수정과 주석처리, 폴더 파일구조 정리까지 마친 최종 결과물이 들어있습니다.

<img width="335" alt="스크린샷 2024-08-26 오후 3 46 00" src="https://github.com/user-attachments/assets/b238059b-1501-4051-9d02-db10d8c7624d">

<br>
<br><br>

## 🤯 과제 시 어려웠던 점과 해결한 사례

1. 경고창이나 카드가 추가되고 사라지는 이벤트가 어느 이벤트와 어느 시점에서 발생하는지 한번 더 생각해보고 로직을 구성해야하는 부분이 까다로웠습니다.<br>
   처음에는 `Dashboard.jsx`에 경고창이 나오는 조건문을 작성하였는데, `Strictmode` 때문에 2번씩 경고창이 나왔고 조건부분을 전혀 검사하지 않는 문제가 발생했습니다. <br>
   사용자가 버튼을 클릭하고 > 조건을 검사하고 > 결과가 나온다는 부분을 생각하지 못하여 발생한 실수였습니다.<br>
   여러 개의 컴포넌트를 관리하면서 이런 부분에 대해 더 고민하면서 코드를 작성해야겠다고 생각했습니다.
   <br>

2. 여전히 `prop` 을 넘겨주는 부분이 완벽하다!라고 느껴질 정도로 성장하지 못한 것 같아 복습을 철저히 해야겠다는 생각이 들었습니다.
   <br>

3. 아무것도 선택하지 않은 카드의 초기값으로 `null` 을 주었는데, 추가, 삭제 버튼 로직을 작성할 때 null 값까지 함께 검사해야하는 부분이 어려웠습니다.
   <br>

4. `Style Components`도 별도의 파일로 빼서 정리하는게 좋을지, 아니면 해당 컴포넌트 하단에 같이 남겨두는게 가독성과 유지보수에 좋을지 고민이 되었습니다.
   <br>

5. 리덕스에 대한 이해가 조금 더 있었다면 도전해봤을텐데 리덕스 버전을 만들지 못한 부분도 아쉽습니다.

배포링크 : https://pokemon-dex-blue.vercel.app/
