# (서비스 명)
- 최종 서비스 명을 위 괄호 부분에 작성하세요.
- 최종 서비스의 한 줄 소개를 작성하세요.

### 프로젝트 실행 관련 Docker 명령어

  #### 리엑트 서드파티모듈 로컬에 설치   
  `cd frontend && npm install && cd ..`

  #### docker-compose 실행
  `docker-compose up -d`
  * -d 옵션: 백그라운드 실행
  * MacOS m1칩 사용자들은 docker-compose.yml 파일에서 주석을 해제하고 실행해주세요

  #### backend서버에 접속하기(초기 데이터베이스 설정 목적)
  `docker exec -it no_chilsu_backend_1 /bin/bash`

  #### 초기 데이터베이스에 값 넣기
  `python manage.py makemigrations`  
  `python manage.py migrate`  
  `cd dataset_pipeline && python3 upload_csv.py && python3 create_mock.py && cd..`

  * 위 명령어가 오류나면 아직 DB의 실행이 덜 끝나서 그러니, 잠시 뒤 한번 더 입력해주시면 됩니다.
  * 위 명령어는 최초 1회만 실행해주시고, 이후에는 자동으로 db_mysql/data 폴더 내 자료가 저장됩니다.

  #### 웹페이지 접속해서 확인하기(3000번 포트)
  * localhost:3000 에 접속해서 서비스 실행되는지 확인
  * "칠 수 없다 으라챠챠!!" 가 보인다면 잘 되고 있는 겁니다.

  #### 서버 종료 하기
  `docker-compose down`

  #### 서버 삭제 하기
  `docker rmi no_chilsu_db no_chilsu_frontend no_chilsu_backend`
  * 서버를 종료해야 삭제가 가능합니다.

  #### local development 환경에서 django admin page로 모델 인스턴스 추가하기
  1. 장고 superuser 계정 만들기  
  `docker exec -it no_chilsu_backend_1 /bin/bash`  
  `python manage.py createsuperuser`  
  이후 [username, email, password, password 확인] 을 순서대로 입력
  2. 장고 admin page 접속하기
  `localhost:8000/api/admin` 에 접속  
  이전에 생성한 superuser 계정으로 로그인
  모델 instance를 수정하고 싶은 table명을 클릭  
  * 생성 : 우측 상단에 `{table명} 추가버튼` 클릭  
  * 수정 및 삭제 : 각 instance마다 존재하는 파란색 항목 클릭 (id나 username) 후 수정 및 삭제 진행
  



## 프로젝트 구성 안내

* `bullet point 에 적힌 내용을 수정해 주시면 됩니다.`

* `초기 기획은 언제든 수정될 수 있으니 웹서비스 결과를 내는데 초점을 두시기 바랍니다.`

## 1. 프로젝트 소개

**엔드유저에게 보이는 웹서비스에 대한 소개**
  - 기술 스택 (React.js, Flask, MySQL 등)
  - 웹서비스에 대한 자세한 개요

## 2. 프로젝트 기획 의도

**어떤 의도로 프로젝트를 기획했는지에 대한 설명**
  - 프로젝트 아이디어 동기
  - 해당 서비스를 통해 해결하고 싶었던 문제를 구체적으로 명시

## 3. 서비스 주요 기능 설명

**웹서비스의 유용성, 편의성 및 시각화의 실용성에 대한 설명**
  - 주요 기능 (주된 활용성) 및 서브 기능 소개
  - 프로젝트만의 차별점, 기대 효과

## 4. 프로젝트 구성도
  - 프로젝트 구조도
  - 와이어프레임 e.g) figma
  - 스토리보드

## 5. 프로젝트 팀원 역할 분담
| 이름 | 담당 업무 |
| ------ | ------ |
| 멤버1 | 팀장/프론트엔드 개발 |
| 멤버2 | 백엔드 개발 |
| 멤버3 | 인공지능 개발 |

**멤버별 responsibility**

1. 멤버 1: 팀장/프론트엔드 담당

- 기획 단계: 구체적인 설계와 지표에 따른 프로젝트 제안서 작성
- 개발 단계: 팀원간의 일정 등 조율 + 프론트 or 백엔드 or 인공지능 개발
- 수정 단계: 기획, 스크럼 진행, 코치님 피드백 반영해서 수정, 발표 준비

2. 멤버 2: 백엔드 담당

- 기획 단계: 큰 주제에서 문제 해결 아이디어 도출, 와이어프레임 작성
- 개발 단계: 와이어프레임을 기반으로 API 및 데이터베이스 완성
- 수정 단계: 피드백 반영해서 백엔드 설계 수정

3. 멤버 3: 인공지능 담당

- 기획 단계: 큰 주제에서 문제 해결 아이디어 도출, 와이어프레임 작성
- 개발 단계: 와이어프레임을 기반으로 인공지능 모델 구현, 모델 학습 진행
- 수정 단계: 피드백 반영해서 모델 정확도 향상 

## 6. 버전
  - 프로젝트의 버전 기입

## 7. FAQ
  - 자주 받는 질문 정리
