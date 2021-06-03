import React from 'react';
import { Alert } from 'antd';
import { Space } from 'antd';

function BoilingVerdict ({celcius}) {
  if (celcius >= 100) {
    return <Space>
       <Alert
      message="L'eau bout"
      type="success"
    />
    </Space>
  }
  return <Space>
     <Alert
      message="L'eau ne bout pas"
      type="info"
    />
  </Space>
}

export default BoilingVerdict;