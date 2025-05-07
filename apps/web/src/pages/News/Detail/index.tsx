import * as S from "./index.style";
import useNewsQuery from "../../../queries/news.query";
import { useParams } from "react-router-dom";
import { Button, Image, Typography } from "antd";
import bannerJokeSrc from "../../../assets/banner_joke.png";
import bannerNewsSrc from "../../../assets/banner_news_1.png";
import { useState } from "react";
import React from "react";

const NewsDetailPage = () => {
  const { id } = useParams();
  const { useFetchNews } = useNewsQuery();
  const news = useFetchNews(id as string);

  const [isFolding, setIsFolding] = useState(true); // todo: 더보가 처리

  const handleClickMore = () => {
    setIsFolding(false);
  };

  return (
    <S.Container>
      {!news.isLoading && (
        <>
          <S.TitleWrapper>
            <Typography.Title level={2}>{news.data?.title}</Typography.Title>
          </S.TitleWrapper>
          <S.InfoWrapper>
            <Typography.Text>
              입력일: {news.data?.created_at.format("YYYY-MM-DD HH:mm")}
            </Typography.Text>
            <Typography.Text>
              수정일: {news.data?.updated_at.format("YYYY-MM-DD HH:mm")}
            </Typography.Text>
            <Typography.Text>작성: 김현지 기자</Typography.Text>
          </S.InfoWrapper>
          {isFolding && <Image src={bannerNewsSrc} preview={false} />}
          <S.ContentWrapper>
            {isFolding && (
              <>
                {(news.data?.content || "").split("\n").map((value, idx) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  <React.Fragment key={idx}>
                    {value}
                    <br />
                  </React.Fragment>
                ))}
                <S.GradientBox>
                  <div
                    style={{
                      position: "absolute",
                      width: "100%",
                      textAlign: "center",
                      bottom: 20,
                    }}
                  >
                    <Button
                      size="large"
                      type="primary"
                      block
                      style={{ height: 50 }}
                      onClick={handleClickMore}
                    >
                      내용 더보기
                    </Button>
                  </div>
                </S.GradientBox>
              </>
            )}
            {!isFolding && <Image src={bannerJokeSrc} preview={false} />}
          </S.ContentWrapper>
        </>
      )}
    </S.Container>
  );
};

export default NewsDetailPage;
