import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import StoryList from "../StoryList/StoryList";
import StoryForm from "../StoryForm/StoryForm";
import { Layout } from 'antd';
import styles from './styles';
import { getStories } from '../../actions/storyActions';

const { Sider, Content } = Layout;

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStories())
    }, [dispatch]);

    return (
        <Layout>
            <Sider style={styles.sider} width={350}>
                <StoryForm />
            </Sider>
            <Content style={styles.content}>
                <StoryList />
            </Content>
        </Layout>
    )
}

export default Home
