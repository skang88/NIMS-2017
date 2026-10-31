# 제4장 통신 및 정보 관리 (IV. Communications and Information Management)
> **참고 원문:** *National Incident Management System (Third Edition, October 2017) - Chapter IV. Communications and Information Management (pp. 50–59)*  
> **작성 원칙:**  
> 1. 원문(pp. 50–59)의 모든 문장, 세부 항목, 각주(Footnote 19), 삽입 박스(Inset Box 3종)를 **단 하나의 누락이나 임의 변형 없이** 100% 충실하게 반영함.  
> 2. 번역 과정에서 다의적이거나 학술적·실무적 의미가 중요한 용어는 **영문을 병기(English in parentheses)**하여 개념적 정확성을 유지함.  
> 3. **[연구자료(SUB-NOTE) 사용 원칙 준수]** 원문의 직접적인 기술 내용(제1절~제4절)과 연구자의 비교·해석(제5절~제6절)을 엄격히 분리하여 표기함.

---

## 1. 개요 및 4대 핵심 원칙 (Overview and Key Principles) `[원문 pp. 50–51]`

### 1.1 통신 및 정보 관리의 목적과 기본 원리 `(p. 50)`
- **통신 및 정보 시스템에 대한 의존:** 사건 대응 인력(Incident personnel)은 정확하고(Accurate), 시의적절하며(Timely), 관련성 있는(Relevant) 정보를 획득(Obtain)하고 제공(Provide)하기 위해 유연한 통신 및 정보 시스템(Flexible communications and information systems)에 의존함.
- **3대 핵심 목표 (Principal Goals):** 통신 및 정보 관리 구성요소(Communications and Information Management component)의 주요 목표는 다음과 같음:
  1. **상황인식의 확립 및 유지 (Establishing and maintaining situational awareness)**
  2. **접근성 보장 (Ensuring accessibility)**
  3. **음성 및 데이터 상호운용성 보장 (Ensuring voice and data interoperability)**
- **정보 전파의 촉진:** 적절하게 계획(Planned), 수립(Established), 적용(Applied)된 통신은 지휘 및 지원 요소(Command and support elements)와 협력 관할구역 및 조직(Cooperating jurisdictions and organizations) 간의 **정보 전파(Information dissemination)**를 촉진함.

### 1.2 정보 공유와 통신 시스템의 책임 소재 및 작동 메커니즘 `(p. 50)`
본 장(Section)은 다음 두 가지 영역을 모두 다룸:
1. **정보 공유 (Information Sharing):** **모든 인력의 책임(Responsibility of all personnel)**임.
2. **정보 공유를 지원하는 통신 시스템 (Communications Systems that Support Information Sharing):** 통상적으로 **현장지휘체계(ICS)의 물류부(Logistics Section) 인력**과 **긴급운영센터(EOC)의 물류 또는 센터 지원 인력(Logistics or center support staff)**이 담당함.

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│          [ 통신 및 정보 관리의 역할 분담 및 지속적 정보 흐름 메커니즘 ]             │
├──────────────────────────────────────────┬──────────────────────────────────────────┤
│       정보 공유 (Information Sharing)    │    통신 시스템 (Communications Systems)  │
│  • 책임 주체: 모든 사건 인력 (All Staff) │  • 책임 주체: ICS 물류부(Logistics) 및   │
│  • 핵심 과업: 수집(Gathering) → 대조/취합│               EOC 물류·센터 지원 인력    │
│    (Collating) → 종합(Synthesizing) →    │  • 핵심 기반: 공통 계획(Common plans),   │
│    전파(Disseminating)의 지속적 갱신     │    상호운용 장비·프로세스·표준·아키텍처  │
└────────────────────┬─────────────────────┴────────────────────┬─────────────────────┘
                     └─────────────────────┬────────────────────┘
                                           ▼
  ┌─────────────────────────────────────────────────────────────────────────────────┐
  │ • 현장(On scene) + EOC 내부(In an EOC) + 기타 지원 위치(Other support location) │
  │   전 인력 연결 → 통신 연결성(Connectivity) 및 상황인식(Situational Awareness) 유지│
  └─────────────────────────────────────────────────────────────────────────────────┘
```

- **상황인식 유지를 위한 정보 순환 과정:** 상황인식(Situational awareness)을 유지하기 위해, 사건 인력은 모든 적절한 관계자/당사자(All appropriate parties)들과 사건 정보를 주고받으며 **① 수집(Gathering) → ② 대조/취합(Collating) → ③ 종합/합성(Synthesizing) → ④ 전파(Disseminating)**함으로써 사건 정보를 지속적으로 갱신(Update incident information continually)함.
- **정보 흐름의 촉진 수단:** 이러한 정보 흐름(Information flow)은 **공통 계획(Common plans)**과 **상호운용 가능한 장비(Interoperable equipment), 프로세스(Processes), 표준(Standards), 아키텍처(Architectures)**를 개발하고 사용함으로써 촉진됨.
- **전 인력의 연결:** 사건 발생 중, 이러한 통합되고 친숙한 접근법(Integrated, familiar approach)은 현장에 있든(On scene), EOC에 있든(In an EOC), 또는 다른 지원 위치(Another support location)에 있든 모든 사건 인력을 연결하여 **통신 연결성/접속성(Communications connectivity)**과 **상황인식(Situational awareness)**을 유지하게 함.
- **계획 수립의 포괄 범위:** 통신 및 정보 관리 계획 수립(Communications and information management planning)은 상호운용 가능한 통신(Interoperable communications)을 달성하는 데 필요한 사건 관련 **정책(Policies), 장비(Equipment), 데이터 아키텍처(Data architecture), 시스템(Systems), 표준(Standards), 교육·훈련(Training)**을 다룸.

---

### 1.3 통신 및 정보 관리의 4대 핵심 원칙 (Key Principles) `(pp. 50–51)`
다음의 통신 및 정보 관리 원칙들은 사건 관리자(Incident managers)가 사건 발생 중 지속적인 정보 흐름(Constant flow of information)을 유지하도록 지원함:
1. **상호운용성 (Interoperability)**
2. **신뢰성, 확장성 및 이동성/휴대성 (Reliability, Scalability, and Portability)**
3. **회복력/복원력 및 다중성/이중화 (Resilience and Redundancy)**
4. **보안 (Security)**

| 핵심 원칙 | 원문 정의 및 세부 구성 내용 `[pp. 50–51]` |
| :--- | :--- |
| **① 상호운용성**<br>*(Interoperability)*<br>`[p. 50]` | • **실시간 다매체 소통:** 상호운용 가능한 통신 시스템(Interoperable communications systems)은 인력과 조직이 **실시간으로(In real time)** 음성(Voice), 데이터(Data), 영상 시스템(Video systems)을 통해 관할구역 및 조직 내부와 상호 간에(Within and across jurisdictions and organizations) 소통할 수 있도록 해줌.<br>• **상호운용성 계획(Interoperability plans)의 5대 구성요소:**<br>  1) 거버넌스/관리체계 (Governance)<br>  2) 표준운영절차 (Standard Operating Procedures, SOP)<br>  3) 기술 (Technology)<br>  4) 교육훈련 및 연습 (Training and exercises)<br>  5) 주요 사건(Major incidents)뿐만 아니라 **일상적 작전 중의 사용/활용(Usage during routine operations)** |
| **② 신뢰성, 확장성 및 이동성/휴대성**<br>*(Reliability, Scalability, and Portability)*<br>`[pp. 50–51]` | • **신뢰성(Reliability) 및 적용 범위:** 통신 및 정보 시스템은 모든 유형의 사건(Any type of incident)에서 기능할 수 있도록 신뢰할 수 있고 확장 가능해야 함. 즉, 다음 3가지 환경 모두에서 사용하기에 적합해야 함:<br>  1) 단일 관할구역 또는 단일 기관 내부 (Within a single jurisdiction or agency)<br>  2) 다수 기관이 참여하는 단일 관할구역 (A single jurisdiction with multiagency involvement)<br>  3) 다수 기관이 참여하는 복수 관할구역 (Multiple jurisdictions with multiagency involvement)<br>• **정기적/일상적 사용(Regular use)의 효과:** 통신 및 정보 시스템을 평시에 정기적으로 사용하면 시스템이 사용자에게 친숙하고(Familiar), 적용 가능하며(Applicable), 수용 가능(Acceptable)하도록 보장하고, 새로운 기술에 쉽게 적응(Readily adaptable to new technology)하며, 어떤 상황에서도 신뢰성(Reliable in any situation)을 유지하도록 돕는다.<br>• **확장성(Scalability):** 다수의 관할구역과 조직에서 온 수많은 대응 요원 및 지원 인력(Numerous responders and support personnel)이 참여하는 주요 대형 사건(Major incident)이나 여러 건의 동시 사건(Several incidents)을 포함한 **어떠한 상황도 지원할 수 있도록 시스템이 확장될 수 있음**을 의미하며, **시스템상의 사용자 수(Number of users on a system)를 용이하게 늘릴 수 있음**을 뜻함.<br>• **이동성/휴대성(Portability):** 이동 가능한 기술과 장비(Portable technologies and equipment)는 통신 시스템의 효과적인 **통합(Integration), 운송(Transport), 배치/전개(Deployment)**를 보장함. 이동성(Portability)에는 **관할구역 간 무선/무전 채널의 표준화된 할당(Standardized assignment of radio channels across jurisdictions)**이 포함되며, 이는 사건 인력이 자신의 관할구역 밖의 사건에 참여하더라도 여전히 친숙한 장비(Familiar equipment)를 사용할 수 있게 해줌. |
| **③ 회복력/복원력 및 다중성/이중화**<br>*(Resilience and Redundancy)*<br>`[p. 51]` | • **목적:** 통신에서의 회복력과 다중성은 **중단 없는 정보의 흐름(Uninterrupted flow of information)**을 보장하도록 돕는다.<br>• **회복력/복원력(Resilience):** 기반시설의 손상이나 상실 이후에도 시스템이 견뎌내고 계속해서 기능을 수행할 수 있는 능력(The ability of systems to withstand and continue to perform after damage or loss of infrastructure).<br>• **다중성/이중화(Redundancy):** **서비스의 복제/중복 구성(Duplication of services)**을 통해 달성됨. 주 통신 역량이 손상을 입었을 때(When primary communications capabilities suffer damage), **다양한 대체 수단(Diverse alternative methods)**을 통해 **통신의 연속성(Continuity of communication)**을 가능하게 함. |
| **④ 보안**<br>*(Security)*<br>`[p. 51]` | • **민감 정보 및 핵심 자산 보호:** 사건 인력으로부터, 인력들 간에, 그리고 인력에게 전달되는 일부 정보는 **민감함(Sensitive)**. 또한 EOC 및 사건 인력은 침해될 경우 광범위한 영향을 초래할 수 있는(Could cause widespread impacts if compromised) **산업제어시스템(Industrial control systems)**과 같은 **핵심 자산(Critical assets)**에 접근할 수 있음.<br>• **IT·보안 전문가와의 협력:** 사건 인력은 사건 통신 및 데이터 공유에 **데이터, 네트워크, 시스템 보호 모범 실무(Data, network, and systems protection best practices)**를 통합하기 위해 IT 및 보안 전문가(IT and security experts)와 협력해야 함.<br>• **정보/수사 기능 및 법령 준수:** 예를 들어, **정보/수사 기능 인력(Intelligence/investigations function staff)**은 민감 정보(Sensitive), **개인식별정보(Personally identifiable information)**, 또는 **기밀 정보(Classified information)**를 논의할 수 있으며, 관련 법률(Applicable law)에 따라 이러한 정보를 **보호/차단(Shield)**해야 함. 사건 통신 및 정보 공유는 **데이터 보호법 및 개인정보보호법(Data protection and privacy laws)**을 준수해야 함. |

---

## 2. 통신 관리 (Communications Management) `[원문 pp. 52–53]`

아래에 기술된 통신 관리 관행/실무(Practices)와 고려사항(Considerations)은 서로 다른 전문 분야(Disciplines), 관할구역(Jurisdictions), 조직(Organizations), 기관(Agencies)의 사건 인력들이 사건 발생 중에 서로 효과적으로 소통하도록 지원함.

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    [ 통신 관리 (Communications Management) 5대 영역 ]               │
├──────────────────┬──────────────────┬──────────────────┬──────────────┬─────────────┤
│ 1. 표준 통신유형 │ 2. 정책 및 계획  │ 3. 협약 체결     │ 4. 장비 표준 │ 5. 교육훈련 │
│ (Standard Types) │(Policy & Plan)   │ (Agreements)     │ (Equipment)  │ (Training)  │
├──────────────────┼──────────────────┼──────────────────┼──────────────┼─────────────┤
│• 전략적(Strategic│• 장비/플랫폼/권한│• EOP 참여 당사자 │• 공통 인터페 │• 상호운용   │
│• 전술적(Tactical)│• 민·관·NGO·인프라│  간 사전 협약    │  이스 연결   │  시스템 활용│
│• 지원(Support)   │  소유주 참여     │• 네트워크 연결   │• 민간 기간망 │• 사전 역량  │
│• 대국민(Public)  │• EOP 내 6대 요소 │• 데이터포맷 표준 │  의존 및 갱신│  및 한계    │
│                  │  필수 반영       │• 사이버보안 협약 │• 4대 고려사항│  이해       │
└──────────────────┴──────────────────┴──────────────────┴──────────────┴─────────────┘
```

### 2.1 표준화된 통신 유형 (Standardized Communication Types) `(p. 52)`
사건 인력과 그 소속 조직(Affiliated organizations)은 다음 4가지를 포함하는 표준 통신 유형(Standard communications types)을 사용해야 함:

| 통신 유형 | 원문 정의 및 구체적 내용 `[p. 52]` |
| :--- | :--- |
| **1. 전략적 통신**<br>*(Strategic)* | • **고위급 지침/방향 설정(High-level directions):** 자원 우선순위 결정(Resource priority decisions), 역할 및 책임 결정(Roles and responsibilities determinations), 전반적인 사건 관리 행동방침/방책(Overall incident management courses of action)을 포함함. |
| **2. 전술적 통신**<br>*(Tactical)* | • **현장 작전 지휘·협조 통신:** 현장 지휘부 및 전술 인력(On-scene command and tactical personnel)과 협력 기관 및 조직(Cooperating agencies and organizations) 간의 통신. |
| **3. 지원 통신**<br>*(Support)* | • **전략적·전술적 통신을 뒷받침하는 조정(Coordination in support of strategic and tactical communications):**<br>  - *예시 1:* 자원 주문(Resource ordering), 파견/배치(Dispatching), 추적(Tracking)에 관한 병원 간 통신(Communications among hospitals)<br>  - *예시 2:* 교통 및 공공사업/토목 통신(Traffic and public works communications) |
| **4. 대국민/공공 통신**<br>*(Public)* | • **경보 및 경고(Alerts and warnings), 기자회견(Press conferences).** |

---

### 2.2 정책 및 계획 수립 (Policy and Planning) `(pp. 52–53)`
- **조정된 통신 정책 및 계획의 역할:** 조정된 통신 정책 및 계획 수립(Coordinated communications policy and planning)은 효과적인 통신 및 정보 관리의 기반(Basis)을 제공함.
- **면밀한 계획 수립(Careful planning)이 결정하는 5가지 사항:**
  1. 인력이 어떤 통신 시스템과 플랫폼을 사용할 것인지 (What communications systems and platforms personnel will use)
  2. 누가 그것들을 사용할 수 있는지 (Who can use them)
  3. 서로 다른 환경에서 어떤 정보가 필수적인지 (What information is essential in different environments)
  4. 모든 장비와 시스템의 기술적 매개변수/사양 (The technical parameters of all equipment and systems)
  5. 기타 관련 고려사항 (Other relevant considerations)
- **계획과 절차의 진화:** 기술이 변화하고 정보 교환 방식이 개선됨에 따라(As technologies change and information exchange methods improve), 통신 관리 계획과 절차 또한 진화/발전해야 함(Should also evolve).
- **포괄적 이해관계자 참여:** **비정부기구(NGOs), 민간 부문(Private sector), 핵심 기반시설 소유주(Critical infrastructure owners)**를 포함한 **모든 이해관계자(All stakeholders)**가 철저하고(Thorough), 통합적이며(Integrated), 상호운용 가능한(Interoperable) 통신 계획 및 전략을 수립하는 데 참여해야 함. 상호운용성을 향상시키기 위해 기술 및 장비 표준(Technology and equipment standards) 또한 이해관계자들과 공유됨.
- **비상운영계획(EOP) 등에의 반영:** 계획 수립자(Planners)는 건전한 통신 관리 정책과 계획을 **비상운영계획(Emergency Operations Plans, EOPs)** 및 기타 적절한 계획들에 통합해야 함.

#### 📌 계획(Plans)에 반드시 포함되어야 할 통신 및 정보 관리의 6대 측면 `(pp. 52–53)`
1. **정보 수요 및 출처:** 정보 요구사항/수요(Information needs)와 이러한 정보의 잠재적 출처(Potential sources for this information).
2. **파트너 조직과의 정보 통합:** 파트너/협력 조직과 정보를 통합하기 위한 지침(Guidance), 표준(Standards), 도구(Tools).
3. **경보 및 중요 정보 배포 체계:** 경고(Warnings), 사건 통지/알림(Incident notifications), 대국민 소통(Public communications), 기타 중요 정보(Other critical information)를 배포/발표하기 위한 절차(Procedures), 프로토콜(Protocols), 네트워크(Networks).
4. **정부 계층 및 파트너 통지 체계:** 다른 계층의 정부(Other levels of government) 및 파트너 조직에 통지하기 위한 메커니즘과 프로토콜(Mechanisms and protocols).
5. **지휘·조정·지원 통합을 위한 IT 활용 프로토콜:** 모든 지휘(Command), 조정(Coordination), 지원 기능(Support functions)을 통합하기 위해 정보 관리 기술(Information management technologies; 예: 컴퓨터[Computers], 네트워크[Networks], 정보 공유 메커니즘[Information-sharing mechanisms])을 효과적이고 효율적으로 사용하기 위한 프로토콜.
6. **취약계층을 포괄하는 동시 접근성 보장:** **영어 구사 능력이 제한적인 사람(Those who have limited proficiency in English), 장애인(Disabilities), 기타 접근 및 기능적 필요가 있는 사람들(Others who have access and functional needs)**을 포함하여 모든 사람이 사건 메시지에 **동시에 접근할 수 있도록(Simultaneously accessible to all people)** 보장하는 지침 및 메커니즘.

---

### 2.3 협약 (Agreements) `(p. 53)`
- **사전 협약 체결의 의무:** 관할구역의 비상운영계획(EOP)에 명시된 모든 당사자(All parties)는 계획과 절차에 기술된 통신 요소들이 사건 발생 시점에 유효하게 작동하도록(Are in effect at the time of an incident) 보장하기 위해 **사전에 협약을 체결해 두어야 함(Should have agreements in place)**.
- **협약의 명시 사항:** 협약은 통상적으로 당사자들이 사용하기로 합의하거나 정보를 공유하고자 하는 **통신 시스템과 플랫폼(Communications systems and platforms)**을 명시함.
- **협약에 통상 포함되는 3대 세부 내용:**
  1. **네트워크 연결/접속 (Connection of networks)**
  2. **데이터 포맷/형식 표준 (Data format standards)**
  3. **사이버보안 협약 (Cybersecurity agreements)**

---

### 2.4 장비 표준 (Equipment Standards) `(p. 53)`
- **공통 인터페이스와 민간 기간망 의존성:** 사건 관리 중 인력이 사용하는 통신 장비는 종종 **공통 인터페이스(Common interfaces)**를 통해 연결된 구성요소 및 시스템들로 이루어지며, 그중 상당수는 **운영 기간망/백본(Operational backbone)을 제공하는 데 있어 민간 부문(Private sector)에 의존**함.
- **정기적 개선 및 업데이트:** 공공/민간 통신 시스템 및 관련 장비(Public/private communications systems and associated equipment)의 유지관리는 효과적인 사건 관리에 필수적이므로, 정기적으로 강화/개선되고 업데이트되어야 함(Regularly enhanced and updated).
- **통신 시스템 및 장비 표준 개발 시 4대 고려사항:**
  1. 인력이 시스템을 사용하게 될 **조건/환경의 범위 (The range of conditions under which personnel will use the systems)**
  2. 잠재적으로 시스템을 사용할 가능성이 있는 **인력의 범위 (The range of personnel who might potentially use them)**
  3. **현재 국가적으로 공인된 통신 표준 (Current nationally recognized communications standards)** *(각주 19 참조)*
  4. **내구성 있는 장비의 필요성 (The need for durable equipment)**

> ### 📌 [원문 각주 심층 해설 (Footnote 19)] `[p. 53]`
> - **각주 19 (표준 개발 기구):** **미국국가표준협회(American National Standards Institute, ANSI)** 및 **미국방화협회(National Fire Protection Association, NFPA)**와 같은 표준 개발 기구(Standards-developing organizations)들은 통신 표준을 정기적으로 업데이트하고 발간함.

---

### 2.5 교육 및 훈련 (Training) `(p. 53)`
- 상호운용 가능한 시스템과 장비를 활용하는 교육훈련 및 연습(Training and exercises that employ interoperable systems and equipment)은 인력들이 **사건이 발생하기 전에(Before an incident) 자신들의 역량(Capabilities)과 한계(Limitations)를 이해**할 수 있게 해줌.

---

## 3. 사건 정보 (Incident Information) `[원문 pp. 54–56]`

### 3.1 사건 정보의 6대 주요 활용 기능 `(p. 54)`
사건 발생 중, 인력은 의사결정을 내리기 위해 시의적절하고 정확한 정보(Timely and accurate information)를 필요로 함. 정보는 **ICS, EOC, MAC Group, JIS** 내에서 다음 6가지를 포함한 많은 기능에 활용됨:
1. **계획 수립 지원 (Aiding in planning)**
2. **비상 보호 조치를 포함한 대국민 소통 (Communicating with the public, including emergency protective measures)**
3. **사건 비용 산정/결정 (Determining incident cost)**
4. **NGO 또는 민간 부문 자원의 추가 참여 필요성 결정 (Determining the need for additional involvement of NGO or private sector resources)**
5. **안전 문제/이슈 식별 (Identifying safety issues)**
6. **정보 요청 해결/처리 (Resolving information requests)**

---

### 3.2 사건 보고서 (Incident Reports) 및 사건작전계획 (IAPs) `(p. 54)`

#### (1) 사건 보고서 (Incident Reports)의 유형 비교 `(p. 54)`
사건 보고서는 상황인식을 제고하고(Enhance situational awareness), 인력이 필수 정보에 더 쉽게 접근할 수 있도록 보장함. 사건에 관한 필수 정보를 제공하는 보고서 유형은 다음과 같음:

| 구분 | 상황보고서 (Situation Reports, SITREP) | 상태보고서 / 현황보고서 (Status Reports) |
| :--- | :--- | :--- |
| **작성 주기 및 시점** | • 통상 **정기적이고 반복적인 주기(Regular and recurring basis)**로 작성 및 배포됨.<br>• **지난 작전기간(Past operational period)** 동안의 사건 상태에 대한 스냅샷(Snapshot, 단면 요약)을 제공함. | • 정기적으로 예정된 상황보고서(SITREP) **외에(Outside regularly scheduled situation reports)** 수시로 작성됨.<br>• *대표 예시:* **즉시/현장 약식 보고서(Spot reports)** |
| **포함 정보의 성격** | • 사건 세부사항(Incident details)을 포함.<br>• 사건과 관련된 명확한 세부사항(**누가[Who], 무엇을[What], 언제[When], 어디서[Where], 어떻게[How]**)에 관한 **확인되거나 검증된 정보(Confirmed or verified information)**를 담음. | • **중요하거나 및/또는 시급한(시간에 민감한) 정보(Vital and/or time-sensitive information)**를 포함함. |
| **범위 및 격식성** | • 사건 전반을 포괄하는 공식 보고서. | • 통상적으로 **특정 기능에 국한/특화(Function-specific)**되며, **SITREP보다 덜 공식적(Less formal than SITREPs)**임. |

- **보고서 표준화와 조직 고유 정보의 조화 `(p. 54)`:**
  - 관할구역 및 조직 내부와 상호 간에 사건 통지(Incident notification), 상황보고서(Situation reports), 상태보고서(Status reports)에 포함되는 정보를 표준화(Standardizing)하는 것은 정보 처리(Information processing)를 촉진함.
  - ⚠️ **단서 조항 (유연성 보장):** 그러나 이러한 표준화가 **보고 조직에 고유한 정보(Information unique to a reporting organization)의 수집이나 전파를 방해해서는 안 됨**.
  - **공통 포맷 전송의 이점:** 공통 포맷/형식으로 데이터를 전송(Transmitting data in a common format)하면 다른 관할구역과 조직이 특정 사건 정보를 **예측(Anticipate)하고, 신속하게 찾아내어(Rapidly find), 그에 따라 조치를 취할 수(Act on)** 있게 됨.

#### (2) 사건작전계획 (Incident Action Plans, IAPs) `(p. 54)`
- 사건 보고서 외에도, 인력은 **사건작전계획(IAPs)**을 참조함으로써 상황인식을 개선하고 사건 목표와 전술(Incident objectives and tactics)을 더 잘 이해할 수 있음.
- IAP는 **현장지휘관(Incident Commander) 또는 통합지휘부(Unified Command)**가 수립한 사건 목표(Incident objectives)를 담고 있으며, 계획된 작전기간(Planned operational period, **통상 12~24시간[Generally 12 to 24 hours]**) 동안의 전술(Tactics)을 다룸.
- *(원문 참조 안내: 사건작전계획 수립 프로세스에 관한 세부사항은 부록 A, ICS 탭 8 [Appendix A, ICS Tab 8] 참조).*

---

### 3.3 데이터 수집 및 처리 (Data Collection and Processing) `(pp. 54–56)`

- **표준 기법 준수의 효과:** 인력은 표준 데이터 수집 기법과 정의(Standard data collection techniques and definitions)를 준수하는 방식으로 데이터를 수집하고, 데이터를 분석하며, 적절한 채널을 통해 공유해야 함. **표준화된 표본추출 및 데이터 수집(Standardized sampling and data collection)**은 신뢰할 수 있는 분석(Reliable analysis)을 가능하게 하고 평가 품질(Assessment quality)을 향상시킴.
- **수요 주체:** ICS 조직, EOC, MAC Group의 리더들과 공보 인력(Public affairs personnel) 모두 정확하고 시의적절한 정보에 의존함.
- **데이터 수집 및 처리의 6대 표준 요소 (Standard Elements):**

```
      [ 데이터 수집 및 처리의 6대 표준 프로세스 (Data Collection and Processing) ]
 ┌────────────────────┐    ┌────────────────────┐    ┌────────────────────┐
 │ 1. 초기 상황판단 / │    │ 2. 데이터 수집계획 │    │ 3. 검증            │
 │    신속 평가       │───>│(Data Collection    │───>│   (Validation)     │
 │ (Initial Size-Up / │    │ Plan & 14대 EEI)   │    │• 불완전/부정확/과장│
 │  Rapid Assessment) │    │• 8대 수집 방법 활용│    │  /구식/오도 판별   │
 └────────────────────┘    └────────────────────┘    └─────────┬──────────┘
                                                               │
 ┌────────────────────┐    ┌────────────────────┐              ▼
 │ 6. 갱신 (Updating) │    │ 5. 전파            │    ┌────────────────────┐
 │• 지속적 모니터링·  │<───│   (Dissemination)  │<───│ 4. 분석 (Analysis) │
 │  확인·통합·분석으로│    │• 관련 법·정책 준수 │    │• 원시데이터→의사결 │
 │  상황인식 발전     │    │• 상황인식·조정 촉진│    │  정 유용 정보 전환 │
 └────────────────────┘    └────────────────────┘    └────────────────────┘
```

#### ① 초기 상황판단 / 신속 평가 (Initial Size-Up/Rapid Assessment) `(p. 55)`
- 사건 현장에 **가장 먼저 도착한 공직자/담당관(The official who is the first to arrive at the scene of an incident)**이 상황을 평가하고, 그 결과(Findings)를 지령실(Dispatch) 또는 기타 사건 지원 조직(Other incident support organizations)에 제공함.
- 이후 이러한 조직의 참모/인력들은 이 정보를 사용하여 자원을 배정(Assign resources)하고 기타 사건 관련 의사결정을 내림.

#### ② 데이터 수집 계획 (Data Collection Plan) 및 필수정보요소 (EEI) `(pp. 55–56)`
- **수립 주체 및 목적:** 현장지휘관(IC), 통합지휘부(UC), 또는 EOC 센터장(EOC director)은 사건 정보를 수집하는 반복적 프로세스를 표준화하기 위해 데이터 수집 계획을 수립할 수 있음.
- **정의 및 구성:** 데이터 수집 계획은 통상 인력이 수집할 **필수정보요소(Essential Elements of Information, EEI)**—즉, **정보에 입각한 의사결정에 필요한 정보 항목들(Information items required for informed decision making)**—이 무엇인지 기술하는 **매트릭스(Matrix, 행렬표)** 형태임. 데이터 수집 계획은 다양한 항목을 수집하기 위한 다음 4가지를 나열함:
  1. **출처 (Sources)**
  2. **수집 방법 (Methods)**
  3. **측정 단위 (Units of measure)**
  4. **수집 일정/주기 (Schedules)**
- **선행 조건:** **EEI는 데이터 수집 계획을 개발하기 전에 먼저 정의되어야 함(The EEI should be defined prior to developing a data collection plan).**

##### 📋 [표] 전형적인 필수정보요소(EEI) 14개 항목 및 데이터 수집 8대 방법 `(pp. 55–56)`

| 전형적인 EEI 14개 항목 (Typical EEI Items) `[p. 55]` | 데이터 수집 8대 방법 (Methods for Data Gathering) `[p. 56]` |
| :--- | :--- |
| 1. **사건 구역 경계 / 진입 지점** *(Incident area boundaries/access points)*<br>2. **관할구역 경계** *(Jurisdictional boundaries)*<br>3. **사회적/경제적/정치적 영향** *(Social/economic/political impacts)*<br>4. **인구/주민 건강에 미치는 영향** *(Impact to health of the population)*<br>5. **교통/운송 시스템 상태** *(Transportation system status)*<br>6. **통신 시스템 상태** *(Communications system status)*<br>7. **위험요인별 특화 정보** *(Hazard-specific information)*<br>8. **중요 기상 상황** *(Significant weather)*<br>9. **지진 또는 기타 지구물리학적 데이터** *(Seismic or other geophysical data)*<br>10. **핵심 시설 상태** *(Critical facility status)*<br>11. **항공 정찰 활동 상태** *(Aerial reconnaissance activity status)*<br>12. **재난/비상사태 선포 상태** *(Disaster/emergency declaration status)*<br>13. **계획된 또는 예정된 활동** *(Planned or upcoming activities)*<br>14. **기부금품/기부 현황** *(Donations)* | 1. **911 신고 및 지령 시스템:** 공공안전 통신요원(Public safety telecommunicators)의 911 신고 전화 또는 지령 시스템(Dispatch systems)으로부터 데이터 입수<br>2. **통신 모니터링:** 대응 요원들 간의 무선/무전(Radio), 영상(Video), 및/또는 데이터 통신(Data communications) 모니터링<br>3. **보고서 열람:** 상황보고서(SITREPs) 열람/독해<br>4. **기술전문가 활용:** 미국 기상청 대표 파견관(National Weather Service representatives)과 같은 기술전문가(Technical specialists) 활용<br>5. **현장 및 유관 조직 보고 수신:** 현장 관측자(Field observers), 현장지휘소(ICPs), 구역지휘부(Area Commands), 다기관조정그룹(MAC Groups), 부서운영센터(DOCs), 기타 EOC들로부터 보고 수신<br>6. **정보 전문가 파견:** EOC, 기타 시설, 현장 운영 사무소(Operational field offices)에 정보 전문가(Information specialists) 배치/파견<br>7. **공간정보 분석:** 관련 공간정보 산출물(Relevant geospatial products) 분석<br>8. **미디어 모니터링:** 인쇄 매체(Print), 온라인(Online), 방송(Broadcast), 소셜 미디어(Social media) 모니터링 |

#### ③ 검증 / 타당성 확인 (Validation) `(p. 56)`
- 상황인식 담당 인력(Staff responsible for situational awareness)은 데이터가 다음 5가지 상태에 해당하는지 판별하기 위해 데이터를 검토함:
  1. **불완전한지 (Incomplete)**
  2. **부정확한지 (Inaccurate)**
  3. **과장/윤색되었는지 (Embellished)**
  4. **구식/시기가 지났는지 (Outdated)**
  5. **오도의 소지가 있는지 (Misleading)**
- 인력은 데이터를 검증하기 위해 **다양한 출처(A variety of sources)**를 활용해야 함.

#### ④ 분석 (Analysis) `(p. 56)`
- **원시 데이터에서 의사결정 정보로의 전환:** 상황인식 인력은 사건 관리에 대한 함의(Implications for incident management)를 파악하고, **원시 데이터(Raw data)를 의사결정에 유용한 정보(Information that is useful for decision making)로 전환**하기 위해 검증된 데이터를 분석함.
- **분해 접근법:** 분석은 사건의 정보 요구사항을 **더 작고 관리 가능한 요소들로 분해(Breaking those information needs into smaller, more manageable elements)**한 뒤 그 요소들을 해결함으로써 정보 요구사항을 충족함.
- **분석가의 자세:** 인력은 문제와 상황에 대한 철저한 이해(Thorough understanding of the problems and the situation)에 기반하여 분석해야 하며, **시의적절하고 객관적인 분석(Timely and objective analysis)**을 제공하고 **누락되었거나 알려지지 않은 데이터(Missing or unknown data)를 인지(Cognizant)**하고 있어야 함.

#### ⑤ 전파 / 보급 (Dissemination) `(p. 56)`
- 인력이 사건 데이터를 수집하고 검증한 후에는, **관련 데이터 전파 법률 및 정책(Applicable data dissemination laws and policies)**에 부합하게 이를 타인과 공유함.
- 인력은 **상황인식 제고(Enhancing situational awareness)**와 **효과적인 조정 장려(Encouraging effective coordination)**라는 목표를 가지고 시의적절하고 정확한 방식(Timely and accurate way)으로 사건 정보를 전파해야 함.

#### ⑥ 갱신 / 업데이트 (Updating) `(p. 56)`
- 정보의 정확성과 완전성(Informational accuracy and completeness)은 사건 관리자가 건전하고 합리적인 의사결정(Sound decisions)을 내리는 데 도움을 줌.
- 인력은 데이터와 정보의 관련 요소들을 **지속적으로 모니터링(Monitoring), 확인/검증(Verifying), 통합(Integrating), 분석(Analyzing)**함으로써 상황인식을 발전시킬 수 있음.

---

## 4. 통신 표준 및 포맷 (Communications Standards and Formats) `[원문 pp. 57–59]`

### 4.1 공통 용어, 평문, 데이터 상호운용성 (Common Terminology, Plain Language, Compatibility) `(pp. 57–58)`

#### (1) 공통 용어 (Common Terminology) `(p. 57)`
- 공통 용어의 사용은 서로 다른 전문 분야, 관할구역, 조직, 기관의 사건 인력들이 소통하고 활동을 효과적으로 조정하도록 돕는다.

#### (2) 평문 / 일상 용어 (Plain Language) `(p. 57)`
- **공공 및 대원 안전과 직결:** 사건 관리에서 **암호나 코드가 아닌 평문과 명확한 텍스트(Plain language and clear text, not codes)**를 사용하는 것은 **공공 안전의 문제(A matter of public safety)**이며, 특히 사건 대응 인력과 사건으로 영향을 받는 사람들의 안전에 직결됨.
- **구두·서면 전 영역 적용:** 인력은 시의적절하고 명확한 방식으로 정보를 전파하고 모든 의도된 수신자가 이해할 수 있도록 보장하기 위해, 사건 중 **구두이든 서면이든(Whether oral or written)** 모든 조직 요소 간의 통신에서 평문을 사용해야 함.
- **기관 고유 약어·은어 금지:** 다수의 관할구역이나 조직이 참여하는 사건 중에는 **특정 기관, 조직, 관할구역에만 고유한 두문자어/약어(Acronyms)나 은어/전문용어(Jargon)의 사용을 피해야 함**.

#### (3) 데이터 상호운용성 (Data Interoperability) `(p. 57)`
인력은 관리(Management), 지휘(Command), 지원 요소(Support elements) 및 협력 관할구역·조직 간의 정보 전파를 가능하게 하기 위해 통신 프로토콜을 계획, 수립, 적용해야 함. **호환 가능한 정보 관리(Compatible information management)의 3대 요소**는 다음과 같음:

| 호환 정보 관리 3대 요소 | 원문 세부 내용 `[p. 57]` |
| :--- | :--- |
| **1. 데이터 통신 프로토콜**<br>*(Data Communication Protocols)* | • 정보를 사용하거나 공유하기 위한 통신 절차 및 프로토콜 — **음성(Voice), 데이터(Data), 공간정보(Geospatial information), 인터넷 사용(Internet use), 데이터 암호화(Data encryption)**를 포함함.<br>• 여기에는 **국가정보교환모델(National Information Exchange Model, NIEM)** (`http://www.niem.gov`)과 일관되게 정보를 구조화하고 공유하는 것(Structuring and sharing information consistently with NIEM)이 포함됨. |
| **2. 데이터 수집 프로토콜**<br>*(Data Collection Protocols)* | • 사건 발생 전에 **미국국가지리격자(United States National Grid, USNG)**의 사용과 같은 다학제적 및/또는 다관할 절차와 프로토콜(Multidisciplinary and/or multijurisdictional procedures and protocols)을 수립해 두면 표준화된 데이터 수집 및 분석이 가능해짐. |
| **3. 암호화 또는 전술 용어**<br>*(Encryption or Tactical Language)* | • 필요한 경우, 사건 관리 인력과 소속 조직은 보안을 유지하기 위해 정보를 암호화하는 방법론과 시스템(Methodology and systems to encrypt information)을 갖추고 있어야 함.<br>• 대부분의 사건에서는 평문(Plain language)이 적절하지만, **사건의 특성으로 인해 간혹 전술 용어/암호어(Tactical language)가 정당화/요구되는 경우가 있음(예: 진행 중인 테러 사건[During an ongoing terrorist event])**.<br>• 이러한 경우, 특수 암호화 및 전술 용어의 적절한 사용에 관한 지침이 **사건별 통신 계획(Incident-specific communications plan)**에 통합되어야 함. |

> ### 🗺️ [원문 삽입 박스 1: 미국국가지리격자 (United States National Grid, USNG)] `[p. 58]`
> - **정의:** 미국국가지리격자(USNG)는 FEMA 및 기타 사건 관리 조직이 **위도/경도(Latitude/longitude)의 대안(Alternative)**으로 사용하는 **점 및 면(구역) 위치 참조 시스템(Point and area location reference system)**임.
> - **적용 용이성:** USNG는 **위험 평가(Risk assessment), 계획 수립(Planning), 대응(Response), 복구 작전(Recovery operations)**을 지원하기 위해 적용하기가 간단함(Simple to apply).
> - **사용 주체:** 개인(Individuals), 공공기관(Public agencies), 자원봉사 조직(Voluntary organizations), 상업적 기업(Commercial enterprises)이 다양한 지리적 구역 및 전문 분야 내부와 상호 간에(Within and across diverse geographic areas and disciplines) USNG를 사용할 수 있음.
> - **핵심 효과:** USNG의 사용은 개인이나 프로그램의 역할과 무관하게 모든 정부 계층, 전문 분야, 위협 및 위험 전반에 걸쳐 **일관된 상황인식(Consistent situational awareness)**을 촉진함.

---

### 4.2 기술 활용 및 절차 (Technology Use and Procedures) `(pp. 58–59)`

#### (1) 기술 도구의 활용 시기 및 4대 예시 `(p. 58)`
인력은 사건에 참여하는 관할구역/조직 및/또는 대중에게 향상된 상황인식을 제공하는 메커니즘으로서 **사건 전, 중, 후에(Before, during, and after incidents)** 기술적 도구(Technological tools)를 사용함. 이러한 기술의 예시는 다음과 같음:
1. **무선/무전 및 전화 시스템 (Radio and telephone systems)**
2. **대국민 경보 및 통지 시스템 (Public warning and notification systems)**
3. **하드웨어, 소프트웨어 및 인터넷 기반 시스템과 애플리케이션 (Hardware, software, and internet-based systems and applications)** — **지리/공간정보시스템(Geographic/Geospatial Information Systems, GIS)** 및 **사건 관리 소프트웨어(Incident management software)** 포함
4. **소셜 미디어 (Social media)**

- **표준 절차 준수:** 사건 인력은 이러한 귀중한 통신 자원으로부터 혜택을 얻기 위해 기술 및 기타 도구 사용 절차를 수립해야 함. 이러한 애플리케이션을 통해 사건 중에 획득하거나 공유하는 정보는 계획되고 표준화된 방법(Planned and standardized methods)을 따라야 하며, 전반적인 정보 공유 표준, 절차, 프로토콜에 일반적으로 부합(Generally conform)해야 함.

#### (2) 소셜 미디어 (Social Media)의 4대 촉진 기능 및 양대 활용 영역 `(pp. 58–59)`
소셜 미디어는 모든 수준의 사건 관리에 고유한 고려사항(Unique considerations)을 제시하며, 다음 **4가지 활동을 촉진할 수 있는 도구 세트**를 제공함:
1. 사건 영향에 관한 정보 및 **현장의 직접 목격담/생생한 증언(Firsthand accounts of incident impacts)**의 모니터링 및 수집
2. **대국민 정보 및 경보(Public information and warning)** 배포
3. **지도 및 사건 시각화 자료(Maps and incident visualizations)** 제작
4. 가용한 정보, 서비스, 자원을 **식별된 필요/수요(Identified needs)와 매칭/연결(Matching)**

> ### 📱 [원문 삽입 박스 2 & 3: 소셜 미디어의 양대 활용 지침] `[pp. 58–59]`
>
> #### ① 상황인식을 위한 소셜 미디어 활용 *(Using Social Media for Situational Awareness)* `[p. 58]`
> - **혁신적 데이터 수집:** 소셜 미디어는 상황인식을 달성하기 위해 데이터를 수집하는 혁신적인 방법(Innovative ways)을 제공함.
> - **급증 및 트렌드 모니터링:** **정보융합센터(Fusion centers), 법집행기관(Law enforcement), 공중보건기관(Public health), 또는 기타 정보 모니터링 시스템**에 의한 **소셜 미디어상의 급증(Spikes)이나 추세/트렌드(Trends) 모니터링**은 상황인식을 강화하거나 **새롭게 부상하는 문제에 대한 조기 징후(Early indication of emerging issues)**를 제공할 수 있음.
> - **데이터 검증 필수:** 모든 데이터와 마찬가지로, 사건 인력은 소셜 미디어를 통해 얻은 정보를 필터링하고 정확성을 판별하기 위해 **데이터 검증 프로세스(Data validation processes)**를 사용함.
>
> #### ② 정보 전파를 위한 소셜 미디어 활용 *(Using Social Media for Disseminating Information)* `[p. 59]`
> - **대중의 기대 증가:** 대중은 사건 관리 인력이 필요한 정보를 소통하기 위해 소셜 미디어를 사용하기를 점점 더 기대함.
> - **사건 관리자의 3대 핵심 고려사항 (Considerations for Incident Managers):**
>   1. **의도된 대상 독자/청중(Intended audiences)**과 공유할 **정보의 유형(Types of information)** 식별
>   2. **피드백이나 응답을 요청/수렴(Solicit feedback or responses)**할 것인지 여부 결정
>   3. **생존자/이재민(Survivors)이 메시지를 수신하기 전까지의 잠재적 시간 지연(Potential time delay)** 고려
> - **의사결정의 영향:** 이러한 결정들은 사건 관리자가 ① **어떤 소셜 미디어 플랫폼**을 사용할지, ② **메시지의 빈도와 구성/형태(Frequency and configuration of messages)**, ③ **업무 배정 및 인력 배치 수요(Assignments and staffing needs)**를 결정하는 데 도움을 줌.
> - **표준 프로토콜 및 접근성:** 다른 대국민 정보와 마찬가지로, 인력은 **표준 배포 프로토콜(Standard release protocols)**을 따르고 **접근성(Accessibility)**을 보장해야 함.

---

### 4.3 정보 보안 / 작전 보안 (Information Security/Operational Security) `(p. 59)`
- **기밀성과 정보 공유의 긴장 관계:** **기밀성/비밀유지(Confidentiality)의 필요성**은 때때로 정보 공유를 복잡하게 만듦(Complicates sharing information).
- **기관 간 첩보 공유 시의 두드러짐:** 이는 특히 **법집행 공동체 내부에서(Within the law enforcement community)**, 그리고 **비상관리(Emergency management), 소방(Fire), 공중보건(Public health) 및 기타 공동체와 첩보/정보(Intelligence)를 공유할 때** 두드러질 수 있음(Particularly pronounced).
- **제한·기밀 정보 접근의 3대 결정 요건:** 특정 제한 정보(Restricted information) 또는 기밀 정보(Classified information)에 대한 접근은 다음 3가지 요건에 따라 결정됨:
  1. **관련 법률 (Applicable law)**
  2. **개인의 보안 인가 등급 (An individual’s security clearance)**
  3. **알 필요성 (Need to know)**

---
---

## 5. [연구자 분석] 한미 재난 통신 및 정보 관리 체계 비교 분석
> **[원칙 3 준수 고지]** 이하 제5절 및 제6절은 위 NIMS 제4장 원문(pp. 50–59)의 분석 결과를 토대로 대한민국 「재난 및 안전관리 기본법」 및 재난안전통신망(PS-LTE) 운영 실태와 비교·해석한 연구자 고찰 영역임.

### 5.1 한미 통신 및 정보 관리 제도 대비표

| 비교 영역 | 미국 NIMS 제4장 체계 (Communications & Info Mgmt) | 대한민국 재난 통신·정보 관리 체계 |
| :--- | :--- | :--- |
| **상호운용성 및 휴대성**<br>*(Interoperability & Portability)* | • **관할 간 무선 채널의 표준 할당**으로 타 지역 출동 시에도 기존 장비 그대로 교신 가능.<br>• 기술뿐만 아니라 거버넌스·SOP·훈련·**일상 작전 활용(Routine use)**의 5대 요소 통합 관리. | • 전국 단일 **재난안전통신망(PS-LTE)** 인프라 구축 완료.<br>• 그러나 기관별(소방·경찰·지자체·해경) 평시 공통 통화그룹 교신 훈련 부족으로 대형 재난 시 채널 통합 지연 발생. |
| **통신 언어 및 용어 표준**<br>*(Plain Language)* | • **암호·음어(10-Code) 및 기관 고유 은어 사용 엄격 금지**, 전 기관 **평문(Plain Language)** 의무화.<br>• 단, 진행 중인 테러 등 특수 상황에서만 사건별 통신계획에 의거 전술 용어(Tactical Language)·암호화 예외 허용. | • 경찰·소방·군·행정기관 간 사용하는 실무 약어와 무전 은어가 상이하여 합동 작전 시 의사소통 오해 빈발.<br>• 평문 교신 원칙에 대한 법적·교리적 강제 규정 미흡. |
| **데이터 수집 및 보고 표준**<br>*(EEI & SITREP vs Status Report)* | • 사전에 정의된 **14대 필수정보요소(EEI)** 매트릭스 기반 체계적 수집.<br>• 공식·검증된 주기적 **SITREP**과 시급한 기능별 **Status/Spot Report**의 엄격한 이원화.<br>• **NIEM(국가정보교환모델)** 및 **USNG(국가지리격자)**로 데이터 구조·위치 좌표 통일. | • 사전 정의된 EEI 매트릭스보다는 상급 기관(중대본·대통령실 등)의 수시·비정형 자료 요구에 대응하는 **하향식 보고서** 위주.<br>• 미확인 속보(Spot)와 검증된 공식 상황보고(SITREP)가 혼재되어 초기 사상자 수 혼선 등 발생.<br>• 국가지점번호 제도가 있으나 다기관 실무 활용도 낮음. |
| **정보 검증(Validation) 및 소셜 미디어 활용** | • 상황인식 전담 인력이 데이터의 **불완전·부정확·과장(Embellished)·구식·오도 여부**를 다중 출처로 검증.<br>• SNS 급증(Spikes) 모니터링을 통한 조기 징후 포착 및 이재민 수신 지연(Time delay)·장애인/외국인 **동시 접근성(Simultaneous accessibility)** 보장. | • SNS 모니터링 시스템은 일부 도입되었으나, 가짜뉴스/과장 정보 필터링(Validation)을 위한 상황실 내 전문 분석관(Information Specialist) 편제 부족.<br>• 재난문자(CBS) 발송 시 다국어·시청각 장애인 동시 접근성 보장이 제한적임. |

---

## 6. [연구자 고찰] NIMS 제4장 원리의 국내 적용 한계와 개선 시사점

### 6.1 국내 적용 시의 3대 구조적 한계
1. **하드웨어(PS-LTE) 중심주의와 소프트웨어(SOP·일상 사용)의 괴리:**
   - NIMS 제4장(p. 50)은 상호운용성이 단순한 기계 장비가 아니라 **거버넌스, SOP, 기술, 훈련, 일상적 사용(Usage during routine operations)**의 결합임을 명시함.
   - 한국은 세계 최초 전국 단일망인 PS-LTE(기술)를 구축했으나, 평시 일상 출동에서 소방·경찰·지자체가 공통 채널로 교신하는 '일상적 사용(Routine use)'이 이루어지지 않아 대형 재난 시 기기를 들고도 카카오톡이나 개인 휴대전화에 의존하는 역설이 발생함.
2. **'상황인식(Situational Awareness)을 위한 정보 공유'가 아닌 '의전·면피용 보고' 문화:**
   - NIMS에서 정보 수집·검증·분석·전파의 목적은 현장과 지원 부서(ICS, EOC, MAC Group, JIS) 모두가 의사결정을 내릴 수 있도록 **수평적·통합적 상황인식**을 유지하는 것임(pp. 50, 54).
   - 반면 국내 현장에서는 초기 상황판단(Initial Size-Up) 인력이 현장 대응보다 상급 기관의 중복 보고 요구를 처리하느라 골든타임을 허비하는 구조적 문제가 존재함.
3. **데이터 검증(Validation)과 분석(Analysis) 기능의 미분화:**
   - 원문(p. 56)은 수집된 원시 데이터(Raw data)가 **과장(Embellished)되거나 오도(Misleading)**되지 않았는지 검증(Validation)한 후 의사결정에 유용한 정보(Information)로 분석(Analysis)하는 전문 과정을 강조함.
   - 국내 재난안전상황실은 단순 접수·전달 인력 위주로 구성되어, 다중 출처 교차검증 및 누락 데이터(Missing or unknown data)의 함의를 분석하는 전문 역량이 취약함.

### 6.2 핵심 요약 및 학술적·정책적 시사점 (Key Takeaways)
1. **정보 공유는 전 대원의 책무이며, 통신망 관리는 물류(Logistics)의 전문 영역이다 (`p. 50`):**  
   정보의 수집·갱신 책임(전 인력)과 통신 인프라 지원 책임(ICS 물류부 / EOC 지원팀)을 명확히 구분하여 현장의 부담을 줄여야 한다.
2. **4대 통신 원칙(상호운용성, 신뢰·확장·이동성, 회복력·다중성, 보안)의 균형 (`pp. 50–51`):**  
   특히 주 통신망 파괴 시 작동하는 다중성(Redundancy)과 산업제어시스템(ICS)·개인식별정보(PII)를 보호하는 사이버·정보 보안(Security)이 동시에 설계되어야 한다.
3. **EEI 사전 정의와 데이터 6단계 프로세스의 정착 (`pp. 55–56`):**  
   재난 발생 후 주먹구구식으로 정보를 찾는 것이 아니라, 평시에 14대 필수정보요소(EEI)와 수집 매트릭스(출처, 방법, 단위, 주기)를 정의하고 **초기평가 → 수집계획 → 검증 → 분석 → 전파 → 갱신**의 6단계를 표준화해야 한다.
4. **평문(Plain Language) 원칙과 취약계층 동시 접근성(Simultaneous Accessibility)의 법제화 (`pp. 52–53, 57`):**  
   다기관 합동 작전 시 기관 고유 은어·약어를 배제하고 평문을 강제하며, 모든 대국민 재난 메시지는 외국인·장애인 등 기능적 접근 필요 계층에게 동시에 도달하도록 설계해야 한다.
