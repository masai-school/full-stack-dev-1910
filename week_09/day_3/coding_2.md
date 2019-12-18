### RJS 8.1

Create a custom Sidebar menu which accepts children inside:

![https://i.imgur.com/ZnXfopO.png](https://i.imgur.com/ZnXfopO.png)

```javascript

<Drawer>
    <DrawerItem label="Inbox" icon="/icon/inbox.png"/>
    <DrawerItem label="Starred" icon="/icon/star.png"/>
    <DrawerItem label="Send email" icon="/icon/send-email.png"/>
    <DrawerItem label="Drafts" icon="/icon/draft.png"/>
</Drawer>

```

### RJS 8.2

Create a custom Naviagtion bar menu which accepts children inside:

![https://i.imgur.com/fxrHgJy.png](https://i.imgur.com/fxrHgJy.png)

```javascript

<ToolBar>
    <SiteName>
        <DrawerItem label="SITENAME"/>
    </SiteName>
    <DrawerItem label="About us"/>
    <DrawerItem label="Prices"/>
    <DrawerItem label="Other"/>
</Toolbar>

```

