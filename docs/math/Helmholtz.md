
Helmholtz方程的推导基于波动方程，通过假设解具有分离变量的形式，将空间部分和时间部分分开。
### 推导过程：
#### 1. 从波动方程开始
波动方程的基本形式为：
$$
\nabla^2 u = \frac{1}{v^2} \frac{\partial^2 u}{\partial t^2}
$$
其中，$u$ 是场量，$v$ 是波速。
#### 2. 假设解为分离变量形式
假设解可以表示为：
$$
u(\mathbf{r}, t) = A(\mathbf{r}) T(t)
$$
其中，$A(\mathbf{r})$ 是空间部分，$T(t)$ 是时间部分。
#### 3. 代入波动方程
将分离变量形式的解代入波动方程：
$$
\nabla^2 (A(\mathbf{r}) T(t)) = \frac{1}{v^2} \frac{\partial^2}{\partial t^2} (A(\mathbf{r}) T(t))
$$
化简后得到：
$$
T(t) \cdot \nabla^2 A(\mathbf{r}) = \frac{A(\mathbf{r})}{v^2} \cdot T''(t)
$$
将两边同时除以 $A(\mathbf{r}) T(t)$，得到：
$$
\frac{\nabla^2 A(\mathbf{r})}{A(\mathbf{r})} = \frac{1}{v^2} \frac{T''(t)}{T(t)}
$$
#### 4. 分离变量
由于左边仅与空间变量相关，右边仅与时间变量相关，因此两边必须等于一个常数。设该常数为 $-k^2$，则：
$$
\frac{\nabla^2 A(\mathbf{r})}{A(\mathbf{r})} = -k^2 \quad \text{和} \quad \frac{1}{v^2} \frac{T''(t)}{T(t)} = -k^2
$$
#### 5. 得到Helmholtz方程
从空间部分的方程可以得到：
$$
\nabla^2 A(\mathbf{r}) + k^2 A(\mathbf{r}) = 0
$$
这即为Helmholtz方程，其中 $k$ 是波数，定义为 $k = \frac{\omega}{v}$，$\omega$ 是角频率。
时间部分的方程为：
$$
T''(t) + k^2 v^2 T(t) = 0
$$
其解为简谐函数，如：
$$
T(t) = C \cos(kvt) + D \sin(kvt)
$$
### 在电磁学中的推广
在电磁学中，对于时谐场，电场 $\mathbf{E}$ 和磁场 $\mathbf{B}$ 满足麦克斯韦方程组。假设时谐场形式：
$$
\mathbf{E}(\mathbf{r}, t) = \mathbf{E}_0(\mathbf{r}) e^{-i \omega t}, \quad \mathbf{B}(\mathbf{r}, t) = \mathbf{B}_0(\mathbf{r}) e^{-i \omega t}
$$
代入麦克斯韦方程组后，可以推导出电场 $\mathbf{E}_0$ 满足：
$$
\nabla^2 \mathbf{E}_0 + k^2 \mathbf{E}_0 = 0
$$
其中 $k = \frac{\omega}{c}$，$c$ 是波速。
### 总结
Helmholtz方程描述了波动方程在特定频率下的稳态空间分布，其推导基于波动方程和分离变量的假设。
#### 参考信息：
1. 维基百科关于Helmholtz方程的介绍。
2. 知乎专栏关于波动方程到Helmholtz方程的推导文章。 
