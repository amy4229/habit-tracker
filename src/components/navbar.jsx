import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        const total_cnt = this.props.totalCount;
        return (
            <div className='nav'>
                <i className="fa-regular fa-rectangle-list yellow"></i>
                <span className='nav__title'>Habit Checker</span>
                <span className="nav__total_count">{total_cnt}</span>
            </div>
        );
    }
}

export default Navbar;