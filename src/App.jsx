import React, { useEffect, useRef } from "react";

function App() {
  return (
    <div className="app-root">
      {/* 섹션 1 - 랜딩 / 인트로 */}
      <Section1 />
      
      {/* 섹션 2 - 챌린지 지도/미션 리스트 */}
      <Section2 />
      
      {/* 섹션 3 - 미션 상세 & 인증 업로드 */}
      <Section3 />
      
      {/* 섹션 4 - 리워드 & 부산 XP 패스 (통합) */}
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
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Leaflet 지도 초기화
    if (mapRef.current && !mapInstanceRef.current && window.L) {
      const map = window.L.map(mapRef.current, {
        center: [35.1796, 129.0756], // 부산 중심 좌표
        zoom: 12,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
        dragging: false,
        touchZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false
      });

      // OpenStreetMap 타일 레이어 추가
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
      }).addTo(map);

      mapInstanceRef.current = map;

      // 부산 주요 지역 마커 추가 (더 많은 핀포인트)
      const locations = [
        { name: '부산대', lat: 35.2333, lng: 129.0833, type: 'campus' },
        { name: '서면', lat: 35.1579, lng: 129.0594, type: 'shopping' },
        { name: '해운대', lat: 35.1631, lng: 129.1636, type: 'beach' },
        { name: '감천문화마을', lat: 35.0976, lng: 129.0104, type: 'culture' },
        { name: '광안리', lat: 35.1530, lng: 129.1186, type: 'beach' },
        { name: '송도', lat: 35.0789, lng: 129.0186, type: 'beach' },
        { name: '자갈치시장', lat: 35.0976, lng: 129.0264, type: 'market' },
        { name: '국제시장', lat: 35.1019, lng: 129.0264, type: 'market' },
        { name: '태종대', lat: 35.0547, lng: 129.0844, type: 'nature' },
        { name: '영도대교', lat: 35.0906, lng: 129.0403, type: 'landmark' },
        { name: '오륙도', lat: 35.0956, lng: 129.1247, type: 'nature' },
        { name: '동래온천', lat: 35.2056, lng: 129.0819, type: 'spa' },
        { name: '범어사', lat: 35.3131, lng: 129.2703, type: 'temple' },
        { name: '기장', lat: 35.2444, lng: 129.2139, type: 'beach' },
        { name: '부산역', lat: 35.1156, lng: 129.0422, type: 'transport' },
        { name: '남포동', lat: 35.0976, lng: 129.0264, type: 'shopping' },
        { name: 'BIFF광장', lat: 35.0976, lng: 129.0264, type: 'culture' },
        { name: '용두산공원', lat: 35.1019, lng: 129.0306, type: 'park' },
        { name: '송림공원', lat: 35.1579, lng: 129.0594, type: 'park' },
        { name: '부산수영만', lat: 35.1530, lng: 129.1186, type: 'nature' }
      ];

      // 마커 색상 타입별 설정
      const markerColors = {
        campus: '#0066cc',
        shopping: '#ff6b6b',
        beach: '#4ecdc4',
        culture: '#ffd93d',
        market: '#ff9800',
        nature: '#6bcf7f',
        landmark: '#9b59b6',
        spa: '#e74c3c',
        temple: '#8e44ad',
        transport: '#34495e',
        park: '#27ae60'
      };

      locations.forEach(loc => {
        const color = markerColors[loc.type] || '#0066cc';
        const marker = window.L.marker([loc.lat, loc.lng], {
          icon: window.L.divIcon({
            className: 'custom-marker',
            html: `<div style="background: ${color}; color: white; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; font-size: 20px; box-shadow: 0 3px 6px rgba(0,0,0,0.4); border: 3px solid white; animation: pulse-marker 2s infinite;">📍</div>`,
            iconSize: [32, 32],
            iconAnchor: [16, 16]
          })
        }).addTo(map);

        marker.bindPopup(`<strong style="font-size: 14px;">${loc.name}</strong><br><span style="font-size: 11px; color: #666;">${loc.type}</span>`);
      });

      // 실시간 유저 발자취 마커 (더미) - 더 많이 추가
      const userLocations = [
        { lat: 35.2350, lng: 129.0850 },
        { lat: 35.1600, lng: 129.0610 },
        { lat: 35.1650, lng: 129.1650 },
        { lat: 35.0990, lng: 129.0120 },
        { lat: 35.2370, lng: 129.0870 },
        { lat: 35.1620, lng: 129.0630 },
        { lat: 35.1540, lng: 129.1200 },
        { lat: 35.0800, lng: 129.0200 },
        { lat: 35.0980, lng: 129.0280 },
        { lat: 35.1020, lng: 129.0280 },
        { lat: 35.0560, lng: 129.0860 },
        { lat: 35.0920, lng: 129.0420 },
        { lat: 35.0960, lng: 129.1260 },
        { lat: 35.2060, lng: 129.0830 },
        { lat: 35.3140, lng: 129.2720 },
        { lat: 35.2450, lng: 129.2150 },
        { lat: 35.1160, lng: 129.0440 },
        { lat: 35.0980, lng: 129.0280 },
        { lat: 35.1020, lng: 129.0320 },
        { lat: 35.1580, lng: 129.0610 }
      ];

      userLocations.forEach((loc, idx) => {
        setTimeout(() => {
          const userMarker = window.L.circleMarker([loc.lat, loc.lng], {
            radius: 7,
            fillColor: '#ff4444',
            color: '#ffffff',
            weight: 2,
            opacity: 0.9,
            fillOpacity: 0.9
          }).addTo(map);
          
          // 애니메이션 효과
          let isExpanding = true;
          setInterval(() => {
            const currentRadius = userMarker.options.radius;
            if (isExpanding) {
              userMarker.setRadius(Math.min(currentRadius + 1, 10));
              if (currentRadius >= 10) isExpanding = false;
            } else {
              userMarker.setRadius(Math.max(currentRadius - 1, 7));
              if (currentRadius <= 7) isExpanding = true;
            }
          }, 800);
        }, idx * 300);
      });
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section className="section">
      <h2 className="section-title">오늘의 부산 챌린지 지도</h2>
      <p className="section-subtitle">
        부산대 · 서면 · 해운대 · 광안리 · 감천문화마을까지,<br />
        미션을 수행하며 이동하는 경험 동선
      </p>
      
      {/* 실시간 지도 영역 */}
      <div className="map-container">
        <div className="map-header">
          <span className="map-badge">실시간</span>
          <span className="map-users-count">현재 372명 활동 중</span>
        </div>
        
        {/* 실제 지도 영역 */}
        <div ref={mapRef} className="interactive-map" style={{ height: '280px', borderRadius: '12px', overflow: 'hidden' }}></div>
        
        <div className="map-legend">
          <div className="legend-item">
            <span className="legend-dot legend-dot-active"></span>
            <span>실시간 활동 중</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot legend-dot-completed"></span>
            <span>챌린지 완료</span>
          </div>
          <div className="legend-item">
            <span className="legend-line"></span>
            <span>추천 경로</span>
          </div>
        </div>
        
        <div style={{ fontSize: "11px", color: "#666", marginTop: "12px", textAlign: "center" }}>
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

// 섹션 4: 리워드 & 부산 XP 패스 (통합)
function Section4() {
  return (
    <section className="section">
      <h2 className="section-title">리워드 & 부산 XP 패스</h2>
      <p className="section-subtitle">
        챌린지를 깨면 부산 XP 토큰이 쌓이고<br />
        부산 XP 패스로 로컬 상점에서 바로 사용 가능한 구조
      </p>
      
      {/* 내 지갑 */}
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
      
      {/* 멤버십 플랜 비교 */}
      <div className="card">
        <div className="card-title">멤버십 플랜</div>
        
        <div className="plan-comparison">
          <div className="plan-item plan-free">
            <div className="plan-name">무료 플랜</div>
            <div className="plan-price">₩0</div>
            <ul className="plan-features">
              <li>기본 챌린지 참여</li>
              <li>리워드 XP 적립</li>
              <li>기본 숏폼 생성</li>
            </ul>
          </div>
          
          <div className="plan-item plan-premium">
            <div className="plan-badge-premium">추천</div>
            <div className="plan-name">부산 XP Pass</div>
            <div className="plan-price">₩3,900<span className="plan-period">/월</span></div>
            <ul className="plan-features">
              <li>✓ 리워드 2배 적립</li>
              <li>✓ 제휴 상점 5~10% 할인</li>
              <li>✓ 기억 지도 무제한 저장</li>
              <li>✓ AI 고급 숏폼 편집</li>
              <li>✓ Pro 미션 우선 참여</li>
              <li>✓ 실시간 지도 고급 기능</li>
            </ul>
            <button className="button-primary" style={{ marginTop: "12px" }}>
              지금 시작하기
            </button>
          </div>
        </div>
      </div>
      
      {/* 제휴 로컬 상점 리스트 */}
      <div className="card">
        <div className="card-title">제휴 로컬 상점</div>
        <div className="card-subtitle">부산 XP로 사용 가능한 로컬 비즈니스</div>
        
        <div className="store-category">
          <div className="category-title">🍽️ 카페 & 식당</div>
          <div className="store-list">
            <div className="store-item">
              <div className="store-info">
                <div className="store-name">서면 골목 카페 A</div>
                <div className="store-desc">로컬 원두 커피 · 분위기 좋은 공간</div>
                <div className="store-benefit">XP 1,500 = 아메리카노 1잔</div>
              </div>
              <div className="store-discount">멤버십 10% 추가 할인</div>
            </div>
            
            <div className="store-item">
              <div className="store-info">
                <div className="store-name">광안리 해변 포장마차</div>
                <div className="store-desc">신선한 해산물 · 야경 맛집</div>
                <div className="store-benefit">XP 2,000 = 오뎅 세트</div>
              </div>
              <div className="store-discount">멤버십 5% 추가 할인</div>
            </div>
            
            <div className="store-item">
              <div className="store-info">
                <div className="store-name">부산대 동네 빵집</div>
                <div className="store-desc">수제 빵 · 청년 상권</div>
                <div className="store-benefit">XP 1,200 = 빵 세트</div>
              </div>
              <div className="store-discount">멤버십 8% 추가 할인</div>
            </div>
          </div>
        </div>
        
        <div className="store-category" style={{ marginTop: "20px" }}>
          <div className="category-title">🎨 체험 & 문화</div>
          <div className="store-list">
            <div className="store-item">
              <div className="store-info">
                <div className="store-name">감천문화마을 입장권</div>
                <div className="store-desc">부산 대표 관광지 · 포토존</div>
                <div className="store-benefit">XP 1,000 = 입장권 1매</div>
              </div>
              <div className="store-discount">멤버십 무료 입장</div>
            </div>
            
            <div className="store-item">
              <div className="store-info">
                <div className="store-name">해운대 해변 체험</div>
                <div className="store-desc">수상레저 · 해양 액티비티</div>
                <div className="store-benefit">XP 3,500 = 체험권 1매</div>
              </div>
              <div className="store-discount">멤버십 15% 추가 할인</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 멤버십 혜택 상세 */}
      <div className="card">
        <div className="card-title">멤버십 혜택 상세</div>
        
        <div className="benefit-grid">
          <div className="benefit-item">
            <div className="benefit-icon">🎯</div>
            <div className="benefit-title">2배 적립</div>
            <div className="benefit-desc">모든 챌린지 리워드가 2배로 적립됩니다</div>
          </div>
          
          <div className="benefit-item">
            <div className="benefit-icon">🗺️</div>
            <div className="benefit-title">기억 지도</div>
            <div className="benefit-desc">나만의 여행 경로를 무제한으로 저장하세요</div>
          </div>
          
          <div className="benefit-item">
            <div className="benefit-icon">🎬</div>
            <div className="benefit-title">고급 편집</div>
            <div className="benefit-desc">AI 자동 숏폼에 로고·템플릿 자동 적용</div>
          </div>
          
          <div className="benefit-item">
            <div className="benefit-icon">⭐</div>
            <div className="benefit-title">Pro 미션</div>
            <div className="benefit-desc">한정 미션에 우선 참여할 수 있습니다</div>
          </div>
        </div>
        
        <div className="button-group" style={{ marginTop: "20px" }}>
          <button className="button-primary">로컬패스 가입하기</button>
          <button className="button-secondary">더 알아보기</button>
        </div>
      </div>
    </section>
  );
}

export default App;
