import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { POPEYE } from "../magazine-styles";

interface CardProps {
  durationInFrames: number;
}

export const Card02: React.FC<CardProps> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  const FADE_IN = 9;
  const TITLE_IN = 15;
  const BODY_IN = 24;
  const FADE_OUT = 15;

  const bgOpacity = interpolate(frame, [0, FADE_IN], [0, 1], { extrapolateRight: "clamp" });
  const rankOpacity = interpolate(frame, [TITLE_IN - 4, TITLE_IN + 8], [0, 1], { extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [20, 0], { extrapolateRight: "clamp" });
  const bodyOpacity = interpolate(frame, [BODY_IN, BODY_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - FADE_OUT, durationInFrames], [1, 0], { extrapolateLeft: "clamp" });

  const accentColor = "#D4563A";

  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      {/* Background image */}
      <Img
        src={staticFile("card-02.png")}
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: bgOpacity }}
      />

      {/* Overlay gradient — POPEYE content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: POPEYE.overlay.content,
        }}
      />

      {/* Rank badge — top left */}
      <div
        style={{
          position: "absolute",
          top: 64,
          left: 72,
          opacity: rankOpacity,
        }}
      >
        <div
          style={{
            background: accentColor,
            width: 80,
            height: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 36,
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
            }}
          >
            #1
          </span>
        </div>
      </div>

      {/* Top right tag */}
      <div
        style={{
          position: "absolute",
          top: 80,
          right: 72,
          opacity: rankOpacity,
        }}
      >
        <span
          style={{
            ...POPEYE.typography.headline,
            fontSize: 24,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.1em",
          }}
        >
          SINCE 1956
        </span>
      </div>

      {/* Bottom text block */}
      <div
        style={{
          position: "absolute",
          bottom: 96,
          left: 72,
          right: 72,
        }}
      >
        {/* English name */}
        <div style={{ marginBottom: 12, opacity: titleOpacity }}>
          <span
            style={{
              ...POPEYE.typography.headline,
              fontSize: 28,
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.1em",
            }}
          >
            SUNGSIMDANG
          </span>
        </div>

        {/* Korean name */}
        <h2
          style={{
            fontFamily: "'Noto Sans KR', sans-serif",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#FFFFFF",
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            marginBottom: 24,
            letterSpacing: "-0.02em",
          }}
        >
          성심당
        </h2>

        {/* Accent divider */}
        <div
          style={{
            width: 48,
            height: 3,
            background: accentColor,
            marginBottom: 24,
            opacity: bodyOpacity,
          }}
        />

        {/* Description */}
        <p
          style={{
            ...POPEYE.typography.body,
            fontSize: 34,
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.6,
            opacity: bodyOpacity,
            marginBottom: 28,
          }}
        >
          1956년 대전역 앞 찐빵 노점에서 시작한
          <br />
          70년 전통의 전설.
        </p>

        {/* Key fact tags */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            opacity: bodyOpacity,
          }}
        >
          {[
            "미슐랭 가이드 등재",
            "특허 튀김소보로 — 소보로 + 팥빵 + 도너츠",
            "평균 대기 2~3시간도 감수",
          ].map((fact) => (
            <div
              key={fact}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: accentColor,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "'Noto Sans KR', sans-serif",
                  fontSize: 30,
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.70)",
                  lineHeight: 1.5,
                }}
              >
                {fact}
              </span>
            </div>
          ))}
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
        2 / 3
      </div>
    </AbsoluteFill>
  );
};
