

球谐函数是从拉普拉斯方程在球坐标系下的分离变量解的过程中推导出来的，以下是具体的推导过程：

### 从拉普拉斯方程出发

在球坐标系 $(r, \theta, \phi)$ 中，拉普拉斯方程形式为：

$$
\nabla^{2} \psi = \frac{1}{r^{2}} \frac{\partial}{\partial r}\left(r^{2} \frac{\partial \psi}{\partial r}\right) + \frac{1}{r^{2} \sin \theta} \frac{\partial}{\partial \theta}\left(\sin \theta \frac{\partial \psi}{\partial \theta}\right) + \frac{1}{r^{2} \sin^{2} \theta} \frac{\partial^{2} \psi}{\partial \phi^{2}} = 0
$$

假设解可以表示为各变量的函数之积，即 $\psi(r, \theta, \phi) = R(r) \Theta(\theta) \Phi(\phi)$，将其代入拉普拉斯方程。

### 分离变量

将方程两边乘以 $r^{2}$，得到：

$$
r^{2} \frac{\partial}{\partial r}\left(r^{2} \frac{\partial \psi}{\partial r}\right) + \frac{1}{\sin \theta} \frac{\partial}{\partial \theta}\left(\sin \theta \frac{\partial \psi}{\partial \theta}\right) + \frac{1}{\sin^{2} \theta} \frac{\partial^{2} \psi}{\partial \phi^{2}} = 0
$$

代入 $\psi(r, \theta, \phi) = R(r) \Theta(\theta) \Phi(\phi)$，得到：

左边可以分解为：

$$
R \Theta \Phi \left[ r^{2} \frac{d}{d r}\left(r^{2} \frac{d R}{d r}\right) \cdot \frac{1}{R} + \frac{1}{\sin \theta} \frac{d}{d \theta}\left(\sin \theta \frac{d \Theta}{d \theta}\right) \cdot \frac{1}{\Theta} + \frac{1}{\sin^{2} \theta} \frac{d^{2} \Phi}{d \phi^{2}} \cdot \frac{1}{\Phi} \right] = 0
$$

两边除以 $R \Theta \Phi$，得到：

左边分解为：

$$
\frac{r^{2}}{R} \frac{d}{d r}\left(r^{2} \frac{d R}{d r}\right) + \frac{1}{\Theta \sin \theta} \frac{d}{d \theta}\left(\sin \theta \frac{d \Theta}{d \theta}\right) + \frac{1}{\Phi \sin^{2} \theta} \frac{d^{2} \Phi}{d \phi^{2}} = 0
$$

注意到前两项仅依赖于 $r$ 和 $\theta$，最后一项仅依赖于 $\phi$，因此将方程重新排列：

$$
\frac{r^{2}}{R} \frac{d}{d r}\left(r^{2} \frac{d R}{d r}\right) = - \left[ \frac{1}{\Theta \sin \theta} \frac{d}{d \theta}\left(\sin \theta \frac{d \Theta}{d \theta}\right) + \frac{1}{\Phi \sin^{2} \theta} \frac{d^{2} \Phi}{d \phi^{2}} \right]
$$

左边仅依赖于 $r$，右边仅依赖于 $\theta$ 和 $\phi$，因此两边必须等于同一个常数。令这个常数为 $-\lambda$，于是得到两个方程：

径向方程：

$$
\frac{1}{R} \frac{d}{d r}\left(r^{2} \frac{d R}{d r}\right) = -\lambda
$$

角向方程：


$$
\frac{1}{\Theta \sin \theta} \frac{d}{d \theta}\left(\sin \theta \frac{d \Theta}{d \theta}\right) + \frac{1}{\Phi \sin^{2} \theta} \frac{d^{2} \Phi}{d \phi^{2}} = \lambda
$$

接下来着重分析角向方程。将角向方程两边乘以 $\sin^{2} \theta$：

$$
\frac{\sin \theta}{\Theta} \frac{d}{d \theta}\left(\sin \theta \frac{d \Theta}{d \theta}\right) + \frac{1}{\Phi} \frac{d^{2} \Phi}{d \phi^{2}} = \lambda \sin^{2} \theta
$$

左边第一项仅依赖于 $\theta$，第二项仅依赖于 $\phi$，右边依赖于 $\theta$，因此将方程分解为：

令：

$$
\frac{1}{\Phi} \frac{d^{2} \Phi}{d \phi^{2}} = -m^{2}
$$

其中 $m^{2}$ 是分离常数，于是得到：

关于 $\Phi$ 的方程：

$$
\frac{d^{2} \Phi}{d \phi^{2}} + m^{2} \Phi = 0
$$

其通解为：

$$
\Phi(\phi) = A_{m} e^{i m \phi} + B_{m} e^{-i m \phi}
$$

由于解在 $\phi$ 方向上具有周期性（物理问题中当 $\phi$ 变化 $2\pi$ 时解应保持不变），所以 $m$ 必须是整数，即 $m = 0, \pm 1, \pm 2, \ldots$。

将方程代入原角向方程，得到关于 $\Theta$ 的方程：

$$
\frac{1}{\sin \theta} \frac{d}{d \theta}\left(\sin \theta \frac{d \Theta}{d \theta}\right) + \left[ \lambda - \frac{m^{2}}{\sin^{2} \theta} \right] \Theta = 0
$$

进行变量替换 $x = \cos \theta$，则 $\theta \in [0, \pi]$，$x \in [-1, 1]$，且 $dx = -\sin \theta d\theta$，即 \
