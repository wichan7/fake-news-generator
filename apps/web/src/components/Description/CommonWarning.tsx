import { Card, Typography } from "antd";

const CommonWarning = () => {
  return (
    <Card>
      <Typography.Title level={3}>주의사항</Typography.Title>
      <Typography.Paragraph type="danger">
        본 서비스는 오락과 재미를 위한 목적으로만 사용되어야 합니다. 생성된
        뉴스는 실제 사실과 무관하며, 이를 악의적인 목적으로 사용하는 행위는
        엄격히 금지됩니다. 이러한 행위는 법적 책임이 따를 수 있으며, 서비스
        이용이 제한될 수 있습니다.
      </Typography.Paragraph>
    </Card>
  );
};

export default CommonWarning;
