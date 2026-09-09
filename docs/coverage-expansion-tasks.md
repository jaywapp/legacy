# 검증 범위 확장 결과

orchestrator: Codex

| 작업 | owner | model | effort | depends_on | parallel_group | files | verification | status |
|---|---|---|---|---|---|---|---|---|
| 인벤토리 | Codex | gpt-6-astra | high | 없음 | nested | 아래 경로 | 실제 추적 파일 및 SDK | completed |
| 실행 가능한 빌드·회귀 확장 | Codex | gpt-6-astra | high | 인벤토리 | nested | 아래 변경 | 아래 명령 | completed |
| 전체 앱 통합 검증 | Codex | gpt-6-astra | high | 빌드·회귀 | nested | 저장소 전체 | 아래 남은 항목 | not_completed |

저장소 간 상위 Codex 작업과 병렬이며 동일 앱 편집·검증은 순차 처리했다. 결과는 아래 검증 범위에만 한정된다.

| 앱/과제 | 실제 빌드·테스트 결과 | 남은 검증 |
|---|---|---|
| resume | npm ci --offline, npm run build 통과. 실제 한/영 전환·잘못된 언어 fallback·경력 데이터6개 Jest 통과 | 실브라우저 반응형/접근성/전체 링크 미검증. 기존 lint·styled component/key 경고 유지 |
| Portfolio | 실제 데이터 렌더링 Node9개 통과 | 홈·내비게이션·모든 페이지 브라우저 E2E 미검증 |
| web.site | 실제 데이터 렌더링 Node9개 통과 | 홈·내비게이션·모든 페이지 브라우저 E2E 미검증 |
| Portfolio.College/Algorithm_Retry/Permutation | MSVC14.44로 실제 원본을 include한 테스트 빌드 및10개 통과 | 전체 조합/콘솔 잘못된 입력 미검증 |
| Portfolio.College/Algorithm/Homework | 소스·README 확인; 전처리/문자열 일부 유실 스냅샷으로 문서화됨 | 컴파일/동작 미검증 |
| ComputerPrograming/Homework1 | 보험료 계산 C 소스 확인 | 빌드·경계 실행 미검증 |
| ComputerPrograming/Homework2 | 시뮬레이션 C 소스 확인 | 빌드·통계 동작 미검증 |
| ComputerPrograming/Homework3 | 보드게임 C 및 데이터파일 확인 | 빌드·플레이 흐름 미검증 |
| DataStructure/Homework1 | Graph C 및 입력파일 확인 | 빌드·DFS/BFS 미검증 |
| DataStructure/Homework2 | Maze C 소스 확인 | 빌드·경로 탐색 미검증 |
| ObjectOrientedPrograming/Homework1 | 상품/판매 C++ 소스 확인 | 빌드·파일 IO 미검증 |
| ObjectOrientedPrograming/Homework2 | 자동판매기 C++ 소스 확인 | 빌드·구매 흐름 미검증 |
| ObjectOrientedPrograming/Homework3 | 파일시스템 C++ 소스 확인 | 빌드·트리 연산 미검증 |
| CarPoly/Android | Java 소스·README 확인 | 완전한 Android 프로젝트 복원/SDK 빌드 미검증 |
| CarPoly/Arduino | 펌웨어 아카이브 경로 확인 | 보드·툴체인 동작 미검증 |
| CarPoly/Embedded | ARM Linux/MySQL/장치 의존 소스 인벤토리 | 하드웨어·크로스컴파일 미검증 |
| CarPoly/Server | PHP/MySQL 원본·README 인벤토리 | PHP 실행환경·DB 스키마 없음, 실제 서비스 실행 안 함 |

재현: 루트 `node --test tests/*.test.cjs` 18개. resume에서 `npm test -- --watchAll=false --runInBand` 6개 및 `npm run build`. MSVC x64 개발자 셸에서 `cl /nologo /EHsc tests/permutation-regression.cpp /Fotests/permutation-regression.obj /Fetests/permutation-regression.exe` 후 실행하여10개 통과. 비교 기준은 std::next_permutation이며 빈 문자열·한 글자·역순·동일 문자·중복 문자·다중 자리 입력을 포함한다.
제품 소스 변경은 없고 실제 동작을 대상으로 테스트를 추가했다.
