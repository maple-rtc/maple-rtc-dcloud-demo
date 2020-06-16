# maple-rtc-dcloud-demo
## 简介：
maple-rtc 为蓝蘑云推出的实时音视频系统，包括了实时音频，视频，变声，美颜等功能，适用于娱乐，游戏，教育等实时场景中；

----------
- 完整的 API 文档和集成步骤见 [文档中心](http://doc.lmaple.com/maple-rtc-dcloud-sdk.html)

----------
这个开源项目演示了如何快速集成 maple-rtc SDK 到 dcloud 中，实现在应用中音视频通话效果。

在这个示例项目中包含了以下功能：

- 加入通话和离开通话；
- 扬声器和听筒切换功能；
- 静音和解除静音；
- 关闭摄像头和开启摄像头；
- 切换前置摄像头和后置摄像头；
- 播放流媒体音频文件；

支持多人音频，多人视频，1对1视频连麦等功能；

## 运行示例程序
首先在 联系对接群 **701150764** [蓝蘑云后台管理](http://account.lmaple.com) 注册账号，获取到 appID。将 appID 填写进 "common/app.js"

```
export const appId = "Your App ID";
```

然后在 [maple-rtc SDK](http://sdk.lmaple.com/MapleRtc_DCloud_SDK_Release.zip) 下载 **maple-rtc 实时音视频 SDK for dcloud**，解压后将其中的 **nativeplugins** 文件夹复制到本项目的 **nativeplugins** 下。

- HBuilderX 云打包:

参考HBuilderX 工具进行云打包;

- Xcode 离线打包:

下载 dcloud 离线SDK [dcloud SDK](http://sdk.lmaple.com/SDK.zip) 下载 ***SDK***, 解压到uniPlugin-iOS 目录下。

- 在 **Build Setting**选项 设置 Other Link Flags 加 -ObjC 

<img src="http://doc.lmaple.com/image/iOS_3.png" width="500">

- 在 **Info** 选项 设置Project Privacy来获取camera 和 microphone 权限；

最后使用 XCode 打开 HBuilder-uniPlugin.xcodeproj，连接 iPhone／iPad 测试设备，设置有效的开发者签名后即可运行。

- Android studio 离线打包:

使用 Android Studio 打开uniPlugin-Android 项目，连上android设备，编译并运行。


## 运行环境
- XCode 8.0 +
- Android Studio 2.0 +
- 两台 真机设备
- 部分模拟器会存在功能缺失或者性能问题，所以推荐使用真机

## 联系我们

对接qq群  **701150764**