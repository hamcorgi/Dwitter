# Twitter 클론 프로젝트

이 프로젝트는 Node.js 프레임워크인 Express를 사용하여 Twitter를 클론한 프로젝트입니다. 다음은 프로젝트에 사용된 라이브러리와 그 버전입니다.

| 라이브러리 | 라이브러리 설명 | 버전 |
|----------|--------------|------|
| **bcrypt** | 비밀번호 해싱을 위한 라이브러리 | ^5.1.1 |
| **cors** | 크로스 오리진 리소스 공유(CORS)를 활성화하는 미들웨어 | ^2.8.5 |
| **dotenv** | 환경 변수를 로드하기 위한 라이브러리 | ^16.4.5 |
| **express** | Node.js 웹 애플리케이션 프레임워크 | ^4.18.2 |
| **express-async-error** | 비동기 오류 처리를 위한 미들웨어 | ^0.0.2 |
| **express-async-errors** | 비동기 오류 처리를 위한 미들웨어 | ^3.1.1 |
| **express-validator** | 요청 데이터의 유효성 검사를 위한 미들웨어 | ^7.0.1 |
| **helmet** | 보안 관련 HTTP 헤더를 설정하는 미들웨어 | ^7.1.0 |
| **jsonwebtoken** | JSON 웹 토큰(JWT)을 생성하고 검증하기 위한 라이브러리 | ^9.0.2 |
| **mongodb** | MongoDB 데이터베이스 드라이버 | ^6.5.0 |
| **morgan** | HTTP 요청 로거 미들웨어 | ^1.10.0 |
| **mysql** | MySQL 데이터베이스 드라이버 | ^2.18.1 |
| **nodemon** | 파일 변경 시 자동으로 서버를 재시작하는 개발 도구 | ^3.0.1 |
| **validator** | 문자열 유효성 검사를 위한 라이브러리 | ^13.11.0 |

## 프로젝트 설치 및 실행

1. 프로젝트 클론:
   ```
   git clone https://github.com/your-username/twitter-clone.git
   ```

2. 프로젝트 디렉토리로 이동:
   ```
   cd twitter-clone
   ```

3. 종속성 설치:
   ```
   npm install
   ```

4. 환경 변수 파일(`.env`) 설정:
   ```
   PORT=3000
   DATABASE_URL=mongodb://localhost:27017/twitter-clone
   JWT_SECRET=your-jwt-secret
   ```

5. 프로젝트 실행:
   ```
   npm start
   ```

이제 브라우저에서 `http://localhost:3000`으로 접속하여 Twitter 클론 프로젝트를 사용할 수 있습니다.

## 기여

이 프로젝트에 기여하고 싶다면 Pull Request를 보내주세요. 버그 리포트나 기능 요청은 Issue를 통해 알려주세요.

## 라이선스

이 프로젝트는 [MIT 라이선스](LICENSE)를 따릅니다.
