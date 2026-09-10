// ③ 폰트 — Pretendard (대체 순서: Pretendard -> 맑은 고딕)
export default {
  title: '가이드/타이포그래피',
  parameters: {
    controls: { disable: true },
  },
};

export const 크기_위계 = {
  render: () => ({
    template: `
      <div style="max-width:960px; font-family:var(--font-sans); color:#1b2430;">
        <h3 style="font-size:18px; font-weight:600; margin:0 0 6px;">크기 위계</h3>
        <p style="font-size:12px; color:rgba(0,0,0,.6); margin:0 0 16px;">
          Pretendard Variable / Pretendard · 대체 순서: pretendard -> 맑은 고딕
        </p>

        <div style="border:1px solid #dfe4ec; border-radius:8px; overflow:hidden;">
          <div style="display:flex; align-items:center; padding:14px 16px; border-bottom:1px solid rgba(0,0,0,.06);">
            <span style="width:200px; font-size:12px; color:rgba(0,0,0,.6);">페이지 타이틀 · 24px / 800</span>
            <span style="font-size:24px; font-weight:800;">에너지 자급자족 현황</span>
          </div>
          <div style="display:flex; align-items:center; padding:14px 16px; border-bottom:1px solid rgba(0,0,0,.06);">
            <span style="width:200px; font-size:12px; color:rgba(0,0,0,.6);">KPI 값 · 24px / 800 · 상태색</span>
            <span style="font-size:24px; font-weight:800; color:#ab44c8;">1,284 kW</span>
          </div>
          <div style="display:flex; align-items:center; padding:14px 16px; border-bottom:1px solid rgba(0,0,0,.06);">
            <span style="width:200px; font-size:12px; color:rgba(0,0,0,.6);">박스 제목 · 18px / 600</span>
            <span style="font-size:18px; font-weight:600;">시간대별 발전량</span>
          </div>
          <div style="display:flex; align-items:center; padding:14px 16px; border-bottom:1px solid rgba(0,0,0,.06);">
            <span style="width:200px; font-size:12px; color:rgba(0,0,0,.6);">본문 · 테이블 셀 · 입력 · 14px / 400</span>
            <span style="font-size:14px; font-weight:400;">여수국가산업단지 태양광 발전설비 운영 현황</span>
          </div>
          <div style="display:flex; align-items:center; padding:14px 16px; border-bottom:1px solid rgba(0,0,0,.06);">
            <span style="width:200px; font-size:12px; color:rgba(0,0,0,.6);">필드 라벨 · 위젯 제목 · 12px / 600</span>
            <span style="font-size:12px; font-weight:600;">산단</span>
          </div>
          <div style="display:flex; align-items:center; padding:14px 16px; border-bottom:1px solid rgba(0,0,0,.06);">
            <span style="width:200px; font-size:12px; color:rgba(0,0,0,.6);">KPI 라벨 · 보조 정보 · 12px / 400 · 검정 60%</span>
            <span style="font-size:12px; font-weight:400; color:rgba(0,0,0,.6);">전일 대비 +3.2%</span>
          </div>
          <div style="display:flex; align-items:center; padding:14px 16px;">
            <span style="width:200px; font-size:12px; color:rgba(0,0,0,.6);">범례 · 캡션 · 11px / 400 · 검정 70%</span>
            <span style="font-size:11px; font-weight:400; color:rgba(0,0,0,.7);">단위: kWh · 출처: FEMS</span>
          </div>
        </div>
      </div>
    `,
  }),
};

export const 투명도_위계 = {
  render: () => ({
    template: `
      <div style="max-width:640px; font-family:var(--font-sans);">
        <h3 style="font-size:18px; font-weight:600; margin:0 0 6px;">투명도 위계 — 검정 알파로 층을 만든다</h3>
        <p style="font-size:12px; color:rgba(0,0,0,.6); margin:0 0 16px;">
          색을 늘리지 않고 알파만으로 정보의 층을 구분한다.
        </p>

        <div style="border:1px solid #dfe4ec; border-radius:8px; padding:8px 0;">
          <div style="padding:10px 16px; font-size:14px; color:#1b2430;">기본 텍스트 #1b2430 (100%)</div>
          <div style="padding:10px 16px; font-size:14px; color:rgba(0,0,0,.9);">위젯 제목 (90%)</div>
          <div style="padding:10px 16px; font-size:14px; color:rgba(0,0,0,.7);">범례 라벨 (70%)</div>
          <div style="padding:10px 16px; font-size:14px; color:rgba(0,0,0,.6);">보조 라벨 · KPI 제목 (60%)</div>
          <div style="padding:10px 16px; font-size:14px; color:rgba(0,0,0,.55);">비활성 탭 (55%)</div>
          <div style="padding:10px 16px; font-size:14px; color:rgba(0,0,0,.4);">플레이스홀더 · 빈 상태 문구 (40%)</div>
        </div>
      </div>
    `,
  }),
};

export const 지켜야_할_것 = {
  render: () => ({
    template: `
      <div style="max-width:640px; font-family:var(--font-sans);">
        <div style="border:1px solid #cfe3f5; background:#eef6fb; border-radius:8px; padding:16px 18px; font-size:13px; line-height:1.9;">
          <strong>지켜야 할 것 (웹표준 연계)</strong><br />
          · KPI 숫자는 24px + bold 유지 — 줄이면 4.5:1 대비가 요구되어 위반<br />
          · 작은 텍스트(범례·축)에는 상태색 대신 기본 텍스트색 + 색 마커 사용<br />
          · 다른 플랫폼 적용 시 이 폰트 체인과 크기·투명도 위계를 그대로 가져가면 라이트 테마 톤이 동일하게 재현됨
        </div>
      </div>
    `,
  }),
};
