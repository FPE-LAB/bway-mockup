import React from "react";

function App() {
  return (
    <div className="app-root">
      {/* 섹션 1 - 랜딩 / 인트로 */}
      <Section1 />
      
      {/* 섹션 2 - 챌린지 지도/미션 리스트 */}
      <Section2 />
      
      {/* 섹션 3 - 미션 상세 & 인증 업로드 */}
      <Section3 />
      
      {/* 섹션 4 - 리워드 / 부산 XP 패스 */}
      <Section4 />
    </div>
  );
}

// 섹션 1: 랜딩 / 인트로
function Section1() {
  return (
    <section className="section">
      <div className="logo-text">B-WAY</div>
      <h1 className="main-title">부산을 걷는 새로운 방법, B-WAY</h1>
      <div className="main-subtitle">
        미션을 수행하며 부산을 여행하고<br />
        챌린지 리워드로 로컬 상점에서 바로 쓰는 경험 플랫폼
      </div>
      
      <div className="card">
        <div className="badge">MVP Mockup · 부산 관광 챌린지</div>
        
        <ol className="step-list">
          <li className="step-item">
            <span className="step-item-title">1단계 · 미션 선택</span>
            <span className="step-item-desc">부산대·서면·해운대 챌린지 중 하나를 고른다.</span>
          </li>
          <li className="step-item">
            <span className="step-item-title">2단계 · 현장 인증</span>
            <span className="step-item-desc">사진/영상으로 인증하면 자동 숏폼이 생성된다.</span>
          </li>
          <li className="step-item">
            <span className="step-item-title">3단계 · 리워드 사용</span>
            <span className="step-item-desc">모은 토큰을 카페·식당·체험 상점에서 바로 쓴다.</span>
          </li>
        </ol>
        
        <div className="button-group">
          <button className="button-primary">오늘의 챌린지 보기</button>
          <button className="button-secondary">부산 XP 패스 보기</button>
        </div>
      </div>
    </section>
  );
}

// 섹션 2: 챌린지 지도 / 미션 리스트
function Section2() {
  return (
    <section className="section">
      <h2 className="section-title">오늘의 부산 챌린지 지도</h2>
      <p className="section-subtitle">
        부산대 · 서면 · 해운대 · 광안리 · 감천문화마을까지,<br />
        미션을 수행하며 이동하는 경험 동선
      </p>
      
      <div className="map-card">
        <div className="map-points">
          <div className="map-point">● 부산대</div>
          <div className="map-point">● 서면</div>
          <div className="map-point">● 해운대</div>
          <div className="map-point">● 감천문화마을</div>
        </div>
        <div style={{ fontSize: "11px", color: "#666", marginTop: "8px" }}>
          챌린지 수행 시 일반 방문 대비 최대 7배 높은 행동 전환률
        </div>
      </div>
      
      <ChallengeCard
        title="Campus Local Route"
        location="부산대 · 부경대 일대"
        desc="카페·서점·동네 빵집을 잇는 6개 스팟 미션"
        tags={["#청년상권", "#MZ", "#걷기좋은코스"]}
        reward="+ 1,200 XP (카페 할인권 1장)"
        progress="3/5 미션 완료"
        participants="오늘 참여자 127명"
      />
      
      <ChallengeCard
        title="Seomyeon Hidden Alley"
        location="서면 번화가"
        desc="골목 맛집 · 레트로 상점 · 포토스팟 챌린지"
        tags={["#야간관광", "#골목상권", "#힙한부산"]}
        reward="+ 1,800 XP (로컬 식당 10% OFF)"
        progress="2/4 미션 완료"
        participants="오늘 참여자 89명"
      />
      
      <ChallengeCard
        title="Haeundae Sunset Walk"
        location="해운대 해변"
        desc="노을·포토스팟·해변 카페 미션"
        tags={["#해양관광", "#썬셋", "#데이트"]}
        reward="+ 1,500 XP (해변 카페 음료권)"
        progress="1/3 미션 완료"
        participants="오늘 참여자 156명"
      />
    </section>
  );
}

// 챌린지 카드 컴포넌트
function ChallengeCard({ title, location, desc, tags, reward, progress, participants }) {
  return (
    <div className="challenge-card">
      <div className="challenge-card-header">
        <div style={{ flex: 1 }}>
          <div className="challenge-card-title">{title}</div>
          <div className="challenge-card-location">{location}</div>
        </div>
        <div className="challenge-badge">{participants}</div>
      </div>
      
      <div className="challenge-card-desc">{desc}</div>
      
      <div style={{ marginBottom: "8px" }}>
        {tags.map((tag, idx) => (
          <span key={idx} className="tag">{tag}</span>
        ))}
      </div>
      
      <div style={{ fontSize: "11px", color: "#666", marginBottom: "4px" }}>
        {progress}
      </div>
      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>
      
      <div className="challenge-card-reward">{reward}</div>
    </div>
  );
}

// 섹션 3: 미션 상세 & 인증 업로드
function Section3() {
  return (
    <section className="section">
      <h2 className="section-title">미션 상세 & 인증 화면 예시</h2>
      <p className="section-subtitle">서면 Hidden Route 99 챌린지 상세 예시 화면</p>
      
      <div className="card">
        <div style={{ marginBottom: "16px" }}>
          <div className="card-title">서면 Hidden Route 99</div>
          <div className="card-subtitle">서면 · 로컬 골목 상권</div>
          <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
            <span className="tag">난이도 ★★☆</span>
            <span className="tag">예상 소요 2시간</span>
          </div>
        </div>
        
        <div className="divider"></div>
        
        <div style={{ marginTop: "16px" }}>
          <div className="card-subtitle" style={{ fontWeight: 600, marginBottom: "8px" }}>
            미션 설명
          </div>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li className="list-item">서면 골목 카페 2곳 방문</li>
            <li className="list-item">로컬 분식집 또는 식당 1곳 방문</li>
            <li className="list-item">레트로 포토스팟에서 사진 1장 촬영</li>
            <li className="list-item">골목 벽화 앞 인증샷 촬영</li>
          </ul>
        </div>
        
        <div className="divider"></div>
        
        <div style={{ marginTop: "16px" }}>
          <div className="card-subtitle" style={{ fontWeight: 600, marginBottom: "8px" }}>
            사진/영상 인증 업로드
          </div>
          <div className="upload-area">
            <div className="upload-area-text">인증 사진 또는 영상을 업로드하세요</div>
            <div className="upload-buttons">
              <button className="upload-button">파일 선택</button>
              <button className="upload-button">갤러리에서 선택</button>
            </div>
            <div className="preview-box">preview</div>
          </div>
        </div>
        
        <div className="shorts-preview">
          <div className="shorts-preview-title">자동 생성 숏폼 프리뷰</div>
          <div className="shorts-step">클립 1 – 골목 입구</div>
          <div className="shorts-step">클립 2 – 로컬 카페</div>
          <div className="shorts-step">클립 3 – 야간 네온사인</div>
          <div className="helper-text">
            * 실제 서비스에서는 음악·자막이 자동 합성됨
          </div>
        </div>
        
        <div className="button-group" style={{ marginTop: "20px" }}>
          <button className="button-primary">미션 완료 처리</button>
          <button className="button-secondary">친구에게 공유</button>
        </div>
      </div>
    </section>
  );
}

// 섹션 4: 리워드 / 부산 XP 패스
function Section4() {
  return (
    <section className="section">
      <h2 className="section-title">리워드 & 부산 XP 패스</h2>
      <p className="section-subtitle">
        챌린지를 깨면 부산 XP 토큰이 쌓이고<br />
        부산 XP 패스로 로컬 상점에서 바로 사용 가능한 구조
      </p>
      
      <div className="wallet-card">
        <div className="card-title">내 B-WAY 지갑</div>
        <div className="wallet-balance">7,200 XP</div>
        <div className="wallet-subtitle">보유 XP: 7,200 XP</div>
        <div className="wallet-subtitle">이번 주 적립: +3,000 XP</div>
        
        <div className="usage-list">
          <div className="card-subtitle" style={{ fontWeight: 600, marginBottom: "8px" }}>
            사용 내역
          </div>
          <div className="usage-item">· 서면 카페 A – 1,500 XP 사용 (아메리카노 1잔)</div>
          <div className="usage-item">· 광안리 포장마차 – 2,000 XP 사용 (오뎅 + 튀김)</div>
          <div className="usage-item">· 감천문화마을 입장/체험 – 1,000 XP 사용</div>
        </div>
      </div>
      
      <div className="pass-card">
        <div className="pass-card-title">부산 XP Pass (유료 멤버십 예시)</div>
        <div className="pass-price">월 3,900원 · 구독형 멤버십</div>
        
        <div style={{ marginTop: "16px" }}>
          <div className="pass-benefit">챌린지 리워드 2배 적립</div>
          <div className="pass-benefit">제휴 카페/식당 상시 5~10% 할인</div>
          <div className="pass-benefit">나만의 '기억 지도' 무제한 저장</div>
          <div className="pass-benefit">AI 자동 숏폼 고급 편집 탭</div>
          <div className="pass-benefit">부산 주요 축제·행사 Pro 미션 우선 참여</div>
        </div>
        
        <div className="button-group" style={{ marginTop: "20px" }}>
          <button className="button-primary" style={{ backgroundColor: "#ffffff", color: "#0066cc" }}>
            멤버십 플랜 보기
          </button>
          <button className="button-secondary" style={{ borderColor: "#ffffff", color: "#ffffff" }}>
            로컬 상점 리스트 보기
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
