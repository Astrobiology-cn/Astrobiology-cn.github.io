---
article: false
title: 勒让德多项式
icon:
---
## 勒让德
阿德里安-马里·勒让德(Adrien-Marie Legendre),
1752年9月18日—1833年1月10日 法国数学家。
他的主要贡献在统计学、数论、抽象代数与数学分析，他是椭圆积分的莫基人之一。勒让德星(26950 Legendre)以他的名字命名。
## 勒让德方程

勒让德方程为：
$$
\begin{equation}
\frac{\mathrm{d}}{\mathrm{d}{x}} \left[(1-x^2) \frac{\mathrm{d}}{\mathrm{d}{x}} P_l(x) \right] + l(l+1)P_l(x) = 0~.
\end{equation}
\tag{1}
$$
我们仅在区间 x∈[−1,1] 上考虑 l 为非负整数的情况方程的解 $P_l(x)$ 是关于$x$ 的$l$阶多项式
$$
\begin{equation}
P_l(x) = \frac{1}{2^l}\sum_{s=0}^{[l/2]} \frac{(-1)^s (2l-2s)!}{s!(l-s)!(l-2s)!} x^{l-2s}
\end{equation}
\tag{2}$$
其中 $[x]$ 是向下取整函数。当 $x$ 是整数，$[x]=x$，当 $x$是非整数，$[x]$ 是小于 $x$ 的最大整数。
勒让德不等式的前几项如下：
$$
\begin{equation} \begin{aligned}
&P_0(x) = 1 && P_3(x) = \frac12 (5x^3 - 3x) \\
&P_1(x) = x && P_4(x) = \frac18 (35x^4 - 30x^2 + 3) \\
&P_2(x) = \frac12 (3x^2 - 1) \qquad && P_5(x) = \frac18 (63x^5 - 70x^3 + 15x)~.
\end{aligned} \end{equation}
$$
	
![](https://wuli.wiki/online/f8158805e1817880.svg) 

### 1. 正交归一性质

勒让德多项式的归一化系数为
$$
\begin{equation}
A_l = \sqrt{\frac{2l + 1}{2}}~,
\end{equation}
$$
满足正交归一化条件

$$
\begin{equation}
\int_{-1}^1 A_{l'} P_{l'}(x) \cdot A_l P_l(x) \,\mathrm{d}{x} = \delta_{l,l'}~.
\end{equation}
$$

所以勒让德多项式具有正交归一性，即

$$
\int_{-1}^1P_n(x)P_m(x)dx=\int_0^\pi P_n(\cos\theta)P_m(\cos\theta)\sin\theta d\theta=\frac{\delta_{nm}}{n+1/2}
$$

### 2. 勒让德方程的级数解

将$P_l(x) = \sum_{n = 0}^\infty c_n x^n~$代入方程中，对比系数得到递推公式：

$$
\begin{equation}
c_{n+2} = \frac{n(n+1)-l(l+1)}{(n+2)(n+1)}c_n = \frac{(n-l)(n+1+l)}{(n+2)(n+1)}c_n~.
\end{equation}
$$


可见偶数项系数可用 $c_0$表示，奇数项系数可用 $c_1$ 表示。所以 $c_0$ 和 $c_1$ 可以看做是二阶微分方程的两个任意常数。

当$l$为整数时，可以证明 $n>l$ 以上的系数都为 $0$，令最高次项系数为$c_l = \frac{(2l)!}{2^l (l!)^2}~,$就可以得到式子(2)
## 引力场的勒让德多项式级数展开

定义距离球体球心$r$处受到球体$r^{'}$处引力势$\Phi_\mathrm{g}(r)$，其中$r$指受力点距离行星质心的距离，$r^{'}$指质量微元距离行星质心的距离，易得：

$$
\Phi(\mathbf{r})=-G\int\frac{\rho(\mathbf{r}^{\prime})}{|\mathbf{r}^{\prime}-\mathbf{r}|}d^3\mathbf{r}^{\prime}
$$
 
 此时，可方便地采用标准球面坐标 $r$、$θ$、$φ$沿 $Z$ 轴对齐。这些坐标与常规笛卡尔坐标的关系如下：
 
$$
\begin{aligned}
& x=r \sin{\theta}\cos\phi \\
& y=r \sin{\theta}\sin\phi \\
& z=r \cos{\theta}
\end{aligned}
$$

将$r(x,y,z)$和$r'(x',y',z')$代入式子，则一般轴对称质量分布的引力势$\Phi(r,\theta)$:

$$
\begin{aligned}
\Phi(r,\phi,\theta)
& =-G\int_0^\infty\int_0^\pi\int_0^{2\pi}\frac{r^{\prime2}\rho(r^{\prime},\theta^{\prime})\sin\theta^{\prime}}{|\mathbf{r}-\mathbf{r}^{\prime}|}d\phi^{\prime}d\theta^{\prime}dr^{\prime}\\
& =-2\pi G\int_0^\infty\int_0^\pi r^{\prime2}\rho(r^{\prime},\theta^{\prime})\sin\theta^{\prime}\left\langle|\mathbf{r}^{\prime}-\mathbf{r}|^{-1}\right\rangle
d\theta^{\prime}dr^{\prime}
\end{aligned}
\tag{1}
$$

其中

$$
\begin{aligned}
\left\langle |\mathbf{r^{\prime}}-\mathbf{r}|^{-1} \right\rangle
& =(r^{2}-2\vec r \cdot \vec r^{\prime}+r^{\prime2})^{-1} \\
& =(r^{2}-2 r \cdot r^{\prime} F+r^{\prime2})^{-1} (当 r \gg r^{\prime} 时，将|\mathbf{r^{\prime}}-\mathbf{r}|^{-1} 以 \frac{r^{\prime}}{r}形式展开 )\\
& =\frac{1}{r}\left[1+\left(\frac{r^{\prime}}{r}\right)F+\frac{1}{2}\left(\frac{r^{\prime}}{r}\right)^2(3F^2-1)+\mathcal{O}\left(\frac{r^{\prime}}{r}\right)^3\right].
\end{aligned}
$$

让我们把这个表达式平均到方位角 $φ$ 上。因为 $\left\langle1\right\rangle  =1$，$\left\langle cos{φ} \right\rangle$ =0，$\left\langle cos{\frac{φ}{2}}\right\rangle$ =1/2，所以很容易看出

$$
\left\langle F \right\rangle = cos{\theta} \, cos{\theta^{\prime}}
$$
$$
\begin{aligned}
\left\langle F^{2} \right\rangle & =\frac{1}{2}\sin^{2}\theta\sin^{2}\theta^{\prime}+\cos^{2}\theta\cos^{2}\theta^{\prime} \\
 & =\frac{1}{3}+\frac{2}{3}\left(\frac{3}{2}\cos^{2}\theta-\frac{1}{2}\right)\left(\frac{3}{2}\cos^{2}\theta^{\prime}-\frac{1}{2}\right).
\end{aligned}
$$
因此

$$
\begin{align}
\left\langle|\mathbf{r}^{\prime}-\mathbf{r}|^{-1}\right\rangle & =\frac{1}{r}\left[1+\left(\frac{r^{\prime}}{r}\right)\cos\theta\cos\theta^{\prime}+\left(\frac{r^{\prime}}{r}\right)^2\left(\frac{3}{2}\cos^2\theta-\frac{1}{2}\right)\left(\frac{3}{2}\cos^2\theta^{\prime}-\frac{1}{2}\right)+\mathcal{O}\left(\frac{r^{\prime}}{r}\right)^3 \right]\\
 & =\frac{1}{r}\sum_{n=0}^\infty\frac{r^{\prime n}}{r^{n}}P_n(cos\theta)P_n(cos\theta^{\prime}) \\
 & =\sum_{n=0}^\infty\frac{r^{\prime n}}{r^{n+1}}P_n(cos\theta)P_n(cos\theta^{\prime})
\end{align}
\tag{2}
$$

将式子(1)和式子(2)联合：

$$
\begin{aligned}
\Phi(r,\theta) =&\sum_{n=0,\infty}\Phi_n(r)P_n(\cos\theta), \\
\Phi_{n}(r) =&-\frac{2\pi G}{r^{n+1}}\int_0^r\int_0^\pi r^{\prime n+2}\rho(r^{\prime},\theta^{\prime})P_n(\cos\theta^{\prime})\sin\theta^{\prime}d\theta^{\prime}dr^{\prime} \\
 & -2\pi Gr^n\int_r^\infty\int_0^\pi r^{\prime1-n}\rho(r^{\prime},\theta^{\prime})P_n(\cos\theta^{\prime})\sin\theta^{\prime}d\theta^{\prime}dr^{\prime}.
\end{aligned}
$$
