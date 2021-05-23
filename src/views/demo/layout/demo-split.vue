<template>
  <div class="demo-split">
    <!--         假如不打开样式，这个效果看不出来
        分割线是可以移动的 -->
    <Split v-model="split1">
      <!--             这里定义了两块面板
 -->
      <div slot="left" class="demo-split-pane">Left Pane</div>
      <div slot="right" class="demo-split-pane">Right Pane</div>
    </Split>

    <hr />

    <!-- 嵌套使用 #
可以嵌套使用。 -->
    <Split v-model="split3">
      <div slot="left" class="demo-split-pane no-padding">
        <Split v-model="split4" mode="vertical">
          <div slot="top" class="demo-split-pane">Top Pane</div>
          <div slot="bottom" class="demo-split-pane">Bottom Pane</div>
        </Split>
      </div>
      <div slot="right" class="demo-split-pane">Right Pane</div>
    </Split>

    <!--         Divider 分割线
    水平分割线 #
默认为水平分割线，可在中间加入文字。
 -->

    <div>
      <p>
        Steven Paul Jobs was an American entrepreneur and business magnate. He
        was the chairman, chief executive officer, and a co-founder of Apple
        Inc.
      </p>
      <Divider />
      <p>
        Steven Paul Jobs was an American entrepreneur and business magnate. He
        was the chairman, chief executive officer, and a co-founder of Apple
        Inc.
      </p>
      <Divider>With Text</Divider>
      <p>
        Steven Paul Jobs was an American entrepreneur and business magnate. He
        was the chairman, chief executive officer, and a co-founder of Apple
        Inc.
      </p>
      <Divider dashed />
      <p>
        Steven Paul Jobs was an American entrepreneur and business magnate. He
        was the chairman, chief executive officer, and a co-founder of Apple
        Inc.
      </p>
    </div>

<!-- 垂直分割线 #
使用 type="vertical" 设置为行内的垂直分割线。 -->
    <div>
        Text
    <Divider type="vertical" />
    <a href="#">Link</a>
    <Divider type="vertical" />
    <a href="#">Link</a>
</div>

<!-- 标题位置 #
修改分割线标题的位置。 -->
<div>
<Divider orientation="left">Left Text</Divider>
    <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
    <Divider orientation="right">Right Text</Divider>
    <p>Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.</p>
</div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      split1: 0.5,
      split3: 0.5,
      split4: 0.5,
    };
  },
};
</script>
<style>
.demo-split {
  height: 200px;
  border: 1px solid #dcdee2;
}
.demo-split-pane {
  padding: 10px;
}
.demo-split {
  height: 200px;
  border: 1px solid #dcdee2;
}
.demo-split-pane {
  padding: 10px;
}
.demo-split-pane.no-padding {
  height: 200px;
  padding: 0;
}
</style>
