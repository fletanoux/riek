import React from 'react';
import { Input } from 'formsy-react-bootstrap';
import RFIEStatefulBase from './RFIEStatefulBase';

export default class RFIELink extends RFIEStatefulBase {
  renderEditingComponent = () => {
    return (
      <Input
        {...this.props}
        className={this.makeClassString()}
        name={this.props.name}
        onBlur={this.finishEditing}
        onInput={this.textChanged}
        onKeyDown={this.keyDown}
        ref={node => (this.input = node)}
        type={this.props.type}
        validations={this.props.email ? 'isEmail' : 'isUrl'}
        value={this.state.value}
      />);
    };

    renderNormalComponent = () => {
      if(this.state.value) {
        return this.renderLink();
      }

      return this.renderPlaceholder();
    };

    renderLink = () => {
      const email = this.props.email && 'MAILTO:' + this.state.value;
      return (
        <span className="rfie-link">
          <a
            className={this.makeClassString()}
            download={this.props.download}
            href={email || this.state.value}
            referrerpolicy={this.props.referrerpolicy}
            rel={this.props.rel}
            target={this.props.target}
            type={this.props.type}
            {...this.props.defaultProps}
          >
            { this.props.text || this.state.value }
          </a>
          <span
            onFocus={this.startEditing}
            onClick={this.startEditing}
            className={`rfie-link-icon ${this.props.iconClassName}`}
          >
          </span>
        </span>
          );
        };

        renderPlaceholder = () => {
          return (
            <span
              tabIndex="0"
              className={this.makeClassString()}
              onFocus={this.startEditing}
              onClick={this.startEditing}
              {...this.props.defaultProps}
            >
              {this.props.placeholder}
            </span>
            );
          };
        }

        RFIELink.propTypes = {
          download: React.PropTypes.bool,
          email: React.PropTypes.bool,
          iconClassName: React.PropTypes.string.isRequired,
          referrerpolicy: React.PropTypes.string,
          rel: React.PropTypes.string,
          target: React.PropTypes.oneOf(['_self','_blank','_parent','_top']),
          text: React.PropTypes.string,
          type: React.PropTypes.string,
        };
