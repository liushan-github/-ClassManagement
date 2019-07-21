<h3>第一天</h3>
搭建环境（基于ant pro v4脚手架）.
<h3>第二天<h3>
<ol>
<li>搜集数据，画登录界面。</li>
<li>login封面图放在<a href='http://liush.top/image/login.jpg'>http://liush.top/image/login.jpg</a>
</ol>
<h3>第三天(2019-7-5)</h3>
<ol>
<li>构建登录界面。</li>
</ol>
<h3>第四天(2019-7-7)</h3>
<ol>
<li>用mock写登录接口('api/login')</li>
<li>用mock写登录后获取信息接口(接口'api/currentStudent')</li>
<li>完善登录跳转页面</li>
<li>用户登录logo图放在<a href='http://liush.top/image/avatar/liu-logo.png'>http://liush.top/image/avatar下</a></li>
</ol>
<h3>第五天(2019-7-13)</h3>
<ol>
<li>增加个人信息和好友，构建</li>
<li>解决typescript问题，实践typescript</li>
<li>
收获：Suspense是为了解决网络io问题

1.React.Suspense也是一种虚拟组件（类似于Fragment，仅用作类型标识），用法如下：


    const OtherComponent = React.lazy(() => import('./OtherComponent'));
    
    function MyComponent() {
      return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <OtherComponent />
          </Suspense>
        </div>
      );
    }
    


2.Suspense子树中只要存在还没回来的Lazy组件，就走fallback指定的内容。这不正是可以提升到任意祖先级的loading吗？

3.Suspense组件可以放在（组件树中）Lazy组件上方的任意位置，并且下方可以有多个Lazy组件。对应到loading场景，就是这两种能力:
- 支持loading提升
- 支持loading聚合
</li>
<h3>第五天(2019-7-15)</h3>
<li>构建面板数据</li>
<li>写静态页面</li>
<h3>第六天(2019-7-20)</h3>
<li>写面板页面</li>
<h3>第七天(2019-7-20)</h3>
<li>面板页面写完</li>
</ol>

