---
article: false
title: 假设检验
icon: 
order:
---
## 假设检验的问题
**反证法的思想**
- 如果从实际样本中观察到的情况下在这个假设下是不合理的，就可以认为原来的假设不成立，拒绝原来的假设
- 这里的不合理不是形式逻辑上的矛盾。而是认为小概率事件在一次观察中基本不可能发生


## 6.1 假设检验的基本思想和概念

1. **基本思想**

   以“女士品茶”为例，对于该女士有没有品茶的能力，有两种假设：该女士没有品茶能力和该女士有品茶能力。在统计上这两个非空不相交参数集合称作**统计假设**，简称**假设**。通过样本对一个假设作出对与不对的判断，则称为该假设的一个**检验**。若检验结果否定该命题，则称**拒绝**这个假设，否则就**接受（不拒绝）**这个假设。

   假设可分为两种：1. **参数假设检验**，即已经知道数据的分布，针对总体的某个参数进行假设检验；2. **非参数假设检验**，即数据分布未知，针对该分布进行假设检验。

2. **假设检验的基本步骤**

   *建立假设*—>*选择检验统计量，给出拒绝域形式*—>*选择显著性水平*—>*给出拒绝域*—>*做出判断*

   ***Step 1*：建立假设**

**主要针对参数假设检验问题** 
设有来自某分布族$\{F(x,\theta)|\theta\in\Theta\}$的样本$x_1,...,x_n$，其中$\Theta$为参数空间，设$\Theta_0\in\Theta$，且$\Theta_0\neq\phi$，则命题$H_0:\theta\in\Theta_0$称为**原假设**或**零假设（null hypothesis）**，若有另一个$\Theta_1$（$\Theta_1\in\Theta,\Theta_1\Theta_0=\phi$，常见的一种情况是$\Theta_1=\Theta-\Theta_0$），则命题$H_1:\theta\in\Theta_1$称为$H_0$的**对立假设**或**备择假设（alternative hypotheis）**，当$H_0$为简单假设，即$\Theta_0$只含一个点时，备择假设有三种可能：$H_1':\theta\neq\theta_0$，$H_1'':\theta<\theta_0$，$H_1''':\theta>\theta_0$。

   **Step 2：选择检验统计量，给出拒绝域形式**

   根据样本计算统计量$Z$（如样本均值、标准差等，称为**检验统计量**），并基于某个法则既可以决定接受$H_0$还是拒绝$H_0$，具体地，当统计量在拒绝域$W$中即拒绝$H_0$，在接受域$\overline{W}$中即接受$H_0$。由此可见，**一个拒绝域$W$唯一确定一个检验法则，反之，一个检验法则也唯一确定一个拒绝域。**
   
   **注：** 不能用一个样本（例子）证明一个命题（假设成立），但是可以用一个样本（例子）去推翻一个命题。此外，拒绝域与接受域之间有一个模糊域，即统计量恰好符合法则，通常将模糊域归为接受域，因此接受域是复杂的。

   ***Step 3*：选择显著性水平**

   > 假设检验基于**小概率事件**，即小概率事件在一次试验中几乎不会发生，因此选择一个很小的概率值$\alpha$，令$p(拒绝H_0|H_0为真)\leq\alpha$，表示$Z\in W$是一个小概率事件，在一次试验中不应该发生。如果通过样本得到的统计量$z\in W$，即不该发生的小概率事件竟然发生了，那么应该拒绝$H_0$。
   >
   > 由于向本是随机的，通常做检验时可能做出错误判断，由此引入了两个错误，分别为**第一类错误**和**第二类错误**，如下表所示。
   >
   > | 观测数据情况 |      总体情况      |       总体情况       |
   > | :----------: | :----------------: | :------------------: |
   > |              |     $H_0$为真      |      $H_1$为真       |
   > |  接受$H_0$   | 第一类错误（拒真） |         正确         |
   > |  拒绝$H_0$   |        正确        | 犯第二类错误（取伪） |
   >
   > 犯第一类错误概率：$\alpha=P(X\in W|H_0)$，即$\alpha=P(拒绝H_0|H_0为真)$；
>
   > 犯第二类错误概率：$\beta=P(X\in \overline{W}|H_1)$，即$\beta=P(接受H_0|H_0为假)$。
>
   > 可以证明的，在一定样本量下，两类错误概率无法共同减小，但是当样本增加时，可以同时减小。
>
   > >  证明该问题需要引入是函数，下面将简单介绍势函数，但不对上述结论证明。
> >
   > > 定义：设检验问题$H_0:\theta\in\Theta_0\quad vs\quad H_1:\theta \in \Theta_1$的拒绝域为$W$，则样本观测值$\mathbf{X}$落在拒绝域$W$内的概率称为该检验的**势函数**，记为
   > > $$
   > > g(\theta)=P_\theta(\mathbf{X}\in W),\ \theta\in\Theta=\Theta_0\cup\Theta_1\\
   > > g(\theta)=\left\{\begin{matrix}
   > > \alpha(\theta) & \theta\in\Theta_0\\ 
   > > 1-\beta(\theta) &\theta\in\Theta_1 
   > > \end{matrix}\right.
   > > $$
   >
   > 第一类错误概率$\alpha$即为初始设定的很小的概率，称为**置信水平**，称该检验时**显著性水平为$\alpha$的显著性检验**，简称**水平为$\alpha$的检验**。为了尽量减少两类错误，可简单的将其简化为减小第一类错误概率（第二类错误概率难求）。常用的$\alpha=0.05$有时也选择0.1或0.01。
   
   ***Step 4*：给出拒绝域**
   
   > 为了使得第一类错误的概率尽可能小，给定一个较小的$\alpha$，并选择一个数$k$，设定若$Z\geq k$拒绝$H_0$，使得$P(u=|\frac{z-\mu}{\sigma/\sqrt{n}}|\geq k)\leq \alpha$，所以$k=u_{\alpha/2}$。
   >
   > 注：算拒绝域时，需基于标准正态分布。
   
   ***Step 5*：做出判断**
   
   > 通过样本计算统计量，若统计量在拒绝域中，则拒绝原假设，否则接受原假设。

3. **检验的$p$值**

   不同置信水平$\alpha$的取值，可能会存在不同的结果。因此引入新的指标，即利用样本观测值能够作出拒绝原假设的最小显著水平，称为**检验的$p$值**。由检验的$p$值与心目中的显著性水平$\alpha$进行比较，可以容易做出检验结论：

   * 若$\alpha\geq p$，则在显著性水平$\alpha$下拒绝$H_0$；
   * 若$\alpha<p$，则在显著性水平$\alpha$下接受$H_0$.

   >  **注：**一般以$p<0.05$ 为有统计学差异， $p<0.01$ 为有显著统计学差异，$p<0.001$为有极其显著的统计学差异。



## 一个正态总体的假设检验
设总体$X \sim N(\mu , \sigma^2)$,关于一个正态总体有四种假设检验问题：
- 已知方差
## 假设检验的某些概念和数学描述
## 两个正态总体的假设检验
## 比率的假设检验
## 总体的分布函数的假设检验

 