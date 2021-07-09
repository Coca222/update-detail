import React, { useEffect, useRef, useState } from "react";
import "./header.css";

export const Header: React.FC = () =>{
    return(
        <div id="header">
        <div className="center">
            <ul className="fl">
                <li><a href="/index">新蜂商城</a></li>
                <li><a href="/admin">后台管理系统</a></li>
                <li><a href="https://edu.csdn.net/course/detail/26258">课程视频</a></li>
                <li><a href="https://juejin.im/book/5da2f9d4f265da5b81794d48?referrer=59199e22a22b9d0058279886">课程文档</a></li>
                <li><a href="https://gitee.com/newbee-ltd/newbee-donate">捐赠</a></li>
                <li><a href="https://github.com/newbee-ltd/newbee-mall/issues">问题反馈</a></li>
                <li><a href="https://github.com/newbee-ltd/newbee-mall">GitHub 地址</a></li>
                <li><a href="https://gitee.com/newbee-ltd/newbee-mall">码云Gitee 地址</a></li>
            </ul>
            <div className="fr">
                    <ul className="login">
                        <li><a>登录</a></li>
                        <li><a>注册</a></li>
                    </ul>
                    <div className="shopcart">
                        <a href="##" style={{color: 'white'}}><i className="iconfont icon-cart"></i>
                            购物车(0)</a>
                    </div>
            </div>
        </div>
    </div>
    );
};