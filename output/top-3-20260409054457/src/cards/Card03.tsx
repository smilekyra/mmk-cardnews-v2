import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { POPEYE } from "../magazine-styles";

interface CardProps {
  durationInFrames: number;
}

export const Card03: React.FC<CardProps> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  const FADE_IN = 9;
  const TITLE_IN = 15;
  const BODY_IN = 24;
  const SECTION2_IN = 60;
  const FADE_OUT = 15;

  const bgOpacity = interpolate(frame, [0, FADE_IN], [0, 1], { extrapolateRight: "clamp" });
  const headerOpacity = interpolate(frame, [TITLE_IN - 4, TITLE_IN + 8], [0, 1], { extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [20, 0], { extrapolateRight: "clamp" });
  const body1Opacity = interpolate(frame, [BODY_IN, BODY_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const body2Opacity = interpolate(frame, [SECTION2_IN, SECTION2_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const ctaOpacity = interpolate(frame, [SECTION2_IN + 20, SECTION2_IN + 32], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - FADE_OUT, durationInFrames], [1, 0], { extrapolateLeft: "clamp" });

  const accentColor = "#D4563A";

  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      {/* Background image */}
      <Img
        src={staticFile("card-03.png")}
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: bgOpacity }}
      />

      {/* Overlay gradient — POPEYE closing: slightly gentler */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.82) 55%, rgba(0,0,0,0.92) 100%)",
        }}
      />

      {/* Top label */}
      <div
        style={{
          position: "absolute",
          top: 64,
          left: 72,
          right: 72,
          display: "flex",
          alignItems: "center",
          gap: 16,
          opacity: headerOpacity,
        }}
      >
        <div style={{ width: 36, height: 3, background: accentColor }} />
        <span
          style={{
            ...POPEYE.typography.headline,
            fontSize: 26,
            color: "rgba(255,255,255,0.65)",
            letterSpacing: "0.1em",
          }}
        >
          ALSO WORTH VISITING
        </span>
      </div>

      {/* Bottom text block */}
      <div
        style={{
          position: "absolute",
          bottom: 84,
          left: 72,
          right: 72,
        }}
      >
        {/* Section 1 — 몽심 */}
        <div style={{ marginBottom: 36 }}>
          {/* Rank + name row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              marginBottom: 10,
              opacity: titleOpacity,
              transform: `translateY(${titleY}px)`,
            }}
          >
            <div
              style={{
                background: accentColor,
                paddingLeft: 14,
                paddingRight: 14,
                paddingTop: 6,
                paddingBottom: 6,
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 26,
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                #2
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Noto Sans KR', sans-serif",
                fontSize: 52,
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
              }}
            >
              몽심
            </h2>
            <span
              style={{
                ...POPEYE.typography.headline,
                fontSize: 24,
                color: "rgba(255,255,255,0.45)",
                letterSpacing: "0.08em",
              }}
            >
              MONGSIM
            </span>
          </div>

          {/* 몽심 description */}
          <p
            style={{
              ...POPEYE.typography.body,
              fontSize: 32,
              color: "rgba(255,255,255,0.80)",
              lineHeight: 1.55,
              opacity: body1Opacity,
            }}
          >
            대전 빵축제 2022 & 2024 연속 1위.
            <br />
            MZ세대 원픽, 세계 최초 소금식빵.
          </p>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: 1,
            background: "rgba(255,255,255,0.20)",
            marginBottom: 32,
            opacity: body2Opacity,
          }}
        />

        {/* Section 2 — 하레하레 */}
        <div style={{ marginBottom: 36 }}>
          {/* Rank + name row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              marginBottom: 10,
              opacity: body2Opacity,
            }}
          >
            <div
              style={{
                background: "rgba(212,86,58,0.70)",
                paddingLeft: 14,
                paddingRight: 14,
                paddingTop: 6,
                paddingBottom: 6,
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 26,
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                #3
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Noto Sans KR', sans-serif",
                fontSize: 52,
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
              }}
            >
              하레하레
            </h2>
            <span
              style={{
                ...POPEYE.typography.headline,
                fontSize: 24,
                color: "rgba(255,255,255,0.45)",
                letterSpacing: "0.08em",
              }}
            >
              HARE HARE
            </span>
          </div>

          {/* 하레하레 description */}
          <p
            style={{
              ...POPEYE.typography.body,
              fontSize: 32,
              color: "rgba(255,255,255,0.80)",
              lineHeight: 1.55,
              opacity: body2Opacity,
            }}
          >
            세계 제과 대회 금메달리스트 셰프.
            <br />
            쌀가루 빵과 화려한 과일 타르트.
          </p>
        </div>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            opacity: ctaOpacity,
          }}
        >
          <div style={{ width: 36, height: 2, background: accentColor }} />
          <p
            style={{
              fontFamily: "'Noto Sans KR', sans-serif",
              fontSize: 30,
              fontWeight: 400,
              color: "rgba(255,255,255,0.60)",
              lineHeight: 1.5,
            }}
          >
            대전 빵지순례, 준비됐나요?
          </p>
        </div>
      </div>

      {/* Page number */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 28,
          fontWeight: 300,
          letterSpacing: 3,
          color: "rgba(255,255,255,0.4)",
        }}
      >
        3 / 3
      </div>
    </AbsoluteFill>
  );
};
