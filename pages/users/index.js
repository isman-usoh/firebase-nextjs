import Link from 'next/link';
import React from 'react';
import 'isomorphic-unfetch';

const UserListPage = props => {
    const { list } = props;
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {list.map(item => {
                    const id = item.id;
                    const name = item.name;
                    return (
                        <li key={item.id}>
                            <Link href="/users/[id]" as={`/users/${id}`}>
                                <a>{name}</a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
UserListPage.getInitialProps = async ctx => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const list = await res.json();
    return { list };
};

export default UserListPage;
