---
icon: mountain
title: 重力场与行星形状
order: 1
---

# 重力场与行星形状

## 重力位的球谐展开

行星的重力场通常用引力位的球谐展开表示：

$$
U(r, \theta, \lambda) = \frac{GM}{r} \left[ 1 + \sum_{l=2}^{\infty} \sum_{m=0}^{l} \left(\frac{R}{r}\right)^l P_{lm}(\cos\theta) \left(C_{lm} \cos m\lambda + S_{lm} \sin m\lambda\right) \right]
$$

其中：
- $G$ 为万有引力常数
- $M$ 为行星质量
- $R$ 为行星参考半径
- $P_{lm}$ 为关联勒让德函数
- $C_{lm}$, $S_{lm}$ 为球谐系数（斯托克斯系数）

## 主要球谐项

### J₂ 项（扁率项）

$$
J_2 = -C_{20} = \frac{C - A}{MR^2}
$$

其中 $C$ 为绕极轴的转动惯量，$A$ 为绕赤道轴的转动惯量。$J_2$ 反映了行星的旋转扁率。

### 各行星 J₂ 值

| 行星 | J₂ (×10⁻⁶) |
|------|------------|
| 地球 | 1082.63 |
| 火星 | 1960.45 |
| 月球 | 203.3 |
| 金星 | 4.0 |
| 水星 | 50.3 |

## 大地水准面

大地水准面是与行星重力场相关的等位面：

$$
N = \frac{GM}{g} \sum_{l=2}^{\infty} \sum_{m=0}^{l} \left(\frac{R}{r}\right)^l P_{lm}(\cos\theta) (C_{lm} \cos m\lambda + S_{lm} \sin m\lambda)
$$

## 重力场反演

### 轨道摄动法

通过分析卫星轨道的摄动来反演重力场：

$$
\ddot{\mathbf{r}} = -\frac{GM}{r^3}\mathbf{r} + \nabla U_{pert}
$$

其中 $U_{pert}$ 为扰动引力位。

### 应用实例

- **GRACE/GRACE-FO**: 地球重力场时变测量，监测冰盖质量变化
- **GRAIL**: 月球高精度重力场，揭示月球内部结构
- **Mars Reconnaissance Orbiter**: 火星重力场与内部结构
- **Juno**: 木星高精度重力场与深层结构

## 行星形状

### 麦克劳林椭球

旋转流体平衡形状的理论解：

$$
e = \frac{a - c}{a}
$$

其中 $a$ 为赤道半径，$c$ 为极半径。对于均匀密度流体，$e$ 与角速度 $\omega$ 的关系：

$$
\frac{\omega^2}{2\pi G \rho} = \frac{\sqrt{1-e^2}}{e^3} \left[ (3-e^2) \arctan\frac{e}{\sqrt{1-e^2}} - 3e\sqrt{1-e^2} \right]
$$
