
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import '../styles/common/reset.less';
import './index.less';
import Icon from '../Icon';

export interface IAvatarProps extends IBaseComponent {
  /**
   * 头像尺寸
   */
  size: 'small' | 'default' | 'large';
  /**
   * 形状
   */
  shape: 'circle' | 'square';
  /**
   * 图标 - 与Icon相同
   */
  icon: string;
  /**
   * 图片资源
   */
  src?: string;
}

export interface IAvatarState {

}

/**
 * **组件中文名称**-组件描述。
 */
export class Avatar extends Component<IAvatarProps, IAvatarState> {
  static defaultProps = {
    size: 'default',
    shape: 'circle',
    icon: 'person',
  };

  render() {
    const {className, style, size, shape, icon, src, ...otherProps} = this.props;
    const preCls = 'yoshino-avatar';
    const clsName = classNames(
      className, preCls, `${preCls}-${size}`,
      `${preCls}-${shape}`,
    );
    return (
      <div
        className={clsName}
        style={style}
        {...otherProps}
      >
        {
          !src ? (
            <Icon type={icon}/>
          ) : (
            <img src={src}/>
          )
        }
      </div>
    );
  }
}

export default Avatar;
