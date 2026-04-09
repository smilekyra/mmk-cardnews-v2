import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { POPEYE } from "../magazine-styles";

interface CardProps {
  durationInFrames: number;
}

export const Card01: React.FC<CardProps> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  const FADE_IN = 9;
  const TITLE_IN = 15;
  const BODY_IN = 24;
  const FADE_OUT = 15;

  const bgOpacity = interpolate(frame, [0, FADE_IN], [0, 1], { extrapolateRight: "clamp" });
  const tagOpacity = interpolate(frame, [BODY_IN, BODY_IN + 10], [0, 1], { extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [24, 0], { extrapolateRight: "clamp" });
  const bodyOpacity = interpolate(frame, [BODY_IN + 6, BODY_IN + 18], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - FADE_OUT, durationInFrames], [1, 0], { extrapolateLeft: "clamp" });

  const accentColor = "#D4563A";

  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      {/* Background image */}
      <Img
        src={staticFile("card-01.png")}
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: bgOpacity }}
      />

      {/* Overlay gradient — POPEYE cover: gentle warm */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: POPEYE.overlay.cover,
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
          opacity: tagOpacity,
        }}
      >
        <div
          style={{
            width: 36,
            height: 3,
            background: accentColor,
          }}
        />
        <span
          style={{
            ...POPEYE.typography.headline,
            fontSize: 28,
            color: "rgba(255,255,255,0.75)",
            letterSpacing: "0.12em",
          }}
        >
          DAEJEON BREAD TOUR
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
        {/* Accent tag */}
        <div
          style={{
            display: "inline-block",
            background: accentColor,
            paddingLeft: 18,
            paddingRight: 18,
            paddingTop: 8,
            paddingBottom: 8,
            marginBottom: 24,
            opacity: tagOpacity,
          }}
        >
          <span
            style={{
              ...POPEYE.typography.headline,
              fontSize: 26,
              color: "#FFFFFF",
              letterSpacing: "0.1em",
            }}
          >
            TOP 3
          </span>
        </div>

        {/* Main title */}
        <h2
          style={{
            fontFamily: "'Noto Sans KR', sans-serif",
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.3,
            color: "#FFFFFF",
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            marginBottom: 20,
            letterSpacing: "-0.01em",
          }}
        >
          대전가면 꼭 가야 하는
          <br />
          빵집 Top 3
        </h2>

        {/* Subtitle */}
        <p
          style={{
            ...POPEYE.typography.body,
            fontSize: 34,
            color: "rgba(255,255,255,0.80)",
            lineHeight: 1.55,
            opacity: bodyOpacity,
          }}
        >
          빵지순례 성지 대전,
          <br />
          꼭 가봐야 할 세 곳을 소개해요
        </p>
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
        1 / 3
      </div>
    </AbsoluteFill>
  );
};
