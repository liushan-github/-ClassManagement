import React from 'react';
import {Icon} from 'antd';
import classNames from 'classnames';
import styles from './index.less';

export interface ITrendProps {
  colorful?: boolean;
  flag: 'woman' | 'man';
  style?: React.CSSProperties;
  reverseColor?: boolean;
  className?: string;
}

const Trend: React.SFC<ITrendProps> = ({
                                         colorful = true,
                                         reverseColor = false,
                                         flag,
                                         children,
                                         className,
                                         ...rest
                                       }) => {
  const classString = classNames(
    styles.trendItem,
    {
      [styles.trendItemGrey]: !colorful,
      [styles.reverseColor]: reverseColor && colorful,
    },
    className,
  );
  return (
    <div {...rest} className={classString} title={typeof children === 'string' ? children : ''}>
      <span>{children}</span>
      {flag && (
        <span className={styles[flag]}>
          <Icon type={`${flag}`}/>
        </span>
      )}
    </div>
  );
};

export default Trend;
