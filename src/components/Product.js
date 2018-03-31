// Code Product Component Here
import React from 'react';
// import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
    render() {
        return (
            <div className='product'>
                <ul>
                    <li>{this.props.name}</li>
                    <li>{this.props.producer ? <b>{this.props.producer}</b> : null}</li>
                    <li>{this.props.hasWatermark ? 'Watermarked' : 'Not Watermarked'}</li>
                    <li>{this.props.color}</li>
                    <li>Weight: {this.props.weight}</li>
                </ul>
            </div>
        );
    }
}

Product.defaultProps = {
    hasWatermark: false
}

// way to enforce that components receive the right props in the right forms
// if catches error when you pass the wrong stuff into a component and warns you about it.
Product.propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
    weight: (product) => {
        const weight = product;

        if (weight === undefined) {
            return new Error('The weight prop is required.');
        }

        if (isNaN(weight)) {
            return new Error('Please enter a valid number.');
        }

        const isValidWeight = weight > 80 && weight < 300;

        if (!isValidWeight) {
            return new Error('The weight is not between 80 and 300');
        }
    },
}

// module.exports = Product;