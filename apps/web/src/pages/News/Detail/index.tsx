import * as S from "./index.style";
import useNewsQuery from "../../../queries/newsQuery";
import { useParams } from "react-router-dom";
import { Image, Typography } from "antd";
import bannerJokeSrc from "../../../assets/banner_joke.png";
import { useState } from "react";

const NewsDetailPage = () => {
  const { id } = useParams();
  const { useFetchNews } = useNewsQuery();
  const news = useFetchNews(id as string);

  const [folded, setFolded] = useState(true); // todo: 더보가 처리

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
          </S.InfoWrapper>
          <S.ContentWrapper
            // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
            dangerouslySetInnerHTML={{ __html: news.data?.content || "" }}
          />
          <Image src={bannerJokeSrc} />
        </>
      )}
    </S.Container>
  );
};

export default NewsDetailPage;
