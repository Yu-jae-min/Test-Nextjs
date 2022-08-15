import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import ItemList from './src/component/ItemList';

const Home = () => {
  const [list, setList] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  const getDate = () => {
    setIsLoad(true);

    axios.get(API_URL).then((res) => {
      setList(res.data);
      setIsLoad(false);
    });
  };

  useEffect(() => {
    getDate();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>home</title>
        <meta name='description' content='홈 입니다.' />
      </Head>
      {isLoad && <div>loding...</div>}
      {!isLoad && <ItemList list={list} />}
    </div>
  );
};

export default Home;
