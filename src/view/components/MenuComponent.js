import React from 'react';

const MenuComponent = ({ user, menuList }) => {
    return (
        <div className="col-sm-3 col-md-2 sidebar">
            <ul className="nav nav-sidebar">
                <li>
                    <div className="media">
                        <div className="media-left">
                            <img className="media-object img-profile" src={user.avatar_url} alt="User" />
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">{user.name}</h4>
                            @{user.login}
                        </div>
                    </div>
                </li>
                {menuList.map((item, index) => {
                    return (<li key={index}><a href={item.href} className={item.active ? 'active' : ''}>{item.title}</a></li>)
                })}
            </ul>
        </div>
    );
}
export default MenuComponent;