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
import useRecaptchaQuery from "../../../queries/recaptcha.query";

type FieldType = {
  title: string;
};

const NewsWritePage = () => {
  const [modal, contextHolder] = useModal();
  const navigate = useNavigate();
  const { useCreateNews } = useNewsQuery();
  const createNews = useCreateNews();
  const { useVerify } = useRecaptchaQuery();
  const { mutateAsync: verifyReCaptcha } = useVerify();

  const onFinish: FormProps<FieldType>["onFinish"] = async (
    values: FieldType,
  ) => {
    const { isValid: isCaptchaValid } = await verifyReCaptcha();
    if (!isCaptchaValid) {
      return modal.error({
        title: "뉴스 생성 실패",
        content: <p>다른 브라우저로 다시 시도해주세요.</p>,
      });
    }

    const news = await createNews.mutateAsync(values);
    if (news.id) {
      return modal.info({
        title: "뉴스 생성 완료",
        content: <p>뉴스가 생성되었습니다. 뉴스 페이지로 이동합니다.</p>,
        onOk: () => {
          navigate(`/news/${news.id}`);
        },
      });
    }
    return modal.error({
      title: "뉴스 생성 실패",
      content: <p>뉴스 생성에 실패했습니다. 다시 시도해주세요.</p>,
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
          <Flex justify="flex-end" style={{ marginTop: 50 }}>
            <Button
              type="primary"
              htmlType="submit"
              loading={createNews.isPending}
            >
              생성하기
            </Button>
          </Flex>
        </Card>
        <Card>
          This site is protected by reCAPTCHA and the Google{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noreferrer"
          >
            Terms of Service
          </a>{" "}
          apply.
        </Card>
      </S.FormContentWrapper>
      {contextHolder}
    </Form>
  );
};

export default NewsWritePage;
