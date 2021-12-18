# Typescript React Native study

### 목적

- React Native의 동작원리와 개념을 학습하기 위해 스터디를 진행.

---

### 동작원리

- react는 물리 DOM구조와 가상 DOM구조라는 용어로 사용한다.
- 물리 dom구조는 웹브라우저에서 자바스크립트 코드가 생성하는 실제dom구조이다.
- 가상 dom구조는 리액트 코드가 생성한 자바스크립트 객체 구조이다. 특정시점에서 이 가상dom을 물리dom구조로 만드는데 이럴때 리액트가 렌더링한다 라고 이야기한다.
- 리액트 네이티브 앱을 폰에 설치하고 실행하면 리액트 네이티브의 네이티브 모듈이 실행되면서 네이티브를 담당하는 UI스레드와 App.tsx와 같은 자바스크립트 코드를 실행하는 자바스크립트 엔진 스레드 2개가 동시에 동작한다.
- 이 두 스레드는 메시지 큐 방식으로 서로 렌더링과 관련된 데이터를 주고받는다. 사용자가 화면을 터치하거나 하면 UI스레드는 이 내용을 자바스크립트 쪽 스레드에 이벤트 형태로 넘기게 된다.