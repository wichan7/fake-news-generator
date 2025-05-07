import {
  Button,
  Card,
  Flex,
  Form,
  type FormProps,
  Input,
  Typography,
} from "antd";
import CommonWarning from "../../../components/Description/CommonWarning";
import * as S from "./index.style";
import useNewsQuery from "../../../queries/news.query";
import { useNavigate } from "react-router-dom";
import useModal from "antd/lib/modal/useModal";

type FieldType = {
  title: string;
};

const NewsWritePage = () => {
  const [modal, contextHolder] = useModal();
  const navigate = useNavigate();
  const { useCreateNews } = useNewsQuery();
  const createNews = useCreateNews();

  const onFinish: FormProps<FieldType>["onFinish"] = (values: FieldType) => {
    createNews.mutateAsync(values).then((res) => {
      modal.info({
        title: "뉴스 생성 완료",
        content: <p>뉴스가 생성되었습니다. 뉴스 페이지로 이동합니다.</p>,
        onOk: () => {
          navigate(`/news/${res.id}`);
        },
      });
    });
  };

  return (
    <Form name="news-write" onFinish={onFinish}>
      <S.FormContentWrapper>
        <CommonWarning />
        <Card>
          <Typography.Title level={3}>뉴스 생성하기</Typography.Title>
          <Form.Item<FieldType>
            name="title"
            label="뉴스 제목"
            required
            rules={[
              { required: true, message: "뉴스 제목을 입력해야 합니다." },
              { min: 6, message: "뉴스 제목은 6자 이상이여야 합니다." },
            ]}
          >
            <Input.TextArea
              maxLength={50}
              autoSize={{ minRows: 2 }}
              showCount
            />
          </Form.Item>
        </Card>
        <Flex justify="flex-end">
          <Form.Item label={null}>
            <Button
              type="primary"
              htmlType="submit"
              loading={createNews.isPending}
            >
              생성하기
            </Button>
          </Form.Item>
        </Flex>
      </S.FormContentWrapper>
      {contextHolder}
    </Form>
  );
};

export default NewsWritePage;
