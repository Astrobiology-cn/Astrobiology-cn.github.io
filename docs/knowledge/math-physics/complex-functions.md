---
icon: calculator
title: 复变函数基础
order: 1
---

# 复变函数基础

## 复数与复变函数

复数的一般形式为：

$$
z = x + iy
$$

其中 $x$ 为实部，$y$ 为虚部，$i = \sqrt{-1}$。

## 解析函数

> [!definition] 解析函数
> 若函数 $f(z)$ 在区域 $D$ 内处处可导，则称 $f(z)$ 在 $D$ 内**解析**。

> [!note] 柯西-黎曼条件
> 函数 $f(z) = u(x,y) + iv(x,y)$ 解析的充要条件是：
> $$
> \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \quad
> \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}
> $$

## 留数定理

> [!definition] 孤立奇点
> 函数 $f(z)$ 在 $z_0$ 处不解析，但在 $z_0$ 的某个去心邻域内解析，则称 $z_0$ 为 $f(z)$ 的**孤立奇点**。

> [!theorem] 留数定理
> 设 $f(z)$ 在简单闭曲线 $C$ 所围成的区域 $D$ 内除有限个孤立奇点 $z_1, z_2, \ldots, z_n$ 外解析，在 $\bar{D} = D + C$ 上除这些点外连续，则：
> $$
> \oint_C f(z) dz = 2\pi i \sum_{k=1}^n \text{Res}[f(z), z_k]
> $$

> [!proof]
> 由柯西积分公式，对于每个孤立奇点 $z_k$，在其小邻域内作小圆 $C_k$，则：
> $$
> \oint_{C_k} f(z) dz = 2\pi i \cdot \text{Res}[f(z), z_k]
> $$
> 由复连通区域的柯西定理，将所有小圆积分求和即得结论。

> [!example] 计算积分
> 计算积分 $\oint_{|z|=1} \frac{dz}{z}$。
>
> 解：函数 $f(z) = \frac{1}{z}$ 在 $z=0$ 处有一阶极点，在 $|z|=1$ 内解析。由留数定理：
> $$
> \oint_{|z|=1} \frac{dz}{z} = 2\pi i \cdot \text{Res}\left[\frac{1}{z}, 0\right] = 2\pi i \cdot 1 = 2\pi i
> $$

## 积分变换

### 傅里叶变换

$$
F(\omega) = \int_{-\infty}^{+\infty} f(t) e^{-i\omega t} dt
$$

### 拉普拉斯变换

$$
F(s) = \int_0^{+\infty} f(t) e^{-st} dt
$$

## 行星科学应用

> [!tip] 应用领域
> 复变函数在行星科学中的应用包括：
> - **重力场建模**: 使用复变函数方法处理二维位势问题
> - **磁场分析**: 解析延拓与磁异常处理
> - **波动方程**: 地震波传播的频域分析
