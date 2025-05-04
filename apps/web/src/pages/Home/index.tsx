import { Card, Typography, Space } from "antd";

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

        <Card>
          <Title level={3}>주의사항</Title>
          <Paragraph type="danger">
            본 서비스는 오락과 재미를 위한 목적으로만 사용되어야 합니다. 생성된
            뉴스는 실제 사실과 무관하며, 이를 악의적인 목적으로 사용하거나 실제
            뉴스로 오인하게 만드는 행위는 엄격히 금지됩니다. 이러한 행위는 법적
            책임이 따를 수 있으며, 서비스 이용이 제한될 수 있습니다.
          </Paragraph>
        </Card>
      </Space>
    </div>
  );
};

export default HomePage;
