
import {Component} from 'react';
import * as React from 'react';
import * as classNames from 'classnames';
import {IBaseComponent} from '../template/component';
import {IOptionProps} from './Option';
import { BasicValue, Value } from './Select';

export interface IOptionGroupProps extends IBaseComponent {
  /**
   * 组名
   */
  label: string;
  /**
   * key
   */
  key?: string | number;
  /**
   * 激活项，由外层Select传递，开发者不需要传，否则会影响组件正常使用
   */
  active?: BasicValue;
  /**
   * context
   */
  // tslint:disable-next-line no-any
  ctx?: IContext;
}

export interface IContext {
  onChange: (value: BasicValue) => void;
  value: Value;
}

export interface IOptionGroupState {
}

/**
 * **组件中文名称**-组件描述。
 */
export class OptionGroup extends Component<IOptionGroupProps, IOptionGroupState> {
  static defaultProps = {
  };

  static displayName = 'OptionGroup';

  render() {
    const {
      className, style, children,
      label, onChange, ctx,
      ...otherProps} = this.props;
    const preCls = 'yoshino-select-option-group';
    const clsName = classNames(
      preCls, className,
    );
    return (
      <li
        className={clsName}
        style={style}
        {...otherProps}
      >
        <div className={`${preCls}-title`}>{label}</div>
        <ul>
          {
            React.Children.map(children, (ele: React.ReactElement<IOptionProps>) => {
              return React.cloneElement(ele, {
                ctx,
              });
            })
          }
        </ul>
      </li>
    );
  }
}

export default OptionGroup;
