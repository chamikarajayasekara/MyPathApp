import React from 'react';
import { Input } from 'antd';
export default function SearchForm(props) {
    return (
                    <form onSubmit={e => e.preventDefault()}>
                        <Input type="search" id="search" name="search" placeholder="Search course" style={{height:40, width:500}}
                                onChange={e => props.onChange(e.target.value)}/>
                    </form>

    );
}
