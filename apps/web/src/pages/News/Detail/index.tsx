import * as S from "./index.style";
import useNewsQuery from "../../../queries/newsQuery";
import { useParams } from "react-router-dom";
import { Typography } from "antd";

const NewsDetailPage = () => {
  const { id } = useParams();
  const { useFetchNews } = useNewsQuery();
  const news = useFetchNews(id as string);

  return (
    <S.Container>
      {!news.isLoading && (
        <>
          <S.TitleWrapper><Typography.Title level={2}>{news.data?.title}</Typography.Title></S.TitleWrapper>
          <S.InfoWrapper>
            <Typography.Text>입력일: {news.data?.created_at.format("YYYY-MM-DD HH:mm:ss")}</Typography.Text>
            <Typography.Text>수정일: {news.data?.updated_at.format("YYYY-MM-DD HH:mm:ss")}</Typography.Text>
          </S.InfoWrapper>
          <S.ContentWrapper
            // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
            dangerouslySetInnerHTML={{ __html: news.data?.content || "" }}
          />
        </>
      )}
    </S.Container>
  );
};

export default NewsDetailPage;
