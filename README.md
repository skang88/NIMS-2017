# NIMS-2017 학술 연구 및 실습 프로젝트

본 저장소는 **미국 국가재난관리체계(NIMS 2017)**의 핵심 원리, 자원관리, 현장지휘조정체계에 대한 **심화 서브노트**와 이를 현장 실무 및 학술 연구로 확장한 **Q-방법론 주관성 연구 실습 도구**로 구성되어 있습니다.

---

## 📁 디렉토리 구조 요약

```
NIMS-2017/
├── 📁 subnotes/              # NIMS 2017 전 챕터 서브노트, 원문 번역 및 통합 마스터 문서
│   ├── NIMS_2017_전체_서브노트_통합본.docx / .md
│   ├── NIMS_2017_종합_서브노트_마스터.md
│   ├── Chapter 1~8 및 Appendix 서브노트 (md, html, docx)
│   ├── Chapter 1~8 및 Appendix 원문 (md)
│   └── 🖼️ 관련 도표 및 구조도 이미지 (image*.png)
│
├── 📁 labs/                  # Q-방법론 실습, 웹 애플리케이션 및 연구 제안서
│   ├── 🚀 NIMS_Q_Sorting_App_강석균.html   # [핵심] Q-소팅 웹 애플리케이션 & 16인 집계기
│   ├── 📝 NIMS_Disaster_Management_Q_Proposal.md / .html  # Q-연구 제안서 & 진술문 36선 (작동기제 매핑)
│   ├── 📋 GoogleForm_Script.gs             # 구글 설문지 자동생성 Apps Script
│   ├── 📄 GoogleForm_Survey_Questions.md   # 구글폼 설문지 전문
│   ├── 🚒 NIMS_Uiryeong_Q_Methodology_Research_Proposal.md / .html # 의령소방서 선행연구
│   └── 📁 data/                            # 16인 응답자 JSON 수집 및 KenQ/CSV 산출 데이터 보관
│
├── 📜 gemini.md              # 학술연구 윤리 지침 및 AI 활용 10대 기본 원칙 (교수님 지도노트)
└── 📘 README.md              # 프로젝트 구조 및 가이드 (본 문서)
```

---

## 1. 📁 `subnotes/` (NIMS 2017 서브노트 및 교재 원문)

NIMS(National Incident Management System, 2017 개정판)의 원문 텍스트 분석 및 교수님 지도 원칙에 입각한 정밀 학술 서브노트입니다.

* **통합 마스터 문서**:
  * `NIMS_2017_종합_서브노트_마스터.md`: 전 챕터 핵심 요약 및 정밀 분석 통합본
  * `NIMS_2017_전체_서브노트_통합본.md` / `.docx`: 전 장 통합 서브노트
* **장별 상세 서브노트 및 원문**:
  * `Chapter 1`: NIMS 기본원리 (도입 및 3대 핵심 체계)
  * `Chapter 2`: 자원 관리 (Resource Management)
  * `Chapter 3`: 지휘 및 조정 (Command and Coordination - ICS, EOC, MAC Group, JIS)
  * `Chapter 4`: 통신 및 정보관리 (Communications and Information Management)
  * `Chapter 5`: 결론 (Conclusion)
  * `Chapter 6`: 용어 해설 (Glossary)
  * `Chapter 7`: 약어 목록 (Acronyms)
  * `Chapter 8`: 참고 자료 (References)
  * `Appendix`: 사건지휘체계(ICS) 및 비상운영센터(EOC) 부록
* **시각 자료**: 원문 삽화, 조직도, RAA 책임-권한 매트릭스 도표 등 28개 이미지 파일 수록.

---

## 2. 📁 `labs/` (실습 및 Q-방법론 연구 도구)

NIMS 14대 핵심 현장지휘 관리원칙의 **작동기제**에 대한 방재전문가(소방, 지자체, 국가기반시설, 연구·학계)의 주관적 의미구성(Sensemaking) 분석을 위한 실습 도구 모음입니다.

### 🌟 [NIMS_Q_Sorting_App_강석균.html](labs/NIMS_Q_Sorting_App_강석균.html)
* **특징**: 서버 없이 단일 HTML 파일로 브라우저에서 즉시 실행 가능한 인터랙티브 Q-소팅 웹 도구.
* **주요 기능**:
  1. **P-표본 인구통계 수집**: 소방(A), 행정(B), 인프라(C), 연구(D) 4개 층화군 선택.
  2. **1차 3분류 (Rough Sorting)**: 키보드 단축키(`1`: 비동의, `2`: 중립, `3`: 동의) 지원 및 실시간 카운터.
  3. **피라미드 9점 척도 강제분포 배치**:
     * 좌우 분할 듀얼 패널 레이아웃 (좌: -4~+4 피라미드 보드, 우: 전체 진술문 트레이).
     * **정원 마감 시 원클릭 버튼 자동 비활성화(`disabled`)** 처리로 정원 초과 원천 방지.
     * 브라우저 경고창(`alert`)을 배제한 부드러운 **플로팅 토스트(Toast)** 피드백.
  4. **심층 인터뷰 & JSON/CSV/KenQ 내보내기**: +4(최동의) 및 -4(최비동의) 정성 인터뷰 작성 및 표준 KenQ 데이터셋 자동 생성.
  5. **연구자 16인 응답 JSON 취합 관리자**: 16개 개별 JSON 파일을 드래그 앤 드롭하여 층화표본 충족도를 즉시 검증하고, 16인 통합 `KenQ Dataset(.dat)` 및 `통합 엑셀(.csv)`로 원클릭 병합 다운로드.

### 📄 기타 연구 도구
* **[NIMS_Disaster_Management_Q_Proposal.md](labs/NIMS_Disaster_Management_Q_Proposal.md)**: 36개 Q-진술문 선별 및 2장 핵심개념/작동기제 1:1 매핑 학술 제안서.
* **[GoogleForm_Script.gs](labs/GoogleForm_Script.gs)**: 구글 설문지 자동생성 Google Apps Script.
* **[GoogleForm_Survey_Questions.md](labs/GoogleForm_Survey_Questions.md)**: 구글 설문 배포용 문항 전문 마크다운.
