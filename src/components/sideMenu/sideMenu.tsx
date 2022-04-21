import React from 'react';
import { Menu } from 'antd'
import { GifOutlined } from '@ant-design/icons'
import styles from './sideMenu.module.css'
import { sideMenuList } from './mockup';
export const SideMenu: React.FC = () => {
    return (
        <Menu mode='vertical' className={styles['side-menu']} >
            {sideMenuList.map((m, index) => {
                return (<Menu.SubMenu
                    key={`side-menu-${index}`}
                    title={<span><GifOutlined />{m.title}</span>}
                >
                    {m.subMenu.map((sm, smindex) => {
                        return (<Menu.SubMenu
                            key={`sub-menu-${smindex}`}
                            title={<span><GifOutlined />{sm.title}</span>}
                        >
                            {sm.subMenu.map((sms, smsindex) => {
                                return (<Menu.Item
                                    key={`sub-sub-menu-${smsindex}`}
                                >
                                    <span><GifOutlined />{sms}</span>
                                </Menu.Item>)
                            })}
                        </Menu.SubMenu>
                        )
                    })}
                </Menu.SubMenu>
                )
            })}
        </Menu>
    )
}

