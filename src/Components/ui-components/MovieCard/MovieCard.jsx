import {React} from 'react';

import {Card, Image, ConfigProvider, Typography, Progress, Rate, Flex, Tag} from 'antd';
import './MovieCard.css';

const {Title, Text, Paragraph} = Typography;

const MovieCard = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {bodyPadding: 0, boxShadowTertiary: '0px 4px 12px 0px rgba(0, 0, 0, 0.15)'},
          Rate: {starSize: 17},
          Progress: {colorSuccess: 'Black'},
          Typography: {titleMarginBottom: 0},
        },
      }}
    >
      <Card
        className="movi-card"
        variant="borderless"
        style={{
          width: 451,
          height: 279,
          padding: 0,
          margin: 0,
          borderRadius: 0,
        }}
      >
        <Flex>
          <Image width={183} height={279} src="src/Components/ui-components/MovieCard/poster.jpg" />

          <Flex vertical style={{padding: 15, width: 298}}>
            <Flex justify="space-between" align="center">
              <Title style={{margin: 0}} level={5} className="movie-name">
                The Way Back
              </Title>
              <Progress size={30} strokeColor={'rgba(233, 209, 0, 1)'} type="circle" percent={100} format={() => 6.6} />
            </Flex>
            <Text type="secondary">5 March, 2020</Text>
            <Flex>
              <Tag>Action</Tag>
              <Tag>Drama</Tag>
              <Tag>Comedy</Tag>
            </Flex>

            <Paragraph
              style={{
                paddingTop: 10,
                width: 228,
                height: 159,
                marginBottom: 0,
              }}
            >
              A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction
              attempts to regain his soul and salvation by becoming the coach of a disparate ethnically mixed high A
            </Paragraph>
            <Rate
              style={{
                paddingTop: 5,
              }}
              allowHalf
              count={10}
            />
          </Flex>
        </Flex>
      </Card>
    </ConfigProvider>
  );
};

export default MovieCard;
