import { Card, Typography, Space } from "antd";
import CommonWarning from "../../components/Description/CommonWarning";

const { Title, Paragraph } = Typography;

const HomePage = () => {
  return (
    <div style={{ padding: "24px 0" }}>
      <Space direction="vertical" size="large">
        <Card>
          <Title level={2}>가짜 뉴스 생성기</Title>
          <Paragraph>
            가짜 뉴스 생성기는 AI 기술을 활용하여 재미있는 뉴스 기사를 생성하는
            도구입니다. 친구들과의 대화나 소셜 미디어에서 웃음을 주기 위한
            가벼운 목적으로 사용해보세요.
          </Paragraph>
        </Card>

        <Card>
          <Title level={3}>주요 기능</Title>
          <Space direction="vertical" size="middle">
            <Paragraph>
              • AI 기반 뉴스 생성: 최신 AI 기술을 활용하여 재미있는 뉴스 기사를
              생성합니다.
            </Paragraph>
            <Paragraph>
              • 다양한 주제 지원: 일상생활, 엔터테인먼트, 스포츠 등 다양한
              분야의 재미있는 뉴스를 생성할 수 있습니다.
            </Paragraph>
            <Paragraph>
              • 창의적인 콘텐츠: 상상력과 유머 감각을 자극하는 독특한 뉴스를
              만들어보세요.
            </Paragraph>
          </Space>
        </Card>

        <Card>
          <Title level={3}>사용 방법</Title>
          <Space direction="vertical" size="middle">
            <Paragraph>1. 키워드나 주요 내용을 입력하세요.</Paragraph>
            <Paragraph>
              2. AI가 생성한 재미있는 뉴스를 확인하고 친구들과 공유해보세요.
            </Paragraph>
          </Space>
        </Card>

        <CommonWarning />
      </Space>
    </div>
  );
};

export default HomePage;
