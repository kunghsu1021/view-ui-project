<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              Item 2
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              Item 3
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              Item 4
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout :style="{ padding: '0 50px' }">
        <Breadcrumb :style="{ margin: '16px 0' }">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Content
          :style="{ padding: '24px 0', minHeight: '280px', background: '#fff' }"
        >
          <Layout>
            <Sider hide-trigger :style="{ background: '#fff' }">
              <Menu
                active-name="1-2"
                theme="light"
                width="auto"
                :open-names="['1']"
              >
                <Submenu name="1">
                  <template slot="title">
                    <Icon type="ios-navigate"></Icon>
                    Item 1
                  </template>
                  <MenuItem name="1-1">Option 1</MenuItem>
                  <MenuItem name="1-2">Option 2</MenuItem>
                  <MenuItem name="1-3">Option 3</MenuItem>
                </Submenu>
                <Submenu name="2">
                  <template slot="title">
                    <Icon type="ios-keypad"></Icon>
                    Item 2
                  </template>
                  <MenuItem name="2-1">Option 1</MenuItem>
                  <MenuItem name="2-2">Option 2</MenuItem>
                </Submenu>
                <Submenu name="3">
                  <template slot="title">
                    <Icon type="ios-analytics"></Icon>
                    Item 3
                  </template>
                  <MenuItem name="3-1">Option 1</MenuItem>
                  <MenuItem name="3-2">Option 2</MenuItem>
                </Submenu>
              </Menu>
            </Sider>
            <Content
              :style="{
                padding: '24px',
                minHeight: '280px',
                background: '#fff',
              }"
            >
              Content
                <!-- Content组件里可以放很多内容，例如<List> -->
              <List>
                  <!-- 每个ListItem 就是一项-->
                <ListItem>
                  <ListItemMeta
                    avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
                    title="洛杉矶湖人"
                    description="This is description, this is description."
                  />
                </ListItem>
                <ListItem>
                  <ListItemMeta
                    avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
                    title="This is title"
                    description="This is description, this is description."
                  />
                </ListItem>
                <ListItem>
                  <ListItemMeta
                    avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
                    title="This is title"
                    description="This is description, this is description."
                  />
                  <template slot="action">
                    <li>
                      <a href="">Edit</a>
                    </li>
                    <li>
                      <a href="">More</a>
                    </li>
                    <li>
                      <a href="">更多</a>
                    </li>
                  </template>
                </ListItem>
                <ListItem>
                  <ListItemMeta
                    avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
                    title="This is title"
                    description="This is description, this is description."
                  />
                  <template slot="action">
                    <li>
                      <a href="">Edit</a>
                    </li>
                    <li>
                      <a href="">More</a>
                    </li>
                  </template>
                </ListItem>
              </List>
            </Content>
          </Layout>
        </Content>
      </Layout>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>
<script>
export default {};
</script>