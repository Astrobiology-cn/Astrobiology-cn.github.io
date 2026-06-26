---
icon: chart-line
title: 线性回归
order: 1
---

# 线性回归

## 简单线性回归

### 模型定义

$$
y = \beta_0 + \beta_1 x + \varepsilon
$$

其中 $\beta_0$ 为截距，$\beta_1$ 为斜率，$\varepsilon$ 为误差项。

### 最小二乘估计

通过最小化残差平方和（RSS）来估计参数：

$$
\text{RSS} = \sum_{i=1}^n (y_i - \hat{y}_i)^2 = \sum_{i=1}^n (y_i - \beta_0 - \beta_1 x_i)^2
$$

### 参数估计公式

$$
\hat{\beta}_1 = \frac{\sum_{i=1}^n (x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^n (x_i - \bar{x})^2}
$$

$$
\hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x}
$$

## 多元线性回归

### 模型定义

$$
\mathbf{y} = \mathbf{X}\boldsymbol{\beta} + \boldsymbol{\varepsilon}
$$

### 最小二乘解

$$
\hat{\boldsymbol{\beta}} = (\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T\mathbf{y}
$$

## 模型评估

### 决定系数 $R^2$

$$
R^2 = 1 - \frac{\text{SS}_{\text{res}}}{\text{SS}_{\text{tot}}} = 1 - \frac{\sum_{i}(y_i - \hat{y}_i)^2}{\sum_{i}(y_i - \bar{y})^2}
$$

### 应用实例：行星密度-半径关系

```python
import numpy as np
from sklearn.linear_model import LinearRegression

# 示例：行星密度与半径的幂律关系
# 实际应用中应使用真实的行星数据
log_radius = np.array([0.3, 0.5, 0.8, 1.0, 1.2]).reshape(-1, 1)
log_density = np.array([0.9, 0.7, 0.4, 0.0, -0.3])

model = LinearRegression()
model.fit(log_radius, log_density)

print(f"斜率: {model.coef_[0]:.3f}")
print(f"截距: {model.intercept_:.3f}")
```

## 正则化方法

### 岭回归（L2 正则化）

$$
\hat{\boldsymbol{\beta}} = \arg\min_{\boldsymbol{\beta}} \left\{ \|\mathbf{y} - \mathbf{X}\boldsymbol{\beta}\|^2 + \lambda \|\boldsymbol{\beta}\|^2 \right\}
$$

### LASSO（L1 正则化）

$$
\hat{\boldsymbol{\beta}} = \arg\min_{\boldsymbol{\beta}} \left\{ \|\mathbf{y} - \mathbf{X}\boldsymbol{\beta}\|^2 + \lambda \|\boldsymbol{\beta}\|_1 \right\}
$$
