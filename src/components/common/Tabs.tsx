import React, { useState } from "react";
import styled from "styled-components";

type TabProps = {
  title: string;
  children: React.ReactNode;
};

type TabsProps = {
  children: React.ReactNode;
};

const Tab = ({ children }: TabProps) => {
  return <>{children}</>;
};

const Tabs = ({ children }: TabsProps) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const tabs = React.Children.toArray(
    children
  ) as React.ReactElement<TabProps>[];

  return (
    <TabsWrapper>
      <div className="tab-header">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={activeIdx === idx ? "active" : ""}
          >
            {tab.props.title}
          </button>
        ))}
      </div>
      <div className="tab-content">{tabs[activeIdx]}</div>
    </TabsWrapper>
  );
};

export { Tab, Tabs };

const TabsWrapper = styled.div`
  .tab-header {
    display: flex;
    gap: 2px;
    border-bottom: 1px solid #ddd;

    button {
      border: none;
      background-color: #ddd;
      cursor: pointer;
      font-size: 1.25rem;
      font-weight: bold;
      color: ${({ theme }) => theme.color.text};
      border-radius: ${({ theme }) => theme.borderRadius.default}
        ${({ theme }) => theme.borderRadius.default} 0 0;
      padding: 12px 24px;

      &.active {
        color: #fff;
        background-color: ${({ theme }) => theme.color.primary};
      }
    }
  }

  .tab-content {
    padding: 16px;
  }
`;
