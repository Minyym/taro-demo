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
      <View className="fixed w-full bg-[#fff] ">
        <View className="  w-full text-[16px] font-normal flex justify-between px-[15px] py-[5px] items-center">
          <View className=" text-[#467FE5]">
            <Text className="iconfont icon-zuojiantou font-bold"></Text>
            <Text>返回</Text>
          </View>
          <Text className=" text-[18px]">收入纳税明细</Text>
          <View className="text-[#467FE5]">批量申诉</View>
        </View>
        <View className="br-bottom "></View>

        <View className="w-full h-[10px] bg-[#f4f6f9] "></View>
        <View className=" text-[16px] p-[15px] font-medium">
          <View className="flex pb-[5px] justify-between">
            <View>
              <Text>收入合计</Text>
              <Text className="iconfont icon-wenhao text-[#467FE5] relative top-[4px] left-[4px]"></Text>
              <Text> ：</Text>
            </View>

            <Text>13755.12元</Text>
          </View>
          <View className="br-bottom "></View>
          <View className="flex justify-between pt-[5px]">
            <Text>已申报税额合计：</Text>
            <Text>6355.12元</Text>
          </View>
        </View>
        <View className="w-full h-[10px] bg-[#f4f6f9]"></View>
      </View>
      <View className="pt-[125px]"></View>

      {list.map((i, index) => {
        return (
          <View key={index} className="p-[15px] leading-loose ">
            <View className="flex justify-between">
              <View className="text-[#9E9EA0]  w-[85%] text-[16px]">
                <View className=" flex justify-between text-[#000] text-[18px]">
                  <Text className="">工资薪资</Text>
                  <Text>{i.time}</Text>
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
                  <Text>{i.income}元</Text>
                </View>
                <View>
                  <Text>已申报税额：</Text>
                  <Text>{i.tax}元</Text>
                </View>
              </View>
              <View className="text-[#ddd]  flex items-center text-[20px] iconfont icon-a-teshuyoujiantou "></View>
            </View>
          </View>
        );
      })}
    </>
  );
}
