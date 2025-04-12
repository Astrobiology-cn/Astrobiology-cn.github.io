---
article: false
title: 卫星椭圆轨道六根数
icon: 
order: 1.1
---
## 什么是轨道六根数

## 从平面极坐标方程到三维空间坐标系
### 1. 轨道平面内的极坐标方程
在轨道平面内（二维），位置由 **真近点角 \(\nu\)** 和半径 \(r\) 描述，方程为：
\[
r(\nu) = \frac{a(1-e^2)}{1 + e\cos\nu}
\]
其中：
• \(a\) 为半长轴
• \(e\) 为离心率
• \(\nu\) 为真近点角（从近地点起算的角度）

---

### 2. 三维空间坐标系转换
为了将轨道平面映射到参考坐标系（如赤道坐标系），需通过三次旋转定义轨道方向：
1. **绕参考坐标系 \(z\)-轴旋转 \(\Omega\)**（升交点赤经）
2. **绕新 \(x\)-轴旋转 \(i\)**（轨道倾角）
3. **绕新 \(z\)-轴旋转 \(\omega\)**（近地点幅角）

最终位置矢量在参考坐标系中的表达式为：
\[
\mathbf{r} = 
\begin{bmatrix}
x \\
y \\
z
\end{bmatrix}
= R_z(\Omega) \cdot R_x(i) \cdot R_z(\omega) \cdot 
\begin{bmatrix}
r\cos\nu \\
r\sin\nu \\
0
\end{bmatrix}
\]

---

### 3. 展开旋转矩阵
通过展开旋转矩阵，位置矢量可写为：
\[
\mathbf{r} = r \cdot 
\begin{bmatrix}
\cos\Omega \cos(\omega+\nu) - \sin\Omega \sin(\omega+\nu)\cos i \\
\sin\Omega \cos(\omega+\nu) + \cos\Omega \sin(\omega+\nu)\cos i \\
\sin(\omega+\nu)\sin i
\end{bmatrix}
\]

---

### 4. 三维轨道方程的参数化形式
结合轨道平面方程 \(r(\nu)\)，三维轨道方程为：
\[
\boxed{
\mathbf{r}(\nu) = \frac{a(1-e^2)}{1 + e\cos\nu} \cdot 
\begin{bmatrix}
\cos\Omega \cos(\omega+\nu) - \sin\Omega \sin(\omega+\nu)\cos i \\
\sin\Omega \cos(\omega+\nu) + \cos\Omega \sin(\omega+\nu)\cos i \\
\sin(\omega+\nu)\sin i
\end{bmatrix}
}
\]

---

### 5. 球坐标系中的显式表达
若需用球坐标 \((r, \alpha, \delta)\) 表示（\(r\) 为距离，\(\alpha\) 为赤经，\(\delta\) 为赤纬）：
1. **赤经 \(\alpha\)**：
\[
\alpha = \Omega + \arctan\left[\frac{\sin(\omega+\nu)\cos i}{\cos(\omega+\nu)}\right]
\]
2. **赤纬 \(\delta\)**：
\[
\delta = \arcsin\left[\sin(\omega+\nu)\sin i\right]
\]
3. **半径 \(r\)**：
\[
r(\nu) = \frac{a(1-e^2)}{1 + e\cos\nu}
\]

---

### 6. 关键参数的作用

| 参数 | 物理意义 | 对轨道方程的影响 |
|------|----------|------------------|
| \(\Omega\) | 升交点赤经 | 确定轨道平面在参考坐标系中的方位（绕 \(z\)-轴旋转） |
| \(i\) | 轨道倾角 | 确定轨道平面相对于参考平面的倾斜程度 |
| \(\omega\) | 近地点幅角 | 确定近地点在轨道平面内的方向 |
| \(\nu\) | 真近点角 | 描述天体在轨道上的瞬时位置 |

---

### 7. 示例：地球同步卫星轨道
对地球同步轨道（\(i=0^\circ\)，\(\omega=0^\circ\)，\(\Omega\) 固定）：
\[
\mathbf{r}(\nu) = \frac{a(1-e^2)}{1 + e\cos\nu} \cdot 
\begin{bmatrix}
\cos(\Omega + \nu) \\
\sin(\Omega + \nu) \\
0
\end{bmatrix}
\]
此时轨道完全在赤道平面内，赤经 \(\alpha = \Omega + \nu\)，赤纬 \(\delta = 0^\circ\)。

---

### **总结**
• 三维轨道方程需通过旋转矩阵将轨道平面映射到参考坐标系。
• 轨道倾角 \(i\) 和升交点赤经 \(\Omega\) 共同定义了轨道平面的空间方向。
• 最终方程形式为参数化矢量方程，依赖六个轨道根数：\(a, e, i, \Omega, \omega, \nu\)。