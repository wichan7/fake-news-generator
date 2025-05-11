import styled from "styled-components";

export const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 20,
  padding: "40px 20px",
  backgroundColor: "#fff",
});

export const TitleWrapper = styled("div")({
  display: "block",
  textAlign: "center",
});

export const DescriptionContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  textAlign: "end",
});

export const BannerWrapper = styled("div")({});

export const ContentWrapper = styled("div")({
  position: "relative",
  lineHeight: 2,
});

export const GradientBox = styled("div")({
  background: "linear-gradient(to bottom, transparent, white 80%, white)",
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "100%",
});

export const MoreButtonWrapper = styled("div")({
  position: "absolute",
  bottom: 0,
  width: "100%",
  textAlign: "center",
});
