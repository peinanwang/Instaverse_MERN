import React, { useState } from 'react';
import { Card, Tooltip, Typography, Image } from "antd";
import { EditOutlined, DeleteOutlined, HeartTwoTone } from "@ant-design/icons"; // import icons
import moment from "moment"; // moment is used to format dates
import styles from "./styles";

// Destructure the imported components

// Card is a container component that can be used to display data in a card-like manner
// Meta is a sub-component of Card that is used to display meta information
const { Meta } = Card;
// Link is a sub-component of Typography that is used to create a hyperlink
// Paragraph is a sub-component of Typography that is used to create a paragraph
// Text is a sub-component of Typography that is used to create a text
const { Link, Paragraph, Text } = Typography;

function Story({ story }) {
  const [expand, setExpand] = useState(true);

  return (
    <Card 
      style={styles.card}
      cover={<Image src={story.image} />}
      actions={[
        
        <div styles={styles.actions}>
          <Tooltip placement="top" title="Like" color="magenta" onClick={() => {}}>
            <HeartTwoTone twoToneColor="magenta"/>
            &nbsp; {story.likes} &nbsp;
          </Tooltip>
        </div>,
        
        <Tooltip placement="top" title="Edit">
          <EditOutlined onClick={() => {}}/>
        </Tooltip>,

        <Tooltip placement="top" title="Delete" color="red">
          <DeleteOutlined onClick={() => {}}/>
        </Tooltip>
      ]}
    >

      <Meta title={story.username} />

      <Paragraph
        style={{ margin: 0 }}
        ellipsis={{ 
          rows: 2,
          expandable: true, 
          symbol: "more",
          onExpand: () => {setExpand(true)},
          onEllipsis: () => {setExpand(false)}
        }}
      >
        {story.caption}
      </Paragraph>

      {expand && <Link href="#">{story.tags.split(" ").map((tag) => `#${tag} `)}</Link>}

      <br />
      <Text type="secondary">{moment(story.postDate).fromNow()}</Text>
    </Card>
  )
}

export default Story