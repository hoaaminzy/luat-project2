// components/PageMeta.tsx
import React from 'react';
import { Helmet } from 'react-helmet';

interface PageMetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  children?: React.ReactNode;
}

const PageMeta: React.FC<PageMetaProps> = ({ title, description, keywords, children }) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {children}
    </Helmet>
  );
};

export default PageMeta;
