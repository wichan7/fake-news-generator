import styled from "styled-components";

export const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 20,
  padding: 40,
  backgroundColor: "#fff",
});

export const TitleWrapper = styled("h1")({
  display: "block",
  textAlign: "center",
});

export const InfoWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  textAlign: "end",
});

export const ContentWrapper = styled("div")({
  "& article": {
    lineHeight: 2,
  },
  "& header": {
    fontSize: 24,
    textAlign: "center",
  },
  "& p": {
    margin: "20px 0",
  },
});
