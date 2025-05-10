import * as S from "./index.style";
import useNewsQuery from "../../../queries/news.query";
import { useParams } from "react-router-dom";
import { Breadcrumb, Button, Image, Typography } from "antd";
import bannerJokeSrc from "../../../assets/banner_joke.png";
import bannerNewsSrc from "../../../assets/banner_news_1.png";
import { useState } from "react";
import React from "react";
import Confetti from "../../../components/Confetti";

const NewsDetailPage = () => {
  const { id } = useParams();
  const { useFetchNews } = useNewsQuery();
  const news = useFetchNews(id as string);

  const [isFolding, setIsFolding] = useState(true);

  /**
   * handlers
   */
  const handleClickMore = () => {
    setIsFolding(false);
  };

  /**
   * renderers
   */
  const renderBreadcrumb = () => {
    return <Breadcrumb items={[{ title: "사회" }, { title: "사회 일반" }]} />;
  };
  const renderContent = () => {
    return (news.data?.content || "").split("\n").map((value, idx) => (
      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
      <React.Fragment key={idx}>
        {value}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <S.Container>
      {!isFolding && (
        <Confetti type="crossfire" autorun={{ speed: 3, duration: 2000 }} />
      )}
      {!news.isLoading && (
        <>
          {renderBreadcrumb()}
          <S.TitleWrapper>
            <Typography.Title level={2}>{news.data?.title}</Typography.Title>
          </S.TitleWrapper>
          <S.DescriptionContainer>
            <Typography.Text>
              입력: {news.data?.created_at.format("YYYY-MM-DD HH:mm")}
            </Typography.Text>
            <Typography.Text>
              수정: {news.data?.updated_at.format("YYYY-MM-DD HH:mm")}
            </Typography.Text>
          </S.DescriptionContainer>
          <S.BannerWrapper>
            {isFolding ? (
              <Image src={bannerNewsSrc} preview={false} />
            ) : (
              <Image src={bannerJokeSrc} preview={false} />
            )}
          </S.BannerWrapper>
          <S.ContentWrapper>
            {isFolding ? (
              <>
                {renderContent()}
                <S.GradientBox>
                  <S.MoreButtonWrapper>
                    <Button
                      size="large"
                      type="primary"
                      block
                      onClick={handleClickMore}
                    >
                      내용 더보기
                    </Button>
                  </S.MoreButtonWrapper>
                </S.GradientBox>
              </>
            ) : (
              <></>
            )}
          </S.ContentWrapper>
        </>
      )}
    </S.Container>
  );
};

export default NewsDetailPage;
