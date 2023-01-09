import React from 'react';
import StoryList from "../StoryList/StoryList";
import StoryForm from "../StoryForm/StoryForm";
import { Layout } from 'antd';
import styles from './styles';

const { Sider, Content } = Layout;

const Home = () => {
    return (
        <Layout>
            <Sider style={styles.sider} width={400}>
                <StoryForm />
            </Sider>
            <Content style={styles.content}>
                <StoryList />
            </Content>
        </Layout>
    )
}

export default Home
