import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space } from 'antd';

const DropdownIcon = ({ onSort }) => {
   const handleMenuClick = (e) => {
      message.success(`Sorted by ${e.key === '1' ? 'Low to High' : 'High to Low'}`);
      onSort(e.key); // send sort key to parent
   };

   const items = [
      {
         label: 'Price: Low to High',
         key: '1',
      },
      {
         label: 'Price: High to Low',
         key: '2',
      },
   ];

   return (
      <Space wrap>
         <Dropdown menu={{ items, onClick: handleMenuClick }}>
            <Button>
               <Space>
                  Sort by
                  <DownOutlined />
               </Space>
            </Button>
         </Dropdown>
      </Space>
   );
};

export default DropdownIcon;
