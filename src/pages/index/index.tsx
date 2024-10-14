import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";
import { useState } from "react";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });
  const list = [
    {
      time: "2024-09",
      name: "test",
      income: 15000,
      tax: 1390,
    },
    {
      time: "2024-08",
      name: "test",
      income: 15000,
      tax: 1390,
    },
    {
      time: "2024-07",
      name: "test",
      income: 15000,
      tax: 1390,
    },
    {
      time: "2024-06",
      name: "test",
      income: 15000,
      tax: 1390,
    },
    {
      time: "2024-05",
      name: "test",
      income: 15000,
      tax: 1390,
    },
  ];
  return (
    <>
      <View className="block-ddd"></View>

      <View className="text-14 block">
        <View className="m-flex ">
          <Text>收入合计</Text>
          <Text className="iconfont icon-wenhao color-628BDC padding-3"></Text>
          <Text> ：</Text>
          <View className="m-flex m-flex-justify-end width-73 ">
            <Text>13755.12元</Text>
          </View>
        </View>
        <View className="br-bottom"></View>
        <View className="m-flex m-flex-justify-between">
          <Text>已申报税额合计：</Text>
          <Text>6355.12元</Text>
        </View>
      </View>
      <View className="block-ddd"></View>
      {list.map((i, index) => {
        return (
          <View key={index} className="block">
            <View className="m-flex m-flex-justify-between">
              <View className="color-9E9EA0  block-left text-14">
                <View className=" m-flex m-flex-justify-between color-000 text-16">
                  <Text className="">工资薪资</Text>
                  <Text>2024-09</Text>
                </View>

                <View>
                  <Text>所得税目小类：</Text>
                  <Text>正常工资薪资</Text>
                </View>
                <View>
                  <Text>扣税义务人：</Text>
                  <Text>深圳市观麦网络科技有限…</Text>
                </View>
                <View>
                  <Text>收入：</Text>
                  <Text>15000元</Text>
                </View>
                <View>
                  <Text>已申报税额：</Text>
                  <Text>965.12元</Text>
                </View>
              </View>
              <View className="color-ddd  m-flex m-flex-align-center text-20 iconfont icon-a-teshuyoujiantou "></View>
            </View>
          </View>
        );
      })}
    </>
  );
}
