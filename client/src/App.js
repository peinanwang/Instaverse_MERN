import React from 'react';
import { Layout, Image, Typography } from 'antd';
import Logo from "./images/Instaverse.png";

import Home from "./components/Home";
import styles from "./styles"

const { Title } = Typography;
const { Header, Footer } = Layout;


// Create a functional component
const App = () => {
  return (
    <Layout style={styles.layout}>

      <Header style={styles.header}>
        <Image style={styles.image} width={45} preview={false} src={Logo} />
        &nbsp; 
        <Title style={styles.title}>Instaverse</Title>
      </Header>

      <Home />

      <Footer style={styles.footer}>2023 Instaverse</Footer>

    </Layout>
  );
}


// Export the App component
export default App;