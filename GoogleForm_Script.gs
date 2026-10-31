/**
 * ==============================================================================
 * [Google Apps Script] NIMS 핵심 재난지휘 관리원칙 Q-진술문 36선 구글 설문지 자동 생성 스크립트
 * ==============================================================================
 * 
 * [실행 방법 2가지 중 편한 방법을 선택하세요]
 * 
 * [방법 1: 편집기에서 바로 실행 (가장 추천)]
 * 1. 상단 툴바의 함수 선택 드롭다운(보통 myFunction 또는 doGet으로 표시됨)을 클릭하여
 *    👉 [createNIMSDisasterManagementForm] 을 선택합니다.
 * 2. 옆에 있는 [실행 (▶)] 버튼을 누릅니다.
 * 3. 권한 승인 창이 뜨면 승인하고 나면, 하단 [실행 로그]에 '설문지 URL'이 출력됩니다!
 * 
 * [방법 2: 웹 앱으로 배포(Deploy)하여 실행]
 * - 상단 [배포] -> [새 배포] -> 유형: [웹 앱] -> 배포를 누르면 제공되는 URL을 브라우저에
 *   입력하는 즉시 설문지가 자동 생성되고 화면에 링크 버튼이 나타납니다.
 * ==============================================================================
 */

/**
 * 웹 앱으로 배포(Deploy) 시 자동 호출되는 함수 (Script function not found: doGet 오류 방지)
 */
function doGet(e) {
  try {
    const urls = createNIMSDisasterManagementForm();
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="ko">
      <head>
        <meta charset="UTF-8">
        <title>NIMS 구글 설문지 생성 완료</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Pretendard", Roboto, sans-serif; background: #f1f5f9; padding: 40px 20px; text-align: center; color: #1e293b; }
          .card { max-width: 620px; margin: 0 auto; background: #ffffff; padding: 40px; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.08); }
          h2 { color: #1e3a8a; margin-top: 0; font-size: 1.6rem; }
          p { color: #475569; font-size: 1.05rem; line-height: 1.6; margin-bottom: 25px; }
          .btn-group { display: flex; flex-direction: column; gap: 12px; margin-top: 20px; }
          .btn { display: block; padding: 14px 20px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 1rem; transition: 0.2s; }
          .btn-edit { background: #2563eb; color: #ffffff; }
          .btn-edit:hover { background: #1d4ed8; }
          .btn-view { background: #059669; color: #ffffff; }
          .btn-view:hover { background: #047857; }
          .notice { font-size: 0.85rem; color: #94a3b8; margin-top: 25px; border-top: 1px solid #e2e8f0; padding-top: 15px; }
        </style>
      </head>
      <body>
        <div class="card">
          <h2>🎉 NIMS 구글 설문지가 생성되었습니다!</h2>
          <p>구글 드라이브에 [현장지휘론] NIMS 14대 관리원칙 Q-설문지(36문항)가 정상적으로 생성되었습니다. 아래 버튼을 눌러 확인하세요.</p>
          <div class="btn-group">
            <a class="btn btn-edit" href="${urls.editUrl}" target="_blank">📝 관리자 편집용 설문지 열기</a>
            <a class="btn btn-view" href="${urls.publishedUrl}" target="_blank">🚀 응답자 배포용 설문지 열기</a>
          </div>
          <div class="notice">
            ※ 생성된 설문지는 귀하의 구글 드라이브(내 드라이브) 최상단 폴더에 저장되어 있습니다.
          </div>
        </div>
      </body>
      </html>
    `;
    return HtmlService.createHtmlOutput(htmlContent)
      .setTitle("NIMS 구글 설문지 생성 완료")
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  } catch (error) {
    return HtmlService.createHtmlOutput("<h3 style='color:red; text-align:center;'>오류 발생: " + error.toString() + "</h3>");
  }
}

/**
 * 메인 실행 함수: NIMS Q-Sample 36선 설문지 생성
 */
function createNIMSDisasterManagementForm() {
  // 1. 설문지 기본 생성 및 메타데이터 설정
  const formTitle = "[현장지휘론] NIMS 핵심 재난지휘 관리원칙에 대한 전문가 인식 조사 (Q-Sample 36선)";
  const form = FormApp.create(formTitle);
  
  form.setDescription(
    "본 조사는 재난관리학과 대학원 「현장지휘론」 기말 연구 프로젝트의 일환으로 수행되는 학술 연구 설문입니다.\n\n" +
    "■ 연구 주제: 글로벌 재난관리 표준인 NIMS(National Incident Management System) 14대 관리원칙의 " +
    "현장 작동기제(Operational Mechanisms)에 대한 방재 전문가 집단(소방·행정·인프라·학술)의 주관적 의미구성(Sensemaking) 분석\n" +
    "■ 소요 시간: 약 10~15분\n" +
    "■ 응답 원칙: 각 문항을 읽으시고 귀하의 현장 실무 경험과 신념에 비추어 9점 척도(-4: 전혀 동의 안함 ~ 0: 보통 ~ +4: 매우 동의함)로 응답해 주십시오.\n" +
    "■ 비밀 보장: 응답 데이터는 통계 분석(KenQ 요인분석) 목적 외에는 일체 사용되지 않으며 통계법에 따라 철저히 익명으로 보호됩니다.\n\n" +
    "연구자: 재난관리학과 박사과정 강석균 (2678125) 올림"
  );
  
  form.setConfirmationMessage("설문에 성실히 응답해 주셔서 대단히 감사합니다. 수집된 자료는 연구 목적(KenQ 주관성 분석)으로 소중히 활용하겠습니다.");
  form.setProgressBar(true);

  // ==============================================================================
  // [섹션 1] P-표본 식별 및 직무군 분류 (Demographics)
  // ==============================================================================
  const sec1 = form.addSectionHeaderItem();
  sec1.setTitle("PART 1. 응답자 직무 배경 (P-표본 4대 직무군 분류)");
  sec1.setHelpText("Q방법론의 이론적 층화표집(N=16) 분석을 위해 귀하의 직무 배경을 선택해 주십시오.");

  // 1-1. 성명 또는 식별코드
  const nameItem = form.addTextItem();
  nameItem.setTitle("1. 성명 또는 연구 식별코드 (ID)");
  nameItem.setHelpText("익명 제출을 원하실 경우 임의의 식별코드(예: P01, 소방A 등)를 입력하셔도 무방합니다.");
  nameItem.setRequired(true);

  // 1-2. 소속 직무군 (4대 직무군)
  const groupItem = form.addMultipleChoiceItem();
  groupItem.setTitle("2. 귀하가 속한 직무 그룹을 선택해 주십시오 (필수)");
  groupItem.setChoiceValues([
    "[그룹 A] 현직 소방 실무군 (소방공무원: 진압팀장, 구조대원, 구급, 현장대응단 등)",
    "[그룹 B] 방재·행정 공무원군 (지자체 재난안전과, 행정안전부, 경찰 등)",
    "[그룹 C] 공공·인프라 안전군 (재난관리 공기업: 가스, 전력, 철도 및 인프라 안전관리자)",
    "[그룹 D] 학술·연구 전문가군 (재난관리학 대학원생, 방재안전 전문 연구원)"
  ]);
  groupItem.setRequired(true);

  // 1-3. 경력
  const expItem = form.addListItem();
  expItem.setTitle("3. 방재·재난·소방·안전 분야 실무 및 연구 경력");
  expItem.setChoiceValues([
    "3년 미만",
    "3년 이상 ~ 7년 미만",
    "7년 이상 ~ 12년 미만",
    "12년 이상 ~ 20년 미만",
    "20년 이상"
  ]);
  expItem.setRequired(true);

  // ==============================================================================
  // Q-진술문 데이터 (36문항 전수 및 2장 작동기제 매핑)
  // ==============================================================================
  const qStatements = [
    // [차원 1: 표준화 및 소통체계]
    {
      dim: "차원 1: 표준화 및 소통체계",
      dimDesc: "다기관 합동 대응 시 언어, 통신망, 정보 인텔리전스의 상호운용성과 표준화 작동기제에 관한 문항입니다.",
      no: "01",
      text: "재난 현장에서 기관 간 무전 불통을 방지하기 위해 단일 통합 재난안전통신망 사용을 법적으로 의무화해야 한다.",
      mechanism: "원칙 2 통합 통신 │ 단일 PS-LTE 운영 채널 사전 할당 및 3계층 통신망 강제 분리 메커니즘"
    },
    {
      dim: "차원 1: 표준화 및 소통체계",
      no: "02",
      text: "소방, 경찰, 지자체가 현장에서 서로 다른 은어나 약어를 쓰지 못하도록 표준 용어(Common Terminology) 사전을 의무 적용해야 한다.",
      mechanism: "원칙 1 표준 용어 │ 무전 은어(10-Code) 전면 배제 및 직책·자원(Type 1~4)·시설 표준 용어 편람 적용"
    },
    {
      dim: "차원 1: 표준화 및 소통체계",
      no: "03",
      text: "지휘관의 개인적 직관에 의존하지 않고, 드론 및 공간정보 기반의 실시간 현장 상황정보를 모든 기관이 동시 공유해야 한다.",
      mechanism: "원칙 3 정보 관리 │ 기획부 상황분석실(Situation Unit) 교차 검증을 거친 공통작전상황도(COP) 다기관 실시간 동기화"
    },
    {
      dim: "차원 1: 표준화 및 소통체계",
      no: "04",
      text: "재난 초기 현장 브리핑은 단순 구두 보고를 지양하고, 정형화된 표준 상황보고 양식(ICS 201 양식 등)에 따라 일관되게 진행되어야 한다.",
      mechanism: "원칙 3 정보 관리 │ 지도·자원·과업을 포괄하는 정규 ICS 201 서식 기반 브리핑 집행 메커니즘"
    },
    {
      dim: "차원 1: 표준화 및 소통체계",
      no: "05",
      text: "기관별 개별 무전 채널 사용을 엄격히 금지하고, 현장 진입 시 사전에 지정된 통합 지휘통신 채널로 강제 통일해야 한다.",
      mechanism: "원칙 2 통합 통신 │ ICS 205(통신계획서)에 따른 지휘망 전환 프로토콜 및 비인가 사설 채널 사용 차단"
    },
    {
      dim: "차원 1: 표준화 및 소통체계",
      no: "06",
      text: "현장의 위험물 정보, 건물 구조도 등 전문 기술 인텔리전스는 복잡한 결재선 없이 현장지휘관에게 실시간으로 직통 보고되어야 한다.",
      mechanism: "원칙 3 & 14 기술전문성 │ 필수정보요소(EEI) 사전 정의 및 위험물·건축 구조 등 긴급 정보 지휘부 직통 핫라인"
    },
    {
      dim: "차원 1: 표준화 및 소통체계",
      no: "07",
      text: "언론 대응 및 대국민 안내 시 혼선을 방지하기 위해 다기관 합동 공보실(JIC: Joint Information Center)을 초기에 의무 설치해야 한다.",
      mechanism: "원칙 1 표준 공보체계 │ 개별 언론 접촉 차단 및 JIC 설치를 통한 공식 대국민 단일 창구(One-Voice) 통제"
    },
    {
      dim: "차원 1: 표준화 및 소통체계",
      no: "08",
      text: "재난 현장의 피해 규모와 상황 평가는 각 기관이 개별 집계하지 않고 공통 상황평가 절차를 통해 단일화되어야 한다.",
      mechanism: "원칙 3 정보 관리 │ 피해 추산 상충을 방지하는 다기관 단일 상황평가 기준 및 공식 집계창구 일원화"
    },
    {
      dim: "차원 1: 표준화 및 소통체계",
      no: "09",
      text: "현장 대원의 안전과 직결된 긴급 철수 신호(Evacuation Signal)는 기관에 상관없이 동일한 표준 음향과 수신호로 통일되어야 한다.",
      mechanism: "원칙 1 & 8 표준화·안전 │ 급박한 위험 시 다기관 투입 대원의 즉각 생존을 보장하는 표준 음향 경보 및 철수 수신호 강제 프로토콜"
    },

    // [차원 2: 명령 및 지휘구조]
    {
      dim: "차원 2: 명령 및 지휘구조",
      dimDesc: "통합지휘(Unified Command), 지휘의 단일성, 지휘권 공식 인수인계 등 현장 권한 및 지휘 통제 작동기제에 관한 문항입니다.",
      no: "10",
      text: "복합재난 시 소방, 지자체, 경찰의 책임자가 한 공간에 모여 공동의 작전 목표를 세우는 통합지휘체계(Unified Command)를 필히 가동해야 한다.",
      mechanism: "원칙 5 통합지휘 (UC) │ 단일 현장지휘소(Single ICP) 개설 및 대면 회의를 통한 다기관 공동 목표(Joint Objectives) 승인 거버넌스"
    },
    {
      dim: "차원 2: 명령 및 지휘구조",
      no: "11",
      text: "한 명의 현장 대원은 오직 한 명의 직속 상관에게만 명령을 받고 보고하는 지휘의 단일성(Unity of Command)이 철저히 지켜져야 한다.",
      mechanism: "원칙 4 지휘의 단일성 │ 1인 1직속상관 보고체계(Single Reporting Line) 엄수 및 외부/상위기관 비인가 직통 지시 무효화"
    },
    {
      dim: "차원 2: 명령 및 지휘구조",
      no: "12",
      text: "선착대장에서 상급 지휘관으로 지휘권을 넘길 때는 반드시 공식적인 상황 인수인계 브리핑(Transfer of Command)을 거쳐야 한다.",
      mechanism: "원칙 6 지휘권 이양 │ ICS 201 기반 대면 브리핑(상황·전술·자원·위험 인계) 및 지휘 공백 방지 절차 메커니즘"
    },
    {
      dim: "차원 2: 명령 및 지휘구조",
      no: "13",
      text: "지자체장이나 외부 고위직 인사가 현장에 오더라도 전문 지휘관의 현장 전술 지휘권을 침해할 수 없도록 법적 독립성이 보장되어야 한다.",
      mechanism: "원칙 4 지휘 계통 확립 │ 외부 비전문가 개입 차단, 현장지휘관의 배타적 전술권 보장 및 정규 지휘계통(Chain of Command) 보호"
    },
    {
      dim: "차원 2: 명령 및 지휘구조",
      no: "14",
      text: "재난 규모가 커지면 상급자가 관서에서 무전으로 원격 지휘하지 않고, 현장지휘소(ICP)에 직접 합류하여 통합지휘체계를 갖추어야 한다.",
      mechanism: "원칙 5 통합지휘 (UC) │ 관서 원격지휘의 인지 오류 방지, 현장지휘소(ICP) 물리적 합류를 통한 대면 합동 의사결정 집행"
    },
    {
      dim: "차원 2: 명령 및 지휘구조",
      no: "15",
      text: "타 기관(경찰, 군, 자원봉사 등) 지원 인력은 독자적으로 행동하지 않고 현장지휘관의 명령 계통(Chain of Command) 하에 완전 편속되어야 한다.",
      mechanism: "원칙 4 지휘 계통 │ 기관별 독자 행동(Freelancing) 차단, 외부 전력을 현장 직제(Section/Branch/Group) 내 직속 라인으로 편속"
    },
    {
      dim: "차원 2: 명령 및 지휘구조",
      no: "16",
      text: "지휘권 이양 시 현장 상황, 투입 자원, 미완료 과업을 명시한 공식 서면 기록을 남겨 지휘 공백과 책임 회피를 방지해야 한다.",
      mechanism: "원칙 6 지휘권 이양 │ 인수인계 시점의 상황·자원·미완료 과업을 공식 서면화하여 지휘 책임성(Accountability)을 담보"
    },
    {
      dim: "차원 2: 명령 및 지휘구조",
      no: "17",
      text: "다기관 합동 대응 시 각 기관의 법적 책임을 존중하되, 현장 안전관리와 인명구조 작전은 소방 지휘관이 총괄 지휘권을 행사해야 한다.",
      mechanism: "원칙 5 통합지휘 (UC) │ 통합지휘 내에서도 현장 전술 집행을 일원화하기 위해 긴급구조 국면 단일 작전부서장(Operations Section Chief)을 소방에 단일 귀속"
    },
    {
      dim: "차원 2: 명령 및 지휘구조",
      no: "18",
      text: "현장지휘관 부재나 유고 시 사전에 승계 서열과 대리 권한이 문서화되어 있어 즉각적이고 공식적인 지휘권 승계가 이루어져야 한다.",
      mechanism: "원칙 6 지휘권 확립 │ 돌발 유고 시 지휘 공백을 방지하기 위해 사전 직무대리 서열 및 비상 대리권 자동 발동 프로토콜"
    },

    // [차원 3: 조직 유연성 및 통제]
    {
      dim: "차원 3: 조직 유연성 및 통제",
      dimDesc: "모듈형 조직 분화, 통제범위(1:5 관리), 거점 시설(ICP, Staging Area) 운영 등 조직 통제 작동기제에 관한 문항입니다.",
      no: "19",
      text: "재난의 성격과 규모에 맞춰 지휘 조직을 단계별로 유연하게 확장·축소하는 모듈형 조직(Modular Organization) 편성이 정착되어야 한다.",
      mechanism: "원칙 7 모듈형 조직 │ 책임 자동 귀속(Default Responsibility: 미위임 기능은 지휘관 직접 수행) 원칙 및 상향식(Bottom-up) 직제 분화"
    },
    {
      dim: "차원 3: 조직 유연성 및 통제",
      no: "20",
      text: "한 명의 지휘관이 효과적으로 통제할 수 있는 관리 가능한 통제범위(Span of Control)는 최대 7명(적정 5명)을 넘지 않도록 제한해야 한다.",
      mechanism: "원칙 8 통제범위 (Span) │ 1:5 최적 비율 가이드라인 준수 및 직접 감독 7명 초과 시 직속 보고 단위 강제 분할 메커니즘"
    },
    {
      dim: "차원 3: 조직 유연성 및 통제",
      no: "21",
      text: "현장지휘소(ICP), 자원대기소(Staging Area), 임시응급의료소 등 핵심 현장 시설의 위치와 명칭은 사전에 표준화되어야 한다.",
      mechanism: "원칙 9 시설 표준화 │ 안전 구역 내 ICP 개설, 외곽 Staging Area 등 표준 거점 배치 및 지도 표식(Map Symbols) 동기화"
    },
    {
      dim: "차원 3: 조직 유연성 및 통제",
      no: "22",
      text: "단순 화재라도 연소 확대 위험이 있으면 초기부터 전술 분과(진압, 구조, 안전, 자원)를 조기에 분리·편성해야 한다.",
      mechanism: "원칙 7 모듈형 조직 │ 복잡성 확대 징후 포착 시 지휘관 1인 체제에서 기능별 분과(Section/Branch)를 선제적으로 활성화하는 확장 메커니즘"
    },
    {
      dim: "차원 3: 조직 유연성 및 통제",
      no: "23",
      text: "지휘관 1명에게 과도한 보고가 집중되는 것을 막기 위해 중간 관리자(방면지휘관, 분과장)에게 전술적 권한을 대폭 위임해야 한다.",
      mechanism: "원칙 8 통제범위 & 권한위임 │ 지휘 병목 차단, 현장 방면장(Division) 및 분과장(Branch)에게 전술적 RAA(책임·권한)를 위임하는 분권형 메커니즘"
    },
    {
      dim: "차원 3: 조직 유연성 및 통제",
      no: "24",
      text: "지원 출동한 외부 자원이 현장에 무질서하게 섞이지 않도록 외곽 자원대기소(Staging Area)를 사전에 의무 지정·운영해야 한다.",
      mechanism: "원칙 9 & 13 시설 & 자원통제 │ 진입로 외곽 Staging Area 설치를 통해 비인가 자원의 현장 진입을 물리적으로 차단하고 대기 상태를 유지시키는 필터링"
    },
    {
      dim: "차원 3: 조직 유연성 및 통제",
      no: "25",
      text: "특수 재난(화학물질, 붕괴 등) 발생 시 구조공학 전문가 등 전문 기술 자문관(Technical Specialist)을 지휘관 직속 참모로 즉시 배치할 수 있어야 한다.",
      mechanism: "원칙 7 & 14 기술참모 편제 │ 특수 위험 분석을 위해 기획부 내 전문기술단(Technical Specialists) 신설 및 지휘관 직속 특수참모 직결 편제"
    },
    {
      dim: "차원 3: 조직 유연성 및 통제",
      no: "26",
      text: "지휘관의 시야를 벗어난 대규모 현장은 지리적 방면(Division)이나 기능별(Group)로 세분화하여 별도 구역 지휘관을 두어야 한다.",
      mechanism: "원칙 8 통제범위 유지 │ 공간적 한계를 극복하기 위해 지리적 구역(Division: 층/방면) 및 기능별 구역(Group: 구조/환기)으로 지휘 단위를 2차원 분할"
    },
    {
      dim: "차원 3: 조직 유연성 및 통제",
      no: "27",
      text: "다수사상자 발생 시 중증도 분류와 이송을 전담하는 임시응급의료소는 일반 환자 가족 통제구역과 명확히 공간적으로 분리 설치되어야 한다.",
      mechanism: "원칙 9 특수 시설 표준화 │ 환자 처치 골든타임 확보 및 혼란 차단을 위해 중증도 분류(Triage) 구역을 일반 구역과 물리적으로 격리하는 시설 운영"
    },

    // [차원 4: 체계적 작전 및 자원관리]
    {
      dim: "차원 4: 체계적 작전 및 자원관리",
      dimDesc: "목표기반 관리(MBO), 단일 IAP 수립 주기(Planning P), 자원 크레덴셜링 및 자율출동 차단 등 작전·자원 통제 작동기제에 관한 문항입니다.",
      no: "28",
      text: "모든 현장 활동은 지휘관의 경험적 직관이 아닌 명문화된 목표기반 관리(MBO: Management by Objectives) 체계에 따라 수립되어야 한다.",
      mechanism: "원칙 10 목표기반 관리 (MBO) │ SMART 원칙(구체성, 측정가능성, 시한성)에 부합하는 사건 목표 수립 및 기능별 세부 임무 정렬 성과관리"
    },
    {
      dim: "차원 4: 체계적 작전 및 자원관리",
      no: "29",
      text: "재난 현장의 모든 투입 기관이 공유하고 실행하는 단일 현장행동계획(IAP: Incident Action Plan)이 작전 주기마다 공식 문서로 작성되어야 한다.",
      mechanism: "원칙 11 단일 IAP │ ICS 표준 서식군(ICS 202~208) 번들링 승인 및 모든 참여 기관 대원에게 다음 작전 주기 전 배포·숙지시키는 문서 동기화"
    },
    {
      dim: "차원 4: 체계적 작전 및 자원관리",
      no: "30",
      text: "현장에 투입되는 인력과 장비는 사전에 객관적으로 검증된 자격 및 역량 인증(Credentialing)을 거친 자원만 투입되어야 한다.",
      mechanism: "원칙 12 종합 자원관리 │ 자원 유형화(Resource Typing: 1~4급) 기준에 따라 사전 검증된 자격·장비 역량을 대조하여 부적격 자원을 걸러내는 인증"
    },
    {
      dim: "차원 4: 체계적 작전 및 자원관리",
      no: "31",
      text: "지휘부의 정식 요청이나 배정 없이 자발적으로 현장에 무단 진입하는 자율 출동(Self-dispatching)은 엄격히 통제·차단해야 한다.",
      mechanism: "원칙 13 자원배치 통제 │ 미인가 자율출동을 진입로 검문소(Access Control)에서 차단하고, 정규 절차를 거친 공인 자원만 전술 배치하는 규율"
    },
    {
      dim: "차원 4: 체계적 작전 및 자원관리",
      no: "32",
      text: "현장 교대 주기에 맞춰 상황 브리핑과 계획 수립 주기가 맞물려 돌아가는 체계적 작전 계획 주기(Planning P)가 가동되어야 한다.",
      mechanism: "원칙 11 계획 주기 (Planning P) │ 기획 P 엄격한 5단계 회의 사이클(상황브리핑→지휘관지침→전술회의→기획회의→IAP승인)을 작전 주기마다 반복 순환"
    },
    {
      dim: "차원 4: 체계적 작전 및 자원관리",
      no: "33",
      text: "투입된 모든 자원(소방차, 굴착기, 민간 구호대 등)의 현장 위치와 가동 상태가 실시간으로 전산 추적·기록되어야 한다.",
      mechanism: "원칙 12 종합 자원관리 │ T-Card(ICS 219) 및 전산망을 통해 자원의 3대 가용성 상태(할당됨/가용함/점검중)를 실시간 추적·기록하는 책무성"
    },
    {
      dim: "차원 4: 체계적 작전 및 자원관리",
      no: "34",
      text: "현장 작전 목표는 막연한 구호가 아니라 측정 가능하고 구체적인 달성 기준(예: 30분 내 잔여층 검색 완료)으로 명시되어야 한다.",
      mechanism: "원칙 10 목표기반 관리 (MBO) │ 구호가 아닌 수치화된 시간·범위 기준(ICS 202)을 명시하여 전술 달성도를 계량 측정하는 평가 메커니즘"
    },
    {
      dim: "차원 4: 체계적 작전 및 자원관리",
      no: "35",
      text: "임무가 끝난 자원은 현장에 머무르지 않고 즉각 점검 후 철수·복귀시키는 자원 해제(Demobilization) 절차가 공식화되어야 한다.",
      mechanism: "원칙 12 자원관리 6단계 │ 현장 낭비 및 대원 피로를 방지하기 위해 자원관리 생애주기 5단계인 공식 자원 해제(Demobilization Check-out) 절차 복귀 메커니즘"
    },
    {
      dim: "차원 4: 체계적 작전 및 자원관리",
      no: "36",
      text: "작전 종료 후 각 기관이 함께 모여 실수와 개선점을 가감 없이 평가하는 사후 검토(AAR: After Action Review) 회의가 제도적으로 의무화되어야 한다.",
      mechanism: "원칙 10 사후 평가 및 환류 │ 작전 종료 후 참여 기관 전원이 모여 계획 대비 실제 달성도를 냉정히 분석하고 교훈을 환류(Feedback)하는 공식 AAR"
    }
  ];

  // 척도 설정: 9점 척도 (1 = -4 전혀 동의 안함, 5 = 0 보통, 9 = +4 매우 동의함)
  let currentDim = "";
  
  qStatements.forEach(function(item) {
    // 차원이 바뀔 때마다 섹션 헤더 추가
    if (item.dim !== currentDim) {
      currentDim = item.dim;
      const dimSec = form.addPageBreakItem();
      dimSec.setTitle("PART 2. Q-진술문 평가 - [" + currentDim + "]");
      dimSec.setHelpText(item.dimDesc + "\n\n※ 척도 안내: 1점(가장 동의 안함 -4) ~ 5점(중립 0) ~ 9점(가장 동의함 +4)");
    }

    // 각 진술문 문항 추가 (선형 척도 1~9점)
    const scale = form.addScaleItem();
    scale.setTitle("Q" + item.no + ". " + item.text);
    scale.setHelpText("🔗 [2장 작동기제 연결] " + item.mechanism);
    scale.setBounds(1, 9);
    scale.setLabels("전혀 동의 안함 (-4)", "매우 동의함 (+4)");
    scale.setRequired(true);
  });

  // ==============================================================================
  // [섹션 6] 양극단(+4, -4) 심층 주관식 질문 (Q방법론 질적 인터뷰용)
  // ==============================================================================
  const qualSec = form.addPageBreakItem();
  qualSec.setTitle("PART 3. 양극단 선택 이유 심층 서술 (질적 의미구성 인터뷰)");
  qualSec.setHelpText("Q방법론 요인 해석의 핵심은 '왜 특정 관리원칙/작동기제를 가장 지지하거나 배제하였는가'에 대한 응답자의 주관적 이유(Rationale)입니다.");

  const posItem = form.addParagraphTextItem();
  posItem.setTitle("1. 가장 강력하게 동의(+4)한 진술문 번호와 그 이유는 무엇입니까?");
  posItem.setHelpText("귀하의 현장 실무 경험, 조직 문화 또는 지휘 철학에 비추어 구체적으로 서술해 주십시오. (예: Q10번, 복합재난 시 소방·지자체 간 소통 단절로 인한 참사를 막기 위해 합동 지휘소가 절대적임)");
  posItem.setRequired(true);

  const negItem = form.addParagraphTextItem();
  negItem.setTitle("2. 가장 동의하지 않거나 현장 적용이 어렵다고 판단한(-4) 진술문 번호와 그 이유는 무엇입니까?");
  negItem.setHelpText("현장 실무와의 괴리, 한국적 법제도 한계, 자원의 현실적 제약 등의 관점에서 솔직하게 기술해 주십시오. (예: Q29번, 초동 대응의 긴급성 속에서 복잡한 서면 IAP 작성은 오히려 현장 대응을 지연시킴)");
  negItem.setRequired(true);

  const freeItem = form.addParagraphTextItem();
  freeItem.setTitle("3. NIMS 관리원칙의 한국형 현장지휘체계 도입에 관한 자유 의견");
  freeItem.setHelpText("성공적인 현장 적용을 위해 법령 개정이나 교육훈련 등 가장 시급한 개선 과제가 있다면 제언해 주십시오. (선택 사항)");
  freeItem.setRequired(false);

  // 결과 URL 로깅 및 반환
  Logger.log("==============================================================================");
  Logger.log("🎉 [생성 완료] 구글 폼이 성공적으로 자동 생성되었습니다!");
  Logger.log("📝 편집용 URL (Form Edit): " + form.getEditUrl());
  Logger.log("🚀 배포용 응답 URL (Form Published): " + form.getPublishedUrl());
  Logger.log("==============================================================================");

  return {
    editUrl: form.getEditUrl(),
    publishedUrl: form.getPublishedUrl()
  };
}
