import type { NextPage } from 'next';
import { Demo } from 'components/Demo/Demo';
import { MainLayout } from '../src/Layouts/MainLayout';

const DemoPage: NextPage = () => {
  return (
    <MainLayout className="">
      <Demo />
    </MainLayout>
  );
};

export default DemoPage;
