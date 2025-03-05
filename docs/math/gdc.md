---
article: false
icon: 
title: 梯度散度旋度
order:
---
>梯无旋 旋无散

## 基本公式汇总
#### 梯度

$$
{\nabla}f=\frac{\partial f}{\partial x} \vec{i}+\frac{\partial f}{\partial y} \vec{j}+\frac{\partial f}{\partial z} \vec{k}=\frac{\partial f}{\partial x_i}\vec e_i
$$
$$
\nabla \vec f\begin{equation}=\left[\begin{array}{ccc} \frac{\partial f_1}{\partial x_1} & \frac{\partial f_2}{\partial x_1} & \frac{\partial f_3}{\partial x_1} \\ \frac{\partial f_1}{\partial x_2} & \frac{\partial f_2}{\partial x_2} & \frac{\partial f_3}{\partial x_2} \\ \frac{\partial f_1}{\partial x_3} & \frac{\partial f_2}{\partial x_3} & \frac{\partial f_3}{\partial x_3} \end{array}\right]\end{equation}
$$
#### 散度

$$
\operatorname{div} \mathbf{F}=\nabla \cdot \mathbf{F}=\frac{\partial F_{x}}{\partial x}+\frac{\partial F_{y}}{\partial y}+\frac{\partial F_{z}}{\partial z}=\frac{\partial F_i}{\partial x_i}
$$
$$
\begin{equation}\iint_{\partial V} \mathbf{F} \cdot \hat{\mathbf{n}} d S=\iiint_{V}\nabla \cdot \mathbf{F} d V\end{equation}
$$
#### 旋度
$$
\nabla \times \mathbf{F}(x,y,z)=\left|\begin{array}{ccc} \hat{\boldsymbol{i} }& \hat{\boldsymbol{j}} & \hat{\boldsymbol{k}} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\F_{x} & F_{y} & F_{z} \end{array}\right|
$$
$$
=\left(\frac{\partial F_{z}}{\partial y}-\frac{\partial F_{y}}{\partial z}\right) \hat{\boldsymbol{i}}+\left(\frac{\partial F_{x}}{\partial z}-\frac{\partial F_{z}}{\partial x}\right) \hat{\boldsymbol{j}}+\left(\frac{\partial F_{y}}{\partial x}-\frac{\partial F_{x}}{\partial y}\right) \hat{\boldsymbol{k}}
$$
$$
=\frac{\partial F_{j}}{\partial x_{i}} \varepsilon_{i j k} \vec{e}_{k}
$$
$$
\oint_{\Gamma} \mathbf{F} \cdot d \mathbf{\Gamma}=\iint_{S} \nabla \times \mathbf{F} \cdot d \mathbf{S}
$$

#### **直角坐标，柱坐标，球坐标下：梯度、散度与旋度公式汇总**

## 1.梯度(Gradient)
在三维直角坐标系中，某个场的梯度定义为：
$$
{\nabla}f=\frac{\partial f}{\partial x} \vec{i}+\frac{\partial f}{\partial y} \vec{j}+\frac{\partial f}{\partial z} \vec{k}=\frac{\partial f}{\partial x_i}\vec e_i.
$$
在某个场中，某点某物理参数增加最快的方向。若某点梯度为$\vec 0$ ，那这个点可能是**极值点**（极大或极小）；也有可能为**鞍点**(在某一方向是极大值，另一方向又是极小值)。

除了标量场能求梯度，矢量场也能求梯度。梯度算子能将标量(0阶张量)变成矢量(1阶张量)，因此对矢量求梯度会得到一个二阶张量。在直角坐标系中，若存在矢量场 ：
$$
\vec{f}=f_1\vec e_1+f_2\vec e_2+f_3\vec e_3
$$

则该矢量场的梯度为：
$$
\begin{array}
\nabla \vec f=(\frac{\partial}{\partial x_i}\vec e_i)\otimes(f_j\vec e_j) \\
=\frac{\partial f_j}{\partial x_i}(\vec e_i\otimes\vec e_j) \\
\begin{equation}=\left[\begin{array}{ccc} \frac{\partial f_1}{\partial x_1} & \frac{\partial f_2}{\partial x_1} & \frac{\partial f_3}{\partial x_1} \\ \frac{\partial f_1}{\partial x_2} & \frac{\partial f_2}{\partial x_2} & \frac{\partial f_3}{\partial x_2} \\ \frac{\partial f_1}{\partial x_3} & \frac{\partial f_2}{\partial x_3} & \frac{\partial f_3}{\partial x_3} \end{array}\right]\end{equation}
\end{array} 
$$
其中$\otimes$代表并矢，$\vec e_i\otimes\vec e_j$可简单理解为两个向量$\vec e_i$、$\vec e_j$ , “肩并肩”在一起作为二阶张量的基。

## 2.散度(Divergence)
散度与通量相关，其在电磁学中有着非常广泛的应用，矢量场$\mathbf{F}$ 在$x_0$处的散度定义为：
$$
\begin{equation}\left.\operatorname{div} \mathbf{F}\right|_{\mathbf{x}_{0}}=\lim _{V \rightarrow 0} \frac{1}{|V|} \iint_{\mathbb{S}}\!\!\!\!\!\!\!\!\!\!\!\!\!\;\subset\!\supset\ \mathbf{F} \cdot \hat{\mathbf{n}} d S\end{equation}
$$
其中，体积$V$为包含点 $x_0$的一个无穷小体积， $\hat{\mathbf{n}}$为体积表面外法线单位向量，面积分代表矢量场在 $x_0$处**通量(flux)**，注意此处为围道积分，即封闭体积的表面。

某点散度代表了该点向外的**通量体密度**，其物理意义可以理解为：定量给出向量场中任一点是否为源点或汇点。若某点散度等于0，则说明其通量为0，流进$=$流出；若某点散度大于0，说明流出$\gt$流进，相当于一个**源点(source)**；若某点散度小于0，说明流出$\lt$流进，相当于一个**汇点(sink)**。

**应用：流体力学中不可压缩条件为：速度场的散度为0。**
推导: **不可压缩意味着密度为常数**，根据欧拉描述下（基于场的描述）质量连续性方程：
$$
\frac{d \rho}{d t}+\rho \vec\nabla \cdot \vec v=0
$$
由于密度为常数，因此其对时间的全导数应为0，即$\frac{d \rho}{d t}=0$ ，因此速度散度为0。

在三维直角坐标系中，散度计算公式为：
$$
\begin{equation}\operatorname{div} \mathbf{F}=\nabla \cdot \mathbf{F}=\left(\frac{\partial}{\partial x}, \frac{\partial}{\partial y}, \frac{\partial}{\partial z}\right) \cdot\left(F_{x}, F_{y}, F_{z}\right)=\frac{\partial F_{x}}{\partial x}+\frac{\partial F_{y}}{\partial y}+\frac{\partial F_{z}}{\partial z}\end{equation}=\frac{\partial F_i}{\partial x_i}.
$$
散度中有一个非常重要的定理，即散度定理(divergence theorem)，也叫**高斯定理(Gauss's theorem)**，应用极其广泛，其将面积分与体积分联系起来。关于散度定理的证明，由散度定义式易得。
$$
\begin{equation}\iint_{\partial V} \mathbf{F} \cdot \hat{\mathbf{n}} d S=\iiint_{V} \operatorname{div} \mathbf{F} d V\end{equation}
$$
## 3.旋度(Curl)

旋度与环量(circulation)联系紧密，其在流体力学中有着广泛的应用，其定义为：
$$
\begin{equation}(\nabla \times \mathbf{F})(p) \cdot \hat{\mathbf{n}} \stackrel{\text { def }}{=} \lim _{A \rightarrow 0}\left(\frac{1}{|A|} \oint_{C} \mathbf{F} \cdot d \mathbf{r}\right)\end{equation}
$$
这个式子代表：矢量场 $\mathbf{F}$ 在 $p$ 点的旋度与单位向量的点积等于以此单位向量为外法线的无穷小曲面的环量面密度。（注：用此定义从物理上理解非常困难，其物理解释见下文。）注意线积分方向为逆时针；若为顺时针，前面应该加上负号。即旋度逆时针方向为正，反之为负。

**注意：** 旋度方向是垂直于矢量场 $F$ 的，这在证明垂直时有妙用，比如证明SV波与SH波垂直，直接看一眼就行。

由上式可知，**若旋度为0，则环量积分为0**，这表明**积分值与路径无关**，这与自然界保守场的性质相同。同样的，**若某场的线积分与路径无关，则其旋度为0**。

在三维直角坐标系中，旋度的计算为：
$$
\begin{equation}\nabla \times \mathbf{F}(x,y,z)=\left|\begin{array}{ccc} \hat{\boldsymbol{i} }& \hat{\boldsymbol{j}} & \hat{\boldsymbol{k}} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\F_{x} & F_{y} & F_{z} \end{array}\right|\end{equation}
$$
$$
=\left(\frac{\partial F_{z}}{\partial y}-\frac{\partial F_{y}}{\partial z}\right) \hat{\boldsymbol{i}}+\left(\frac{\partial F_{x}}{\partial z}-\frac{\partial F_{z}}{\partial x}\right) \hat{\boldsymbol{j}}+\left(\frac{\partial F_{y}}{\partial x}-\frac{\partial F_{x}}{\partial y}\right) \hat{\boldsymbol{k}}
=\frac{\partial F_{j}}{\partial x_{i}} \varepsilon_{i j k} \vec{e}_{k}.
$$

## 4.拉普拉斯算子
拉普拉斯算子(Laplace operator)的构成为：**先梯度再散度**，即：
$$
\nabla^2f =\nabla \cdot \nabla f=\Delta f\\
$$
要计算拉普拉斯某量的结果，分两种情况，**标量与矢量**；
### 1)对标量$f$ ：
$$
\begin{aligned}
\nabla^2f=\nabla\cdot\nabla f & =\quad\boldsymbol{\nabla}\cdot(\frac{\partial f}{\partial x}\boldsymbol{i}+\frac{\partial f}{\partial y}\boldsymbol{j}+\frac{\partial f}{\partial z}\boldsymbol{k}) \\
 & =\quad\frac{\partial}{\partial x}(\frac{\partial f}{\partial x})+\frac{\partial}{\partial y}(\frac{\partial f}{\partial y})+\frac{\partial}{\partial z}(\frac{\partial f}{\partial z}) \\
 & =\quad\frac{\partial^2f}{\partial x^2}+\frac{\partial^2f}{\partial y^2}+\frac{\partial^2f}{\partial z^2}
\end{aligned}
$$
例子：标量场$f(x,y,z)=xy^2+z^{3}$的Laplacian是
$$
\begin{aligned}
\nabla^{2}f(x,y,z) & =\quad\frac{\partial^2f}{\partial x^2}+\frac{\partial^2f}{\partial y^2}+\frac{\partial^2f}{\partial z^2} \\
 & =\quad\frac{\partial^2}{\partial x^2}(xy^2+z^3)+\frac{\partial^2}{\partial y^2}(xy^2+z^3)+\frac{\partial^2}{\partial z^2}(xy^2+z^3) \\
 & =\quad\frac{\partial}{\partial x}(y^2+0)+\frac{\partial}{\partial y}(2xy+0)+\frac{\partial}{\partial z}(0+3z^2) \\
 & =\quad0+2x+6z=2x+6z
\end{aligned}
$$

### 2)对矢量$\vec f$ ：
只需要在各分量中进行拉普拉斯算子计算即可：
$$
\nabla^2 \vec f=(\nabla^2 f_x, \nabla^2 f_y, \nabla^2 f_z) \\
$$

此外还有一个常用恒等式：
$$
\nabla^{2} \vec f = \nabla(\nabla \cdot \vec f)-\nabla \times(\nabla \times \vec f) 
$$
 
例子：矢量场$F(x,y,z)=3z^{2}\vec{i}+xyz\vec{j}+x^{2}z^{2}\vec{k}$的Laplacian是 :
$$
\nabla^2\boldsymbol{F}(x,y,z)=\nabla^2(3z^2)\boldsymbol{i}+\nabla^2(xyz)\boldsymbol{j}+\nabla^2(x^2z^2)\boldsymbol{k}
$$
$$
\begin{align}
\nabla^{2}(3z^{2}) &=\frac{\partial^{2}}{\partial x^{2}}(3z^{2})+\frac{\partial^{2}}{\partial y^{2}}(3z^{2})+\frac{\partial^{2}}{\partial z^{2}}(3z^{2})=0+0+6=6 \\
\nabla^{2}(xyz) &=\frac{\partial^{2}}{\partial x^{2}}(xyz)+\frac{\partial^{2}}{\partial y^{2}}(xyz)+\frac{\partial^{2}}{\partial z^{2}}(xyz)=0+0+0=0 \\
\nabla^{2}(x^{2}z^{2})&=\frac{\partial^{2}}{\partial x^{2}}(x^{2}z^{2})+\frac{\partial^{2}}{\partial y^{2}}(x^{2}z^{2})+\frac{\partial^{2}}{\partial z^{2}}(x^{2}z^{2})=2z^{2}+0+2x^{2}
\end{align}
$$
$$
\nabla^2\boldsymbol{F}=6\boldsymbol{i}+0\boldsymbol{j}+(2z^2+2x^2)\boldsymbol{k}=6\boldsymbol{i}+2(x^2+z^2)\boldsymbol{k}
$$
## 5.矢量分析常用恒等式
1. $\begin{equation}\nabla \times(\nabla \times \mathbf{F})=\nabla(\nabla \cdot \mathbf{F})-\nabla^{2} \mathbf{F}\end{equation}$
2. $\begin{equation}\nabla \cdot(\nabla \times \mathbf{F})=0\end{equation},\nabla \times(\nabla \varphi)=\mathbf{0}$
3. $\begin{equation}\nabla \times(\varphi \mathbf{F})=\nabla \varphi \times \mathbf{F}+\varphi \nabla \times \mathbf{F}\end{equation}$
4. $\begin{equation}\nabla \cdot(\varphi \mathbf{F})=(\nabla \varphi) \cdot \mathbf{F}+\varphi(\nabla \cdot \mathbf{F})\end{equation}$
5. $\begin{equation}\nabla \cdot(\mathbf{F} \times \mathbf{G})=(\nabla \times \mathbf{F}) \cdot \mathbf{G}-\mathbf{F} \cdot(\nabla \times \mathbf{G})\end{equation}$
6. $\begin{equation}\nabla \times(\mathbf{v} \times \mathbf{F})=((\nabla \cdot \mathbf{F})+\mathbf{F} \cdot \nabla) \mathbf{v}-((\nabla \cdot \mathbf{v})+\mathbf{v} \cdot \nabla) \mathbf{F}\end{equation}$
7. $\vec a \times \vec b \times \vec c=\vec b(\vec a \cdot \vec c)-\vec c(\vec a \cdot \vec b)$
8. $\vec a \cdot(\vec b \times \vec c)=\vec b \cdot (\vec c \times \vec a)=\vec c \cdot(\vec a \times \vec b)$
9. $(\vec c \cdot \vec a)\vec b=\vec c \cdot(\vec a \otimes\vec b)$
10. 兰姆矢量：$(\nabla \times \vec v) \times \vec v=\vec v \cdot \nabla\otimes\vec v-\nabla(\frac{1}{2} \vec v^2)$
11. Helmholtz Decomposition：$\begin{equation}\mathbf{F}=\nabla \Phi+\nabla \times \mathbf{A}\end{equation}$

以上恒等式的前提是$\mathbf{F}$二阶可微，此时可以将矢量场$\mathbf{F}$分成一个无旋场+无散场，实现解耦，如横波与纵波方程推导。

## 6.重要方程
### 1）流体力学，对不可压缩理想流体
**Navier-Stokes equations**，**N-S方程**：
$$\begin{equation}\underbrace{\rho\left(\frac{\partial \mathbf{v}}{\partial t}+\mathbf{v} \cdot \nabla \mathbf{v}\right)}_{1}=\underbrace{-\nabla p}_{2}+\underbrace{\mu\nabla^{2}\mathbf{v}}_{3}+\underbrace{\mathbf{F}}_{4}\end{equation}$$
该式子实质为牛顿第二定律，等号左边为$ma$（惯性力），右边为$F$。
第“1”项括号中的式子代表加速度，此加速度是速度的全导数，即物质导数（速度是时间与位置的函数）
第“2”项为单位质量流体压力梯度；
第“3”项为剪切粘性项；
第“4”项为单位质量体积力。

其中，对流加速度项 $\vec v \cdot \nabla \vec v$是非线性的，注意此处 $\nabla \vec v$ 是一个二阶张量。梯度算子是“升级作用“，如对标量的梯度是矢量（一阶张量），对矢量的梯度是二阶张量。

物质导数推导：
$$
\begin{align}
\frac{D\vec v(t,x(t),y(t),z(t))}{Dt}
& =\frac{\partial \vec v}{\partial t}+\frac{\partial \vec v}{\partial x}\frac{\partial x}{\partial t}+\frac{\partial \vec v}{\partial y}\frac{\partial y}{\partial t}+\frac{\partial \vec v}{\partial z}\frac{\partial z}{\partial t}\\
& =\frac{\partial \vec v}{\partial t}+\vec v \cdot \nabla \vec v
\end{align}
$$
在三维直角坐标系中， $\nabla \vec v$ 的表达式为：
$$\begin{equation} {\nabla} \vec{v}=\left[\begin{array}{ccc} \frac{\partial v_x}{\partial x} & \frac{\partial v_y}{\partial x} & \frac{\partial v_z}{\partial x} \\ \frac{\partial v_x}{\partial y} & \frac{\partial v_y}{\partial y} & \frac{\partial v_z}{\partial y} \\ \frac{\partial v_x}{\partial z} & \frac{\partial v_y}{\partial z} & \frac{\partial v_z}{\partial z}\end{array}\right]\end{equation}.$$
N-S方程解的存在性与光滑性还未得到证明，其为七个千禧年大奖难题之一。
### 2）固体力学，均匀各项同性介质
**Lame-Navier equations**，**L-N方程**:
$$\begin{align}
\rho \ddot{\mathbf{u}}
& =\mathbf{f}+(\lambda+2 \mu) \nabla(\nabla \cdot \mathbf{u})-\mu \nabla \times(\nabla \times \mathbf{u}) \\
& =\mathbf{f}+(\lambda+ \mu) \nabla(\nabla \cdot \mathbf{u})+\mu \nabla^{2}\mathbf{u}
\end{align}$$
其中， $\mathbf{u}$是位移，$\mathbf{f}$ 是体力， $\lambda,\mu$为lame常数，$\rho$ 是密度。
此方程实质为牛顿第二定律，左边是$ma$，右边是$F$。
该方程为地震学中最基本的方程之一，地震学中绝大数内容均由此导出。

### 3) 电磁学，Maxwell's equation
$$
\begin{align}
&\nabla \cdot \mathbf{E}   =\frac{\rho}{\varepsilon_{0}} \\
&\nabla \cdot \mathbf{B}   =0 \\
&\nabla \times \mathbf{E}  =-\frac{\partial \mathbf{B}}{\partial t} \\
&\nabla \times \mathbf{B}  =\mu_{0}\left(\mathbf{J}+\varepsilon_{0} \frac{\partial \mathbf{E}}{\partial t}\right)
\end{align}
$$

其中，电场为 $E$ ，磁场为 $B$， $ρ$ 是总电荷密度， $ε0$ 是介电常数， $μ0$ 是磁导率， $J$ 是总电流密度。介电常数与磁导率的乘积是光速平方的倒数：
$$\begin{equation}c=\frac{1}{\sqrt{\varepsilon_{0} \mu_{0}}}\end{equation}.$$


## 参考资料
[1]. [梯度、散度、旋度与矢量分析 - 知乎](https://zhuanlan.zhihu.com/p/165479232)