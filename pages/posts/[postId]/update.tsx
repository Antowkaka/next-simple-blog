import React from 'react';

import Header from '../../../layouts/Header';
import Container from '../../../layouts/Container';
import Footer from '../../../layouts/Footer';
import SinglePostBlock from '../../../layouts/SinglePostBlock';
import CRUDPostForm from '../../../components/CRUDPostForm';

const UpdatePost = (): JSX.Element => {
  return (
    <>
      <Header />
      <Container>
        <SinglePostBlock>
          <CRUDPostForm />
        </SinglePostBlock>
      </Container>
      <Footer />
    </>
  );
};

export default UpdatePost;
