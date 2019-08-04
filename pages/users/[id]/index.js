import Link from 'next/link';
import React from 'react';
import 'isomorphic-unfetch';

const UserDetailPage = props => {
    const { data } = props;
    const { id, name } = data;

    return (
        <div>
            <h1>User Detail</h1>
            <h2>ID: {id}</h2>
            <h2>NAME: {name}</h2>
            <div>{JSON.stringify(data || {})}</div>
            <Link href="/users" prefetch>
                <a>กลับดูรายชื่อ</a>
            </Link>
        </div>
    );
};
UserDetailPage.getInitialProps = async ctx => {
    const { id } = ctx.query;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
    return { data };
};

export default UserDetailPage;
