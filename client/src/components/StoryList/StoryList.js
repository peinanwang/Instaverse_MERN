import React from 'react'
import { Row, Col, Spin } from 'antd';
import Story from '../Story/Story';
import { useSelector } from 'react-redux';

function StoryList() {
  
  // useSelector is a hook that extracts data from the Redux store state, using a selector function.
  // it can access global state and return a value
  const stories = useSelector((state) => state.stories);
  
  console.log(stories);

  return !stories.length ? 
  <div style={{ textAlign: "center" }}>
    <Spin size="large" />
  </div> :
  (
    <Row gutter={[48, 32]}>
      { [...stories].reverse().map((story) => {
        return (
          <Col key={story._id} lg={24} xl={12} xxl={8}>
            <Story story={story} />
          </Col>
        )
      })}
    </Row>
  )
}

export default StoryList;