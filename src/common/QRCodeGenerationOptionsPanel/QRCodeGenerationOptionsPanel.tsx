'use client';

import ContentWrapper from '@/components/ContentWrapper';
import List from '@/components/List';
import LinkItem from '@/components/LinkItem';
import LayoutContainer from '@/components/LayoutContainer';

import { usePathname } from 'next/navigation';
import { LINKS_DATA } from './constants';

const QRCodeGenerationOptionsPanel = () => {
  const pathname = usePathname();

  const linkElements = LINKS_DATA.map((item) => {
    const isActiveRoute = pathname === item.href;
    return {
      key: item.href,
      content: (
        <LinkItem
          href={item.href}
          content={item.content}
          variant={isActiveRoute ? 'active' : 'primary'}
        />
      ),
    };
  });
  return (
    <LayoutContainer>
      <ContentWrapper className="px-4 bg-gray-100">
        <List
          listClassName="flex gap-4"
          listItemClassName="block"
          items={linkElements}
        />
      </ContentWrapper>
    </LayoutContainer>
  );
};

export default QRCodeGenerationOptionsPanel;
