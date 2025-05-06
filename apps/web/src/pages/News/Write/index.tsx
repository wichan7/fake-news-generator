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

type FieldType = {
  title: string;
};

const NewsWritePage = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values: FieldType) => {};

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
            ]}
          >
            <Input maxLength={100} />
          </Form.Item>
        </Card>
        <Flex justify="flex-end">
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              생성하기
            </Button>
          </Form.Item>
        </Flex>
      </S.FormContentWrapper>
    </Form>
  );
};

export default NewsWritePage;
