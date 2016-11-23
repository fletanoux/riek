import React from 'react';
import { Textarea } from 'formsy-react-bootstrap';
import RFIEStatefulBase from './RFIEStatefulBase';

export default class RFIETextArea extends RFIEStatefulBase {
    keyDown = (event) => {
        if (event.keyCode === 27) { this.cancelEditing() }     // Escape
    };

    renderEditingComponent = () => {
        return <Textarea
            value={this.props.value}
            rows={this.props.rows}
            cols={this.props.cols}
            disabled={this.state.loading}
            className={this.makeClassString()}
            defaultValue={this.props.value}
            onInput={this.textChanged}
            onBlur={this.finishEditing}
            ref={node => (this.input = node)}
            onKeyDown={this.keyDown}
            {...this.props} />;
    };

    renderNormalComponent = () => {
        const value = this.state.newValue || this.props.value
        const spans_and_brs = []
        let i = 0
        value.split("\n").map(line => {
          spans_and_brs.push(<span key={i}>{line}</span>)
          spans_and_brs.push(<br key={i+1} />)
          i += 2
        })
        spans_and_brs.pop() // remove last br tag

        return <span
            tabIndex="0"
            className={this.makeClassString()}
            onFocus={this.startEditing}
            onClick={this.startEditing}
            {...this.props.defaultProps}>{spans_and_brs}</span>;
    };
}
